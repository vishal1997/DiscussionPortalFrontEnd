import { Component, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { UtilComponent } from '../../../app.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class HomeComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router, private util:UtilComponent) { }
  data = [];
  res =[];
  userId="";
  userAgree=false;
  userDisagree=false;
  pageno:number;
  pageno2:number;
  ngOnInit() {
    this.pageno=0;
    this.getFeeds();
  }
  
  getFeeds() {
    this._appService.getFeeds(this.pageno)
    .subscribe(resAppData => this.updateUserData(resAppData));
  }

  onSelectComment(id) {
    this.router.navigate(['/answer', id]);
  }

  updateUserData(data) {
    this.data = data;
    this.dataLoaded = true;
    if(this.pageno2 != this.pageno) {
      this.pageno2=this.pageno;
      window.scrollTo(0,0);
    }
  }

  dataLoaded = false;
  
  onSelect(id) {
        this.router.navigate(['/question', id]);
  }

  onSelectUserId(id) {
    this.router.navigate(["user", id]);
  }


  agree(answerId) {
    this._appService.agreeDisagree(answerId, "agree")
    .subscribe(resAppData => this.update(resAppData));
  }

  update(data) {
    this.getFeeds()
  }

  disagree(answerId) {
    this._appService.agreeDisagree(answerId, "disagree")
    .subscribe(resAppData => this.update(resAppData));
  }

  onClickNext() {
    this.pageno++;
    this.getFeeds();
  }

  onClickPrevious() {
    if(this.pageno!=0) {
      this.pageno--;
      this.getFeeds();
    }
  }

}
