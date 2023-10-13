// Объекты которые будут двигаться за курсором
var ball1 = $('.balls-stretch__ball_1'),
    ball2 = $('.balls-stretch__ball_2'),
    ball3 = $('.balls-stretch__ball_3'),
    ball4 = $('.balls-stretch__ball_4'),
    ball5 = $('.balls-stretch__ball_5'),
    ball6 = $('.balls-stretch__ball_6'),
    ball7 = $('.balls-stretch__ball_7'),
    ball8 = $('.balls-stretch__ball_8'),
    ball9 = $('.balls-stretch__ball_9'),
    ball10 = $('.balls-stretch__ball_10'),
    bl = $('.balls-stretch'),
    enableHandler;
//Функция следования объекта за курсором

bl.mousemove(function (e) {
    if (enableHandler) {
        moveShadow(e, ball1);
        moveShadow(e, ball2);
        moveShadow(e, ball3);
        moveShadow(e, ball4);
        moveShadow(e, ball5);
        moveShadow(e, ball6);
        moveShadow(e, ball7);
        moveShadow(e, ball8);
        moveShadow(e, ball9);
        moveShadow(e, ball10);
        enableHandler = false;
    }
});


timer = window.setInterval(function(){
    enableHandler = true;
}, 100);


function moveShadow(e,ball){
        // получаем координаты объекта
        var x1 = ball.offset().left + ball.outerWidth()/2;
        var y1 = ball.offset().top + ball.outerHeight() /2;
        // координаты курсора
        var x2 = e.pageX;
        var y2 = e.pageY;
        // координаты третей точки, чтоб получить треугольник
        var x3 = x2;
        var y3 = y1;




        // высчитываем угол
        var cos = (((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2))+((x1-x3)*(x1-x3))+((y1-y3)*(y1-y3))-((x2-x3)*(x2-x3))-((y2-y3)*(y2-y3)))/(2*Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2)))*Math.sqrt(((x1-x3)*(x1-x3))+((y1-y3)*(y1-y3))));
        var rad = Math.acos(cos)
        var degree = rad * 180 / Math.PI;


        var degree360 = 0;
        if(x2 < x1 && y2 < y1) degree360 = -180 + (90 + degree);
        if(x2 >= x1 && y2 <= y1) degree360 = 90 - degree;
        if(x2 >= x1 && y2 >= y1) degree360 = 90 + degree;
        if(x2 < x1 && y2 > y1) degree360 = -degree - 90;



        var halfObjectWidth = ball.outerWidth()/2,
            halfObjectHeight = ball.outerHeight()/2;

        var subW =x1-halfObjectWidth - 200;
        var concW =x1+halfObjectWidth + 200;
        var subH =y1-halfObjectHeight - 200;
        var concH = y1 + halfObjectHeight + 200;

        var moveVal;

        if((x2 < concW && x2> subW )&& (y2 < concH && y2 > subH )) {

            moveVal =150;
        } else {
            moveVal =0;
        }

        // Поворот объекта
        ball.css('transform', 'rotate(' + degree360 + 'deg) translateY(' + moveVal + 'px)');
    }

