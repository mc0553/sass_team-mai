
$( document ).ready(function() {

    let image = $('.img-profile');
    let aboutPosition = $('.about-myself').offset().top/1.5;
  
    $(window).on('scroll', function () {
  
      let scrollTop = $(this).scrollTop();
      image.css({ 'top': (aboutPosition - scrollTop) });
  
      if(scrollTop > aboutPosition){
        image.css({'top': 0})
      }
      //洋子のスクロール
      if (scrollTop > 100){
        $('.scrolltop:hidden').stop(true, true).fadeIn();
      } else{
        $('.scrolltop').stop(true, true).fadeOut();
      }

      let fadeInTime = 0;  
      $('.service').each( function(i){
          let bottom_of_object = $(this).offset().top + $(this).outerHeight();
          let bottom_of_window = $(window).scrollTop() + $(window).height();
  
          if( bottom_of_window > bottom_of_object/1.25 ){
  
            $(this).delay(fadeInTime).animate({'opacity':'1'},2000);
             fadeInTime = fadeInTime + 1000;
          }
      });
    });
    
    //画像がクリックされたら、div＃overを追加
    　
    　$('.img-profile').click(function(){
   
       $('<div id="over">').appendTo($('.about-myself')).hide().fadeIn();
   
       $('#over').append($('<div class="img-box">'))
       $('.img-box').append($('<span class="close">&times;</span>'))
       $('.img-box').append($('<img class="lightbox"  width="500px">'))
   
       // .closeがクリックされたら、img-boxを消す
       $('.close').click(function() {
   
         $('.img-box').fadeOut('slow', function() {
         
           $('#over').fadeOut('fast', function() {
         
            $('#over').remove();
   
           })
         })
       })
   
   
     })


    //  youkoのトップへ戻るボタン
    $('.scrolltop').click(function(){
      $("html, body").animate({
          scrollTop:$(".container").offset().top
      }, "1000");
      return false
  })



  });