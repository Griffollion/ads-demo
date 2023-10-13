$(document)
    .off('click', '.js_link')
    .off('click', '.js_link_blank')
    .on('click', '.js_link', function () {
        var link = $.parseJSON($(this).data('link')); window.location.href = link;
    })
    .on('click', '.js_link_blank', function () {
        var link = $.parseJSON($(this).data('link')); window.open(link);
    });

// request counter events
$ (document).on('change', '#Request_city', function () {
    var city = $(this).val();
    $.ajax({
        url: "/ajax/getIdeaDepartmentByCity",
        type: "get",
        data: {
            city: city
        },
        success: function (b) {
            b = $.parseJSON(b);
            $('#input_department').remove();
            $('#Request_department').before(b.input);
            if (isIdeaMinskRelation(city) != -1){
                $('#Request_department').removeAttr('disabled').css('display','block');
                $('#input_department').attr('disabled', 'disabled')
            }else {
                $('#Request_department').attr('disabled', 'disabled').css('display','none');
                $('#input_department').removeAttr('disabled')
            }
        }
    });
});

const isInStandaloneMode = (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');

if (isInStandaloneMode) {
    requestCounter('js_pwa_link_open')
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

    function email_validate(address) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(address) == false) {
            return false;
        }
        return true;
    }

    function isIdeaMinskRelation(city) {
        return $.inArray(city, ['Минск', 'Фаниполь', 'Дзержинск', 'Смиловичи', 'Марьина горка', 'Червень',
            'Колодищи','Смолевичи','Логойск','Боровляны','Заславь','Узда']);
    }

function visibilityBlockRequest(identifier, counter_name) {
    var windowScroll = $(window).scrollTop();
    var topOfObjToStick = $(identifier).offset().top; //Получаем начальное расположение нашего блока

    if (windowScroll > topOfObjToStick) { // Если прокрутили больше, чем расстояние до блока, то считаем показ
        requestCounter(counter_name);
        addCookieInpageBan();
        return true;
    }
    return false;
}

function requestCounter(event) {
    if(typeof(yaCounter15781438) != "undefined"){
        yaCounter15781438.reachGoal(event);
    }
}

function requestType(t,event) {
    var attr = t.getAttribute('data-target');
    $(attr).find('.force_type_request').val(event);
}

function parseQueryString(queryString) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    if (queryString.indexOf("?") != -1) {
        for ( i = 0, l = queries.length; i < l; i++ ) {
            temp = queries[i].split('=');
            params[temp[0].replace("?", "")] = temp[1];
        }
    }
    return params;
}

function objToString (obj) {
    var str = '',
        first = true,
        param = '?';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += param + p + '=' + obj[p];
            if (first === true) {
                first = false;
                param = '&';
            }
        }
    }
    return str;
}

function copyLink(url) {
    var container_link = $('.copy-link-container');
    window.getSelection().removeAllRanges();

    container_link.html('<span class="js-copylink">'+url+'</span>');
    // Выборка ссылки с электронной почтой
    var link = document.querySelector('.js-copylink');
    var range = document.createRange();
    range.selectNode(link);
    window.getSelection().addRange(range);

    try {
        // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy link command was ' + msg);
    } catch(err) {
        console.log('Oops, unable to copy');
    }
    container_link.html('');
    // Снятие выделения
    window.getSelection().removeAllRanges();
}

