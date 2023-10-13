
    function OffScroll() {
        var winScrollTop = $(window).scrollTop();
        $(window).bind('scroll',function () {
            $(window).scrollTop(winScrollTop);
        });
    }

    function showCanvas() {
        $('#beer__eraser_img').eraser({
            completeRatio: 0.1,
            completeFunction: showFinal,
            size: 60
        });
        $(".beer__open_ad_wp").addClass('open');
        $(".beer__close_ad_wp").fadeOut(1000);
    }
    function showFinal() {
        $(".beer__open_ad_one").fadeOut(1000);
        $(".beer__open_ad_two .beer__inner-content").fadeIn(1000);
    }



    $(document).ready(function () {


        $("#beer__open").swipe({
            swipeUp:function(event, direction, distance, duration, fingerCount, fingerData) {
                showCanvas();
                OffScroll()
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:10
        });

        $(document)
            .on('click', '.beer__close_action ', function () {
                $('.beer__mob-creative').hide(300);
                $(window).unbind('scroll');
            })
            .on('click', '#beer__open', function(){
                showCanvas();
                OffScroll()
            });
    });




