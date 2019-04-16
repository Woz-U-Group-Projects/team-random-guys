import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TimeSelection } from '../../../shared/models/time-selection';

@Injectable({
  providedIn: 'root'
})
export class TimeSelectionService {
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
    }
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

  constructor() { }
}
