import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }
