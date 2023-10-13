function addCookieInpageBan() {

}

$(document).ready(function () {
    var objToStick = $(".inpage_background"); //Получаем нужный объект
    var topOfObjToStick = $('.inpage_container:first-child').offset().top; //Получаем начальное расположение нашего блока
    var bottomOfObjToStick = $('#converter').offset().top; //Получаем начальное расположение нашего блока
    var counter = false;
    var inpageVideo = document.getElementById("inpage-video");
    var holeSize = $('.inpage_video').outerHeight(); //Получаем высоту видео
    //Сделать класс который будет отмечать конец блока в который вставляется инпейдж
    var e1 = $('.page_currency').offset().top;
    var e2 = $('.page_currency').height();
    var endContainer = e1 + e2;




    $('.inpage_hole, .inpage_hole a').css('height',holeSize+'px'); //Устанавливаем высоту дыры и высоту ссылки равной высоте видео

    $(window).scroll(function () {
        if (counter == false){
            counter = visibilityBlockRequest('.inpage_hole', 'inpage_view');
        }

        var windowScroll = $(window).scrollTop(); //Получаем величину, показывающую на сколько прокручено окно

        if (windowScroll > topOfObjToStick && windowScroll < endContainer) { // Если прокрутили больше, чем расстояние до блока, то приклеиваем его
            objToStick.removeClass('hidden');
            objToStick.addClass('visible');
   

        } else {
            objToStick.removeClass('visible');
            objToStick.addClass('hidden');
       
        }
    });

    $('.inpage_table .head-sort').on('click', function () {
        $('.inpage_hole').css('display','none');
        $('.inpage_background').remove();
    });

    $('.inpage_close').on('click', function () {
        addCookieInpageBan();
        $(this).closest('tr').css('display','none');
    })
});