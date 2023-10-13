$(document).ready(function () {
    function changeClasses(bloc) {
        $(bloc).on("click", ".commercial-all-formats__tab", function () {
            var tabs = $(bloc + " .commercial-all-formats__tab"),
                cont = $(bloc + " .commercial-all-formats__tab-cont");
            // Удаляем классы active
            tabs.removeClass("active");
            cont.removeClass("active");
            // Добавляем классы active
            $(this).addClass("active");
            cont.eq($(this).index()).addClass("active");
            return false;
        });
    }

    changeClasses("#commercial-all-formats-tabs-block1");
    changeClasses("#commercial-all-formats-tabs-block2");
    changeClasses("#commercial-all-formats-tabs-block3");
    changeClasses("#commercial-all-formats-tabs-block4");
    changeClasses("#commercial-all-formats-tabs-block5");
    changeClasses("#commercial-all-formats-tabs-block6");
    changeClasses("#commercial-all-formats-tabs-block7");
    changeClasses("#commercial-all-formats-tabs-block8");
    changeClasses("#commercial-all-formats-tabs-block9");
    changeClasses("#commercial-all-formats-tabs-block10");
    changeClasses("#commercial-all-formats-tabs-block11");
    changeClasses("#commercial-all-formats-tabs-block12");
    changeClasses("#commercial-all-formats-tabs-block13");
    changeClasses("#commercial-all-formats-tabs-block14");
    changeClasses("#commercial-all-formats-tabs-block15");
    changeClasses("#commercial-all-formats-tabs-block16");
    changeClasses("#commercial-all-formats-tabs-block17");
    changeClasses("#commercial-all-formats-tabs-block18");
    changeClasses("#commercial-all-formats-tabs-block19");
    changeClasses("#commercial-all-formats-tabs-block20");
    changeClasses("#commercial-all-formats-tabs-block21");
    changeClasses("#commercial-all-formats-tabs-block22");
    changeClasses("#commercial-all-formats-tabs-block23");
    changeClasses("#commercial-all-formats-tabs-block24");
    changeClasses("#commercial-all-formats-tabs-block25");
    changeClasses("#commercial-all-formats-tabs-block26");
    changeClasses("#commercial-all-formats-tabs-block27");
    changeClasses("#commercial-all-formats-tabs-block28");
    changeClasses("#commercial-all-formats-tabs-block29");
    changeClasses("#commercial-all-formats-tabs-block30");
    changeClasses("#commercial-all-formats-tabs-block31");
    changeClasses("#commercial-all-formats-tabs-block32");
    changeClasses("#commercial-all-formats-tabs-block33");
    changeClasses("#commercial-all-formats-tabs-block34");
    changeClasses("#commercial-all-formats-tabs-block35");
});


/* -------Открываем главные табы, изменяем цвет -----------*/

