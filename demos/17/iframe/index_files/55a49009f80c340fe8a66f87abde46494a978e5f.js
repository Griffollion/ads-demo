!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return h.call(b, a) > -1 !== c
        })
    }

    function F(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;) ;
        return a
    }

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }

    function M() {
        this.expando = n.expando + M.uid++
    }

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c)
            } catch (a) {
            }
            O.set(a, b, c)
        } else c = void 0;
        return c
    }

    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function () {
                return d.cur()
            } : function () {
                return n.css(a, b, "")
            }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; c < d; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; o < p; o++) if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f); else if (ba.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", o = 0; f = m[o++];) if (d && n.inArray(f, d) > -1) e && e.push(f); else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) for (k = 0; f = g[k++];) Z.test(f.type || "") && c.push(f);
        return l
    }

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {
        }
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha; else if (!e) return this;
        return 1 === f && (g = e, e = function (a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
            n.event.add(this, b, e, d, c)
        })
    }

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; c < d; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; m < o; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; m < i; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d, c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function Ma(a) {
        if (a in La) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = Ka.length; c--;) if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(b, c, e) {
        var f = !0, g = "width" === c ? b.offsetWidth : b.offsetHeight, h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), g <= 0 || null == g) {
            if (g = Fa(b, c, h), (g < 0 || null == g) && (g = b.style[c]), Ba.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }

    function Wa() {
        return a.setTimeout(function () {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], Ua.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}, easing: n.easing._default}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); f < g; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function vb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function wb(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        var e = {}, f = a === sb;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function xb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function yb(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function zb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a.throws) b = g(b); else try {
                b = g(b)
            } catch (a) {
                return {state: "parsererror", error: g ? a : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    function Fb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Fb(a + "[" + e + "]", b[e], c, d)
    }

    function Lb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString,
        k = i.hasOwnProperty, l = {}, m = "2.2.0", n = function (a, b) {
            return new n.fn.init(a, b)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return e.call(this)
        }, get: function (a) {
            return null != a ? a < 0 ? this[a + this.length] : this[a] : e.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a) {
            return n.each(this, a)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(e.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: g, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" === n.type(a) && !a.nodeType && !n.isWindow(a) && !(a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b) {
            var c, d = 0;
            if (s(a)) for (c = a.length; d < c && b.call(a[d], d, a[d]) !== !1; d++) ; else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a)) for (d = a.length; g < d; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        }, guid: 1, proxy: function (a, b) {
            var c, d, f;
            if ("string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a)) return d = e.call(arguments, 2), f = function () {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f
        }, now: Date.now, support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    var t = function (a) {
        function ea(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                    if (9 === x) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d
                    } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                } else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; h--;) r[h] = l + " " + pa(r[h]);
                        s = r.join(","), w = _.test(a) && na(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (a) {
                    } finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function fa() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            var a = [];
            return b
        }

        function ga(a) {
            return a[u] = !0, a
        }

        function ha(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (a) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ia(a, b) {
            for (var c = a.split("|"), e = c.length; e--;) d.attrHandle[c[e]] = b
        }

        function ja(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }

        function ka(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function la(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ma(a) {
            return ga(function (b) {
                return b = +b, ga(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function na(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function oa() {
        }

        function pa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function qa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) {
                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return !0
                }
            }
        }

        function ra(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sa(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ea(a, b[d], c);
            return c
        }

        function ta(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function ua(a, b, c, d, e, f) {
            return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ga(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || sa(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ta(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = ta(r, n), d(j, [], h, i), k = j.length; k--;) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--;) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        for (k = r.length; k--;) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function va(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function (a) {
                return a === b
            }, h, !0), l = qa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; i < f; i++) if (c = d.relative[a[i].type]) m = [qa(ra(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; e < f && !d.relative[a[e].type]; e++) ;
                    return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a))
                }
                m.push(c)
            }
            return ra(m)
        }

        function wa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++];) if (q(l, g || n, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    for (o = 0; q = b[o++];) q(t, u, g, h);
                    if (f) {
                        if (r > 0) for (; s--;) t[s] || u[s] || (u[s] = F.call(i));
                        u = ta(u)
                    }
                    H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i)
                }
                return k && (w = y, j = v), t
            };
            return c ? ga(f) : f
        }

        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0,
            x = 0, y = fa(), z = fa(), A = fa(), B = function (a, b) {
                return a === b && (l = !0), 0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O),
            V = new RegExp("^" + M + "$"), W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, da = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (a) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];) ;
                    a.length = c - 1
                }
            }
        }
        c = ea.support = {}, f = ea.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ea.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ha(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ha(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ha(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ba, ca);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ha(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ha(function (a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ha(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ja(a, b);
                for (c = a; c = c.parentNode;) g.unshift(c);
                for (c = b; c = c.parentNode;) h.unshift(c);
                for (; g[d] === h[d];) d++;
                return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ea.matches = function (a, b) {
            return ea(a, null, null, b)
        }, ea.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (a) {
            }
            return ea(b, n, null, [a]).length > 0
        }, ea.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ea.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ea.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ea.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (; b = a[f++];) b === a[f] && (e = d.push(f));
                for (; e--;) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ea.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else for (; b = a[d++];) c += e(b);
            return c
        }, d = ea.selectors = {
            cacheLength: 50,
            createPseudo: ga,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ea.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ea.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) for (; (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m !== b));) ;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function (a, c) {
                        for (var d, f = e(a, b), g = f.length; g--;) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ga(function (a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ga(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ga(function (a) {
                    return function (b) {
                        return ea(a, b).length > 0
                    }
                }), contains: ga(function (a) {
                    return a = a.replace(ba, ca), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ga(function (a) {
                    return V.test(a || "") || ea.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Y.test(a.nodeName)
                }, input: function (a) {
                    return X.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: ma(function () {
                    return [0]
                }), last: ma(function (a, b) {
                    return [b - 1]
                }), eq: ma(function (a, b, c) {
                    return [c < 0 ? c + b : c]
                }), even: ma(function (a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }), odd: ma(function (a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }), lt: ma(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: ma(function (a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) d.pseudos[b] = ka(b);
        for (b in {submit: !0, reset: !0}) d.pseudos[b] = la(b);
        return oa.prototype = d.filters = d.pseudos, d.setFilters = new oa, g = ea.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h;) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ea.error(a) : z(a, i).slice(0)
        }, h = ea.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--;) f = va(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, wa(e, d)), f.selector = a
            }
            return f
        }, i = ea.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                for (i = W.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]);) if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b))) {
                    if (j.splice(i, 1), a = f.length && pa(j), !a) return H.apply(e, f), e;
                    break
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ha(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ha(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ia("type|href|height|width", function (a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ha(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ia("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ha(function (a) {
            return null == a.getAttribute("disabled")
        }) || ia(K, function (a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ea
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function (a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a)
        }
        return d
    }, v = function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; b < c; b++) if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; b < c; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(z(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(z(this, a || [], !0))
        }, is: function (a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function (a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {children: !0, contents: !0, next: !0, prev: !0};
    n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; a < c; a++) if (n.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return u(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return u(a, "parentNode", c)
        }, next: function (a) {
            return F(a, "nextSibling")
        }, prev: function (a) {
            return F(a, "previousSibling")
        }, nextAll: function (a) {
            return u(a, "nextSibling")
        }, prevAll: function (a) {
            return u(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return u(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return u(a, "previousSibling", c)
        }, siblings: function (a) {
            return v((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return v(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;
    n.Callbacks = function (a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function () {
            for (e = a.once, d = b = !0; g.length; h = -1) for (c = g.shift(); ++h < f.length;) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
        }, j = {
            add: function () {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function b(c) {
                    n.each(c, function (c, d) {
                        n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d)
                    })
                }(arguments), c && !b && i()), this
            }, remove: function () {
                return n.each(arguments, function (a, b) {
                    for (var c; (c = n.inArray(b, f, c)) > -1;) f.splice(c, 1), c <= h && h--
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            }, empty: function () {
                return f && (f = []), this
            }, disable: function () {
                return e = g = [], f = c = "", this
            }, disabled: function () {
                return !f
            }, lock: function () {
                return e = g = [], c || (f = c = ""), this
            }, locked: function () {
                return !!e
            }, fireWith: function (a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
            }, fire: function () {
                return j.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return j
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var i, j, k, b = 0, c = e.call(arguments), d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                };
            if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); b < d; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    }), n.ready.promise = function (b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) K(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c)
        })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, L = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    M.uid = 1, M.prototype = {
        register: function (a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        }, cache: function (a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        }, set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d];
            return e
        }, get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a); else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    for (; c--;) delete f[d[c]]
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        }, hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M, O = new M, P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;
    n.extend({
        hasData: function (a) {
            return O.hasData(a) || N.hasData(a)
        }, data: function (a, b, c) {
            return O.access(a, b, c)
        }, removeData: function (a, b) {
            O.remove(a, b)
        }, _data: function (a, b, c) {
            return N.access(a, b, c)
        }, _removeData: function (a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                O.set(this, a)
            }) : K(this, function (b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function () {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"], V = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        }, X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
    var ba = /<|&#?\w+;/;
    !function () {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/;
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(G) || [""], j = b.length; j--;) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                type: o,
                origType: q,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && n.expr.match.needsContext.test(e),
                namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(G) || [""], j = b.length; j--;) if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped();) for (a.currentTarget = f.elem, c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            for (h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; b--;) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ia() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === ia() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && n.nodeName(this, "input")) return this.click(), !1
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d) {
            return ja(this, a, b, c, d)
        }, one: function (a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    n.extend({
        htmlPrefilter: function (a) {
            return a.replace(ka, "<$1></$2>")
        }, clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; d < e; d++) ta(f[d], g[d]);
            if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; d < e; d++) sa(f[d], g[d]); else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        }, cleanData: function (a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
                if (b = c[N.expando]) {
                    if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    c[N.expando] = void 0
                }
                c[O.expando] && (c[O.expando] = void 0)
            }
        }
    }), n.fn.extend({
        domManip: ua, detach: function (a) {
            return va(this, a, !0)
        }, remove: function (a) {
            return va(this, a)
        }, text: function (a) {
            return K(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return ua(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return ua(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return ua(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return ua(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return K(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (a) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = [];
            return ua(this, arguments, function (b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; h <= f; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {HTML: "block", BODY: "block"}, Aa = /^margin/, Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function (b) {
            var c = b.ownerDocument.defaultView;
            return c.opener || (c = a), c.getComputedStyle(b)
        }, Da = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        }, Ea = d.documentElement;
    !function () {
        function i() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
            var d = a.getComputedStyle(h);
            b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
        }

        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), n.extend(l, {
            pixelPosition: function () {
                return i(), b
            }, boxSizingReliable: function () {
                return null == c && i(), c
            }, pixelMarginRight: function () {
                return null == c && i(), e
            }, reliableMarginLeft: function () {
                return null == c && i(), f
            }, reliableMarginRight: function () {
                var b, c = h.appendChild(d.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
            }
        }))
    }();
    var Ha = /^(none|table(?!-c[ea]).+)/, Ia = {position: "absolute", visibility: "hidden", display: "block"},
        Ja = {letterSpacing: "0", fontWeight: "400"}, Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) return Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
                    return Pa(a, b, d)
                }) : Pa(a, b, d)
            }, set: function (a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
        if (b) return (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {marginLeft: 0}, function () {
            return a.getBoundingClientRect().left
        })) + "px"
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
        if (b) return Da(a, {display: "inline-block"}, Fa, [a, "marginRight"])
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function (a, b) {
            return K(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; g < e; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Qa(this, !0)
        }, hide: function () {
            return Qa(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    }), n.Tween = Ra, Ra.prototype = {
        constructor: Ra, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }, _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function (a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c), c
            }]
        }, tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
        }, prefilters: [Za], prefilter: function (a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = N.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Sa = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        a.clearInterval(Ta), Ta = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function () {
                a.clearTimeout(e)
            }
        })
    }, function () {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function (a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), l.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) for (b = a.match(G) || []; c = this[i++];) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                h = n.trim(d), e !== h && c.setAttribute("class", h)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) for (b = a.match(G) || []; c = this[i++];) if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                for (g = 0; f = b[g++];) for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                h = n.trim(d), e !== h && c.setAttribute("class", h)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c) for (d = 0, e = n(this), f = a.match(G) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        }, hasClass: function (a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    return n.trim(a.value)
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++) if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                if (n.isArray(b)) return a.checked = n.inArray(n(a).val(), b) > -1
            }
        }, l.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var hb = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function (b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0; (h = p[g++]) && !b.isPropagationStopped();) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        }, simulate: function (a, b, c) {
            var d = n.extend(new n.Event, c, {type: a, isSimulated: !0});
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), n.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            if (c) return n.event.trigger(a, b, c, !0)
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var ib = a.location, jb = n.now(), kb = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (a) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//, rb = {},
        sb = {}, tb = "*/".concat("*"), ub = d.createElement("a");
    ub.href = ib.href, n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ib.href,
            type: "GET",
            isLocal: ob.test(ib.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a)
        },
        ajaxPrefilter: vb(rb),
        ajaxTransport: vb(sb),
        ajax: function (b, c) {
            function y(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }

            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(),
                r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === v) {
                            if (!h) for (h = {}; b = nb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === v ? g : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    }, overrideMimeType: function (a) {
                        return v || (m.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (v < 2) for (b in a) s[b] = [s[b], a[b]]; else x.always(a[x.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || w;
                        return e && e.abort(b), y(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host
                } catch (a) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {success: 1, error: 1, complete: 1}) x[l](m[l]);
            if (e = wb(sb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function () {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, y)
                } catch (a) {
                    if (!(v < 2)) throw a;
                    y(-1, a)
                }
            } else y(-1, "No Transport");
            return x
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function (a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Ab = /%20/g, Bb = /\[\]$/, Cb = /\r?\n/g, Db = /^(?:submit|button|image|reset|file)$/i,
        Eb = /^(?:input|select|textarea|keygen)/i;
    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Fb(c, a[c], b, e);
        return d.join("&").replace(Ab, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(Cb, "\r\n")}
                }) : {name: b.name, value: c.replace(Cb, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (a) {
        }
    };
    var Gb = {0: 200, 1223: 204}, Hb = n.ajaxSettings.xhr();
    l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function (b) {
        var c, d;
        if (l.cors || Hb && !b.crossDomain) return {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {binary: h.response} : {text: h.responseText}, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (a) {
                    if (c) throw a
                }
            }, abort: function () {
                c && c()
            }
        }
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (e, f) {
                    b = n("<script>").prop({charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Ib = [], Jb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Ib.pop() || n.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), l.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
        var e = x.exec(a), f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Kb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Kb) return Kb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(g, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    }, n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === n.css(a, "position");) a = a.offsetParent;
                return a || Ea
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function (d) {
            return K(this, function (a, d, e) {
                var f = Lb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
            if (c) return c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }, size: function () {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Mb = a.jQuery, Nb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n
    }, b || (a.jQuery = a.$ = n), n
});
;window.yii = (function ($) {
    var pub = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], ' + 'input[type="image"]',
        changeableSelector: 'select, input, textarea',
        getCsrfParam: function () {
            return $('meta[name=csrf-param]').attr('content');
        },
        getCsrfToken: function () {
            return $('meta[name=csrf-token]').attr('content');
        },
        setCsrfToken: function (name, value) {
            $('meta[name=csrf-param]').attr('content', name);
            $('meta[name=csrf-token]').attr('content', value);
        },
        refreshCsrfToken: function () {
            var token = pub.getCsrfToken();
            if (token) {
                $('form input[name="' + pub.getCsrfParam() + '"]').val(token);
            }
        },
        confirm: function (message, ok, cancel) {
            if (window.confirm(message)) {
                !ok || ok();
            } else {
                !cancel || cancel();
            }
        },
        handleAction: function ($e, event) {
            var $form = $e.attr('data-form') ? $('#' + $e.attr('data-form')) : $e.closest('form'),
                method = !$e.data('method') && $form ? $form.attr('method') : $e.data('method'),
                action = $e.attr('href'), isValidAction = action && action !== '#', params = $e.data('params'),
                areValidParams = params && $.isPlainObject(params), pjax = $e.data('pjax'),
                usePjax = pjax !== undefined && pjax !== 0 && $.support.pjax, pjaxContainer, pjaxOptions = {};
            if (usePjax) {
                pjaxContainer = $e.data('pjax-container');
                if (pjaxContainer === undefined || !pjaxContainer.length) {
                    pjaxContainer = $e.closest('[data-pjax-container]').attr('id') ? ('#' + $e.closest('[data-pjax-container]').attr('id')) : '';
                }
                if (!pjaxContainer.length) {
                    pjaxContainer = 'body';
                }
                pjaxOptions = {
                    container: pjaxContainer,
                    push: !!$e.data('pjax-push-state'),
                    replace: !!$e.data('pjax-replace-state'),
                    scrollTo: $e.data('pjax-scrollto'),
                    pushRedirect: $e.data('pjax-push-redirect'),
                    replaceRedirect: $e.data('pjax-replace-redirect'),
                    skipOuterContainers: $e.data('pjax-skip-outer-containers'),
                    timeout: $e.data('pjax-timeout'),
                    originalEvent: event,
                    originalTarget: $e
                };
            }
            if (method === undefined) {
                if (isValidAction) {
                    usePjax ? $.pjax.click(event, pjaxOptions) : window.location.assign(action);
                } else if ($e.is(':submit') && $form.length) {
                    if (usePjax) {
                        $form.on('submit', function (e) {
                            $.pjax.submit(e, pjaxOptions);
                        });
                    }
                    $form.trigger('submit');
                }
                return;
            }
            var oldMethod, oldAction, newForm = !$form.length;
            if (!newForm) {
                oldMethod = $form.attr('method');
                $form.attr('method', method);
                if (isValidAction) {
                    oldAction = $form.attr('action');
                    $form.attr('action', action);
                }
            } else {
                if (!isValidAction) {
                    action = pub.getCurrentUrl();
                }
                $form = $('<form/>', {method: method, action: action});
                var target = $e.attr('target');
                if (target) {
                    $form.attr('target', target);
                }
                if (!/(get|post)/i.test(method)) {
                    $form.append($('<input/>', {name: '_method', value: method, type: 'hidden'}));
                    method = 'post';
                    $form.attr('method', method);
                }
                if (/post/i.test(method)) {
                    var csrfParam = pub.getCsrfParam();
                    if (csrfParam) {
                        $form.append($('<input/>', {name: csrfParam, value: pub.getCsrfToken(), type: 'hidden'}));
                    }
                }
                $form.hide().appendTo('body');
            }
            var activeFormData = $form.data('yiiActiveForm');
            if (activeFormData) {
                activeFormData.submitObject = $e;
            }
            if (areValidParams) {
                $.each(params, function (name, value) {
                    $form.append($('<input/>').attr({name: name, value: value, type: 'hidden'}));
                });
            }
            if (usePjax) {
                $form.on('submit', function (e) {
                    $.pjax.submit(e, pjaxOptions);
                });
            }
            $form.trigger('submit');
            $.when($form.data('yiiSubmitFinalizePromise')).done(function () {
                if (newForm) {
                    $form.remove();
                    return;
                }
                if (oldAction !== undefined) {
                    $form.attr('action', oldAction);
                }
                $form.attr('method', oldMethod);
                if (areValidParams) {
                    $.each(params, function (name) {
                        $('input[name="' + name + '"]', $form).remove();
                    });
                }
            });
        },
        getQueryParams: function (url) {
            var pos = url.indexOf('?');
            if (pos < 0) {
                return {};
            }
            var pairs = $.grep(url.substring(pos + 1).split('#')[0].split('&'), function (value) {
                return value !== '';
            });
            var params = {};
            for (var i = 0, len = pairs.length; i < len; i++) {
                var pair = pairs[i].split('=');
                var name = decodeURIComponent(pair[0].replace(/\+/g, '%20'));
                var value = decodeURIComponent(pair[1].replace(/\+/g, '%20'));
                if (!name.length) {
                    continue;
                }
                if (params[name] === undefined) {
                    params[name] = value || '';
                } else {
                    if (!$.isArray(params[name])) {
                        params[name] = [params[name]];
                    }
                    params[name].push(value || '');
                }
            }
            return params;
        },
        initModule: function (module) {
            if (module.isActive !== undefined && !module.isActive) {
                return;
            }
            if ($.isFunction(module.init)) {
                module.init();
            }
            $.each(module, function () {
                if ($.isPlainObject(this)) {
                    pub.initModule(this);
                }
            });
        },
        init: function () {
            initCsrfHandler();
            initRedirectHandler();
            initAssetFilters();
            initDataMethods();
        },
        getBaseCurrentUrl: function () {
            return window.location.protocol + '//' + window.location.host;
        },
        getCurrentUrl: function () {
            return window.location.href;
        }
    };

    function initCsrfHandler() {
        $.ajaxPrefilter(function (options, originalOptions, xhr) {
            if (!options.crossDomain && pub.getCsrfParam()) {
                xhr.setRequestHeader('X-CSRF-Token', pub.getCsrfToken());
            }
        });
        pub.refreshCsrfToken();
    }

    function initRedirectHandler() {
        $(document).ajaxComplete(function (event, xhr) {
            var url = xhr && xhr.getResponseHeader('X-Redirect');
            if (url) {
                window.location.assign(url);
            }
        });
    }

    function initAssetFilters() {
        var loadedScripts = {};
        $('script[src]').each(function () {
            var url = getAbsoluteUrl(this.src);
            loadedScripts[url] = true;
        });
        $.ajaxPrefilter('script', function (options, originalOptions, xhr) {
            if (options.dataType == 'jsonp') {
                return;
            }
            var url = getAbsoluteUrl(options.url),
                forbiddenRepeatedLoad = loadedScripts[url] === true && !isReloadableAsset(url),
                cleanupRunning = loadedScripts[url] !== undefined && loadedScripts[url]['xhrDone'] === true;
            if (forbiddenRepeatedLoad || cleanupRunning) {
                xhr.abort();
                return;
            }
            if (loadedScripts[url] === undefined || loadedScripts[url] === true) {
                loadedScripts[url] = {xhrList: [], xhrDone: false};
            }
            xhr.done(function (data, textStatus, jqXHR) {
                if (loadedScripts[jqXHR.yiiUrl]['xhrDone'] === true) {
                    return;
                }
                loadedScripts[jqXHR.yiiUrl]['xhrDone'] = true;
                for (var i = 0, len = loadedScripts[jqXHR.yiiUrl]['xhrList'].length; i < len; i++) {
                    var singleXhr = loadedScripts[jqXHR.yiiUrl]['xhrList'][i];
                    if (singleXhr && singleXhr.readyState !== XMLHttpRequest.DONE) {
                        singleXhr.abort();
                    }
                }
                loadedScripts[jqXHR.yiiUrl] = true;
            }).fail(function (jqXHR, textStatus) {
                if (textStatus === 'abort') {
                    return;
                }
                delete loadedScripts[jqXHR.yiiUrl]['xhrList'][jqXHR.yiiIndex];
                var allFailed = true;
                for (var i = 0, len = loadedScripts[jqXHR.yiiUrl]['xhrList'].length; i < len; i++) {
                    if (loadedScripts[jqXHR.yiiUrl]['xhrList'][i]) {
                        allFailed = false;
                    }
                }
                if (allFailed) {
                    delete loadedScripts[jqXHR.yiiUrl];
                }
            });
            xhr.yiiIndex = loadedScripts[url]['xhrList'].length;
            xhr.yiiUrl = url;
            loadedScripts[url]['xhrList'][xhr.yiiIndex] = xhr;
        });
        $(document).ajaxComplete(function () {
            var styleSheets = [];
            $('link[rel=stylesheet]').each(function () {
                var url = getAbsoluteUrl(this.href);
                if (isReloadableAsset(url)) {
                    return;
                }
                $.inArray(url, styleSheets) === -1 ? styleSheets.push(url) : $(this).remove();
            });
        });
    }

    function initDataMethods() {
        var handler = function (event) {
            var $this = $(this), method = $this.data('method'), message = $this.data('confirm'),
                form = $this.data('form');
            if (method === undefined && message === undefined && form === undefined) {
                return true;
            }
            if (message !== undefined) {
                $.proxy(pub.confirm, this)(message, function () {
                    pub.handleAction($this, event);
                });
            } else {
                pub.handleAction($this, event);
            }
            event.stopImmediatePropagation();
            return false;
        };
        $(document).on('click.yii', pub.clickableSelector, handler).on('change.yii', pub.changeableSelector, handler);
    }

    function isReloadableAsset(url) {
        for (var i = 0; i < pub.reloadableScripts.length; i++) {
            var rule = getAbsoluteUrl(pub.reloadableScripts[i]);
            var match = new RegExp("^" + escapeRegExp(rule).split('\\*').join('.+') + "$").test(url);
            if (match === true) {
                return true;
            }
        }
        return false;
    }

    function escapeRegExp(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    function getAbsoluteUrl(url) {
        return url.charAt(0) === '/' ? pub.getBaseCurrentUrl() + url : url;
    }

    return pub;
})(window.jQuery);
window.jQuery(function () {
    window.yii.initModule(window.yii);
});
;var observer;

function addObserver(selector, onIntersection, observerOptions = {}) {
    observer = new IntersectionObserver(onIntersection, observerOptions);
    document.querySelectorAll(selector).forEach(function (target) {
        observer.observe(target);
    });
}

function removeObserver(selector) {
    document.querySelectorAll(selector).forEach(function (target) {
        observers.unobserve(target);
    });
};var load_callbacks = [];
var is_callback_done = false;

function addLoadCallback(callback) {
    if (is_callback_done) {
        callback();
    } else {
        load_callbacks.push(callback);
    }
}

function runLoadCallbacks() {
    is_callback_done = true;
    load_callbacks.forEach(function (callback) {
        callback();
    });
}

function updateCsrf(first_load) {
    first_load = first_load || false;
    $.get('/ajax/refresh-csrf', function (response) {
        var params = JSON.parse(response);
        $.each(params, function (i, v) {
            $('meta[name=' + i + ']').attr('content', v);
        });
        if (first_load) {
            runLoadCallbacks();
        }
    });
}

function getCsrf() {
    var obj = {};
    obj[$('meta[name="csrf-param"]').attr('content')] = $('meta[name="csrf-token"]').attr('content');
    return obj;
}

if (document.documentElement.innerHTML.indexOf('<!-- nginx -->') === 0) {
    updateCsrf(true);
} else {
    runLoadCallbacks();
}
;var lazy_load_started = false;
var lazy_events = [{
    selector: '.load_image', coeff: 1.5, callback: function (t) {
        !(t.data('url-img-bg')) ? t.attr("src", t.data('url-img')) : t.css({'background-image': 'url(' + t.data('url-img-bg') + ')'});
    }
}];
var lazy_observer_event = {
    selector: '.load_image', callback: function (entry) {
        if (entry.isIntersecting) {
            if (typeof entry.isVisible === 'undefined') {
                entry.isVisible = true;
            }
            if (!entry.target.classList.contains('load_done') && (!entry.target.classList.contains('blocked') || entry.isVisible)) {
                entry.target.classList.add('load_done');
                if (typeof entry.target.dataset.urlImg != "undefined") {
                    entry.target.setAttribute("src", entry.target.dataset.urlImg);
                } else if (typeof entry.target.dataset.urlImgBg != "undefined") {
                    entry.target.style['background-image'] = 'url(' + entry.target.dataset.urlImgBg + ')'
                }
            }
        }
    }
};
addLazyEvent('.load_block', function (entry) {
    if (entry.isIntersecting) {
        if (!entry.target.classList.contains('load_done')) {
            entry.target.classList.add('load_done');
            var route = $(entry.target).data('route');
            var controller = $(entry.target).data('controller');
            var view = $(entry.target).data('view');
            var params = $(entry.target).data('params');
            if (!view)
                return;
            if (!route)
                route = 'render-block';
            if (!controller)
                controller = 'ajax';
            $.ajax({
                url: '/' + controller + '/' + route,
                type: 'POST',
                data: Object.assign({params: params, view: view}, getCsrf()),
                success: function (res) {
                    res = JSON.parse(res);
                    $(entry.target).html(res.content);
                }
            });
        }
    }
});

function scrollToElem(elem, time, correction) {
    time = time || 800;
    correction = correction || 0;
    $('body,html').stop().animate({scrollTop: elem.offset().top - correction}, time, function () {
        setTimeout(function () {
            $('body,html').stop().animate({scrollTop: elem.offset().top - correction}, time / 5);
        }, 100);
    });
}

function addLazyEvent(selector, callback, coeff) {
    coeff = coeff || 1.2;
    if (_checkBrowser()) {
        _lazyObserver(selector, callback);
    } else {
        lazy_events.push({selector: selector, coeff: coeff, callback: callback});
    }
}

function _lazyLoad() {
    lazy_events.forEach(function (lazy_event) {
        $(lazy_event.selector + ":not(.load_done)").each(function () {
            var t = $(this), offset = t.offset();
            if (($(window).scrollTop() + $(window).height() * lazy_event.coeff) >= offset.top) {
                t.addClass('load_done');
                lazy_event.callback(t);
            }
        })
    });
}

function _lazyObserver(selector, callback) {
    if (typeof selector == "undefined") {
        selector = lazy_observer_event.selector;
    }
    if (typeof callback == "undefined") {
        callback = lazy_observer_event.callback;
    }
    var onIntersection = function (entries) {
        for (var key in entries) {
            if (entries.hasOwnProperty(key))
                callback(entries[key]);
        }
    };
    addObserver(selector, onIntersection, {trackVisibility: true, delay: 100});
}

function _checkBrowser() {
    return navigator.userAgent.indexOf("Trident") < 0;
}

function lazyinit() {
    if (_checkBrowser()) {
        _lazyObserver();
    } else if (!lazy_load_started) {
        setInterval(function () {
            _lazyLoad();
        }, 50);
        lazy_load_start = true;
    }
}

lazyinit();
$(document).ajaxSuccess(function (event, xhr, settings) {
    if (xhr.responseText !== undefined && xhr.responseText.indexOf('load_image') >= 0) {
        lazyinit();
    }
});
;
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval,
            h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = b(d), f = {relatedTarget: this};
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = d ? {top: 0, left: 0} : b.offset(),
            g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()},
            h = d ? {width: a(window).width(), height: a(window).height()} : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.5", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
                g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(a - d >= e + g) && "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), !function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a, b) {
    function c() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function d() {
        var a = new Date;
        return c(a.getFullYear(), a.getMonth(), a.getDate())
    }

    function e(a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
    }

    function f(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    function g(a) {
        return a && !isNaN(a.getTime())
    }

    function h(b, c) {
        function d(a, b) {
            return b.toLowerCase()
        }

        var e, f = a(b).data(), g = {}, h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase());
        for (var i in f) c.test(i) && (e = i.replace(h, d), g[e] = f[i]);
        return g
    }

    function i(b) {
        var c = {};
        if (q[b] || (b = b.split("-")[0], q[b])) {
            var d = q[b];
            return a.each(p, function (a, b) {
                b in d && (c[b] = d[b])
            }), c
        }
    }

    var j = function () {
        var b = {
            get: function (a) {
                return this.slice(a)[0]
            }, contains: function (a) {
                for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++) if (this[c].valueOf() === b) return c;
                return -1
            }, remove: function (a) {
                this.splice(a, 1)
            }, replace: function (b) {
                b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
            }, clear: function () {
                this.length = 0
            }, copy: function () {
                var a = new j;
                return a.replace(this), a
            }
        };
        return function () {
            var c = [];
            return c.push.apply(c, arguments), a.extend(c, b), c
        }
    }(), k = function (b, c) {
        a(b).data("datepicker", this), this._process_options(c), this.dates = new j, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = a(r.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function (a, b) {
            return parseInt(b) + 1
        }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
    };
    k.prototype = {
        constructor: k, _process_options: function (b) {
            this._o = a.extend({}, this._o, b);
            var e = this.o = a.extend({}, this._o), f = e.language;
            switch (q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView) {
                case 2:
                case"decade":
                    e.startView = 2;
                    break;
                case 1:
                case"year":
                    e.startView = 1;
                    break;
                default:
                    e.startView = 0
            }
            switch (e.minViewMode) {
                case 1:
                case"months":
                    e.minViewMode = 1;
                    break;
                case 2:
                case"years":
                    e.minViewMode = 2;
                    break;
                default:
                    e.minViewMode = 0
            }
            switch (e.maxViewMode) {
                case 0:
                case"days":
                    e.maxViewMode = 0;
                    break;
                case 1:
                case"months":
                    e.maxViewMode = 1;
                    break;
                default:
                    e.maxViewMode = 2
            }
            e.startView = Math.min(e.startView, e.maxViewMode), e.startView = Math.max(e.startView, e.minViewMode), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7;
            var g = r.parseFormat(e.format);
            if (e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language) : e.endDate = 1 / 0), e.daysOfWeekDisabled = e.daysOfWeekDisabled || [], a.isArray(e.daysOfWeekDisabled) || (e.daysOfWeekDisabled = e.daysOfWeekDisabled.split(/[,\s]*/)), e.daysOfWeekDisabled = a.map(e.daysOfWeekDisabled, function (a) {
                return parseInt(a, 10)
            }), e.daysOfWeekHighlighted = e.daysOfWeekHighlighted || [], a.isArray(e.daysOfWeekHighlighted) || (e.daysOfWeekHighlighted = e.daysOfWeekHighlighted.split(/[,\s]*/)), e.daysOfWeekHighlighted = a.map(e.daysOfWeekHighlighted, function (a) {
                return parseInt(a, 10)
            }), e.datesDisabled = e.datesDisabled || [], !a.isArray(e.datesDisabled)) {
                var h = [];
                h.push(r.parseDate(e.datesDisabled, g, e.language)), e.datesDisabled = h
            }
            e.datesDisabled = a.map(e.datesDisabled, function (a) {
                return r.parseDate(a, g, e.language)
            });
            var i = String(e.orientation).toLowerCase().split(/\s+/g), j = e.orientation.toLowerCase();
            if (i = a.grep(i, function (a) {
                return /^auto|left|right|top|bottom$/.test(a)
            }), e.orientation = {x: "auto", y: "auto"}, j && "auto" !== j) if (1 === i.length) switch (i[0]) {
                case"top":
                case"bottom":
                    e.orientation.y = i[0];
                    break;
                case"left":
                case"right":
                    e.orientation.x = i[0]
            } else j = a.grep(i, function (a) {
                return /^left|right$/.test(a)
            }), e.orientation.x = j[0] || "auto", j = a.grep(i, function (a) {
                return /^top|bottom$/.test(a)
            }), e.orientation.y = j[0] || "auto";
            if (e.defaultViewDate) {
                var k = e.defaultViewDate.year || (new Date).getFullYear(), l = e.defaultViewDate.month || 0,
                    m = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(k, l, m)
            } else e.defaultViewDate = d()
        }, _events: [], _secondaryEvents: [], _applyEvents: function (a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d)
        }, _unapplyEvents: function (a) {
            for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e)
        }, _buildEvents: function () {
            var b = {
                keyup: a.proxy(function (b) {
                    a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                }, this), keydown: a.proxy(this.keydown, this), paste: a.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [[this.element, b]] : this.component && this.hasInput ? this._events = [[this.element.find("input"), b], [this.component, {click: a.proxy(this.show, this)}]] : this.element.is("div") ? this.isInline = !0 : this._events = [[this.element, {click: a.proxy(this.show, this)}]], this._events.push([this.element, "*", {
                blur: a.proxy(function (a) {
                    this._focused_from = a.target
                }, this)
            }], [this.element, {
                blur: a.proxy(function (a) {
                    this._focused_from = a.target
                }, this)
            }]), this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": a.proxy(function (a) {
                    this.update(a.date)
                }, this)
            }]), this._secondaryEvents = [[this.picker, {click: a.proxy(this.click, this)}], [a(window), {resize: a.proxy(this.place, this)}], [a(document), {
                mousedown: a.proxy(function (a) {
                    this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.picker.hasClass("datepicker-inline") || this.hide()
                }, this)
            }]]
        }, _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        }, _detachEvents: function () {
            this._unapplyEvents(this._events)
        }, _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        }, _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        }, _trigger: function (b, c) {
            var d = c || this.dates.get(-1), e = this._utc_to_local(d);
            this.element.trigger({
                type: b,
                date: e,
                dates: a.map(this.dates, this._utc_to_local),
                format: a.proxy(function (a, b) {
                    0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format;
                    var c = this.dates.get(a);
                    return r.formatDate(c, b, this.o.language)
                }, this)
            })
        }, show: function () {
            var b = this.component ? this.element.find("input") : this.element;
            if (!b.attr("readonly") || this.o.enableOnReadonly !== !1) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this
        }, hide: function () {
            return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
        }, remove: function () {
            return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        }, paste: function (b) {
            var c;
            if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray("text/plain", b.originalEvent.clipboardData.types) !== -1) c = b.originalEvent.clipboardData.getData("text/plain"); else {
                if (!window.clipboardData) return;
                c = window.clipboardData.getData("Text")
            }
            this.setDate(c), this.update(), b.preventDefault()
        }, _utc_to_local: function (a) {
            return a && new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
        }, _local_to_utc: function (a) {
            return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        }, _zero_time: function (a) {
            return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
        }, _zero_utc_time: function (a) {
            return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()))
        }, getDates: function () {
            return a.map(this.dates, this._utc_to_local)
        }, getUTCDates: function () {
            return a.map(this.dates, function (a) {
                return new Date(a)
            })
        }, getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        }, getUTCDate: function () {
            var a = this.dates.get(-1);
            return "undefined" != typeof a ? new Date(a) : null
        }, clearDates: function () {
            var a;
            this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
        }, setDates: function () {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this
        }, setUTCDates: function () {
            var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, a.map(b, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
        }, setDate: f("setDates"), setUTCDate: f("setUTCDates"), setValue: function () {
            var a = this.getFormattedDate();
            return this.isInput ? this.element.val(a) : this.component && this.element.find("input").val(a), this
        }, getFormattedDate: function (c) {
            c === b && (c = this.o.format);
            var d = this.o.language;
            return a.map(this.dates, function (a) {
                return r.formatDate(a, c, d)
            }).join(this.o.multidateSeparator)
        }, setStartDate: function (a) {
            return this._process_options({startDate: a}), this.update(), this.updateNavArrows(), this
        }, setEndDate: function (a) {
            return this._process_options({endDate: a}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekDisabled: function (a) {
            return this._process_options({daysOfWeekDisabled: a}), this.update(), this.updateNavArrows(), this
        }, setDaysOfWeekHighlighted: function (a) {
            return this._process_options({daysOfWeekHighlighted: a}), this.update(), this
        }, setDatesDisabled: function (a) {
            this._process_options({datesDisabled: a}), this.update(), this.updateNavArrows()
        }, place: function () {
            if (this.isInline) return this;
            var b = this.picker.outerWidth(), c = this.picker.outerHeight(), d = 10, e = a(this.o.container),
                f = e.width(), g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(),
                h = e.offset(), i = [];
            this.element.parents().each(function () {
                var b = a(this).css("z-index");
                "auto" !== b && 0 !== b && i.push(parseInt(b))
            });
            var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
                k = this.component ? this.component.parent().offset() : this.element.offset(),
                l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1), n = k.left - h.left,
                o = k.top - h.top;
            "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.picker.addClass("datepicker-orient-left");
            var p, q = this.o.orientation.y;
            if ("auto" === q && (p = -g + o - c, q = p < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) {
                var r = f - (n + m);
                this.picker.css({top: o, right: r, zIndex: j})
            } else this.picker.css({top: o, left: n, zIndex: j});
            return this
        }, _allow_update: !0, update: function () {
            if (!this._allow_update) return this;
            var b = this.dates.copy(), c = [], d = !1;
            return arguments.length ? (a.each(arguments, a.proxy(function (a, b) {
                b instanceof Date && (b = this._local_to_utc(b)), c.push(b)
            }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function (a) {
                return r.parseDate(a, this.o.format, this.o.language)
            }, this)), c = a.grep(c, a.proxy(function (a) {
                return !this.dateWithinRange(a) || !a
            }, this), !0), this.dates.replace(c), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, d ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && b.length && this._trigger("clearDate"), this.fill(), this.element.change(), this
        }, fillDow: function () {
            var a = this.o.weekStart, b = "<tr>";
            for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function (a, b) {
                return parseInt(b) + 1
            }), b += '<th class="cw">&#160;</th>'); a < this.o.weekStart + 7;) b += '<th class="dow">' + q[this.o.language].daysMin[a++ % 7] + "</th>";
            b += "</tr>", this.picker.find(".datepicker-days thead").append(b)
        }, fillMonths: function () {
            for (var a = "", b = 0; b < 12;) a += '<span class="month">' + q[this.o.language].monthsShort[b++] + "</span>";
            this.picker.find(".datepicker-months td").html(a)
        }, setRange: function (b) {
            b && b.length ? this.range = a.map(b, function (a) {
                return a.valueOf()
            }) : delete this.range, this.fill()
        }, getClassNames: function (b) {
            var c = [], d = this.viewDate.getUTCFullYear(), e = this.viewDate.getUTCMonth(), f = new Date;
            return b.getUTCFullYear() < d || b.getUTCFullYear() === d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() === d && b.getUTCMonth() > e) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && b.getUTCFullYear() === f.getFullYear() && b.getUTCMonth() === f.getMonth() && b.getUTCDate() === f.getDate() && c.push("today"), this.dates.contains(b) !== -1 && c.push("active"), this.dateWithinRange(b) && !this.dateIsDisabled(b) || c.push("disabled"), a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), a.inArray(b.valueOf(), this.range) !== -1 && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c
        }, fill: function () {
            var d, e = new Date(this.viewDate), f = e.getUTCFullYear(), g = e.getUTCMonth(),
                h = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                j = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                l = q[this.o.language].today || q.en.today || "", m = q[this.o.language].clear || q.en.clear || "",
                n = q[this.o.language].titleFormat || q.en.titleFormat;
            if (!isNaN(f) && !isNaN(g)) {
                this.picker.find(".datepicker-days thead .datepicker-switch").text(r.formatDate(new c(f, g), n, this.o.language)), this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
                var o = c(f, g - 1, 28), p = r.getDaysInMonth(o.getUTCFullYear(), o.getUTCMonth());
                o.setUTCDate(p), o.setUTCDate(p - (o.getUTCDay() - this.o.weekStart + 7) % 7);
                var s = new Date(o);
                o.getUTCFullYear() < 100 && s.setUTCFullYear(o.getUTCFullYear()), s.setUTCDate(s.getUTCDate() + 42), s = s.valueOf();
                for (var t, u = []; o.valueOf() < s;) {
                    if (o.getUTCDay() === this.o.weekStart && (u.push("<tr>"), this.o.calendarWeeks)) {
                        var v = new Date(+o + (this.o.weekStart - o.getUTCDay() - 7) % 7 * 864e5),
                            w = new Date(Number(v) + (11 - v.getUTCDay()) % 7 * 864e5),
                            x = new Date(Number(x = c(w.getUTCFullYear(), 0, 1)) + (11 - x.getUTCDay()) % 7 * 864e5),
                            y = (w - x) / 864e5 / 7 + 1;
                        u.push('<td class="cw">' + y + "</td>")
                    }
                    if (t = this.getClassNames(o), t.push("day"), this.o.beforeShowDay !== a.noop) {
                        var z = this.o.beforeShowDay(this._utc_to_local(o));
                        z === b ? z = {} : "boolean" == typeof z ? z = {enabled: z} : "string" == typeof z && (z = {classes: z}), z.enabled === !1 && t.push("disabled"), z.classes && (t = t.concat(z.classes.split(/\s+/))), z.tooltip && (d = z.tooltip)
                    }
                    t = a.unique(t), u.push('<td class="' + t.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + o.getUTCDate() + "</td>"), d = null, o.getUTCDay() === this.o.weekEnd && u.push("</tr>"), o.setUTCDate(o.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").empty().append(u.join(""));
                var A = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
                    B = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? A : f).end().find("span").removeClass("active");
                if (a.each(this.dates, function (a, b) {
                    b.getUTCFullYear() === f && B.eq(b.getUTCMonth()).addClass("active")
                }), (f < h || f > j) && B.addClass("disabled"), f === h && B.slice(0, i).addClass("disabled"), f === j && B.slice(k + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) {
                    var C = this;
                    a.each(B, function (b, c) {
                        if (!a(c).hasClass("disabled")) {
                            var d = new Date(f, b, 1), e = C.o.beforeShowMonth(d);
                            e === !1 && a(c).addClass("disabled")
                        }
                    })
                }
                u = "", f = 10 * parseInt(f / 10, 10);
                var D = this.picker.find(".datepicker-years").find(".datepicker-switch").text(f + "-" + (f + 9)).end().find("td");
                f -= 1;
                for (var E, F = a.map(this.dates, function (a) {
                    return a.getUTCFullYear()
                }), G = -1; G < 11; G++) {
                    if (E = ["year"], d = null, G === -1 ? E.push("old") : 10 === G && E.push("new"), a.inArray(f, F) !== -1 && E.push("active"), (f < h || f > j) && E.push("disabled"), this.o.beforeShowYear !== a.noop) {
                        var H = this.o.beforeShowYear(new Date(f, 0, 1));
                        H === b ? H = {} : "boolean" == typeof H ? H = {enabled: H} : "string" == typeof H && (H = {classes: H}), H.enabled === !1 && E.push("disabled"), H.classes && (E = E.concat(H.classes.split(/\s+/))), H.tooltip && (d = H.tooltip)
                    }
                    u += '<span class="' + E.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + f + "</span>", f += 1
                }
                D.html(u)
            }
        }, updateNavArrows: function () {
            if (this._allow_update) {
                var a = new Date(this.viewDate), b = a.getUTCFullYear(), c = a.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"});
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({visibility: "hidden"}) : this.picker.find(".prev").css({visibility: "visible"}), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({visibility: "hidden"}) : this.picker.find(".next").css({visibility: "visible"})
                }
            }
        }, click: function (b) {
            b.preventDefault(), b.stopPropagation();
            var e, f, g, h = a(b.target).closest("span, td, th");
            if (1 === h.length) switch (h[0].nodeName.toLowerCase()) {
                case"th":
                    switch (h[0].className) {
                        case"datepicker-switch":
                            this.showMode(1);
                            break;
                        case"prev":
                        case"next":
                            var i = r.modes[this.viewMode].navStep * ("prev" === h[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, i), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, i), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case"today":
                            this.showMode(-2);
                            var j = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(d(), j);
                            break;
                        case"clear":
                            this.clearDates()
                    }
                    break;
                case"span":
                    h.hasClass("disabled") || (this.viewDate.setUTCDate(1), h.hasClass("month") ? (g = 1, f = h.parent().find("span").index(h), e = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(f), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(c(e, f, g)), this.showMode()) : this.showMode(-1)) : (g = 1, f = 0, e = parseInt(h.text(), 10) || 0, this.viewDate.setUTCFullYear(e), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(c(e, f, g)), this.showMode(-1)), this.fill());
                    break;
                case"td":
                    h.hasClass("day") && !h.hasClass("disabled") && (g = parseInt(h.text(), 10) || 1, e = this.viewDate.getUTCFullYear(), f = this.viewDate.getUTCMonth(), h.hasClass("old") ? 0 === f ? (f = 11, e -= 1) : f -= 1 : h.hasClass("new") && (11 === f ? (f = 0, e += 1) : f += 1), this._setDate(c(e, f, g)))
            }
            this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus(), delete this._focused_from
        }, _toggle_multidate: function (a) {
            var b = this.dates.contains(a);
            if (a || this.dates.clear(), b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        }, _setDate: function (a, b) {
            b && "date" !== b || this._toggle_multidate(a && new Date(a)), b && "view" !== b || (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate");
            var c;
            this.isInput ? c = this.element : this.component && (c = this.element.find("input")), c && c.change(), !this.o.autoclose || b && "date" !== b || this.hide()
        }, moveDay: function (a, b) {
            var c = new Date(a);
            return c.setUTCDate(a.getUTCDate() + b), c
        }, moveWeek: function (a, b) {
            return this.moveDay(a, 7 * b)
        }, moveMonth: function (a, b) {
            if (!g(a)) return this.o.defaultViewDate;
            if (!b) return a;
            var c, d, e = new Date(a.valueOf()), f = e.getUTCDate(), h = e.getUTCMonth(), i = Math.abs(b);
            if (b = b > 0 ? 1 : -1, 1 === i) d = b === -1 ? function () {
                return e.getUTCMonth() === h
            } : function () {
                return e.getUTCMonth() !== c
            }, c = h + b, e.setUTCMonth(c), (c < 0 || c > 11) && (c = (c + 12) % 12); else {
                for (var j = 0; j < i; j++) e = this.moveMonth(e, b);
                c = e.getUTCMonth(), e.setUTCDate(f), d = function () {
                    return c !== e.getUTCMonth()
                }
            }
            for (; d();) e.setUTCDate(--f), e.setUTCMonth(c);
            return e
        }, moveYear: function (a, b) {
            return this.moveMonth(a, 12 * b)
        }, moveAvailableDate: function (a, b, c) {
            do {
                if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
                c = "moveDay"
            } while (this.dateIsDisabled(a));
            return a
        }, weekOfDateIsDisabled: function (b) {
            return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
        }, dateIsDisabled: function (b) {
            return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function (a) {
                return e(b, a)
            }).length > 0
        }, dateWithinRange: function (a) {
            return a >= this.o.startDate && a <= this.o.endDate
        }, keydown: function (a) {
            if (!this.picker.is(":visible")) return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(), a.stopPropagation()));
            var b, c, d = !1, e = this.focusDate || this.viewDate;
            switch (a.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse) break;
                    e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (d) {
                this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                var f;
                this.isInput ? f = this.element : this.component && (f = this.element.find("input")), f && f.change()
            }
        }, showMode: function (a) {
            a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + a))), this.picker.children("div").hide().filter(".datepicker-" + r.modes[this.viewMode].clsName).show(), this.updateNavArrows()
        }
    };
    var l = function (b, c) {
        a(b).data("datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function (a) {
            return a.jquery ? a[0] : a
        }), delete c.inputs, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function (b) {
            return a(b).data("datepicker")
        }), this.updateDates()
    };
    l.prototype = {
        updateDates: function () {
            this.dates = a.map(this.pickers, function (a) {
                return a.getUTCDate()
            }), this.updateRanges()
        }, updateRanges: function () {
            var b = a.map(this.dates, function (a) {
                return a.valueOf()
            });
            a.each(this.pickers, function (a, c) {
                c.setRange(b)
            })
        }, dateUpdated: function (b) {
            if (!this.updating) {
                this.updating = !0;
                var c = a(b.target).data("datepicker");
                if ("undefined" != typeof c) {
                    var d = c.getUTCDate(), e = a.inArray(b.target, this.inputs), f = e - 1, g = e + 1,
                        h = this.inputs.length;
                    if (e !== -1) {
                        if (a.each(this.pickers, function (a, b) {
                            b.getUTCDate() || b.setUTCDate(d)
                        }), d < this.dates[f]) for (; f >= 0 && d < this.dates[f];) this.pickers[f--].setUTCDate(d); else if (d > this.dates[g]) for (; g < h && d > this.dates[g];) this.pickers[g++].setUTCDate(d);
                        this.updateDates(), delete this.updating
                    }
                }
            }
        }, remove: function () {
            a.map(this.pickers, function (a) {
                a.remove()
            }), delete this.element.data().datepicker
        }
    };
    var m = a.fn.datepicker, n = function (c) {
        var d = Array.apply(null, arguments);
        d.shift();
        var e;
        if (this.each(function () {
            var b = a(this), f = b.data("datepicker"), g = "object" == typeof c && c;
            if (!f) {
                var j = h(this, "date"), m = a.extend({}, o, j, g), n = i(m.language), p = a.extend({}, o, n, j, g);
                b.hasClass("input-daterange") || p.inputs ? (a.extend(p, {inputs: p.inputs || b.find("input").toArray()}), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f)
            }
            "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d))
        }), e === b || e instanceof k || e instanceof l) return this;
        if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)");
        return e
    };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = {
        autoclose: !1,
        beforeShowDay: a.noop,
        beforeShowMonth: a.noop,
        beforeShowYear: a.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 2,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -(1 / 0),
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: ""
    }, p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    }, r = {
        modes: [{clsName: "days", navFnc: "Month", navStep: 1}, {
            clsName: "months",
            navFnc: "FullYear",
            navStep: 1
        }, {clsName: "years", navFnc: "FullYear", navStep: 10}],
        isLeapYear: function (a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        getDaysInMonth: function (a, b) {
            return [31, r.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function (a) {
            if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a;
            var b = a.replace(this.validParts, "\0").split("\0"), c = a.match(this.validParts);
            if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format.");
            return {separators: b, parts: c}
        },
        parseDate: function (e, f, g) {
            function h() {
                var a = this.slice(0, o[l].length), b = o[l].slice(0, a.length);
                return a.toLowerCase() === b.toLowerCase()
            }

            if (!e) return b;
            if (e instanceof Date) return e;
            if ("string" == typeof f && (f = r.parseFormat(f)), f.toValue) return f.toValue(e, f, g);
            var i, j, l, m, n = /([\-+]\d+)([dmwy])/, o = e.match(/([\-+]\d+)([dmwy])/g),
                p = {d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear"};
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) {
                for (e = new Date, l = 0; l < o.length; l++) i = n.exec(o[l]), j = parseInt(i[1]), m = p[i[2]], e = k.prototype[m](e, j);
                return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
            }
            o = e && e.match(this.nonpunctuation) || [], e = new Date;
            var s, t, u = {}, v = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"], w = {
                yyyy: function (a, b) {
                    return a.setUTCFullYear(b)
                }, yy: function (a, b) {
                    return a.setUTCFullYear(2e3 + b)
                }, m: function (a, b) {
                    if (isNaN(a)) return a;
                    for (b -= 1; b < 0;) b += 12;
                    for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1);
                    return a
                }, d: function (a, b) {
                    return a.setUTCDate(b)
                }
            };
            w.M = w.MM = w.mm = w.m, w.dd = w.d, e = d();
            var x = f.parts.slice();
            if (o.length !== x.length && (x = a(x).filter(function (b, c) {
                return a.inArray(c, v) !== -1
            }).toArray()), o.length === x.length) {
                var y;
                for (l = 0, y = x.length; l < y; l++) {
                    if (s = parseInt(o[l], 10), i = x[l], isNaN(s)) switch (i) {
                        case"MM":
                            t = a(q[g].months).filter(h), s = a.inArray(t[0], q[g].months) + 1;
                            break;
                        case"M":
                            t = a(q[g].monthsShort).filter(h), s = a.inArray(t[0], q[g].monthsShort) + 1
                    }
                    u[i] = s
                }
                var z, A;
                for (l = 0; l < v.length; l++) A = v[l], A in u && !isNaN(u[A]) && (z = new Date(e), w[A](z, u[A]), isNaN(z) || (e = z))
            }
            return e
        },
        formatDate: function (b, c, d) {
            if (!b) return "";
            if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d);
            var e = {
                d: b.getUTCDate(),
                D: q[d].daysShort[b.getUTCDay()],
                DD: q[d].days[b.getUTCDay()],
                m: b.getUTCMonth() + 1,
                M: q[d].monthsShort[b.getUTCMonth()],
                MM: q[d].months[b.getUTCMonth()],
                yy: b.getUTCFullYear().toString().substring(2),
                yyyy: b.getUTCFullYear()
            };
            e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
            for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
            return b.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function () {
        return a.fn.datepicker = m, this
    }, a.fn.datepicker.version = "1.5.1", a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (b) {
        var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show"))
    }), a(function () {
        n.call(a('[data-provide="datepicker-inline"]'))
    })
}), !function (a) {
    a.fn.datepicker.dates.ru = {
        days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        today: "Сегодня",
        clear: "Очистить",
        format: "dd.mm.yyyy",
        weekStart: 1
    }
}(jQuery), !function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function (a) {
    !function (a) {
        "use strict";

        function b(b) {
            var c = [{re: /[\xC0-\xC6]/g, ch: "A"}, {re: /[\xE0-\xE6]/g, ch: "a"}, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {re: /[\xE8-\xEB]/g, ch: "e"}, {re: /[\xCC-\xCF]/g, ch: "I"}, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {re: /[\xD2-\xD6]/g, ch: "O"}, {re: /[\xF2-\xF6]/g, ch: "o"}, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {re: /[\xF9-\xFC]/g, ch: "u"}, {re: /[\xC7-\xE7]/g, ch: "c"}, {re: /[\xD1]/g, ch: "N"}, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return a.each(c, function () {
                b = b.replace(this.re, this.ch)
            }), b
        }

        function c(a) {
            var b = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"},
                c = "(?:" + Object.keys(b).join("|") + ")", d = new RegExp(c), e = new RegExp(c, "g"),
                f = null == a ? "" : "" + a;
            return d.test(f) ? f.replace(e, function (a) {
                return b[a]
            }) : f
        }

        function d(b, c) {
            var d = arguments, f = b, g = c;
            [].shift.apply(d);
            var h, i = this.each(function () {
                var b = a(this);
                if (b.is("select")) {
                    var c = b.data("selectpicker"), i = "object" == typeof f && f;
                    if (c) {
                        if (i) for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j])
                    } else {
                        var k = a.extend({}, e.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                        k.template = a.extend({}, e.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), b.data("selectpicker", c = new e(this, k, g))
                    }
                    "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f])
                }
            });
            return "undefined" != typeof h ? h : i
        }

        String.prototype.includes || !function () {
            var a = {}.toString, b = function () {
                try {
                    var a = {}, b = Object.defineProperty, c = b(a, a, a) && b
                } catch (a) {
                }
                return c
            }(), c = "".indexOf, d = function (b) {
                if (null == this) throw new TypeError;
                var d = String(this);
                if (b && "[object RegExp]" == a.call(b)) throw new TypeError;
                var e = d.length, f = String(b), g = f.length, h = arguments.length > 1 ? arguments[1] : void 0,
                    i = h ? Number(h) : 0;
                i != i && (i = 0);
                var j = Math.min(Math.max(i, 0), e);
                return !(g + j > e) && -1 != c.call(d, f, i)
            };
            b ? b(String.prototype, "includes", {
                value: d,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = d
        }(), String.prototype.startsWith || !function () {
            var a = function () {
                try {
                    var a = {}, b = Object.defineProperty, c = b(a, a, a) && b
                } catch (a) {
                }
                return c
            }(), b = {}.toString, c = function (a) {
                if (null == this) throw new TypeError;
                var c = String(this);
                if (a && "[object RegExp]" == b.call(a)) throw new TypeError;
                var d = c.length, e = String(a), f = e.length, g = arguments.length > 1 ? arguments[1] : void 0,
                    h = g ? Number(g) : 0;
                h != h && (h = 0);
                var i = Math.min(Math.max(h, 0), d);
                if (f + i > d) return !1;
                for (var j = -1; ++j < f;) if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                return !0
            };
            a ? a(String.prototype, "startsWith", {
                value: c,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = c
        }(), Object.keys || (Object.keys = function (a, b, c) {
            c = [];
            for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
            return c
        }), a.fn.triggerNative = function (a) {
            var b, c = this[0];
            c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, {bubbles: !0}) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : (c.fireEvent && (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)), this.trigger(a))
        }, a.expr[":"].icontains = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.text()).toUpperCase();
            return f.includes(d[3].toUpperCase())
        }, a.expr[":"].ibegins = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.text()).toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        }, a.expr[":"].aicontains = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
            return f.includes(d[3].toUpperCase())
        }, a.expr[":"].aibegins = function (b, c, d) {
            var e = a(b), f = (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        };
        var e = function (b, c, d) {
            d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.destroy = e.prototype.destroy, this.remove = e.prototype.remove, this.show = e.prototype.show, this.hide = e.prototype.hide, this.init()
        };
        e.VERSION = "1.10.0", e.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function (a, b) {
                return 1 == a ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function (a, b) {
                return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {caret: '<span class="caret"></span>'},
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        }, e.prototype = {
            constructor: e, init: function () {
                var b = this, c = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function (a) {
                    a.preventDefault(), b.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function (a) {
                        b.$element.trigger("hide.bs.select", a)
                    }, "hidden.bs.dropdown": function (a) {
                        b.$element.trigger("hidden.bs.select", a)
                    }, "show.bs.dropdown": function (a) {
                        b.$element.trigger("show.bs.select", a)
                    }, "shown.bs.dropdown": function (a) {
                        b.$element.trigger("shown.bs.select", a)
                    }
                }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
                    b.$button.addClass("bs-invalid").focus(), b.$element.on({
                        "focus.bs.select": function () {
                            b.$button.focus(), b.$element.off("focus.bs.select")
                        }, "shown.bs.select": function () {
                            b.$element.val(b.$element.val()).off("shown.bs.select")
                        }, "rendered.bs.select": function () {
                            this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select")
                        }
                    })
                }), setTimeout(function () {
                    b.$element.trigger("loaded.bs.select")
                })
            }, createDropdown: function () {
                var b = this.multiple || this.options.showTick ? " show-tick" : "",
                    d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    e = this.autofocus ? " autofocus" : "",
                    f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                    h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner" role="menu"></ul>' + i + "</div></div>";
                return a(j)
            }, createView: function () {
                var a = this.createDropdown(), b = this.createLi();
                return a.find("ul")[0].innerHTML = b, a
            }, reloadLi: function () {
                this.destroyLi();
                var a = this.createLi();
                this.$menuInner[0].innerHTML = a
            }, destroyLi: function () {
                this.$menu.find("li").remove()
            }, createLi: function () {
                var d = this, e = [], f = 0, g = document.createElement("option"), h = -1, i = function (a, b, c, d) {
                    return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>"
                }, j = function (a, e, f, g) {
                    return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ">" + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>'
                };
                if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
                    var k = this.$element[0];
                    g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild), void 0 === a(k.options[k.selectedIndex]).attr("selected") && (g.selected = !0)
                }
                return this.$element.find("option").each(function (b) {
                    var c = a(this);
                    if (h++, !c.hasClass("bs-title-option")) {
                        var g = this.className || "", k = this.style.cssText,
                            l = c.data("content") ? c.data("content") : c.html(),
                            m = c.data("tokens") ? c.data("tokens") : null,
                            n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
                            o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                            p = "OPTGROUP" === this.parentNode.tagName,
                            q = this.disabled || p && this.parentNode.disabled;
                        if ("" !== o && q && (o = "<span>" + o + "</span>"), d.options.hideDisabled && q && !p) return void h--;
                        if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), p && c.data("divider") !== !0) {
                            var r = " " + this.parentNode.className || "";
                            if (0 === c.index()) {
                                f += 1;
                                var s = this.parentNode.label,
                                    t = "undefined" != typeof c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "",
                                    u = c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "";
                                s = u + '<span class="text">' + s + t + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(s, null, "dropdown-header" + r, f))
                            }
                            if (d.options.hideDisabled && q) return void h--;
                            e.push(i(j(l, "opt " + g + r, k, m), b, "", f))
                        } else c.data("divider") === !0 ? e.push(i("", b, "divider")) : c.data("hidden") === !0 ? e.push(i(j(l, g, k, m), b, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
                        d.liObj[b] = h
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("")
            }, findLis: function () {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
            }, render: function (b) {
                var c, d = this;
                b !== !1 && this.$element.find("option").each(function (a) {
                    var b = d.findLis().eq(d.liObj[a]);
                    d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b)
                }), this.tabIndex();
                var e = this.$element.find("option").map(function () {
                    if (this.selected) {
                        if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                        var b, c = a(this),
                            e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                        return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b
                    }
                }).toArray(), f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var g = this.options.selectedTextFormat.split(">");
                    if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
                        c = this.options.hideDisabled ? ", [disabled]" : "";
                        var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length,
                            i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                        f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select")
            }, setStyle: function (a, b) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var c = a ? a : this.options.style;
                "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
            }, liHeight: function (b) {
                if (b || this.options.size !== !1 && !this.sizeInfo) {
                    var c = document.createElement("div"), d = document.createElement("div"),
                        e = document.createElement("ul"), f = document.createElement("li"),
                        g = document.createElement("li"), h = document.createElement("a"),
                        i = document.createElement("span"),
                        j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        k = this.options.liveSearch ? document.createElement("div") : null,
                        l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                        var n = document.createElement("span");
                        k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
                    }
                    l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
                    var o = h.offsetHeight, p = j ? j.offsetHeight : 0, q = k ? k.offsetHeight : 0,
                        r = l ? l.offsetHeight : 0, s = m ? m.offsetHeight : 0, t = a(f).outerHeight(!0),
                        u = "function" == typeof getComputedStyle && getComputedStyle(d), v = u ? null : a(d),
                        w = parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                        x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
                    document.body.removeChild(c), this.sizeInfo = {
                        liHeight: o,
                        headerHeight: p,
                        searchHeight: q,
                        actionsHeight: r,
                        doneButtonHeight: s,
                        dividerHeight: t,
                        menuPadding: w,
                        menuExtras: x
                    }
                }
            }, setSize: function () {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                    var b, c, d, e, f = this, g = this.$menu, h = this.$menuInner, i = a(window),
                        j = this.$newElement[0].offsetHeight, k = this.sizeInfo.liHeight,
                        l = this.sizeInfo.headerHeight, m = this.sizeInfo.searchHeight, n = this.sizeInfo.actionsHeight,
                        o = this.sizeInfo.doneButtonHeight, p = this.sizeInfo.dividerHeight,
                        q = this.sizeInfo.menuPadding, r = this.sizeInfo.menuExtras,
                        s = this.options.hideDisabled ? ".disabled" : "", t = function () {
                            d = f.$newElement.offset().top - i.scrollTop(), e = i.height() - d - j
                        };
                    if (t(), "auto" === this.options.size) {
                        var u = function () {
                            var i, j = function (b, c) {
                                    return function (d) {
                                        return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                                    }
                                }, p = f.$menuInner[0].getElementsByTagName("li"),
                                s = Array.prototype.filter ? Array.prototype.filter.call(p, j("hidden", !1)) : f.$lis.not(".hidden"),
                                u = Array.prototype.filter ? Array.prototype.filter.call(s, j("dropdown-header", !0)) : s.filter(".dropdown-header");
                            t(), b = e - r, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && f.$newElement.toggleClass("dropup", d > e && c > b - r), f.$newElement.hasClass("dropup") && (b = d - r), i = s.length + u.length > 3 ? 3 * k + r - 2 : 0, g.css({
                                "max-height": b + "px",
                                overflow: "hidden",
                                "min-height": i + l + m + n + o + "px"
                            }), h.css({
                                "max-height": b - l - m - n - o - q + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(i - q, 0) + "px"
                            })
                        };
                        u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(s).length > this.options.size) {
                        var v = this.$lis.not(".divider").not(s).children().slice(0, this.options.size).last().parent().index(),
                            w = this.$lis.slice(0, v + 1).filter(".divider").length;
                        b = k * this.options.size + w * p + q, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && this.$newElement.toggleClass("dropup", d > e && c > b - r), g.css({
                            "max-height": b + l + m + n + o + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), h.css({"max-height": b - q + "px", "overflow-y": "auto", "min-height": ""})
                    }
                }
            }, setWidth: function () {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var a = this.$menu.parent().clone().appendTo("body"),
                        b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                        c = a.children(".dropdown-menu").outerWidth(),
                        d = b.css("width", "auto").children("button").outerWidth();
                    a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            }, selectPosition: function () {
                this.$bsContainer = a('<div class="bs-container" />');
                var b, c, d = this, e = function (a) {
                    d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, d.$bsContainer.css({
                        top: b.top + c,
                        left: b.left,
                        width: a[0].offsetWidth
                    })
                };
                this.$button.on("click", function () {
                    var b = a(this);
                    d.isDisabled() || (e(d.$newElement), d.$bsContainer.appendTo(d.options.container).toggleClass("open", !b.hasClass("open")).append(d.$menu))
                }), a(window).on("resize scroll", function () {
                    e(d.$newElement)
                }), this.$element.on("hide.bs.select", function () {
                    d.$menu.data("height", d.$menu.height()), d.$bsContainer.detach()
                })
            }, setSelected: function (a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b)
            }, setDisabled: function (a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
            }, isDisabled: function () {
                return this.$element[0].disabled
            }, checkDisabled: function () {
                var a = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
                    return !a.isDisabled()
                })
            }, tabIndex: function () {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            }, clickListener: function () {
                var b = this, c = a(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (a) {
                    a.stopPropagation()
                }), c.data("spaceSelect", !1), this.$button.on("keyup", function (a) {
                    /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1))
                }), this.$button.on("click", function () {
                    b.setSize()
                }), this.$element.on("shown.bs.select", function () {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];
                            if ("number" != typeof a || b.options.size === !1) return;
                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
                        }
                    } else b.$menuInner.find(".selected a").focus()
                }), this.$menuInner.on("click", "li a", function (c) {
                    var d = a(this), e = d.parent().data("originalIndex"), f = b.$element.val(),
                        g = b.$element.prop("selectedIndex");
                    if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                        var h = b.$element.find("option"), i = h.eq(e), j = i.prop("selected"),
                            k = i.parent("optgroup"), l = b.options.maxOptions, m = k.data("maxOptions") || !1;
                        if (b.multiple) {
                            if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), l !== !1 || m !== !1) {
                                var n = l < h.filter(":selected").length, o = m < k.find("option:selected").length;
                                if (l && n || m && o) if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0); else if (m && 1 == m) {
                                    k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                                    var p = d.parent().data("optgroup");
                                    b.$menuInner.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0)
                                } else {
                                    var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                                        r = q[0].replace("{n}", l), s = q[1].replace("{n}", m),
                                        t = a('<div class="notify"></div>');
                                    q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
                                        b.setSelected(e, !1)
                                    }, 10), t.delay(750).fadeOut(300, function () {
                                        a(this).remove()
                                    })
                                }
                            }
                        } else h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                        b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.trigger("changed.bs.select", [e, i.prop("selected"), j]).triggerNative("change")
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (c) {
                    c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function (a) {
                    a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function () {
                    b.$button.click()
                }), this.$searchbox.on("click", function (a) {
                    a.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function (c) {
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
                }), this.$element.change(function () {
                    b.render(!1)
                })
            }, liveSearchListener: function () {
                var d = this, e = a('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
                    d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
                        d.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (a) {
                    a.stopPropagation()
                }), this.$searchbox.on("input propertychange", function () {
                    if (d.$searchbox.val()) {
                        var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function () {
                            var b = a(this), c = b.data("optgroup");
                            0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"))
                        });
                        var g = d.$lis.not(".hidden");
                        g.each(function (b) {
                            var c = a(this);
                            c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden")
                        }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e))
                    } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                    d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus()
                })
            }, _searchStyle: function () {
                var a = {begins: "ibegins", startsWith: "ibegins"};
                return a[this.options.liveSearchStyle] || "icontains"
            }, val: function (a) {
                return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
            }, changeAll: function (b) {
                "undefined" == typeof b && (b = !0), this.findLis();
                for (var c = this.$element.find("option"), d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", b), e = d.length, f = [], g = 0; e > g; g++) {
                    var h = d[g].getAttribute("data-original-index");
                    f[f.length] = c.eq(h)[0]
                }
                a(f).prop("selected", b), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
            }, selectAll: function () {
                return this.changeAll(!0)
            }, deselectAll: function () {
                return this.changeAll(!1)
            }, toggle: function (a) {
                a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click")
            }, keydown: function (c) {
                var d, e, f, g, h, i, j, k, l, m = a(this), n = m.is("input") ? m.parent().parent() : m.parent(),
                    o = n.data("this"), p = ":not(.disabled, .hidden, .dropdown-header, .divider)", q = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a("[role=menu] li", n), l = o.$newElement.hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90) && (o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (c.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()), d = a("[role=menu] li" + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), d.length) {
                    if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function (b) {
                        a(this).hasClass("disabled") || a(this).data("index", b)
                    }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, e != j && e > i && (e = i), g > e && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, -1 == e && (e = 0), e != j && f > e && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).children("a").focus(); else if (!m.is("input")) {
                        var r, s, t = [];
                        d.each(function () {
                            a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index())
                        }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
                        if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), m.focus()); else {
                            var u = a(":focus");
                            u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0)
                        }
                        a(document).data("keycount", 0)
                    }
                    (/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus())
                }
            }, mobile: function () {
                this.$element.addClass("mobile-device")
            }, refresh: function () {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            }, hide: function () {
                this.$newElement.hide()
            }, show: function () {
                this.$newElement.show()
            }, remove: function () {
                this.$newElement.remove(), this.$element.remove()
            }, destroy: function () {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var f = a.fn.selectpicker;
        a.fn.selectpicker = d, a.fn.selectpicker.Constructor = e, a.fn.selectpicker.noConflict = function () {
            return a.fn.selectpicker = f, this
        }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', e.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (a) {
            a.stopPropagation()
        }), a(window).on("load.bs.select.data-api", function () {
            a(".selectpicker").each(function () {
                var b = a(this);
                d.call(b, b.data())
            })
        })
    }(a)
}), !function (a) {
    if ("function" == typeof define && define.amd) define(["jquery"], a); else if ("object" == typeof module && module.exports) {
        var b;
        try {
            b = require("jquery")
        } catch (a) {
            b = null
        }
        module.exports = a(b)
    } else window && (window.Slider = a(window.jQuery))
}(function (a) {
    var b;
    return function (a) {
        "use strict";

        function b() {
        }

        function c(a) {
            function c(b) {
                b.prototype.option || (b.prototype.option = function (b) {
                    a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
                })
            }

            function e(b, c) {
                a.fn[b] = function (e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; h < i; h++) {
                            var j = this[h], k = a.data(j, b);
                            if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l && l !== k) return l
                            } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                        }
                        return this
                    }
                    var m = this.map(function () {
                        var d = a.data(this, b);
                        return d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)), a(this)
                    });
                    return !m || m.length > 1 ? m : m[0]
                }
            }

            if (a) {
                var f = "undefined" == typeof console ? b : function (a) {
                    console.error(a)
                };
                return a.bridget = function (a, b) {
                    c(b), e(a, b)
                }, a.bridget
            }
        }

        var d = Array.prototype.slice;
        c(a)
    }(a), function (a) {
        function c(b, c) {
            function d(a, b) {
                var c = "data-slider-" + b.replace(/_/g, "-"), d = a.getAttribute(c);
                try {
                    return JSON.parse(d)
                } catch (a) {
                    return d
                }
            }

            this._state = {
                value: null,
                enabled: null,
                offset: null,
                size: null,
                percentage: null,
                inDrag: !1,
                over: !1
            }, "string" == typeof b ? this.element = document.querySelector(b) : b instanceof HTMLElement && (this.element = b), c = c ? c : {};
            for (var f = Object.keys(this.defaultOptions), g = 0; g < f.length; g++) {
                var h = f[g], i = c[h];
                i = "undefined" != typeof i ? i : d(this.element, h), i = null !== i ? i : this.defaultOptions[h], this.options || (this.options = {}), this.options[h] = i
            }
            "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.tooltip_position = "right";
            var j, k, l, m, n, o = this.element.style.width, p = !1, q = this.element.parentNode;
            if (this.sliderElem) p = !0; else {
                this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
                var r = document.createElement("div");
                r.className = "slider-track", k = document.createElement("div"), k.className = "slider-track-low", j = document.createElement("div"), j.className = "slider-selection", l = document.createElement("div"), l.className = "slider-track-high", m = document.createElement("div"), m.className = "slider-handle min-slider-handle", m.setAttribute("role", "slider"), m.setAttribute("aria-valuemin", this.options.min), m.setAttribute("aria-valuemax", this.options.max), n = document.createElement("div"), n.className = "slider-handle max-slider-handle", n.setAttribute("role", "slider"), n.setAttribute("aria-valuemin", this.options.min), n.setAttribute("aria-valuemax", this.options.max), r.appendChild(k), r.appendChild(j), r.appendChild(l);
                var s = Array.isArray(this.options.labelledby);
                if (s && this.options.labelledby[0] && m.setAttribute("aria-labelledby", this.options.labelledby[0]), s && this.options.labelledby[1] && n.setAttribute("aria-labelledby", this.options.labelledby[1]), !s && this.options.labelledby && (m.setAttribute("aria-labelledby", this.options.labelledby), n.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                    for (g = 0; g < this.options.ticks.length; g++) {
                        var t = document.createElement("div");
                        t.className = "slider-tick", this.ticks.push(t), r.appendChild(t)
                    }
                    j.className += " tick-slider-selection"
                }
                if (r.appendChild(m), r.appendChild(n), this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", g = 0; g < this.options.ticks_labels.length; g++) {
                    var u = document.createElement("div"), v = 0 === this.options.ticks_positions.length,
                        w = this.options.reversed && v ? this.options.ticks_labels.length - (g + 1) : g;
                    u.className = "slider-tick-label", u.innerHTML = this.options.ticks_labels[w], this.tickLabels.push(u), this.tickLabelContainer.appendChild(u)
                }
                var x = function (a) {
                    var b = document.createElement("div");
                    b.className = "tooltip-arrow";
                    var c = document.createElement("div");
                    c.className = "tooltip-inner", a.appendChild(b), a.appendChild(c)
                }, y = document.createElement("div");
                y.className = "tooltip tooltip-main", y.setAttribute("role", "presentation"), x(y);
                var z = document.createElement("div");
                z.className = "tooltip tooltip-min", z.setAttribute("role", "presentation"), x(z);
                var A = document.createElement("div");
                A.className = "tooltip tooltip-max", A.setAttribute("role", "presentation"), x(A), this.sliderElem.appendChild(r), this.sliderElem.appendChild(y), this.sliderElem.appendChild(z), this.sliderElem.appendChild(A), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), q.insertBefore(this.sliderElem, this.element), this.element.style.display = "none"
            }
            if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), e[this.options.scale] && (this.options.scale = e[this.options.scale]), p === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "top", "width", "height"].forEach(function (a) {
                this._removeProperty(this.trackLow, a), this._removeProperty(this.trackSelection, a), this._removeProperty(this.trackHigh, a)
            }, this), [this.handle1, this.handle2].forEach(function (a) {
                this._removeProperty(a, "left"), this._removeProperty(a, "top")
            }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (a) {
                this._removeProperty(a, "left"), this._removeProperty(a, "top"), this._removeProperty(a, "margin-left"), this._removeProperty(a, "margin-top"), this._removeClass(a, "right"), this._removeClass(a, "top")
            }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = o, this.options.orientation = "horizontal", this.stylePos = "left", this.mousePos = "pageX", this.sizePos = "offsetWidth"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (this.options.max = Math.max.apply(Math, this.options.ticks), this.options.min = Math.min.apply(Math, this.options.ticks)), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = k || this.trackLow, this.trackSelection = j || this.trackSelection, this.trackHigh = l || this.trackHigh, "none" === this.options.selection && (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")), this.handle1 = m || this.handle1, this.handle2 = n || this.handle2, p === !0) for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), g = 0; g < this.ticks.length; g++) this._removeClass(this.ticks[g], "round triangle hide");
            var B = ["round", "triangle", "custom"], C = B.indexOf(this.options.handle) !== -1;
            if (C) for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), g = 0; g < this.ticks.length; g++) this._addClass(this.ticks[g], this.options.handle);
            this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchCapable && this.sliderElem.addEventListener("touchstart", this.mousedown, !1), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip ? (this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide")) : "always" === this.options.tooltip ? (this._showTooltip(), this._alwaysShowTooltip = !0) : (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1)), this.options.enabled ? this.enable() : this.disable()
        }

        var d = {
            formatInvalidInputErrorMsg: function (a) {
                return "Invalid input value '" + a + "' passed in"
            },
            callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
        }, e = {
            linear: {
                toValue: function (a) {
                    var b = a / 100 * (this.options.max - this.options.min), c = !0;
                    if (this.options.ticks_positions.length > 0) {
                        for (var d, e, f, g = 0, h = 1; h < this.options.ticks_positions.length; h++) if (a <= this.options.ticks_positions[h]) {
                            d = this.options.ticks[h - 1], f = this.options.ticks_positions[h - 1], e = this.options.ticks[h], g = this.options.ticks_positions[h];
                            break
                        }
                        var i = (a - f) / (g - f);
                        b = d + i * (e - d), c = !1
                    }
                    var j = c ? this.options.min : 0, k = j + Math.round(b / this.options.step) * this.options.step;
                    return k < this.options.min ? this.options.min : k > this.options.max ? this.options.max : k
                }, toPercentage: function (a) {
                    if (this.options.max === this.options.min) return 0;
                    if (this.options.ticks_positions.length > 0) {
                        for (var b, c, d, e = 0, f = 0; f < this.options.ticks.length; f++) if (a <= this.options.ticks[f]) {
                            b = f > 0 ? this.options.ticks[f - 1] : 0, d = f > 0 ? this.options.ticks_positions[f - 1] : 0, c = this.options.ticks[f], e = this.options.ticks_positions[f];
                            break
                        }
                        if (f > 0) {
                            var g = (a - b) / (c - b);
                            return d + g * (e - d)
                        }
                    }
                    return 100 * (a - this.options.min) / (this.options.max - this.options.min)
                }
            }, logarithmic: {
                toValue: function (a) {
                    var b = 0 === this.options.min ? 0 : Math.log(this.options.min), c = Math.log(this.options.max),
                        d = Math.exp(b + (c - b) * a / 100);
                    return d = this.options.min + Math.round((d - this.options.min) / this.options.step) * this.options.step, d < this.options.min ? this.options.min : d > this.options.max ? this.options.max : d
                }, toPercentage: function (a) {
                    if (this.options.max === this.options.min) return 0;
                    var b = Math.log(this.options.max), c = 0 === this.options.min ? 0 : Math.log(this.options.min),
                        d = 0 === a ? 0 : Math.log(a);
                    return 100 * (d - c) / (b - c)
                }
            }
        };
        if (b = function (a, b) {
            return c.call(this, a, b), this
        }, b.prototype = {
            _init: function () {
            },
            constructor: b,
            defaultOptions: {
                id: "",
                min: 0,
                max: 10,
                step: 1,
                precision: 0,
                orientation: "horizontal",
                value: 5,
                range: !1,
                selection: "before",
                tooltip: "show",
                tooltip_split: !1,
                handle: "round",
                reversed: !1,
                enabled: !0,
                formatter: function (a) {
                    return Array.isArray(a) ? a[0] + " : " + a[1] : a
                },
                natural_arrow_keys: !1,
                ticks: [],
                ticks_positions: [],
                ticks_labels: [],
                ticks_snap_bounds: 0,
                scale: "linear",
                focus: !1,
                tooltip_position: null,
                labelledby: null
            },
            getElement: function () {
                return this.sliderElem
            },
            getValue: function () {
                return this.options.range ? this._state.value : this._state.value[0]
            },
            setValue: function (a, b, c) {
                a || (a = 0);
                var d = this.getValue();
                this._state.value = this._validateInputValue(a);
                var e = this._applyPrecision.bind(this);
                this.options.range ? (this._state.value[0] = e(this._state.value[0]), this._state.value[1] = e(this._state.value[1]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = e(this._state.value), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
                var f = this.options.range ? this._state.value : this._state.value[0];
                return this._setDataVal(f), b === !0 && this._trigger("slide", f), d !== f && c === !0 && this._trigger("change", {
                    oldValue: d,
                    newValue: f
                }), this
            },
            destroy: function () {
                this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), this.$element.removeData("slider"))
            },
            disable: function () {
                return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this
            },
            enable: function () {
                return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this
            },
            toggle: function () {
                return this._state.enabled ? this.disable() : this.enable(), this
            },
            isEnabled: function () {
                return this._state.enabled
            },
            on: function (a, b) {
                return this._bindNonQueryEventHandler(a, b), this
            },
            off: function (b, c) {
                a ? (this.$element.off(b, c), this.$sliderElem.off(b, c)) : this._unbindNonQueryEventHandler(b, c)
            },
            getAttribute: function (a) {
                return a ? this.options[a] : this.options
            },
            setAttribute: function (a, b) {
                return this.options[a] = b, this
            },
            refresh: function () {
                return this._removeSliderEventHandlers(), c.call(this, this.element, this.options), a && a.data(this.element, "slider", this), this
            },
            relayout: function () {
                return this._layout(), this
            },
            _removeSliderEventHandlers: function () {
                this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.showTooltip && (this.handle1.removeEventListener("focus", this.showTooltip, !1), this.handle2.removeEventListener("focus", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("blur", this.hideTooltip, !1), this.handle2.removeEventListener("blur", this.hideTooltip, !1)), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.mousedown, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), window.removeEventListener("resize", this.resize, !1)
            },
            _bindNonQueryEventHandler: function (a, b) {
                void 0 === this.eventToCallbackMap[a] && (this.eventToCallbackMap[a] = []), this.eventToCallbackMap[a].push(b)
            },
            _unbindNonQueryEventHandler: function (a, b) {
                var c = this.eventToCallbackMap[a];
                if (void 0 !== c) for (var d = 0; d < c.length; d++) if (c[d] === b) {
                    c.splice(d, 1);
                    break
                }
            },
            _cleanUpEventCallbacksMap: function () {
                for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.eventToCallbackMap[c] = null
                }
            },
            _showTooltip: function () {
                this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0
            },
            _hideTooltip: function () {
                this._state.inDrag === !1 && this.alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1
            },
            _layout: function () {
                var a;
                if (a = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = a[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), this.handle2.style[this.stylePos] = a[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
                    var b = "vertical" === this.options.orientation ? "height" : "width",
                        c = "vertical" === this.options.orientation ? "marginTop" : "marginLeft",
                        d = this._state.size / (this.options.ticks.length - 1);
                    if (this.tickLabelContainer) {
                        var e = 0;
                        if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[c] = -d / 2 + "px"), e = this.tickLabelContainer.offsetHeight; else for (f = 0; f < this.tickLabelContainer.childNodes.length; f++) this.tickLabelContainer.childNodes[f].offsetHeight > e && (e = this.tickLabelContainer.childNodes[f].offsetHeight);
                        "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = e + "px")
                    }
                    for (var f = 0; f < this.options.ticks.length; f++) {
                        var g = this.options.ticks_positions[f] || this._toPercentage(this.options.ticks[f]);
                        this.options.reversed && (g = 100 - g), this.ticks[f].style[this.stylePos] = g + "%", this._removeClass(this.ticks[f], "in-selection"), this.options.range ? g >= a[0] && g <= a[1] && this._addClass(this.ticks[f], "in-selection") : "after" === this.options.selection && g >= a[0] ? this._addClass(this.ticks[f], "in-selection") : "before" === this.options.selection && g <= a[0] && this._addClass(this.ticks[f], "in-selection"), this.tickLabels[f] && (this.tickLabels[f].style[b] = d + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[f] ? (this.tickLabels[f].style.position = "absolute", this.tickLabels[f].style[this.stylePos] = g + "%", this.tickLabels[f].style[c] = -d / 2 + "px") : "vertical" === this.options.orientation && (this.tickLabels[f].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style.marginTop = this.sliderElem.offsetWidth / 2 * -1 + "px"))
                    }
                }
                var h;
                if (this.options.range) {
                    h = this.options.formatter(this._state.value), this._setText(this.tooltipInner, h), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px"), "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                    var i = this.options.formatter(this._state.value[0]);
                    this._setText(this.tooltipInner_min, i);
                    var j = this.options.formatter(this._state.value[1]);
                    this._setText(this.tooltipInner_max, j), this.tooltip_min.style[this.stylePos] = a[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_min, "margin-top", -this.tooltip_min.offsetHeight / 2 + "px") : this._css(this.tooltip_min, "margin-left", -this.tooltip_min.offsetWidth / 2 + "px"), this.tooltip_max.style[this.stylePos] = a[1] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip_max, "margin-top", -this.tooltip_max.offsetHeight / 2 + "px") : this._css(this.tooltip_max, "margin-left", -this.tooltip_max.offsetWidth / 2 + "px")
                } else h = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, h), this.tooltip.style[this.stylePos] = a[0] + "%", "vertical" === this.options.orientation ? this._css(this.tooltip, "margin-top", -this.tooltip.offsetHeight / 2 + "px") : this._css(this.tooltip, "margin-left", -this.tooltip.offsetWidth / 2 + "px");
                if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(a[0], a[1]) + "%", this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%"; else {
                    this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(a[0], a[1]) + "%", this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";
                    var k = this.tooltip_min.getBoundingClientRect(), l = this.tooltip_max.getBoundingClientRect();
                    "bottom" === this.options.tooltip_position ? k.right > l.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : k.right > l.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top)
                }
            },
            _resize: function (a) {
                this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout()
            },
            _removeProperty: function (a, b) {
                a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b)
            },
            _mousedown: function (a) {
                if (!this._state.enabled) return !1;
                this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];
                var b = this._getPercentage(a);
                if (this.options.range) {
                    var c = Math.abs(this._state.percentage[0] - b), d = Math.abs(this._state.percentage[1] - b);
                    this._state.dragged = c < d ? 0 : 1
                } else this._state.dragged = 0;
                this._state.percentage[this._state.dragged] = b, this._layout(), this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;
                var e = this._calculateValue();
                return this._trigger("slideStart", e), this._setDataVal(e), this.setValue(e, !1, !0), this._pauseEvent(a), this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0
            },
            _triggerFocusOnHandle: function (a) {
                0 === a && this.handle1.focus(), 1 === a && this.handle2.focus()
            },
            _keydown: function (a, b) {
                if (!this._state.enabled) return !1;
                var c;
                switch (b.keyCode) {
                    case 37:
                    case 40:
                        c = -1;
                        break;
                    case 39:
                    case 38:
                        c = 1
                }
                if (c) {
                    if (this.options.natural_arrow_keys) {
                        var d = "vertical" === this.options.orientation && !this.options.reversed,
                            e = "horizontal" === this.options.orientation && this.options.reversed;
                        (d || e) && (c = -c)
                    }
                    var f = this._state.value[a] + c * this.options.step;
                    return this.options.range && (f = [a ? this._state.value[0] : f, a ? f : this._state.value[1]]), this._trigger("slideStart", f), this._setDataVal(f), this.setValue(f, !0, !0), this._setDataVal(f), this._trigger("slideStop", f), this._layout(), this._pauseEvent(b), !1
                }
            },
            _pauseEvent: function (a) {
                a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1
            },
            _mousemove: function (a) {
                if (!this._state.enabled) return !1;
                var b = this._getPercentage(a);
                this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b, this._layout();
                var c = this._calculateValue(!0);
                return this.setValue(c, !0, !0), !1
            },
            _adjustPercentageForRangeSliders: function (a) {
                if (this.options.range) {
                    var b = this._getNumDigitsAfterDecimalPlace(a);
                    b = b ? b - 1 : 0;
                    var c = this._applyToFixedAndParseFloat(a, b);
                    0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], b) < c ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], b) > c && (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0)
                }
            },
            _mouseup: function () {
                if (!this._state.enabled) return !1;
                this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();
                var a = this._calculateValue(!0);
                return this._layout(), this._setDataVal(a), this._trigger("slideStop", a), !1
            },
            _calculateValue: function (a) {
                var b;
                if (this.options.range ? (b = [this.options.min, this.options.max], 0 !== this._state.percentage[0] && (b[0] = this._toValue(this._state.percentage[0]), b[0] = this._applyPrecision(b[0])), 100 !== this._state.percentage[1] && (b[1] = this._toValue(this._state.percentage[1]), b[1] = this._applyPrecision(b[1]))) : (b = this._toValue(this._state.percentage[0]), b = parseFloat(b), b = this._applyPrecision(b)), a) {
                    for (var c = [b, 1 / 0], d = 0; d < this.options.ticks.length; d++) {
                        var e = Math.abs(this.options.ticks[d] - b);
                        e <= c[1] && (c = [this.options.ticks[d], e])
                    }
                    if (c[1] <= this.options.ticks_snap_bounds) return c[0]
                }
                return b
            },
            _applyPrecision: function (a) {
                var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
                return this._applyToFixedAndParseFloat(a, b)
            },
            _getNumDigitsAfterDecimalPlace: function (a) {
                var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
            },
            _applyToFixedAndParseFloat: function (a, b) {
                var c = a.toFixed(b);
                return parseFloat(c)
            },
            _getPercentage: function (a) {
                !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type || (a = a.touches[0]);
                var b = a[this.mousePos], c = this._state.offset[this.stylePos], d = b - c,
                    e = d / this._state.size * 100;
                return e = Math.round(e / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (e = 100 - e), Math.max(0, Math.min(100, e))
            },
            _validateInputValue: function (a) {
                if ("number" == typeof a) return a;
                if (Array.isArray(a)) return this._validateArray(a), a;
                throw new Error(d.formatInvalidInputErrorMsg(a))
            },
            _validateArray: function (a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if ("number" != typeof c) throw new Error(d.formatInvalidInputErrorMsg(c))
                }
            },
            _setDataVal: function (a) {
                this.element.setAttribute("data-value", a), this.element.setAttribute("value", a), this.element.value = a
            },
            _trigger: function (b, c) {
                c = c || 0 === c ? c : void 0;
                var d = this.eventToCallbackMap[b];
                if (d && d.length) for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    f(c)
                }
                a && this._triggerJQueryEvent(b, c)
            },
            _triggerJQueryEvent: function (a, b) {
                var c = {type: a, value: b};
                this.$element.trigger(c), this.$sliderElem.trigger(c)
            },
            _unbindJQueryEventHandlers: function () {
                this.$element.off(), this.$sliderElem.off()
            },
            _setText: function (a, b) {
                "undefined" != typeof a.textContent ? a.textContent = b : "undefined" != typeof a.innerText && (a.innerText = b)
            },
            _removeClass: function (a, b) {
                for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                    var f = c[e], g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)");
                    d = d.replace(g, " ")
                }
                a.className = d.trim()
            },
            _addClass: function (a, b) {
                for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
                    var f = c[e], g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"), h = g.test(d);
                    h || (d += " " + f)
                }
                a.className = d.trim()
            },
            _offsetLeft: function (a) {
                return a.getBoundingClientRect().left
            },
            _offsetTop: function (a) {
                for (var b = a.offsetTop; (a = a.offsetParent) && !isNaN(a.offsetTop);) b += a.offsetTop, "BODY" !== a.tagName && (b -= a.scrollTop);
                return b
            },
            _offset: function (a) {
                return {left: this._offsetLeft(a), top: this._offsetTop(a)}
            },
            _css: function (b, c, d) {
                if (a) a.style(b, c, d); else {
                    var e = c.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (a, b) {
                        return b.toUpperCase()
                    });
                    b.style[e] = d
                }
            },
            _toValue: function (a) {
                return this.options.scale.toValue.apply(this, [a])
            },
            _toPercentage: function (a) {
                return this.options.scale.toPercentage.apply(this, [a])
            },
            _setTooltipPosition: function () {
                var a = [this.tooltip, this.tooltip_min, this.tooltip_max];
                if ("vertical" === this.options.orientation) {
                    var b = this.options.tooltip_position || "right", c = "left" === b ? "right" : "left";
                    a.forEach(function (a) {
                        this._addClass(a, b), a.style[c] = "100%"
                    }.bind(this))
                } else "bottom" === this.options.tooltip_position ? a.forEach(function (a) {
                    this._addClass(a, "bottom"), a.style.top = "22px"
                }.bind(this)) : a.forEach(function (a) {
                    this._addClass(a, "top"), a.style.top = -this.tooltip.outerHeight - 14 + "px"
                }.bind(this))
            }
        }, a) {
            var f = a.fn.slider ? "bootstrapSlider" : "slider";
            a.bridget(f, b), a(function () {
                a("input[data-provide=slider]")[f]()
            })
        }
    }(a), b
});
;!function (b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(function (b) {
    function A(c, a) {
        this.element = c;
        this.options = b.extend({}, O, a);
        this.init()
    }

    function H(c) {
        if (!b(c.target).parents().hasClass("jq-selectbox") && "OPTION" != c.target.nodeName && b("div.jq-selectbox.opened").length) {
            c = b("div.jq-selectbox.opened");
            var a = b("div.jq-selectbox__search input", c), f = b("div.jq-selectbox__dropdown", c);
            c.find("select").data("_" + h).options.onSelectClosed.call(c);
            a.length && a.val("").keyup();
            f.hide().find("li.sel").addClass("selected");
            c.removeClass("focused opened dropup dropdown")
        }
    }

    var h = "styler", O = {
        wrapper: "form",
        idSuffix: "-styler",
        filePlaceholder: "\u0424\u0430\u0439\u043b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
        fileBrowse: "\u041e\u0431\u0437\u043e\u0440...",
        fileNumber: "\u0412\u044b\u0431\u0440\u0430\u043d\u043e \u0444\u0430\u0439\u043b\u043e\u0432: %s",
        selectPlaceholder: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435...",
        selectSearch: !1,
        selectSearchLimit: 10,
        selectSearchNotFound: "\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",
        selectSearchPlaceholder: "\u041f\u043e\u0438\u0441\u043a...",
        selectVisibleOptions: 0,
        singleSelectzIndex: "13",
        selectSmartPositioning: !0,
        onSelectOpened: function () {
        },
        onSelectClosed: function () {
        },
        onFormStyled: function () {
        }
    };
    A.prototype = {
        init: function () {
            function c() {
                var b = "", d = "", c = "", e = "";
                void 0 !== a.attr("id") && "" !== a.attr("id") && (b = ' id="' + a.attr("id") + f.idSuffix + '"');
                void 0 !== a.attr("title") && "" !== a.attr("title") && (d = ' title="' + a.attr("title") + '"');
                void 0 !== a.attr("class") && "" !== a.attr("class") && (c = " " + a.attr("class"));
                var l = a.data(), t;
                for (t in l) "" !== l[t] && "_styler" !== t && (e += " data-" + t + '="' + l[t] + '"');
                this.id = b + e;
                this.title = d;
                this.classes = c
            }

            var a = b(this.element), f = this.options,
                z = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1,
                h = navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? !0 : !1;
            if (a.is(":checkbox")) {
                var A = function () {
                    var f = new c,
                        d = b("<div" + f.id + ' class="jq-checkbox' + f.classes + '"' + f.title + '><div class="jq-checkbox__div"></div></div>');
                    a.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(d).prependTo(d);
                    d.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative",
                        overflow: "hidden"
                    });
                    a.is(":checked") && d.addClass("checked");
                    a.is(":disabled") && d.addClass("disabled");
                    d.click(function (b) {
                        b.preventDefault();
                        d.is(".disabled") || (a.is(":checked") ? (a.prop("checked", !1), d.removeClass("checked")) : (a.prop("checked", !0), d.addClass("checked")), a.focus().change())
                    });
                    a.closest("label").add('label[for="' + a.attr("id") + '"]').on("click.styler", function (a) {
                        b(a.target).is("a") || b(a.target).closest(d).length || (d.triggerHandler("click"), a.preventDefault())
                    });
                    a.on("change.styler", function () {
                        a.is(":checked") ? d.addClass("checked") : d.removeClass("checked")
                    }).on("keydown.styler", function (a) {
                        32 == a.which && d.click()
                    }).on("focus.styler", function () {
                        d.is(".disabled") || d.addClass("focused")
                    }).on("blur.styler", function () {
                        d.removeClass("focused")
                    })
                };
                A();
                a.on("refresh", function () {
                    a.closest("label").add('label[for="' + a.attr("id") + '"]').off(".styler");
                    a.off(".styler").parent().before(a).remove();
                    A()
                })
            } else if (a.is(":radio")) {
                var C = function () {
                    var y = new c,
                        d = b("<div" + y.id + ' class="jq-radio' + y.classes + '"' + y.title + '><div class="jq-radio__div"></div></div>');
                    a.css({
                        position: "absolute",
                        zIndex: "-1",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    }).after(d).prependTo(d);
                    d.attr("unselectable", "on").css({
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "-o-user-select": "none",
                        "user-select": "none",
                        display: "inline-block",
                        position: "relative"
                    });
                    a.is(":checked") && d.addClass("checked");
                    a.is(":disabled") && d.addClass("disabled");
                    d.click(function (b) {
                        b.preventDefault();
                        d.is(".disabled") || (d.closest(f.wrapper).find('input[name="' + a.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), a.prop("checked", !0).parent().addClass("checked"), a.focus().change())
                    });
                    a.closest("label").add('label[for="' + a.attr("id") + '"]').on("click.styler", function (a) {
                        b(a.target).is("a") || b(a.target).closest(d).length || (d.triggerHandler("click"), a.preventDefault())
                    });
                    a.on("change.styler", function () {
                        a.parent().addClass("checked")
                    }).on("focus.styler", function () {
                        d.is(".disabled") || d.addClass("focused")
                    }).on("blur.styler", function () {
                        d.removeClass("focused")
                    })
                };
                C();
                a.on("refresh", function () {
                    a.closest("label").add('label[for="' +
                        a.attr("id") + '"]').off(".styler");
                    a.off(".styler").parent().before(a).remove();
                    C()
                })
            } else if (a.is(":file")) {
                a.css({
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    margin: 0,
                    padding: 0
                });
                var D = function () {
                    var y = new c, d = a.data("placeholder");
                    void 0 === d && (d = f.filePlaceholder);
                    var B = a.data("browse");
                    void 0 !== B && "" !== B || (B = f.fileBrowse);
                    var e = b("<div" + y.id + ' class="jq-file' + y.classes + '"' + y.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                        l = b('<div class="jq-file__name">' +
                            d + "</div>").appendTo(e);
                    b('<div class="jq-file__browse">' + B + "</div>").appendTo(e);
                    a.after(e).appendTo(e);
                    a.is(":disabled") && e.addClass("disabled");
                    a.on("change.styler", function () {
                        var b = a.val();
                        if (a.is("[multiple]")) {
                            var b = "", c = a[0].files.length;
                            0 < c && (b = a.data("number"), void 0 === b && (b = f.fileNumber), b = b.replace("%s", c))
                        }
                        l.text(b.replace(/.+[\\\/]/, ""));
                        "" === b ? (l.text(d), e.removeClass("changed")) : e.addClass("changed")
                    }).on("focus.styler", function () {
                        e.addClass("focused")
                    }).on("blur.styler", function () {
                        e.removeClass("focused")
                    }).on("click.styler", function () {
                        e.removeClass("focused")
                    })
                };
                D();
                a.on("refresh", function () {
                    a.off(".styler").parent().before(a).remove();
                    D()
                })
            } else if (a.is('input[type="number"]')) {
                var E = function () {
                    var c = b('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
                    a.after(c).prependTo(c).wrap('<div class="jq-number__field"></div>');
                    a.is(":disabled") && c.addClass("disabled");
                    var d, f, e, l = null, t = null;
                    void 0 !== a.attr("min") && (d = a.attr("min"));
                    void 0 !== a.attr("max") && (f = a.attr("max"));
                    e = Number(void 0 !== a.attr("step") && b.isNumeric(a.attr("step")) ? a.attr("step") : 1);
                    var L = function (n) {
                        var c, k = a.val();
                        b.isNumeric(k) || (k = 0, a.val("0"));
                        n.is(".minus") ? (c = parseInt(k, 10) - e, 0 < e && (c = Math.ceil(c / e) * e)) : n.is(".plus") && (c = parseInt(k, 10) + e, 0 < e && (c = Math.floor(c / e) * e));
                        b.isNumeric(d) && b.isNumeric(f) ? c >= d && f >= c && a.val(c) : b.isNumeric(d) && !b.isNumeric(f) ? c >= d && a.val(c) : !b.isNumeric(d) && b.isNumeric(f) ? f >= c && a.val(c) : a.val(c)
                    };
                    c.is(".disabled") || (c.on("mousedown", "div.jq-number__spin", function () {
                        var a = b(this);
                        L(a);
                        l = setTimeout(function () {
                            t = setInterval(function () {
                                L(a)
                            }, 40)
                        }, 350)
                    }).on("mouseup mouseout", "div.jq-number__spin", function () {
                        clearTimeout(l);
                        clearInterval(t)
                    }), a.on("focus.styler", function () {
                        c.addClass("focused")
                    }).on("blur.styler", function () {
                        c.removeClass("focused")
                    }))
                };
                E();
                a.on("refresh", function () {
                    a.off(".styler").closest(".jq-number").before(a).remove();
                    E()
                })
            } else if (a.is("select")) {
                var N = function () {
                    function y(a) {
                        a.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function (a) {
                            var c = null;
                            "mousewheel" == a.type ? c = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" == a.type && (c = 40 * a.originalEvent.detail);
                            c && (a.stopPropagation(), a.preventDefault(), b(this).scrollTop(c + b(this).scrollTop()))
                        })
                    }

                    function d() {
                        for (var a = 0; a < l.length; a++) {
                            var b = l.eq(a), c = "", d = "", e = c = "", u = "", v = "", w = "", x = "", g = "";
                            b.prop("selected") && (d = "selected sel");
                            b.is(":disabled") && (d = "disabled");
                            b.is(":selected:disabled") && (d = "selected sel disabled");
                            void 0 !== b.attr("id") && "" !== b.attr("id") && (e = ' id="' + b.attr("id") +
                                f.idSuffix + '"');
                            void 0 !== b.attr("title") && "" !== l.attr("title") && (u = ' title="' + b.attr("title") + '"');
                            void 0 !== b.attr("class") && (w = " " + b.attr("class"), g = ' data-jqfs-class="' + b.attr("class") + '"');
                            var h = b.data(), q;
                            for (q in h) "" !== h[q] && (v += " data-" + q + '="' + h[q] + '"');
                            "" !== d + w && (c = ' class="' + d + w + '"');
                            c = "<li" + g + v + c + u + e + ">" + b.html() + "</li>";
                            b.parent().is("optgroup") && (void 0 !== b.parent().attr("class") && (x = " " + b.parent().attr("class")), c = "<li" + g + v + ' class="' + d + w + " option" + x + '"' + u + e + ">" + b.html() + "</li>", b.is(":first-child") && (c = '<li class="optgroup' + x + '">' + b.parent().attr("label") + "</li>" + c));
                            t += c
                        }
                    }

                    function A() {
                        var e = new c, n = "", I = a.data("placeholder"), k = a.data("search"),
                            h = a.data("search-limit"), u = a.data("search-not-found"),
                            v = a.data("search-placeholder"), w = a.data("z-index"), x = a.data("smart-positioning");
                        void 0 === I && (I = f.selectPlaceholder);
                        void 0 !== k && "" !== k || (k = f.selectSearch);
                        void 0 !== h && "" !== h || (h = f.selectSearchLimit);
                        void 0 !== u && "" !== u || (u = f.selectSearchNotFound);
                        void 0 === v && (v = f.selectSearchPlaceholder);
                        void 0 !== w && "" !== w || (w = f.singleSelectzIndex);
                        void 0 !== x && "" !== x || (x = f.selectSmartPositioning);
                        var g = b("<div" + e.id + ' class="jq-selectbox jqselect' + e.classes + '" style="display: inline-block; position: relative; z-index:' + w + '"><div class="jq-selectbox__select"' + e.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                        a.css({margin: 0, padding: 0}).after(g).prependTo(g);
                        var M = b("div.jq-selectbox__select", g), q = b("div.jq-selectbox__select-text", g),
                            e = l.filter(":selected");
                        d();
                        k && (n = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + v + '"></div><div class="jq-selectbox__not-found">' + u + "</div>");
                        var m = b('<div class="jq-selectbox__dropdown" style="position: absolute">' + n + '<ul class="list-reset" style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + t + "</ul></div>");
                        g.append(m);
                        var r = b("ul", m), p = b("li", m), F = b("input", m),
                            B = b("div.jq-selectbox__not-found", m).hide();
                        p.length < h && F.parent().hide();
                        "" === a.val() ? q.text(I).addClass("placeholder") : q.text(e.text());
                        var G = 0, C = 0;
                        (p.each(function () {
                            var a = b(this);
                            a.css({display: "inline-block", "white-space": "nowrap"});
                            a.innerWidth() > G && (G = a.innerWidth(), C = a.width());
                            a.css({display: ""})
                        }), q.is(".placeholder") && q.width() > G) ? q.width(q.width()) : (n = g.clone().appendTo("body").width("auto"), k = n.outerWidth(), n.remove(), k == g.outerWidth() && q.width(C));
                        G > g.width() && m.width(G);
                        "" === l.first().text() && "" !== a.data("placeholder") && p.first().hide();
                        a.css({position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0});
                        var D = g.outerHeight(), J = F.outerHeight(), K = r.css("max-height"),
                            n = p.filter(".selected");
                        1 > n.length && p.first().addClass("selected sel");
                        void 0 === p.data("li-height") && p.data("li-height", p.outerHeight() ? p.outerHeight() : 30);
                        var E = m.css("top");
                        if ("auto" == m.css("left") && m.css({left: 0}), "auto" == m.css("top") && m.css({top: D}), m.hide(), n.length && (l.first().text() != e.text() && g.addClass("changed"), g.data("jqfs-class", n.data("jqfs-class")), g.addClass(n.data("jqfs-class"))), a.is(":disabled")) return g.addClass("disabled"), !1;
                        M.click(function () {
                            if (b("div.jq-selectbox").filter(".opened").length && f.onSelectClosed.call(b("div.jq-selectbox").filter(".opened")), a.focus(), !z) {
                                var c = b(window), d = p.data("li-height"), e = g.offset().top,
                                    v = c.height() - D - (e - c.scrollTop()), n = a.data("visible-options");
                                void 0 !== n && "" !== n || (n = f.selectVisibleOptions);
                                var k = 5 * d, h = d * n;
                                0 < n && 6 > n && (k = h);
                                0 === n && (h = "auto");
                                var n = function () {
                                    m.height("auto").css({bottom: "auto", top: E});
                                    var a = function () {
                                        r.css("max-height", Math.floor((v - 20 - J) / d) * d)
                                    };
                                    a();
                                    r.css("max-height", h);
                                    "none" != K && r.css("max-height", K);
                                    v < m.outerHeight() + 20 && a()
                                }, q = function () {
                                    m.height("auto").css({top: "auto", bottom: E});
                                    var a = function () {
                                        r.css("max-height", Math.floor((e - c.scrollTop() - 20 - J) / d) * d)
                                    };
                                    a();
                                    r.css("max-height", h);
                                    "none" != K && r.css("max-height", K);
                                    e - c.scrollTop() - 20 < m.outerHeight() + 20 && a()
                                };
                                !0 === x || 1 === x ? v > k + J + 20 ? (n(), g.removeClass("dropup").addClass("dropdown")) : (q(), g.removeClass("dropdown").addClass("dropup")) : (!1 === x || 0 === x) && v > k + J + 20 && (n(), g.removeClass("dropup").addClass("dropdown"));
                                g.offset().left + m.outerWidth() > c.width() && m.css({left: "auto", right: 0});
                                b("div.jqselect").css({zIndex: w - 1}).removeClass("opened");
                                g.css({zIndex: w});
                                m.is(":hidden") ? (b("div.jq-selectbox__dropdown:visible").hide(), m.show(), g.addClass("opened focused"), f.onSelectOpened.call(g)) : (m.hide(), g.removeClass("opened dropup dropdown"), b("div.jq-selectbox").filter(".opened").length && f.onSelectClosed.call(g));
                                F.length && (F.val("").keyup(), B.hide(), F.keyup(function () {
                                    var c = b(this).val();
                                    p.each(function () {
                                        b(this).html().match(new RegExp(".*?" + c + ".*?", "i")) ? b(this).show() : b(this).hide()
                                    });
                                    "" === l.first().text() && "" !== a.data("placeholder") && p.first().hide();
                                    1 > p.filter(":visible").length ? B.show() : B.hide()
                                }));
                                p.filter(".selected").length && ("" === a.val() ? r.scrollTop(0) : (0 !== r.innerHeight() / d % 2 && (d /= 2), r.scrollTop(r.scrollTop() + p.filter(".selected").position().top - r.innerHeight() / 2 + d)));
                                y(r)
                            }
                        });
                        p.hover(function () {
                            b(this).siblings().removeClass("selected")
                        });
                        p.filter(".selected").text();
                        p.filter(":not(.disabled):not(.optgroup)").click(function () {
                            a.focus();
                            var c = b(this), d = c.text();
                            if (!c.is(".selected")) {
                                var e = c.index(), e = e - c.prevAll(".optgroup").length;
                                c.addClass("selected sel").siblings().removeClass("selected sel");
                                l.prop("selected", !1).eq(e).prop("selected", !0);
                                q.text(d);
                                g.data("jqfs-class") && g.removeClass(g.data("jqfs-class"));
                                g.data("jqfs-class", c.data("jqfs-class"));
                                g.addClass(c.data("jqfs-class"));
                                a.change()
                            }
                            m.hide();
                            g.removeClass("opened dropup dropdown");
                            f.onSelectClosed.call(g)
                        });
                        m.mouseout(function () {
                            b("li.sel", m).addClass("selected")
                        });
                        a.on("change.styler", function () {
                            q.text(l.filter(":selected").text()).removeClass("placeholder");
                            p.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                            l.first().text() != p.filter(".selected").text() ? g.addClass("changed") : g.removeClass("changed")
                        }).on("focus.styler", function () {
                            g.addClass("focused");
                            b("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                        }).on("blur.styler", function () {
                            g.removeClass("focused")
                        }).on("keydown.styler keyup.styler", function (b) {
                            var c = p.data("li-height");
                            "" === a.val() ? q.text(I).addClass("placeholder") : q.text(l.filter(":selected").text());
                            p.removeClass("selected sel").not(".optgroup").eq(a[0].selectedIndex).addClass("selected sel");
                            38 != b.which && 37 != b.which && 33 != b.which && 36 != b.which || r.scrollTop("" === a.val() ? 0 : r.scrollTop() + p.filter(".selected").position().top);
                            40 != b.which && 39 != b.which && 34 != b.which && 35 != b.which || r.scrollTop(r.scrollTop() + p.filter(".selected").position().top -
                                r.innerHeight() + c);
                            13 == b.which && (b.preventDefault(), m.hide(), g.removeClass("opened dropup dropdown"), f.onSelectClosed.call(g))
                        }).on("keydown.styler", function (a) {
                            32 == a.which && (a.preventDefault(), M.click())
                        });
                        H.registered || (b(document).on("click", H), H.registered = !0)
                    }

                    function e() {
                        var e = new c,
                            f = b("<div" + e.id + ' class="jq-select-multiple jqselect' + e.classes + '"' + e.title + ' style="display: inline-block; position: relative"></div>');
                        a.css({margin: 0, padding: 0}).after(f);
                        d();
                        f.append("<ul>" + t + "</ul>");
                        var h = b("ul", f).css({
                                position: "relative",
                                "overflow-x": "hidden",
                                "-webkit-overflow-scrolling": "touch"
                            }), k = b("li", f).attr("unselectable", "on"), e = a.attr("size"), z = h.outerHeight(),
                            u = k.outerHeight();
                        h.css(void 0 !== e && 0 < e ? {height: u * e} : {height: 4 * u});
                        z > f.height() && (h.css("overflowY", "scroll"), y(h), k.filter(".selected").length && h.scrollTop(h.scrollTop() + k.filter(".selected").position().top));
                        a.prependTo(f).css({
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            opacity: 0
                        });
                        a.is(":disabled") ? (f.addClass("disabled"), l.each(function () {
                            b(this).is(":selected") && k.eq(b(this).index()).addClass("selected")
                        })) : (k.filter(":not(.disabled):not(.optgroup)").click(function (c) {
                            a.focus();
                            var d = b(this);
                            if (c.ctrlKey || c.metaKey || d.addClass("selected"), c.shiftKey || d.addClass("first"), c.ctrlKey || c.metaKey || c.shiftKey || d.siblings().removeClass("selected first"), (c.ctrlKey || c.metaKey) && (d.is(".selected") ? d.removeClass("selected first") : d.addClass("selected first"), d.siblings().removeClass("first")), c.shiftKey) {
                                var e = !1, f = !1;
                                d.siblings().removeClass("selected").siblings(".first").addClass("selected");
                                d.prevAll().each(function () {
                                    b(this).is(".first") && (e = !0)
                                });
                                d.nextAll().each(function () {
                                    b(this).is(".first") && (f = !0)
                                });
                                e && d.prevAll().each(function () {
                                    return b(this).is(".selected") ? !1 : void b(this).not(".disabled, .optgroup").addClass("selected")
                                });
                                f && d.nextAll().each(function () {
                                    return b(this).is(".selected") ? !1 : void b(this).not(".disabled, .optgroup").addClass("selected")
                                });
                                1 == k.filter(".selected").length && d.addClass("first")
                            }
                            l.prop("selected", !1);
                            k.filter(".selected").each(function () {
                                var a = b(this), c = a.index();
                                a.is(".option") && (c -= a.prevAll(".optgroup").length);
                                l.eq(c).prop("selected", !0)
                            });
                            a.change()
                        }), l.each(function (a) {
                            b(this).data("optionIndex", a)
                        }), a.on("change.styler", function () {
                            k.removeClass("selected");
                            var a = [];
                            l.filter(":selected").each(function () {
                                a.push(b(this).data("optionIndex"))
                            });
                            k.not(".optgroup").filter(function (c) {
                                return -1 < b.inArray(c, a)
                            }).addClass("selected")
                        }).on("focus.styler", function () {
                            f.addClass("focused")
                        }).on("blur.styler", function () {
                            f.removeClass("focused")
                        }), z > f.height() && a.on("keydown.styler", function (a) {
                            38 != a.which && 37 != a.which && 33 != a.which || h.scrollTop(h.scrollTop() + k.filter(".selected").position().top - u);
                            40 != a.which && 39 != a.which && 34 != a.which || h.scrollTop(h.scrollTop() + k.filter(".selected:last").position().top - h.innerHeight() + 2 * u)
                        }))
                    }

                    var l = b("option", a), t = "";
                    a.is("[multiple]") ? h || z || e() : A()
                };
                N();
                a.on("refresh", function () {
                    a.off(".styler").parent().before(a).remove();
                    N()
                })
            } else a.is(":reset") && a.on("click", function () {
                setTimeout(function () {
                    a.closest(f.wrapper).find("input, select").trigger("refresh")
                }, 1)
            })
        }, destroy: function () {
            var c = b(this.element);
            c.is(":checkbox") || c.is(":radio") ? (c.removeData("_" + h).off(".styler refresh").removeAttr("style").parent().before(c).remove(), c.closest("label").add('label[for="' + c.attr("id") + '"]').off(".styler")) : c.is('input[type="number"]') ? c.removeData("_" + h).off(".styler refresh").closest(".jq-number").before(c).remove() : (c.is(":file") || c.is("select")) && c.removeData("_" + h).off(".styler refresh").removeAttr("style").parent().before(c).remove()
        }
    };
    b.fn[h] = function (c) {
        var a = arguments;
        if (void 0 === c || "object" == typeof c) return this.each(function () {
            b.data(this, "_" + h) || b.data(this, "_" + h, new A(this, c))
        }).promise().done(function () {
            var a = b(this[0]).data("_" + h);
            a && a.options.onFormStyled.call()
        }), this;
        if ("string" == typeof c && "_" !== c[0] && "init" !== c) {
            var f;
            return this.each(function () {
                var z = b.data(this, "_" + h);
                z instanceof A && "function" == typeof z[c] && (f = z[c].apply(z, Array.prototype.slice.call(a, 1)))
            }), void 0 !== f ? f : this
        }
    };
    H.registered = !1
});
;!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    "use strict";
    var b = window.Slick || {};
    b = function () {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }

        var b = 0;
        return c
    }(), b.prototype.activateADA = function () {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({height: b}, a.options.speed)
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {}, e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({left: b}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({top: b}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({animStart: e.currentLeft}).animate({animStart: b}, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function (a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function () {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function () {
        var b = this, c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function (b) {
        var c = this, d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function () {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function (a) {
        var b = this, c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function () {
        var a = this, b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function () {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function () {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function () {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function (b, c) {
        var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f, g, h, d = this, e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case"previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case"next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case"index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function (a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) {
            if (a < c[e]) {
                a = d;
                break
            }
            d = c[e]
        }
        return a
    }, b.prototype.cleanUpEvents = function () {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function () {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function () {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function (b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function (a) {
        var b = this, c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({zIndex: c.options.zIndex}), c.$slides.eq(a).animate({opacity: 1}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function () {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function (a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function () {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function () {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function () {
        var a = this, b = 0, c = 0, d = 0;
        if (a.options.infinite === !0) for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (a.options.centerMode === !0) d = a.slideCount; else if (a.options.asNavFor) for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function (a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function () {
        var e, a = this, b = 0, c = 0, d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function () {
        return this
    }, b.prototype.getSlideCount = function () {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;
        c.changeSlide({data: {message: "index", index: parseInt(a)}}, b)
    }, b.prototype.init = function (b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function () {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c})
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, a.changeSlide))
    }, b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {message: "index"}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function () {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {action: "start"}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {action: "move"}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {action: "end"}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function (a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({data: {message: b.options.rtl === !0 ? "next" : "previous"}}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({data: {message: b.options.rtl === !0 ? "previous" : "next"}}))
    }, b.prototype.lazyLoad = function () {
        function g(c) {
            a("img[data-lazy]", c).each(function () {
                var c = a(this), d = a(this).attr("data-lazy"), e = document.createElement("img");
                e.onload = function () {
                    c.animate({opacity: 0}, 100, function () {
                        c.attr("src", d).animate({opacity: 1}, 200, function () {
                            c.removeAttr("data-lazy").removeClass("slick-loading")
                        }), b.$slider.trigger("lazyLoaded", [b, c, d])
                    })
                }, e.onerror = function () {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }, e.src = d
            })
        }

        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(), a.$slideTrack.css({opacity: 1}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;
        a.changeSlide({data: {message: "next"}})
    }, b.prototype.orientationChange = function () {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function (a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;
        a.changeSlide({data: {message: "previous"}})
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;
        var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function () {
            3 > b ? setTimeout(function () {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function (b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {currentSlide: d}), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function () {
        var c, d, e, b = this, f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f) if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
            }
            b.breakpoints.sort(function (a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function () {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function () {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function (a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function () {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({padding: "0px " + a.options.centerPadding}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({padding: a.options.centerPadding + " 0px"})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function () {
        var c, b = this;
        b.$slides.each(function (d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0})
        }), b.$slides.eq(b.currentSlide).css({zIndex: b.options.zIndex - 1, opacity: 1})
    }, b.prototype.setHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function () {
        var c, d, e, f, h, b = this, g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f; else if ("multiple" === h) a.each(e, function (a, c) {
            b.options[a] = c
        }); else if ("responsive" === h) for (d in f) if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]]; else {
            for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
            b.options.responsive.push(f[d])
        }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function () {
        var a = this, b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function (a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function () {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function (a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function (b) {
        var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function (a, b, c) {
        var d, e, f, g, j, h = null, i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function () {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function (a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case"left":
                case"down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function (a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case"start":
                b.swipeStart(a);
                break;
            case"move":
                b.swipeMove(a);
                break;
            case"end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function (a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function (a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function (a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function () {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function () {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function () {
        var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
        for (f = 0; e > f; f++) if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});


function getCsrf() {
    var obj = {};
    obj[$('meta[name="csrf-param"]').attr('content')] = $('meta[name="csrf-token"]').attr('content');
    return obj;
}

function divided(str) {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

function isEmpty(value) {
    return inArray(value, [null, 0, '', 'undefined', undefined, '0'])
}

function inArray(need, array) {
    return $.inArray(need, array) !== -1;
}

function clearObject(object) {
    var newObject = {};
    $.each(object, function (name, value) {
        if (!isEmpty(value)) {
            newObject[name] = value;
        }
    });
    return newObject;
}

Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function requestCounter(event) {
    if (typeof (yaCounter15781438) != "undefined") {
        yaCounter15781438.reachGoal(event);
    }
}

function pluralForm(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    if (n1 == 1) {
        return text_forms[0];
    }
    return text_forms[2];
}

function empty(value) {
    return typeof (value) == 'undefined' || value == '' || value == null || value == 0
}

function removeSpaces(str) {
    return str.replace(/\s/g, "");
}

function parseQueryString(queryString) {
    var params = {}, queries, temp, i, l;
    queries = queryString.split("&");
    if (queryString.indexOf("?") != -1) {
        for (i = 0, l = queries.length; i < l; i++) {
            temp = queries[i].split('=');
            params[temp[0].replace("?", "")] = temp[1];
        }
    }
    return params;
}

function objToString(obj) {
    var str = '', first = true, param = '?';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += param + p + '=' + obj[p];
            if (first === true) {
                first = false;
                param = '&';
            }
        }
    }
    return str;
}

function copyLink(url) {
    var container_link = $('.copy-link-container');
    window.getSelection().removeAllRanges();
    container_link.html('<span class="js-copylink">' + url + '</span>');
    var link = document.querySelector('.js-copylink');
    var range = document.createRange();
    range.selectNode(link);
    window.getSelection().addRange(range);
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy link command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    container_link.html('');
    window.getSelection().removeAllRanges();
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number, prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point, s = '', toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'),
        sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};const isInStandaloneMode = (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone) || document.referrer.includes('android-app://');
if (isInStandaloneMode) {
    requestCounter('js_pwa_link_open')
}
(function () {
    $('.main-nav_btn-search').on('click', function (ev) {
        $(this).toggleClass('active');
        $('.main-nav_search').toggleClass('active');
    });
    $(document).on('click', function (ev) {
        !$('.main-nav_btn-search').is(ev.target) && !$('.main-nav_search').is(ev.target) && $('.main-nav_search').removeClass('active') && $('.main-nav_btn-search').removeClass('active');
    });
    var nav = $('.main-nav');
    var windowWidth = $(window).width();
    if (nav.length && 767 < windowWidth) {
        var headerHeight = $('.g-header').height();
        $(document).on('scroll', function () {
            $(this).scrollTop() > headerHeight ? nav.addClass('fixed') : nav.removeClass('fixed')
        })
    }
    var screen = window.matchMedia('screen and (min-width: 1023px)');
    screen.addListener(mainMenu);
    mainMenu(screen);

    function mainMenu(screen) {
        if (screen.matches) {
        } else {
            $(document).on('click', '[data-nav-btn]', openMobMenu).on('click', '.main-nav_item-sub', function () {
                $('.main-nav').css('overflow', 'hidden').scrollTop(0);
                $(this).children('.main-nav_sub').addClass('active');
                $('[data-nav-btnBack]').addClass('active');
            }).on('click', '[data-nav-btnBack]', function () {
                $('.main-nav').css('overflow', 'auto');
                $(this).removeClass('active');
                $('.main-nav_sub').removeClass('active');
            });

            function openMobMenu() {
                if ($('.main-nav').hasClass('active')) {
                    $(this).removeClass('active');
                    $('.main-nav').removeClass('active');
                    $('.main-nav_sub').removeClass('active');
                    $('[data-nav-btnBack]').removeClass('active');
                    $('.overlay').removeClass('active');
                    $('html, body').css('overflow', 'auto');
                    $('.main-nav').css('overflow', 'auto');
                    $('.wrap_mW').css('display', 'block');
                } else {
                    $(this).addClass('active');
                    $('.main-nav').addClass('active');
                    $('.overlay').addClass('active');
                    $('html, body').css('overflow', 'hidden');
                    $('.wrap_mW').css('display', 'none');
                }
            }

            $('.overlay').on('click', overlayMobHide);

            function overlayMobHide() {
                $(this).removeClass('active');
                $('.main-nav').removeClass('active');
                $('.main-nav_sub').removeClass('active');
                $('[data-nav-btn]').removeClass('active');
                $('[data-nav-btnBack]').removeClass('active');
                $('.overlay').removeClass('active');
                $('html, body').css('overflow', 'auto');
            }
        }
    }

    $(document).on("click", "[data-js=\"slowly\"]", function (I) {
        I.preventDefault(), $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - 57 + "px"}, {
            duration: 500,
            easing: "swing"
        })
    }).on('change', '#sorter', function () {
        var val = $(this).val(), split = val.split('-'), sort_position = attr = split[0], sort = split[1],
            sort_link = $('#sort_' + attr).attr('href');
        if (sort == 'desc') {
            sort_position = '-' + attr;
        }
        params = sort_link.replace(new RegExp('sort=([^&=]+)'), 'sort=' + sort_position);
        $('#sort_' + attr).attr('href', params);
        $('#sort_' + attr).trigger('click');
    }).on('click', '.main-nav_link--straight', function (e) {
        e.stopPropagation();
    }).on('click', '[data-block-more="btn"]', function () {
        var ths = $(this);
        var block = ths.closest('[data-block-more="block"]');
        var blockIn = block.find('[data-block-more="block-in"]');
        var hide = block.find('[data-block-more="hide"]');
        var className = 'active';
        if (ths.hasClass(className)) {
            ths.removeClass(className);
            hide.removeClass(className);
            blockIn.removeClass(className);
        } else {
            ths.addClass(className);
            hide.addClass(className);
            blockIn.addClass(className);
        }
    }).on('click', '.encoded-link', function () {
        var t = $(this);
        if (t.data('url').length) {
            var url = atob(t.data('url'));
            if (t.hasClass('t_blank')) {
                window.open(url);
            } else {
                location.href = url;
            }
            return false;
        }
    });
    $('.filter-more').hover(function () {
        requestCounter('show_more');
    }, function () {
    });
    if ($('[data-slide-down-btn]').length) {
        $('[data-slide-down]').hide();
        $('[data-slide-down-btn]').on('click', function () {
            $(this).toggleClass('active').closest('.slideToggle-wrap').find('[data-slide-down]').slideToggle();
        });
    }
    if ($('[data-filter-sidebar-open-btn]').length) {
        $('[data-filter-sidebar-content]').hide();
        $('[data-filter-sidebar-open-btn]').on('click', function () {
            $(this).toggleClass('active');
            $(this).next('[data-filter-sidebar-content]').stop().slideToggle();
        });
    }
    var fb = $("div.fb"), vk = $("div.vk"), tw = $("div.tw"), ok = $("div.ok"), teleg = $("div.teleg"),
        rss = $("div.rss"), insta = $("div.instagram");
    fb.on("click", function () {
        window.open("https://www.facebook.com/Myfinby")
    }), vk.on("click", function () {
        window.open("https://vk.com/myfinby")
    }), tw.on("click", function () {
        window.open("https://twitter.com/Myfinby")
    }), ok.on("click", function () {
        window.open("https://www.ok.ru/myfinby")
    }), teleg.on("click", function () {
        window.open("https://t.me/myfin_news")
    }), rss.on("click", function () {
        window.open("https://myfin.by/rss"), ga("send", "event", "Buttons", "click", "rss")
    }), insta.on("click", function () {
        window.open("https://www.instagram.com/myfinby/")
    })
})();
$(".credit_type_menu .icon").on("click", function () {
    $(this).hasClass("collapsed") ? ($(this).removeClass("collapsed"), $(this).closest("ul").find(".hidden-xs").addClass("hidden-xs-active").removeClass("hidden-xs")) : ($(this).addClass("collapsed"), $(this).closest("ul").find(".hidden-xs-active").addClass("hidden-xs").removeClass("hidden-xs-active"))
})
var lazy_events = [{
    selector: '.load_image', coeff: 1.5, callback: function (t) {
        if (!(t.hasClass('load_image_picture')) && !(t.data('url-img-bg'))) {
            t.attr("src", t.data('url-img'))
        } else if (t.hasClass('load_image_picture')) {
            t.attr("srcset", t.data('url-img'));
        } else {
            t.css({'background-image': 'url(' + t.data('url-img-bg') + ')'});
        }
    }
}];
;$(document).ready(function () {
    $('.formstyler').styler();
    $(document).ajaxComplete(function () {
        $('.formstyler').styler();
    })
});
;$(document).ready(function () {
    var reviewsSlider = $("[data-slider='reviews-slider']").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        accessibility: false,
        responsive: [{breakpoint: 1100, settings: {slidesToShow: 3, slidesToScroll: 1}}, {
            breakpoint: 820,
            settings: {slidesToShow: 2, slidesToScroll: 1}
        }, {breakpoint: 550, settings: {slidesToShow: 1, slidesToScroll: 1}}]
    });
    var prevSlideBtn = "[data-slider='reviews-slider__prev']", nextSlideBtn = "[data-slider='reviews-slider__next']";
    $(document).on('click', prevSlideBtn, function () {
        reviewsSlider.slick("slickPrev");
    }).on('click', nextSlideBtn, function () {
        reviewsSlider.slick("slickNext");
    });
});
;$(document).ready(function () {
    var showMoreBtn = '.footer-links-list__show-more';
    var mobSlider = '[data-mob-slider]';

    function initSlider() {
        var currentScreenWidth = $(window).width();
        if (currentScreenWidth < 992) {
            $(mobSlider).slick({
                arrows: false,
                dots: false,
                accessibility: false,
                responsive: [{breakpoint: 991, settings: {slidesToShow: 2, slidesToScroll: 1,}}, {
                    breakpoint: 600,
                    settings: {slidesToShow: 1, slidesToScroll: 1}
                }]
            });
        }
    };initSlider();
    $(document).on('resize', function () {
        initSlider();
    });

    function saveTotalHeight(el) {
        var totalHeight = el.outerHeight(true);
        el.attr('data-height', totalHeight);
    }

    function saveFixedHeight(list, listItem, itemsLimit) {
        var items = list.find(listItem), itemsHeight = 0;
        for (var i = 0; i < itemsLimit; i++) {
            itemsHeight += $(items[i]).outerHeight(true);
        }
        list.attr('data-fixed-height', itemsHeight);
    };var mainBlock = '.footer-links-list', list = '.footer-links-list__list',
        listItem = '.footer-links-list__list-item', itemsLimit = 5;
    $(list).each(function () {
        var that = $(this), itemsCount = $(this).find(listItem).length;
        if (itemsCount > itemsLimit) {
            saveTotalHeight(that);
            saveFixedHeight(that, listItem, itemsLimit);
            that.height(that.attr('data-fixed-height'));
            $("<div class='footer-links-list__show-more'>Еще</div>").appendTo($(this).closest(mainBlock));
        }
    });
    $(document).on('click', showMoreBtn, function () {
        var list = $(this).siblings('.footer-links-list__list'), listHeight = list.attr('data-height'),
            listFiexdHeight = list.attr('data-fixed-height'), animationTime = 200;
        list.toggleClass('open');
        $(this).toggleClass('open');
        if (list.hasClass('open')) {
            list.stop(true);
            list.animate({height: listHeight + "px"}, animationTime);
        } else {
            list.stop(true);
            list.animate({height: listFiexdHeight + "px"}, animationTime);
        }
    });
});
;$(document).ready(function () {
    var main = "[data-js='converter']", closeBtn = "[data-js='converter-close']",
        showBtn = "[data-js='converter-show']";
    $(document).on('click', showBtn, function () {
        $(main).addClass('active');
    }).on('click', closeBtn, function () {
        $(this).closest(main).removeClass('active');
    });
});

function Calculator(obj) {
    var id = obj.id || '';
    var from = obj.from || '';
    var to = obj.to || '';
    var class_items = obj.class_items || '';
    var btn_swap = obj.btn_swap || '';
    var subtext_from = obj.subtext_from || '';
    var subtext_to = obj.subtext_to || '';
    this.document = $(document);
    setParamCalc();
    this.document.on('keyup', '#' + from + ', #' + to, function () {
        changeVal(this);
    });
    this.document.on('click', class_items, function () {
        changeCurrency(this);
    });
    this.document.on('click', '#' + btn_swap, function () {
        swapCurrency();
    });

    function changeVal(target) {
        var obj = $(target), input = $('#' + (obj.attr('id') === from ? to : from)),
            currency = obj.parents('.xxx-convertor__input-block').prev().children('.xxx-convertor__curr-tabs-wrapper').find('.active'),
            another_currency = input.parents('.xxx-convertor__input-block').prev().children('.xxx-convertor__curr-tabs-wrapper').find('.active');
        var val = Math.round(currency.data('curse-val') / another_currency.data('curse-val') * obj.val() / currency.data('curse-multi') * another_currency.data('curse-multi') * 100) / 100,
            val_one = currency.data('curse-val') / another_currency.data('curse-val') / currency.data('curse-multi') * another_currency.data('curse-multi'),
            val_one_another = another_currency.data('curse-val') / currency.data('curse-val') / another_currency.data('curse-multi') * currency.data('curse-multi');
        input.val(val);
        $(subtext_from).html('1 ' + currency.data('curse-name') + ' = ' + val_one.toFixed(4) + ' ' + another_currency.data('curse-name'))
        $(subtext_to).html('1 ' + another_currency.data('curse-name') + ' = ' + val_one_another.toFixed(4) + ' ' + currency.data('curse-name'))
    }

    function changeCurrency(target) {
        var elem = $(target), elems = $(class_items + '.active');
        if (elems.length <= 2 && !elems.hasClass(elem.data('curse-name'))) {
            var from1 = !!~String(elem.attr('id')).indexOf('from') ? elem.attr('id') : $(elems[0]).attr('id'),
                to2 = !!~String(elem.attr('id')).indexOf('to') ? elem.attr('id') : $(elems[elems.length === 1 ? 0 : 1]).attr('id');
            setActives({from: from1, to: to2});
            changeVal('#' + from);
        }
    }

    function swapCurrency() {
        var input = $('#' + from), elems = $(class_items + '.active');
        if (elems.length === 2 && input) {
            var from1 = 'from' + elems[1].id.substring(elems[1].id.indexOf('_')),
                to2 = 'to' + elems[0].id.substring(elems[0].id.indexOf('_'));
            setActives({from: from1, to: to2});
            changeVal('#' + from);
        }
    }

    function setActives(obj) {
        $(class_items + '.active').removeClass('active');
        var elem_from = $(class_items).filter('#' + obj.from), elem_to = $(class_items).filter('#' + obj.to);
        elem_from.addClass('active');
        elem_to.addClass('active');
    }

    function setParamCalc() {
        var value = $('#' + from).length && $('#' + from).data('value') ? $('#' + from).data('value') : 100,
            elem = '#' + from;
        $(elem).val(+value);
        changeVal(elem, false);
    }
}

var calc = new Calculator({
    from: 'cbr_first',
    to: 'cbr_second',
    class_items: '.xxx-convertor__curr-tab',
    btn_swap: 'btn_swap',
    subtext_from: '.portatable-converter__subtext-from',
    subtext_to: '.portatable-converter__subtext-to',
    dropdown_items: '.xxx-dropdown-container__item',
    id: 'current-date'
});
;

function after_form(template, selector) {
    delete_ok(selector);
    $('.modal').find('.d_close').click();
    if ($('div').is('.after_form')) {
        $('.after_form').remove();
    }
    $(".footer_wrap").after(template);
    $(".after_callback_bt").click();
}

function delete_ok(selector) {
    var block = $("#" + selector), fields_block = block.find(" .form-fields"),
        f_block = fields_block.length == 1 ? fields_block : block;
    f_block.html('<div class="form-group_submit">' + '<div class="form_required">Ваша заявка отправлена. Сотрудник банка свяжется с вами в рабочее время.</div>' + '</div>');
    block.find(".n-bank").hide();
    block.find(".n-credit").hide();
    block.find(".real-footer").hide();
    block.find(".modal-footer").hide();
}

function open_pop(operator, type_request, title, prod_id, bank_id, city, type_id, modal_id, brandpopup_id, not_lead, force_type_request) {
    var prefix = this.getModalPrefix(modal_id);
    if (!($(modal_id + " #" + prefix + "onl_bank_id").val() == bank_id && $(modal_id + " #" + prefix + "onl_type_request").val() == type_request && $(modal_id + " #" + prefix + "onl_operator").val() == operator && $(modal_id + " #" + prefix + "onl_product_id").val() == prod_id)) {
        if (typeof (type_id) == 'undefined' || type_id == '') {
            type_id = 1;
        }
        if (empty(not_lead)) {
            not_lead = false;
        }
        if (this.empty(force_type_request)) {
            force_type_request = '';
        }
        $(modal_id + " #" + prefix + "onl_product_id").val(prod_id);
        if (type_request == 'other_bank') {
            $(modal_id + " #" + prefix + "onl_product_id").val(0)
        }
        $(modal_id + '.modal-header-text, ' + modal_id + '.modal-header-alternative').css('display', 'none');
        $(modal_id + " #" + prefix + "onl_bank_id").val(bank_id);
        $(modal_id + " #" + prefix + "onl_operator").val(operator);
        $(modal_id + " #" + prefix + "onl_type_request").val(type_request);
        $(modal_id + " #" + prefix + "modal-product-bt").attr('onclick', 'requestCounter("' + type_request + '_popup")');
        $(modal_id + " #" + prefix + "onl_type_id").val(type_id);
        $(modal_id + " #" + prefix + "onl_force_type_request").val(force_type_request);
        $(modal_id + " form").attr("id", type_request);
        $(modal_id + " form").addClass('cr_' + prod_id + '_' + type_request);
        $(modal_id + " .row").removeClass('has-error');
        $(modal_id).removeClass('disablebank-form').find(".form-fields").hide();
        if (typeof (city) == 'undefined') {
            city = 'minsk';
        }
        if (this.empty(brandpopup_id)) {
            brandpopup_id = 0;
        }
        $.ajax({
            url: "/request-yii2/get-form",
            data: {
                id: bank_id,
                operator: operator,
                type_request: type_request,
                type_id: type_id,
                city: city,
                brandpopup_id: brandpopup_id
            },
            success: function (response) {
                var data = JSON.parse(response), b = $(modal_id);
                if ($('.visual_css').attr('data-brand-id') != brandpopup_id && brandpopup_id != 0) {
                    $('.visual_css').remove();
                }
                if ($.type(data.brandpopup_css) !== 'null' && $('.visual_css').attr('data-brand-id') != brandpopup_id) {
                    $('head').append('<link class="visual_css" data-brand-id="' + brandpopup_id + '" rel="stylesheet" type="text/css" href="' + data.brandpopup_css + '">');
                }
                b.find(".title.h2 span, .modal-header-alternative .label").html(data.label);
                b.find(".modal-header-alternative .bank-in").html(data.bank_name_in);
                b.find(".form-fields").html(data.fields).show();
                b.find(".n-bank").html(data.bank_name);
                b.find(".n-credit").html(title);
                b.find(".real-footer").show();
                b.find(".modal-footer").show();
                $(modal_id + ".modal-body").css("display", "block");
                $(modal_id + ".req_bt").css("display", "block");
                $(modal_id + ".modal-footer-info").css("display", "block");
                if (not_lead == '1') {
                    $(modal_id + '.modal-header-text, ' + modal_id + '.modal-header-alternative').css('display', 'block');
                }
            }
        });
    }
}

function getModalPrefix(id) {
    var prefix = '';
    if (id == '#visual_request') {
        prefix = 'brand_'
    }
    return prefix;
};

function setCookie(name, expire) {
    $.ajax({
        url: "/ajaxnew/set-cookies",
        type: "get",
        data: {name: name, value: 3, expire: expire},
        success: function (b) {
            if (b == 'ok') {
                console.log('set_c');
            }
        }
    });
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.11
*/
!function (modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {i: moduleId, l: !1, exports: {}};
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }

    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function () {
            return module.default;
        } : function () {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 3);
}([function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($) {
        return $;
    });
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__,
        _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(10), __webpack_require__(11)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($, window, document, undefined) {
        function Inputmask(alias, options, internal) {
            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
            this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}).alias = alias, this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));
        }

        function resolveAlias(aliasStr, options, opts) {
            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
        }

        function generateMaskSet(opts, nocache) {
            function generateMask(mask, metadata, opts) {
                var regexMask = !1;
                if (null !== mask && "" !== mask || ((regexMask = null !== opts.regex) ? mask = (mask = opts.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (regexMask = !0, mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                    mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
                }
                var masksetDefinition,
                    maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
                return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                    validPositions: {},
                    _buffer: undefined,
                    buffer: undefined,
                    tests: {},
                    metadata: metadata,
                    maskLength: undefined
                }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), masksetDefinition;
            }

            if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
                if (opts.mask.length > 1) {
                    opts.keepStatic = null === opts.keepStatic || opts.keepStatic;
                    var altMask = opts.groupmarker.start;
                    return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                        altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start), msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
                    }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);
                }
                opts.mask = opts.mask.pop();
            }
            return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);
        }

        function maskScope(actionObj, maskset, opts) {
            function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
                minimalPos = minimalPos || 0;
                var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();
                do {
                    !0 === baseOnInput && getMaskSet().validPositions[pos] ? (test = (testPos = getMaskSet().validPositions[pos]).match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (test = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), pos++;
                } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);
                return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1, maskTemplate;
            }

            function getMaskSet() {
                return maskset;
            }

            function resetMaskSet(soft) {
                var maskset = getMaskSet();
                maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
            }

            function getLastValidPosition(closestTo, strict, validPositions) {
                var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
                closestTo === undefined && (closestTo = -1);
                for (var posNdx in valids) {
                    var psNdx = parseInt(posNdx);
                    valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), psNdx >= closestTo && (after = psNdx));
                }
                return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;
            }

            function stripValidPositions(start, end, nocheck, strict) {
                var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions),
                    needsValidation = !1;
                for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function (pos) {
                    var posMatch = getMaskSet().validPositions[pos];
                    if (posMatch !== undefined && null === posMatch.match.fn) {
                        var prevMatch = getMaskSet().validPositions[pos - 1],
                            nextMatch = getMaskSet().validPositions[pos + 1];
                        return prevMatch !== undefined && nextMatch !== undefined;
                    }
                    return !1;
                }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts)) || delete getMaskSet().validPositions[i]);
                for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition();) {
                    for (; getMaskSet().validPositions[startPos] !== undefined;) startPos++;
                    if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {
                        var t = getTestTemplate(i);
                        !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;
                    }
                }
                resetMaskSet(!0);
            }

            function determineTestTemplate(tests, guessNextBest) {
                for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (!((testPos = testPositions[ndx]).match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation || testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;
                return testPos;
            }

            function getTestTemplate(pos, ndxIntlzr, tstPs) {
                return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
            }

            function getTest(pos) {
                return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];
            }

            function positionCanMatchDefinition(pos, def) {
                for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {
                    valid = !0;
                    break;
                }
                return valid;
            }

            function getTests(pos, ndxIntlzr, tstPs) {
                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                    function handleMatch(match, loopNdx, quantifierRecurse) {
                        function isFirstMatch(latestMatch, tokenGroup) {
                            var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                            return firstMatch || $.each(tokenGroup.matches, function (ndx, match) {
                                if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;
                            }), firstMatch;
                        }

                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                            var bestMatch, indexPos;
                            if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) for (var vpAlternation = getMaskSet().validPositions[pos - 1].locator, tpAlternation = getMaskSet().tests[pos][0].locator, i = 0; i < targetAlternation; i++) if (vpAlternation[i] !== tpAlternation[i]) return vpAlternation.slice(targetAlternation + 1);
                            return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
                                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
                                    ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                                (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, indexPos = ndxPos);
                            }), bestMatch ? bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) : targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                        }

                        if (testPos > 1e4) throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                        if (testPos === pos && match.matches === undefined) return matches.push({
                            match: match,
                            locator: loopNdx.reverse(),
                            cd: cacheDependency
                        }), !0;
                        if (match.matches !== undefined) {
                            if (match.isGroup && quantifierRecurse !== match) {
                                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;
                            } else if (match.isOptional) {
                                var optionalToken = match;
                                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                    if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;
                                    insertStop = !0, testPos = pos;
                                }
                            } else if (match.isAlternator) {
                                var maltMatches, alternateToken = match, malternateMatches = [],
                                    currentMatches = matches.slice(), loopNdxCnt = loopNdx.length,
                                    altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                                if (-1 === altIndex || "string" == typeof altIndex) {
                                    var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(),
                                        altIndexArr = [];
                                    if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);
                                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                        if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), !0 !== (match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match) && match !== undefined && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {
                                            var ntndx = $.inArray(match, maskToken.matches) + 1;
                                            maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse)) && (altIndexArr.push(ntndx.toString()), $.each(matches, function (ndx, lmnt) {
                                                lmnt.alternation = loopNdx.length - 1;
                                            }));
                                        }
                                        maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                            var altMatch = maltMatches[ndx1], dropMatch = !1;
                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                                var altMatch2 = malternateMatches[ndx2];
                                                if ("string" != typeof altIndex || -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                    if (function (source, target) {
                                                        return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;
                                                    }(altMatch, altMatch2)) {
                                                        dropMatch = !0, altMatch.alternation === altMatch2.alternation && -1 === altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation], altMatch2.alternation = altMatch.alternation), altMatch.match.nativeDef === altMatch2.match.def && (altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation], malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch));
                                                        break;
                                                    }
                                                    if (altMatch.match.def === altMatch2.match.def) {
                                                        dropMatch = !1;
                                                        break;
                                                    }
                                                    if (function (source, target) {
                                                        return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);
                                                    }(altMatch, altMatch2) || function (source, target) {
                                                        return null !== source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def.replace(/[\[\]]/g, ""), getMaskSet(), pos, !1, opts, !1);
                                                    }(altMatch, altMatch2)) {
                                                        altMatch.alternation === altMatch2.alternation && -1 === altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0]), dropMatch = !0, altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split("")[0] + "," + altMatch.locator[altMatch.alternation], malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                        break;
                                                    }
                                                }
                                            }
                                            dropMatch || malternateMatches.push(altMatch);
                                        }
                                    }
                                    "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function (lmnt, ndx) {
                                        if (isFinite(ndx)) {
                                            var alternation = lmnt.alternation,
                                                altLocArr = lmnt.locator[alternation].toString().split(",");
                                            lmnt.locator[alternation] = undefined, lmnt.alternation = undefined;
                                            for (var alndx = 0; alndx < altLocArr.length; alndx++) -1 !== $.inArray(altLocArr[alndx], altIndexArr) && (lmnt.locator[alternation] !== undefined ? (lmnt.locator[alternation] += ",", lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), lmnt.alternation = alternation);
                                            if (lmnt.locator[alternation] !== undefined) return lmnt;
                                        }
                                    })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();
                                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                                if (match) return !0;
                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                                if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)) {
                                    if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, isFirstMatch(latestMatch, tokenGroup)) {
                                        if (qndx > qt.quantifier.min - 1) {
                                            insertStop = !0, testPos = pos;
                                            break;
                                        }
                                        return !0;
                                    }
                                    return !0;
                                }
                            } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
                        } else testPos++;
                    }

                    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                        var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                        if (match && testPos === pos) return match;
                        if (testPos > pos) break;
                    }
                }

                function filterTests(tests) {
                    if (opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && !0 !== tests[0].match.optionality && !0 !== tests[0].match.optionalQuantifier && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
                        if (getMaskSet().validPositions[pos - 1] === undefined) return [determineTestTemplate(tests)];
                        if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) return [determineTestTemplate(tests)];
                        if (getMaskSet().validPositions[pos - 1]) return [determineTestTemplate(tests)];
                    }
                    return tests;
                }

                var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0,
                    ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0], matches = [], insertStop = !1,
                    cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
                if (pos > -1) {
                    if (ndxIntlzr === undefined) {
                        for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1;) previousPos--;
                        test !== undefined && previousPos > -1 && (ndxInitializer = function (tests) {
                            var locator = [];
                            return $.isArray(tests) || (tests = [tests]), tests.length > 0 && (tests[0].alternation === undefined ? 0 === (locator = determineTestTemplate(tests.slice()).locator.slice()).length && (locator = tests[0].locator.slice()) : $.each(tests, function (ndx, tst) {
                                if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                            })), locator;
                        }(test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                    }
                    if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);
                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length && !(resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]) && testPos === pos || testPos > pos); mtndx++) ;
                }
                return (0 === matches.length || insertStop) && matches.push({
                    match: {
                        fn: null,
                        cardinality: 0,
                        optionality: !0,
                        casing: null,
                        def: "",
                        placeholder: ""
                    }, locator: [], cd: cacheDependency
                }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), filterTests(getMaskSet().tests[pos]));
            }

            function getBufferTemplate() {
                return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), getMaskSet()._buffer;
            }

            function getBuffer(noCache) {
                return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), getMaskSet().buffer;
            }

            function refreshFromBuffer(start, end, buffer) {
                var i, p;
                if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];
                for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {
                    var valResult = isValid(p, buffer[i], !0, !0);
                    !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);
                }
            }

            function casing(elem, test, pos) {
                switch (opts.casing || test.casing) {
                    case"upper":
                        elem = elem.toUpperCase();
                        break;
                    case"lower":
                        elem = elem.toLowerCase();
                        break;
                    case"title":
                        var posBefore = getMaskSet().validPositions[pos - 1];
                        elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                        break;
                    default:
                        if ($.isFunction(opts.casing)) {
                            var args = Array.prototype.slice.call(arguments);
                            args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);
                        }
                }
                return elem;
            }

            function checkAlternationMatch(altArr1, altArr2, na) {
                for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
                for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                    isMatch = !0;
                    break;
                }
                return isMatch;
            }

            function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
                function isSelection(posObj) {
                    var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;
                    return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;
                }

                function _isValid(position, c, strict) {
                    var rslt = !1;
                    return $.each(getTests(position), function (ndx, tst) {
                        for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));
                        if (c && (chrs += c), getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                            c: getPlaceholder(position, test, !0) || test.def,
                            pos: position
                        })) {
                            var elem = rslt.c !== undefined ? rslt.c : c;
                            elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;
                            var validatedPos = position, possibleModifiedBuffer = getBuffer();
                            if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [rslt.remove]), $.each(rslt.remove.sort(function (a, b) {
                                return b - a;
                            }), function (ndx, lmnt) {
                                stripValidPositions(lmnt, lmnt + 1, !0);
                            })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [rslt.insert]), $.each(rslt.insert.sort(function (a, b) {
                                return a - b;
                            }), function (ndx, lmnt) {
                                isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
                            })), rslt.refreshFromBuffer) {
                                var refresh = rslt.refreshFromBuffer;
                                if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), !1;
                                if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), !1;
                            } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), !1;
                            return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), setValidPosition(validatedPos, $.extend({}, tst, {input: casing(elem, test, validatedPos)}), fromSetValid, isSelection(pos)) || (rslt = !1), !1);
                        }
                    }), rslt;
                }

                function setValidPosition(pos, validTest, fromSetValid, isSelection) {
                    if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {
                        var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions),
                            lvp = getLastValidPosition(undefined, !0);
                        for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];
                        getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                        var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1,
                            initialLength = getMaskSet().maskLength;
                        for (i = j = pos; i <= lvp; i++) {
                            var t = positionsClone[i];
                            if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn);) {
                                if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                                    var result = isValid(posMatch, t.input, !0, !0);
                                    valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, needsValidation = !0;
                                } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;
                                if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), valid) break;
                            }
                            if (!valid) break;
                        }
                        if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), resetMaskSet(!0), !1;
                    } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                    return resetMaskSet(!0), !0;
                }

                function fillMissingNonMask(maskPos) {
                    for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;
                    var testTemplate, testsFromPos;
                    for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && ("" === (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice())[testsFromPos.length - 1].match.def && testsFromPos.pop(), (testTemplate = determineTestTemplate(testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));
                }

                strict = !0 === strict;
                var maskPos = pos;
                pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);
                var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
                if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), !0 === result) {
                    if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {
                        var currentPosValid = getMaskSet().validPositions[maskPos];
                        if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                            if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {
                                !function (originalPos, newPos) {
                                    var vp = getMaskSet().validPositions[newPos];
                                    if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {
                                        var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0),
                                            equality = -1;
                                        "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function (ndx, tst) {
                                            for (var i = 0; i < tll; i++) {
                                                if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
                                                    var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i],
                                                        tstAI = tst.locator[i];
                                                    targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);
                                                    break;
                                                }
                                                equality < i && (equality = i, bestMatch = tst);
                                            }
                                        }), (bestMatch = $.extend({}, bestMatch, {input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def})).generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, _isValid(newPos, vp.input, !0);
                                    }
                                }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;
                                break;
                            }
                        } else result = {caret: seekNext(maskPos)};
                    }
                    !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = function (pos, c, strict) {
                        var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos,
                            validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1,
                            lAltPos = getLastValidPosition();
                        for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {
                            if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                            prevAltPos = altPos;
                        }
                        if (alternation !== undefined) {
                            decisionPos = parseInt(lastAlt);
                            var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];
                            decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);
                            var possibilityPos = getMaskSet().validPositions[decisionPos],
                                prevPos = getMaskSet().validPositions[decisionPos - 1];
                            $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function (ndx, test) {
                                altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
                                for (var mndx = 0; mndx < altNdxs.length; mndx++) {
                                    var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0,
                                        verifyValidInput = !1;
                                    if (decisionTaker < altNdxs[mndx] && (test.na === undefined || -1 === $.inArray(altNdxs[mndx], test.na.split(",")) || -1 === $.inArray(decisionTaker.toString(), altNdxs))) {
                                        getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);
                                        var possibilities = getMaskSet().validPositions[decisionPos].locator;
                                        for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]), null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0, !0 !== possibilityPos.generatedInput && validInputs.push(possibilityPos.input)), staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def), getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input, i = decisionPos + 1; i < getLastValidPosition(undefined, !0) + 1; i++) (validPos = getMaskSet().validPositions[i]) && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++, delete getMaskSet().validPositions[i];
                                        for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(), resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0;) {
                                            var input = validInputs.shift();
                                            if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;
                                        }
                                        if (isValidRslt) {
                                            getMaskSet().validPositions[decisionPos].locator = possibilities;
                                            var targetLvp = getLastValidPosition(pos) + 1;
                                            for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;
                                            isValidRslt = isValid((pos += staticInputsBeforePosAlternate - staticInputsBeforePos) > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
                                        }
                                        if (isValidRslt) return !1;
                                        resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);
                                    }
                                }
                            });
                        }
                        return isValidRslt;
                    }(maskPos, c, strict)), !0 === result && (result = {pos: maskPos});
                }
                if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {
                    var postResult = opts.postValidation(getBuffer(!0), result, opts);
                    if (postResult.refreshFromBuffer && postResult.buffer) {
                        var refresh = postResult.refreshFromBuffer;
                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);
                    }
                    result = !0 === postResult ? result : postResult;
                }
                return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
            }

            function isMask(pos, strict) {
                var test = getTestTemplate(pos).match;
                if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;
                if (!0 !== strict && pos > -1) {
                    var tests = getTests(pos);
                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
                }
                return !1;
            }

            function seekNext(pos, newBlock) {
                var maskL = getMaskSet().maskLength;
                if (pos >= maskL) return maskL;
                var position = pos;
                for (getTests(maskL + 1).length > 1 && (getMaskTemplate(!0, maskL + 1, !0), maskL = getMaskSet().maskLength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position));) ;
                return position;
            }

            function seekPrevious(pos, newBlock) {
                var tests, position = pos;
                if (position <= 0) return 0;
                for (; --position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && ((tests = getTests(position)).length < 2 || 2 === tests.length && "" === tests[1].match.def));) ;
                return position;
            }

            function getBufferElement(position) {
                return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
            }

            function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
                if (event && $.isFunction(opts.onBeforeWrite)) {
                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                    if (result) {
                        if (result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), buffer = getBuffer(!0);
                        }
                        caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);
                    }
                }
                input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : android && event && "input" === event.type ? setTimeout(function () {
                    caret(input, caretPos);
                }, 0) : caret(input, caretPos), !0 === triggerInputEvent && (skipInputEvent = !0, $(input).trigger("input")));
            }

            function getPlaceholder(pos, test, returnPL) {
                if ((test = test || getTest(pos).match).placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
                if (null === test.fn) {
                    if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                        var prevTest, tests = getTests(pos), staticAlternations = [];
                        if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                    }
                    return test.def;
                }
                return opts.placeholder.charAt(pos % opts.placeholder.length);
            }

            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
                function isTemplateMatch(ndx, charCodes) {
                    return -1 !== getBufferTemplate().slice(ndx, seekNext(ndx)).join("").indexOf(charCodes) && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);
                }

                var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
                if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {
                    var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
                        matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                    matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), initialNdx = seekNext(initialNdx));
                }
                if (-1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, $.each(inputValue, function (ndx, charCode) {
                    if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {
                        var keypress = new $.Event("_checkval");
                        keypress.which = charCode.charCodeAt(0), charCodes += charCode;
                        var lvp = getLastValidPosition(undefined, !0), lvTest = getMaskSet().validPositions[lvp],
                            nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
                        if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {
                            var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
                            result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos), initialNdx = pos + 1, charCodes = "";
                        } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);
                        if (!1 !== result && !strict && $.isFunction(opts.onBeforeWrite)) {
                            var origResult = result;
                            if (result = opts.onBeforeWrite.call(inputmask, keypress, getBuffer(), result.forwardPosition, opts), (result = $.extend(origResult, result)) && result.refreshFromBuffer) {
                                var refresh = result.refreshFromBuffer;
                                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer), resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret, result.forwardPosition = result.caret);
                            }
                        }
                    }
                }), writeOut) {
                    var caretPos = undefined;
                    document.activeElement === input && result && (caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition), writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);
                }
            }

            function unmaskedvalue(input) {
                if (input) {
                    if (input.inputmask === undefined) return input.value;
                    input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
                }
                var umValue = [], vps = getMaskSet().validPositions;
                for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
                var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
                if ($.isFunction(opts.onUnMask)) {
                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
                }
                return unmaskedValue;
            }

            function caret(input, begin, end, notranslate) {
                function translatePosition(pos) {
                    return !0 === notranslate || !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || (pos = getBuffer().join("").length - pos), pos;
                }

                var range;
                if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, end = range.endOffset) : document.selection && document.selection.createRange && (end = (begin = 0 - (range = document.selection.createRange()).duplicate().moveStart("character", -input.inputmask._valueGet().length)) + range.text.length), {
                    begin: translatePosition(begin),
                    end: translatePosition(end)
                };
                if (begin.begin !== undefined && (end = begin.end, begin = begin.begin), "number" == typeof begin) {
                    begin = translatePosition(begin), end = "number" == typeof (end = translatePosition(end)) ? end : begin;
                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                    if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || !1 !== opts.insertMode || begin !== end || end++, input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {
                        if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {
                            var textNode = document.createTextNode("");
                            input.appendChild(textNode);
                        }
                        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), range.collapse(!0);
                        var sel = window.getSelection();
                        sel.removeAllRanges(), sel.addRange(range);
                    } else input.createTextRange && ((range = input.createTextRange()).collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), range.select());
                    renderColorMask(input, {begin: begin, end: end});
                }
            }

            function determineLastRequiredPosition(returnDefinition) {
                var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(),
                    positions = {}, lvTest = getMaskSet().validPositions[lvp],
                    ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;
                for (pos = lvp + 1; pos < buffer.length; pos++) ndxIntlzr = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
                var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
                for (pos = bl - 1; pos > lvp && (((testPos = positions[pos]).match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
                return returnDefinition ? {l: bl, def: positions[bl] ? positions[bl].match : undefined} : bl;
            }

            function clearOptionalTail(buffer) {
                for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && "" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def);) rl++;
                for (; (validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter;) rl--;
                return buffer.splice(rl), buffer;
            }

            function isComplete(buffer) {
                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
                if ("*" === opts.repeat) return undefined;
                var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
                if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = !0;
                    for (var i = 0; i <= aml; i++) {
                        var test = getTestTemplate(i).match;
                        if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
                            complete = !1;
                            break;
                        }
                    }
                }
                return complete;
            }

            function handleRemove(input, k, pos, strict, fromIsValid) {
                if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), isRTL)) {
                    var pend = pos.end;
                    pos.end = pos.begin, pos.begin = pend;
                }
                k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && function () {
                    if (opts.keepStatic) {
                        for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {
                            var altPos = getMaskSet().validPositions[lastAlt];
                            if (altPos) {
                                if (!0 !== altPos.generatedInput && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input), delete getMaskSet().validPositions[lastAlt], altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;
                                prevAltPos = altPos;
                            }
                        }
                        if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0;) {
                            var keypress = new $.Event("keypress");
                            keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);
                        } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);
                    }
                }();
                var lvp = getLastValidPosition(pos.begin, !0);
                if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, !0 !== fromIsValid)) for (; getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined;) getMaskSet().p++;
            }

            function initializeColorMask(input) {
                function findCaretPos(clientx) {
                    var caretPos, e = document.createElement("span");
                    for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);
                    e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);
                    var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;
                    for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                        if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                            var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;
                            e.innerHTML = inputText.charAt(caretPos), caretPos = (offset1 -= e.offsetWidth / 3) < offset2 ? caretPos - 1 : caretPos;
                            break;
                        }
                        previousWidth = e.offsetWidth;
                    }
                    return document.body.removeChild(e), caretPos;
                }

                var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null),
                    template = document.createElement("div");
                template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, (colorMask = document.createElement("div")).className = "im-colormask", input.parentNode.insertBefore(colorMask, input), input.parentNode.removeChild(input), colorMask.appendChild(template), colorMask.appendChild(input), input.style.left = template.offsetLeft + "px", $(input).on("click", function (e) {
                    return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [e]);
                }), $(input).on("keydown", function (e) {
                    e.shiftKey || !1 === opts.insertMode || setTimeout(function () {
                        renderColorMask(input);
                    }, 0);
                });
            }

            function renderColorMask(input, caretPos, clear) {
                function handleStatic() {
                    isStatic || null !== test.fn && testPos.input !== undefined ? isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def) && (isStatic = !1, maskTemplate += "</span>") : (isStatic = !0, maskTemplate += "<span class='im-static'>");
                }

                function handleCaret(force) {
                    !0 !== force && pos !== caretPos.begin || document.activeElement !== input || (maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>");
                }

                var test, testPos, ndxIntlzr, maskTemplate = "", isStatic = !1, pos = 0;
                if (colorMask !== undefined) {
                    var buffer = getBuffer();
                    if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {
                        begin: caretPos,
                        end: caretPos
                    }), !0 !== clear) {
                        var lvp = getLastValidPosition();
                        do {
                            handleCaret(), getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += buffer[pos]) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(), maskTemplate += getPlaceholder(pos, test))), pos++;
                        } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);
                        -1 === maskTemplate.indexOf("im-caret") && handleCaret(!0), isStatic && handleStatic();
                    }
                    var template = colorMask.getElementsByTagName("div")[0];
                    template.innerHTML = maskTemplate, input.inputmask.positionColorMask(input, template);
                }
            }

            maskset = maskset || this.maskset, opts = opts || this.opts;
            var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL,
                skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {
                    on: function (input, eventName, eventHandler) {
                        var ev = function (e) {
                            if (this.inputmask === undefined && "FORM" !== this.nodeName) {
                                var imOpts = $.data(this, "_inputmask_opts");
                                imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);
                            } else {
                                if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                                    switch (e.type) {
                                        case"input":
                                            if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();
                                            break;
                                        case"keydown":
                                            skipKeyPressEvent = !1, skipInputEvent = !1;
                                            break;
                                        case"keypress":
                                            if (!0 === skipKeyPressEvent) return e.preventDefault();
                                            skipKeyPressEvent = !0;
                                            break;
                                        case"click":
                                            if (iemobile || iphone) {
                                                var that = this, args = arguments;
                                                return setTimeout(function () {
                                                    eventHandler.apply(that, args);
                                                }, 0), !1;
                                            }
                                    }
                                    var returnVal = eventHandler.apply(this, arguments);
                                    return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                                }
                                e.preventDefault();
                            }
                        };
                        input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
                    }, off: function (input, event) {
                        if (input.inputmask && input.inputmask.events) {
                            var events;
                            event ? (events = [])[event] = input.inputmask.events[event] : events = input.inputmask.events, $.each(events, function (eventName, evArr) {
                                for (; evArr.length > 0;) {
                                    var ev = evArr.pop();
                                    -1 !== $.inArray(eventName, ["submit", "reset"]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                                }
                                delete input.inputmask.events[eventName];
                            });
                        }
                    }
                }, EventHandlers = {
                    keydownEvent: function (e) {
                        var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                        if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !function (eventName) {
                            var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
                            return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), el = null, isSupported;
                        }("cut")) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")), input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(getBuffer()) && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var caretPos = seekNext(getLastValidPosition());
                            opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                        } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function () {
                            var caretPos = caret(input);
                            caret(input, caretPos.begin);
                        }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function () {
                            var caretPos = caret(input);
                            caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                        }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));
                        opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);
                    }, keypressEvent: function (e, checkval, writeOut, strict, ndx) {
                        var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                        if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), setTimeout(function () {
                            $input.trigger("change");
                        }, 0)), !0;
                        if (k) {
                            46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
                            var forwardPosition, pos = checkval ? {begin: ndx, end: ndx} : caret(input),
                                c = String.fromCharCode(k);
                            getMaskSet().writeOutBuffer = !0;
                            var valResult = isValid(pos, c, strict);
                            if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos), getMaskSet().p = forwardPosition), !1 !== writeOut && (setTimeout(function () {
                                opts.onKeyValidation.call(input, k, valResult, opts);
                            }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {
                                var buffer = getBuffer();
                                writeBuffer(input, buffer, opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, e, !0 !== checkval), !0 !== checkval && setTimeout(function () {
                                    !0 === isComplete(buffer) && $input.trigger("complete");
                                }, 0);
                            }
                            if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), valResult;
                        }
                    }, pasteEvent: function (e) {
                        var tempValue, input = this, ev = e.originalEvent || e, $input = $(input),
                            inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);
                        isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                        var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
                            valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                        if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                            if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
                            inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                        }
                        var pasteValue = inputValue;
                        if ($.isFunction(opts.onBeforePaste)) {
                            if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
                            pasteValue || (pasteValue = inputValue);
                        }
                        return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")), writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), !0 === isComplete(getBuffer()) && $input.trigger("complete"), e.preventDefault();
                    }, inputFallBackEvent: function (e) {
                        var input = this, inputValue = input.inputmask._valueGet();
                        if (getBuffer().join("") !== inputValue) {
                            var caretPos = caret(input);
                            if (!1 === function (input, inputValue, caretPos) {
                                if ("." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && ((inputValue = inputValue.split(""))[caretPos.begin - 1] = opts.radixPoint.charAt(0), inputValue = inputValue.join("")), inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {
                                    var keypress = new $.Event("keypress");
                                    return keypress.which = opts.radixPoint.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, caretPos.begin - 1), !1;
                                }
                            }(input, inputValue, caretPos)) return !1;
                            if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""), !1 === function (input, inputValue, caretPos) {
                                if (iemobile) {
                                    var inputChar = inputValue.replace(getBuffer().join(""), "");
                                    if (1 === inputChar.length) {
                                        var keypress = new $.Event("keypress");
                                        return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), !1;
                                    }
                                }
                            }(input, inputValue, caretPos)) return !1;
                            caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input));
                            var buffer = getBuffer().join(""), frontPart = inputValue.substr(0, caretPos.begin),
                                backPart = inputValue.substr(caretPos.begin),
                                frontBufferPart = buffer.substr(0, caretPos.begin),
                                backBufferPart = buffer.substr(caretPos.begin), selection = caretPos, entries = "",
                                isEntry = !1;
                            if (frontPart !== frontBufferPart) {
                                selection.begin = 0;
                                for (var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) selection.begin++;
                                isEntry && (entries += frontPart.slice(selection.begin, selection.end));
                            }
                            backPart !== backBufferPart && (backPart.length > backBufferPart.length ? isEntry && (selection.end = selection.begin) : backPart.length < backBufferPart.length ? selection.end += backBufferPart.length - backPart.length : backPart.charAt(0) !== backBufferPart.charAt(0) && selection.end++), writeBuffer(input, getBuffer(), selection), entries.length > 0 ? $.each(entries.split(""), function (ndx, entry) {
                                var keypress = new $.Event("keypress");
                                keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                            }) : (selection.begin === selection.end - 1 && caret(input, seekPrevious(selection.begin + 1), selection.end), e.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, e)), e.preventDefault();
                        }
                    }, setValueEvent: function (e) {
                        this.inputmask.refreshValue = !1;
                        var input = this, value = input.inputmask._valueGet(!0);
                        $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), value = value.split(""), checkVal(input, !0, !1, isRTL ? value.reverse() : value), undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");
                    }, focusEvent: function (e) {
                        var input = this, nptValue = input.inputmask._valueGet();
                        opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), !0 === opts.positionCaretOnTab && !1 === mouseEnter && "" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), EventHandlers.clickEvent.apply(input, [e, !0])), undoValue = getBuffer().join("");
                    }, mouseleaveEvent: function (e) {
                        var input = this;
                        if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {
                            var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();
                            nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), writeBuffer(input, buffer));
                        }
                    }, clickEvent: function (e, tabbed) {
                        function doRadixFocus(clickPos) {
                            if ("" !== opts.radixPoint) {
                                var vps = getMaskSet().validPositions;
                                if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                                    if (clickPos < seekNext(-1)) return !0;
                                    var radixPos = $.inArray(opts.radixPoint, getBuffer());
                                    if (-1 !== radixPos) {
                                        for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                        return !0;
                                    }
                                }
                            }
                            return !1;
                        }

                        var input = this;
                        setTimeout(function () {
                            if (document.activeElement === input) {
                                var selectedCaret = caret(input);
                                if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                                    case"none":
                                        break;
                                    case"radixFocus":
                                        if (doRadixFocus(selectedCaret.begin)) {
                                            var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                            caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                            break;
                                        }
                                    default:
                                        var clickPosition = selectedCaret.begin,
                                            lvclickPosition = getLastValidPosition(clickPosition, !0),
                                            lastPosition = seekNext(lvclickPosition);
                                        if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {
                                            var lvp = getMaskSet().validPositions[lvclickPosition],
                                                tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp),
                                                placeholder = getPlaceholder(lastPosition, tt.match);
                                            if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {
                                                var newPos = seekNext(lastPosition);
                                                (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);
                                            }
                                            caret(input, lastPosition);
                                        }
                                }
                            }
                        }, 0);
                    }, dblclickEvent: function (e) {
                        var input = this;
                        setTimeout(function () {
                            caret(input, 0, seekNext(getLastValidPosition()));
                        }, 0);
                    }, cutEvent: function (e) {
                        var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e,
                            clipboardData = window.clipboardData || ev.clipboardData,
                            clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                        clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos), writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")), input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");
                    }, blurEvent: function (e) {
                        var $input = $(this), input = this;
                        if (input.inputmask) {
                            var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                            "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), !1 === isComplete(buffer) && (setTimeout(function () {
                                $input.trigger("incomplete");
                            }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), $input.trigger("change"));
                        }
                    }, mouseenterEvent: function (e) {
                        var input = this;
                        mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());
                    }, submitEvent: function (e) {
                        undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                            writeBuffer(el, getBuffer());
                        }, 0));
                    }, resetEvent: function (e) {
                        el.inputmask.refreshValue = !0, setTimeout(function () {
                            $el.trigger("setvalue");
                        }, 0);
                    }
                };
            Inputmask.prototype.positionColorMask = function (input, template) {
                input.style.left = template.offsetLeft + "px";
            };
            var valueBuffer;
            if (actionObj !== undefined) switch (actionObj.action) {
                case"isComplete":
                    return el = actionObj.el, isComplete(getBuffer());
                case"unmaskedvalue":
                    return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(""), checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), unmaskedvalue(el);
                case"mask":
                    !function (elem) {
                        EventRuler.off(elem);
                        var isSupported = function (input, opts) {
                            var elementType = input.getAttribute("type"),
                                isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;
                            if (!isSupported) if ("INPUT" === input.tagName) {
                                var el = document.createElement("input");
                                el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                            } else isSupported = "partial";
                            return !1 !== isSupported ? function (npt) {
                                function getter() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                                }

                                function setter(value) {
                                    valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");
                                }

                                var valueGet, valueSet;
                                if (!npt.inputmask.__valueGet) {
                                    if (!0 !== opts.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function (object) {
                                                return object.__proto__;
                                            } : function (object) {
                                                return object.constructor.prototype;
                                            });
                                            var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                            valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            })) : "INPUT" !== npt.tagName && (valueGet = function () {
                                                return this.textContent;
                                            }, valueSet = function (value) {
                                                this.textContent = value;
                                            }, Object.defineProperty(npt, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: !0
                                            }));
                                        } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), npt.__defineSetter__("value", setter));
                                        npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                                    }
                                    npt.inputmask._valueGet = function (overruleRTL) {
                                        return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                                    }, npt.inputmask._valueSet = function (value, overruleRTL) {
                                        valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                                    }, valueGet === undefined && (valueGet = function () {
                                        return this.value;
                                    }, valueSet = function (value) {
                                        this.value = value;
                                    }, function (type) {
                                        if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {
                                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                                                    return elem.value;
                                                },
                                                valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                                                    return elem.value = value, elem;
                                                };
                                            $.valHooks[type] = {
                                                get: function (elem) {
                                                    if (elem.inputmask) {
                                                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                        var result = valhookGet(elem);
                                                        return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                                    }
                                                    return valhookGet(elem);
                                                }, set: function (elem, value) {
                                                    var result, $elem = $(elem);
                                                    return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"), result;
                                                }, inputmaskpatch: !0
                                            };
                                        }
                                    }(npt.type), function (npt) {
                                        EventRuler.on(npt, "mouseenter", function (event) {
                                            var $input = $(this);
                                            this.inputmask._valueGet() !== getBuffer().join("") && $input.trigger("setvalue");
                                        });
                                    }(npt));
                                }
                            }(input) : input.inputmask = undefined, isSupported;
                        }(elem, opts);
                        if (!1 !== isSupported && (el = elem, $el = $(el), -1 === (maxLength = el !== undefined ? el.maxLength : undefined) && (maxLength = undefined), !0 === opts.colorMask && initializeColorMask(el), android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), "rtfm" === opts.androidHack && (!0 !== opts.colorMask && initializeColorMask(el), el.type = "password")), !0 === isSupported && (EventRuler.on(el, "submit", EventHandlers.submitEvent), EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, "click", EventHandlers.clickEvent), EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent), EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), android || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop), EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop), EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
                            var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);
                            "" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split("").reverse() : initialValue.split(""));
                            var buffer = getBuffer().slice();
                            undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
                        }
                    }(el);
                    break;
                case"format":
                    return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(""), checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {
                        value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {action: "getmetadata"}, maskset, opts)
                    } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
                case"isValid":
                    actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");
                    for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;
                    return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");
                case"getemptymask":
                    return getBufferTemplate().join("");
                case"remove":
                    if (el && el.inputmask) {
                        $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), EventRuler.off(el);
                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                            get: el.inputmask.__valueGet,
                            set: el.inputmask.__valueSet,
                            configurable: !0
                        }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined;
                    }
                    return el;
                case"getmetadata":
                    if ($.isArray(maskset.metadata)) {
                        var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                        return $.each(maskset.metadata, function (ndx, mtdt) {
                            if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                        }), maskTarget;
                    }
                    return maskset.metadata;
            }
        }

        var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua),
            iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;
        return Inputmask.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {start: "[", end: "]"},
                quantifiermarker: {start: "{", end: "}"},
                groupmarker: {start: "(", end: ")"},
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: $.noop,
                onincomplete: $.noop,
                oncleared: $.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: $.noop,
                onBeforeMask: null,
                onBeforePaste: function (pastedValue, opts) {
                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: $.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: undefined,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "password"],
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                canClearPosition: $.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: undefined,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1,
                importDataAttributes: !0
            },
            definitions: {
                "9": {validator: "[0-9１-９]", cardinality: 1, definitionSymbol: "*"},
                a: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, definitionSymbol: "*"},
                "*": {validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1}
            },
            aliases: {},
            masksCache: {},
            mask: function (elems) {
                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                    if (!0 === opts.importDataAttributes) {
                        var option, dataoptions, optionData, p, importOption = function (option, optionData) {
                            null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), userOptions[option] = optionData);
                        }, attrOptions = npt.getAttribute(dataAttribute);
                        if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("'", "g"), '"'), dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) if ("alias" === p.toLowerCase()) {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                        importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);
                        for (option in opts) {
                            if (dataoptions) {
                                optionData = undefined;
                                for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                                    optionData = dataoptions[p];
                                    break;
                                }
                            }
                            importOption(option, optionData);
                        }
                    }
                    return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), opts.isRTL = !0), opts;
                }

                var that = this;
                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
                    var scopedOpts = $.extend(!0, {}, that.opts);
                    importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {action: "mask"}));
                }), elems && elems[0] ? elems[0].inputmask || this : this;
            },
            option: function (options, noremask) {
                return "string" == typeof options ? this.opts[options] : "object" === (void 0 === options ? "undefined" : _typeof(options)) ? ($.extend(this.userOptions, options), this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
            },
            unmaskedvalue: function (value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                });
            },
            remove: function () {
                return maskScope.call(this, {action: "remove"});
            },
            getemptymask: function () {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {action: "getemptymask"});
            },
            hasMaskedValue: function () {
                return !this.opts.autoUnmask;
            },
            isComplete: function () {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {action: "isComplete"});
            },
            getmetadata: function () {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {action: "getmetadata"});
            },
            isValid: function (value) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "isValid",
                    value: value
                });
            },
            format: function (value, metadata) {
                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                });
            },
            analyseMask: function (mask, regexMask, opts) {
                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                    this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    };
                }

                function insertTestDefinition(mtoken, element, position) {
                    position = position !== undefined ? position : mtoken.matches.length;
                    var prevMatch = mtoken.matches[position - 1];
                    if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                        fn: new RegExp(element, opts.casing ? "i" : ""),
                        cardinality: 1,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
                        casing: null,
                        def: element,
                        placeholder: undefined,
                        nativeDef: element
                    }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function (ndx, lmnt) {
                        prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,
                            casing: null,
                            def: opts.staticDefinitionSymbol || lmnt,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                            nativeDef: lmnt
                        });
                    })), escaped = !1; else {
                        var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                        if (maskdef && !escaped) {
                            for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
                                    validator = prevalidator.validator, cardinality = prevalidator.cardinality;
                                mtoken.matches.splice(position++, 0, {
                                    fn: validator ? "string" == typeof validator ? new RegExp(validator, opts.casing ? "i" : "") : new function () {
                                        this.test = validator;
                                    }() : new RegExp("."),
                                    cardinality: cardinality || 1,
                                    optionality: mtoken.isOptional,
                                    newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                    casing: maskdef.casing,
                                    def: maskdef.definitionSymbol || element,
                                    placeholder: maskdef.placeholder,
                                    nativeDef: element
                                }), prevMatch = mtoken.matches[position - 1];
                            }
                            mtoken.matches.splice(position++, 0, {
                                fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function () {
                                    this.test = maskdef.validator;
                                }() : new RegExp("."),
                                cardinality: maskdef.cardinality,
                                optionality: mtoken.isOptional,
                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                nativeDef: element
                            });
                        } else mtoken.matches.splice(position++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,
                            casing: null,
                            def: opts.staticDefinitionSymbol || element,
                            placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                            nativeDef: element
                        }), escaped = !1;
                    }
                }

                function verifyGroupMarker(maskToken) {
                    maskToken && maskToken.matches && $.each(maskToken.matches, function (ndx, token) {
                        var nextToken = maskToken.matches[ndx + 1];
                        (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, regexMask || (insertTestDefinition(token, opts.groupmarker.start, 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker.end))), verifyGroupMarker(token);
                    });
                }

                function defaultCase() {
                    if (openenings.length > 0) {
                        if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                        }
                    } else insertTestDefinition(currentToken, m);
                }

                function reverseTokens(maskToken) {
                    maskToken.matches = maskToken.matches.reverse();
                    for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {
                        var intMatch = parseInt(match);
                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                            var qt = maskToken.matches[match];
                            maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                        }
                        maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function (st) {
                            return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start), st;
                        }(maskToken.matches[match]);
                    }
                    return maskToken;
                }

                var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken,
                    tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];
                for (regexMask && (opts.optionalmarker.start = undefined, opts.optionalmarker.end = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask);) {
                    if (m = match[0], regexMask) switch (m.charAt(0)) {
                        case"?":
                            m = "{0,1}";
                            break;
                        case"+":
                        case"*":
                            m = "{" + m + "}";
                    }
                    if (escaped) defaultCase(); else switch (m.charAt(0)) {
                        case opts.escapeChar:
                            escaped = !0, regexMask && defaultCase();
                            break;
                        case opts.optionalmarker.end:
                        case opts.groupmarker.end:
                            if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {
                                if ((currentOpeningToken = openenings[openenings.length - 1]).matches.push(openingToken), currentOpeningToken.isAlternator) {
                                    alternator = openenings.pop();
                                    for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, alternator.matches[mndx].alternatorGroup = !1;
                                    openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);
                                }
                            } else currentToken.matches.push(openingToken); else defaultCase();
                            break;
                        case opts.optionalmarker.start:
                            openenings.push(new MaskToken(!1, !0));
                            break;
                        case opts.groupmarker.start:
                            openenings.push(new MaskToken(!0));
                            break;
                        case opts.quantifiermarker.start:
                            var quantifier = new MaskToken(!1, !1, !0), mq = (m = m.replace(/[{}]/g, "")).split(","),
                                mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                                mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                            if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                                min: mq0,
                                max: mq1
                            }, openenings.length > 0) {
                                var matches = openenings[openenings.length - 1].matches;
                                (match = matches.pop()).isGroup || ((groupToken = new MaskToken(!0)).matches.push(match), match = groupToken), matches.push(match), matches.push(quantifier);
                            } else (match = currentToken.matches.pop()).isGroup || (regexMask && null === match.fn && "." === match.def && (match.fn = new RegExp(match.def, opts.casing ? "i" : "")), (groupToken = new MaskToken(!0)).matches.push(match), match = groupToken), currentToken.matches.push(match), currentToken.matches.push(quantifier);
                            break;
                        case opts.alternatormarker:
                            if (openenings.length > 0) {
                                var subToken = (currentOpeningToken = openenings[openenings.length - 1]).matches[currentOpeningToken.matches.length - 1];
                                lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();
                            } else lastMatch = currentToken.matches.pop();
                            if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), openenings.push(alternator), lastMatch.openGroup) {
                                lastMatch.openGroup = !1;
                                var alternatorGroup = new MaskToken(!0);
                                alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                            }
                            break;
                        default:
                            defaultCase();
                    }
                }
                for (; openenings.length > 0;) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
                return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
            }
        }, Inputmask.extendDefaults = function (options) {
            $.extend(!0, Inputmask.prototype.defaults, options);
        }, Inputmask.extendDefinitions = function (definition) {
            $.extend(!0, Inputmask.prototype.definitions, definition);
        }, Inputmask.extendAliases = function (alias) {
            $.extend(!0, Inputmask.prototype.aliases, alias);
        }, Inputmask.format = function (value, options, metadata) {
            return Inputmask(options).format(value, metadata);
        }, Inputmask.unmask = function (value, options) {
            return Inputmask(options).unmaskedvalue(value);
        }, Inputmask.isValid = function (value, options) {
            return Inputmask(options).isValid(value);
        }, Inputmask.remove = function (elems) {
            $.each(elems, function (ndx, el) {
                el.inputmask && el.inputmask.remove();
            });
        }, Inputmask.escapeRegex = function (str) {
            var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
        }, Inputmask.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        }, Inputmask;
    });
}, function (module, exports) {
    module.exports = jQuery;
}, function (module, exports, __webpack_require__) {
    "use strict";

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj};
    }

    __webpack_require__(4), __webpack_require__(9), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15);
    var _inputmask2 = _interopRequireDefault(__webpack_require__(1)),
        _inputmask4 = _interopRequireDefault(__webpack_require__(0)),
        _jquery2 = _interopRequireDefault(__webpack_require__(2));
    _inputmask4.default === _jquery2.default && __webpack_require__(16), window.Inputmask = _inputmask2.default;
}, function (module, exports, __webpack_require__) {
    var content = __webpack_require__(5);
    "string" == typeof content && (content = [[module.i, content, ""]]);
    var options = {hmr: !0};
    options.transform = void 0;
    __webpack_require__(7)(content, options);
    content.locals && (module.exports = content.locals);
}, function (module, exports, __webpack_require__) {
    (module.exports = __webpack_require__(6)(void 0)).push([module.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", ""]);
}, function (module, exports) {
    function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || "", cssMapping = item[3];
        if (!cssMapping) return content;
        if (useSourceMap && "function" == typeof btoa) {
            var sourceMapping = toComment(cssMapping), sourceURLs = cssMapping.sources.map(function (source) {
                return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
        }
        return [content].join("\n");
    }

    function toComment(sourceMap) {
        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))) + " */";
    }

    module.exports = function (useSourceMap) {
        var list = [];
        return list.toString = function () {
            return this.map(function (item) {
                var content = cssWithMappingToString(item, useSourceMap);
                return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
            }).join("");
        }, list.i = function (modules, mediaQuery) {
            "string" == typeof modules && (modules = [[null, modules, ""]]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0);
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), list.push(item));
            }
        }, list;
    };
}, function (module, exports, __webpack_require__) {
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (; j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
            } else {
                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
            }
        }
    }

    function listToStyles(list, options) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = options.base ? item[0] + options.base : item[0],
                part = {css: item[1], media: item[2], sourceMap: item[3]};
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {id: id, parts: [part]});
        }
        return styles;
    }

    function insertStyleElement(options, style) {
        var target = getElement(options.insertInto);
        if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling) : target.appendChild(style) : target.insertBefore(style, target.firstChild), stylesInsertedAtTop.push(style); else if ("bottom" === options.insertAt) target.appendChild(style); else {
            if ("object" != typeof options.insertAt || !options.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
            target.insertBefore(style, nextSibling);
        }
    }

    function removeStyleElement(style) {
        if (null === style.parentNode) return !1;
        style.parentNode.removeChild(style);
        var idx = stylesInsertedAtTop.indexOf(style);
        idx >= 0 && stylesInsertedAtTop.splice(idx, 1);
    }

    function createStyleElement(options) {
        var style = document.createElement("style");
        return options.attrs.type = "text/css", addAttrs(style, options.attrs), insertStyleElement(options, style), style;
    }

    function createLinkElement(options) {
        var link = document.createElement("link");
        return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", addAttrs(link, options.attrs), insertStyleElement(options, link), link;
    }

    function addAttrs(el, attrs) {
        Object.keys(attrs).forEach(function (key) {
            el.setAttribute(key, attrs[key]);
        });
    }

    function addStyle(obj, options) {
        var style, update, remove, result;
        if (options.transform && obj.css) {
            if (!(result = options.transform(obj.css))) return function () {
            };
            obj.css = result;
        }
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = createStyleElement(options)), update = applyToSingletonTag.bind(null, style, styleIndex, !1), remove = applyToSingletonTag.bind(null, style, styleIndex, !0);
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (style = createLinkElement(options), update = updateLink.bind(null, style, options), remove = function () {
            removeStyleElement(style), style.href && URL.revokeObjectURL(style.href);
        }) : (style = createStyleElement(options), update = applyToTag.bind(null, style), remove = function () {
            removeStyleElement(style);
        });
        return update(obj), function (newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }

    function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = style.childNodes;
            childNodes[index] && style.removeChild(childNodes[index]), childNodes.length ? style.insertBefore(cssNode, childNodes[index]) : style.appendChild(cssNode);
        }
    }

    function applyToTag(style, obj) {
        var css = obj.css, media = obj.media;
        if (media && style.setAttribute("media", media), style.styleSheet) style.styleSheet.cssText = css; else {
            for (; style.firstChild;) style.removeChild(style.firstChild);
            style.appendChild(document.createTextNode(css));
        }
    }

    function updateLink(link, options, obj) {
        var css = obj.css, sourceMap = obj.sourceMap,
            autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;
        (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css)), sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
        var blob = new Blob([css], {type: "text/css"}), oldSrc = link.href;
        link.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
    }

    var stylesInDom = {}, isOldIE = function (fn) {
        var memo;
        return function () {
            return void 0 === memo && (memo = fn.apply(this, arguments)), memo;
        };
    }(function () {
        return window && document && document.all && !window.atob;
    }), getElement = function (fn) {
        var memo = {};
        return function (selector) {
            if (void 0 === memo[selector]) {
                var styleTarget = fn.call(this, selector);
                if (styleTarget instanceof window.HTMLIFrameElement) try {
                    styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                    styleTarget = null;
                }
                memo[selector] = styleTarget;
            }
            return memo[selector];
        };
    }(function (target) {
        return document.querySelector(target);
    }), singleton = null, singletonCounter = 0, stylesInsertedAtTop = [], fixUrls = __webpack_require__(8);
    module.exports = function (list, options) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (options = options || {}).attrs = "object" == typeof options.attrs ? options.attrs : {}, options.singleton || (options.singleton = isOldIE()), options.insertInto || (options.insertInto = "head"), options.insertAt || (options.insertAt = "bottom");
        var styles = listToStyles(list, options);
        return addStylesToDom(styles, options), function (newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i];
                (domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle);
            }
            newList && addStylesToDom(listToStyles(newList, options), options);
            for (i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (0 === domStyle.refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    var replaceText = function () {
        var textStore = [];
        return function (index, replacement) {
            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
        };
    }();
}, function (module, exports) {
    module.exports = function (css) {
        var location = "undefined" != typeof window && window.location;
        if (!location) throw new Error("fixUrls requires window.location");
        if (!css || "string" != typeof css) return css;
        var baseUrl = location.protocol + "//" + location.host,
            currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
        return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
            var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
                return $1;
            }).replace(/^'(.*)'$/, function (o, $1) {
                return $1;
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) return fullMatch;
            var newUrl;
            return newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), "url(" + JSON.stringify(newUrl) + ")";
        });
    };
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($, Inputmask) {
        function isLeapYear(year) {
            return isNaN(year) || 29 === new Date(year, 2, 0).getDate();
        }

        return Inputmask.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y",
                placeholder: "dd/mm/yyyy",
                regex: {
                    val1pre: new RegExp("[0-3]"),
                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                    val2pre: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");
                    },
                    val2: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");
                    }
                },
                leapday: "29/02/",
                separator: "/",
                yearrange: {minyear: 1900, maxyear: 2099},
                isInYearRange: function (chrs, minyear, maxyear) {
                    if (isNaN(chrs)) return !1;
                    var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))),
                        enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                    return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);
                },
                determinebaseyear: function (minyear, maxyear, hint) {
                    var currentyear = new Date().getFullYear();
                    if (minyear > currentyear) return minyear;
                    if (maxyear < currentyear) {
                        for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint;) maxYearPrefix--;
                        var maxxYear = maxYearPrefix + maxYearPostfix;
                        return minyear > maxxYear ? minyear : maxxYear;
                    }
                    if (minyear <= currentyear && currentyear <= maxyear) {
                        for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint;) currentYearPrefix--;
                        var currentYearAndHint = currentYearPrefix + hint;
                        return currentYearAndHint < minyear ? minyear : currentYearAndHint;
                    }
                    return currentyear;
                },
                onKeyDown: function (e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()), $input.trigger("setvalue");
                    }
                },
                getFrontValue: function (mask, buffer, opts) {
                    for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {
                        var definition = opts.definitions[mask.charAt(i)];
                        definition ? (start += length, length = definition.cardinality) : length++;
                    }
                    return buffer.join("").substr(start, length);
                },
                postValidation: function (buffer, currentResult, opts) {
                    var dayMonthValue, year, bufferStr = buffer.join("");
                    return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substring(4, 10)) : (year = bufferStr.substring(6, 10), dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));
                },
                definitions: {
                    "1": {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.val1.test(chrs);
                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                }, pos: pos, c: chrs.charAt(0)
                            });
                        }, cardinality: 2, prevalidator: [{
                            validator: function (chrs, maskset, pos, strict, opts) {
                                var pchrs = chrs;
                                isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);
                                var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);
                                if (isValid && maskset.validPositions[pos] && (opts.regex.val2(opts.separator).test(chrs + maskset.validPositions[pos].input) || (maskset.validPositions[pos].input = "0" === chrs ? "1" : "0")), !strict && !isValid) {
                                    if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs, maskset.buffer[++pos] = "0", {
                                        pos: pos,
                                        c: "0"
                                    };
                                    if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0", pos++, {pos: pos};
                                }
                                return isValid;
                            }, cardinality: 1
                        }]
                    }, "2": {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                            -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                            var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                }, pos: pos, c: chrs.charAt(0)
                            });
                        }, cardinality: 2, prevalidator: [{
                            validator: function (chrs, maskset, pos, strict, opts) {
                                isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);
                                var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                                -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                                var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);
                                return isValid && maskset.validPositions[pos] && (opts.regex.val2(opts.separator).test(chrs + maskset.validPositions[pos].input) || (maskset.validPositions[pos].input = "0" === chrs ? "1" : "0")), strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", pos++, {pos: pos});
                            }, cardinality: 1
                        }]
                    }, y: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        }, cardinality: 4, prevalidator: [{
                            validator: function (chrs, maskset, pos, strict, opts) {
                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                                if (!strict && !isValid) {
                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);
                                    if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), {pos: pos};
                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2), isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), maskset.buffer[pos++] = yearPrefix.charAt(1), {pos: pos};
                                }
                                return isValid;
                            }, cardinality: 1
                        }, {
                            validator: function (chrs, maskset, pos, strict, opts) {
                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                                if (!strict && !isValid) {
                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                                    if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), {pos: pos};
                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0), maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), {
                                        refreshFromBuffer: {
                                            start: pos - 3,
                                            end: pos
                                        }, pos: pos
                                    };
                                }
                                return isValid;
                            }, cardinality: 2
                        }, {
                            validator: function (chrs, maskset, pos, strict, opts) {
                                return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            }, cardinality: 3
                        }]
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy", alias: "dd/mm/yyyy", regex: {
                    val2pre: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    }, val2: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                }, leapday: "02/29/", onKeyDown: function (e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), $input.trigger("setvalue");
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                leapday: "/02/29",
                onKeyDown: function (e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()), $input.trigger("setvalue");
                    }
                }
            },
            "dd.mm.yyyy": {
                mask: "1.2.y",
                placeholder: "dd.mm.yyyy",
                leapday: "29.02.",
                separator: ".",
                alias: "dd/mm/yyyy"
            },
            "dd-mm-yyyy": {
                mask: "1-2-y",
                placeholder: "dd-mm-yyyy",
                leapday: "29-02-",
                separator: "-",
                alias: "dd/mm/yyyy"
            },
            "mm.dd.yyyy": {
                mask: "1.2.y",
                placeholder: "mm.dd.yyyy",
                leapday: "02.29.",
                separator: ".",
                alias: "mm/dd/yyyy"
            },
            "mm-dd-yyyy": {
                mask: "1-2-y",
                placeholder: "mm-dd-yyyy",
                leapday: "02-29-",
                separator: "-",
                alias: "mm/dd/yyyy"
            },
            "yyyy.mm.dd": {
                mask: "y.1.2",
                placeholder: "yyyy.mm.dd",
                leapday: ".02.29",
                separator: ".",
                alias: "yyyy/mm/dd"
            },
            "yyyy-mm-dd": {
                mask: "y-1-2",
                placeholder: "yyyy-mm-dd",
                leapday: "-02-29",
                separator: "-",
                alias: "yyyy/mm/dd"
            },
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0", maskset.buffer[pos] = "0", {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos
                                }, c: "0"
                            };
                            var isValid = opts.regex.hrs.test(chrs);
                            if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || -1 !== "-.:".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0", maskset.buffer[pos] = chrs.charAt(0), pos++, {
                                refreshFromBuffer: {
                                    start: pos - 2,
                                    end: pos
                                }, pos: pos, c: opts.timeseparator
                            };
                            if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {
                                var tmp = parseInt(chrs, 10);
                                return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p", maskset.buffer[pos + 6] = "m"), (tmp -= 12) < 10 ? (maskset.buffer[pos] = tmp.toString(), maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1), maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: pos - 1,
                                        end: pos + 6
                                    }, c: maskset.buffer[pos]
                                };
                            }
                            return isValid;
                        }, cardinality: 2, prevalidator: [{
                            validator: function (chrs, maskset, pos, strict, opts) {
                                var isValid = opts.regex.hrspre.test(chrs);
                                return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", pos++, {pos: pos});
                            }, cardinality: 1
                        }]
                    },
                    s: {
                        validator: "[0-5][0-9]",
                        cardinality: 2,
                        prevalidator: [{
                            validator: function (chrs, maskset, pos, strict, opts) {
                                var isValid = opts.regex.mspre.test(chrs);
                                return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", pos++, {pos: pos});
                            }, cardinality: 1
                        }]
                    },
                    t: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return opts.regex.ampm.test(chrs + "m");
                        }, casing: "lower", cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {
                mask: "1/2/y h:s t\\m",
                placeholder: "dd/mm/yyyy hh:mm xm",
                alias: "datetime",
                hourFormat: "12"
            },
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m",
                placeholder: "mm/dd/yyyy hh:mm xm",
                alias: "datetime12",
                regex: {
                    val2pre: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    }, val2: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                },
                leapday: "02/29/",
                onKeyDown: function (e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                        var today = new Date();
                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), $input.trigger("setvalue");
                    }
                }
            },
            "hh:mm t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
            "h:s t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
            "hh:mm:ss": {mask: "h:s:s", placeholder: "hh:mm:ss", alias: "datetime", autoUnmask: !1},
            "hh:mm": {mask: "h:s", placeholder: "hh:mm", alias: "datetime", autoUnmask: !1},
            date: {alias: "dd/mm/yyyy"},
            "mm/yyyy": {mask: "1/y", placeholder: "mm/yyyy", leapday: "donotuse", separator: "/", alias: "mm/dd/yyyy"},
            shamsi: {
                regex: {
                    val2pre: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");
                    }, val2: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                },
                yearrange: {minyear: 1300, maxyear: 1499},
                mask: "y/1/2",
                leapday: "/12/30",
                placeholder: "yyyy/mm/dd",
                alias: "mm/dd/yyyy",
                clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s",
                placeholder: "yyyy-mm-dd hh:mm:ss",
                alias: "datetime",
                separator: "-",
                leapday: "-02-29",
                regex: {
                    val2pre: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                    }, val2: function (separator) {
                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                },
                onKeyDown: function (e, buffer, caretPos, opts) {
                }
            }
        }), Inputmask;
    });
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return window;
    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return document;
    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($, Inputmask) {
        return Inputmask.extendDefinitions({
            A: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
            "&": {validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
            "#": {validator: "[0-9A-Fa-f]", cardinality: 1, casing: "upper"}
        }), Inputmask.extendAliases({
            url: {
                definitions: {i: {validator: ".", cardinality: 1}},
                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
                insertMode: !1,
                autoUnmask: !1,
                inputmode: "url"
            },
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
                definitions: {
                    i: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                        }, cardinality: 1
                    }
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function (pastedValue, opts) {
                    return (pastedValue = pastedValue.toLowerCase()).replace("mailto:", "");
                },
                definitions: {
                    "*": {validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]", cardinality: 1, casing: "lower"},
                    "-": {validator: "[0-9A-Za-z-]", cardinality: 1, casing: "lower"}
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return maskedValue;
                },
                inputmode: "email"
            },
            mac: {mask: "##:##:##:##:##:##"},
            vin: {
                mask: "V{13}9{4}",
                definitions: {V: {validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", cardinality: 1, casing: "upper"}},
                clearIncomplete: !0,
                autoUnmask: !0
            }
        }), Inputmask;
    });
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($, Inputmask, undefined) {
        function autoEscape(txt, opts) {
            for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
            return escapedTxt;
        }

        return Inputmask.extendAliases({
            numeric: {
                mask: function (opts) {
                    if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), isFinite(opts.integerDigits))) {
                        var seps = Math.floor(opts.integerDigits / opts.groupSize),
                            mod = opts.integerDigits % opts.groupSize;
                        opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), opts.integerDigits < 1 && (opts.integerDigits = "*");
                    }
                    opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
                    var mask = "[+]";
                    if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", opts.digits !== undefined) {
                        opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;
                        var dq = opts.digits.toString().split(",");
                        isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");
                    }
                    return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {front: "-", back: ""},
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function (buffer, pos, c, isSelection, opts) {
                    if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, "" === buffer.join("") || {
                        caret: pos,
                        dopost: !0
                    });
                    if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                        var radixPos = $.inArray(opts.radixPoint, buffer);
                        if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {caret: radixPos + 1};
                    }
                    return !0;
                },
                postValidation: function (buffer, currentResult, opts) {
                    var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                    if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;
                    var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos,
                        maskedValue = buffer.slice();
                    opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());
                    var charAtPos = maskedValue[caretPos];
                    if (charAtPos === opts.groupSeparator && (charAtPos = maskedValue[caretPos += 1]), caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                    charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), prefix = prefix.join(""), suffix = suffix.join("");
                    var processValue = maskedValue.join("").replace(prefix, "");
                    if (processValue = processValue.replace(suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\?/g, "")), processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), "" !== processValue) {
                        if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {
                            var radixPosition = $.inArray(opts.radixPoint, processValue),
                                rpb = $.inArray(opts.radixPoint, maskedValue);
                            -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);
                            for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                        }
                        if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(""); else {
                            var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                            processValue = Inputmask(function (buffer, opts) {
                                var postMask = "";
                                if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {
                                    var radixSplit = buffer.join("").split(opts.radixPoint);
                                    radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}");
                                }
                                return postMask;
                            }(processValue, opts), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {"*": {validator: "[0-9?]", cardinality: 1}}
                            }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);
                        }
                    }
                    if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, processValue += opts.negationSymbol.back), processValue = processValue.split(""), charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) (caretPos = $.inArray("?", processValue)) > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                        var newCaretPos = $.inArray(charAtPos, processValue);
                        -1 !== newCaretPos && (caretPos = newCaretPos);
                    }
                    opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());
                    var rslt = {
                        caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                        buffer: processValue,
                        refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                    };
                    return rslt.refreshFromBuffer ? rslt : currentResult;
                },
                onBeforeWrite: function (e, buffer, caretPos, opts) {
                    if (e) switch (e.type) {
                        case"keydown":
                            return opts.postValidation(buffer, {caret: caretPos, dopost: !0}, opts);
                        case"blur":
                        case"checkval":
                            var unmasked;
                            if (function (opts) {
                                opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), opts.parseMinMaxOptions = "done");
                            }(opts), null !== opts.min || null !== opts.max) {
                                if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {unmaskAsNumber: !0})), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {
                                    caret: caretPos,
                                    dopost: !0,
                                    placeholder: "0"
                                }, opts);
                                if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {
                                    caret: caretPos,
                                    dopost: !0,
                                    placeholder: "0"
                                }, opts);
                            }
                            return opts.postValidation(buffer, {
                                caret: caretPos,
                                placeholder: "0",
                                event: "blur"
                            }, opts);
                        case"_checkval":
                            return {caret: caretPos};
                    }
                },
                regex: {
                    integerPart: function (opts, emptyCheck) {
                        return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                    }, integerNPart: function (opts) {
                        return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                    }
                },
                definitions: {
                    "~": {
                        validator: function (chrs, maskset, pos, strict, opts, isSelection) {
                            var isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                            if (!0 === isValid) {
                                if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {
                                    var processValue = maskset.buffer.join(""),
                                        pvRadixSplit = (processValue = (processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).split(opts.radixPoint);
                                    pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                    var bufferTemplate = maskset._buffer.join("");
                                    for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$");) bufferTemplate = bufferTemplate.slice(1);
                                    isValid = (processValue = (processValue = processValue.replace(bufferTemplate, "")).split(""))[pos] === undefined ? {
                                        pos: pos,
                                        remove: pos
                                    } : {pos: pos};
                                }
                            } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = "0", isValid = {pos: pos + 1});
                            return isValid;
                        }, cardinality: 1
                    }, "+": {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                        }, cardinality: 1, placeholder: ""
                    }, "-": {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return opts.allowMinus && chrs === opts.negationSymbol.back;
                        }, cardinality: 1, placeholder: ""
                    }, ":": {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]",
                                isValid = new RegExp(radix).test(chrs);
                            return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {caret: pos + 1}), isValid;
                        }, cardinality: 1, placeholder: function (opts) {
                            return opts.radixPoint;
                        }
                    }
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), Number(processValue)) : processValue;
                },
                isComplete: function (buffer, opts) {
                    var maskedValue = buffer.join("");
                    if (buffer.slice().join("") !== maskedValue) return !1;
                    var processValue = maskedValue.replace(opts.prefix, "");
                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), isFinite(processValue);
                },
                onBeforeMask: function (initialValue, opts) {
                    if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), "" !== opts.radixPoint && isFinite(initialValue)) {
                        var vs = initialValue.split("."),
                            groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
                        2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
                    }
                    var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\./g);
                    if (initialValue = dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, "")).replace(",", opts.radixPoint) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, "")).replace(".", opts.radixPoint) : initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue.replace(/,/g, "") : initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {
                        var decPart = initialValue.split(opts.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(opts.digits) < decPart.toString().length) {
                            var digitsFactor = Math.pow(10, parseInt(opts.digits));
                            initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), initialValue = (initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor).toString().replace(".", opts.radixPoint);
                        }
                    }
                    return initialValue;
                },
                canClearPosition: function (maskset, position, lvp, strict, opts) {
                    var vp = maskset.validPositions[position],
                        canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;
                    return !canClear || "+" !== vp.match.nativeDef && "-" !== vp.match.nativeDef || (opts.isNegative = !1), canClear;
                },
                onKeyDown: function (e, buffer, caretPos, opts) {
                    var $input = $(this);
                    if (e.ctrlKey) switch (e.keyCode) {
                        case Inputmask.keyCode.UP:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
                            break;
                        case Inputmask.keyCode.DOWN:
                            $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
                    }
                }
            },
            currency: {
                prefix: "$ ",
                groupSeparator: ",",
                alias: "numeric",
                placeholder: "0",
                autoGroup: !0,
                digits: 2,
                digitsOptional: !1,
                clearMaskOnLostFocus: !1
            },
            decimal: {alias: "numeric"},
            integer: {alias: "numeric", digits: 0, radixPoint: ""},
            percentage: {
                alias: "numeric",
                digits: 2,
                digitsOptional: !0,
                radixPoint: ".",
                placeholder: "0",
                autoGroup: !1,
                min: 0,
                max: 100,
                suffix: " %",
                allowMinus: !1
            }
        }), Inputmask;
    });
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($, Inputmask) {
        function maskSort(a, b) {
            var maska = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                maskb = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                maskas = (a.mask || a).split("#")[0], maskbs = (b.mask || b).split("#")[0];
            return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);
        }

        var analyseMaskBase = Inputmask.prototype.analyseMask;
        return Inputmask.prototype.analyseMask = function (mask, regexMask, opts) {
            function reduceVariations(masks, previousVariation, previousmaskGroup) {
                previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
                for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) maskGroup[variation = (mask = masks[i].mask || masks[i]).substr(0, 1)] = maskGroup[variation] || [], maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
                for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
            }

            function rebuild(maskGroup) {
                var mask = "", submasks = [];
                for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));
                return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end, mask;
            }

            var maskGroups = {};
            return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (reduceVariations((mask = mask.substr(1, mask.length - 2)).split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)), mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
        }, Inputmask.extendAliases({
            abstractphone: {
                groupmarker: {start: "<", end: ">"},
                countrycode: "",
                phoneCodes: [],
                mask: function (opts) {
                    return opts.definitions = {"#": Inputmask.prototype.definitions[9]}, opts.phoneCodes.sort(maskSort);
                },
                keepStatic: !0,
                onBeforeMask: function (value, opts) {
                    var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), processedValue;
                },
                onUnMask: function (maskedValue, unmaskedValue, opts) {
                    return maskedValue.replace(/[()#-]/g, "");
                },
                inputmode: "tel"
            }
        }), Inputmask;
    });
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    "function" == typeof Symbol && Symbol.iterator;
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($, Inputmask) {
        return Inputmask.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function (buffer, opts) {
                    return new RegExp(opts.regex, opts.casing ? "i" : "").test(buffer.join(""));
                },
                definitions: {
                    r: {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            function RegexToken(isGroup, isQuantifier) {
                                this.matches = [], this.isGroup = isGroup || !1, this.isQuantifier = isQuantifier || !1, this.quantifier = {
                                    min: 1,
                                    max: 1
                                }, this.repeaterPart = void 0;
                            }

                            function validateRegexToken(token, fromGroup) {
                                var isvalid = !1;
                                fromGroup && (regexPart += "(", openGroupCount++);
                                for (var mndx = 0; mndx < token.matches.length; mndx++) {
                                    var matchToken = token.matches[mndx];
                                    if (!0 === matchToken.isGroup) isvalid = validateRegexToken(matchToken, !0); else if (!0 === matchToken.isQuantifier) {
                                        var crrntndx = $.inArray(matchToken, token.matches),
                                            matchGroup = token.matches[crrntndx - 1], regexPartBak = regexPart;
                                        if (isNaN(matchToken.quantifier.max)) {
                                            for (; matchToken.repeaterPart && matchToken.repeaterPart !== regexPart && matchToken.repeaterPart.length > regexPart.length && !(isvalid = validateRegexToken(matchGroup, !0));) ;
                                            (isvalid = isvalid || validateRegexToken(matchGroup, !0)) && (matchToken.repeaterPart = regexPart), regexPart = regexPartBak + matchToken.quantifier.max;
                                        } else {
                                            for (var i = 0, qm = matchToken.quantifier.max - 1; i < qm && !(isvalid = validateRegexToken(matchGroup, !0)); i++) ;
                                            regexPart = regexPartBak + "{" + matchToken.quantifier.min + "," + matchToken.quantifier.max + "}";
                                        }
                                    } else if (void 0 !== matchToken.matches) for (var k = 0; k < matchToken.length && !(isvalid = validateRegexToken(matchToken[k], fromGroup)); k++) ; else {
                                        var testExp;
                                        if ("[" == matchToken.charAt(0)) {
                                            testExp = regexPart, testExp += matchToken;
                                            for (j = 0; j < openGroupCount; j++) testExp += ")";
                                            isvalid = (exp = new RegExp("^(" + testExp + ")$", opts.casing ? "i" : "")).test(bufferStr);
                                        } else for (var l = 0, tl = matchToken.length; l < tl; l++) if ("\\" !== matchToken.charAt(l)) {
                                            testExp = regexPart, testExp = (testExp += matchToken.substr(0, l + 1)).replace(/\|$/, "");
                                            for (var j = 0; j < openGroupCount; j++) testExp += ")";
                                            var exp = new RegExp("^(" + testExp + ")$", opts.casing ? "i" : "");
                                            if (isvalid = exp.test(bufferStr)) break;
                                        }
                                        regexPart += matchToken;
                                    }
                                    if (isvalid) break;
                                }
                                return fromGroup && (regexPart += ")", openGroupCount--), isvalid;
                            }

                            var bufferStr, groupToken, cbuffer = maskset.buffer.slice(), regexPart = "", isValid = !1,
                                openGroupCount = 0;
                            null === opts.regexTokens && function () {
                                var match, m, currentToken = new RegexToken(), opengroups = [];
                                for (opts.regexTokens = []; match = opts.tokenizer.exec(opts.regex);) switch ((m = match[0]).charAt(0)) {
                                    case"(":
                                        opengroups.push(new RegexToken(!0));
                                        break;
                                    case")":
                                        groupToken = opengroups.pop(), opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(groupToken) : currentToken.matches.push(groupToken);
                                        break;
                                    case"{":
                                    case"+":
                                    case"*":
                                        var quantifierToken = new RegexToken(!1, !0),
                                            mq = (m = m.replace(/[{}]/g, "")).split(","),
                                            mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                                            mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                                        if (quantifierToken.quantifier = {min: mq0, max: mq1}, opengroups.length > 0) {
                                            var matches = opengroups[opengroups.length - 1].matches;
                                            (match = matches.pop()).isGroup || ((groupToken = new RegexToken(!0)).matches.push(match), match = groupToken), matches.push(match), matches.push(quantifierToken);
                                        } else (match = currentToken.matches.pop()).isGroup || ((groupToken = new RegexToken(!0)).matches.push(match), match = groupToken), currentToken.matches.push(match), currentToken.matches.push(quantifierToken);
                                        break;
                                    default:
                                        opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(m) : currentToken.matches.push(m);
                                }
                                currentToken.matches.length > 0 && opts.regexTokens.push(currentToken);
                            }(), cbuffer.splice(pos, 0, chrs), bufferStr = cbuffer.join("");
                            for (var i = 0; i < opts.regexTokens.length; i++) {
                                var regexToken = opts.regexTokens[i];
                                if (isValid = validateRegexToken(regexToken, regexToken.isGroup)) break;
                            }
                            return isValid;
                        }, cardinality: 1
                    }
                }
            }
        }), Inputmask;
    });
}, function (module, exports, __webpack_require__) {
    "use strict";
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__,
        _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    !function (factory) {
        __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(1)], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
    }(function ($, Inputmask) {
        return void 0 === $.fn.inputmask && ($.fn.inputmask = function (fn, options) {
            var nptmask, input = this[0];
            if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
                case"unmaskedvalue":
                    return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
                case"remove":
                    return this.each(function () {
                        this.inputmask && this.inputmask.remove();
                    });
                case"getemptymask":
                    return input && input.inputmask ? input.inputmask.getemptymask() : "";
                case"hasMaskedValue":
                    return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();
                case"isComplete":
                    return !input || !input.inputmask || input.inputmask.isComplete();
                case"getmetadata":
                    return input && input.inputmask ? input.inputmask.getmetadata() : void 0;
                case"setvalue":
                    $(input).val(options), input && void 0 === input.inputmask && $(input).triggerHandler("setvalue");
                    break;
                case"option":
                    if ("string" != typeof options) return this.each(function () {
                        if (void 0 !== this.inputmask) return this.inputmask.option(options);
                    });
                    if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
                    break;
                default:
                    return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
                        nptmask.mask(this);
                    });
            } else {
                if ("object" == (void 0 === fn ? "undefined" : _typeof(fn))) return nptmask = new Inputmask(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(fn);
                    nptmask.mask(this);
                }) : this.each(function () {
                    nptmask.mask(this);
                });
                if (void 0 === fn) return this.each(function () {
                    (nptmask = new Inputmask(options)).mask(this);
                });
            }
        }), $.fn.inputmask;
    });
}]);
;