import { Component, Input, OnInit } from '@angular/core';
import { DataState } from 'src/app/state/data.state';
import { FilterManagerController } from './controller/filter-manager-controller';

@Component({
  selector: 'app-filter-manager',
  templateUrl: './filter-manager.component.html',
  styleUrls: ['./filter-manager.component.scss']
})
export class FilterManagerComponent implements OnInit {

  // controller
  public filterManagerController: FilterManagerController | null = null;

  // input variables
  @Input('availablefeatures') availablefeatures: string[] = [];

  constructor( public dataState: DataState ) {}

  ngOnInit(): void {

    this.filterManagerController = new FilterManagerController();

  }

}
