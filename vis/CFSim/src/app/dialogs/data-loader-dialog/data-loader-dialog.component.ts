// material imports 
import { MatDialogRef } from '@angular/material/dialog';

// state imports
import { DataState } from 'src/app/state/data.state';

// angular imports
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

// local imports
import { DataLoaderDialogController } from './controller/data-loader-dialog.controller';
import { FilterManagerComponent } from 'src/app/components/filter-manager/filter-manager.component';

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

  // dom refs
  @ViewChild('filtermanagerref') filtermanagerref!: FilterManagerComponent;

  constructor( 
    public dialogRef: MatDialogRef<DataLoaderDialogComponent>, 
    public dataState: DataState ) {

    this.dataLoaderDialogController = new DataLoaderDialogController( this.dataState );

  }

  ngOnInit(): void {

    // initializing component
    this.dataLoaderDialogController?.initialize_controller( this.filtermanagerref );

    // initializing controller data
    this.dataLoaderDialogController?.initialize_data();

    

  }

  

}
