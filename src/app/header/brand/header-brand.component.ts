import { Component, OnInit  } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { UtilComponent } from './../../app.util';
@Component({
  selector: 'header-brand',
  templateUrl: './header-brand.component.html',
  providers:[AppService, UtilComponent]
})
export class HeaderBrandComponent {

  nameIdPair={user_id:"", name:"" }
  constructor(private _appService: AppService, private router:Router, private util:UtilComponent) {}

  ngOnInit() {
    this.util.getUserId();
  }
  
  profile() {
    this.router.navigateByUrl("/profile")
  }
}



