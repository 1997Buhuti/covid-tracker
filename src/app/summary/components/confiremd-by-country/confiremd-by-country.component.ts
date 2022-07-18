import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confiremd-by-country',
  templateUrl: './confiremd-by-country.component.html',
  styleUrls: ['./confiremd-by-country.component.scss'],
})
export class ConfiremdByCountryComponent implements OnInit {
  @Output() country = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  passCountryData(searchedCountry: string) {
    this.country.emit(searchedCountry);
    console.log('Hi from confirmed country');
  }
}
