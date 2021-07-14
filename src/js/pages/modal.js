import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(function () {
  var $slickModal = $(".slick-modal");

  $slickModal.on("init", function (event, slick) {
    var slide = ".slick-slide";
    $slickModal
      .find(slide)
      .eq(slick.currentSlide)
      .find(".jsc-modal")
      .addClass("jsc-load")
      .removeClass("jsc-modal");
  });

  $slickModal
    .slick({
      // autoplay: true,
      // autoplaySpeed: 5000,
      // speed:1000,
      arrows: false,
      dots: true,
      dotsClass: "p-modal__dots",
      infinite: false,
    })
    .on("afterChange", function (event, slick, currentSlide) {
      $slickModal
        .find(".slick-slide")
        .eq(currentSlide)
        .find(".jsc-modal")
        .addClass("is-active");
    });
});
