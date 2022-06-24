import { Component, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActionsState } from 'src/app/state/actions.state';
import { ActionBuilderDialogController } from './controller/action-builder-dialog.controller';

@Component({
  selector: 'app-action-builder-dialog',
  templateUrl: './action-builder-dialog.component.html',
  styleUrls: ['./action-builder-dialog.component.scss']
})
export class ActionBuilderDialogComponent implements OnInit {

  // controller reference
  public actionBuilderDialogController: ActionBuilderDialogController | null = null;

  constructor( public dialogRef: MatDialogRef<ActionBuilderDialogComponent>, public actionState: ActionsState ) {

    this.actionBuilderDialogController = new ActionBuilderDialogController( actionState );

  }

  ngOnInit(): void {}

}
