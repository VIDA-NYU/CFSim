import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StaticScatterplotController } from './controller/static-scatterplot.controller';

@Component({
  selector: 'app-static-scatterplot',
  templateUrl: './static-scatterplot.component.html',
  styleUrls: ['./static-scatterplot.component.scss']
})
export class StaticScatterplotComponent implements OnInit, AfterViewInit {

  // controller
  public staticScatterplotController: StaticScatterplotController | null = null;

  // dom refs
  @ViewChild('chartcontainerref') chartContainerRef!: ElementRef;

  // Input data
  @Input('data') data: number[][] = [];

  constructor() { 

    this.staticScatterplotController = new StaticScatterplotController();

  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    this.staticScatterplotController?.render_chart( this.chartContainerRef.nativeElement );

  }

}
