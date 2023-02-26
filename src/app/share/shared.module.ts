import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './ui/components/checkbox/checkbox.component';
import { CheckComponent } from './ui/components/icons/check/check.component';
import { MenuComponent } from './ui/components/icons/menu/menu.component';
import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    CheckComponent,
    MenuComponent,
    AutofocusDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    CheckComponent,
    MenuComponent,
    AutofocusDirective,
  ],
})
export class SharedModule {}
