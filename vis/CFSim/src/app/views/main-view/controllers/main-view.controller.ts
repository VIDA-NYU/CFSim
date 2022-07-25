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

    public dataset_row_clicked( event: {queryinstance: any} ){

        this.counterfactualsState.load_counterfactual_examples( event.queryinstance, this.parametersState.get_current_parameters() );
    }

    public action_deleted(): void {

        

    }

}