import { Component } from '@angular/core';

type Tabs = 'tab-favorites' | 'tab-pokemons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent  {

  public currentTab: Tabs = 'tab-pokemons';

}
