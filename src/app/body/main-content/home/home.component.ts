import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class HomeComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router) { }
  data = [];
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

}
