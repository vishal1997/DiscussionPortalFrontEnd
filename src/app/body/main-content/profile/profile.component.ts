import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { UtilComponent } from '../../../app.util';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class ProfileComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router, private util:UtilComponent,
    public snackBar: MdSnackBar) { }
  user = [];
  userDetails={};
  mapAgree = new Map<string, boolean>();
  mapDisagree = new Map<string, boolean>();
  pageno:number;
  pageno2:number;
  ngOnInit() {
    this.pageno=0;
    this.getUserDetails();
  }

  getUserDetails() {
    this._appService.getUserDetails(this.pageno)
    .subscribe(resAppData => {this.updateUserData(resAppData)});
  }

  updateUserData(data) {
    this.user = data;
    this.dataLoaded = true;
    if(this.pageno!=this.pageno2) {
      this.pageno2=this.pageno;
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

  onSelectUserId(id) {
    this.router.navigate(["user", id]);
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


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }

  deleteAnswer(answerId) {
    this._appService.deleteAnswer(answerId)
    .subscribe(resApp => this.openSnackBar("Delete", resApp.status ));
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
}
