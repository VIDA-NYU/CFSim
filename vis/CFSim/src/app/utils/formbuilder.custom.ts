// angular imports
import { FormBuilder, FormGroup } from "@angular/forms";

export class CustomFormBuilder {


    public static create_dataset_selector_form( formBuilder: FormBuilder ): FormGroup<any>{

        return formBuilder.group({
            'datasetname': ''
        })

    }

    public static create_action_builder_form( formBuilder: FormBuilder ): FormGroup<any>{

        return formBuilder.group({
            'featurename': '',
            'feturefloor': 0,
            'featureceil': 0
        })

    }

    public static create_parameters_selector_form( formBuilder: FormBuilder ): FormGroup<any>{

        return formBuilder.group({
            'samplesize': 10,
            'modelname': 'DICE'
        })

    }
}