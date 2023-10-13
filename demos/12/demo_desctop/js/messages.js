window.addEventListener('load', function () {
//initialize instance
    var enjoyhint_instance = new EnjoyHint({});

//simple config. 
//Only one step - highlighting(with description) "New" button 
//hide EnjoyHint after a click on the button.
    var enjoyhint_script_steps = [
        {
            'click #adfox_158860135589375434_15142': 'Баннер между статьями',
            'skipButton': {className: "mySkip", text: "Понятно"},
            'closeButton': {className: "myClose", text: "Понятно"}
        }
    ];

//set script config
    enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
    enjoyhint_instance.run();
})