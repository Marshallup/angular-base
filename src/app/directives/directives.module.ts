import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test/test.directive';
import { DuplicateContentDirective } from './duplicate-content.directive';


@NgModule({
  declarations: [
    TestDirective,
    DuplicateContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestDirective,
    DuplicateContentDirective
  ]
})
export class DirectivesModule { }
