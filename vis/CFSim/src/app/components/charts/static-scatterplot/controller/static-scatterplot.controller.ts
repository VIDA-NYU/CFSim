import { ChartUtils } from "src/app/utils/charts/charts.utils";
import * as d3 from 'd3';

export class StaticScatterplotController {

    // chart container
    public chartContainer!: HTMLElement;

    // svg
    public svg!: d3.Selection<any,any,any,any>;
    public group!: d3.Selection<any,any,any,any>;

    // margins
    public margins: { top: number, bottom: number, left: number, right: number } = { top: 30, bottom: 30, left: 30, right: 30 };

    constructor(){}


    public render_chart( chartContainer: HTMLElement ){

        // initializing chart
        this.intialize_chart( chartContainer );

        // updating chart
        this.update_chart();

    }


    private intialize_chart( chartContainer: HTMLElement ): void {

        // saving container ref
        this.chartContainer = chartContainer;

        // creating basic elements
        this.svg = ChartUtils.create_svg( this.chartContainer );
        this.group = ChartUtils.create_group( this.svg, this.margins );

    }

    private update_chart(): void {


        // fake data
        const fakedata: any = [ 
            {x: 50, y: 10},
            {x: 40, y: 20},
            {x: 60, y: 30},
            {x: 90, y: 40},
            {x: 10, y: 50}
        ];

        // D3 NEW WAY OF DOING ENTER UPDATE EXIT
        
        this.group
        .selectAll('.cf-circle')
        .data( fakedata )
        .join(
            enter => 
                enter
                .append('circle')
                .attr('cx', (row: any, index: number) => row.x   )
                .attr('cy', (row: any, index: number) => row.y )
                .attr('r', 10)
                .attr('class', 'cf-circle')
                .attr('fill', 'black')
                .style('z-index', 5)
        );


    }
}