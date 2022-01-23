$(".slider-1").on('afterChange', function (event, slick, currentSlide) {
    $(".slide-num-current").text("0" + String(currentSlide + 1));
  });
  $(document).ready(function () {
    $('.slider-1').slick({
      dots: false,
      prevArrow: $('.pr'),
      nextArrow: $('.nx'),
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

  /* Slick Slider */

$(document).ready(function () {
    $('.variable-width').slick({
      autoplay: true,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      centerMode: true,
      draggable: false,
      swipe: false,
      mobileFirst: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            slidesToShow: 2
          }
        }
      ]
    });
  
    $('.variable-width2').slick({
      autoplay: true,
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      draggable: false,
      swipe: false,
      mobileFirst: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        }
      ]
    });
  });
 
$(document).ready(function () {
    $('#contact-form1').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        url: '',
        dataType: "json",
        method: 'POST',
        data: {
          name: $('#name-of-form').val(),
          phone: $('#phone-of-form').val(),
          email: $('#email-of-form').val(),
          message: $('#message-of-form').val(),
          check: $('#happy').is(':checked')
        },
        success: function (response) {
          console.log('Got data: ', response);
          if (response.meta.status == 'success') {
            $('.modal').modal('hide');
            alert("Спасибо за отзыв!)");
          } else if (response.meta.status == 'fail') {
            $('.modal').modal('hide');
            alert("Ошибка(");
            console.log('Submission failed with these errors: ', response.meta.errors);
          }
        }
      });
    });
  });
