// request counter events
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
        ga('send', 'event', 'Buttons', 'click', event);
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

// mass_request
$(document)
    .on("click",".mass_request_bt, .halva_bt, .mass_other, #take_credit", function () {
        var form = $(this).closest("form");
        console.log(form);
        $.ajax({
            type: "POST",
            url: "/request/send",
            cache: !1,
            data: form.serialize(),
            success: function (a) {
                form.find(".st").html(a)
            }
        })
    })
    .on('submit', '#skoring-mtb-card-p, #skoring-mtb-card-a, #skoring-mtb, #skoring-2, #left_menu, #left_menu_list, #left_menu_bank, #left_menu_business, #mass_popup_business, #left_menu_list_business, #left_menu_bank_business, #halva, #halva_f, #halva_plus, #other_bank, #forex_broker, #halva_sidebar, #forex_popup', function (e) {
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
    });



function after_form(template, alias, selector) {
    delete_ok(selector);
    $('.modal').find('.close').click();
    if ($('div').is('.after_form')) {
        $('.after_form').remove();
    }
    $(".g-wrap").after(template);
    $(".after_"+alias+"_bt").click();
}

function mtb_form_api(selector, template) {
    var api_url = $('#'+selector + ' #onl_api_url').val(),
        fam = $('#'+selector + ' #onl_fam').val(),
        name = $('#'+selector + ' #onl_name').val(),
        tel = $('#'+selector + ' .inp_tel').val(),
        t_detail = tel.split('-'),
        full_phone = '+375 ('+t_detail[0]+') '+t_detail[1]+'-'+t_detail[2]+'-'+t_detail[3];

    if (fam == '' || name == '' || tel == '' || jQuery.inArray(t_detail[0], ['29','25','44','33','17']) == -1) {
        return false;
    }

    if (api_url != '') {
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
    if (selector == 'forex_broker' || selector == 'forex_popup') {
        var text = 'Ваша заявка отправлена. С вами свяжутся в течение часа.';
        block.closest('.forex-request').addClass('done');
    }else{
        var text = 'Ваша заявка отправлена. Сотрудник банка свяжется с вами в течение часа.';
    }

    console.log(f_block);

    f_block.html(
        '<div class="form-group form-group_submit modal-footer">' +
            '<div class="form_required">'+ text +'</div>' +
        '</div>'
    );
    block.find(".n-bank").hide();
    block.find(".n-credit").hide();
    block.find(".real-footer").hide();
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
    if(!(
        $(modal_id + " #onl_bank_id").val() == bank_id
        && $(modal_id + " #onl_type_request").val() == type_request
        && $(modal_id + " #onl_operator").val() == operator
        && $(modal_id + " #onl_product_id").val() == prod_id
    )) {
        if (typeof(type_id) == 'undefined' || type_id == '') {
            type_id = 1;
        }
        if (typeof(force_type_request) == 'undefined') {
            force_type_request = '';
        }
        $(modal_id + " #onl_product").html(title);
        $(modal_id + " #onl_product_id").val(prod_id);
        $(modal_id + " #onl_bank_id").val(bank_id);
        $(modal_id + " #onl_operator").val(operator);
        $(modal_id + " #onl_type_request").val(type_request);
        $(modal_id + " #onl_type_id").val(type_id);
        $(modal_id + " #onl_force_type_request").val(force_type_request);
        $(modal_id + " form").attr("id", type_request);
        $(modal_id + " form").addClass('cr_'+prod_id+'_'+type_request);
        $(modal_id).find(".form-fields").hide();

        if (typeof(city) == 'undefined' || city == '') {
            city = 1;
        }
        if (typeof(brandpopup_id) == 'undefined' || brandpopup_id == '') {
            brandpopup_id = 0;
        }

        if (typeof(api_url) != 'undefined' && api_url != '') {
            $(modal_id + " #onl_api_url").val(api_url);
        }else{
            $(modal_id + " #onl_api_url").val('');
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

                if(data.hidden_fields) {
                    b.find(modal_id + ' .request_hidden input').prop('disabled', true);
                }else{
                    b.find(modal_id + ' .request_hidden input').prop('disabled', false);
                }
                b.find(".h2.title").html(data.label);
                b.find(".n-bank").html(data.bank_name);
                b.find(".form-fields").html(data.fields).show();
                b.find(".n-bank").show();
                b.find(".n-credit").show();
                b.find(".real-footer").show();
                if ($('.visual_css').attr('data-brand-id') != brandpopup_id && brandpopup_id != 0){
                    $('.visual_css').remove();
                }
                if ($.type(data.brandpopup_css) !== 'null' && $('.visual_css').attr('data-brand-id') != brandpopup_id){
                    $('head').append('<link class="visual_css" data-brand-id="' + brandpopup_id + '" rel="stylesheet" type="text/css" href="' + data.brandpopup_css + '">');
                }
                $(modal_id + " .modal-body").css("display", "block");
                $(modal_id + " .req_bt").css("display", "block");
                $(modal_id + " .modal-footer-info").css("display", "block");
            }
        });
    }
}

function change_massform_type_request(type_request){
    $('#mass-form-modal #onl_type_request').val(type_request);
}