import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherCondition } from '../../models/form.model';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'city-table',
  standalone: true,
  imports: [
    NzTableModule,
    CommonModule,
    NzIconModule,
    NzButtonModule,
    RouterModule,
  ],
  templateUrl: './city-table.component.html',
  styleUrl: './city-table.component.scss',
})
export class CityTableComponent implements OnInit {
  data: WeatherCondition[] = [];

  constructor(
    private readonly weatherService: WeatherService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((item) => {
      this.data = [...item];
      console.log('tabela', item);
    });
  }

  onClick(id: string | undefined) {
    console.log(id);
    this.router.navigateByUrl(`details/${id}`);
  }
}
