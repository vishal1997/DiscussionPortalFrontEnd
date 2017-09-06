import {Injectable, ErrorHandler} from '@angular/core';
import {Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { LoginResponse } from './body/main-content/login/loginResponse.component';

@Injectable()
export class AppService {
    constructor(private _http:Http) {}
    getQuestionDetails(questionId) {
        return this._http.get("/api/v1/answers/" + questionId)
                .map((response:Response) => response.json());
    }

    addQuestion(questionObj) {
        return this._http.post("/api/v1/question", questionObj)
                .map((response:Response) => response.json());
    }

    addAnswer(answer,questionId) {
        return this._http.post("/api/v1/" + questionId +"/answer", answer)
        .map((Response:Response) => Response.json());
    }

    getAnswerDetails(answerId) {
        return this._http.get("/api/v1/answer/"+ answerId)
                .map((response:Response) => response.json());
    }

    getUserDetails() {
        return this._http.get("/api/v1/myanswers")
                .map((response:Response) => response.json());
    }

    getOtherUserDetails(userId) {
        return this._http.get("/api/v1/" + userId + "/answers")
                .map((response:Response) => response.json());
    }

    getFeeds() {
        return this._http.get("/api/v1/home")
                .map((response:Response) => response.json());
    }

    agreeDisagree(answerId, option) {
        return this._http.put("/api/v1/"+ answerId, option)
                .map((response:Response) => response.text() ? response.json() : response);
    }

    getUserId() {
        return this._http.get("/api/v1/me")
                .map((response:Response) => response.json());
    }

    addComment(answerId, comment) {
        return this._http.put("/api/v1/comments/"+ answerId, comment)
                .map((response: Response) => response.text() ? response.json(): response);
    }

    getCommentDetails(answerId) {
        return this._http.get("/api/v1/allcomments/" + answerId) 
                .map((response: Response) => response.text() ? response.json(): response);
    }


    addNewUser(register) {
        return this._http.post("/api/v1/register", register) 
                .map((response:Response) => response.text() ? response.json() : response);
    }

    isLoggedin:boolean;

    login(usercreds) {

        this.isLoggedin = false;
        let headers = new Headers({'X-Requested-With': 'XMLHttpRequest','Access-Control-Allow-Origin' : '*','Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        let creds = {username:  usercreds.username, password: usercreds.password};
        let body = this.serializeObj(creds);

        return this._http.post("/userloginpage", body, {headers: headers})
                .map((response:Response) => JSON.parse(JSON.stringify(response || null )));
    }

    private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
    
        return result.join("&");
    }

    logout() {
        return this._http.get("/userlogoutpage")
            .map((response:Response) => JSON.parse(JSON.stringify(response || null )));
    }

    getQuestionsByUserId() {
        return this._http.get("/api/v1/questions")
            .map((response:Response) => response.json());
    }

    getQuestionsByOtherUserId(userId) {
        return this._http.get("/api/v1/"+userId+"/questions")
            .map((response:Response) => response.json());
    }
}