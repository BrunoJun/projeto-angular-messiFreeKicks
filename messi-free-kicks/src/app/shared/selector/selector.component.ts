import { Component } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})

export class SelectorComponent {

  public listAdversarios = ['Todos', 'Ajax', 'Alavés', 'Almeria', 'Athletic Club', 'Atlético de Madrid',
                          'Celta de Vigo', 'Chile', 'Colombia', 'Deportivo La Coruña', 'Dínamo Kyiv',
                          'Equador', 'Espanyol', 'Estados Unidos', 'Girona', 'Granada', 'Jamaica',
                          'Las Palmas', 'Leganés', 'Liverpool', 'LOSC Lille', 'Maiorca', 'Nice',
                          'Nigéria', 'Olympiacos', 'Osasuna', 'Panamá', 'Paraguai', 'PSV',
                          'Real Betis', 'Real Madrid', 'Real Sociedad', 'Sevilla', 'Uruguai',
                          'Valencia', 'Villareal']
}
