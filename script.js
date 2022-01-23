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

Vue.component("modal", {
    template: "#popup"
  });
  
  const router = new VueRouter()
  
  var vue = new Vue({
    el: "#flash",
    router,
    data: {
      showModal: false,
      isButtonDisabled: false,
      loaded: false,
      name: '',
      phone: '',
      email: '',
      text: '',
      check: ''
    },
    methods: {
      back: function () {
        this.showModal = false
      },
      onSubmit: function (e) {
        this.isButtonDisabled = true;
        this.loaded = true;
        setTimeout(() => {
          e.preventDefault();
           
          fetch('https://formcarry.com/s/OqfoTeY9DSi', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ name: this.name, phone: this.phone, email: this.email, text: this.text, check: this.check })
          })
            .then(response => {
              this.clear()
              console.log(response);
              alert("Сообщение успешно доставлено");
            })
            .catch(error => {
              console.log(error);
              alert("Ошибка");
            })
          this.isButtonDisabled = false;
          this.loaded = false
        }, 2000);
  
      },
      clear: function () {
        this.name = ''
        localStorage.name = ''
        this.phone = ''
        localStorage.phone = ''
        this.email = ''
        localStorage.email = ''
        this.text = ''
        localStorage.text = ''
      }
    },
    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name;
      }
      if (localStorage.phone) {
        this.phone = localStorage.phone;
      }
      if (localStorage.email) {
        this.email = localStorage.email;
      }
      if (localStorage.text) {
        this.text = localStorage.text;
      }
    },
    watch: {
      name(newName) {
        localStorage.name = newName;
      },
      phone(newName) {
        localStorage.phone = newName;
      },
      email(newName) {
        localStorage.email = newName;
      },
      text(newName) {
        localStorage.text = newName;
      }
    },
  })
  
  new Vue({
    el: "#contact-form",
    data: {
      name: '',
      phone: '',
      email: '',
      text: ''
    },
    mounted() {
      if (localStorage.name) {
        this.name = localStorage.name;
      }
      if (localStorage.phone) {
        this.phone = localStorage.phone;
      }
      if (localStorage.email) {
        this.email = localStorage.email;
      }
      if (localStorage.text) {
        this.text = localStorage.text;
      }
    },
    watch: {
      name(newName) {
        localStorage.name = newName;
      },
      phone(newName) {
        localStorage.phone = newName;
      },
      email(newName) {
        localStorage.email = newName;
      },
      text(newName) {
        localStorage.text = newName;
      }
    }
  })
  
  window.onpopstate = function () {
    vue.back()
  };
