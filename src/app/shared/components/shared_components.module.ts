import { NgModule } from "@angular/core";
import { PasswordStrengthBarComponent } from "./password-strength-bar/password-strength-bar.component";
import { AngularMaterialModule } from "../../angular-material.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    PasswordStrengthBarComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
  ],
  exports: [
    PasswordStrengthBarComponent,
  ],
})
export class SharedComponentsModule {}
