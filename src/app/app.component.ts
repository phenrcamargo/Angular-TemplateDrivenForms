import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../domain/entities/user.entity';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: UserEntity[] = [];
  userSelected: UserEntity = { } as UserEntity;
  userSelectedIndex: number = 0;

  constructor(
    private readonly _userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userService.getUsers().subscribe((users) => {
      this.usersList = users;
    });
  }

  selectUser(userIndex: number): void {
    const userFound = this.usersList[userIndex];

    if (userFound) {
      this.userSelected = UserEntity.create(userFound);
      this.userSelectedIndex = userIndex;
    }
  }

}