// mass_request
$(document)
    .on("click",".mass_request_bt, .halva_bt, .mass_other, #take_credit", function () {
        var form = $(this).closest("form");
        ajaxSendRequest(form);
        sendHalvaMass($(this));
    })
    .on('submit', '#skoring-mtb-card-p, #skoring-mtb-card-a, #skoring-mtb, #skoring-2, #left_menu, #left_menu_list, #left_menu_bank, #left_menu_business, #mass_popup_business, #left_menu_list_business, #left_menu_bank_business, #halva, #halva_f, #halva_plus, #other_bank, #forex_broker, #halva_sidebar, #forex_popup, #podbor_online, #bonds_request', function (e) {
        e.preventDefault();
    })
    .on("click", ".after-send", function() {
        var prefix = $(this).attr('data-type');
        if ("" == $("."+prefix+"_form .pending_req").val()) {
            $("."+prefix+" .pending_req").val("pending");
            var a = $(this).closest(".form_request");
            $.ajax({type:"POST", url:"/request/send", cache:!1, data:a.serialize(), success:function(b) {
                if(b.indexOf("delete_ok") > -1){
                    $("."+prefix+"-modal .close").click();
                    $(".info_bt").click();
                }
                a.find("div.st").html(b);
            }});
        } else {
            console.log("Stop it please");
        }
        setTimeout(function() {
            $("."+prefix+"_form .pending_req").val("");
        }, 3E3);
        return !1;
    })
    .on('click', '.bounds-bt', function () {
        var bounds_name = $(this).attr('data-bounds-name');
        $('#bounds-name').val(bounds_name);
    })
    .on('change', '.credit-request .checkbox.ideabank input', function () {
        var selector = $(this),
            is_idea = selector.closest('form').find('.checkbox.ideabank input').is(":checked"),
            city = selector.closest('form').find('[name="Request[city]"]').val();
        if (city != '' && is_idea == true) {
            $.ajax({
                url: "/ajax/activideadepartment",
                type: "post",
                data: {
                    city: city
                },
                success: function (b) {
                    if (b == '') {
                        selector.closest('form').find('.request-department-block').html('');
                    }else{
                        selector.closest('form').find('.request-department-block').html(b);
                    }
                }
            });
        }else{
            selector.closest('form').find('.request-department-block').html('');
        }

    })
    .on('blur', '.credit-request .form-input-city', function () {
        var selector = $(this),
            is_idea = selector.closest('form').find('.checkbox.ideabank input').is(":checked"),
            city = selector.closest('form').find('[name="Request[city]"]').val();
        if (city != '') {
            $.ajax({
                url: "/ajax/activideadepartment",
                type: "post",
                data: {
                    city: city
                },
                success: function (b) {
                    if (b == '') {
                        selector.closest('form').find('.request-department-block').html('');
                        selector.closest('form').find('.checkbox.ideabank').css('display','none');
                        selector.closest('form').find('.checkbox.ideabank input').attr('disabled','disabled');
                    }else{
                        if (is_idea == true) {
                            selector.closest('form').find('.request-department-block').html(b);
                        }else{
                            selector.closest('form').find('.request-department-block').html('');
                        }
                        selector.closest('form').find('.checkbox.ideabank').css('display','block');
                        selector.closest('form').find('.checkbox.ideabank input').removeAttr('disabled');
                    }
                }
            });
        }
    })
    .on('change', '#sorter', function() {
        var val = $(this).val(),
            split = val.split('-'),
            sort_position = attr = split[0],
            sort = split[1],
            sort_link = $('#sort_'+attr).attr('href');

        if (sort == 'desc') {
            sort_position = attr+'.desc';
        }

        params = sort_link.replace(new RegExp('sort=([^&=]+)'), 'sort='+sort_position);
        $('#sort_'+attr).attr('href', params);
        $('#sort_'+attr).trigger('click');
    });

function sendHalvaMass(element) {
    var form = element.closest('form');
    var halva = form.find('.checkbox_halva');
    var checkbox_halva = halva.length;
    if (checkbox_halva > 0 && halva.is(':checked') == true) {
        formData = form.find('input')
            .filter(function(index, el) {
                if ($(el).hasClass('type_request') || $(el).hasClass('banks') || $(el).hasClass('onl_operator')) {
                    return false;
                }
                return $(el).val() != '' && $(el).val() != 0;
            }).serializeArray();
        formData.push({name: "Request[type_request]", value: 'halva_mass'});
        formData.push({name: "Request[onl_operator]", value: 4});
        formData.push({name: "Request[bank_id]", value: 25});
        formData.push({name: "Request[product_id]", value: 478});
        console.log(formData);
        $.ajax({
            type: "POST",
            url: "/request/send",
            cache: !1,
            data: $.param(formData),
            success: function (a) {
                form.find(".st").append(a)
                form.find('.checkbox_halva').val('false');
            }
        })
    }else if(halva.is(':checked') == false) {
        $('.error_halva_mass').html('Необходимо выбрать хоть одну галку')
    }

}

function ajaxSendRequest(form) {
    $.ajax({
        type: "POST",
        url: "/request/send",
        cache: !1,
        data: form.serialize(),
        success: function (a) {
            form.find(".st").html(a)
        }
    })
}

