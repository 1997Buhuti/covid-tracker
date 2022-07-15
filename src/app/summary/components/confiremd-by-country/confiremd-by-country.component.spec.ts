import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiremdByCountryComponent } from './confiremd-by-country.component';

describe('ConfiremdByCountryComponent', () => {
  let component: ConfiremdByCountryComponent;
  let fixture: ComponentFixture<ConfiremdByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiremdByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiremdByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
