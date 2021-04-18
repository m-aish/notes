import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  cards: Array<any> = [

    {
      heading: "Copy & Paste your Notes",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.",
      icon: "../../../assets/images/quote-right-solid.svg",
      selected: false
    },
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
    //FLASHCARDS FUNCTIONALITY

    var $card = $('.flash-card');
    var lastCard = $(".flash-card-list .flash-card").length - 1;

    $('.next').click(function () {
      var prependList = function () {
        if ($('.flash-card').hasClass('activeNow')) {
          var $slicedCard = $('.flash-card').slice(lastCard).removeClass('transformThis activeNow');
          $('ul').prepend($slicedCard);
        }
      }
      $('li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
      setTimeout(function () { prependList(); }, 150);
    });

    $('.prev').click(function () {
      var appendToList = function () {
        if ($('.flash-card').hasClass('activeNow')) {
          var $slicedCard = $('.flash-card').slice(0, 1).addClass('transformPrev');
          $('.flash-card-list').append($slicedCard);
        }
      }

      $('li').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
      setTimeout(function () { appendToList(); }, 150);
    });
  }

  onToggle(card: any) {
    //Toggle in UI

    this.cards.forEach(item => {
      item.selected = false;
    });
    card.selected = !card.selected;
  }


  // //Function to set classes dynamically
  // showAndHide(panel: number) {
  //   let classes = {
  //     'is-active': false,
  //     'is-hidden': this.cards[panel].selected
  //     //if true, the class will be applied to the element - from the returned classes object
  //   }
  //   return classes;
  // }




}