function after_form(template, alias, selector) {
    delete_ok(selector);
    $('.modal').find('.close').click();
    if ($('div').is('.after_form')) {
        $('.after_form').remove();
    }
    $(".g-wrap").after(template);
    $(".after_"+alias+"_bt").click();
}

function idea_department_error(selector,params) {
    var banks = $.parseJSON(params);
    banks.forEach(function(id) {
        if (id != 29) {
            $('#'+selector +' .checkbox input[value='+id+']').attr('disabled', 'disabled');
        }
    });

    $('#'+selector +' .err_department').html('Выберите отделение для Идея Банка')
    $('#'+selector +' .err_department').closest('.form-group').addClass('has-errors');
}

function mtb_form_api(selector, template, modal_id) {
    var prefix = getModalPrefix(modal_id),
        api_url = $('#'+selector + ' #' + prefix + 'onl_api_url').val(),
        fam = $('#'+selector + ' #' + prefix + 'onl_fam').val(),
        name = $('#'+selector + ' #' + prefix + 'onl_name').val(),
        tel = $('#'+selector + ' .inp_tel').val(),
        t_detail = tel.split('-'),
        full_phone = '+375 ('+t_detail[0]+') '+t_detail[1]+'-'+t_detail[2]+'-'+t_detail[3];

    if (this.empty(fam) || this.empty(name) || this.empty(tel) || jQuery.inArray(t_detail[0], ['29','25','44','33','17']) == -1) {
        return false;
    }

    if (this.empty(api_url)) {
        $('#' + selector).attr('action', api_url);
        $('#' + selector).attr('method', 'post');
        $('#' + selector).attr('target', '_blank');
        $('#' + selector +' .request_hidden').append(template);
        $('#' + selector + ' #avto_phone_number').val(full_phone);
        $('#' + selector + ' #avto_name').val(name);
        $('#' + selector + ' #avto_surname').val(fam);
        $(document).find('#' + selector).submit();
    }
}

function delete_ok(selector) {
    /*if (selector == 'halva_f') {
        selector = 'halva';
    }*/

    var block = $("#" + selector),
        fields_block = block.find(" .form-fields"),
        f_block = fields_block.length == 1 ? fields_block : block;
    if (selector == 'forex_broker' || selector == 'forex_popup' || selector == 'bonds_request') {
        var text = 'Ваша заявка отправлена. С вами свяжутся в рабочее время.';
        block.closest('.forex-request').addClass('done');
    }else{
        var text = 'Ваша заявка отправлена. Сотрудник колл-центра свяжется с вами в рабочее время.';
    }

    f_block.html(
        '<div class="form-group form-group_submit modal-footer">' +
            '<div class="form_required">'+ text +'</div>' +
        '</div>'
    );
    block.find(".n-bank").hide();
    block.find(".n-credit").hide();
    block.find(".real-footer").hide();
}

function delete_false(selector, template) {

    var block = $("#" + selector);
    block.closest('.modal-dialog').html(template);
}

function delete_false_left_lising(selector) {
    $(document).find("#" + selector + ' .fieldset').html('<div class="form-group_submit">К сожалению, по введенным вами данным, онлайн-заявка на лизинг автомобиля на данный момент недоступна.</div>')
}

function delete_false_left(selector) {
    $(document).find("#" + selector + ' .fieldset').html('<div class="form-group_submit">К сожалению, по введенным вами данным, онлайн-заявка на кредит на данный момент недоступна.</div>')
}

function cr_open_pop(operator, title, prod_id, bank_id){
        $("#cr_product").html(title);
        $("#cr_product_id").val(prod_id);
        $("#cr_bank_id").val(bank_id);
        $("#cr_operator").val(operator);
        //$("#cr_type_request").val(type_request);
        //$("#credit-form form").attr("id", type_request);

        var bl = $("#credit-form");
        bl.find('.request_hidden input').prop('disabled', true);
        bl.find(".n-credit").show();
        bl.find(".real-footer").show();

        $(".modal-body").css("display", "block");
        $(".req_bt").css("display", "block");
        $(".modal-footer-info").css("display", "block");
}

