$(document).ready(function () {

//initialize instance
    var enjoyhint_instance = new EnjoyHint({
        onSkip:function(){
            var currentScroll = $(window).scrollTop();
            $('.scrollbar-dynamic').addClass('scrollbar-wrapper').scrollbar().scrollTop(currentScroll);
        }
    });

//simple config.
//Only one step - highlighting(with description) "New" button
//hide EnjoyHint after a click on the button.
    var enjoyhint_script_steps = [
        {
            'showSkip': false,
            'showNext': false,
            'click .inpage_hole' : '',
            'skipButton' : { className: "", text: ""},
            'closeButton' : { className: "", text: ""}
        }
    ];

//set script config
    enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
    enjoyhint_instance.run();
});