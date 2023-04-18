import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})

export class SelectorComponent {

  constructor (private list: ListComponent){}

  public listAdversarios = ['Todos', 'Ajax', 'Alavés', 'Almería', 'Athletic Club', 'Atl. de Madrid',
                          'Celta de Vigo', 'Chile', 'Colombia', 'Dep. La Coruña', 'Dínamo Kyiv',
                          'Equador', 'Espanyol', 'Estados Unidos', 'Girona', 'Granada', 'Jamaica',
                          'Las Palmas', 'Leganés', 'Liverpool', 'LOSC Lille', 'Maiorca', 'Nice',
                          'Nigéria', 'Olympiacos', 'Osasuna', 'Panamá', 'Paraguai', 'PSV',
                          'Real Betis', 'Real Madrid', 'Real Sociedad', 'Sevilla', 'Uruguai',
                          'Valencia', 'Villareal']

  public sendValue(valor: any){

    this.list.receiveValue(valor);
  }
}