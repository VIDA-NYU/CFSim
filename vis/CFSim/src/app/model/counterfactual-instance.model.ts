import { CounterfactualFeatureInstance } from "./counterfactual-feature-instance.model";

export class CounterfactualInstance {

    constructor( public featureInstances : CounterfactualFeatureInstance[], public projectedX: number, public projectedY: number ){}

    public get_changing_features(): CounterfactualFeatureInstance[] {

        const changingFeatures: CounterfactualFeatureInstance[] = [];
        this.featureInstances.forEach( (featureInstance: CounterfactualFeatureInstance) => {
            if( featureInstance.is_changing() ) changingFeatures.push(featureInstance);
        });

        return changingFeatures;

    }

    public get_changing_features_names(): string[] {

        const changingFeatures: string[] = [];
        this.featureInstances.forEach( (featureInstance: CounterfactualFeatureInstance) => {
            if( featureInstance.is_changing() ) changingFeatures.push(featureInstance.featureName);
        });

        return changingFeatures;

    }

}