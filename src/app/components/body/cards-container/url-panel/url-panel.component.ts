import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../../services/questions.service'
@Component({
  selector: 'app-url-panel',
  templateUrl: './url-panel.component.html',
  styleUrls: ['./url-panel.component.css'],
  providers: [QuestionsService]
})
export class UrlPanelComponent implements OnInit {
  questions: any;
  constructor(private questionsService: QuestionsService) { }
  ngOnInit(): void {
  }
  getQuestions(input) {
    console.log(input.value);
    this.questions = this.questionsService.getQuestionsfromUrl(input.value);
    console.log(this.questions);
  }

}




