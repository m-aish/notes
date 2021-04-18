import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../../../../services/questions.service';
@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css'],
  providers: [QuestionsService]
})
export class CardPreviewComponent implements OnInit {

  // @Input() results: any;
  constructor(private questionsService: QuestionsService) {
    // // this.results = questions;
    // console.log(this.results + "unicorns");
  }

  ngOnInit(): void {
  }

  // getQuestions() {
  //   this.questions = this.questionsService.getQuestionsfromtext("The Vision API client libraries accesses the global API endpoint (vision.googleapis.com) by default. To store and process your data in the European Union only, you need to explicitly set the endpoint (eu-vision.googleapis.com). The code samples below show how to configure this setting.");

  //   if (this.questions)
  //     console.log(this.questions);
  // }
}
