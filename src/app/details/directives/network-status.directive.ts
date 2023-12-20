import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[networkStatus]',
  standalone: true,
})
export class NetworkStatusDirective {
  @Input() set value(_value: number | undefined) {
    this.applyColor(_value ?? this.defaultValue);
  }

  defaultValue = 3;

  constructor(private readonly el: ElementRef) {}

  private applyColor(value: number): void {
    let color: string = '';

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

    this.el.nativeElement.style.color = color;
  }
}
