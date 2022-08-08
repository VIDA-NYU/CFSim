import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterfactualInstance } from 'src/app/model/counterfactual-instance.model';
import { CounterfactualsState } from 'src/app/state/counterfactuals.state';

@Component({
  selector: 'app-counterfactual-list',
  templateUrl: './counterfactual-list.component.html',
  styleUrls: ['./counterfactual-list.component.scss']
})
export class CounterfactualListComponent implements OnInit {

  @Input('counterfactuallist') counterfactuallist: CounterfactualInstance[] = [];

  constructor( public counterfactualsState: CounterfactualsState ) { }

  ngOnInit(): void {}


}
