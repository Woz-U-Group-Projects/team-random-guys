import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TimeSelection } from '../../../shared/models/time-selection';

@Injectable({
  providedIn: 'root'
})
export class TimeSelectionService {

  constructor() { }


  calendars = [];
 
  addCalendar(cal){    
    this.calendars.push(cal);
  }


  calculate() {
    let a = this.calendars[0];    
    for(let cal of this.calendars){
      for(let day of cal){
        for(let days of day.days){          
          console.log(day.day, days.hour);
          if(days.selected)
          {
            let result = a.filter(x => x.day == day.day)[0].days.filter(y => y.hour == days.hour)[0];
            result.canAttend+=1;
          }
        }
      }
    }
    console.log(a);
  }


  timeSelection: TimeSelection[] = [
    {
      hour: 1,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 2,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 3,
      peopleTotal: 7,
      canAttend: 4
    },
    {
      hour: 4,
      peopleTotal: 7,
      canAttend: 2
    },
    {
      hour: 5,
      peopleTotal: 7,
      canAttend: 3
    },
    {
      hour: 6,
      peopleTotal: 7,
      canAttend: 7
    },
    {
      hour: 7,
      peopleTotal: 7,
      canAttend: 5
    },
    {
      hour: 8,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 9,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 10,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 11,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 12,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 13,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 14,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 15,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 16,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 17,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 18,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 19,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 20,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 21,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 22,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 23,
      peopleTotal: 7,
      canAttend: 0
    },
    {
      hour: 24,
      peopleTotal: 7,
      canAttend: 0
    },

  ]

  getTimes = (): Observable<TimeSelection[]> => {
    return of(this.timeSelection);
  };

  updateAttendance(hour) {
    for(let t of this.timeSelection){
      if(t.hour == hour){
        t.canAttend++;
        
      }
    }
  }

}
