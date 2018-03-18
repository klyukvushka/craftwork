 
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