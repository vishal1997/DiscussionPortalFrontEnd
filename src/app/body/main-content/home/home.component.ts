import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';
import { UtilComponent } from '../../../app.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class HomeComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router, private util:UtilComponent) { }

  data = [];
  res =[];
  ngOnInit() {
    this._appService.getFeeds()
    .subscribe(resAppData => this.updateUserData(resAppData));
  }
  updateUserData(data) {
    this.data = data;
    this.dataLoaded = true;
  }
  dataLoaded = false;
  onSelect(id) {
        this.router.navigate(['/question', id]);
  }
  agree(answerId) {
  this.util.agree(answerId); 
  }

  disAgree(answerId) {
    this.util.disAgree(answerId);
  }
}
