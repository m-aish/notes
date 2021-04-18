import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

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



}
