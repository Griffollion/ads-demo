$(document).ready(function () {
    try {
        var adCurrencyRow = $("[data-js='ad-currency-row']"),
            url = window.location.href,
            today = new Date(),
            dd = String(today.getDate()).padStart(2, '0'),
            mm = String(today.getMonth() + 1).padStart(2, '0'),
            yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        var regExpRow = "(.*/currency/.*(\\?.*))|(.*/currency/.*/" + today + ".*)|(^.*/currency/[a-z]*$)";
        var regex = new RegExp(regExpRow);

        if (url.match(regex)) {
            console.log('Mutch!');
        }
        if (url.match(regex) == null) {
            adCurrencyRow.remove();
        }
    } catch (err) {
        console.log(err);
    }
});