function selectBestCourse() {
    function splitArray(arr, arrSize) {
        var array = arr;
        var array_size = arrSize;
        var sliced_array = [];

        for (var i = 0; i < array.length; i += array_size) {
            sliced_array.push(array.slice(i, i + array_size));
        }

        return sliced_array;
    }

    var rows = $('#currency_tbody>[data-js="ad-currency-row"]');
    var rowsLengtn = rows.length;
    var cellsLength = null;
    var allValues = [];
    var rotatedArray = [];
    var adCurrencyCells = $('tr.adfox-currency-row-line td');

    adCurrencyCells.each(function () {
        $(this).removeClass('best-ad');
    });


    // Получаем все значения валют со всех рекламных строк
    for (var i = 0; i < rows.length; i++) {
        var cells = $(rows[i]).find('td:not(:first-child)');

        cellsLength = $(cells).length;

        for (var j = 0; j < cellsLength; j++) {
            allValues.push($(cells[j]).text());
        }
    }

    // Структурируем полученные данные; Разбиваем на массивы длинной равной количеству ячеек в строке курсов;
    var structuredData = splitArray(allValues, cellsLength);


    // Пересобираем массивы таким образом, чтобы данные перестроились в столбец (для получения адекватных индексов в элементам на странице)
    // И приводим данные к числовым занчениямж Если в ячейке нет значения приводим к строке
    for (var j = 0; j < cellsLength; j++) {
        for (var n = 0; n < structuredData.length; n++) {
            var data = parseFloat(structuredData[n][j]);
            if (isNaN(data)) {
                data = 'empty';
            }
            rotatedArray.push(data);
        }
    }

    // Структурируем полученные данные; Делаем основной массив равным динне количеству ячеек в строке курсов;
    var correctArray = splitArray(rotatedArray, rowsLengtn);
    var minArr = [];
    var maxArr = [];
    var minEl = {
        value: 0,
        col: 0,
        cell: 0,
    };
    var maxEl = {
        value: 0,
        col: 0,
        cell: 0,
    };

    // Получение минимальных и максимальных значений ячеек
    for (var i = 0; i < correctArray.length; i++) {
        (typeof correctArray[0][0]) == 'string' ? minEl.value = 999999999999999 : minEl.value = correctArray[0][0];
        (typeof correctArray[0][0]) == 'string' ? maxEl.value = 0 : maxEl.value = correctArray[0][0];

        minEl.col = 0;
        minEl.cell = 0;
        maxEl.col = 0;
        maxEl.cell = 0;

        for (var j = 0; j < correctArray[i].length; j++) {
            if (correctArray[i][j] < minEl.value && (typeof correctArray[i][j]) != 'string') {
                minEl.value = correctArray[i][j];
                minEl.col = i + 2;
                minEl.cell = j + 1;
            }

            if (correctArray[i][j] > maxEl.value && (typeof correctArray[i][j]) != 'string') {
                maxEl.value = correctArray[i][j];
                maxEl.col = i + 2;
                maxEl.cell = j + 1;
            }
        }

        var newObjMin = JSON.parse(JSON.stringify(minEl));
        var newObjMax = JSON.parse(JSON.stringify(maxEl));

        minArr.push(newObjMin);
        maxArr.push(newObjMax);

    }

    for (var x = 0; x < minArr.length; x++) {
        var minCell = minArr[x];
        var maxCell = maxArr[x];
        if (x % 2 > 0) {
            $('tr.adfox-currency-row-line:nth-of-type(' + minCell.cell + ') td:nth-child(' + minCell.col + ')').addClass('best-ad');
        } else {
            $('tr.adfox-currency-row-line:nth-of-type(' + maxCell.cell + ') td:nth-child(' + maxCell.col + ')').addClass('best-ad');
        }
    }
}


function currencyHistory(get_param, selector) {
    var content = LZString.compress($(document).find(selector).html()),
        url = window.location.origin + window.location.pathname;
    window.history.pushState({content: content, url: url + get_param, selector: selector}, '', url + get_param);
    $(document).trigger('hit-counters', url + get_param);
}

function accordHistory(link) {
    var id_accordion = link.attr('data-bank_id'),
        name = 'accordion';
    id_accordion = id_accordion.replace('#', '');
    get_param = addHistoryParams(name, name + '-' + id_accordion);
    currencyHistory(get_param, ".rates-table-sort");
}

function workingHistory(params) {
    get_param = addHistoryParams('working', params);
    currencyHistory(get_param, ".page_currency");
}

function alfaCurrencyRate() {
    $.ajax({
        url: "/ajax/alfarate",
        type: "post",
        success: function (responce) {
            $('.a-course-purchase').html(responce);
            $('.a-course-sale').html(responce);
            selectBestCourse();
        }
    })
}

