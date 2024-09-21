import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import zxcvbn from 'zxcvbn';

@Component({
  selector: 'password-strength-bar',
  templateUrl: './password-strength-bar.component.html',
  styleUrl: './password-strength-bar.component.scss'
})
export class PasswordStrengthBarComponent implements OnChanges {

  strengthValue: number = 0;
  @Input({ required: true }) password: string = '';

  ngOnInit(): void {
    this.getPasswordStrength();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPasswordStrength();
  }

  getPasswordStrength() {
    if (!!this.password) {
      this.strengthValue = zxcvbn(this.password).score;
      return;
    }

    this.strengthValue = 0;
  }

  getProgressBarValue(): number {
    if (this.strengthValue == 0) {
      return 0;
    }

    if(this.strengthValue <= 1) {
      return 30
    }

    if(this.strengthValue <= 3) {
      return 60
    }

    if(this.strengthValue >= 4) {
      return 100
    }

    return 0;
  }
}
