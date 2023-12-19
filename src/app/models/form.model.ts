import { FormControl } from '@angular/forms';

export interface FormItems {
  city: FormControl<string>;
  temperature: FormControl<number>;
  rainingStatus: FormControl<string>;
  date: FormControl<Date>;
  networkPower: FormControl<number>;
  altitude: FormControl<number>;
}

export interface WeatherCondition {
  _id?: string;
  city: string;
  temperature: number;
  rainingStatus: string;
  date: Date;
  networkPower: number;
  altitude: number;
}
