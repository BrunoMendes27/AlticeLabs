import { Injectable } from '@angular/core';
import { Timezone } from '../models/timezone.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TimezoneService {
  timezone = new BehaviorSubject<string>('UTC +0');

  switchTimezone(timezone: Timezone) {
    switch (timezone) {
      case Timezone.utcThree:
        this.timezone.next('UTC +3');
        break;
      case Timezone.utcZero:
      default:
        this.timezone.next('UTC +0');
        break;
    }
  }

  getTimeZone(): Observable<string> {
    return this.timezone.asObservable();
  }
}
