import { Component } from '@angular/core';
import { CityTableComponent } from '../city-table/city-table.component';
import { FormWeatherComponent } from '../form-weather/form-weather.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [FormWeatherComponent, CityTableComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {}
