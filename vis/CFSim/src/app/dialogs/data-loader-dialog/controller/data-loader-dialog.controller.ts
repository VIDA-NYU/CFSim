import { DataState } from "src/app/state/data.state";

export class DataLoaderDialogController {

    // available datasets
    public availableDatasets: string[] = [];

    constructor( public dataState: DataState ){}
    
    public async initialize_data(): Promise<void> {

        const availableDatasets: any = await this.dataState.load_available_datasets();
        this.availableDatasets = availableDatasets;
    
    }
    
    public load_dataset( datasetName: string ): void {

        this.dataState.load_dataset( datasetName );
    }
    



}