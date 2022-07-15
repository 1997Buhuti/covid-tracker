import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryChartsComponent } from './country-charts.component';

describe('CountryChartsComponent', () => {
  let component: CountryChartsComponent;
  let fixture: ComponentFixture<CountryChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
