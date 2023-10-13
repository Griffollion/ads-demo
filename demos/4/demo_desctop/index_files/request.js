function after_form(template, selector) {
    delete_ok(selector);
    $('.modal').find('.d_close').click();
    if ($('div').is('.after_form')) {
        $('.after_form').remove();
    }
    $(".footer_wrap").after(template);
    $(".after_callback_bt").click();
}

function delete_ok(selector) {
    var block = $("#" + selector),
        fields_block = block.find(" .form-fields"),
        f_block = fields_block.length == 1 ? fields_block : block;

    f_block.html(
        '<div class="form-group_submit">' +
        '<div class="form_required">Ваша заявка отправлена. Сотрудник банка свяжется с вами в рабочее время.</div>' +
        '</div>'
    );
    block.find(".n-bank").hide();
    block.find(".n-credit").hide();
    block.find(".real-footer").hide();
    block.find(".modal-footer").hide();
}

function open_pop(operator, type_request, title, prod_id, bank_id, city, type_id, modal_id, brandpopup_id, not_lead, force_type_request){
    var prefix = this.getModalPrefix(modal_id);
    if(!(
            $(modal_id + " #" + prefix + "onl_bank_id").val() == bank_id
            && $(modal_id + " #" + prefix + "onl_type_request").val() == type_request
            && $(modal_id + " #" + prefix + "onl_operator").val() == operator
            && $(modal_id + " #" + prefix + "onl_product_id").val() == prod_id
        )) {
        if (typeof(type_id) == 'undefined' || type_id == '') {
            type_id = 1;
        }

        if (empty(not_lead)) {
            not_lead = false;
        }

        if (this.empty(force_type_request)) {
            force_type_request = '';
        }

        $(modal_id + " #" + prefix + "onl_product_id").val(prod_id);
        if (type_request == 'other_bank'){
            $(modal_id + " #" + prefix + "onl_product_id").val(0)
        }
        $(modal_id +'.modal-header-text, '+ modal_id +'.modal-header-alternative').css('display', 'none');
        $(modal_id + " #" + prefix +"onl_bank_id").val(bank_id);
        $(modal_id + " #" + prefix +"onl_operator").val(operator);
        $(modal_id + " #" + prefix +"onl_type_request").val(type_request);
        $(modal_id + " #" + prefix +"modal-product-bt").attr('onclick', 'requestCounter("'+type_request+'_popup")');
        $(modal_id + " #" + prefix +"onl_type_id").val(type_id);
        $(modal_id + " #" + prefix +"onl_force_type_request").val(force_type_request);
        $(modal_id +" form").attr("id", type_request);
        $(modal_id + " form").addClass('cr_' + prod_id + '_' + type_request);
        $(modal_id + " .row").removeClass('has-error');
        $(modal_id).removeClass('disablebank-form').find(".form-fields").hide();
        if (typeof(city) == 'undefined') {
            city = 'minsk';
        }
        if (this.empty(brandpopup_id)) {
            brandpopup_id = 0;
        }
        $.ajax({
            url: "/request-yii2/get-form",
            data: {
                id: bank_id,
                operator: operator,
                type_request: type_request,
                type_id: type_id,
                city:city,
                brandpopup_id: brandpopup_id
            },
            success: function (response) {
                var data = JSON.parse(response),
                    b = $(modal_id);

                if ($('.visual_css').attr('data-brand-id') != brandpopup_id && brandpopup_id != 0) {
                    $('.visual_css').remove();
                }
                if ($.type(data.brandpopup_css) !== 'null' && $('.visual_css').attr('data-brand-id') != brandpopup_id) {
                    $('head').append('<link class="visual_css" data-brand-id="' + brandpopup_id + '" rel="stylesheet" type="text/css" href="' + data.brandpopup_css + '">');
                }

                b.find(".title.h2 span, .modal-header-alternative .label").html(data.label);
                b.find(".modal-header-alternative .bank-in").html(data.bank_name_in);
                b.find(".form-fields").html(data.fields).show();
                b.find(".n-bank").html(data.bank_name);
                b.find(".n-credit").html(title);
                b.find(".real-footer").show();
                b.find(".modal-footer").show();
                $(modal_id + ".modal-body").css("display", "block");
                $(modal_id + ".req_bt").css("display", "block");
                $(modal_id + ".modal-footer-info").css("display", "block");
                if (not_lead == '1') {
                    $(modal_id + '.modal-header-text, '+modal_id +'.modal-header-alternative').css('display', 'block');
                }
            }
        });
    }
}

function getModalPrefix(id) {
    var prefix = '';
    if (id == '#visual_request'){
        prefix = 'brand_'
    }
    return prefix;
}