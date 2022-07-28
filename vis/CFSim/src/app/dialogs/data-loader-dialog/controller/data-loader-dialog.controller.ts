// state imports
import { FilterManagerComponent } from "src/app/components/filter-manager/filter-manager.component";
import { DataFilter } from "src/app/model/data-filter.model";
import { DataState } from "src/app/state/data.state";

export class DataLoaderDialogController {

    // available datasets
    public availableDatasets: string[] = [];
 
    // elements refs
    public filterManagerRef!: FilterManagerComponent;

    constructor( public dataState: DataState ){}
    
    public async initialize_data(): Promise<void> {

        const availableDatasets: any = await this.dataState.load_available_datasets();
        this.availableDatasets = availableDatasets;
    
    }

    public initialize_controller( filterManagerref: FilterManagerComponent ): void {

        this.filterManagerRef = filterManagerref;
        console.log(this.filterManagerRef);

    }

    public load_dataset( event: any, filters: DataFilter[] = [] ): void {

        this.dataState.load_dataset( event.value, filters );

        // clearing old filters
        this.filterManagerRef.filterManagerController?.clear_filters();

    }

    public on_filters_update( filters: DataFilter[] ): void {

        if(this.dataState.loadedDataset.is_loaded()){
            this.dataState.load_dataset( this.dataState.loadedDataset.name, filters );
        }
    }

    public clear_filters(): void {

        this.filterManagerRef.filterManagerController?.clear_filters();

    }

    


   

    

}