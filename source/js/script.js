'use strict';

(function () {

  var hangFlexslider = function () {
    $(document).ready(function() {
      if($(window).width() > 2000) {
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
      };

      if($(window).width() < 750) {
        $('.feedback__slider').flexslider({
          selector: ".feedback__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 242,
          itemMargin: 20,
          minItems: 1,
          maxItems: 5,
          controlNav: false,
          directionNav: true,
          touch: true,
          move: 1
        });
      };

      if($(window).width() < 1270) {
        $('.team__slider').flexslider({
          selector: ".team__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 715,
          itemMargin: 0,
          minItems: 1,
          maxItems: 1,
          controlNav: false,
          directionNav: true,
          touch: true,
          move: 1
        });
      };

      if($(window).width() < 2000) {
        $('.team__slider').flexslider({
          selector: ".team__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 1505,
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
          itemWidth: 265,
          itemMargin: 25,
          minItems: 1,
          maxItems: 5,
          controlNav: false,
          directionNav: true,
          touch: true,
          move: 1
        });
      };
    });
  };

  var scrollBarСustomization = function () {
    if($(window).width() > 750) {
      $('body').niceScroll({
        cursorborder: "none",
        horizrailenabled: false
      });
    };
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
    if($(window).width() > 2000) {
      $(window).scroll(function() {
        if($(this).scrollTop() >= 800) {
            $('.header').addClass('stickytop');
        }
        else{
            $('.header').removeClass('stickytop');
        }
      });
    };

    if($(window).width() < 2000 && $(window).width() > 1270) {
      $(window).scroll(function() {
        if($(this).scrollTop() >= 630) {
            $('.header').addClass('stickytop');
            $('.landing').css('margin-top', '70px');
        }
        else{
          $('.stickytop .logo').removeClass('display_off');
          $('.stickytop .menu_open').removeClass('display_off');
          $('.stickytop .header_menu').removeClass('display_on');
          $('.header').removeClass('stickytop');
          $('.landing').css('margin-top', '0');
        }
      });
    };
  };

  var showMenu = function () {
    if($(window).width() > 1270) {
      $('.menu_open').click( function (evt) {
        evt.preventDefault();
        $('.stickytop .logo').addClass('display_off');
        $('.stickytop .menu_open').addClass('display_off');
        $('.stickytop .header_menu').addClass('display_on');
      });

      $('.menu_close').click( function (evt) {
        evt.preventDefault();
        $('.stickytop .logo').removeClass('display_off');
        $('.stickytop .menu_open').removeClass('display_off');
        $('.stickytop .header_menu').removeClass('display_on');
      });
    };
    if($(window).width() < 1270) {
      $('.menu_close, .overlay, .header_menu_link').click(function (){
          $('.header_menu').removeClass('popup_menu');
          $('.overlay').css({'opacity': 0, 'display': 'none'});
      });
      $('.menu_open_table').click(function (event){
        event.preventDefault();
        $('.header_menu').addClass('popup_menu');
        $('.overlay').css({'opacity': 1, 'display': 'flex'});
        $(document).keydown(function(event) {
            if (event.keyCode === 27) {
                event.stopPropagation();
                $('.header_menu').removeClass('popup_menu');
                $('.overlay').css({'opacity': 0, 'display': 'none'});
            }
        });
      });
    };
  };

  var getSmoothScrolling = function () {
    if($(window).width() > 1270) {
      $('a[href="#benefits"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#benefits').offset().top - 100 }, 1000);
      });
      $('a[href="#team"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#team').offset().top - 100 }, 1000);
      });
      $('a[href="#tariff"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#tariff').offset().top - 100 }, 1000);
      });
      $('a[href="#advantage"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#advantage').offset().top - 100 }, 1000);
      });
      $('a[href="#composition"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#composition').offset().top - 100 }, 1000);
      });
      $('a[href="#schedule"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#schedule').offset().top }, 1000);
      });
      $('a[href="#feedback"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#feedback').offset().top - 100 }, 1000);
      });
      $('a[href="#questions"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#questions').offset().top - 100 }, 1000);
      });
    };
    if($(window).width() < 1270) {
      $('a[href="#benefits"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#benefits').offset().top }, 1000);
      });
      $('a[href="#team"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#team').offset().top }, 1000);
      });
      $('a[href="#tariff"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#tariff').offset().top }, 1000);
      });
      $('a[href="#advantage"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#advantage').offset().top }, 1000);
      });
      $('a[href="#composition"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#composition').offset().top }, 1000);
      });
      $('a[href="#schedule"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#schedule').offset().top + 100}, 1000);
      });
      $('a[href="#feedback"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#feedback').offset().top }, 1000);
      });
      $('a[href="#questions"]').click(function(event){
        event.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('#questions').offset().top }, 1000);
      });
    };
  };

  var getValidityMessage = function () {
    $.validate({
      errorElementClass: 'sending_error',
      onError : function($form) { $('.sending_error').attr('placeholder', 'Введите почту'); }
    });
  };

  hangFlexslider();
  scrollBarСustomization();
  getBlockQuestionsSlider();
  getTimer();
  getStickyMenu();
  showMenu();
  getSmoothScrolling();
  getValidityMessage();

}());
