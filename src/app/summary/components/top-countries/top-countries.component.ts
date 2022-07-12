import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.scss'],
})
export class TopCountriesComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  countryData: any = {};

  topConfirmedCases: any[] = [];
  topConfirmedDeaths: any[] = [];
  topConfirmedRecovered: any[] = [];
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.countryData = this.covidData.Countries;

    this.topConfirmedCases = this.countryData?.sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed).slice(0, 5);
    this.topConfirmedDeaths = this.countryData?.sort((a: any, b: any) => b.TotalDeaths - a.TotalTotalDeaths).slice(0, 5);
    this.topConfirmedRecovered = this.countryData?.sort((a: any, b: any) => b.TotalRecovered - a.TotalRecovered).slice(0, 5);

    console.log(this.topConfirmedCases);
    console.log(this.topConfirmedDeaths);
    console.log(this.topConfirmedRecovered);
  }
}
