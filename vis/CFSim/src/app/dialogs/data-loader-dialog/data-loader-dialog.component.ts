import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataState } from 'src/app/state/data.state';
import { DataLoaderDialogController } from './controller/data-loader-dialog.controller';

@Component({
  selector: 'app-data-loader-dialog',
  templateUrl: './data-loader-dialog.component.html',
  styleUrls: ['./data-loader-dialog.component.scss']
})
export class DataLoaderDialogComponent implements OnInit {

  // controller reference
  public dataLoaderDialogController: DataLoaderDialogController | null = null;

  // events
  @Output('onrowclicked') onrowclicked: EventEmitter<{row: any}> = new EventEmitter<{row: any}>();


  // mock data
  public datasets: any = [
    {id: 'Iris Dataset', displayName: 'Iris Dataset'},
    {id: 'Wine Dataset', displayName: 'Wine Dataset'}
  ];

  constructor( public dialogRef: MatDialogRef<DataLoaderDialogComponent>, public dataState: DataState ) {

    this.dataLoaderDialogController = new DataLoaderDialogController( this.dataState );

  }

  ngOnInit(): void {}

  

}
