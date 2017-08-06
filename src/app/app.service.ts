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
}