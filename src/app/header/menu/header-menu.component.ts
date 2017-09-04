import { Component } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  providers:[AppService]
})
export class HeaderMenuComponent {

  constructor(private _appService: AppService, private router:Router) {}

  status={}
  
  logout() {
    this.status = this._appService.logout().subscribe(res=>res.status);
    window.localStorage.removeItem('userId');
    this.router.navigateByUrl('/login');
  }
}
