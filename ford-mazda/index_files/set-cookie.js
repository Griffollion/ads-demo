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
