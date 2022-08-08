import { ActionsState } from "src/app/state/actions.state";
import { CounterfactualsState } from "src/app/state/counterfactuals.state";
import { DataState } from "src/app/state/data.state";
import { ParametersState } from "src/app/state/parameters.state";

export class MainViewController {

    constructor( 
        public dataState: DataState, 
        public counterfactualsState: CounterfactualsState,
        public parametersState: ParametersState,
        public actionState: ActionsState ){}

    public counterfactual_points_selected( event: {'uids': number[] }): void {

        this.counterfactualsState.filter_counterfactuals( event.uids );
    }

    public action_deleted(): void {}

}