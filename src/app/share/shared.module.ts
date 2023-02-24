import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/components/button/button.component';
import { CheckboxComponent } from './ui/components/checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxNComponent } from './ui/components/checkbox-n/checkbox-n.component';

@NgModule({
  declarations: [ButtonComponent, CheckboxComponent, CheckboxNComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ButtonComponent, CheckboxComponent, CheckboxNComponent],
})
export class SharedModule {}
