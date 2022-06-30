export class Dataset {

    constructor( public features: string[], public rows: any[], public predictions: number[] ){}


    public sort_rows( featureName: string, ascending: boolean ): void {

        // sorting current dataset
        this.rows.sort( (a, b) => {
            return (a[featureName] < b[featureName] ? -1 : 1) * (ascending ? 1 : -1);
        });

        // creating a new copy
        this.rows = this.rows.slice();

        

        
    }

    

}