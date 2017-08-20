import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

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
        return this._http.get("/api/v1/user")
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

}