import { Component, OnInit} from '@angular/core';
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
  mapAgree = new Map<string, boolean>();
  mapDisagree = new Map<string, boolean>();

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
  getDisagreeStatus(disagreeList) {
    this.userId = this.util.nameIdPair.user_id;
    if(disagreeList) {
      for(let ele of disagreeList) {
        if(ele==this.userId) {  
          this.userDisagree=true;
          return true;
        }
      }
    }
    this.userDisagree=false;
    return false;
  }

  getAgreeStatus(agreeList) {
    this.userId = this.util.nameIdPair.user_id;
    console.log(this.userId);
    if(agreeList) {
      for(let ele of agreeList) {
        if(ele == this.userId) {
          this.userAgree= true;
          return true;
        }
      }
    }
    this.userAgree= false;
    return false;
  }

  updateUserData(data) {
    this.data = data;
    this.dataLoaded = true;
    window.scrollTo(0,0);
  }

  dataLoaded = false;
  
  onSelect(id) {
        this.router.navigate(['/question', id]);
  }

  onSelectUserId(id) {
    this.router.navigate(["user", id]);
  }


  agree(answerId) {
    if(this.userAgree)
      this.userAgree=false;
    else
      this.userAgree=true;
    this.util.agree(answerId); 
  }

  disagree(answerId) {
    if(this.userAgree)
      this.userDisagree=false;
    else
      this.userDisagree=true;
    this.util.disagree(answerId);
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
