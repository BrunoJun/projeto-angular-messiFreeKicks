import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public listGols = [

    {data: '04/10/2008', times: 'Dynamo Kyiv - FC Barcelona', placar: '1 - 2'},
    {data: '01/01/2010', times: 'Tima a - FC Barcelona', placar: '2 - 3'},
    {data: '01/01/2010', times: 'Tima a - FC Barcelona', placar: '2 - 3'}
  ]

}
