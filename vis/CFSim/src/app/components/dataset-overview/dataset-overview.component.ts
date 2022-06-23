import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataState } from 'src/app/state/data.state';
import { DatasetOverviewController } from './controller/dataset-overview.controller';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dataset-overview',
  templateUrl: './dataset-overview.component.html',
  styleUrls: ['./dataset-overview.component.scss']
})
export class DatasetOverviewComponent implements OnInit {

  // controller
  public datasetOverviewController: DatasetOverviewController | null = null;

  // events
  @Output('onrowclicked') onrowclicked: EventEmitter<{row: any}> = new EventEmitter<{row: any}>();

  constructor( public dataState: DataState ) {

    // events dict
    const events: { [eventname: string]: EventEmitter<any> } = {
      'onrowclicked': this.onrowclicked
    }

    // creating controller
    this.datasetOverviewController = new DatasetOverviewController( events );

  }

  ngOnInit(): void {}

}
