import { Component, OnInit } from '@angular/core';
import { UtilComponent } from '../../../../app.util';
import { AppService } from '../../../../app.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private util:UtilComponent, private _appService:AppService) { }

  userDetails={name:"",
                  gender:"",
                  dob:"",
                  branch:"",
                  sec:"",
                  admissionYear:"",
                  emailId:"",
                  city:"",
                  state:""
                }
  ngOnInit() {
    this.getUserProfileDetails();
  }
  getUserProfileDetails() {
    this._appService.getUserProfileDetails()
    .subscribe(resAppData => this.userDetails=resAppData);
}

}
