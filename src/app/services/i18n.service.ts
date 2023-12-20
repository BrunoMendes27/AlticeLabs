import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, en_US, pt_PT } from 'ng-zorro-antd/i18n';
import { BehaviorSubject, Observable } from 'rxjs';

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
    this.setLocale();
    this.setLanguage();
  }

  setTemperatureUnit(lang: string) {
    if (lang === 'en') {
      this.temperatureUnit.next('ºF');
    } else {
      this.temperatureUnit.next('ºC');
    }
  }

  getTemperatureUnit(): Observable<string> {
    return this.temperatureUnit.asObservable();
  }

  private setLocale() {
    const locale = this.i18n.getLocale() == en_US ? pt_PT : en_US;
    this.i18n.setLocale(locale);
  }

  private setLanguage() {
    const language = this.translate.currentLang == 'en' ? 'pt' : 'en';
    this.translate.use(language);
    this.setTemperatureUnit(language);
  }
}
