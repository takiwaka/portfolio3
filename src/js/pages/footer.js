import $ from "jquery";

$(function () {
  $(window).on("scroll", function () {
    $(".jsc-footerScroll").each(function () {
      var top = $(this).offset().top,
          position = top - $(window).height();

      if ($(window).scrollTop() > position) {
        $(this).addClass("is-active");
      }
    });
  });
});
