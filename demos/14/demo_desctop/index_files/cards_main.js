//touch move card
if(window.innerWidth < 768) {

    var last = 0;
    var PointX = 0;
    var full = window.innerWidth;

    if($('[data-card-touch]').length) {
        //при первом касании запоминаем начальное положение и отталкиваемся от него
        $(document).on('touchstart', '[data-card-touch]', function(e) {
            $(this).addClass('active');

            var touch = e.originalEvent.touches[0];
            var x = touch.pageX;

            last = full - x;
        });

        $(document).on('touchmove','[data-card-touch]', function(e) {
            $(this).addClass('active');

            var touch = e.originalEvent.touches[0];
            var x = touch.pageX;

            var firstPoint = full - x;

            PointX = firstPoint - last;

            //move
            $(this).css({"transform": "scale(1.1) translateY(-50%) translateX( " + -PointX + "px)"})
        });

        $(document).on('touchend', '[data-card-touch]', function(e) {
            $(this).removeClass('active');

            last = 0;
            PointX = 0;
            //move
            $(this).css({"transform": "scale(1) translateY(-50%) translateX( " + -PointX + "px)"})
        });
    }
}
//touch move card //end

if($('[data-filter]').length) {
    $('[data-filter-btn-open]').on('click', function() {
        $('[data-filter]').addClass('active');
        $('body').addClass('no-scroll');
    });
    $('[data-filter-btn-close]').on('click', function() {
        $('[data-filter]').removeClass('active');
        $('body').removeClass('no-scroll');
    });
}
//filter //end