import { Component, OnInit } from '@angular/core';

import { TimeSelection } from "../../../../shared/models/time-selection";
import { TimeSelectionService } from '../../services/time-selection.service';

@Component({
  selector: 'app-color-coded-graph',
  templateUrl: './color-coded-graph.component.html',
  styleUrls: ['./color-coded-graph.component.scss']
})
export class ColorCodedGraphComponent implements OnInit {
  timeSelection: TimeSelection[];
  dataService: TimeSelectionService;

  constructor(private timeSelectionService: TimeSelectionService) {
    this.dataService = this.timeSelectionService;
  }

  ngOnInit(): void {
    this.dataService.getTimes().subscribe(timeSelection => this.timeSelection = timeSelection);
  }

  percentage(canAttend, total) {
    return canAttend / total
  }

  colorCoded(percent) {
    var color: string = "";
    for(var i = 0; i < 12; i++) {
      if (percent >= 0.9) {
        return color = "green"
      } else if (percent >= 0.7) {
        return color = "yellow"
      } else if (percent >= 0.5) {
        return color = "red"
      } else {
        return color="white"
      }
    }
  }


}
