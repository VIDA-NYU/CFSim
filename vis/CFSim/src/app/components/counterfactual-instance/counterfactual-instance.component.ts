import { Component, OnInit } from '@angular/core';
import { Counterfactual } from 'src/app/model/counterfactual.model';

@Component({
  selector: 'app-counterfactual-instance',
  templateUrl: './counterfactual-instance.component.html',
  styleUrls: ['./counterfactual-instance.component.scss']
})
export class CounterfactualInstanceComponent implements OnInit {

  // mock data
  public counterfactual: Counterfactual = new Counterfactual();

  constructor() { }

  ngOnInit(): void {}



}
