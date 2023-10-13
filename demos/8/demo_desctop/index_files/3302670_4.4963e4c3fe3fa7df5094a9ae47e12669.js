$(document).ready(function () {
    ideaCurrencyRate();
    var mainLink = $('.full-row-lnk__link'),
        rowWidth = mainLink.closest('tr').outerWidth();
 
     mainLink.width(rowWidth);
 });