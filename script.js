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
