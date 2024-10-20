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
$('#sched-table a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

       /* Таймер */
  var clock;
  // var futureDate = new Date("October 27, 2024 00:00 UTC+3");
  // var currentDate = new Date();
  // var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // if (diff < 0) {
  //     diff = 0;
  //   //   $('#link').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1508&clean=true&lg=ru').text('Оплатить');
  //   //   $('.cost-sale, .timer,.prepayment').remove();
  //   //   $('.cost-full span').addClass('unbroken');
  // }

  clock = $('.clock').FlipClock( {
      clockFace: 'HourlyCounter',
      countdown: true,
      language: 'ru',
    //   callbacks: {
    //       stop: function () {
    //         $('#link').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1508&clean=true&lg=ru').text('Оплатить');
    //         $('.cost-sale, .timer,.prepayment').remove();
    //   $('.cost-full span').addClass('unbroken');
    //       }
    //   },
  });
  clock.setTime(86400);
  clock.start();
/*Конец документа*/
});