import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { TimeSelectionModule } from './modules/time-selection/time-selection.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimeSelectionModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
