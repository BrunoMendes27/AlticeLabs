import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherCondition } from '../../models/form.model';
import { WeatherService } from '../../services/weather.service';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DatePipe } from '@angular/common';
import { NetworkStatusDirective } from '../directives/network-status.directive';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [NzCardModule, NzGridModule, DatePipe, NetworkStatusDirective],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss',
})
export class DetailsPageComponent {
  cardTitle = 'Information';
  id!: string;
  weatherDetails?: WeatherCondition;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly weatherService: WeatherService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.weatherService
        .getWeatherDetails(this.id)
        .subscribe((item) => (this.weatherDetails = item));
    });
  }
}
