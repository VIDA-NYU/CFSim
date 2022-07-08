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
    public histCurrentSelection: number[] = [];

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

    public update_histogram_selection( histSelection: number[] ): void {

        // updating the selection
        this.histCurrentSelection = histSelection;

    }

    public add_action(): void { 

        // updating form
        this.createdForms['actionBuilderForm'].setValue({
            'featurename': this.histTitle,
            'featurefloor': this.histCurrentSelection[0],
            'featureceil': this.histCurrentSelection[1]});

        // adding constraint
        this.actionsState.add_action( this.createdForms['actionBuilderForm'].value );    
    }

}