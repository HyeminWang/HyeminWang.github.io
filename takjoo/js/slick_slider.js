$(document).ready(function() {
    var $slider = $('.multiple-items');
    var $progressBar = $('.swiper_scrollbar');
    var $progressBarLabel = $('.slider_label');
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 400,
      responsive: [
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint:390,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });