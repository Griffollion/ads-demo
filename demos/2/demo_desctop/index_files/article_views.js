$(window).load(function () {
    // поворот стрелки (share)
    $(document).on('click', function () {
        if (($('.ya-share2__popup').hasClass('ya-share2__popup_visible'))) {
            $('.ya-share2__icon_more').addClass('active');
        } else {
            $('.ya-share2__icon_more').removeClass('active');
        }
    });
    $('.ya-share2__icon_more').on('click', function () {
        if (!($('.ya-share2__popup').hasClass('ya-share2__popup_visible'))) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    // поворот стрелки (share) - end
    // добавляем атрибут для обработчика
    $('.ya-share2__item_copy').attr('data-js', 'btn-copy-link');
});

$(function () {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    $('.news-slider').slick({
        dots: true,
        prevArrow: '<i class="fa fa-angle-left slick-prev"></i>',
        nextArrow: '<i class="fa fa-angle-right slick-next"></i>'
    });


    // -----------------------------------------------------------------------------------------------------
    $(document).on('mousedown', '[data-js="btn-copy-link"]:not(.disabled)', function () {
        $(this).addClass('disabled');
        $('[data-js="info-copy-link"]').addClass('activeIn');

        setTimeout(function () {
            $('[data-js="info-copy-link"]').removeClass('activeIn');
            $('[data-js="btn-copy-link"]').removeClass('disabled');
        }, 4000);
    });


    $(document).on("set-src-img", function () {
        $("[data-src-lazy]:not(.load_image_done)").each(function () {
            var t = $(this), offset = t.offset();
            if (($(window).scrollTop() + $(window).height() * 1.5) >= offset.top) {
                !(t.data('url-img-bg')) ? t.attr("src", t.data('src-lazy')) : t.css({'background-image': 'url(' + t.data('url-img-bg') + ')'});
                t.addClass("load_image_done");
            }
        });
    });

    setInterval(function () {
        $(document).trigger('set-src-img');
    }, 50);


    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    var callback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                var attrs = entry.target.attributes
                for (var i = attrs.length - 1; i >= 0; i--) {
                    if (attrs[i].name == 'data-url') {
                        var url = window.location.origin + window.location.pathname;
                        array_url = url.split("/");
                        if (array_url[5] != attrs[i].value) {
                            array_url[5] = attrs[i].value;
                            new_url = array_url.join('/');
                            window.history.replaceState(null, null, new_url);
                            $(document).trigger('hit-counters', new_url);
                        }
                    }
                }
            }
        });
    };

    var observer = new IntersectionObserver(callback, options);

    var loadNews = true;
    $(document).on('scroll', function () {
        var currentScroll = $(window).scrollTop();

        var ratesTablePosition = Math.floor($('h1:last').offset().top + $('h1:last').outerHeight());
        var newsMainBlockPosition = $('.news-load-flag').offset().top;

        if (currentScroll > ratesTablePosition && currentScroll < newsMainBlockPosition) {
            $('.active_news').removeClass('active_news');

            observer.disconnect();
            if (loadNews == true) {
                loadNews = false;
                var time = $('#time').val();
                $.ajax({
                    url: "/ajaxnew/add-article",
                    type: "post",
                    data: {
                        time: time
                    },
                    success: function (b) {
                        var object = JSON.parse(b);

                        $('.news_load').append(object.content);
                        $('#time').val(object.time);

                        var urls = document.querySelectorAll('.news-top-url');
                        urls.forEach(url => {
                            observer.observe(url);
                        });

                        if (shareIsInit) {
                            var share = Ya.share2("share-" + object.id + '-bottom', {
                                content: {
                                    url: $("#share-" + object.id + '-bottom').attr('data-url')     //адрес Вашего сайта
                                }
                            });

                            var share_top = Ya.share2("share-" + object.id + '-top', {
                                content: {
                                    url: $("#share-" + object.id + '-top').attr('data-url')     //адрес Вашего сайта
                                }
                            });
                        }

                        loadNews = true;
                    }
                });
            }
        }
    });

    $('.news-content p > img').unwrap();

    $(document).on('click', '.js-copybtn', function (event) {
        var url = $(this).attr('data-link');
        var container_link = $('.copy-link-container');
        window.getSelection().removeAllRanges();

        container_link.html('<span class="js-copylink">' + url + '</span>');
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
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        container_link.html('');
        // Снятие выделения
        window.getSelection().removeAllRanges();
    });

    //Отложенная инициализация шейра
    var shareIsInit = false;

    function  enableShareOnAdditionalNews() {
        setTimeout(function () {
            shareIsInit = true;
        },200);
    }

    function parseJSAtOnload(path) {
        var element = document.createElement("script");
        element.src = path;
        document.body.appendChild(element);
    }

    function deferredLoading(defferTime, callback) {
        setTimeout(function () {
            parseJSAtOnload("https://yastatic.net/share2/share.js");
            $('.news').addClass('news--custom-share-hidden');
            callback();
        }, defferTime)
    }

    if (window.addEventListener) {
        window.addEventListener("load", function () {
            deferredLoading(3000, enableShareOnAdditionalNews)
        });
    } else if (window.attachEvent) {
        window.attachEvent("onload", function () {
            deferredLoading(3000, enableShareOnAdditionalNews)
        });
    }
    //Отложенная инициализация шейра
});

