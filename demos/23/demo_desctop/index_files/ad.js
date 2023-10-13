var adfox_conf = [
    {type:'d',id:'adfox_155135961973597883',p1:'cdufw',p2:'ghij'},
    {type:'d',id:'adfox_152543199523465435',p1:'catyv',p2:'fxhz'},
    {type:'d',id:'adfox_155773469215525508',p1:'ceppz',p2:'gkbl'},
    {type:'d',id:'adfox_155773656348549528',p1:'cepql',p2:'gkbp'},
    {type:'d',id:'adfox_155773533949033760',p1:'cepqb',p2:'gkbn'},
    {type:'d',id:'adfox_157365087678866007',p1:'chwpy',p2:'gprp'},
    {type:'d',id:'adfox_154514391791517285',p1:'cczjq',p2:'gfdb'},
    {type:'d',id:'adfox_152577101211152892',p1:'cawsb',p2:'fxjr'},
    {type:'d',id:'adfox_155964960357085964',p1:'cexdo',p2:'gaox'},
    {type:'d',id:'adfox_154399460721386112',p1:'cbwqi',p2:'gcif'},
    {type:'d',id:'adfox_152541987041132835',p1:'catsd',p2:'fxhp'},
    {type:'d',id:'adfox_15256950211207771',p1:'cavrn',p2:'fxjj'},
    {type:'d',id:'adfox_152577408776057126',p1:'cawsd',p2:'fxkk'},
    {type:'d',id:'adfox_152749856491776656',p1:'cazmy',p2:'fydv'},
    {type:'d',id:'adfox_153994652725533877',p1:'ccjfs',p2:'fyyg'},
    {type:'d',id:'adfox_15439275076685376',p1:'ccuad',p2:'geti'},
    {type:'d',id:'adfox_154392770832917551',p1:'ccuae',p2:'getj'},
    {type:'d',id:'adfox_152844302930621053',p1:'catpe',p2:'fxgs'},
    {type:'d',id:'adfox_158074189381879462',p1:'ciuag',p2:'fork'},
    {type:'d',id:'adfox_158616181777987282',p1:'cjsit',p2:'fxjc'},


    {type:'a',id:'adfox_156380541336516418', p1:'cfyis', p2:'y', d:['phone'], w:921},
];
var already_load = [];

function createAdfox(conf){
    var t = $("#"+conf.id);
    if(t.length){
        t.empty();
        window.Ya.adfoxCode.create({
            ownerId: 271489,
            containerId: conf.id,
            params: {
                p1: conf.p1,
                p2: conf.p2
            }
        });
    }
}
function createAdaptiveAdfox(conf) {
    var t = $("#"+conf.id);
    if(t.length){
        t.empty();
        window.Ya.adfoxCode.createAdaptive({
            ownerId: 239538,
            containerId: conf.id,
            params: {
                p1: conf.p1,
                p2: conf.p2
            }
        }, conf.d, {
            tabletWidth: conf.w,
            phoneWidth: 480,
            isAutoReloads: false
        });
    }
}
function removeEmpty(t){
    setTimeout(function () {
        if(t.is(':empty')){
            var elem = t;
            if(t.parent().hasClass('ad-container'))
                elem = t.parent();

            elem.remove();
        }
    }, 1500);
}

function adfoxObserver(selector) {
    addLazyEvent(
        selector,
        function (t) {
            if(typeof t.target != "undefined"){
                t = $(t.target);
            }
            var id = t.attr('id');
            if(already_load.indexOf(id) === -1) {
                already_load.push(id);
                adfox_conf.forEach(function (conf) {
                    if (id === conf.id) {
                        if (conf.type === 'a') {
                            createAdaptiveAdfox(conf);
                        } else {
                            createAdfox(conf);
                        }
                        removeEmpty(t);
                    }
                });
            }
        }
    );
}

adfoxObserver('[id^=adfox_15]');

/*перезагрузка обсервера после ajax*/
$(document).on('pjax:success', function(event, data, status, xhr, options) {
    if(xhr && xhr.responseText.indexOf('adfox_15') >= 0){
        already_load.length = 0;
        adfoxObserver('[id^=adfox_15]:empty');
    }
});