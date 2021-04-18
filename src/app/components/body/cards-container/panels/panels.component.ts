import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {

  @Input() cards: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

  //Function to set classes dynamically
  showAndHide(panel: number) {
    let classes = {
      'is-active': false,
      'is-hidden': this.cards[panel].selected
      //if true, the class will be applied to the element - from the returned classes object
    }
    return classes;
  }

}
