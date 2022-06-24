import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-selector',
  templateUrl: './parameter-selector.component.html',
  styleUrls: ['./parameter-selector.component.scss']
})
export class ParameterSelectorComponent implements OnInit {

  // mock data
  public attributes: any = [
    {id: 'attr1', displayName: 'attr1'},
    {id: 'attr2', displayName: 'attr2'},
    {id: 'attr3', displayName: 'attr3'},
    {id: 'attr4', displayName: 'attr4'},
    {id: 'attr5', displayName: 'attr5'},
    {id: 'attr6', displayName: 'attr6'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
