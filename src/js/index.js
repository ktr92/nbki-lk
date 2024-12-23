import './maskedinput.min.js'
import './bootstrap.min.js'




$(document).ready(function () {

  jQuery("a.scrollTo").click(function (event) {
    event.preventDefault()
    let elementClick = jQuery(this).attr("href");
    let destination = jQuery(elementClick).offset().top - 90;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 400);
    return false;
  });

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


  $("input.forminput_date").mask("99.99.9999");
  $("input.forminput_passport").mask("9999 999999");

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

function renderChartCustom(value) {
  var sectors = [
    0, 0, 0, 0, 1332
  ];
  if (value > 0 && value < 1000) {
    sectors[4] = sectors[4] - value;
    sectors[0] = ((value - 179) >= 0) ? 179 : value;
    sectors[1] = ((value - 623) >= 0) ? 444 : (((value - 179) > 0) ? (value - 179) : 0);
    sectors[2] = ((value - 912) >= 0) ? 289 : (((value - 623) > 0) ? (value - 623) : 0);
    sectors[3] = ((value - 999) >= 0) ? 87 : (((value - 912) > 0) ? (value - 912) : 0);
    document.getElementById('taho-overlay-main-digit').textContent = value;
    var desctext = '';
    if (value <= 179) {
      desctext = 'минимум';
    } else if (value <= 623) {
      desctext = 'низкий';
    } else if (value <= 912) {
      desctext = 'средний';
    } else {
      desctext = 'высокий';
    }
    document.getElementById('taho-overlay-description').textContent = desctext;
  } else {
    document.getElementById('taho-overlay-main-digit').textContent = '';
    document.getElementById('taho-overlay-description').textContent = '';
  }
  console.log(value);
  console.log(sectors);
  var chart2 = new CanvasJS.Chart("taho-overlay-chart-two", {
    animationEnabled: true,
    title: {

    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      innerRadius: 70,
      indexLabelFontSize: 17,
      startAngle: 135,
      indexLabel: "",
      toolTipContent: "",
      dataPoints: [{
          y: sectors[0],
          color: "#FF0028"
        },
        {
          y: sectors[1],
          color: "#F9F353"
        },
        {
          y: sectors[2],
          color: "#70FD57"
        },
        {
          y: sectors[3],
          color: "#5FC152"
        },
        {
          y: sectors[4],
          color: "white"
        },
      ]
    }]
  });
  chart2.render();
}

window.onload = function () {

  var chart = new CanvasJS.Chart("taho-chartContainer", {
    animationEnabled: false,
    title: {

    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      innerRadius: 130,
      indexLabelFontSize: 17,
      startAngle: 135,
      indexLabel: "",
      toolTipContent: "",
      dataPoints: [{
          y: 179,
          color: "#FF0028"
        },
        {
          y: 444,
          color: "#F9F353"
        },
        {
          y: 289,
          color: "#70FD57"
        },
        {
          y: 87,
          color: "#5FC152"
        },
        {
          y: 333,
          color: "white"
        },
      ]
    }]
  });
  chart.render();

  renderChartCustom(320);

  var input = document.getElementById('inputval');

  input.oninput = function () {
    renderChartCustom(input.value);
  };

}


$(document).ready(function () {

  $('.lkform__input input').each(function () {
    if ($(this).val() != "") {
      $(this).siblings('.lkform__label').show()
    }
  })

  $('.lkform__input input').focusin(function (event) {
    $(this).siblings('.lkform__label').show()
    $(this).addClass('placeholder_white')
  })

  $('.lkform__input input').focusout(function (event) {
    if ($(this).val() == "") {
      $(this).siblings('.lkform__label').hide()
    } else {

    }
    $(this).removeClass('placeholder_white')
  })

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 1)


})