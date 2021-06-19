import $ from "jquery";

$(function () {
  $(window).on("scroll", function () {
    $(".jsc-scroll").each(function () {
      var $this = $(this),
          $window = $(window),
          scroll = $window.scrollTop(),
          windowHeight = $window.height(),
          position = $this.offset().top;

      if (scroll > position - windowHeight + windowHeight / 4) {
        $this.addClass("is-active");
      }
    });
  });
});