function ideaCurrencyRate() {
    $.ajax({
        url: "/ajax/idearate",
        type: "post",
        success: function (responce) {
            var oblect = JSON.parse(responce);
            $('.idea-usd-buy').html(parseFloat(oblect.USD.buy));
            $('.idea-usd-sale').html(parseFloat(oblect.USD.sell));
            $('.idea-eur-buy').html(parseFloat(oblect.EUR.buy));
            $('.idea-eur-sale').html(parseFloat(oblect.EUR.sell));
            $('.idea-rub-buy').html(parseFloat(oblect.RUB.buy));
            $('.idea-rub-sale').html(parseFloat(oblect.RUB.sell));
            $('.idea-pln-buy').html(parseFloat(oblect.PLN.buy));
            $('.idea-pln-sale').html(parseFloat(oblect.PLN.sell));
            selectBestCourse();
        }
    })
}

function bnbCurrencyRate() {
    $.ajax({
        url: "/ajax/bnbrate",
        type: "post",
        success: function (responce) {
            var oblect = JSON.parse(responce);
            $('.bnb-usd-buy').html(parseFloat(oblect.usd_buy));
            $('.bnb-usd-sale').html(parseFloat(oblect.usd_sell));
            $('.bnb-eur-buy').html(parseFloat(oblect.eur_buy));
            $('.bnb-eur-sale').html(parseFloat(oblect.eur_sell));
            $('.bnb-rub-buy').html(parseFloat(oblect.rub_buy));
            $('.bnb-rub-sale').html(parseFloat(oblect.rub_sell));
            $('.bnb-pln-buy').html(parseFloat(oblect.pln_buy));
            $('.bnb-pln-sale').html(parseFloat(oblect.pln_sell));
            $('.bnb-gbp-buy').html(parseFloat(oblect.gbp_buy));
            $('.bnb-gbp-sale').html(parseFloat(oblect.gbp_sell));
            $('.bnb-usdrub-buy').html(parseFloat(oblect.usdrub_buy));
            $('.bnb-usdrub-sale').html(parseFloat(oblect.usdrub_sell));
            $('.bnb-eurrub-buy').html(parseFloat(oblect.eurrub_buy));
            $('.bnb-eurrub-sale').html(parseFloat(oblect.eurrub_sell));
            $('.bnb-eurusd-buy').html(parseFloat(oblect.eurusd_buy));
            $('.bnb-eurusd-sale').html(parseFloat(oblect.eurusd_sell));
            selectBestCourse();
        }
    })
}

function bpsCurrencyRate() {
    $.ajax({
        url: "/ajax/bpsrate",
        type: "post",
        success: function (responce) {
            var oblect = JSON.parse(responce);
            $('.bps-usd-buy').html(parseFloat(oblect.usd_buy));
            $('.bps-usd-sale').html(parseFloat(oblect.usd_sell));
            $('.bps-eur-buy').html(parseFloat(oblect.eur_buy));
            $('.bps-eur-sale').html(parseFloat(oblect.eur_sell));
            $('.bps-rub-buy').html(parseFloat(oblect.rub_buy));
            $('.bps-rub-sale').html(parseFloat(oblect.rub_sell));
            $('.bps-pln-buy').html(parseFloat(oblect.pln_buy));
            $('.bps-pln-sale').html(parseFloat(oblect.pln_sell));
            $('.bps-gbp-buy').html(parseFloat(oblect.gbp_buy));
            $('.bps-gbp-sale').html(parseFloat(oblect.gbp_sell));
            $('.bps-usdrub-buy').html(parseFloat(oblect.usdrub_buy));
            $('.bps-usdrub-sale').html(parseFloat(oblect.usdrub_sell));
            $('.bps-eurrub-buy').html(parseFloat(oblect.eurrub_buy));
            $('.bps-eurrub-sale').html(parseFloat(oblect.eurrub_sell));
            $('.bps-eurusd-buy').html(parseFloat(oblect.eurusd_buy));
            $('.bps-eurusd-sale').html(parseFloat(oblect.eurusd_sell));
            selectBestCourse();
        }
    })
}

function paritetCurrencyRate() {
    $.ajax({
        url: "/ajax/paritetrate",
        type: "post",
        success: function (responce) {

            var oblect = JSON.parse(responce);
            $('.paritet-usd-buy').html(parseFloat(oblect.usd_buy));
            $('.paritet-usd-sale').html(parseFloat(oblect.usd_sell));
            $('.paritet-eur-buy').html(parseFloat(oblect.eur_buy));
            $('.paritet-eur-sale').html(parseFloat(oblect.eur_sell));
            $('.paritet-rub-buy').html(parseFloat(oblect.rub_buy));
            $('.paritet-rub-sale').html(parseFloat(oblect.rub_sell));
            $('.paritet-usdrur-buy').html(parseFloat(oblect.usdrub_buy));
            $('.paritet-usdrur-sale').html(parseFloat(oblect.usdrub_sell));
            $('.paritet-eurrur-buy').html(parseFloat(oblect.eurrub_buy));
            $('.paritet-eurrur-sale').html(parseFloat(oblect.eurrub_sell));
            $('.paritet-eurusd-buy').html(parseFloat(oblect.eurusd_buy));
            $('.paritet-eurusd-sale').html(parseFloat(oblect.eurusd_sell));
            selectBestCourse();
        }
    })
}

