import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.scss'],
})
export class LivePageComponent implements OnInit {
  constructor() {}

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
        data: [],
      },
    ],
  };
  ngOnInit(): void {}
}
