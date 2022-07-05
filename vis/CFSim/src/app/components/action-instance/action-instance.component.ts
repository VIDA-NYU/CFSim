import { Component, Input, OnInit } from '@angular/core';
import { Action } from 'src/app/model/action.model';

@Component({
  selector: 'app-action-instance',
  templateUrl: './action-instance.component.html',
  styleUrls: ['./action-instance.component.scss']
})
export class ActionInstanceComponent implements OnInit {

  @Input('actioninstance') actionInstance!: Action;

  constructor() { }

  ngOnInit(): void {}

}
