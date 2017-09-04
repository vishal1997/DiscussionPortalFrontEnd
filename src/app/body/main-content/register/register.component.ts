import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AppService]
})
export class RegisterComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router) { }

  register={username: "",
            password: ""};
  
  ngOnInit() {
  }

  loginPage() {
    this.router.navigateByUrl("/login");
  }

  submitNewUser() {
    this._appService.addNewUser(this.register)
    .subscribe(resAppData => resAppData.status);
  }
}
