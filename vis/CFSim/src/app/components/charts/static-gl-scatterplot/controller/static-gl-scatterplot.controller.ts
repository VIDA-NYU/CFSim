import * as scatter from 'scatter-gl';

export class StaticGlScatterplotController {

    // scatterGL references
    public scatterGL!: scatter.ScatterGL;
    public scatterDataset!: scatter.Dataset;

    // uid mapper: maps uid to scattergl indices
    // public frameMapper: { [frameuid: string]: number } = {};

    constructor(){}

    public initialize_projection( container: HTMLElement, datapoints: number[][], uids: number[] ){

        this.generate_dataset( datapoints );
        this.generate_projection( container );
        this.render_projection();

    }

    // private methods 
    private render_projection(): void {
        this.scatterGL.render( this.scatterDataset );
    }

    private generate_projection( container: HTMLElement ): void{

        this.scatterGL = new scatter.ScatterGL( container, {
            // onClick: (point: number | null ) => {
            //     // this.click_handler( point );
            // },
            orbitControls: {
                    zoomSpeed: 1.125,
            }});
    
    }

    private generate_dataset( datapoints: any[] ): void {

        // creating scatter dataset
        this.scatterDataset = new scatter.ScatterGL.Dataset(datapoints);

    }


}