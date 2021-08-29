import { Component } from '@angular/core';

type Tabs = 'tab-favorites' | 'tab-pokemons';

@Component({
  selector: 'pokemon-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  public currentTab: Tabs = 'tab-pokemons';


}
