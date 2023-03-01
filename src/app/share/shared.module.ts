import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './ui/components/checkbox/checkbox.component';
import { CheckComponent } from './ui/components/icons/check/check.component';
import { MenuComponent } from './ui/components/icons/menu/menu.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { CardComponent } from './ui/components/card/card.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    CheckComponent,
    MenuComponent,
    AutofocusDirective,
    CardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    CheckComponent,
    MenuComponent,
    AutofocusDirective,
    CardComponent,
  ],
})
export class SharedModule {}
