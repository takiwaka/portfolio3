import $ from "jquery";

$(function () {
  $(".jsc-toggle-button-main").on("click", function () {
    $(".jsc-nav-wrap-main,.jsc-toggle-button-main").toggleClass("is-open");
  });
  $(".jsc-toggle-button-sub").on("click", function () {
    $(".jsc-nav-wrap-sub").toggleClass("is-open");
  });
});
