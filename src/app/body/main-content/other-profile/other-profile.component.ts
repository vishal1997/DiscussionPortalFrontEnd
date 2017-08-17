import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { UtilComponent } from '../../../app.util';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class OtherProfileComponent implements OnInit {

  constructor(private _appService:AppService, private router:Router, private util:UtilComponent, private _route:ActivatedRoute) { }
  otherUser =[]
   ngOnInit() {
    let userId = this._route.snapshot.params['id']; 
    this._appService.getOtherUserDetails(userId)
    .subscribe(resAppData => this.updateUserData(resAppData));
  }
  updateUserData(data) {
    this.otherUser = data;
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
