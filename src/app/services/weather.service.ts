import { Injectable } from '@angular/core';
import { FormItems, WeatherCondition } from '../models/form.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  take,
  tap,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiUrl =
    'https://crudcrud.com/api/3699a209aca54886913baed29e3a2c53/weather';
  private weatherData = new BehaviorSubject<WeatherCondition[]>([]);

  constructor(private readonly http: HttpClient) {
    this.getData()
      .pipe(take(1))
      .subscribe((item) => this.weatherData.next(item));
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

    return this.http.post<WeatherCondition>(this.apiUrl, weatherData).pipe(
      tap(() =>
        this.getData().subscribe((item) => this.weatherData.next(item))
      ),
      map((item) => item != null),
      catchError(() => of(false))
    );
  }

  getWeatherDetails(id: string): Observable<WeatherCondition> {
    return this.http.get<WeatherCondition>(this.getWeatherDetailsUrl(id));
  }

  getWeatherData(): Observable<WeatherCondition[]> {
    return this.weatherData.asObservable();
  }

  private getData(): Observable<WeatherCondition[]> {
    return this.http.get<WeatherCondition[]>(this.apiUrl);
  }

  private getWeatherDetailsUrl(id: string): string {
    return `${this.apiUrl}/${id}`;
  }
}
