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
export class NetworkStatusDirective implements AfterViewInit {
  @Input() value?: number;

  constructor(private readonly el: ElementRef) {}

  ngAfterViewInit(): void {
    this.applyColor();
  }

  private applyColor(): void {
    let color: string = '';
    console.log(this.value);
    switch (this.value) {
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
