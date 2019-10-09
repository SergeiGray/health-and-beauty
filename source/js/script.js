'use strict';

(function () {

  var hangFlexslider = function () {
    $(document).ready(function() {
      $('.team__slider').flexslider({
        selector: ".team__slider_container > li",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 1875,
        itemMargin: 0,
        minItems: 1,
        maxItems: 1,
        controlNav: false,
        directionNav: true,
        touch: true,
        move: 1
      });

      $('.feedback__slider').flexslider({
        selector: ".feedback__slider_container > li",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 328,
        itemMargin: 30,
        minItems: 1,
        maxItems: 5,
        controlNav: false,
        directionNav: true,
        touch: true,
        move: 1
      });
    });
  };

  var getBlockQuestionsSlider = function () {
    $('.questions .item .subtitle').click( function (evt) {
        evt.preventDefault();
        $(evt.target).parents('.item').find('.text').slideToggle('slow', function() {
          $(evt.target).parents('.item').toggleClass('active');
        });
    });
  };

  var getTimer = function () {
    jQuery(document).ready(function($) {

      $("[data-timer]").each(function () {
        var $this = $(this);
        var timerDescription = $this.prop('title');

        if (timerDescription != false) {
          timerDescription = timerDescription+': ';
        };

        var dateArr = $this.data("timer").split(",");

        dateArr = $.map(dateArr, function (elem) {
          return parseInt(elem);
        });

        dateArr[1]--;

        var date = new Date(dateArr[0], dateArr[1], dateArr[2], dateArr[3], dateArr[4], dateArr[5]);

        $this.countdown({
          until: date,
          layout:'<ul class="timer_list">{y<}<li class="timer_item">{yn} {yl}</li>{y>}{o<}<li class="timer_item">{on} {ol}</li>{o>}{d<}' +
            ' <li class="timer_item"> <span class="value"> {d10}{d1} </span> <span class="caption"> {dl} </span> </li>{d>}{h<}' +
            ' <li class="timer_item"> <span class="value"> {h10}{h1} </span> <span class="caption"> {hl} </span> </li>{h>}{m<}' +
            ' <li class="timer_item"> <span class="value"> {m10}{m1} </span> <span class="caption"> {ml} </span> </li>{m>}{s<}' +
            ' <li class="timer_item"> <span class="value"> {s10}{s1} </span> <span class="caption"> {sl} </span> </li>{s>}</ul>',
          padZeroes: true,
          description: timerDescription
        }, $.countdown.regional['ru']);

      });
    });
  };

  var getStickyMenu = function () {
    $(window).scroll(function() {
      if($(this).scrollTop() >= 800) {
          $('.header').addClass('stickytop');
      }
      else{
          $('.header').removeClass('stickytop');
      }
    });
  };

  var openHeaderMenu = function () {
    $('.menu_open').click( function (evt) {
      evt.preventDefault();
      $('.stickytop .logo').addClass('display_off');
      $('.stickytop .menu_open').addClass('display_off');
      $('.stickytop .header_menu').addClass('display_on');
    });
  };

  var closeHeaderMenu = function () {
    $('.menu_close').click( function (evt) {
      evt.preventDefault();
      $('.stickytop .logo').removeClass('display_off');
      $('.stickytop .menu_open').removeClass('display_off');
      $('.stickytop .header_menu').removeClass('display_on');
    });
  };

  hangFlexslider();
  getBlockQuestionsSlider();
  getTimer();
  getStickyMenu();
  openHeaderMenu();
  closeHeaderMenu();

}());
