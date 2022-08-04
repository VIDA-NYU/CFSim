import { Injectable } from "@angular/core";
import { MLAPI } from "../api/ml.api";
import { CounterfactualFeatureInstance } from "../model/counterfactual-feature-instance.model";

// models
import { CounterfactualInstance } from "../model/counterfactual-instance.model";
import { HistogramData } from "../model/types";
import { Deserializer } from "../serialization/deserializer";
import { CounterfactualsMetricsState } from "./counterfactuals-metrics.state";
import { DataState } from "./data.state";

@Injectable({
    providedIn: 'root'
})

export class CounterfactualsState {

    constructor( public dataState: DataState, public counterfactualsMetricsState: CounterfactualsMetricsState ){}

    public loadedCounterfactuals: CounterfactualInstance[] = [];

    // current query instance
    public currentQueryInstance: any = {};


    public async load_counterfactual_examples( queryInstance: any, parameters: {  ['samplesize']: number, ['modelname']: string }, constraints: { [featureName: string]: number[] } = {} ): Promise<void> {
        
        // saving current query instance
        this.currentQueryInstance = queryInstance;

        // requesting counterfactuals
        const response: {counterfactuals: any} = await MLAPI.get_counterfactual_set( queryInstance, parameters, constraints );

        const parsedCounterfactuals: CounterfactualInstance[] = Deserializer.mlapi_get_counterfactual_set(response.counterfactuals);
        this.loadedCounterfactuals = parsedCounterfactuals;

        // saving counterfactual batch summary
        this.counterfactualsMetricsState.add_new_counterfactual_batch_summary( parsedCounterfactuals )

    }

    public async update_counterfactual_examples( parameters: {  ['samplesize']: number, ['modelname']: string }, constraints: { [featureName: string]: number[] } = {} ): Promise<void> {

        // requesting counterfactuals
        const response: {counterfactuals: any} = await MLAPI.get_counterfactual_set( this.currentQueryInstance, parameters, constraints );
        const parsedCounterfactuals: CounterfactualInstance[] = Deserializer.mlapi_get_counterfactual_set(response.counterfactuals);
        this.loadedCounterfactuals = parsedCounterfactuals;

    }

    public get_features_histograms( features: string[] ): { [featureName: string]: HistogramData[] } {
        return this.dataState.loadedDataset.get_features_histograms( features );
    }

}