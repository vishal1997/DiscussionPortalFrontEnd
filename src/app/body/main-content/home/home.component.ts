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
  userId={};
  userAgree=false;
  userDisagree=false;
  ngOnInit() {

    this._appService.getFeeds()
    .subscribe(resAppData => this.updateUserData(resAppData));

    this.getUserId();
  }

  onSelectComment(id) {
    this.router.navigate(['/answer', id]);
  }
  getDisagreeStatus(disagreeList) {

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
  }

  dataLoaded = false;
  
  onSelect(id) {
        this.router.navigate(['/question', id]);
  }

  onSelectUserId(id) {
    this.router.navigate(["user", id]);
  }


  agree(answerId) {
    this.util.agree(answerId); 
  }

  disagree(answerId) {
    this.util.disagree(answerId);
  }

  getUserId() {
    this.userId=  this._appService.getUserId()
    .subscribe((resAppData) => this.userId = resAppData);
    
  }
}
