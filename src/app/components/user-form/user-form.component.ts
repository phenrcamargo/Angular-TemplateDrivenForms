import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CredentialsValidateENUM } from '../../enum/credentials_validate.enum';
import { UserDTO } from '../../dto/user.dto';
import ConvertPtbrDateToDateObject from '../../shared/utils/convert-ptbr-date-to-date-object.util';
import ConvertDateObjectToPtbrDate from '../../shared/utils/convert-date-object-to-ptbr-date.util';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges{
  @Input() userSelected: UserDTO = {} as UserDTO;
  credentialsValidateEnum = CredentialsValidateENUM;

  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  ngOnInit(): void {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if(this.userSelected) {
      this.setBirthdayToDatepicker();
    }

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
}
