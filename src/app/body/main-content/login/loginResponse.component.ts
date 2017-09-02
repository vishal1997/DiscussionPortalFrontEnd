import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-login',
  providers:[AppService]
})
export class LoginResponse implements OnInit {

  constructor(private _appService:AppService) { }

  ngOnInit() {
  }
}
