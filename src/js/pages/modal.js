import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(function () {
  var $slick = $(".slick");

  $slick.on("init", function (event, slick) {
    var slide = ".slick-slide";
    $slick
      .find(slide)
      .eq(slick.currentSlide + 1)
      .find(".jsc-modal")
      .addClass("jsc-scroll")
      .removeClass("jsc-modal");
  });

  $slick
    .slick({
      prevArrow:
        '<img src="assets/image/icon-prev.png" class="p-modal__arrow p-modal__arrow--prev">',
      nextArrow:
        '<img src="assets/image/icon-next.png" class="p-modal__arrow p-modal__arrow--next">',
      dots: true,
      dotsClass: "p-modal__dots",
    })
    .on("afterChange", function (event, slick, currentSlide) {
      $slick
        .find(".slick-slide")
        .eq(currentSlide + 1)
        .find(".jsc-modal")
        .addClass("is-active");
    });
});
