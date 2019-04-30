import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { TimeSelectionModule } from './modules/time-selection/time-selection.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

<<<<<<< HEAD
=======

import { AppComponent } from './app.component';

>>>>>>> 61c0e5531e45d1c36f4fa80971b8d4b62c3f7ca4
@NgModule({
  declarations: [
    AppComponent
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
