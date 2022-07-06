import { CounterfactualsState } from "src/app/state/counterfactuals.state";
import { DataState } from "src/app/state/data.state";
import { ParametersState } from "src/app/state/parameters.state";

export class MainViewController {

    constructor( 
        public dataState: DataState, 
        public counterfactualsState: CounterfactualsState,
        public parametersState: ParametersState ){}

    public dataset_row_clicked( event: {queryinstance: any} ){

        this.counterfactualsState.load_counterfactual_examples( event.queryinstance, this.parametersState.get_current_parameters() );
    }

}