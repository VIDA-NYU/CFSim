import { Component, OnInit } from '@angular/core';
import { DialogManager } from 'src/app/dialogs/dialog-manager';
import { ActionsState } from 'src/app/state/actions.state';
import { ActionListController } from './controller/action-list.controller';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class ActionListComponent implements OnInit {

  // controller
  public actionListController: ActionListController | null = null;

  constructor( public dialogManager: DialogManager, public actionsState: ActionsState ) { 

    this.actionListController = new ActionListController();

  }

  ngOnInit(): void {}

}