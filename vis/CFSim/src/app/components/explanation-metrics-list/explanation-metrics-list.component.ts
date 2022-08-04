import { Component, Input, OnInit } from '@angular/core';
import { CounterfactualsMetrics } from 'src/app/model/counterfactual-summary.model';

@Component({
  selector: 'app-explanation-metrics-list',
  templateUrl: './explanation-metrics-list.component.html',
  styleUrls: ['./explanation-metrics-list.component.scss']
})
export class ExplanationMetricsListComponent implements OnInit {


  // input data
  @Input('metrics') metrics: CounterfactualsMetrics[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
