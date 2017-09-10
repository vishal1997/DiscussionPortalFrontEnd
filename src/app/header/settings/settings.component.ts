import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  host:{'style':'width:100%'},
  providers:[AppService]
})
export class SettingsComponent implements OnInit {

  constructor(private _appService:AppService, private snackBar:MdSnackBar) { }

  cpassword="";
  password="";
  email="";
  status={status:""};
  change=false;
  error="";
  invalid=false;
  ngOnInit() {
  }

  onSubmitPassword() {
    
    if(this.matchPassword()) {
      this.change=true;
      this._appService.onSubmitPassword(this.password)
          .subscribe((res)=>this.openSnackBar(res.status,"Done"));
    } else {
      this.error="Password not matched"
      this.invalid=true;
    }
  }

  matchPassword() {
    if(this.cpassword==this.password){
      return true;
    } else {
      return false;
    }
  }

  openSnackBar(message: string, action: string) {
    this.change = false;
    this.snackBar.open(message, action, {
      duration: 3000,
    });
    this.password= "";
    this.cpassword="";
    this.email="";
  }
    
  onSubmitEmail() {
    this._appService.onSubmitEmail(this.email)
        .subscribe((res)=>this.openSnackBar(res.status,"Done"));
  }
}
