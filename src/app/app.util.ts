import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class UtilComponent {
    constructor(private _appService:AppService) { }
    res=[];
    ngOnInit() {
    
    }
    agree(answerId) {
        this._appService.agreeDisagree(answerId, "agree")
        .subscribe(resAppData => this.res = resAppData);
      }
    
    disAgree(answerId) {
    this._appService.agreeDisagree(answerId, "disagree")
    .subscribe(resAppData => this.res = resAppData);
    }
}
