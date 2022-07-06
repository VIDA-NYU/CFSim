import * as d3 from 'd3';
import { HistogramData } from 'src/app/model/types';
import { ChartUtils } from 'src/app/utils/charts/charts.utils';

export class SelectorHistogramController {

    // chart container
    public chartContainer!: HTMLElement;

    // svg
    public svg!: d3.Selection<any,any,any,any>;
    public group!: d3.Selection<any,any,any,any>;

    // scales
    public xScale!: d3.ScaleLinear<number, number>;
    public yScale!: d3.ScaleLinear<number, number>;

    // margins
    public margins: { top: number, bottom: number, left: number, right: number } = { top: 30, bottom: 30, left: 30, right: 30 };

    constructor(){}

    public render_chart( chartContainer: HTMLElement, histData: HistogramData[] ): void {

        // initializing chart
        if(!this.svg){
            this.initialize_chart( chartContainer );
        }
        

        // rendering chart
        this.create_chart( histData );
    }


    private create_chart( histogramData: HistogramData[] ): void {

        // updating axes
        this.xScale = ChartUtils.create_linear_scale( [0, histogramData.length], [0, this.chartContainer.clientWidth - this.margins.left - this.margins.right ] );
        // this.yScale = ChartUtils.create_linear_scale( [0, d3.max(histogramData) ], [ 0, this.chartContainer.clientHeight - this.margins.top - this.margins.bottom ] );

        // // D3 NEW WAY OF DOING ENTER UPDATE EXIT
        this.group
        .selectAll('.hour-bar')
        .data( histogramData )
        .join(
            enter => 
                enter
                .append('rect')
                .attr('x', (row: HistogramData, index: number) => this.xScale(index)   )
                .attr('y', 10 )
                .attr('rx', 2)
                .attr('ry', 2)
                .attr('width', 8 )
                .attr('height', 10 )
                .attr('class', 'hour-bar')
                .attr('fill', '#1F3F49' ),
            update => 
                update
                    .attr('x', (row: HistogramData, index: number) => this.xScale(index)   )
                    .attr('y', 10 )
                    .attr('width', 8 )
                    .attr('height', 10 ),
            exit => 
                exit.remove()
        );

    }

    private initialize_chart( chartContainer: HTMLElement ): void {

        // saving container ref
        this.chartContainer = chartContainer;

        // creating basic elements
        this.svg = ChartUtils.create_svg( this.chartContainer );
        this.group = ChartUtils.create_group( this.svg, this.margins );

    }
    

}