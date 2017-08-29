import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AppService]
})
export class LoginComponent implements OnInit {

  constructor(private _appService:AppService) { }

  ngOnInit() {
  }

  username=''
  password='';
  data={username:"",
      password:""}

  login() {
    console.log(this.username);
    this._appService.loginPage(this.username, this.password)
    .subscribe(resAppData => resAppData.status);
  }

}
