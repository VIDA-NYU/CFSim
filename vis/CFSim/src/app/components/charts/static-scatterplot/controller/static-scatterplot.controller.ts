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

    // scales
    public xScale!: d3.ScaleLinear<number, number>;
    public yScale!: d3.ScaleLinear<number, number>;
    public colorScale!: any;

    constructor(){}


    public render_chart( chartContainer: HTMLElement, data: {x: number, y: number, sparsity: number}[] ){

        // initializing chart
        this.intialize_chart( chartContainer );

        // updating chart
        this.update_chart( data );

    }


    private intialize_chart( chartContainer: HTMLElement ): void {

        // saving container ref
        this.chartContainer = chartContainer;

        // creating basic elements
        this.svg = ChartUtils.create_svg( this.chartContainer );
        this.group = ChartUtils.create_group( this.svg, this.margins );

    }

    private update_chart( data: {x: number, y: number, sparsity: number}[] ): void {

        // updating scales
        this.xScale = ChartUtils.create_linear_scale( d3.extent( data , (element: {x: number, y: number, sparsity: number} ) => element.x ), [0, this.chartContainer.clientWidth - this.margins.left - this.margins.right] );
        this.yScale = ChartUtils.create_linear_scale( d3.extent( data , (element: {x: number, y: number, sparsity: number} ) => element.y ), [ 0, this.chartContainer.clientHeight - this.margins.top - this.margins.bottom ] );
        this.colorScale = ChartUtils.create_sequential_color_scale( d3.extent( data , (element: {x: number, y: number, sparsity: number} ) => element.sparsity ), ['#bdbdbd' ,'#636363'] );

        
        
        // D3 NEW WAY OF DOING ENTER UPDATE EXIT
        this.group
        .selectAll('.cf-circle')
        .data( data )
        .join(
            enter => 
                enter
                .append('circle')
                .attr('cx', (row: {x: number, y: number, sparsity: number}, index: number) => this.xScale(row.x) )
                .attr('cy', (row: {x: number, y: number, sparsity: number}, index: number) => this.yScale(row.y) )
                .attr('r', 10)
                .attr('class', 'cf-circle')
                .attr('fill', (row: {x: number, y: number, sparsity: number}, index: number) => this.colorScale(row.sparsity) )
                .style('z-index', 5)
        );


    }
}