import { Action } from "../model/action.model";

export class Serializer {

    public static mlapi_update_counterfactual_examples_actions_parameter( actions: Action[] ): { [featureName: string]: number[] } {

        const serializedActions: { [featureName: string]: number[] } = {};
        actions.forEach( (action: Action) => {
            serializedActions[action.featureName] = [action.featureFloor, action.featureCeil];
        });

        return serializedActions;
    }

    public static mlapi_update_feature_suggestions( actions: Action[] ): any {
        return actions;
    }

}