import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherCondition } from '../../models/form.model';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router, RouterModule } from '@angular/router';
import { TimezoneService } from '../../services/timezone.service';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n.service';
import { NetworkStatusDirective } from '../../details/directives/network-status.directive';

@Component({
  selector: 'city-table',
  standalone: true,
  imports: [
    NzTableModule,
    CommonModule,
    NzIconModule,
    NzButtonModule,
    RouterModule,
    TranslateModule,
    NetworkStatusDirective,
    AsyncPipe,
  ],
  templateUrl: './city-table.component.html',
  styleUrl: './city-table.component.scss',
})
export class CityTableComponent implements OnInit {
  data: WeatherCondition[] = [];
  timezone = '';
  temperatureUnit$ = this.i18nService.getTemperatureUnit();

  constructor(
    private readonly weatherService: WeatherService,
    private readonly router: Router,
    private readonly timezoneService: TimezoneService,
    private readonly i18nService: I18nService
  ) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((item) => {
      this.data = [...item];
    });

    this.timezoneService.getTimeZone().subscribe((item) => {
      this.timezone = item;
    });
  }

  onClick(id: string | undefined) {
    this.router.navigateByUrl(`details/${id}`);
  }
}
