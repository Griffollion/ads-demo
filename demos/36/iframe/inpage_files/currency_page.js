function currencyHistory(get_param, selector) {
    var content = LZString.compress($(document).find(selector).html()),
        url = window.location.origin + window.location.pathname;
    window.history.pushState({content:content, url:url+get_param, selector:selector}, '', url+get_param);
    $(document).trigger('hit-counters', url+get_param);
}

function accordHistory(link) {
    var id_accordion = link.attr('data-bank_id'),
        name = 'accordion';
    id_accordion = id_accordion.replace('#','');
    get_param = addHistoryParams(name, name+'-'+id_accordion);
    currencyHistory(get_param, ".rates-table-sort");
}
function workingHistory(params) {
    get_param = addHistoryParams('working', params);
    currencyHistory(get_param, ".page_currency");
}

function addHistoryParams(name, param) {
    var params = parseQueryString(window.location.search),
        get_param = '';
    if (Object.keys(params).length == 0) {
        if (typeof (name) != 'undefined') {
            get_param = '?'+name+'='+param;
        }
    }else{
        if (typeof (name) != 'undefined') {
            params[name] = param;
        }
        get_param = objToString(params)
    }
    return get_param;
}

function parsAccordion() {
    var params = parseQueryString(window.location.search);
    for (var key in params) {
        if (key == 'accordion') {
            var id_accord = params[key].replace('accordion-','');
            $('.acc-link_'+id_accord).click();
        }
    }
}

