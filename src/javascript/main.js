 
 $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    arrows: true,
    prevArrow: ".arrow-prev",
    nextArrow: ".arrow-next",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.gallery').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
  });




  var $btnTop = $(".btn-top")
  $(window).on("scroll", function(){
    if ($(window).scrollTop() >= 150){
      $btnTop.fadeIn();
    }
    else {
      $btnTop.fadeOut();
    }
  });
  