import { CounterfactualInstance } from "src/app/model/counterfactual-instance.model";

export class ExplanationOverviewController {
    
    public projectedCounterfactuals: { 'coords': number[][], 'uids': number[], 'sparsity': number[] } = { 'coords': [], 'uids': [], 'sparsity': [] };

    constructor(){}

    public update_projected_counterfactuals( counterfactuals: CounterfactualInstance[] ): void {

        const datapoints: { 'coords': number[][], 'uids': number[], 'sparsity': number[] } = { 'coords': [], 'uids': [], 'sparsity': [] };

        counterfactuals.forEach( (cf: CounterfactualInstance ) => {


            const currentProjectedPoint: number[] = [cf.projectedX, cf.projectedY];
            const currentUID: number = cf.uid;

            datapoints.coords.push(currentProjectedPoint);
            datapoints.uids.push(currentUID);
            datapoints.sparsity.push( cf.get_number_of_changing_features() );

        });

        this.projectedCounterfactuals = datapoints;

    }

}