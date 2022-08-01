import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CounterfactualInstance } from 'src/app/model/counterfactual-instance.model';

@Component({
  selector: 'app-explanation-overview',
  templateUrl: './explanation-overview.component.html',
  styleUrls: ['./explanation-overview.component.scss']
})
export class ExplanationOverviewComponent implements OnInit {

  @Input('counterfactuals') counterfactuals: CounterfactualInstance[] = []; 

  constructor() { }

  ngOnInit(): void {}

}
