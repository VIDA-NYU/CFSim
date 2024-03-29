import * as d3 from 'd3';

export class ChartUtils {

    public static create_svg( container: HTMLElement, zindex: number = 1 ): d3.Selection<any,any,any,any> {

        // container dimensions
        const width: number = container.clientWidth;
        const height: number = container.clientHeight;

        // creating svg
        return d3.select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('z-index', zindex);
    }

    public static create_group( svgselection: any, margins: { top: number, bottom: number, left: number, right: number } ){
        return svgselection.append('g').attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
    }

    public static create_linear_scale(domain: [any, any], range: [number, number]): d3.ScaleLinear<number, number> {
        return d3.scaleLinear().domain(domain).range(range);
    }

    public static create_sequential_color_scale( domain: [any, any], colorScale: any = d3.interpolateBlues  ): d3.ScaleSequential<number, string> {
        return d3.scaleSequential(colorScale).domain(domain);
    }

    public static create_band_scale( domain: string[], range: [number, number]): d3.ScaleBand<string> {
        return d3.scaleBand().domain(domain).range(range);
    }

    public static create_horizontal_brush( selection: d3.Selection<any,any,any,any>, margins: { top: number, bottom: number, left: number, right: number }, container: HTMLElement ): any {

        // creating brush
        const brush = d3.brushX()
            .extent([ [0, 0], [container.clientWidth - margins.right - margins.left, container.clientHeight - margins.bottom - margins.top ] ]);
        
        // appending group
        selection.append('g').attr('class', 'brush').style('z-index', 100).call(brush);

        return brush;
    }
}