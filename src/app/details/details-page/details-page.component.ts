import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherCondition } from '../../models/form.model';
import { WeatherService } from '../../services/weather.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AsyncPipe, DatePipe } from '@angular/common';
import { NetworkStatusDirective } from '../directives/network-status.directive';
import { TranslateModule } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    NzCardModule,
    NzGridModule,
    DatePipe,
    NetworkStatusDirective,
    TranslateModule,
    AsyncPipe,
  ],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent implements OnInit {
  id!: string;
  weatherDetails?: WeatherCondition;
  temperatureUnit$!: Observable<string>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly weatherService: WeatherService,
    private readonly i18nService: I18nService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.weatherService
        .getWeatherDetails(this.id)
        .subscribe((item) => (this.weatherDetails = item));
    });
  }

  ngOnInit(): void {
    this.temperatureUnit$ = this.i18nService.getTemperatureUnit();
  }
}
