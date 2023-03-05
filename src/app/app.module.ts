import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from './share/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { TaskTypesComponent } from './components/task-types/task-types.component';
import { TaskTypesListComponent } from './components/task-types-list/task-types-list.component';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DefaultLayoutComponent,
    SidebarComponent,
    TaskTypesComponent,
    TaskTypesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, { metaReducers }),
    // isDevMode() ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