/* Десктопный таб */
$('#commercial__desctop-formats>.commercial-all-formats__header').click(function () {
    $('#commercial__desctop-formats>.commercial-all-formats__header').css('border-bottom-color', 'transparent');
    $('#commercial__desctop-formats .commercial-header__plus').toggleClass('elem__transform');
    if ($('#commercial__desctop-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $(this).css('background-color', '#fff');
        $(this).css({borderBottom: '1px solid #e1e1e1'})
    }
    else {
        $(this).css('background-color', '#f6f6f6');
    }
    /*  $('#commercial-desctop-format__collapse').toggle( "slow");   */
    if ($("#commercial-desctop-format__collapse").is(":hidden")) {
        $("#commercial-desctop-format__collapse").slideDown("slow");
    } else {
        $("#commercial-desctop-format__collapse").hide();
    }
});
/* Десктопный таб */

/* Мобильный таб */
$('#commercial__mobile-formats>.commercial-all-formats__header').click(function () {
    $('#commercial__mobile-formats>.commercial-all-formats__header').css('border-bottom-color', 'transparent');
    $('#commercial__mobile-formats .commercial-header__plus').toggleClass('elem__transform');
    if ($('#commercial__mobile-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $(this).css('background-color', '#fff');
        $(this).css({borderBottom: '1px solid #e1e1e1'})
    }
    else {
        $(this).css('background-color', '#f6f6f6');
    }
    /* $('#commercial-mobile-format__collapse').toggle( "slow"); */
    if ($("#commercial-mobile-format__collapse").is(":hidden")) {
        $("#commercial-mobile-format__collapse").slideDown("slow");
    } else {
        $("#commercial-mobile-format__collapse").hide();
    }
});
/* Мобильный таб */

/* Адаптивный таб */
$('#commercial__adaptive-formats>.commercial-all-formats__header').click(function () {
    $('#commercial__adaptive-formats>.commercial-all-formats__header').css('border-bottom-color', 'transparent');
    $('#commercial__adaptive-formats .commercial-header__plus').toggleClass('elem__transform');
    if ($('#commercial__adaptive-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $(this).css('background-color', '#fff');
        $(this).css({borderBottom: '1px solid #e1e1e1'})
    }
    else {
        $(this).css('background-color', '#f6f6f6');
    }
    /*  $('#commercial-adaptive-format__collapse').toggle( "slow"); */
    if ($("#commercial-adaptive-format__collapse").is(":hidden")) {
        $("#commercial-adaptive-format__collapse").slideDown("slow");
    } else {
        $("#commercial-adaptive-format__collapse").hide();
    }
});
/* Адаптивный таб */

/* Специальный таб */
$('#commercial__special-formats>.commercial-all-formats__header').click(function () {
    $('#commercial__special-formats>.commercial-all-formats__header').css('border-bottom-color', 'transparent');


    $('#commercial__special-formats .commercial-header__plus').toggleClass('elem__transform');
    $('#commercial__special-formats .commercial-header__plus').toggleClass('elem__transform_normal');


    if ($('#commercial__special-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $(this).css('background-color', '#fff');
        $(this).css({borderBottom: '1px solid #e1e1e1'})
    }
    else {
        $(this).css('background-color', '#f6f6f6');
    }
    /* $('#commercial-special-format__collapse').toggle();    */

    if ($("#commercial-special-format__collapse").is(":hidden")) {
        $("#commercial-special-format__collapse").slideDown("slow");
    } else {
        $("#commercial-special-format__collapse").hide();
    }
});
/* Специальный таб */

/*------- Открываем главные табы, изменяем цвет -----------*/

/* --------Прячем раздел ----------------*/

/* Десктопный */
$('#commercial-desctop-format__collapse').click(function () {
    $('#commercial__desctop-formats>.commercial-all-formats__header').css({borderBottom: '1px solid #e1e1e1'});
    $('#commercial__desctop-formats .commercial-header__plus').removeClass('elem__transform');
    $('#commercial-desctop-format__collapse').hide();
    if ($('#commercial__desctop-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $('#commercial__desctop-formats>.commercial-all-formats__header').css('background-color', '#fff');
    }

});
/* Десктопный */

/* Мобильный */
$('#commercial-mobile-format__collapse').click(function () {
    $('#commercial__mobile-formats>.commercial-all-formats__header').css({borderBottom: '1px solid #e1e1e1'});
    $('#commercial__mobile-formats .commercial-header__plus').removeClass('elem__transform');
    $('#commercial-mobile-format__collapse').hide();
    if ($('#commercial__mobile-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $('#commercial__mobile-formats>.commercial-all-formats__header').css('background-color', '#fff');
    }
});
/* Мобильный */

/* Адаптивный */
$('#commercial-adaptive-format__collapse').click(function () {
    $('#commercial__adaptive-formats>.commercial-all-formats__header').css({borderBottom: '1px solid #e1e1e1'});
    $('#commercial__adaptive-formats .commercial-header__plus').removeClass('elem__transform');
    $('#commercial-adaptive-format__collapse').hide();
    if ($('#commercial__adaptive-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $('#commercial__adaptive-formats>.commercial-all-formats__header').css('background-color', '#fff');
    }
});
/* Адаптивный */

/* Специальный */
$('#commercial-special-format__collapse').click(function () {
    $('#commercial__special-formats>.commercial-all-formats__header').css({borderBottom: '1px solid #e1e1e1'});
    $('#commercial__special-formats .commercial-header__plus').removeClass('elem__transform');
    $('#commercial-special-format__collapse').hide();
    if ($('#commercial__special-formats>.commercial-all-formats__header').css('background-color') == 'rgb(246, 246, 246)') {
        $('#commercial__special-formats>.commercial-all-formats__header').css('background-color', '#fff');
    }
});
/* Специальный */
/* ---------------Прячем раздел ------------*/

$('#mobile-demonstration-close-btn').click(function () {
    $('.mobie-demo-trigger').hide();
});
$('.mobile-demo__show').click(function () {
    $('.mobie-demo-trigger').show();
});

/* Обратная анимация */
$('#commercial__desctop-formats .commercial-desctop-format__image').mouseover(function () {
    $(this).addClass('backinblack');
});

$('#commercial__mobile-formats .commercial-mobile-format__image').mouseover(function () {
    $(this).addClass('mobileback');
});


$('#commercial__desctop-formats .fill-text').mouseover(function () {
    $(this).addClass('unfill-text');
});

/* Обратная анимация */


/* ЛИНКИ И ЗАГОЛОВКИ */


function changePopupLinksAndtitles(el,demoPagePath,demoNumber,demoName,qrCodePath) {
    $(el+" a[data-toggle*='modal']").click(function () {
        $(".demonstration-info a").attr("href", demoPagePath);
        $(".demonstration-info span").text(demoNumber);
        $(".demonstration-info .modal-info-text").text(demoName);
        $(".demonstration-wrapper .col-lg-10.col-md-10 .commercial-all-formats__position-name.hidden-lg.hidden-md span").text(demoNumber);
        $(".demonstration-wrapper .col-lg-10.col-md-10 .commercial-all-formats__position-name.hidden-lg.hidden-md .modal-info-text").text(demoName);
        $("img.qr-code__qr-img").attr("src", qrCodePath);
    });
}

changePopupLinksAndtitles("#commercial-all-formats-tabs-block15","/demos/16/demo_mobile/mobile-demo.html","11.","Full screen Mobile","/newFiles/img/qr-codes/16.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block16","/demos/17/demo_mobile/mobile-demo.html","12.","Нижняя статичная растяжка (+креатив)","/newFiles/img/qr-codes/17.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block17","/demos/18/demo_mobile/mobile-demo.html","13.","Нижний баннер","/newFiles/img/qr-codes/18.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block18","/demos/19/demo_mobile/mobile-demo.html","21.","Брендированная кнопка в меню (элементы меню)","/newFiles/img/qr-codes/19.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block19","/demos/20/demo_mobile/mobile-demo.html","14.","Баннер в первом экране","/newFiles/img/qr-codes/20.svg");
/*Нехватает баннера сномером 23*/
changePopupLinksAndtitles("#commercial-all-formats-tabs-block20","/demos/21/demo_mobile/mobile-demo.html","24.","Боковой раскрывающийся баннер","/newFiles/img/qr-codes/21.svg");
/*Нехватает демки ведущей на 22 страницу*/
/*changePopupLinksAndtitles("#commercial-all-formats-tabs-block22","/demos/23/demo_mobile/mobile-demo.html","24.","ScreenGlide","/newFiles/img/qr-codes/21.svg");*/ /*Не вижу в листинге*/
changePopupLinksAndtitles("#commercial-all-formats-tabs-block24","/demos/25/demo_mobile/mobile-demo.html","27.","Кнопка в меню","/newFiles/img/qr-codes/27.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block25","/demos/26/demo_mobile/mobile-demo.html","18.","Новость","/newFiles/img/qr-codes/26.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block26","/demos/27/demo_mobile/mobile-demo.html","19.","Первое место в выдаче в разделе","/newFiles/img/qr-codes/27.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block27","/demos/28/demo_mobile/mobile-demo.html","20.","Первое место в выдаче в разделе Курсы валют","/newFiles/img/qr-codes/28.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block28","/demos/29/demo_mobile/mobile-demo.html","21.","Брендирование блока лучших курсов (c надписью спонсор раздела)","/newFiles/img/qr-codes/29.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block29","/demos/30/demo_mobile/mobile-demo.html","32.","Кнопка «Ультравозможности»","/newFiles/img/qr-codes/30.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block30","/demos/31/demo_mobile/mobile-demo.html","22.","Кнопка «Выгодные курсы» (в разделе курсов валют)","/newFiles/img/qr-codes/31.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block31","/demos/32/demo_mobile/mobile-demo.html","23.","Баннер перед выдачей результатов в разделе","/newFiles/img/qr-codes/32.svg");
changePopupLinksAndtitles("#commercial-all-formats-tabs-block35","/demos/36/demo_mobile/mobile-demo.html","15.","Inpage баннер","/newFiles/img/qr-codes/33.svg");




$("#commercial-all-formats-tabs-block21 a[data-toggle*='modal']").click(function () {
    var clickedLink = $(this);
    if (clickedLink.attr('data-creative-number') == '1') {
        $(".demonstration-info a").attr("href", "/demos/22/demo_mobile/mobile-demo.html");
        $("img.qr-code__qr-img").attr("src", "/newFiles/img/qr-codes/22.svg");
    } else if(clickedLink.attr('data-creative-number') == '2'){
        $(".demonstration-info a").attr("href", "/demos/38/demo_mobile/mobile-demo.html");
        $("img.qr-code__qr-img").attr("src", "/newFiles/img/qr-codes/38.svg");
    } else if(clickedLink.attr('data-creative-number') == '3'){
        $(".demonstration-info a").attr("href", "/demos/21/demo_mobile/mobile-demo.html");
        $("img.qr-code__qr-img").attr("src", "/newFiles/img/qr-codes/21.svg");
    } else if(clickedLink.attr('data-creative-number') == '4'){
        $(".demonstration-info a").attr("href", "/demos/17/demo_mobile/mobile-demo.html");
        $("img.qr-code__qr-img").attr("src", "/newFiles/img/qr-codes/17.svg");
    }

    $(".demonstration-info span").text("12.");
    $(".demonstration-info .modal-info-text").text("Нижняя статичная растяжка");
    $(".demonstration-wrapper .col-lg-10.col-md-10 .commercial-all-formats__position-name.hidden-lg.hidden-md span").text("19.");
    $(".demonstration-wrapper .col-lg-10.col-md-10 .commercial-all-formats__position-name.hidden-lg.hidden-md .modal-info-text").text("Боковой и нижний раскрывающийся баннеры");

});








