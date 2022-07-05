import { Injectable } from "@angular/core";
import { Action } from "../model/action.model";


@Injectable({
    providedIn: 'root'
})

export class ActionsState {

    public created_actions: Action[] = [];

    public add_action( action: {'featurename': string, 'featurefloor': number, 'featureceil': number } ): void {

        const currentAction: Action = new Action( action.featurename, 0, action.featureceil );
        this.created_actions.push( currentAction );

    }
}