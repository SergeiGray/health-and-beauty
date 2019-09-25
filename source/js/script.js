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

  hangFlexslider();
  getBlockQuestionsSlider();

}());
