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
    });
  };

  hangFlexslider();

}());
