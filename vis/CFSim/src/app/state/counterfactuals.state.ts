import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CounterfactualsState {

    public loadedCounterfactuals: any[] = [];


    public load_counterfactual_examples(): void {

        this.loadedCounterfactuals = [1,2,3,4,5,6,7];

    }

}