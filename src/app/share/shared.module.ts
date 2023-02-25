import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/components/button/button.component';
// import { CheckboxComponent } from './ui/components/checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './ui/components/checkbox/checkbox.component';
import { CheckComponent } from './ui/components/icons/check/check.component';

@NgModule({
  declarations: [ButtonComponent, CheckboxComponent, CheckComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ButtonComponent, CheckboxComponent, CheckComponent],
})
export class SharedModule {}
