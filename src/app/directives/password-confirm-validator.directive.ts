import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[passwordConfirmValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmValidatorDirective,
      multi: true
    }
  ],
})
export class PasswordConfirmValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.value.confirmPassword) return null

    const confirmPasswordControl = control.get('confirmPassword');

    if (control.value.confirmPassword !== control.value.password) {
      confirmPasswordControl?.setErrors({ 'passwordsNotEqual': true });

      return { 'passwordsNotEqual': true };
    }

    return null;
  }
}
