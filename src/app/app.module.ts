import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeSelectionModule } from './modules/time-selection/time-selection.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimeSelectionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
