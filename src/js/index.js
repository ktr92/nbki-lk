import './maskedinput.min.js'



$(document).ready(function () {
  $("#checkbox_confirm").click(function () {
    $(this).closest('form').find('.js-next').attr("disabled", !this.checked);
  });

  $(".card__header").on('click', function () {
    $(this).find('.tooltip').toggleClass('visible')
  });
  $(".headertop__login").on('click', function (event) {
    event.preventDefault()
    $('.lkmenu').slideToggle()
  });

  $(".lkmenu__close").on('click', function (event) {
    event.preventDefault()
    $('.lkmenu').slideToggle()
  });


  $('.js-toggle').on('click', function (event) {
    event.preventDefault()
    $(this).closest('.serv').find('.serv__hidden').slideToggle()
    $(this).toggleClass('active')
  });


  /* $("input[name=date]").mask("99.99.9999");
   */

});


(function ($) {
  $(function () {

    $('.tabs ul').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
})(jQuery);