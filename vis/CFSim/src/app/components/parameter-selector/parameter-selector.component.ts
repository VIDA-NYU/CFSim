import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-selector',
  templateUrl: './parameter-selector.component.html',
  styleUrls: ['./parameter-selector.component.scss']
})
export class ParameterSelectorComponent implements OnInit {

  // mock data
  public models: any = [
    {id: 'dice', displayName: 'DICE'},
  ];

  public criterias: any = [
    {id: 'actionability', displayName: 'actionability'},
    {id: 'sparsity', displayName: 'sparsity'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
