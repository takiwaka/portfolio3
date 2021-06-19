import $ from "jquery";

$(function () {
  $(".jsc-toggle-button").on("click", function () {
    $(".jsc-nav-wrap,.jsc-toggle-button").toggleClass("is-open");
  });
});
