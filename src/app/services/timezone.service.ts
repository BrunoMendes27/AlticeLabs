import 'dayjs/locale/pt';
import 'dayjs/locale/en';
import * as dayjs from 'dayjs';

export class TimezoneService {
  timezoneLocale = 'en';

  setInitialTimezoneLocale() {
    dayjs.locale(this.timezoneLocale);
  }

  changeTimezoneLocale() {
    this.timezoneLocale = this.timezoneLocale === 'en' ? 'pt' : 'en';
    dayjs.locale(this.timezoneLocale);
  }
}
