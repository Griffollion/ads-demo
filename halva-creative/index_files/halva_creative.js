$(document).ready(function () {
    function  addAnimate(el, anName, time) {
        setTimeout(function () {
            $(el).addClass(anName);
        }, time)
    }

    $(document).on('click','[data-js="close-banner"]', function () {
        $(".halva-creative").remove()
    });


    var creative = '.halva-creative',
        rightContainer = '.halva-creative__right-container';

    $(creative).addClass('active');

    addAnimate('.halva-creative__man-1', 'swing-in-bottom-fwd ', 1000);
    addAnimate('.halva-creative__man-2', 'swing-in-bottom-fwd ', 1500);
    addAnimate('.halva-creative__man-1-text', 'scale-in-center ', 2000);
    addAnimate('.halva-creative__man-2-text', 'scale-in-center ', 2500);
    addAnimate('.halva-creative__right-container', 'swing-in-bottom-fwd', 3000);
    addAnimate('.halva-creative__right-container', 'animated', 3400);
    addAnimate('.halva-creative__card--2', 'slide-in-left', 4000);
    addAnimate('.halva-creative__card--1', 'slide-in-right', 4200);
    addAnimate('.halva-creative__board-text', 'bounceIn', 5000);
    addAnimate('.halva-creative__right-container', 'ovf-vis', 5000);
    addAnimate('.halva-creative__board-btn', 'wobble-hor-bottom', 5800);
    addAnimate('.halva-creative__sign--vopros', 'bounce-top', 6800);

});