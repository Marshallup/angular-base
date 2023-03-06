import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { SharedModule } from 'src/app/share/shared.module';
import { TaskItemComponent } from './components/task/task-item/task-item.component';
import { TaskListComponent } from './components/task/task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskItemCreateComponent } from './components/task/task-item-create/task-item-create.component';
// import { TestDirective } from '../../directives/test.directive';

@NgModule({
  declarations: [
    MainComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskItemCreateComponent,
    // TestDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class MainModule {}
