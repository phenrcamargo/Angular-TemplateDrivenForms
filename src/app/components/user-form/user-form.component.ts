import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CredentialsValidateENUM } from '../../enum/credentials_validate.enum';
import { UserDTO } from '../../dto/user.dto';
import ConvertPtbrDateToDateObject from '../../shared/utils/convert-ptbr-date-to-date-object.util';
import ConvertDateObjectToPtbrDate from '../../shared/utils/convert-date-object-to-ptbr-date.util';
import { GenresVO } from '../../../domain/value-objects/genres.vo';
import { GenresService } from '../../services/genres.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges{
  @Input() userSelected: UserDTO = {} as UserDTO;

  genreList: GenresVO[] = [];
  filteredGenreList: GenresVO[] = [];

  credentialsValidateEnum = CredentialsValidateENUM;
  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];

  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  constructor(
    private readonly _genresService: GenresService,
    private readonly _elRef: ElementRef
  ){}

  ngOnInit(): void {
    this.setMinAndMaxDate();
    this.getGenreList();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(this.userSelected) {
      this.setBirthdayToDatepicker();
    }

    this.filteredGenreList = [...this.genreList];
  }

  getGenreList() {
    this._genresService.getGenres().subscribe((list) => {
      this.genreList = [...list];
      this.filteredGenreList = [...list];
    });
  }

  displayFn(genreId: number): string {
    const genre = this.genreList.find((genre) => genre.id ==  genreId);

    return !!genre ? genre.description : '';
  }

  filterGenres(genreDesc: string) {
    if('string' === typeof genreDesc) {
      this.filteredGenreList = this.genreList.filter((genre) => genre.description.toLowerCase().includes(genreDesc.toLowerCase()));
    }
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some((music) => music.isFavorite);
  }

  setMinAndMaxDate() {
    this.minDate = new Date(1900, 0, 1);
    this.maxDate = new Date(
      new Date().getFullYear() - 16,
      new Date().getMonth(),
      new Date().getDate()
    );
  }

  setDateValueOnUserSelected(date: Date) {
    const stringDate = ConvertDateObjectToPtbrDate(date);
    console.log(stringDate);
    this.userSelected = {
      ...this.userSelected,
      birthDate: stringDate
    };
  }

  private setBirthdayToDatepicker() {
    if(this.userSelected.birthDate) {
      const date: Date = ConvertPtbrDateToDateObject(this.userSelected.birthDate);
      this.dateValue = date;
    }
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {
      this.focusOnInvalidField(form);

      return
    }
  }

  focusOnInvalidField(form: NgForm) {
    for(const control of Object.keys(form.controls)) {
      if(form.controls[control].invalid) {
        const el: HTMLElement = this._elRef.nativeElement.querySelector(`[name=${control}]`);

        el.focus()
        break;
      }
    }
  }
}
