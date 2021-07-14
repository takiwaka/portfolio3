import $ from "jquery";

$(function () {
  $(window).on("scroll", function () {
    $(".jsc-scroll-hide").each(function () {
      var $this = $(this),
        $window = $(window),
        scroll = $window.scrollTop(),
        windowHeight = $window.height(),
        position = $this.offset().top;

              if (scroll == 0) {
                $this.removeClass("is-active");
              }
              if (scroll > 100) {
                $this.addClass("is-active");
              }
    });
  });
  $(function(){
    var windowWidth = $(window).width();
    var headerHight = 50; 
    jQuery('a[href^=#]').click(function() {
    var speed = 1000;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
   });
});
});