function addHistoryParams(name, param) {
    var params = parseQueryString(window.location.search),
        get_param = '';
    if (Object.keys(params).length == 0) {
        if (typeof (name) != 'undefined') {
            get_param = '?' + name + '=' + param;
        }
    } else {
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
            var id_accord = params[key].replace('accordion-', '');
            $('.acc-link_' + id_accord).click();
        }
    }
}

!function () {
    'use strict';

    function convInner() {
        var btn = '.rates-table .conv-btn';
        if ($(btn).length) {
            var convBlock = '.rates-table .conv-inner';
            $(document).on('click', '.rates-table .conv-btn', function () {
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
                if (curr.length > 3) {
                    curr_from = curr.substr(0, 3);
                    curr_to = curr.substr(3, 3);
                    curr_from = curr_from == 'rur' ? 'rub' : curr_from;
                    curr_to = curr_to == 'rur' ? 'rub' : curr_to;
                }
                newCoord.top = coord.top + 30;
                newCoord.left = coord.left - 180;
                $(convBlock).offset(newCoord);

                if (invert) {
                    $(convBlock).find(".form-group:first").addClass('last_invert');
                    $(convBlock).find(".form-group:last").addClass('firts_invert');
                } else {
                    $(convBlock).find(".form-group:first").removeClass('last_invert');
                    $(convBlock).find(".form-group:last").removeClass('firts_invert');
                }

                $(convBlock).find(".form-input-sum").val("");
                $(convBlock).find(".input-text:first").html(curr_from);
                $(convBlock).find(".input-text:last").html(curr_to);
                $(convBlock).find(".form-input-sum:first").attr("data-val", rate / coof);
            });

            $(document).on('click', function (event) {
                if (($(event.target).closest(convBlock).length) || ($(event.target).closest(btn).length)) return;
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
                btn.on('click', function () {
                    btn.removeClass('arrow');
                    $(this).addClass('arrow');
                    if ($(this).hasClass('arr-up')) {
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
        if (tableSortBlock.length && $.fn.tablesorter) {
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
                sortReset: true,
                sortRestart: true
            });
            tableSortBlock.bind('sortEnd', function () {
                tableBody.find('.tr-tb').each(function () {
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
                } else {
                    $('.is_working_block').attr('data-working', '1')
                }
            }
        }
    }

    function historyParams() {
        $(document)
            .on('mouseup', '.history_th:not(.not_h)', function () {
                var sort = $(this).attr('data-sort'),
                    sort_param = $(this).attr('data-param'),
                    name = 'sort',
                    param = sort_param + '.' + sort;

                var get_param = addHistoryParams(name, param);

                if (sort == 'desc') {
                    $(this).attr('data-sort', 'asc');
                } else {
                    $(this).attr('data-sort', 'desc');
                }
                currencyHistory(get_param, ".rates-table-sort");
            })
            .on('click', '.tr-tb:not(.aj)', function () {
                var bank_id = $(this).attr('data-bank_id')
                if ($(this).hasClass('c_act')) {
                    $('.acc_' + bank_id).removeClass('c_vis');
                    $(this).removeClass('c_act');
                } else {
                    $('.acc_' + bank_id).addClass('c_vis');
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
            if (e.state !== null) {
                e.state.content = LZString.decompress(e.state.content);
                $(document).trigger('update-content', e.state);
            }
        }, false);
    }

    function searchDepartment() {
        $(document).on("keyup", ".search-sm .search-depart", function () {
            if (!$(this).hasClass('mobile')) {
                var search = $(this).val().toLowerCase(),
                    $rows = $(this).closest(".acc-body").find("tbody tr");
                $rows.removeClass('hidden');
                if (search.length > 2) {
                    $rows.each(function (i, element) {
                        if (
                            $(this).find(".ttl a").html().toLowerCase().indexOf(search) === -1
                            && $(this).find(".address").html().toLowerCase().indexOf(search) === -1
                        ) {
                            $(this).addClass("hidden");
                        }
                    })
                }
            }
        });
    }

    function searchDepartmentMobile() {
        $(document).on("keyup", ".search-sm.mobile .search-depart", function () {
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

    $(window).load(function () {
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
    });
}();