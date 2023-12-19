import { Component } from '@angular/core';
import { CityTableComponent } from '../city-table/city-table.component';
import { FormWeatherComponent } from '../form-weather/form-weather.component';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { WeatherCondition } from '../../models/form.model';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [FormWeatherComponent, CityTableComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {}
