import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Action } from 'src/app/model/action.model';
import { HistogramData } from 'src/app/model/types';
import { StaticHistogramController } from './controller/static-histogram.controller';

@Component({
  selector: 'app-static-histogram',
  templateUrl: './static-histogram.component.html',
  styleUrls: ['./static-histogram.component.scss']
})
export class StaticHistogramComponent implements OnInit, AfterViewInit {

  // controller reference
  public staticHistogramController: StaticHistogramController | null = null;

  // dom refs
  @ViewChild('chartcontainerref') chartContainerRef!: ElementRef;

  // input variables
  @Input('title') title: string = '';
  @Input('histdata') histdata: HistogramData[] = []; 
  @Input('histSelection') histSelection: number[] = [];
  @Input('actioninstance') actionInstance!: Action;

  constructor() {

    this.staticHistogramController = new StaticHistogramController();

  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    this.staticHistogramController?.render_chart( this.chartContainerRef.nativeElement, this.histdata, this.actionInstance);

  }

}
