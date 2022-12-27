import { Component, ViewChild, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartTypeRegistry, ScatterDataPoint, BubbleDataPoint } from 'chart.js';

import { default as Annotation } from 'chartjs-plugin-annotation';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: [ './line-chart.component.scss' ]
})
export class LineChartComponent implements OnInit {
  private newLabel? = 'New label';
  isChartConfigured: boolean = false;
  labels: any | null = null;
  dataset: any[] | null = null;

  lineChartData: any = {
      datasets: [],
      labels: []
  }

  constructor(private appService: AppService) {
    Chart.register(Annotation);
  }

  ngOnInit() {
    
    this.appService.getLabels()
      .subscribe((response: any) => {
        this.labels = response;
        console.log("probando labels ",this.labels.body.labels);

        this.appService.getDataset()
          .subscribe((response: any) => {
            this.dataset = response.body.map((item: ChartDataset) => item);
            console.log("probando data ",this.dataset);

            this.lineChartData.datasets = this.dataset?.map((item: ChartDataset) => item)
            this.lineChartData.labels = this.labels.body.labels;

            console.log("probando lineChartData ",this.lineChartData)
            this.isChartConfigured = true;
      });
      });
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
        },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
    responsive: true
  };

  public lineChartType: ChartType = 'line';

  //@ViewChild(BaseChartDirective) chart?: BaseChartDirective;


}