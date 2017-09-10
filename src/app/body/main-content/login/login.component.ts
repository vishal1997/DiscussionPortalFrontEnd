import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { UtilComponent } from '../../../app.util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AppService, UtilComponent]
})
export class LoginComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router, private util:UtilComponent) { }

  data={username:"",
  password:""}
  error="";
  invalid=false;
  userId={};
  loading = false;
  status={};  

  ngOnInit() {
    if(window.localStorage.getItem('userId')) { 
      this.util.logout();
    }
  }


  register() {
    this.router.navigateByUrl("/register");
  }

  loginPage() {
    this.loading=true;
    this._appService.login(this.data).subscribe((res) => {
      console.log(res);
        if(res.status=="200") {
          this.util.getUserId()
          window.localStorage.setItem("userId", this.util.userId.toString());
          this.router.navigateByUrl("/home");
        }
    });
    this.logingFailed();
  }

  logingFailed() {
    if(this.data["status"]!="200")  {
      this.loading=false;
      this.error="Failed to login";
      this.invalid=true;
    }
  }

  clearfields() {
    this.data.username = '';
    this.data.password = '';
  }
}
