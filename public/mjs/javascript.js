$(function () {

  $("#homepage").height($(window).height());
  $(window).on("resize", function () {
    $("#homepage").height($(window).height());
  });

  // screen
  var swiper = new Swiper('.s_screen', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

})