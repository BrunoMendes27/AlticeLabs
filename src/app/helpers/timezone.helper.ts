import { Dayjs, extend, tz } from 'dayjs';
import timezonePlugin from 'dayjs/plugin/timezone';
import utcPlugin from 'dayjs/plugin/utc';

extend(utcPlugin);
extend(timezonePlugin);

export class DayjsDates {
  static setDefaultTimezone(timezone: string): void {
    tz.setDefault(timezone);
  }

  static create(date?: Dayjs | string): Dayjs {
    return date ? tz(date) : tz();
  }

  static lastSevenDays(): [Dayjs, Dayjs] {
    return [
      this.create().add(-7, 'days').startOf('day'),
      this.create().endOf('day'),
    ];
  }

  static last4Days(): [Dayjs, Dayjs] {
    return [
      this.create().add(-4, 'days').startOf('day'),
      this.create().endOf('day'),
    ];
  }

  static addDays(date: Dayjs, days: number): Dayjs {
    return date.add(days, 'days');
  }

  static isBefore(dateLeft: Dayjs, dateRight: Dayjs): boolean {
    return dateLeft.isBefore(dateRight);
  }

  static isAfter(dateLeft: Dayjs, dateRight: Dayjs): boolean {
    return dateLeft.isAfter(dateRight);
  }

  static isEqual(dateLeft: Dayjs, dateRight: Dayjs): boolean {
    return dateLeft.isSame(dateRight);
  }
}
