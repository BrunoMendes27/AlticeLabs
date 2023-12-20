import { FormGroup } from '@angular/forms';
import { FormItems, WeatherCondition } from '../../models/form.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherHandler {
  getWeatherCondition(formItems: FormGroup<FormItems>): WeatherCondition {
    return {
      city: formItems.controls.city.value,
      temperature: formItems.controls.temperature.value,
      rainingStatus: formItems.controls.rainingStatus.value,
      date: formItems.controls.date.value,
      networkPower: formItems.controls.networkPower.value,
      altitude: formItems.controls.altitude.value,
    };
  }
}
