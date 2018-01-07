import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _appService: AppService, private router : Router ) { }
  data={username:""}
  username =""
  status ={}
  proceed = false
  click = false
  cpassword="";
  password="";
  otp="";
  email="";
  change=false;
  error="";
  invalid=false;
  userValid = true;
  ngOnInit() {
  }

  forgot() {
    this.click = true;
    this.userValid = true;
    console.log(this.data.username);
    this._appService.forgotPassword(this.data.username)
                .subscribe(this.status = resApp =>  {
                  if(resApp.status == "Success") {
                    this.proceed = true;
                  } 
                  else {
                    this.userValid = false;
                    this.click = false;
                    this.username = "";
                    this.data.username="";
                  }});
  }

  onSubmit() {
    this._appService.resetPassword(this.data.username, this.password, this.otp)
                  .subscribe(this.status = resApp => {
                    if(resApp.status == "Success" ) {
                      this.router.navigateByUrl("/login");}
                    else {
                      this.initVariable();
                    }})
  }
  initVariable() {
    this.change = true;
    this.password="";
    this.cpassword="";
    this.otp="";
  }
}
