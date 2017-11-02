import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../../app.service';
import { UtilComponent } from '../../../../app.util';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class AnswerComponent implements OnInit {

  constructor(private _appService:AppService, private _route:ActivatedRoute,
     private util:UtilComponent, private router:Router) { }

  answer = {answerId:"", 
            questionId:"", 
            sec:"", 
            answer:"", 
            question:"", 
            date:"", 
            answeredBy:"", 
            answeredByName:"", 
            commentId:{},
            noOfComment:"",
            noOfAgree:"",
            noOfDisagree:"",
            agree:{},
            disagree:{}
          };
  userAgree=false;
  userDisagree=false;
  color:String;
  userId = {};
  ngOnInit() {
    this.getData();
  }

  getData() {
    let answerId = this._route.snapshot.params['id'];
    this._appService.getAnswerDetails(answerId)
    .subscribe(resAppData => this.answer = resAppData);
  }

  onSelect(id) {
        this.router.navigate(['/question', id]);
  }

  onSelectUserId(id) {
    this.router.navigate(["user", id]);
  }
  agree(answerId) {
    this._appService.agreeDisagree(answerId, "agree")
    .subscribe(resAppData => this.update(resAppData));
  }

  update(data) {
    this.answer = data;
    this.getData();
  }

  disagree(answerId) {
    this._appService.agreeDisagree(answerId, "disagree")
    .subscribe(resAppData => this.update(resAppData));
  }
}
