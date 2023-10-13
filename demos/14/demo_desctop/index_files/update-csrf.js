var load_callbacks = [];
var is_callback_done = false;
function addLoadCallback(callback) {
    if(is_callback_done){
        callback();
    } else {
        load_callbacks.push(callback);
    }
}
function runLoadCallbacks() {
    is_callback_done = true;
    load_callbacks.forEach(function (callback) {
        callback();
    });
}

function updateCsrf(first_load) {
    first_load = first_load || false;
    $.get('/ajax/refresh-csrf', function (response) {
        var params = JSON.parse(response);
        $.each(params, function(i, v){
            $('meta[name='+i+']').attr('content', v);
        });

        if(first_load){
            runLoadCallbacks();
        }
    });
}
function getCsrf(){
    var obj = {};
    obj[$('meta[name="csrf-param"]').attr('content')] = $('meta[name="csrf-token"]').attr('content');
    return obj;
}
if(document.documentElement.innerHTML.indexOf('<!-- nginx -->') === 0) {
    updateCsrf(true);
} else {
    runLoadCallbacks();
}