import { Component, OnInit } from '@angular/core';
import { HeaderMenuComponent } from './menu/header-menu.component';
import { HeaderBrandComponent } from './brand/header-brand.component';
import { HeaderSearchComponent } from './search/header-search.component';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {

  constructor(){}
  
  ngOnInit() {
  }
}

export const HeaderInternalComponents = [HeaderMenuComponent, HeaderBrandComponent, HeaderSearchComponent]