import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() covidData: any;
  countries: any = [];

  subscription = new Subscription();
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.subscription = this.searchService
      .getCountries()
      .subscribe((countries: any) => {
        this.countries = countries;
      });
  }

  ngOnChanges(): void {
    this.countries = this.covidData.Countries;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
