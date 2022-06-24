import { DataState } from "src/app/state/data.state";

export class DataLoaderDialogController {

    constructor( public dataState: DataState ){}

    public load_dataset( datasetName: string ): void {

        this.dataState.load_dataset( datasetName );
    }

}