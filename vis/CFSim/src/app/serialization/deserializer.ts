// models
import  { CounterfactualFeatureInstance } from '../model/counterfactual-feature-instance.model';
import { CounterfactualInstance } from '../model/counterfactual-instance.model';

import { Dataset } from "../model/dataset.model";

export class Deserializer {

    public static dataapi_get_dataset_deserializer( requestobj: any ): Dataset {

        const features: string[] = requestobj.features;
        const body: any[] = requestobj.rows.map( (element: any, index: number) => {
            
            const row: any = {};
            element.forEach( ( currentValue: any, valueIndex: number ) => {
                const featureName: string = features[valueIndex];
                row[featureName] = currentValue;
            });

            return row;
        });

        const predictions: number [] = requestobj.predictions;
        
        return new Dataset( features, body, predictions);
    }

    public static mlapi_get_counterfactual_set( requestobj: any[] ): CounterfactualInstance[] {

        const parsedCounterfactualList: CounterfactualInstance[] = [];
        requestobj.forEach( (cfinstance: any[], index: number) => {


            const currentCounterfactualFeatureInstanceList: CounterfactualFeatureInstance[] = [];
            cfinstance.forEach( (cfFeatureInstance: any, index: number ) => {
                
                const currentCounterfactualFeatureInstance: CounterfactualFeatureInstance = new CounterfactualFeatureInstance( cfFeatureInstance['featureName'], cfFeatureInstance['oldValue'], cfFeatureInstance['newValue'], cfFeatureInstance['variation']  );
                currentCounterfactualFeatureInstanceList.push( currentCounterfactualFeatureInstance );

            });

            // creating counterfactual instance object
            const currentCounterFactualInstance: CounterfactualInstance = new CounterfactualInstance( currentCounterfactualFeatureInstanceList );
            parsedCounterfactualList.push( currentCounterFactualInstance );
            

        });
    

        return parsedCounterfactualList;
    }

}
