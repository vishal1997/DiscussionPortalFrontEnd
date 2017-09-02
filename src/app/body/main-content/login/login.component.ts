import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AppService]
})
export class LoginComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router) { }

  ngOnInit() {
    this.clearfields();
  }

  data={username:"",
      password:""}
  error="";
  userId={};
  loginPage() {
    this._appService.login(this.data).subscribe((res) => {
        if(res.headers.connection[0]=="keep-alive") {
          console.log(res)
          this.getUserId()
          console.log(this.userId)
          window.localStorage.setItem("userId", this.userId.toString()  );
          this.router.navigateByUrl("/home");
        }
        else
        console.log(res);
    })
}


getUserId() {
  this.userId=  this._appService.getUserId()
  .subscribe((resAppData) => this.userId = resAppData);  
}

  clearfields() {
    this.data.username = '';
    this.data.password = '';
  }
}
