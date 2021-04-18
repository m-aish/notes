import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../../services/questions.service'

@Component({
  selector: 'app-notes-app-panel',
  templateUrl: './notes-app-panel.component.html',
  styleUrls: ['./notes-app-panel.component.css'],
  providers: [QuestionsService]
})
export class NotesAppPanelComponent implements OnInit {
  questions: any;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
  }

  getQuestions(notestext) {
    console.log(notestext.value);
    this.questions = this.questionsService.getQuestionsfromtext(notestext.value);
    console.log(this.questions);
  }

}
