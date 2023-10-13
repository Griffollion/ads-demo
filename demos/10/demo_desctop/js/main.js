$(document).ready(function () {

    function animationOn(element,animationClass,time) {
        setTimeout(function(){
            $('.'+ element).addClass(animationClass);
        }, time);
    }

    function animationRemove(element,anClass) {
        $('.'+ element).each(function () {
            $(this).removeClass(anClass);
        });
    }

    var animatedElements = function () {
        animationOn('halva-animated-block__img2','animation1' ,100);
        animationOn('halva-animated-block__img1','animation1' ,400);
        animationOn('halva-animated-block__img4','animation1' ,500);
        animationOn('halva-animated-block__img5','animation1' ,1000);
        animationOn('halva-animated-block__img5','animation2' ,2700);
        animationOn('halva-animated-block__img2','animation2' ,3200);
        animationOn('halva-animated-block__img1','animation2' ,3200);
        animationOn('halva-animated-block__img4','animation2' ,3200);
        animationOn('halva-animated-block__img3','animation1' ,3800);
        animationOn('halva-animated-block__img1','animation3' ,4100);
        animationOn('halva-animated-block__img4','animation3' ,4200);
        animationOn('halva-animated-block__img5','animation2' ,4400);

        animationOn('halva-jule__cursor','animation1' ,4100);
        animationOn('halva-jule__btn','animation1' ,4800);
        animationOn('halva-jule__animated-block','animation1' ,7000);

        setTimeout(function () {
            animationRemove('animated','animation1');
            animationRemove('animated','animation2');
            animationRemove('animated','animation3');
        }, 7600);
    };


    animatedElements();

    setInterval(function () {
        animatedElements();
    }, 8000);

    $(document).on('click', '.halva-jule__main-link, .halva-jule__close-button', function () {
        $('#halva-jule').fadeOut(500);
        addCookie('bot_ban', 24 * 3600);
    });

  /*  function checkScroll() {

        $(window).bind('scroll',function (e) {
            var winScrollTop = $(window).scrollTop();
            console.log(winScrollTop);
            if(winScrollTop>=250) {
                $('#halva-jule').addClass('visible');
                animatedElements();
                setInterval(function () {
                    animatedElements();
                }, 8000);
			} else {
                $('#halva-jule').removeClass('visible');
                $(window).unbind('scroll');
			}
        });
    }

	//Получаем ширину окна
	var windowSize = $(window).outerWidth(true);

	if (windowSize>=1400) {
	    animatedElements();

	    setInterval(function () {
	        animatedElements();
	    }, 8000);
	    
	    $(document).on('click', '.halva-jule__main-link, .halva-jule__close-button', function () {
	        $('#halva-jule').fadeOut(500);
			addCookie('bot_ban', 24 * 3600);
	    });
    } else if (windowSize<1400) {
		var state = true;
		$(window).scroll(function (e) {
            var winScrollTop = $(window).scrollTop();
            console.log(winScrollTop);

            if(winScrollTop>=250) {
                $('#halva-jule').addClass('visible');
            	if(state) {
					animatedElements();
					setInterval(function () {
						animatedElements();
					}, 8000);
                }
                state = false;
            } else {
                $('#halva-jule').removeClass('visible');
            }
        });

        $(document).on('click', '.halva-jule__main-link, .halva-jule__close-button', function () {
            $('#halva-jule').fadeOut(500);
            	addCookie('bot_ban', 24 * 3600);
        });

	}*/
});