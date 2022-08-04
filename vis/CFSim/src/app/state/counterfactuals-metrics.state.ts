import { Injectable } from "@angular/core";
import { CounterfactualInstance } from "../model/counterfactual-instance.model";
import { CounterfactualsMetrics } from "../model/counterfactual-summary.model";

@Injectable({
    providedIn: 'root'
})

export class CounterfactualsMetricsState {

    // counterfactual summary batch
    public counterfactualBatchMetrics: CounterfactualsMetrics[] = [];

    constructor(){}

    public add_new_counterfactual_batch_summary( counterfactualInstances: CounterfactualInstance[] ): void {

        const currentCounterfactualBatchMetrics: CounterfactualsMetrics = new CounterfactualsMetrics( 10999, 10000 );
        this.counterfactualBatchMetrics.push( currentCounterfactualBatchMetrics );

    }


}