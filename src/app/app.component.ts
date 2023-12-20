import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { I18nService } from './services/i18n.service';
import { TranslateModule } from '@ngx-translate/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Timezone } from './models/timezone.enum';
import { TimezoneService } from './services/timezone.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzDropDownModule,
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  timezonesEnum = Timezone;

  constructor(
    private readonly i18nService: I18nService,
    private readonly timezoneService: TimezoneService
  ) {}

  changeLanguage() {
    this.i18nService.switchLanguage();
  }

  timezoneClicked(timezone: Timezone) {
    this.timezoneService.switchTimezone(timezone);
  }
}
