import { FormControl } from '@angular/forms';

export interface FormItems {
  city: FormControl<string>;
  temperature: FormControl<number>;
  rainingStatus: FormControl<string>;
  date: FormControl<Date>;
  networkPower: FormControl<number>;
  altitude: FormControl<number>;
}
