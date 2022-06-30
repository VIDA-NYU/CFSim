import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { DataAPI } from "../api/data.api";

@Injectable({
    providedIn: 'root'
})

export class DataState {

    public loadedData: any = [];
    public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


    public async load_available_datasets(): Promise<string[]> {

        const availableDatasets: {'datasets': string[] } = await DataAPI.get_available_datasets();
        return availableDatasets.datasets;

    }


    public load_dataset( datasetName: string ): void {

        
    
    }

}