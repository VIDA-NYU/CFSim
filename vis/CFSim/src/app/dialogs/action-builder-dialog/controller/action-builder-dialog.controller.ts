import { FormGroup } from "@angular/forms";
import { HistogramData } from "src/app/model/types";
import { ActionsState } from "src/app/state/actions.state";
import { DataState } from "src/app/state/data.state";

export class ActionBuilderDialogController {

    // created forms
    public createdForms: { [ formName: string ]: FormGroup<any> } = {};

    // current selector histogram
    public histTitle: string = '';
    public histData: HistogramData[] = [];

    constructor( public actionsState: ActionsState, public dataState: DataState ){}

    public initialize_controller( forms: { [ formName: string ]: FormGroup<any> } ): void {

        // saving forms refs
        this.createdForms = forms;

    }

    public update_histogram_data( event: any ): void { 

        // getting histograms
        const featureName: string = event.value;
        const hisData: HistogramData[] = this.dataState.loadedDataset.get_feature_histogram(featureName);
        
        // updating variables
        this.histTitle = featureName;
        this.histData = hisData;
    }

    public add_action(): void {

        this.actionsState.add_action(this.createdForms['actionBuilderForm'].value);
    
    }

}