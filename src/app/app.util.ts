import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-utils',
  templateUrl: './app.util.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class UtilComponent {
    constructor(private _appService:AppService, private router:Router) { }
    res=[];
    nameIdPair={user_id:"", name:"" }
    status={}
    userId={}
    ngOnInit() {
    
    }
    agree(answerId) {
        this._appService.agreeDisagree(answerId, "agree")
        .subscribe(resAppData => this.res = resAppData);
      }
    
    disagree(answerId) {
        this._appService.agreeDisagree(answerId, "disagree")
        .subscribe(resAppData => this.res = resAppData);
    }

    getUserId() {
        this._appService.getUserId()
        .subscribe((resAppData) => {this.userId= resAppData});
    }

    getNameIdPair() {
        this._appService.getNameIdPair() 
        .subscribe((resAppData) => {this.nameIdPair=resAppData})
    }

    logout() {
        this.status = this._appService.logout().subscribe(res=>res.status);
        window.localStorage.removeItem('userId');
        this.router.navigate(['/login']);
        location.reload();
      }
}
