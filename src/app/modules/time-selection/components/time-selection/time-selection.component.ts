import { Component, OnInit } from '@angular/core';
import { defaultKeyValueDiffers } from '@angular/core/src/change_detection/change_detection';

import { TimeSelection } from "../../../../shared/models/time-selection";
import { TimeSelectionService } from '../../services/time-selection.service';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})

export class TimeSelectionComponent implements OnInit {
  timeSelection: TimeSelection[];
  dataService: TimeSelectionService;

  week = [
    { day: "Monday", days:[]},
    { day: "Tuesday", days:[]},
    { day: "Wednesday", days:[]},
    { day: "Thursday", days:[]},
    { day: "Friday", days:[]},
    { day: "Saturday", days:[]},
    { day: "Sunday", days:[]}
  ]

  days = [
    { hour: "12 A.M.", selected: false, canAttend:0 },
    { hour: "1 A.M.", selected: false, canAttend:0 },
    { hour: "2 A.M.", selected: false , canAttend:0},
    { hour: "3 A.M.", selected: false , canAttend:0},
    { hour: "4 A.M.", selected: false , canAttend:0},
    { hour: "5 A.M.", selected: false , canAttend:0},
    { hour: "6 A.M.", selected: false , canAttend:0},
    { hour: "7 A.M.", selected: false , canAttend:0},
    { hour: "8 A.M.", selected: false , canAttend:0},
    { hour: "9 A.M.", selected: false , canAttend:0},
    { hour: "10 A.M.", selected: false , canAttend:0},
    { hour: "11 A.M.", selected: false , canAttend:0},
    { hour: "12 P.M.", selected: false , canAttend:0},
    { hour: "1 P.M.", selected: false , canAttend:0},
    { hour: "2 P.M.", selected: false , canAttend:0},
    { hour: "3 P.M.", selected: false , canAttend:0},
    { hour: "4 P.M", selected: false , canAttend:0},
    { hour: "5 P.M.", selected: false , canAttend:0},
    { hour: "6 P.M.", selected: false , canAttend:0},
    { hour: "7 P.M.", selected: false , canAttend:0},
    { hour: "8 P.M.", selected: false , canAttend:0},
    { hour: "9 P.M.", selected: false , canAttend:0},
    { hour: "10 P.M.", selected: false , canAttend:0},
    { hour: "11 P.M.", selected: false , canAttend:0},
  ];

  constructor(private timeSelectionService: TimeSelectionService) {
    this.dataService = this.timeSelectionService;
  }

  ngOnInit() {
    this.dataService.getTimes().subscribe(timeSelection => this.timeSelection = timeSelection);
    this.dataService.updateAttendance(this.timeSelection);
    for(let day of this.week){
      day.days = this.days.map(x => Object.assign({},x));
    }
  }

  save() {
    this.dataService.addCalendar(this.week);
    this.dataService.calculate();
  }

  attend(hour){
    this.dataService.updateAttendance(hour);
  }

  toggleActive(day,hour){

    console.log(day,hour);

    let item = this.week.filter(x => x.day == day)[0]
    let item2 = item.days.filter(x => x.hour == hour)[0];
    
    item2.selected = !item2.selected;
  }

}