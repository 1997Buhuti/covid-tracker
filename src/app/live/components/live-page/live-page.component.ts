import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.scss'],
})
export class LivePageComponent implements OnInit {
  liveData: any = [];
  constructor(private dataService: DataService) {}

  HighCharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';

  chartOptions: Highcharts.Options = {
    chart: {
      map: worldMap,
    },
    title: {
      text: 'Covid-19 World Data',
    },
    subtitle: {
      text: 'Confirmed Cases Live',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: true,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: 'Covid-19 Data',
        states: {
          hover: {
            color: 'purple',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        allAreas: false,
        data: [
          ['fo', 0],
          ['us', 1],
          ['jp', 2],
          ['sc', 3],
          ['fr', 4],
          ['in', 5],
          ['cn', 6],
          ['pt', 7],
          ['ph', 8],
          ['mx', 9],
          ['mv', 10],
        ],
      },
    ],
  };
  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe(
      (data: any) => {
        this.liveData = data.Countries.map((country: any) => [
          country.CountryCode.toLowerCase(),
          country.TotalConfirmed,
        ]);
        // @ts-ignore
        this.chartOptions?.series[0]?.data = this.liveData;
        //Rerendering HighCharts Map
        this.HighCharts.mapChart('container', this.chartOptions);
      },
      (error: any) => {
        console.log(error);
      },
    );
  }
}
