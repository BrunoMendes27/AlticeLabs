import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherCondition } from '../models/form.model';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'city-table',
  standalone: true,
  imports: [NzTableModule, CommonModule],
  templateUrl: './city-table.component.html',
  styleUrl: './city-table.component.scss',
})
export class CityTableComponent implements OnInit {
  data: WeatherCondition[] = [];

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((item) => {
      this.data = [...item];
      console.log('tabela', item);
    });
  }
}
