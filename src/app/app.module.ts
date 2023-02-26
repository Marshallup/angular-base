import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from './share/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultLayoutComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
