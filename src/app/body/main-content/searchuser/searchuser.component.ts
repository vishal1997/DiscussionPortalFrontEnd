import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class SearchuserComponent implements OnInit {

  constructor(private _appService: AppService, private router:Router, private _route:ActivatedRoute) {}

  ngOnInit() {
    this.search = this._route.snapshot.params['user']; 
    this.searchUsers();
  }

  search="";
  users=[];
  dataLoaded=false;
  searchUsers() {
    this._appService.getUsers(this.search)
    .subscribe((resApp)=> this.updateUserquestion(resApp));
  }

  updateUserquestion(data) {
    this.users = data;
    this.dataLoaded = true;
  }

  onSelectUser(userId) {
    this.router.navigate(["user",userId]);
  }
}
