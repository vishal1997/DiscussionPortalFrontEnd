import { Component } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { UtilComponent } from './../../app.util';
@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  providers:[AppService, UtilComponent]
})
export class HeaderMenuComponent {

  constructor(private _appService: AppService, private router:Router, private util:UtilComponent) {}

  settings() {
    this.router.navigateByUrl("/settings");
  }
}
