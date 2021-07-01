import $ from "jquery";
$(function () {
  $(".jsc-pop-button").on("click", function () {
    $(".c-pop").fadeIn();
  });
  $(".js-pop-close").on("click", function () {
    $(".c-pop").fadeOut();
  });
});
