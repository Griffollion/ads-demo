function addCookie(name, expire) {
    $.ajax({
        url: "/ajax/setcookies",
        type: "post",
        data: {
            name: name,
            value: 3,
            expire: expire
        },
        success: function (b) {
            if (b == 'ok') {
                console.log('set_c');
            }
        }
    });
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}