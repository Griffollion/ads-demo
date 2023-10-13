//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//simple config. 
//Only one step - highlighting(with description) "New" button 
//hide EnjoyHint after a click on the button.
var enjoyhint_script_steps = [
  {
        'click .personal-page__bank-title' : 'Дополнительное рекламное место',
        'skipButton' : { className: "noneSkip", text: ""},
        'nextButton' : { className: "mySkip", text: "Далее"},
        'closeButton' : { className: "myClose", text: "Понятно"}
    },

    {
        'click .personal-page__news' : false,
        'skipButton' : { className: "noneSkip", text: "Больше новостей и новости только одного банка"},
        'nextButton' : { className: "mySkip", text: "Далее"},
        'closeButton' : { className: "myClose", text: "Понятно"},
    },
    {
        'click .personal-page__creative' : 'Персональные рекламные креативы',
        'skipButton' : { className: "noneSkip", text: ""},
        'nextButton' : { className: "mySkip", text: "Далее"},
        'closeButton' : { className: "myClose", text: "Понятно"}
    },
    {
        'click .bank-about-offer' : 'Более привлекательный и дружественный способ представления продуктов банка',
        'skipButton' : { className: "noneSkip", text: ""},
        'nextButton' : { className: "mySkip", text: "Понятно"},
        'closeButton' : { className: "myClose", text: "Понятно"}
    }
];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();

