import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
// import { SharedModule } from './share/shared.module';
// import { TaskItemComponent } from './components/task/task-item/task-item.component';
// import { TaskListComponent } from './components/task/task-list/task-list.component';
// import { CheckboxComponent } from './share/ui/components/checkbox/checkbox.component';
// import { TestDirective } from './directives/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultLayoutComponent,
    // TaskItemComponent,
    // TaskListComponent,
    // TestDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [TaskItemComponent],
})
export class AppModule {}
