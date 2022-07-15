import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {
  covidData: any = {};
  constructor(
    private dataService: DataService,
    private searchService: SearchService,
  ) {}

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe((data) => {
      this.covidData = data;
      console.log(this.covidData);
    });
  }

  searchCountry = (country: string) => {
    const countryCollection = this.covidData?.Countries.filter((c: any) =>
      c.Country.toLowerCase().includes(country.toLowerCase()),
    );
    this.searchService.setCountries(countryCollection);
  };
}
