import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class PokemonModule { }
