// angular imports
import { FormBuilder, FormGroup } from "@angular/forms";

export class CustomFormBuilder {


    public static create_dataset_selector_form( formBuilder: FormBuilder ): FormGroup<any>{

        return formBuilder.group({
            'datasetname': ''
        })

    }
}