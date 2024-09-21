import { NgModule } from "@angular/core";
import { EmailValidatorDirective } from './email-validator.directive';
import { CredentialsValidatorDirective } from './credentials-validator.directive';
import { PasswordStrengthDirective } from './password-strength.directive';
import { PasswordConfirmValidatorDirective } from './password-confirm-validator.directive';

@NgModule({
  declarations: [
    EmailValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrengthDirective,
    PasswordConfirmValidatorDirective,
  ],
  exports: [
    EmailValidatorDirective,
    CredentialsValidatorDirective,
    PasswordStrengthDirective,
    PasswordConfirmValidatorDirective,
  ],
})
export class DirectivesModule {}
