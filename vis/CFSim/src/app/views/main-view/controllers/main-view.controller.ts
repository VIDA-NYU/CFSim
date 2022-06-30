import { CounterfactualsState } from "src/app/state/counterfactuals.state";
import { DataState } from "src/app/state/data.state";

export class MainViewController {

    constructor( public dataState: DataState, public counterfactualsState: CounterfactualsState ){}

    public dataset_row_clicked( event: {selectedRow: any} ){

        // console.log('inside: ', event);
        this.counterfactualsState.load_counterfactual_examples();
    }

}