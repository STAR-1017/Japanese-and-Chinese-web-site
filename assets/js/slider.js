$(function(){
  $('#sliderWrap').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerPadding: '30%',
        cssEase: 'ease-in-out',
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        responsive: [
          {
            breakpoint: 1217,
            settings: {
              centerMode: true,
              autoplaySpeed: 3000,
              slidesToShow: 1,
              centerPadding: '20%',
            }
          },
          {
            breakpoint: 700,
            settings: {
              centerMode: true,
              autoplaySpeed: 3000,
              slidesToShow: 1,
              centerPadding: '10%',
            }
          },
        ]
      });
});