function open_pop(operator, type_request, title, prod_id, bank_id, city, type_id, modal_id, brandpopup_id, force_type_request, api_url){
    var prefix = this.getModalPrefix(modal_id);
    if(!(
            $(modal_id + " #" + prefix + "onl_bank_id").val() == bank_id
            && $(modal_id + " #" + prefix + "onl_type_request").val() == type_request
            && $(modal_id + " #" + prefix + "onl_operator").val() == operator
            && $(modal_id + " #" + prefix + "onl_product_id").val() == prod_id
        )) {
        if (this.empty(type_id)) {
            type_id = 1;
        }
        if (this.empty(force_type_request)) {
            force_type_request = '';
        }
        $(modal_id + " #" + prefix + "onl_product").html(title);
        $(modal_id + " #" + prefix + "onl_product_id").val(prod_id);
        $(modal_id + " #" + prefix + "onl_bank_id").val(bank_id);
        $(modal_id + " #" + prefix + "onl_operator").val(operator);
        $(modal_id + " #" + prefix + "onl_type_request").val(type_request);
        $(modal_id + " #" + prefix + "onl_type_id").val(type_id);
        $(modal_id + " #" + prefix + "onl_force_type_request").val(force_type_request);
        $(modal_id + " form").attr("id", type_request);
        $(modal_id + " form").addClass('cr_' + prod_id + '_' + type_request);
        $(modal_id).find(".form-fields").hide();

        if (this.empty(city)) {
            city = 1;
        }
        if (this.empty(brandpopup_id)) {
            brandpopup_id = 0;
        }

        if (typeof(api_url) != 'undefined' && api_url != '') {
            $(modal_id + " #" + prefix + "onl_api_url").val(api_url);
        } else {
            $(modal_id + " #" + prefix + "onl_api_url").val('');
        }
        $.ajax({
            url: "/request/getform",
            data: {
                id: bank_id,
                operator: operator,
                type_request: type_request,
                city: city,
                type_id: type_id,
                brandpopup_id: brandpopup_id
            },
            success: function (response) {
                var data = JSON.parse(response),
                    b = $(modal_id);
                /*if (bank_id == 32 && operator == 1) {
                    b = $('#request-credit-reshenie');
                    b.find(".h2.title").html(data.label);
                    $(modal_id).find(".form-fields").show();
                    return true
                }*/
                if (data.hidden_fields) {
                    b.find(modal_id + ' .request_hidden input').prop('disabled', true);
                } else {
                    b.find(modal_id + ' .request_hidden input').prop('disabled', false);
                }
                b.find(".h2.title").html(data.label);
                b.find(".n-bank").html(data.bank_name);
                b.find(".form-fields").html(data.fields).show();
                b.find(".n-bank").show();
                b.find(".n-credit").show();
                b.find(".real-footer").show();
                if ($('.visual_css').attr('data-brand-id') != brandpopup_id && brandpopup_id != 0) {
                    $('.visual_css').remove();
                }
                if ($.type(data.brandpopup_css) !== 'null' && $('.visual_css').attr('data-brand-id') != brandpopup_id) {
                    $('head').append('<link class="visual_css" data-brand-id="' + brandpopup_id + '" rel="stylesheet" type="text/css" href="' + data.brandpopup_css + '">');
                }
                $(modal_id + " .modal-body").css("display", "block");
                $(modal_id + " .req_bt").css("display", "block");
                $(modal_id + " .modal-footer-info").css("display", "block");
            }
        });
    }
}

function getModalPrefix(id) {
    var prefix = '';
    if (id == '#visual_request'){
        prefix = 'brand_'
    }
    /*if (id == '#request-credit-reshenie'){
        prefix = 'reshenie_'
    }*/
    return prefix;
}

function empty(value){
    return typeof(value) == 'undefined' || value == ''|| value == false|| value == null
}

function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands

    var i, j, kw, kd, km;

    // input sanitation & defaults
    if( isNaN(decimals = Math.abs(decimals)) ){
        decimals = 2;
    }
    if( dec_point == undefined ){
        dec_point = ",";
    }
    if( thousands_sep == undefined ){
        thousands_sep = ".";
    }

    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

    if( (j = i.length) > 3 ){
        j = j % 3;
    } else{
        j = 0;
    }

    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    return km + kw + kd;
}


function change_massform_type_request(type_request){
    $('#mass-form-modal #onl_type_request').val(type_request);
    $('#mass-form-modal form').attr('id', type_request);
}