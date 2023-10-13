$(document).ready(function () {
   bnbCurrencyRate();
   var mainLink = $('.full-row-lnk__link'),
       rowWidth = mainLink.closest('tr').outerWidth();

    mainLink.width(rowWidth);
});