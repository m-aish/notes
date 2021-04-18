import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  cards: Array<any> = [
    {
      heading: "Upload your Notes",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.",
      icon: "far fa-sticky-note",
      selected: false
    },
    {
      heading: "Notes from a URL",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.",
      icon: "fas fa-link",
      selected: false
    },
    {
      heading: "Link your Notes App",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.",
      icon: "fas fa-tablet-alt",
      selected: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(card: any) {
    //Toggle in UI

    card.selected = !card.selected;
    if (card.selected) {
      this.cards.forEach(item => {

        console.log(item.heading);
        if (card.heading != item.heading) item.selected = false;

        console.log(item.selected);
      });
    }
  }


}
