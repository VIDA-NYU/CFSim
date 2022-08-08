import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CounterfactualInstance } from 'src/app/model/counterfactual-instance.model';
import { ExplanationOverviewController } from './controller/explanation-overview.controller';

@Component({
  selector: 'app-explanation-overview',
  templateUrl: './explanation-overview.component.html',
  styleUrls: ['./explanation-overview.component.scss']
})
export class ExplanationOverviewComponent implements OnInit, OnChanges {

  // controller reference
  public explanationOverviewController: ExplanationOverviewController | null = null;

  // input data
  @Input('counterfactuals') counterfactuals: { [uids: number]: CounterfactualInstance } = {}; 

  // events
  @Output('onpointsselected') onpointsselected: EventEmitter<{'uids': number[]}> = new EventEmitter<{'uids': number[]}>();

  constructor() {

    this.explanationOverviewController = new ExplanationOverviewController();

  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    
    if( !changes['counterfactuals'].firstChange && changes['counterfactuals'].currentValue != 0 ){
      this.explanationOverviewController?.update_projected_counterfactuals(Object.values( changes['counterfactuals'].currentValue));
    }

  }

}
