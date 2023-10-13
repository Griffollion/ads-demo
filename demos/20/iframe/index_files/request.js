// request counter events
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
    .on("click",".mass_request_bt, .halva_bt, .mass_other", function () {
        var form = $(this).closest("form");
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
    .on('submit', '#left_menu, #halva, #halva_f, #halva_plus, #other_bank', function (e) {
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
    });;



function after_form(template, alias, selector) {
    delete_ok(selector);
    $('.modal').find('.close').click();
    if ($('div').is('.after_form')) {
        $('.after_form').remove();
    }
    $(".g-wrap").after(template);
    $(".after_"+alias+"_bt").click();
}


function delete_ok(selector) {
    /*if (selector == 'halva_f') {
        selector = 'halva';
    }*/

    var block = $("#" + selector),
        fields_block = block.find(" .form-fields"),
        f_block = fields_block.length == 1 ? fields_block : block;

    f_block.html(
        '<div class="form-group form-group_submit modal-footer">' +
            '<div class="form_required">Ваша заявка отправлена. Сотрудник банка свяжется с вами в течение часа.</div>' +
        '</div>'
    );
    block.find(".n-bank").hide();
    block.find(".n-credit").hide();
    block.find(".real-footer").hide();
}

function open_pop(operator, type_request, title, prod_id, bank_id, city, type_id){
    if(!(
        $("#onl_bank_id").val() == bank_id
        && $("#onl_type_request").val() == type_request
        && $("#onl_operator").val() == operator
        && $("#onl_product_id").val() == prod_id
    )) {
        $("#onl_product").html(title);
        $("#onl_product_id").val(prod_id);
        $("#onl_bank_id").val(bank_id);
        $("#onl_operator").val(operator);
        $("#onl_type_request").val(type_request);
        $("#request-modal form").attr("id", type_request);
        $("#request-modal").find(".form-fields").hide();

        if (typeof(city) == 'undefined') {
            city = 1;
        }
        if (typeof(type_id) == 'undefined') {
            type_id = 1;
        }

        $.ajax({
            url: "/request/getForm",
            data: {
                id: bank_id,
                operator: operator,
                type_request: type_request,
                city: city,
                type_id: type_id
            },
            success: function (response) {
                var data = JSON.parse(response),
                    b = $("#request-modal");

                if(data.hidden_fields) {
                    b.find('.request_hidden input').prop('disabled', true);
                }else{
                    b.find('.request_hidden input').prop('disabled', false);
                }

                b.find(".h2.title").html(data.label);
                b.find(".n-bank").html(data.bank_name);
                b.find(".form-fields").html(data.fields).show();
                b.find(".n-bank").show();
                b.find(".n-credit").show();
                b.find(".real-footer").show();

                $(".modal-body").css("display", "block");
                $(".req_bt").css("display", "block");
                $(".modal-footer-info").css("display", "block");
            }
        });
    }
}