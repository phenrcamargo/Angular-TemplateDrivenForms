import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import zxcvbn from 'zxcvbn';

@Directive({
  selector: '[passwordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true
    }
  ]
})
export class PasswordStrengthDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {

    if(!control.value || control.value == "") {
      return null;
    }

    const result = zxcvbn(control.value);

    return result.score < 4 ? { 'passwordNotStrength': true } : null;
  }

}
