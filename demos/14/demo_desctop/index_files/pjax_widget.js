var scrollPageTop = 500;

function scrollPaginationTop(block, paginationOffset) {
    if ($(block).length) {
        var headerHeight = 0;
        var headerFixed = $('header > div').filter(function () {
            return $(this).css('position') === 'fixed';
        });
        if (headerFixed.length) {
            headerHeight = headerFixed.height();
        }
        paginationOffset = $(block).offset().top - headerHeight;
    }
    return paginationOffset;
}

$(document)
    .on('pjax:start', function (e) {
        $(e.target).find('tbody').addClass('loading');
    })
    .on('pjax:end', function (e, resource, resp) {
        $(e.target).find('tbody').removeClass('loading');
        var paginationOffset = $(resp.container).offset().top,
            pageTopBlock = $(resp.container).data('top-block');
        if (typeof pageTopBlock !== "undefined" && pageTopBlock) {
            paginationOffset = scrollPaginationTop(pageTopBlock, paginationOffset);
        }

		    if(!$(resp.container).find('.pjax-end_off-scroll').length) {
			      $("html, body").stop(true).animate({
				        scrollTop: paginationOffset
			      }, scrollPageTop);
		    }

        // Обновляем мета данные
        if (resource && typeof resource.responseText !== "undefined") {
            var title = resource.responseText.match(/<title>(.+)<\/title>/i),
                links = resource.responseText.match(/<link.*?>/gi);
            if (title && typeof(title[1]) !== 'undefined') {
                $('title').text(title[1]);
            }
            if (typeof(links) === "object" && links !== null) {
                $('link[rel=next]').remove();
                $('link[rel=prev]').remove();
                $('head').append(links.join(''));
            }
            //var t = (title[1].match(/[a-zА-Я]{2,} [0-9]{1,3}$/gi) + "").replace(/(^|\s)[a-zA-Я]/gi,function(f){return f.toUpperCase();});
            // descr.attr('content', descr.attr('content').replace(/[a-zА-Я]{2,} [0-9]{1,3}$/gi,'') + ' ' + (t !== 'Null' ? t : ''));
        }

        $(document).trigger('hit-counters', resp.url);
    }).on('click', '.pjax-link', function () {
        var elem = $(this),
            container = elem.closest('[data-pjax-container]');
        if(elem.data('url')) {
            $.pjax.reload('#' + container.attr('id'), {timeout: false, url: atob(elem.data('url')), push: !elem.parent().hasClass('without_history'), replace: false});
        }
    }).on('change', '#sort_select', function () {
        var container = $('[data-pjax-container]'), url = new URL(location.href);
        url.searchParams.set('sort', $(this).val());
        $.pjax.reload('#' + container.attr('id'), {timeout: false, url: url, push: true, replace: false});
    });