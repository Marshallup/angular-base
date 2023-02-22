import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SharedModule } from './share/ui/shared/shared.module';
// import { CheckboxComponent } from './share/ui/components/checkbox/checkbox.component';
// import { TestDirective } from './directives/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultLayoutComponent,
    // TestDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
