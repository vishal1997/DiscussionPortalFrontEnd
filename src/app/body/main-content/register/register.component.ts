import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class RegisterComponent implements OnInit {

  constructor(private _appService:AppService) { }

  register={username: "",
            password: ""};
  
  ngOnInit() {
  }

  submitNewUser() {
    this._appService.addNewUser(this.register)
    .subscribe(resAppData => resAppData.status);
  }
}
