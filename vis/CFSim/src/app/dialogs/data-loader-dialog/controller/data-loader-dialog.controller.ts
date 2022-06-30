// state imports
import { DataState } from "src/app/state/data.state";

// angular imports
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomFormBuilder } from "src/app/utils/formbuilder.custom";

export class DataLoaderDialogController {

    // available datasets
    public availableDatasets: string[] = [];

    // created forms
    public createdForms: { [ formName: string ]: FormGroup<any> } = {};
 

    constructor( public dataState: DataState, private formBuilder: FormBuilder ){}

    public initialize_controller( forms: { [ formName: string ]: FormGroup<any> } ): void {

        // saving forms refs
        this.createdForms = forms;
        
    }
    
    public async initialize_data(): Promise<void> {

        const availableDatasets: any = await this.dataState.load_available_datasets();
        this.availableDatasets = availableDatasets;
    
    }
    
    public load_dataset(): void {

        const selectedDataset: string = this.createdForms['datasetSelectorForm'].value['datasetname'];
        this.dataState.load_dataset( selectedDataset );

    }

}