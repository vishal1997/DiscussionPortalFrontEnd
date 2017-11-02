import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../../app.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css'],
  providers:[AppService],
  host:{'style':'width:100%'}
})
export class AllCommentsComponent implements OnInit {

  constructor(private _appService:AppService, private _route:ActivatedRoute, public snackBar: MdSnackBar, 
    private router:Router) { }

  comments= []
  res = {};
  ngOnInit() {

    this.getComment();    
  }

  getComment() {
    let answerId = this._route.snapshot.params['id'];
    this._appService.getCommentDetails(answerId)
                    .subscribe(resAppData => this.comments = resAppData);
  }
  agreeComment(commentId) {
    this._appService.agreeComment(commentId, "agree")
                    .subscribe(resAppData => this.update(resAppData));
  }

  disagreeComment(commentId) {
    this._appService.disagreeComment(commentId,"disagree")
                    .subscribe(resAppData => this.update(resAppData));
    
  }

  update(resAppData) {
    this.getComment();
  }

}
