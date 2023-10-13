function fillDropDown(list, cities){
    list.html('');
    for (var k in cities) {
        if (!cities.hasOwnProperty(k))
            continue;

        var stateSpan = document.createElement('span'),
            citySpan = document.createElement('span'),
            li = document.createElement('li');

        citySpan.setAttribute('data-state', cities[k].state_id);
        citySpan.setAttribute('data-name', cities[k].name);
        citySpan.innerHTML = cities[k].town_type + ' ' + cities[k].name;
        stateSpan.innerHTML = cities[k].state_name == '' ? 'Областной центр' : (cities[k].state_name[0].toUpperCase() + cities[k].state_name.slice(1).toLowerCase());

        li.appendChild(citySpan);
        li.appendChild(stateSpan);
        li.setAttribute('class', 'set-city');

        list.get(0).appendChild(li);
    }
    list.removeClass("fade");
}

$(document)
    .on('click keyup', '.city_complete', function(){
        var t = $(this), v = t.val(), list = t.closest('.form-group').find('.allTowns'), b = t.closest('.city_complete_block');

            $.ajax({
                'url':'/ajax/cityComplete',
                'data':{'str':v},
                'type':'get',
                'success':function(response){
                    var cities = JSON.parse(response);
                    fillDropDown(list, cities);
                }
            })

        b.find('.state_hidden').data({status:'unset'});
    })
    .on('mousedown', 'li.set-city', function(){
        var t = $(this), data = t.find('span:first').data(), b = t.closest('.city_complete_block');
        b.find('.city_complete').val(data.name);
        b.find('.state_hidden').val(data.state).data({status:'set'});
        $(".allTowns").addClass("fade").html("");
    })
    .on('blur', '.city_complete', function(){
        var t = $(this), b = t.closest('.city_complete_block'), checkbox = t.closest('form').find('input.formstyler[data-alias=belinvestbank]');
        setTimeout(function(){
            var v = t.val(), state_input = b.find('.state_hidden');
            if(v.length > 2 && state_input.data('status') == 'unset'){
                $.ajax({
                    'url':'/ajax/cityExists',
                    'data':{'str':v},
                    'type':'get',
                    'success':function(response){
                        if((checkbox.length == 0 || checkbox.prop('checked')) && response == 0){
                            b.addClass('has-error').find('.err_exist').html('Не нашли города подходящего запросу');
                        } else {
                            b.removeClass('has-error');
                            state_input.val(response).data({status:'set'});
                        }
                    }
                });
            }
            b.find('.allTowns').addClass('fade').html("");
        }, 300);
    })
    .on('change', 'input.formstyler[data-alias=belinvestbank]', function(){
        var t = $(this), f = t.closest('form');
        f.find('.city_complete').trigger('blur');
    });