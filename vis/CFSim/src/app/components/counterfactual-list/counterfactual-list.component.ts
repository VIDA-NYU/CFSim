import { Component, OnInit } from '@angular/core';
import { CounterfactualsState } from 'src/app/state/counterfactuals.state';

@Component({
  selector: 'app-counterfactual-list',
  templateUrl: './counterfactual-list.component.html',
  styleUrls: ['./counterfactual-list.component.scss']
})
export class CounterfactualListComponent implements OnInit {

  constructor( public counterfactualsState: CounterfactualsState ) { }

  ngOnInit(): void {}

}
