import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { StaticGlScatterplotController } from './controller/static-gl-scatterplot.controller';

@Component({
  selector: 'app-static-gl-scatterplot',
  templateUrl: './static-gl-scatterplot.component.html',
  styleUrls: ['./static-gl-scatterplot.component.scss']
})
export class StaticGlScatterplotComponent implements OnInit, OnChanges {

  // controller ref
  public staticGLScatterplotController: StaticGlScatterplotController | null = null;

  // dom ref
  @ViewChild('chartcontainerref') chartContainerRef!: ElementRef;

  // input data
  @Input('datapoints') datapoints: number[][] = [];
  @Input('uids') uids: number[] = [];

  constructor() { 

    this.staticGLScatterplotController = new StaticGlScatterplotController();

  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if( 'datapoints' in changes && changes['datapoints'] && changes['datapoints'].currentValue.length > 0 && this.chartContainerRef ){
      this.staticGLScatterplotController?.initialize_projection( this.chartContainerRef.nativeElement, this.datapoints, this.uids );
    }

  }

}
