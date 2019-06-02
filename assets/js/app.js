
var ga=new Array();/*拡大用画像指定*/
ga[0]='./assets/img/池さん飛ぶ.jpg';
ga[1]='./assets/img/池さんbefore after.jpg';
ga[2]='./assets/img/沖縄校3期生.jpg';
ga[3]='./assets/img/教える池さん.jpg';
ga[4]='./assets/img/集団の池さん.jpg';
ga[5]='./assets/img/横向き池さん.jpg';

let url=""; /*画像パス。画像が他のフォルダーに入っている時*/

var mes=new Array();   /*コメント指定。コメントが不要なら削除*/
mes[0]="Bungee jumping from the sea  by ATUSHI IKEDA";
mes[1]="Before After Show. by ATUSHI IKEDA";
mes[2]="One piece with very good students. by  ATUSHI IKEDA";
mes[3]="I am the world's best super engineer teacher.";
mes[4]="Always ask me to come across the sea.";
mes[5]="I am the only one. The world is looking for engineers.";

let henka = 50    /*★フェードの変化時間。原本80。 値が大きいほどゆっくり*/
let tid1;
let opacnt=10;　/*★透明度の増減の間隔。原本10。数値が小さいほど遅い*/

/*スライド部分*/
function Show(i){
   document.getElementById("Ga").src=url+ga[i];
   document.getElementById("Me").innerHTML=mes[i];/*★コメント不要ならこの１行は削除*/
   fdi();
}

/*フェード部分主体*/
function fdi() {
  let img = document.getElementById("Ga");
  img.style.visibility = "visible";
  fadeIn("Ga", 0);
}

function fadeIn(imgId, opacity) {
if (opacity <= 100) {
  setOpacity(document.getElementById(imgId), opacity);
  opacity += opacnt;
  tid1=window.setTimeout("fadeIn('" + imgId + "'," + opacity + ")", henka);  
} else {
  window.clearTimeout(tid1);
}
}
function setOpacity(img, opacity) {
  img.style.filter = "alpha(opacity:" + opacity + ")";/*★2行削除*/
  img.style.opacity = opacity / 100;
}




$( document ).ready(function() {

  $('.m_size').click(function(){
    $('.content').css({'justify-content':'flex-end','align-items':'flex-end' });
    $('.hello-group').css({'width':'300px','height':'80px','padding':'5px','background':'rgba(0,0,0,0.8)' });
    $('.hello-title').remove();
      
	});
  //ここまでがトップ画面までの変化

    let image = $('.img-profile');
    let aboutPosition = $('.about-myself').offset().top/1.5;
  
    $(window).on('scroll', function () {
  
      let scrollTop = $(this).scrollTop();
      image.css({ 'top': (aboutPosition - scrollTop) });
  
      if(scrollTop > aboutPosition){
        image.css({'top': 0})
      }
      //yokoのスクロール
      if (scrollTop > 100){
        $('.scrollTop:hidden').stop(true, true).fadeIn();
      } else{
        $('.scrollTop').stop(true, true).fadeOut();
      }//ここまで

      let fadeInTime = 0;  
      $('.service').each( function(i){
          let bottom_of_object = $(this).offset().top + $(this).outerHeight();
          let bottom_of_window = $(window).scrollTop() + $(window).height();
  
          if( bottom_of_window > bottom_of_object/1.25 ){
  
            $(this).delay(fadeInTime).animate({'opacity':'1'},2000);
             fadeInTime = fadeInTime + 400;
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
  $('.scrollTop').click(function(){
    $("html, body").animate({
      scrollTop:$(".container").offset().top
    }, 1500 );
    return false
  })
});
