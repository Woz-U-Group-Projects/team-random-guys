import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorCodedGraphComponent } from './color-coded-graph/color-coded-graph.component';
import { TimeSelectionComponent } from './time-selection/time-selection.component';



@NgModule({
  declarations: [
    AppComponent,
    ColorCodedGraphComponent,
    TimeSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
