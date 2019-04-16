import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSelectionComponent } from './components/time-selection/time-selection.component';
import { ColorCodedGraphComponent } from './components/color-coded-graph/color-coded-graph.component';

import { TimeSelectionService } from './services/time-selection.service';

@NgModule({
  declarations: [TimeSelectionComponent, ColorCodedGraphComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TimeSelectionComponent, ColorCodedGraphComponent
  ],
  providers: [TimeSelectionService]
})
export class TimeSelectionModule { }
