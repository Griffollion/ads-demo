var myTimerSearch = 0;
var tooltioBtn = '.filter-more';
var status = false;

function city_alias() {
    var city_alias =  $('#filter-cities').val(),
        clear_city_alias = city_alias;
    if (empty(city_alias) || city_alias == 'minsk') {
        city_alias = '';
    }else{
        city_alias = '/'+city_alias
    }
    document.cookie = 'city_alias'+"="+clear_city_alias+";path=/"
    return city_alias;
}
function subtype_alias() {
    var subtype_alias = $('#subtype_alias').val();
    if (empty(subtype_alias)) {
        subtype_alias = '';
    }else{
        subtype_alias = '/'+subtype_alias
    }
    return subtype_alias;
}

function card_name_form(alias, count) {
    if (alias == 'raschetnye-karty') {
        return pluralForm(count, ['дебетовая карта','дебетовые карты','дебетовых карт'])
    }else if (alias == 'karty') {
        return pluralForm(count, ['кредитная карта','кредитные карты','кредитных карт'])
    }
    return '';
}

//filter //end
$(document).ready(function () {
    $(document)
        .on("pjax_filter", function() {
            var id = $('.cards-view').attr('id');
            var alias = $('#alias').val();
            var card_type_name_rpc = $('#card_type_name_rpc').val();
            var sort = getUrlParameter('sort');

            $('#filter-type-cards, #filter-cities').attr('disabled','disabled');
            var formData = $("#card-form-top :input,#card-form-sidebar :input ")
                .filter(function(index, element) {
                    return $(element).val() != '' && $(element).val() != 0;
                }).serializeArray();
                if (!empty(sort)) {
                    formData.push({name: "sort", value: sort});
                }
            $('#filter-type-cards, #filter-cities').removeAttr('disabled');

            $.pjax.reload({container:"#pj_"+id,url: "/"+alias+subtype_alias()+city_alias(), data: $.param(formData)});  //Reload GridView

            setTimeout( function() {
                var product_count = $('.count_product').val(),
                    banks_count = $('.count_banks').val(),
                    product_summ = $('.amount_product').val(),
                    product_period = $('.period_product').val(),
                    product_remainder = $('.remainder_product').val(),
                    currency_iname = $('.filter-currency option:selected').text().toLowerCase();
                    amount_text = '',
                    other_text = '';
                    if (empty(currency_iname)) {
                        currency_iname = 'рублей';
                    }

                if (product_summ != '') {
                    amount_text = ' на сумму '+product_summ+' '+currency_iname;
                }
                if (!empty(product_period)) {
                    other_text = ' сроком '+product_period+' мес.';
                }
                if (!empty(product_remainder)) {
                    other_text = ' с остатком на счету '+product_remainder+' '+currency_iname;
                }
                if (typeof product_count == "undefined") {
                    product_count = 0;
                }
                if (typeof banks_count == "undefined") {
                    banks_count = 0;
                }
                var card_form = card_name_form(alias, product_count);
                $('.btn-product-count').html(product_count + ' ' + pluralForm(product_count, ['карту','карты','карт']));
                $('.card-table-title').html('Найдено '+product_count+' '+ card_form +amount_text+other_text);
                $('.top-hero-filter-count-product').html(product_count + ' ' + card_form);
                $('.top-hero-filter-count-bank').html(banks_count + ' ' + pluralForm(banks_count, ['банка','банков','банков']));
            }, 500);
        })
        .on('submit', 'form:not(.main-nav_form)', function (e) {
            e.preventDefault();
        })
        .on('keyup', ".keyup-card-filter", function() {
            if (myTimerSearch) {
                clearTimeout(myTimerSearch);
            }
            myTimerSearch = setTimeout(function() {
                $(document).trigger('pjax_filter');
            }, 500);
        })
        .on('keyup', ".amount_product, .period_product", function() {
            var param_val = $(this).val(),
                param_name = $(this).data('name');
            document.cookie = param_name+"="+param_val+";";
        })
        .on('change', "#filter-type-cards", function() {
            var value = $(this).val();
            requestCounter("select_"+value);
            setTimeout(function () {
                window.location.href = '/'+value;
            }, 300);
        })
        .on('change', "#filter-cities", function() {
            var type_card_alias = $('#filter-type-cards').val();
            window.location.href = '/'+type_card_alias+city_alias();
        })
        .on('slideStop', '.inp_slider, .inp_slider_amount', function(e, param){
            var param_val = $(this).val(),
                param_name = $(this).data('name');
            document.cookie = param_name+"="+param_val+";";
            $(document).trigger('pjax_filter');
        })
        .off('pjax:end')
        .on('pjax:end', function(e, resource, resp) {
            $.pjax.defaults.scrollTo = false;
            $(e.target).find('tbody').removeClass('loading');
            // Обновляем мета данные
            if(resource && typeof resource.responseText !== "undefined"){
                var title = resource.responseText.match(/<title>(.+)<\/title>/i),
                    links = resource.responseText.match(/<link.*?>/gi);
                if(title && typeof(title[1]) !== 'undefined'){
                    $('title').text(title[1]);
                }
                if(typeof(links) === "object" && links !== null){
                    $('link[rel=next]').remove();
                    $('link[rel=prev]').remove();
                    $('head').append(links.join(''));
                }
            }
            $(document).trigger('hit-counters', resp.url);
        })
        .on('click', '.clear-sidebar-form',  function() {

            $('.filter-sidebar :checkbox').prop('checked', false).trigger('refresh');
            $('.filter-sidebar input[type=number]').val('');
            $('.hero-filter input').val('');
            $('.hero-filter-banks').val(null).trigger('change');
            //$(document).trigger('pjax_filter');
        })
        .on('click', '.pagination-new li',  function() {
            var top = $('#workarea').offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        })
        .on('click',tooltioBtn, function() {
            var tooltipContent = $(this).find('.g-tooltip__desc'),
                tooltipContentWidth = 120,
                tooltipContentOffsetLeft = tooltipContent.offset().left,
                tooltipContentAllCords = tooltipContent[0].getBoundingClientRect(),
                devideWidth = $(window).width(),
                deviceHeight = $(window).height();

            /*tooltipContent.removeClass('positionLeft');
            tooltipContent.removeClass('positionTop');*/

            if(tooltipContentOffsetLeft+tooltipContentWidth > devideWidth) {
                tooltipContent.addClass('positionLeft');
            }

            if(tooltipContentAllCords.top + tooltipContentAllCords.height > deviceHeight) {
                tooltipContent.addClass('positionTop');
            }
        });
    city_alias();
})