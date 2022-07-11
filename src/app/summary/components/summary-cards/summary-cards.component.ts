import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.scss'],
})
export class SummaryCardsComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  summaryData: any = {};
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.summaryData = this.covidData.Global;
    console.log(this.summaryData);
  }
}
