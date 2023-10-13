    
$(document).ready(function () {
  $('#adfox_1481016455133635').parent().addClass('z-index-up--for-b');
 $('.g-header').addClass('z-index-up');

    var currentScroll = $(window).scrollTop();

 setTimeout(function(){
     $('html').scrollTop(currentScroll + 1);
     var mikkiMainBlock = $('.mikki-on-rope'),
         mikkiContainer = $('.mikki-on-rope__container'),
         mikkiGift = $('.mikki-on-rope__img-gift'),
         mikkiSpeach = $('.mikki-on-rope__text-img'),
         creavitePadding = 110,
         currentScreenWidth = $(window).width();
         if (currentScreenWidth < 1024) {
             var usingMenu = 'g-header';
         } else {
             var usingMenu = 'main-nav';
         }

     var mainMenuPosition = $('.'+usingMenu).offset().top + $('.'+usingMenu).outerHeight() - creavitePadding;

     mikkiMainBlock.css('top', mainMenuPosition+'px');

     mikkiMainBlock.addClass('animated');

     setTimeout(function () {
          mikkiContainer.addClass('animated-1');

      },2300);
     setTimeout(function () {
         mikkiContainer.addClass('animated-2');
         mikkiGift.addClass('animated');
     },3300);

      setTimeout(function() {
        mikkiSpeach.css('transform', 'scale(1)');
     }, 7000);

     $(window).scroll(function (e) {
       if($('.main-nav').hasClass('fixed')) {
           mainMenuPosition = $('.'+usingMenu).outerHeight() - creavitePadding;
           mikkiMainBlock.css('top', mainMenuPosition+'px');
       } else {
           mainMenuPosition = $('.'+usingMenu).offset().top + $('.'+usingMenu).outerHeight() - creavitePadding;
           mikkiMainBlock.css('top', mainMenuPosition+'px');
       }
     });

      $(document).on('click', '.mikki-on-rope__close, .mikki-on-rope__container', function () {
          mikkiMainBlock.fadeOut(300);
      });
    }, 500);
});