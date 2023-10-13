$(document).ready(function () {
    paritetCurrencyRate();
    var mainLink = $('.full-row-lnk__link'),
        rowWidth = mainLink.closest('tr').outerWidth();
 
     mainLink.width(rowWidth);
 });