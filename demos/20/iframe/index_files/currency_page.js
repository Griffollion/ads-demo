!function () {
    'use strict';
    function convInner() {
        var btn = $('.rates-table .conv-btn');
        if (btn.length){
            var convBlock = $('.rates-table .conv-inner');
            btn.on('click', function(){
                convBlock.fadeIn();
                var t = $(this),
                    curr = t.attr('data-c'),
                    curr_from = curr,
                    curr_to = "byn",
                    rate = parseFloat(t.closest('td').text()).toFixed(3),
                    coord = t.offset(),
                    newCoord = {};
                if(curr.length > 3){
                    curr_from = curr.substr(0,3);
                    curr_to = curr.substr(3,3);
                }
                newCoord.top = coord.top + 30;
                newCoord.left = coord.left - 180;
                convBlock.offset(newCoord);
                convBlock.find(".form-input-sum").val("");
                convBlock.find(".input-text:first").html(curr_from);
                convBlock.find(".input-text:last").html(curr_to);
                convBlock.find(".form-input-sum:first").attr("data-val", rate);
            });

            $(document).click(function(event) {
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
                cancelSelection: false
            });
            tableSortBlock.bind('sortEnd',function(){
                console.log(123);
                tableBody.each(function() {
                    for (var i = 0; i <= $(this).find('.table-acc').length*2; i+=2) {
                        $(this).find('.acc-link_' + i).after($(this).find('.acc_' + i));
                    }
                })
            });
        }
    }

    function historyParans(){
        $(document)
            .on('mouseup', '.history_th', function() {
            var content = $(".rates-table-sort").html(),
                url = window.location.origin + window.location.pathname,
                params = parseQueryString(window.location.search),
                sort = $(this).attr('data-sort'),
                sort_param = $(this).attr('data-param'),
                get_param = '?sort='+sort_param+'.'+sort;
            if (sort == 'desc') {
                $(this).attr('data-sort', 'asc');
            }else{
                $(this).attr('data-sort', 'desc');
            }

            window.history.pushState({content:content, url:url+get_param}, '', url+get_param);
            $(document).trigger('hit-counters', url+get_param);
        })
        // Триггер обновления выдачи обьектов и инпутов/ссылок
        .on('update-content', function (e, params) {
            $(document).trigger('hit-counters', params.url);
            $(".rates-table-sort").html(params.content);
        });

        window.addEventListener('popstate', function (e) {
            if (e.state !== null){
                $(document).trigger('update-content', e.state);
            }
        }, false);
    }

    function searchDepartment(){
        $(document).on("keyup",".search-sm .search-depart", function(){
            if (!$(this).hasClass('mobile')) {
                var search = $(this).val().toLowerCase(),
                    $rows = $(this).closest(".collapse").find(".more-table tbody tr");
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
                    $rows = $(this).closest(".collapse").find(".more-table tr");
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
        historyParans();
        searchDepartment();
    });
    $(window).resize(function () {
        convInner();
    });
    $(document).ready(function () {
        searchDepartmentMobile();
    });
}();