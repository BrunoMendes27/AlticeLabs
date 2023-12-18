import { Component } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormItems } from '../models/form.model';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzI18nService, en_US, pt_PT } from 'ng-zorro-antd/i18n';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather-form',
  standalone: true,
  imports: [
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzButtonModule,
    NzSliderModule,
  ],
  templateUrl: './form-weather.component.html',
  styleUrl: './form-weather.component.scss',
})
export class FormWeatherComponent {
  validateForm: FormGroup<FormItems>;

  constructor(
    private readonly form: NonNullableFormBuilder,
    private readonly i18n: NzI18nService,
    private readonly weatherService: WeatherService
  ) {
    this.i18n.setLocale(en_US);

    this.validateForm = this.form.group({
      city: ['', [Validators.required]],
      temperature: [0, [Validators.required]],
      rainingStatus: ['', [Validators.required]],
      date: [new Date(), [Validators.required]],
      networkPower: [1, [Validators.required]],
      altitude: [0.0, [Validators.required]],
    });
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.weatherService.submitForm(this.validateForm).subscribe();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
