import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCheckboxModule,
  ],
  providers: [provideNativeDateAdapter()],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCheckboxModule,
  ],
})
export class AngularMaterialModule {}
