import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class ProfileComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router) { }
  user = [];
  ngOnInit() {
    this._appService.getUserDetails()
    .subscribe(resAppData => this.user = resAppData);
  }

    onSelect(id) {
        this.router.navigate(['/question', id]);
  }

}
