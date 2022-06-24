import { ActionsState } from "src/app/state/actions.state";

export class ActionBuilderDialogController {

    constructor( public actionsState: ActionsState ){}

    public add_action(): void {

        this.actionsState.add_action();
    
    }

}