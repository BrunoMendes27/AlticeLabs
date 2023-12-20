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
import { WeatherHandler } from './handlers/weather.handler';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiUrl =
    'https://crudcrud.com/api/68bdc8025154480da9e3d08c3a27f3a5/weather';
  private weatherData = new BehaviorSubject<WeatherCondition[]>([]);

  constructor(
    private readonly http: HttpClient,
    private readonly weatherHandler: WeatherHandler
  ) {
    this.getData()
      .pipe(take(1))
      .subscribe((item) => this.weatherData.next(item));
  }

  submitForm(weatherCondtion: FormGroup<FormItems>): Observable<boolean> {
    const weatherData =
      this.weatherHandler.getWeatherCondition(weatherCondtion);

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
