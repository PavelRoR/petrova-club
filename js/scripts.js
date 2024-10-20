$(document).ready(function() {
  /* Якорь */
  $("a.button-up").click(function (h) {
    h.preventDefault();
    var f = $(this).attr("href"),
        g = $(f).offset().top;
    $("body,html").animate({
        scrollTop: g
    }, 1500)
});
// $('#sched-table a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })

       /* Таймер */
  // var clock;
  // // var futureDate = new Date("October 27, 2024 00:00 UTC+3");
  // // var currentDate = new Date();
  // // var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // // if (diff < 0) {
  // //     diff = 0;
  // //   //   $('#link').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1508&clean=true&lg=ru').text('Оплатить');
  // //   //   $('.cost-sale, .timer,.prepayment').remove();
  // //   //   $('.cost-full span').addClass('unbroken');
  // // }

  // clock = $('.clock').FlipClock( {
  //     clockFace: 'HourlyCounter',
  //     countdown: true,
  //     language: 'ru',
  //   //   callbacks: {
  //   //       stop: function () {
  //   //         $('#link').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1508&clean=true&lg=ru').text('Оплатить');
  //   //         $('.cost-sale, .timer,.prepayment').remove();
  //   //   $('.cost-full span').addClass('unbroken');
  //   //       }
  //   //   },
  // });
  // clock.setTime(86400);
  // clock.start();




  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      // 'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      // daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);
/*Конец документа*/
});