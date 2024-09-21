import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularMaterialModule } from "../angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { DirectivesModule } from "../directives/directives.module";
import { CardUserComponent } from './card-user/card-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedComponentsModule } from "../shared/components/shared_components.module";

@NgModule({
  declarations: [
    CardUserComponent,
    UserFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularMaterialModule,
    PipesModule,
    DirectivesModule,
    SharedComponentsModule,
  ],
  exports: [
    CardUserComponent,
    UserFormComponent,
  ],
})
export class ComponentsModule {}