!function () {
    'use strict';
    function convInner() {
        var btn = '.rates-table .conv-btn';
        if ($(btn).length){
            var convBlock = '.rates-table .conv-inner';
            $(document).on('click', '.rates-table .conv-btn', function(){
                $(document).find('.rates-table .conv-inner').show();
                var t = $(this),
                    invert = t.hasClass('sell'),
                    curr = t.attr('data-c'),
                    coof = t.attr('data-cf'),
                    curr_from = curr,
                    curr_to = "byn",
                    rate = parseFloat(t.closest('td').text()).toFixed(3),
                    coord = t.offset(),
                    newCoord = {};
                console.log(invert);
                if(curr.length > 3){
                    curr_from = curr.substr(0,3);
                    curr_to = curr.substr(3,3);
                    curr_from = curr_from == 'rur' ? 'rub' : curr_from;
                    curr_to = curr_to == 'rur' ? 'rub' : curr_to;
                }
                newCoord.top = coord.top + 30;
                newCoord.left = coord.left - 180;
                $(convBlock).offset(newCoord);

                if (invert) {
                    $(convBlock).find(".form-group:first").addClass('last_invert');
                    $(convBlock).find(".form-group:last").addClass('firts_invert');
                }else{
                    $(convBlock).find(".form-group:first").removeClass('last_invert');
                    $(convBlock).find(".form-group:last").removeClass('firts_invert');
                }

                $(convBlock).find(".form-input-sum").val("");
                $(convBlock).find(".input-text:first").html(curr_from);
                $(convBlock).find(".input-text:last").html(curr_to);
                $(convBlock).find(".form-input-sum:first").attr("data-val", rate / coof);
            });

            $(document).on('click', function(event) {
                if (($(event.target).closest(convBlock).length)||($(event.target).closest(btn).length)) return;
                $(convBlock).hide();
                event.stopPropagation();
            });
        }
    }
    //кнопка-стрелка в конверторе
    function btnArrConv() {
        var table = $('.rates-table-sort');
        if (table.length) {
            var btn = table.find('.table-head .head-sort');
            if (btn.length) {
                btn.on('click', function(){
                    btn.removeClass('arrow');
                    $(this).addClass('arrow');
                    if ($(this).hasClass('arr-up')){
                        $(this).removeClass('arr-up');
                    } else {
                        $(this).addClass('arr-up');
                    }
                });
            }
        }
    }
    function tableSort() {
        var tableSortBlock = $(".rates-table-sort:not(.russian)");
        if (tableSortBlock.length && $.fn.tablesorter){
            var tableBody = tableSortBlock.find('.table-body');
            tableSortBlock.tablesorter({
                headers: {
                    1: {sorter: 'currency'},
                    2: {sorter: 'currency'},
                    3: {sorter: 'currency'},
                    4: {sorter: 'currency'},
                    5: {sorter: 'currency'},
                    6: {sorter: 'currency'},
                    7: {sorter: 'currency'},
                    8: {sorter: 'currency'}
                },
                cancelSelection: false,
                sortReset      : true,
                sortRestart    : true
            });
            tableSortBlock.bind('sortEnd',function(){
                tableBody.find('.tr-tb').each(function() {
                    var bank_id = $(this).attr('data-bank_id');
                    $('.acc-link_' + bank_id).after(tableBody.find('.acc_' + bank_id));
                })
            });
        }
    }

    function parsWorking() {
        var params = parseQueryString(window.location.search);
        for (var key in params) {
            if (key == 'working') {
                if (params[key] == '1') {
                    $('.is_working_block').attr('data-working', '0')
                    workingFillials(params[key], false);
                    $('.is_working_block .is_working').addClass('checked')
                    $('#is_working').attr('checked', true)
                }else{
                    $('.is_working_block').attr('data-working', '1')
                }
            }
        }
    }

    function historyParams(){
        $(document)
            .on('mouseup', '.history_th:not(.not_h)', function() {
                var sort = $(this).attr('data-sort'),
                    sort_param = $(this).attr('data-param'),
                    name = 'sort',
                    param = sort_param+'.'+sort;

                var get_param = addHistoryParams(name, param);

                if (sort == 'desc') {
                    $(this).attr('data-sort', 'asc');
                }else{
                    $(this).attr('data-sort', 'desc');
                }
                currencyHistory(get_param, ".rates-table-sort");
            })
            .on('click', '.tr-tb:not(.aj)', function () {
                var bank_id = $(this).attr('data-bank_id')
                if($(this).hasClass('c_act')){
                    $('.acc_'+bank_id).removeClass('c_vis');
                    $(this).removeClass('c_act');
                }else{
                    $('.acc_'+bank_id).addClass('c_vis');
                    $(this).addClass('c_act');
                }
                if (!$(this).hasClass('not_h')) {
                    accordHistory($(this));
                }
            })
            // Триггер обновления выдачи обьектов и инпутов/ссылок
            .on('update-content', function (e, params) {
                $(document).trigger('hit-counters', params.url);
                $(params.selector).html(params.content);
                tableSort();
            });

        window.addEventListener('popstate', function (e) {
            if (e.state !== null){
                e.state.content = LZString.decompress(e.state.content);
                $(document).trigger('update-content', e.state);
            }
        }, false);
    }

    function searchDepartment(){
        $(document).on("keyup",".search-sm .search-depart", function(){
            if (!$(this).hasClass('mobile')) {
                var search = $(this).val().toLowerCase(),
                    $rows = $(this).closest(".acc-body").find("tbody tr");
                $rows.removeClass('hidden');
                if(search.length > 2){
                    $rows.each( function(i, element){
                        if(
                            $(this).find(".ttl a").html().toLowerCase().indexOf(search)===-1
                            && $(this).find(".address").html().toLowerCase().indexOf(search)===-1
                        ){
                            $(this).addClass("hidden");
                        }
                    })
                }
            }
        });
    }

    function searchDepartmentMobile(){
        $(document).on("keyup",".search-sm.mobile .search-depart", function(){
            if ($(this).hasClass('mobile')) {
                var search = $(this).val().toLowerCase(),
                    $rows = $(this).closest(".acc-body").find("tbody tr");
                $rows.removeClass('hidden');
                if (search.length > 2) {
                    $rows.each(function (i, element) {
                        if ($(this).hasClass('currency_row_1') &&
                            $(this).find(".ttl a").html().toLowerCase().indexOf(search) === -1 &&
                            $(this).next().hasClass('currency_row_2') &&
                            $(this).next().find(".address").html().toLowerCase().indexOf(search) === -1
                        ) {
                            $(this).addClass("hidden");
                            $(this).next().addClass("hidden");
                        }
                    })
                }
            }
        });
    }

/*    $(window).load(function () {
        convInner();
        btnArrConv();
        tableSort();
        historyParams();
        searchDepartment();
        parsWorking();
        parsAccordion();
    });
    $(window).resize(function () {
        convInner();
    });
    $(document).ready(function () {
        searchDepartmentMobile();
    });*/
}();