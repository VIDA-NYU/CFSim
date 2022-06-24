import { Injectable } from "@angular/core";
import { Action } from "../model/action.model";


@Injectable({
    providedIn: 'root'
})

export class ActionsState {

    public created_actions: Action[] = [];

    public add_action(): void {

        const action: Action = new Action( 'attr1', 22.4, 78.4 );
        this.created_actions.push(action);

    }
}