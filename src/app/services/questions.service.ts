import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class QuestionsService {
    questionsfromdl: Object;
    constructor(private http: HttpClient) { }
    getQuestions(text) {
        let body = {
            text: text
        }
        this.http.post('https://gs4ossx7yj.execute-api.us-east-1.amazonaws.com/dev/text', { "text": text }, { headers: { 'Content-Type': 'text/plain' } })
            .subscribe(
                data => this.questionsfromdl = data);
        return this.questionsfromdl;
    }
}
