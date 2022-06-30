import { environment } from "src/environments/environment";

export class DataAPI {

    public static async get_available_datasets(): Promise<{ 'datasets': string[] }> {

        // url
        const url = `${environment.dataserver}/getavailabledatasets`;

        // header
        const headers = {
            'Content-Type': 'application/json',
        };

        const response = await fetch(url);
        return await response.json();

    }


    public static async get_dataset( datasetName: string ): Promise<any> {

        // url
        const url = `${environment.dataserver}/loaddataset?datasetname=${datasetName}`;
        

        // header
        const headers = {
            'Content-Type': 'application/json',
        };

        const response = await fetch(url);
        return await response.json();

    }

}