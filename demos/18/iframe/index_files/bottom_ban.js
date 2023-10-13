
// Переменная самим блоком рекламы
var ad = document.getElementById("ad");
// Переменная с превью рекламы
var touch_area = document.getElementById("open");
// Блок по клику на который выходим
var exit = document.getElementById("exit");



// Помогает разлечить свайп от тапа , если тап то равна 0
var endSwipeY = 0;
// Окно на которое будет перекидывать
var link = "https://m.domovita.by/minsk/newbuildings/sale?utm_source=myfinby&utm_medium=banner+m&utm_campaign=sept+new­buildings2";
// Проверяет пооддержку у браузеров свойства трансформ
var support_transform = "transform" in document.createElement('div').style;


if (support_transform)
{
    touch_area.addEventListener('touchup', function(event) {
            event.preventDefault();
            event.stopPropagation();
            document.body.style.position="fixed";
            endSwipeY=0;
        }
    );

    touch_area.addEventListener('touchmove', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (event.targetTouches.length == 1)
            {
                ad.style.top="100%";
                event.preventDefault();
                var touch = event.targetTouches[0];
                ad.style.top = touch.clientY + 'px';
                endSwipeY = event.changedTouches[0].clientY;
                touch_area.style.display="none";
                ad.style.opacity="1"
            }
        }
    );

    touch_area.addEventListener('touchend', function(event) {
            ga('send', 'event', 'MobAdv', 'newbuildings2', 'open');
            event.preventDefault();
            event.stopPropagation();
            if(endSwipeY!=0 )
            {
                if(endSwipeY < 0.7*screen.height)
                {
                    ad.style.transform = "translateY(-" + ad.getBoundingClientRect().top + "px)";
                    touch_area.style.transform = "translateY(" + (ad.getBoundingClientRect().bottom-ad.getBoundingClientRect().top) + "px)";
                }
                else
                {
                    ad.style.top= "100%";
                    endSwipeY=0;
                    touch_area.style.display="block";
                    ad.style.opacity="0"
                }
            }
            else
            {
                touch_area.style.transform= "translateY(" +  (ad.getBoundingClientRect().bottom-ad.getBoundingClientRect().top) + "px)";
                ad.classList.add("open_ad_animation");
                ad.style.transform = "translateY(-" + ad.getBoundingClientRect().top +  "px)";
            }
        }
    );
    ad.addEventListener('touchmove', function(event){
        document.body.style.position = "fixed";
    })
    ad.addEventListener('touchend', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (!exit.contains(event.target)) {
                ga('send', 'event', 'MobAdv', 'newbuildings2', 'click');
                requestCounter('domovita');
                window.open(link);
            }
            ad.style.display="none";
            document.body.style.position = "static";
        }
    );
}
