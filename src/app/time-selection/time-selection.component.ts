import { Component, OnInit } from '@angular/core';
import { defaultKeyValueDiffers } from '@angular/core/src/change_detection/change_detection';

@Component({
  selector: 'app-time-selection',
  templateUrl: './time-selection.component.html',
  styleUrls: ['./time-selection.component.scss']
})

  export class TimeSelectionComponent implements OnInit {

    ngOnInit(){
      for(let day of this.week){
        day.days = this.days.map(x => Object.assign({},x));
      }
    }

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
      { hour: "12 A.M.", selected: false },
      { hour: "1 A.M.", selected: false },
      { hour: "2 A.M.", selected: false },
      { hour: "3 A.M.", selected: false },
      { hour: "4 A.M.", selected: false },
      { hour: "5 A.M.", selected: false },
      { hour: "6 A.M.", selected: false },
      { hour: "7 A.M.", selected: false },
      { hour: "8 A.M.", selected: false },
      { hour: "9 A.M.", selected: false },
      { hour: "10 A.M.", selected: false },
      { hour: "11 A.M.", selected: false },
      { hour: "12 P.M.", selected: false },
      { hour: "1 P.M.", selected: false },
      { hour: "2 P.M.", selected: false },
      { hour: "3 P.M.", selected: false },
      { hour: "4 P.M", selected: false },
      { hour: "5 P.M.", selected: false },
      { hour: "6 P.M.", selected: false },
      { hour: "7 P.M.", selected: false },
      { hour: "8 P.M.", selected: false },
      { hour: "9 P.M.", selected: false },
      { hour: "10 P.M.", selected: false },
      { hour: "11 P.M.", selected: false },

      
    ];


    toggleActive(day,hour){

      console.log(day,hour);

      let item = this.week.filter(x => x.day == day)[0]
      let item2 = item.days.filter(x => x.hour == hour)[0];
      
      item2.selected = !item2.selected;
    }
  
  
    name = 'Angular';
  }