// Yandex.Metrika counter
(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter31650469 = new Ya.Metrika({
                id: 31650469,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        } catch (e) {
        }
    });
    var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
        n.parentNode.insertBefore(s, n);
    };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";
    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks");

// /Yandex.Metrika counter
// Rating@Mail.ru counter
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "2904958", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
    if (d.getElementById(id)) return;
    var ts = d.createElement("script");
    ts.type = "text/javascript";
    ts.async = true;
    ts.id = id;
    ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
    var f = function () {
        var s = d.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ts, s);
    };
    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "topmailru-code");
// //Rating@Mail.ru counter

// Top100 (Kraken) Counter

(function (w, d, c) {
    (w[c] = w[c] || []).push(function () {
        var options = {
            project: 4494435
        };
        try {
            w.top100Counter = new top100(options);
        } catch (e) {
        }
    });
    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src =
        (d.location.protocol == "https:" ? "https:" : "http:") +
        "//st.top100.ru/top100/top100.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(window, document, "_top100q");

// END Top100 (Kraken) Counter
//LiveInternet counter
new Image().src = "//counter.yadro.ru/hit;Bankiros?r" +
    escape(document.referrer) + ((typeof (screen) == "undefined") ? "" :
        ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ?
        screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) +
    ";h" + escape(document.title.substring(0, 80)) +
    ";" + Math.random();
//LiveInternet

// Matomo
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.bankiros.ru"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
    var u = "//stat.bankiros.ru/";
    _paq.push(['setTrackerUrl', u + 'piwik.php']);
    _paq.push(['setSiteId', '3']);
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'piwik.js';
    s.parentNode.insertBefore(g, s);
})();

