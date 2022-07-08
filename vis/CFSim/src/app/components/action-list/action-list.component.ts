import { Component, Input, OnInit } from '@angular/core';
import { DialogManager } from 'src/app/dialogs/dialog-manager';
import { ActionsState } from 'src/app/state/actions.state';
import { DataState } from 'src/app/state/data.state';
import { ActionListController } from './controller/action-list.controller';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {

  // input variables
  @Input('datasetloaded') datasetLoaded: boolean = false;

  // controller
  public actionListController: ActionListController | null = null;

  constructor( public dialogManager: DialogManager, public actionsState: ActionsState, public dataState: DataState ) { 

    this.actionListController = new ActionListController();

  }

  ngOnInit(): void {}

}
