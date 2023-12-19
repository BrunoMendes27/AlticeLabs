import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWeatherComponent } from './form-weather.component';

describe('FormWeatherComponent', () => {
  let component: FormWeatherComponent;
  let fixture: ComponentFixture<FormWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
