import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, en_US, pt_PT } from 'ng-zorro-antd/i18n';
import { BehaviorSubject, Observable } from 'rxjs';
import dayjs from 'dayjs';

@Injectable({ providedIn: 'root' })
export class I18nService {
  temperatureUnit = new BehaviorSubject<string>('ºF');
  timezone = 'UTC +1';

  constructor(
    private i18n: NzI18nService,
    private readonly translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  switchLanguage() {
    let locale = this.i18n.getLocale() == en_US ? pt_PT : en_US;
    let language = this.translate.currentLang == 'en' ? 'pt' : 'en';
    console.log(locale);
    this.i18n.setLocale(locale);
    console.log('lingua', language);
    this.translate.use(language);

    if (language === 'en') {
      this.temperatureUnit.next('ºF');
    } else {
      this.temperatureUnit.next('ºC');
    }
  }

  getTemperatureUnit(): Observable<string> {
    return this.temperatureUnit.asObservable();
  }

  getTimezone() {
    return this.timezone;
  }
}
