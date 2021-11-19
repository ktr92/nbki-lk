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

  if ($(window).width() > 767) {
    $('tr.qtr').each(function (index) {
      let margin = index > 0 ? 23 : 0
      let left = 33 + margin * index + $(this).width() * index + 'px'
      console.log(left)
      $(this).css('left', left)
    })
  } else {
    $('tr.qtr').each(function (index) {
      let margin = index > 0 ? 11 : 0
      let left = 15 + margin * index + $(this).width() * index + 'px'
      console.log(left)
      $(this).css('left', left)
    })
  }


  (function ($) {
    $.fn.connectionItem = function (options) {
      var defaults = {
        to: $(window)
      };
      var settings = $.extend({}, defaults, options);
      return this.each(function () {
        var from = $(this);
        var x0, y0;
        var x, y, x1, y1, r;
        var to = $(settings.to);
        var hr = $("<hr/>", {
          "class": "connection",
          css: {
            position: "absolute"
          }
        }).appendTo(".table-line table");
        hr.css("transform-origin", 0);
        hr.css("-moz-transform-origin", 0);
        hr.css("-webkit-transform-origin", 0);
        hr.css("-o-transform-origin", 0);

        function fn() {
          var pos = from.position();
          x0 = pos.left + from.width() / 2;
          y0 = pos.top;
          pos = to.position();
          x1 = pos.left + to.width() / 2;
          y1 = pos.top;
          x = x1 - x0;
          y = y1 - y0;
          var w = Math.sqrt(x * x + y * y);
          r = 360 - 180 / Math.PI * Math.atan2(y, x);
          hr.css({
            left: x0,
            top: y0,
            width: w
          });
          hr.css("transform", "rotate(-" + r + "deg)");
          hr.css("-moz-transform", "rotate(-" + r + "deg)");
          hr.css("-webkit-transform", "rotate(-" + r + "deg)");
          hr.css("-o-transform", "rotate(-" + r + "deg)")
        }
        $(window).on({
          resize: fn,
          load: fn
        })
      })
    }
  })(jQuery);


  $(function () {
    function rand(a) {
      return 5 + Math.floor(Math.random() * a)
    }

    $.each(Array(12), function (indx, element) {
      $('<div>', {
        css: {
          top: rand(80) + "%",
          left: rand(80) + "%"
        },
        "class": "one"
      }).appendTo('.table-line table')
    });


    $("#qtr0").connectionItem({
      to: $("#qtr1")
    });
    $("#qtr1").connectionItem({
      to: $("#qtr2")
    });
    $("#qtr2").connectionItem({
      to: $("#qtr3")
    });
    $("#qtr3").connectionItem({
      to: $("#qtr4")
    });
    $("#qtr4").connectionItem({
      to: $("#qtr5")
    });
    $("#qtr5").connectionItem({
      to: $("#qtr6")
    });
    $("#qtr6").connectionItem({
      to: $("#qtr7")
    });
    $("#qtr7").connectionItem({
      to: $("#qtr8")
    });
    $("#qtr8").connectionItem({
      to: $("#qtr9")
    });
    $("#qtr9").connectionItem({
      to: $("#qtr10")
    });
    $("#qtr10").connectionItem({
      to: $("#qtr11")
    });
    $("#qtr11").connectionItem({
      to: $("#qtr12")
    });




  });






  /* $('.lkgrid_wrap .lkgrid__items').each(function () {
    const items = $(this).find('.lkgrid__item')
    console.log(items)
    $(this).css('height', items[0].outerHeight() + items[1].outerHeight())
  }) */


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