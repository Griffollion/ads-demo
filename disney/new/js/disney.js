$(window).load(function () {

    var screenWidth = $(window).outerWidth();
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    var video = document.querySelector('video');
    if(!iOS) {
        video.style.transform ='scale(-1,1)';
    } else {
        video.style.transform ='scale(-1,1)';
        video.controls = false;
    }

    console.log('Ширина экрана upd'+ screenWidth);

    function offScroll() {
        $('html').addClass('off-scroll');
        $('body').addClass('off-scroll');
    }

    function onScroll() {
        $('html').removeClass('off-scroll');
        $('body').removeClass('off-scroll');
    }

    function loadlink(imageDataURL) {
        if (typeof (window.open) == "function") {
            window.open(imageDataURL);
        }
        else {
            window.location.href = imageDataURL;
        }
    }

    function mainCode(event) {
        screen2Text.hide();
        screen2Finger.hide();
        screen2DynamicBack.addClass('visible');
        setTimeout(function () {
            secScreen.hide();
            thridScreen.addClass('visible');

            setTimeout(function () {
                /*Camera code*/
                // Grab elements, create settings, etc.
                /*var video = document.querySelector('video');*/
                // Elements for taking the snapshot
                var canvas = document.getElementById('canvas');
                var context = canvas.getContext('2d');

                // Получаем доступ к камере
                if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    init(event);
                }

                // Нажатие на кнопку "сделать фото"
                document.getElementById("snap").addEventListener("click", function() {
                    requestCounter('kreativ-mob-photo');

                    var cW  = video.offsetWidth;
                    var cH = video.offsetHeight;

                    /*Рисуем картинку в canvas с камеры*/
                    canvas.width  = cW;
                    canvas.height = cH;
                    canvas.style.width  = cW+'px';
                    canvas.style.height = cH+'px';

                    //buffer to draw the image to before drawing on-screen
                    var bufferCanvas = document.createElement('canvas');
                    var bufferContext = bufferCanvas.getContext('2d');
                    bufferCanvas.width  = cW;
                    bufferCanvas.height = cH;

                    if(!iOS) {
                        bufferContext.save();
                        bufferContext.scale(-1,1);
                        bufferContext.drawImage(video, 0, 0, cW*-1, cH);
                        bufferContext.restore();
                    } else {
                        bufferContext.save();
                        bufferContext.scale(-1,1);
                        bufferContext.drawImage(video, cW*-1, 0, cW, cH);
                        bufferContext.restore();
                    }

                    var earsPosX = $('#ears').offset().left;
                    var earsPosY = $('#ears').offset().top;
                    var earsWidth = screenWidth*0.9;
                    var earsHeight = earsWidth*0.8;

                    var nosePosX = $('#nose').offset().left;
                    var nosePosY = $('#nose').offset().top;
                    var noseWidth = screenWidth*0.16;
                    var noseHeight = noseWidth*0.7;

                    bufferContext.drawImage(ear, earsPosX, earsPosY, earsWidth, earsHeight); //рисуем картинку в канвас
                    bufferContext.drawImage(nose, nosePosX, nosePosY, noseWidth, noseHeight); //рисуем картинку в канвас

                    context.drawImage(bufferCanvas, 0, 0, cW, cH);

                    // Помещение изображения в элемент img.
                    image.src = canvas.toDataURL('image/png');
                    var imageDataURL = canvas.toDataURL('image/png');

                    // Устанавливаем значение атрибуту href данные канваса
                    if(!iOS) {
                        canvas.toBlob(function(blob) {
                            saveAs(blob, "selfie-mouse.png");
                        });
                    } else {
                        loadlink(imageDataURL);
                    }

                    photoBtn.removeClass('animated').addClass('inv');
                    $('.maskarade').hide();
                    cvs.addClass('visible');

                    $('.disney-btn--invisible').each(function () {
                        $(this).removeClass('inv').addClass('animated');
                    });
                    resetBtn.addClass('animated').removeClass('inv');
                    document.getElementById('image_for_share').appendChild(image);
                });

                // Нажатие на кнопку "переделать фото"
                document.getElementById("reset").addEventListener("click", function() {
                    document.getElementById('image_for_share').removeChild(image);
                    $('.disney-btn--invisible').each(function () {
                        $(this).addClass('inv').removeClass('animated');
                    });
                    resetBtn.addClass('inv').removeClass('animated');

                    cvs.removeClass('visible');
                    setTimeout(function () {
                        photoBtn.removeClass('inv').addClass('animated');
                        $('.maskarade').show();
                    },200);
                });
            },1000)

        }, 1500);
    }

    var constraints = window.constraints = {
        audio: false,
        video: true
    };

    function handleSuccess(stream) {
        /*var video = document.querySelector('video');*/
        var videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log(`Using video device: ${videoTracks[0].label}`);
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
        video.play();
    }

    async function init(event) {
        try {
            var stream = await navigator.mediaDevices.getUserMedia(constraints);
            handleSuccess(stream);
            event.target.disabled = true;
            screen3DefaultScreen.hide();
            screen3CameraScreen.addClass('visible');
        } catch (event) {

        }
    }

    /*Обработка перетаскиваний носа и ушей*/
    var stretch = $('.disney');
    var $draggable = $('#ears').draggabilly();
    var $draggable2 = $('#nose').draggabilly();

    stretch.addClass('visible');

    $draggable.on( 'dragStart', function () {
        requestCounter('kreativ-vzaimodejstvie2');
        $('.disney-screen-3__help-block').hide();
    });
    $draggable2.on( 'dragStart', function () {
        requestCounter('kreativ-vzaimodejstvie2');
        $('.disney-screen-3__help-block').hide();
    });
    /*Обработка перетаскиваний носа и ушей конец*/

    var fstScreen = $('.disney-screen-1'),
        secScreen = $('.disney-screen-2'),
        thridScreen = $('.disney-screen-3'),
        screen2DynamicBack = $('.disney-screen-2__dynamic-back'),
        screen2Text = $('.disney-screen-2__puti-text'),
        screen2Finger = $('.disney-screen-2__finger'),
        screen3DefaultScreen = $('.disney-screen-3__default-screen'),
        screen3CameraScreen = $('.disney-screen-3__camera'),
        photoBtn = $('#snap'),
        resetBtn = $('#reset'),
        cvs = $('#canvas');



    var ear = new Image();   // Создаём новый объект Image
    ear.crossOrigin="anonymous";
    ear.src = '//banners.adfox.ru/180921/adfox/794338/2673549_18.png'; // Устанавливаем путь к источнику

    var nose = new Image();   // Создаём новый объект Image
    nose.crossOrigin="anonymous";
    nose.src = '//banners.adfox.ru/180921/adfox/794338/2673549_19.png'; // Устанавливаем путь к источнику

    /*Изображение которое будет расшариватсья в соцсети. Путь лежит в его атрибуте src*/
    var image = new Image();
    image.id = "pic";

    //Обработка закрытия растяжки
    $(document).on('click', '.disney-close', function () {
        requestCounter('rast_desk_close');
        onScroll();
        stretch.hide();
        event.stopPropagation();
        addCookie('bot_ban', 24 * 3600);
    });
    $(document).on('click', '.disney-screen-3__default-screen-link', function () {
        onScroll();
        stretch.hide();
        event.stopPropagation();
        addCookie('bot_ban', 24 * 3600);
    });

    $(document).on('click','.disney-btn.ic-vk,.disney-btn.ic-fb,.disney-btn.fa-instagram', function () {
        requestCounter('kreativ-mob-share');
        console.log('кликнул на соц сети');
    });

    //Клик по первому экрану
    fstScreen.on('click', function () {
        requestCounter('bottom_rast_mobile_2_open');
        fstScreen.hide();
        offScroll();
        secScreen.addClass('visible');
    });

    //Свайп по первому экрану
    fstScreen.swipe( {
        swipeUp:function(event, direction, distance, duration, fingerCount, fingerData) {
            requestCounter('bottom_rast_mobile_2_open');
            fstScreen.hide();
            offScroll();
            secScreen.addClass('visible');
        },
        threshold:10
    });

    //Клик по второму экрану
    secScreen.on('click', function (event) {
        requestCounter('vzaimodeistvie_piva');
        mainCode(event);
    });

    //Свайп по второму экрану
    secScreen.swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
            requestCounter('vzaimodeistvie_piva');
            mainCode(event);
        },
        threshold:10
    });

});