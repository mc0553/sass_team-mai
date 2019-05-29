$( document ).ready(function() {
    var image = $('.img-profile');
    var aboutPosition = $('.about-myself').offset().top/1.5;
  
    $(window).on('scroll', function () {
  
      var scrollTop = $(this).scrollTop();
      image.css({ 'top': (aboutPosition - scrollTop) });
  
      if(scrollTop > aboutPosition){
        image.css({'top': 0})
      }
  
  
      var fadeInTime = 0;
  
      $('.service').each( function(i){
  
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
  
          if( bottom_of_window > bottom_of_object/1.25 ){
  
            $(this).delay(fadeInTime).animate({'opacity':'1'},1000);
             fadeInTime = fadeInTime + 400;
          }
      });
    });
    
  });