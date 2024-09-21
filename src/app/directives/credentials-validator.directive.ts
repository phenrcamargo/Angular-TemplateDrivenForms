import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersPlaceholderService } from '../services/user-placeholder.service';
import { CredentialsValidateENUM } from '../enum/credentials_validate.enum';

@Directive({
  selector: '[credentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true
    }
  ]
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('credentialsValidator') credentialsValidator!: CredentialsValidateENUM;

  constructor(
    private readonly _service: UsersPlaceholderService,
  ) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const credentialAttribute: 'username' | 'email' = this.credentialAttribute(this.credentialsValidator);

    return this._service.getUsersPlaceholder().pipe(
      map((usersList) => {
        const hasUser = usersList.find((user) => user[credentialAttribute].toLowerCase() === control.value.trim().toLowerCase())

        return !hasUser ? null : { [this.credentialsValidator]: true };
      })

    );

  }

  credentialAttribute(enumValue: CredentialsValidateENUM): 'username' | 'email' {
    switch(enumValue) {
      case CredentialsValidateENUM.Username:
        return 'username';
      case CredentialsValidateENUM.Email:
        return 'email';
    }
  }

}
