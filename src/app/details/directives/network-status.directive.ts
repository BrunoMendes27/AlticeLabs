import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { WeatherCondition } from '../../models/form.model';

@Directive({
  selector: '[networkStatus]',
  standalone: true,
})
export class NetworkStatusDirective {
  @Input() set value(_value: number | undefined) {
    this.applyColor(_value ?? 3);
  }

  constructor(private readonly el: ElementRef) {}

  private applyColor(value: number): void {
    let color: string = '';
    console.log(value);
    switch (value) {
      case 1:
      case 2:
        color = 'red';
        break;
      case 4:
      case 5:
        color = 'green';
        break;
      case 3:
      default:
        color = 'grey';
        break;
    }
    console.log(color);

    this.el.nativeElement.style.color = color;
  }
}
