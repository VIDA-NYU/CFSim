import { FormGroup } from "@angular/forms";
import { ActionsState } from "src/app/state/actions.state";

export class ActionBuilderDialogController {

    // created forms
    public createdForms: { [ formName: string ]: FormGroup<any> } = {};

    constructor( public actionsState: ActionsState ){}

    public initialize_controller( forms: { [ formName: string ]: FormGroup<any> } ): void {

        // saving forms refs
        this.createdForms = forms;

    }

    public add_action(): void {

        this.actionsState.add_action(this.createdForms['actionBuilderForm'].value);
    
    }

}