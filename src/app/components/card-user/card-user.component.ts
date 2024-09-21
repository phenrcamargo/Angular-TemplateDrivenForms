import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserEntity } from '../../../domain/entities/user.entity';

@Component({
  selector: 'card-user-component',
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.scss'
})
export class CardUserComponent {
  @Input("users") userList: UserEntity[] = [];
  @Output("onUserSelected") userEmitter = new EventEmitter<number>();

  selectUser(userIndex: number) {
    this.userEmitter.emit(userIndex);
  }

}
