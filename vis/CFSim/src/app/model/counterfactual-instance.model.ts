import { CounterfactualFeatureInstance } from "./counterfactual-feature-instance.model";

export class CounterfactualInstance {

    constructor( public uid: number, public featureInstances : CounterfactualFeatureInstance[], public projectedX: number, public projectedY: number ){}

    public is_within_constraints(): boolean {

        return true;
    }

    public get_number_of_changing_features(): number {
        return this.get_changing_features().length;
    }

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