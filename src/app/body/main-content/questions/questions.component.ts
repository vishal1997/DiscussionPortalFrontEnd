import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { UtilComponent } from '../../../app.util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'}
})
export class QuestionsComponent implements OnInit {

  constructor( private _appService:AppService, private util:UtilComponent, private router:Router) { }

  questions=[];
  dataLoaded=false;
  ngOnInit() {

    this._appService.getQuestionsByUserId()
    .subscribe((resApp)=> this.updateUserquestion(resApp));
  }

  updateUserquestion(data) {
    this.questions = data;
    this.dataLoaded = true;
  }

  onSelect(id) {
    this.router.navigate(['/question', id]);
}
}
