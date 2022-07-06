import { environment } from 'src/environments/environment';

export class MLAPI {

    public static async get_counterfactual_set( queryInstance: any, parameters: any ): Promise< {counterfactuals: any} > {

        // url
        const url = `${environment.mlserver}/generatecounterfactualset`;

        // post parameters
        const requestParams = { 'queryinstance': queryInstance, parameters } ;

        // post header
        const headers = {
            'Content-Type': 'application/json',
        };

        // Return a new promise.
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(requestParams),
        });

        return await response.json();


    }


}