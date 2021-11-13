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


  /* $("input[name=date]").mask("99.99.9999");
   */

});