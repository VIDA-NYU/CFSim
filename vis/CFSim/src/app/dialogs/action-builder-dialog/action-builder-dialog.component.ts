import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActionsState } from 'src/app/state/actions.state';
import { DataState } from 'src/app/state/data.state';
import { CustomFormBuilder } from 'src/app/utils/formbuilder.custom';
import { ActionBuilderDialogController } from './controller/action-builder-dialog.controller';


@Component({
  selector: 'app-action-builder-dialog',
  templateUrl: './action-builder-dialog.component.html',
  styleUrls: ['./action-builder-dialog.component.scss']
})
export class ActionBuilderDialogComponent implements OnInit {

  // controller reference
  public actionBuilderDialogController: ActionBuilderDialogController | null = null;

  // forms
  public actionBuilderForm: FormGroup<any> = new FormGroup({});

  constructor( 
    public dialogRef: MatDialogRef<ActionBuilderDialogComponent>, 
    public actionState: ActionsState, public dataState: DataState,
    public formBuilder: FormBuilder ) {

    this.actionBuilderDialogController = new ActionBuilderDialogController( actionState );

  }

  ngOnInit(): void {

    // creating forms
    this.actionBuilderForm = CustomFormBuilder.create_action_builder_form( this.formBuilder );
    const forms: { [ formName: string ]: FormGroup<any> } = { 'actionBuilderForm': this.actionBuilderForm };

    // initializing controller
    this.actionBuilderDialogController?.initialize_controller( forms );

  }

}
