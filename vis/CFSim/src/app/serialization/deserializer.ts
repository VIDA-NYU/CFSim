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

}
