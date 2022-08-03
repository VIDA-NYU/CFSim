import { CounterfactualInstance } from "src/app/model/counterfactual-instance.model";

export class ExplanationOverviewController {

    public projectedCounterfactuals: {x: number, y: number, sparsity: number}[] = [];

    constructor(){}

    public update_projected_counterfactuals( counterfactuals: CounterfactualInstance[] ): void {

        const projectionData: { x: number, y: number, sparsity: number }[] = counterfactuals.map( (cf: CounterfactualInstance) => { return { 'x': cf.projectedX, 'y': cf.projectedY, 'sparsity': cf.get_number_of_changing_features() }});
        this.projectedCounterfactuals = projectionData;
    }

}