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
      icon: "../../../assets/images/file-alt-regular.svg",
      selected: false
    },
    {
      heading: "Notes from a URL",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.",
      icon: "../../../assets/images/link-solid.svg",
      selected: false
    },
    {
      heading: "Copy & paste your Notes",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.",
      icon: "../../../assets/images/quote-right-solid.svg",
      selected: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  /* 
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

  */


}
