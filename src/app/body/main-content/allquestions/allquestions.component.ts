import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { UtilComponent } from '../../../app.util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allquestions',
  templateUrl: './allquestions.component.html',
  styleUrls: ['./allquestions.component.css'],
  providers:[AppService, UtilComponent],
  host:{'style':'width:100%'},
})
export class AllquestionsComponent implements OnInit {

  constructor( private _appService:AppService, private util:UtilComponent, private router:Router) { }
  
    questions=[];
    dataLoaded=false;
    pageNo:number
    ngOnInit() {
  
      this.pageNo=0;
      this.getAllQuestions();
    }

    getAllQuestions() {
      this._appService.getAllQuestions(this.pageNo)
      .subscribe((resApp)=> this.updateUserquestion(resApp));
    }

    onSelectUser(userId) {
      this.router.navigate(['/user', userId]);
    }
  
    updateUserquestion(data) {
      this.questions = data;
      this.dataLoaded = true;
      window.scrollTo(0,0);
    }
  
    onSelect(id) {
      this.router.navigate(['/question', id]);
  }
  onClickNext() {
    this.pageNo++;
    this.getAllQuestions();
  }

  onClickPrevious() {
    if(this.pageNo!=0) {
      this.pageNo--;
      this.getAllQuestions();
    }
  }

}
