import { Component } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'header-search',
  templateUrl: './header-search.component.html',
  providers:[AppService]
})
export class HeaderSearchComponent {

  constructor(private _appService: AppService, private router:Router) {}

  search="";
  searchUser() {
    this.router.navigateByUrl('/search/'+this.search);
    location.reload();
  }
}
