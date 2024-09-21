import { Component, Input } from '@angular/core';
import { CredentialsValidateENUM } from '../../enum/credentials_validate.enum';
import { UserDTO } from '../../dto/user.dto';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  @Input() userSelected: UserDTO = {} as UserDTO;
  credentialsValidateEnum = CredentialsValidateENUM;
}
