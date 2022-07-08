import { Injectable } from "@angular/core";
import { MLAPI } from "../api/ml.api";
import { CounterfactualFeatureInstance } from "../model/counterfactual-feature-instance.model";

// models
import { CounterfactualInstance } from "../model/counterfactual-instance.model";
import { HistogramData } from "../model/types";
import { Deserializer } from "../serialization/deserializer";
import { DataState } from "./data.state";

@Injectable({
    providedIn: 'root'
})

export class CounterfactualsState {

    constructor( public dataState: DataState ){}

    public loadedCounterfactuals: CounterfactualInstance[] = [];

    public async load_counterfactual_examples( queryInstance: any, parameters: {  ['samplesize']: number, ['modelname']: string } ): Promise<void> {
    
        const response: {counterfactuals: any} = await MLAPI.get_counterfactual_set( queryInstance, parameters );
        const parsedCounterfactuals: CounterfactualInstance[] = Deserializer.mlapi_get_counterfactual_set(response.counterfactuals);
        this.loadedCounterfactuals = parsedCounterfactuals;

    }

    public get_features_histograms( features: string[] ): { [featureName: string]: HistogramData[] } {
        return this.dataState.loadedDataset.get_features_histograms( features );
    }

}