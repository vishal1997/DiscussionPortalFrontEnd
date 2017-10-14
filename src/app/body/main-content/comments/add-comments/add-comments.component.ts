import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  providers:[AppService],
  styleUrls: ['./add-comments.component.css'],
  host:{'style':'width:100%'}
})
export class CommentsComponent implements OnInit {

  constructor(private _appService:AppService, private _route:ActivatedRoute,public snackBar: MdSnackBar) { }

  answer = {answerId:""};

  ngOnInit() {

  }

  comment = "";
  submitNewComment() {
    this.addCommentProgress = true;
    let answerId = this._route.snapshot.params['id'];
    this._appService.addComment(answerId,this.comment)
    .subscribe(resAppData => this.openSnackBar(resAppData.status, "Done"));
  }

  openSnackBar(message: string, action: string) {

    this.addCommentProgress = false;

    this.snackBar.open(message, action, {
      duration: 2000,
    });

    this.comment = "";
  }

  addCommentProgress = false;

}
