import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../domain/entities/user.entity';
import { UserService } from './services/user.service';
import { UserDTO } from './dto/user.dto';
import { UserDTOHandler } from './handler/user_dto.handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: UserEntity[] = [];
  userSelected: UserDTO = { } as UserDTO;
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
      this.userSelected = UserDTOHandler.convertToUserDTO(userFound);
      this.userSelectedIndex = userIndex;
    }
  }

}
