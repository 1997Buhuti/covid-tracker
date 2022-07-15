import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';
import { ConfiremdByCountryComponent } from './components/confiremd-by-country/confiremd-by-country.component';
import { SharedModule } from '../shared/shared.module';
import { CountryChartsComponent } from './components/country-charts/country-charts.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent,
    TopCountriesComponent,
    ConfiremdByCountryComponent,
    CountryChartsComponent,
  ],
  imports: [CommonModule, SummaryRoutingModule, SharedModule, ChartsModule],
})
export class SummaryModule {}
