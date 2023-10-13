	
	// Переменная самим блоком рекламы
	var ad = document.getElementById("ad");
	// Переменная с превью рекламы
	var touch_area = document.getElementById("open");
	// Блок по клику на который выходим
	var exit = document.getElementById("exit");

	var exit_close=document.getElementById("exit_close");

	// Помогает разлечить свайп от тапа , если тап то равна 0
	var endSwipeX = 0;
	// Окно на которое будет перекидывать
	var link = "http://prntscr.com/flyce6";
	// Проверяет пооддержку у браузеров свойства трансформ
	var support_transform = "transform" in document.createElement('div').style;
	// На windows phone свайп отключен из-за конфликта с IE
	var is_lumia = navigator.userAgent.search(/Lumia/) > -1;

	var moveleft = 12;


	if (support_transform && !is_lumia)
	{

		exit_close.addEventListener('touchend',function(event){
				event.preventDefault();
				event.stopPropagation();
				touch_area.style.transform = "translateX(" + (ad.getBoundingClientRect().right-ad.getBoundingClientRect().left) + "px)";				
			}
		);
		touch_area.addEventListener('touchup', function(event) {
				event.preventDefault();
				event.stopPropagation();
				endSwipeX=0;
			}
		);

		touch_area.addEventListener('touchmove', function(event) {
				event.preventDefault();
				event.stopPropagation();
				if (event.targetTouches.length == 1 && !exit_close.contains(event.target))
				{
					event.preventDefault(); 
					var touch = event.targetTouches[0];
    				ad.style.left = touch.pageX + 'px';
    				endSwipeX = event.changedTouches[0].pageX;
   					touch_area.style.display="none";
   				}
			}
		);
	
			touch_area.addEventListener('touchend', function(event) {
					event.preventDefault();
					event.stopPropagation();
					if(endSwipeX!=0 )
					{
						if(endSwipeX<0.5*screen.width)
						{
							ad.style.transform = "translateX(-" + ad.getBoundingClientRect().left + "px)";
							touch_area.style.transform = "translateX(" + (ad.getBoundingClientRect().right-ad.getBoundingClientRect().left) + "px)";
						}
						else
						{
	   						ad.style.left = "100%"
	   						endSwipeX=0;
	   						touch_area.style.display="block";
	   					}
	   				}
	   				else
	   				{
	   					ad.style.transform = "translateX(-" + ad.getBoundingClientRect().left +  "px)";
	   					touch_area.style.transform= "translateX(" +  (ad.getBoundingClientRect().right-ad.getBoundingClientRect().left) + "px)";
	   				}
				}
			);
			ad.addEventListener('touchmove', function(event){
				document.body.style.position = "fixed";
			})
			ad.addEventListener('touchend', function(event) {
					event.preventDefault();
					event.stopPropagation();
					if (!exit.contains(event.target))	window.open(link);
					ad.style.display="none";
					touch_area.style.display="none";
					document.body.style.position = "static";
				}
			);

			touch_area.onclick=function(event){
				if (!exit_close.contains(event.target)) 
				{	
					moveleft = ad.getBoundingClientRect().left+moveleft;
					if (support_transform) ad.style.transform = "translateX(-" +moveleft+ "px)";
					else ad.style.left = "0%";
					touch_area.style.display = "none";
					document.body.style.position = "fixed";
				}
			}
			ad.onclick=function(event){
				if (!exit.contains(event.target))
				{
					window.open(link);
				}
				ad.style.display="none";
				touch_area.style.display="none";
				document.body.style.position = "static";
			}
			exit_close.onclick=function(event){
				touch_area.style.display="none";
			}
	}
