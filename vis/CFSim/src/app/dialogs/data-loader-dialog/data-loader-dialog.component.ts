// material imports 
import { MatDialogRef } from '@angular/material/dialog';

// state imports
import { DataState } from 'src/app/state/data.state';

// angular imports
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// local imports
import { DataLoaderDialogController } from './controller/data-loader-dialog.controller';
import { CustomFormBuilder } from 'src/app/utils/formbuilder.custom';

@Component({
  selector: 'app-data-loader-dialog',
  templateUrl: './data-loader-dialog.component.html',
  styleUrls: ['./data-loader-dialog.component.scss']
})
export class DataLoaderDialogComponent implements OnInit {

  // controller reference
  public dataLoaderDialogController: DataLoaderDialogController | null = null;

  // forms
  public datasetSelectorForm: FormGroup<any> = new FormGroup({});

  // events
  @Output('onrowclicked') onrowclicked: EventEmitter<{row: any}> = new EventEmitter<{row: any}>();

  constructor( 
    public dialogRef: MatDialogRef<DataLoaderDialogComponent>, 
    public dataState: DataState,
    public formBuilder: FormBuilder ) {

    this.dataLoaderDialogController = new DataLoaderDialogController( this.dataState, this.formBuilder );

  }

  ngOnInit(): void {

    // creating forms
    this.datasetSelectorForm = CustomFormBuilder.create_dataset_selector_form( this.formBuilder );
    const forms: { [ formName: string ]: FormGroup<any> } = { 'datasetSelectorForm': this.datasetSelectorForm };

    // initializing controller
    this.dataLoaderDialogController?.initialize_controller( forms );

    // initializing controller data
    this.dataLoaderDialogController?.initialize_data();

  }

  

}
