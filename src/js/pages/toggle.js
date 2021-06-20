import $ from "jquery";

$(function () {
  $(".jsc-toggle-button-main").on("click", function () {
    $(".jsc-toggle-button-main").toggleClass("is-open");
    $(".jsc-nav-wrap-main").slideToggle();
    return false;
  });
  $(".jsc-toggle-button-sub").on("click", function () {
    $(".l-header__listLink--first").toggleClass("is-open");
    $(".jsc-nav-wrap-sub").slideToggle();
    return false;
  });
});