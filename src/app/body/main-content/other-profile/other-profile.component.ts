import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { UtilComponent } from '../../../app.util';
import { MdSnackBar } from '@angular/material';
@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class OtherProfileComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router,
    public snackBar: MdSnackBar, private util:UtilComponent, private _route:ActivatedRoute) { }
  otherUser =[];
  questions=[];
  userId={};
  pageno:number;
  pageno2:number;
  userDetails={name:"",
                  branch:"",
                  dob:"",
                  gender:"",
                  admissionYear:"",
                  sec:"",
                  emailId:"",
                  city:"",
                  state:""
                };
   ngOnInit() {
    this.pageno=0;
    this.userId = this._route.snapshot.params['id']; 

    this.getUserDetails();
    this.getUserQuestions();
    this.getOtherUserDetails();
  }

  getUserQuestions() {
    this._appService.getQuestionsByOtherUserId(this.userId)
    .subscribe((resApp)=> this.questions= resApp);
  }

  getOtherUserDetails() {
    this._appService.getOtherUserProfile(this.userId)
    .subscribe((resApp)=> this.userDetails=resApp);
  }

  getUserDetails() {
    this._appService.getOtherUserDetails(this.userId, this.pageno)
    .subscribe(resAppData => this.updateUserData(resAppData));
  }
  updateUserData(data) {
    this.otherUser = data;
    this.dataLoaded = true;
    if(this.pageno!=this.pageno2) {
      this.pageno2 = this.pageno;
      window.scrollTo(0,0);
    }
  }
  dataLoaded = false;
  onSelect(id) {
        this.router.navigate(['/question', id]);
  }

  onSelectComment(id) {
    this.router.navigate(['/answer', id]);
  }


  agree(answerId) {
    this._appService.agreeDisagree(answerId, "agree")
    .subscribe(resAppData => this.update(resAppData));
  }

  update(data) {
    this.getUserDetails();
  }

  disagree(answerId) {
    this._appService.agreeDisagree(answerId, "disagree")
    .subscribe(resAppData => this.update(resAppData));
  }


  onClickNext() {
    this.pageno++;
    this.getUserDetails();
  }

  onClickPrevious() {
    if(this.pageno!=0) {
      this.pageno--;
      this.getUserDetails();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }

}
