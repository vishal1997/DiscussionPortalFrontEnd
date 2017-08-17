import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { UtilComponent } from '../../../app.util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class ProfileComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router, private util:UtilComponent) { }
  user = [];
  ngOnInit() {
    this._appService.getUserDetails()
    .subscribe(resAppData => this.updateUserData(resAppData));
  }
  updateUserData(data) {
    this.user = data;
    this.dataLoaded = true;
  }
  dataLoaded = false;
  onSelect(id) {
        this.router.navigate(['/question', id]);
  }

  agree(answerId) {
    this.util.agree(answerId); 
    }
  
    disagree(answerId) {
      this.util.disagree(answerId);
    }

}
