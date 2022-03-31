import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  legend: any;
  labels: string[];
  responsive: ApexResponsive[];
  dataLabels:ApexDataLabels;
};
@Component({
  selector: 'app-chart-student',
  templateUrl: './chart-student.component.html',
  styleUrls: ['./chart-student.component.css'],
})
export class ChartStudentComponent implements OnInit {
  //@ViewChild('chart') chart: ChartComponent = {} as ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  constructor() {}

 /*  ngOnInit() {
    this.chartOptions = {
      series: [38, 42, 20],
      chart: {
        type: 'donut',
        height: 350,
        },
         labels: ['Garcons %', 'Filles %', 'Ensceinte %'],

      legend: {
        show:true,
        position: 'bottom',
        itemMargin: {
           horizontal: 5,
          vertical: 30,
        },
        dataLabels:{
          enabled:true,
          formatter(value:any,opts:any){
            return opts.w.config.series[opts.seriesIndex];
          },
        }
      },
     
    };
  } */
  ngOnInit() {
this.chartOptions = {
      series: [38, 42, 20],
      chart: {
        type: 'donut',
        height: 350
      },
       labels: ['Garcons %', 'Filles %', 'Ensceinte %'],
    //  colors: ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#000000'], // add this part to modify colours
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100,
            },
          }
        }
      ],
     legend: {
        position: 'bottom',
        itemMargin: {
           horizontal: 5,
          vertical: 30,
        }
      },
     /*  dataLabels: { // add this part to remove %
        enabled: true,
        formatter(value: any, opts: any): any {
          return opts.w.config.series[opts.seriesIndex];
        },
      } */
       dataLabels: {
        enabled: false
    },
    };
}
}
