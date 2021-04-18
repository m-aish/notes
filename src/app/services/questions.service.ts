import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class QuestionsService {
    questionsfromdl: Object;
    keywordsfromibm: Object;
    conceptsfromibm: Object;
    constructor(private http: HttpClient) { }
    getQuestionsfromtext(text) {
        this.http.post('https://gs4ossx7yj.execute-api.us-east-1.amazonaws.com/dev/text', { "text": text }, { headers: { 'Content-Type': 'text/plain' } })
            .subscribe(
                data => this.questionsfromdl = data);
        this.http.get('http://localhost:3000/keywords', {"headers":{"text":text}})
        .subscribe(
            data => this.keywordsfromibm = data);
        if(this.keywordsfromibm!=null && this.questionsfromdl!=null )
        return {
            ibmkeywords:this.keywordsfromibm,
            questionsfromdl:this.questionsfromdl
        };
    }
    getQuestionsfromUrl(url){
        this.http.get('http://localhost:3000/keywordsurl', {"headers":{"url":url}})
        .subscribe(
            data => this.keywordsfromibm = data);
        if (this.keywordsfromibm)
        return this.keywordsfromibm;
    }
    getConceptsfromText(text){
        this.http.get('http://localhost:3000/keywords', {"headers":{"text":text}})
        .subscribe(
            data => this.conceptsfromibm = data);
        if(this.conceptsfromibm)
        return this.conceptsfromibm;
    }
    
    }
    