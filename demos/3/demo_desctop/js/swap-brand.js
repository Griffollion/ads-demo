$(document).ready(function () {
    setInterval(function () {
        $('.seo_wrap.branding').removeClass('dis');
        $('.seo_wrap.branding').addClass('changed');

        $('.branding__head-img').removeClass('active');
        $('.branding__head-img').addClass('deactivate');
    }, 3500);

    setInterval(function () {
        $('.seo_wrap.branding').addClass('dis');
        $('.branding__head-img').addClass('active');
    }, 7000);

});