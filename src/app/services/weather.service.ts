import { Injectable } from '@angular/core';
import { FormItems, WeatherCondition } from '../models/form.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private weatherData = new BehaviorSubject<WeatherCondition[]>([]);

  constructor(private readonly http: HttpClient) {
    this.getData().subscribe((item) => this.weatherData.next(item));
  }

  submitForm(weatherCondtion: FormGroup<FormItems>): Observable<boolean> {
    const weatherData: WeatherCondition = {
      city: weatherCondtion.controls.city.value,
      temperature: weatherCondtion.controls.temperature.value,
      rainingStatus: weatherCondtion.controls.rainingStatus.value,
      date: weatherCondtion.controls.date.value,
      networkPower: weatherCondtion.controls.networkPower.value,
      altitude: weatherCondtion.controls.altitude.value,
    };
    console.log('service', weatherData);
    return this.http
      .post<WeatherCondition>(
        'https://crudcrud.com/api/d7d0ad4c19c341578b9b272ee2d0d278/weather',
        weatherData
      )
      .pipe(
        tap(() =>
          this.getData().subscribe((item) => this.weatherData.next(item))
        ),
        map((item) => item != null),
        catchError(() => of(false))
      );
  }

  getWeatherData(): Observable<WeatherCondition[]> {
    return this.weatherData.asObservable();
  }

  private getData(): Observable<WeatherCondition[]> {
    return this.http.get<WeatherCondition[]>(
      'https://crudcrud.com/api/d7d0ad4c19c341578b9b272ee2d0d278/weather'
    );
  }
}
