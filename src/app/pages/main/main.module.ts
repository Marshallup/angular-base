import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { SharedModule } from 'src/app/share/ui/shared/shared.module';
// import { TestDirective } from '../../directives/test.directive';



@NgModule({
  declarations: [
    MainComponent,
    // TestDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    DirectivesModule,
    SharedModule
  ]
})
export class MainModule { }
