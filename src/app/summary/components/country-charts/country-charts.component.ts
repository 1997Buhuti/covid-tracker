import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-charts',
  templateUrl: './country-charts.component.html',
  styleUrls: ['./country-charts.component.scss'],
})
export class CountryChartsComponent implements OnInit, OnChanges {
  @Input() country: string = 'USA';
  barChartData: ChartDataSets[] = [
    {
      data: [65, 59, 80],
    },
  ];

  barChartLabels: Label[] = ['USA', 'UK', 'Brazil'];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  constructor(private dataService: DataService) {}
  ngOnChanges(): void {
    console.log(this.country);
  }

  ngOnInit(): void {}

  getCountryData() {
    this.dataService
      .getCountryDataByDate(
        this.country,
        '2022-03-01T00:00:00Z&to=2022-04-01T00:00:00Z',
      )
      .subscribe((res: any) => {
        console.log('Response', res);
      });
  }
}
