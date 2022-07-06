import { Injectable } from "@angular/core";
import { MLAPI } from "../api/ml.api";

// models
import { CounterfactualInstance } from "../model/counterfactual-instance.model";
import { Deserializer } from "../serialization/deserializer";

@Injectable({
    providedIn: 'root'
})

export class CounterfactualsState {

    public loadedCounterfactuals: CounterfactualInstance[] = [];


    public async load_counterfactual_examples( queryInstance: any, parameters: {  ['samplesize']: number, ['modelname']: string } ): Promise<void> {
    
        const response: {counterfactuals: any} = await MLAPI.get_counterfactual_set( queryInstance, parameters );
        const parsedCounterfactuals: CounterfactualInstance[] = Deserializer.mlapi_get_counterfactual_set(response.counterfactuals);
        this.loadedCounterfactuals = parsedCounterfactuals;

    }

}