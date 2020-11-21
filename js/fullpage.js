/*!
 * fullPage 3.0.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function (e, t, n, o, i) {
    "function" == typeof define && define.amd ? define(function () {
        return e.fullpage = o(t, n), e.fullpage
    }) : "object" == typeof exports ? module.exports = o(t, n) : t.fullpage = o(t, n)
}(this, window, document, function (e, t) {
    "use strict";
    var n = "fullpage-wrapper", o = "." + n, i = "fp-responsive", r = "fp-notransition", l = "fp-destroyed",
        a = "fp-enabled", s = "fp-viewing", c = "active", u = "." + c, f = "fp-completely", d = "." + f, v = ".section",
        p = "fp-section", h = "." + p, g = h + u, m = "fp-tableCell", S = "." + m, b = "fp-auto-height",
        y = "fp-normal-scroll", w = "fp-nav", E = "#" + w, L = "fp-tooltip", x = "." + L, T = "fp-show-active",
        A = ".slide", k = "fp-slide", M = "." + k, O = M + u, C = "fp-slides", H = "." + C, I = "fp-slidesContainer",
        R = "." + I, B = "fp-table", z = "fp-slidesNav", N = "." + z, j = N + " a", P = "fp-controlArrow", D = "." + P,
        V = "fp-prev", Y = P + " " + V, U = D + ("." + V), F = "fp-next", W = P + " " + F, X = D + ".fp-next";

    function _(t, n) {
        e.console && e.console[t] && e.console[t]("fullPage: " + n)
    }

    function K(e, n) {
        return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null
    }

    function q(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) for (var o in n) n.hasOwnProperty(o) && ("object" == typeof n[o] && null != n[o] ? e[o] = q(e[o], n[o]) : e[o] = n[o])
        }
        return e
    }

    function Q(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className))
    }

    function G() {
        return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight
    }

    function $(e, t) {
        var n;
        for (n in e = re(e), t) if (t.hasOwnProperty(n) && null !== n) for (var o = 0; o < e.length; o++) {
            e[o].style[n] = t[n]
        }
        return e
    }

    function J(e, t, n) {
        for (var o = e[n]; o && !xe(o, t);) o = o[n];
        return o
    }

    function Z(e, t) {
        return J(e, t, "previousElementSibling")
    }

    function ee(e, t) {
        return J(e, t, "nextElementSibling")
    }

    function te(e) {
        return e.previousElementSibling
    }

    function ne(e) {
        return e.nextElementSibling
    }

    function oe(e) {
        return e[e.length - 1]
    }

    function ie(e, t) {
        e = se(e) ? e[0] : e;
        for (var n = null != t ? K(t, e.parentNode) : e.parentNode.childNodes, o = 0, i = 0; i < n.length; i++) {
            if (n[i] == e) return o;
            1 == n[i].nodeType && o++
        }
        return -1
    }

    function re(e) {
        return se(e) ? e : [e]
    }

    function le(e) {
        e = re(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e
    }

    function ae(e) {
        e = re(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e
    }

    function se(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
    }

    function ce(e, t) {
        e = re(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
        }
        return e
    }

    function ue(e, t) {
        e = re(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.classList ? r.classList.remove(t) : r.className = r.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }
        }
        return e
    }

    function fe(e, t) {
        t.appendChild(e)
    }

    function de(e, n, o) {
        var i;
        n = n || t.createElement("div");
        for (var r = 0; r < e.length; r++) {
            var l = e[r];
            (o && !r || !o) && (i = n.cloneNode(!0), l.parentNode.insertBefore(i, l)), i.appendChild(l)
        }
        return e
    }

    function ve(e, t) {
        de(e, t, !0)
    }

    function pe(e, t) {
        for ("string" == typeof t && (t = Ae(t)), e.appendChild(t); e.firstChild !== t;) t.appendChild(e.firstChild)
    }

    function he(e, t) {
        return e && 1 === e.nodeType ? xe(e, t) ? e : he(e.parentNode, t) : null
    }

    function ge(e, t) {
        Se(e, e.nextSibling, t)
    }

    function me(e, t) {
        Se(e, e, t)
    }

    function Se(e, t, n) {
        se(n) || ("string" == typeof n && (n = Ae(n)), n = [n]);
        for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t)
    }

    function be() {
        var n = t.documentElement;
        return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0)
    }

    function ye(e) {
        return Array.prototype.filter.call(e.parentNode.children, function (t) {
            return t !== e
        })
    }

    function we(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }

    function Ee(e) {
        if ("function" == typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t
    }

    function Le(n, o, i) {
        var r;
        i = void 0 === i ? {} : i, "function" == typeof e.CustomEvent ? r = new CustomEvent(o, {detail: i}) : (r = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, i), n.dispatchEvent(r)
    }

    function xe(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
    }

    function Te(e, t) {
        if ("boolean" == typeof t) for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e
    }

    function Ae(e) {
        var n = t.createElement("div");
        return n.innerHTML = e.trim(), n.firstChild
    }

    function ke(e) {
        e = re(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
        }
    }

    function Me(e, t, n) {
        for (var o = e[n], i = []; o;) (xe(o, t) || null == t) && i.push(o), o = o[n];
        return i
    }

    function Oe(e, t) {
        return Me(e, t, "nextElementSibling")
    }

    function Ce(e, t) {
        return Me(e, t, "previousElementSibling")
    }

    return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (t, n) {
        n = n || e;
        for (var o = 0; o < this.length; o++) t.call(n, this[o], o, this)
    }), e.fp_utils = {
        $: K,
        deepExtend: q,
        hasClass: Q,
        getWindowHeight: G,
        css: $,
        until: J,
        prevUntil: Z,
        nextUntil: ee,
        prev: te,
        next: ne,
        last: oe,
        index: ie,
        getList: re,
        hide: le,
        show: ae,
        isArrayOrList: se,
        addClass: ce,
        removeClass: ue,
        appendTo: fe,
        wrap: de,
        wrapAll: ve,
        wrapInner: pe,
        closest: he,
        after: ge,
        before: me,
        insertBefore: Se,
        getScrollTop: be,
        siblings: ye,
        preventDefault: we,
        isFunction: Ee,
        trigger: Le,
        matches: xe,
        toggle: Te,
        createElementFromHTML: Ae,
        remove: ke,
        filter: function (e, t) {
            Array.prototype.filter.call(e, t)
        },
        untilAll: Me,
        nextAll: Oe,
        prevAll: Ce
    }, function (P, F) {
        var J = F && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE").test(F.licenseKey) || t.domain.indexOf("alvarotrigo.com") > -1;
        if (!Q(K("html"), a)) {
            var re = K("html, body"), se = K("body")[0], de = {};
            F = q({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {type: "reveal", percentage: 62, property: "translate"},
                sectionSelector: v,
                slideSelector: A,
                v2compatible: !1,
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, F);
            var Se, Me, He, Ie, Re = !1,
                Be = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                ze = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                Ne = "string" == typeof P ? K(P)[0] : P, je = G(), Pe = !1, De = !0, Ve = !0, Ye = [],
                Ue = {m: {up: !0, down: !0, left: !0, right: !0}};
            Ue.k = q({}, Ue.m);
            var Fe, We, Xe, _e, Ke, qe, Qe, Ge, $e = e.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }, Je = {
                    touchmove: "ontouchmove" in e ? "touchmove" : $e.move,
                    touchstart: "ontouchstart" in e ? "touchstart" : $e.down
                },
                Ze = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                et = q({}, F);
            jn(), e.fp_easings = q(e.fp_easings, {
                easeInOutCubic: function (e, t, n, o) {
                    return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                }
            }), Ne && (de.version = "3.0.2", de.setAutoScrolling = ft, de.setRecordHistory = dt, de.setScrollingSpeed = vt, de.setFitToSection = pt, de.setLockAnchors = function (e) {
                F.lockAnchors = e
            }, de.setMouseWheelScrolling = ht, de.setAllowScrolling = gt, de.setKeyboardScrolling = mt, de.moveSectionUp = St, de.moveSectionDown = bt, de.silentMoveTo = yt, de.moveTo = wt, de.moveSlideRight = Et, de.moveSlideLeft = Lt, de.fitToSection = Ht, de.reBuild = xt, de.setResponsive = Tt, de.getFullpageData = F, de.destroy = function (n) {
                ft(!1, "internal"), gt(!1), mt(!1), ce(Ne, l), clearTimeout(_e), clearTimeout(Xe), clearTimeout(We), clearTimeout(Ke), clearTimeout(qe), e.removeEventListener("scroll", Ct), e.removeEventListener("hashchange", en), e.removeEventListener("resize", hn), t.removeEventListener("keydown", nn), t.removeEventListener("keyup", rn);
                var o = [un, on, sn, fn];
                ["click", "touchstart"].forEach(function (e) {
                    o.forEach(function (n) {
                        t.removeEventListener(e, n)
                    })
                }), ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                    t.removeEventListener(e, kt, !0)
                }), clearTimeout(_e), clearTimeout(Xe), n && (Rn(0), K("img[data-src], source[data-src], audio[data-src], iframe[data-src]", Ne).forEach(function (e) {
                    Kt(e, "src")
                }), K("img[data-srcset]").forEach(function (e) {
                    Kt(e, "srcset")
                }), ke(K(E + ", " + N + ", " + D)), $(K(h), {
                    height: "",
                    "background-color": "",
                    padding: ""
                }), $(K(M), {width: ""}), $(Ne, {
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), $(re, {
                    overflow: "",
                    height: ""
                }), ue(K("html"), a), ue(se, i), se.className.split(/\s+/).forEach(function (e) {
                    0 === e.indexOf(s) && ue(se, e)
                }), K(h + ", " + M).forEach(function (e) {
                    F.scrollOverflowHandler && F.scrollOverflowHandler.remove(e), ue(e, B + " " + c + " " + f);
                    var t = e.getAttribute("data-fp-styles");
                    t && e.setAttribute("style", e.getAttribute("data-fp-styles"))
                }), Sn(Ne), [S, R, H].forEach(function (e) {
                    K(e, Ne).forEach(function (e) {
                        e.outerHTML = e.innerHTML
                    })
                }), $(Ne, {
                    "-webkit-transition": "none",
                    transition: "none"
                }), K("html")[0].scrollTo(0, 0), K("body")[0].scrollTo(0, 0), [p, k, I].forEach(function (e) {
                    ue(K("." + e), e)
                }))
            }, de.getActiveSection = function () {
                return new Yn(K(g)[0])
            }, de.getActiveSlide = function () {
                return Wt(K(O, K(g)[0])[0])
            }, de.test = {
                top: "0px", translate3d: "translate3d(0px, 0px, 0px)", translate3dH: function () {
                    for (var e = [], t = 0; t < K(F.sectionSelector, Ne).length; t++) e.push("translate3d(0px, 0px, 0px)");
                    return e
                }(), left: function () {
                    for (var e = [], t = 0; t < K(F.sectionSelector, Ne).length; t++) e.push(0);
                    return e
                }(), options: F, setAutoScrolling: ft
            }, de.shared = {afterRenderActions: Ot}, e.fullpage_api = de, F.css3 && (F.css3 = function () {
                var n, o = t.createElement("p"), i = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                for (var r in o.style.display = "block", t.body.insertBefore(o, null), i) void 0 !== o.style[r] && (o.style[r] = "translate3d(1px,1px,1px)", n = e.getComputedStyle(o).getPropertyValue(i[r]));
                return t.body.removeChild(o), void 0 !== n && n.length > 0 && "none" !== n
            }()), F.scrollBar = F.scrollBar || F.hybrid, function () {
                if (!F.anchors.length) {
                    var e = "[data-anchor]", t = K(F.sectionSelector.split(",").join(e + ",") + e, Ne);
                    t.length && t.forEach(function (e) {
                        F.anchors.push(e.getAttribute("data-anchor").toString())
                    })
                }
                if (!F.navigationTooltips.length) {
                    var e = "[data-tooltip]", n = K(F.sectionSelector.split(",").join(e + ",") + e, Ne);
                    n.length && n.forEach(function (e) {
                        F.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                    })
                }
            }(), function () {
                $(Ne, {
                    height: "100%",
                    position: "relative"
                }), ce(Ne, n), ce(K("html"), a), je = G(), ue(Ne, l), ce(K(F.sectionSelector, Ne), p), ce(K(F.slideSelector, Ne), k);
                for (var e = K(h), i = 0; i < e.length; i++) {
                    var r = i, s = e[i], u = K(M, s), f = u.length;
                    s.setAttribute("data-fp-styles", s.getAttribute("style")), m = s, (S = r) || null != K(g)[0] || ce(m, c), Ie = K(g)[0], $(m, {height: je + "px"}), F.paddingTop && $(m, {"padding-top": F.paddingTop}), F.paddingBottom && $(m, {"padding-bottom": F.paddingBottom}), void 0 !== F.sectionsColor[S] && $(m, {"background-color": F.sectionsColor[S]}), void 0 !== F.anchors[S] && m.setAttribute("data-anchor", F.anchors[S]), d = s, v = r, void 0 !== F.anchors[v] && Q(d, c) && bn(F.anchors[v], v), F.menu && F.css3 && null != he(K(F.menu)[0], o) && se.appendChild(K(F.menu)[0]), f > 0 ? Mt(s, u, f) : F.verticalCentered && wn(s)
                }
                var d, v, m, S;
                F.fixedElements && F.css3 && K(F.fixedElements).forEach(function (e) {
                    se.appendChild(e)
                }), F.navigation && function () {
                    var e = t.createElement("div");
                    e.setAttribute("id", w);
                    var n = t.createElement("ul");
                    e.appendChild(n), fe(e, se);
                    var o = K(E)[0];
                    ce(o, "fp-" + F.navigationPosition), F.showActiveTooltip && ce(o, T);
                    for (var i = "", r = 0; r < K(h).length; r++) {
                        var l = "";
                        F.anchors.length && (l = F.anchors[r]), i += '<li><a href="#' + l + '"><span></span></a>';
                        var a = F.navigationTooltips[r];
                        void 0 !== a && "" !== a && (i += '<div class="' + L + " fp-" + F.navigationPosition + '">' + a + "</div>"), i += "</li>"
                    }
                    K("ul", o)[0].innerHTML = i, $(K(E), {"margin-top": "-" + K(E)[0].offsetHeight / 2 + "px"}), ce(K("a", K("li", K(E)[0])[ie(K(g)[0], h)]), c)
                }(), K('iframe[src*="youtube.com/embed/"]', Ne).forEach(function (e) {
                    var t, n, o;
                    n = "enablejsapi=1", o = (t = e).getAttribute("src"), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                }), F.scrollOverflow ? Fe = F.scrollOverflowHandler.init(F) : Ot()
            }(), gt(!0), ft(F.autoScrolling, "internal"), gn(), Cn(), "complete" === t.readyState && Zt(), e.addEventListener("load", Zt), e.addEventListener("scroll", Ct), e.addEventListener("hashchange", en), e.addEventListener("blur", cn), e.addEventListener("resize", hn), t.addEventListener("keydown", nn), t.addEventListener("keyup", rn), ["click", "touchstart"].forEach(function (e) {
                t.addEventListener(e, function (e) {
                    var t = e.target;
                    t && he(t, E + " a") ? un.call(t, e) : xe(t, x) ? on.call(t) : xe(t, D) ? sn.call(t, e) : (xe(t, j) || null != he(t, j)) && fn.call(t, e)
                })
            }), F.normalScrollElements && (["mouseenter", "touchstart"].forEach(function (e) {
                At(e, !1)
            }), ["mouseleave", "touchend"].forEach(function (e) {
                At(e, !0)
            })));
            var tt = !1, nt = 0, ot = 0, it = 0, rt = 0, lt = 0, at = (new Date).getTime(), st = 0, ct = 0, ut = je;
            return de
        }

        function ft(e, t) {
            e || Rn(0), Nn("autoScrolling", e, t);
            var n = K(g)[0];
            if (F.autoScrolling && !F.scrollBar) $(re, {
                overflow: "hidden",
                height: "100%"
            }), dt(et.recordHistory, "internal"), $(Ne, {
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), null != n && Rn(n.offsetTop); else if ($(re, {
                overflow: "visible",
                height: "initial"
            }), dt(!1, "internal"), $(Ne, {"-ms-touch-action": "", "touch-action": ""}), null != n) {
                var o = Xt(n.offsetTop);
                o.element.scrollTo(0, o.options)
            }
        }

        function dt(e, t) {
            Nn("recordHistory", e, t)
        }

        function vt(e, t) {
            Nn("scrollingSpeed", e, t)
        }

        function pt(e, t) {
            Nn("fitToSection", e, t)
        }

        function ht(n) {
            n ? (function () {
                var n, o = "";
                e.addEventListener ? n = "addEventListener" : (n = "attachEvent", o = "on");
                var i = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == i ? t[n](o + "MozMousePixelScroll", Pt, !1) : t[n](o + i, Pt, !1)
            }(), Ne.addEventListener("mousedown", ln), Ne.addEventListener("mouseup", an)) : (t.addEventListener ? (t.removeEventListener("mousewheel", Pt, !1), t.removeEventListener("wheel", Pt, !1), t.removeEventListener("MozMousePixelScroll", Pt, !1)) : t.detachEvent("onmousewheel", Pt), Ne.removeEventListener("mousedown", ln), Ne.removeEventListener("mouseup", an))
        }

        function gt(e, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                zn(e, t, "m")
            }) : (zn(e, "all", "m"), e ? (ht(!0), (Be || ze) && (F.autoScrolling && (se.removeEventListener(Je.touchmove, Rt, {passive: !1}), se.addEventListener(Je.touchmove, Rt, {passive: !1})), K(o)[0].removeEventListener(Je.touchstart, Nt), K(o)[0].removeEventListener(Je.touchmove, Bt, {passive: !1}), K(o)[0].addEventListener(Je.touchstart, Nt), K(o)[0].addEventListener(Je.touchmove, Bt, {passive: !1}))) : (ht(!1), (Be || ze) && (F.autoScrolling && (se.removeEventListener(Je.touchmove, Bt, {passive: !1}), se.removeEventListener(Je.touchmove, Rt, {passive: !1})), K(o)[0].removeEventListener(Je.touchstart, Nt), K(o)[0].removeEventListener(Je.touchmove, Bt, {passive: !1}))))
        }

        function mt(e, t) {
            void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                zn(e, t, "k")
            }) : (zn(e, "all", "k"), F.keyboardScrolling = e)
        }

        function St() {
            var e = Z(K(g)[0], h);
            e || !F.loopTop && !F.continuousVertical || (e = oe(K(h))), null != e && Yt(e, null, !0)
        }

        function bt() {
            var e = ee(K(g)[0], h);
            e || !F.loopBottom && !F.continuousVertical || (e = K(h)[0]), null != e && Yt(e, null, !1)
        }

        function yt(e, t) {
            vt(0, "internal"), wt(e, t), vt(et.scrollingSpeed, "internal")
        }

        function wt(e, t) {
            var n = xn(e);
            void 0 !== t ? Tn(e, t) : null != n && Yt(n)
        }

        function Et(e) {
            Dt("right", e)
        }

        function Lt(e) {
            Dt("left", e)
        }

        function xt(t) {
            if (!Q(Ne, l)) {
                Pe = !0, je = G();
                for (var n = K(h), o = 0; o < n.length; ++o) {
                    var i = n[o], r = K(H, i)[0], a = K(M, i);
                    F.verticalCentered && $(K(S, i), {height: En(i) + "px"}), $(i, {height: je + "px"}), a.length > 1 && vn(r, K(O, r)[0])
                }
                F.scrollOverflow && Fe.createScrollBarForAll();
                var s = ie(K(g)[0], h);
                s && yt(s + 1), Pe = !1, Ee(F.afterResize) && t && F.afterResize.call(Ne, e.innerWidth, e.innerHeight), Ee(F.afterReBuild) && !t && F.afterReBuild.call(Ne)
            }
        }

        function Tt(e) {
            var t = Q(se, i);
            e ? t || (ft(!1, "internal"), pt(!1, "internal"), le(K(E)), ce(se, i), Ee(F.afterResponsive) && F.afterResponsive.call(Ne, e)) : t && (ft(et.autoScrolling, "internal"), pt(et.autoScrolling, "internal"), ae(K(E)), ue(se, i), Ee(F.afterResponsive) && F.afterResponsive.call(Ne, e))
        }

        function At(e, n) {
            t["fp_" + e] = n, t.addEventListener(e, kt, !0)
        }

        function kt(e) {
            e.target != t && F.normalScrollElements.split(",").forEach(function (n) {
                xe(e.target, n) && gt(t["fp_" + e.type])
            })
        }

        function Mt(e, n, o) {
            var i = 100 * o, r = 100 / o, l = t.createElement("div");
            l.className = C, ve(n, l);
            var a, s, u = t.createElement("div");
            u.className = I, ve(n, u), $(K(R, e), {width: i + "%"}), o > 1 && (F.controlArrows && (a = e, s = [Ae('<div class="' + Y + '"></div>'), Ae('<div class="' + W + '"></div>')], ge(K(H, a)[0], s), "#fff" !== F.controlArrowColor && ($(K(X, a), {"border-color": "transparent transparent transparent " + F.controlArrowColor}), $(K(U, a), {"border-color": "transparent " + F.controlArrowColor + " transparent transparent"})), F.loopHorizontal || le(K(U, a))), F.slidesNavigation && function (e, t) {
                fe(Ae('<div class="' + z + '"><ul></ul></div>'), e);
                var n = K(N, e)[0];
                ce(n, "fp-" + F.slidesNavPosition);
                for (var o = 0; o < t; o++) fe(Ae('<li><a href="#"><span></span></a></li>'), K("ul", n)[0]);
                $(n, {"margin-left": "-" + n.innerWidth / 2 + "px"}), ce(K("a", K("li", n)[0]), c)
            }(e, o)), n.forEach(function (e) {
                $(e, {width: r + "%"}), F.verticalCentered && wn(e)
            });
            var f = K(O, e)[0];
            null != f && (0 !== ie(K(g), h) || 0 === ie(K(g), h) && 0 !== ie(f)) ? In(f, "internal") : ce(n[0], c)
        }

        function Ot() {
            var e, t = K(g)[0];
            ce(t, f), qt(t), Qt(t), F.scrollOverflow && F.scrollOverflowHandler.afterLoad(), (!(e = xn(tn().section)) || void 0 !== e && ie(e) === ie(Ie)) && Ee(F.afterLoad) && Ut("afterLoad", {
                activeSection: null,
                element: t,
                direction: null,
                anchorLink: t.getAttribute("data-anchor"),
                sectionIndex: ie(t, h)
            }), Ee(F.afterRender) && Ut("afterRender")
        }

        function Ct() {
            var e, t, n, o, i, r;
            if (!F.autoScrolling || F.scrollBar) {
                var l = be(), a = (n = (t = l) > nt ? "down" : "up", nt = t, st = t, n), s = 0, u = l + G() / 2,
                    d = se.offsetHeight - G() === l, v = K(h);
                if (d) s = v.length - 1; else if (l) for (var p = 0; p < v.length; ++p) v[p].offsetTop <= u && (s = p); else s = 0;
                if (o = a, i = K(g)[0].offsetTop, r = i + G(), ("up" == o ? r >= be() + G() : i <= be()) && (Q(K(g)[0], f) || (ce(K(g)[0], f), ue(ye(K(g)[0]), f))), !Q(e = v[s], c)) {
                    tt = !0;
                    var m, S, b = K(g)[0], y = ie(b, h) + 1, w = yn(e), E = e.getAttribute("data-anchor"),
                        L = ie(e, h) + 1, x = K(O, e)[0], T = {
                            activeSection: b,
                            sectionIndex: L - 1,
                            anchorLink: E,
                            element: e,
                            leavingSection: y,
                            direction: w
                        };
                    x && (S = x.getAttribute("data-anchor"), m = ie(x)), Ve && (ce(e, c), ue(ye(e), c), Ee(F.onLeave) && Ut("onLeave", T), Ee(F.afterLoad) && Ut("afterLoad", T), $t(b), qt(e), Qt(e), bn(E, L - 1), F.anchors.length && (Se = E), kn(m, S, E)), clearTimeout(Ke), Ke = setTimeout(function () {
                        tt = !1
                    }, 100)
                }
                F.fitToSection && (clearTimeout(qe), qe = setTimeout(function () {
                    F.fitToSection && K(g)[0].offsetHeight <= je && Ht()
                }, F.fitToSectionDelay))
            }
        }

        function Ht() {
            Ve && (Pe = !0, Yt(K(g)[0]), Pe = !1)
        }

        function It(e) {
            if (Ue.m[e]) {
                var t = "down" === e ? bt : St;
                if (F.scrollOverflow) {
                    var n = F.scrollOverflowHandler.scrollable(K(g)[0]), o = "down" === e ? "bottom" : "top";
                    if (null != n) {
                        if (!F.scrollOverflowHandler.isScrolled(o, n)) return !0;
                        t()
                    } else t()
                } else t()
            }
        }

        function Rt(e) {
            F.autoScrolling && zt(e) && we(e)
        }

        function Bt(t) {
            var n = he(t.target, h);
            if (zt(t)) {
                F.autoScrolling && we(t);
                var o = Hn(t);
                rt = o.y, lt = o.x, K(H, n).length && Math.abs(it - lt) > Math.abs(ot - rt) ? !Re && Math.abs(it - lt) > e.innerWidth / 100 * F.touchSensitivity && (it > lt ? Ue.m.right && Et(n) : Ue.m.left && Lt(n)) : F.autoScrolling && Ve && Math.abs(ot - rt) > e.innerHeight / 100 * F.touchSensitivity && (ot > rt ? It("down") : rt > ot && It("up"))
            }
        }

        function zt(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function Nt(e) {
            if (F.fitToSection && (Ge = !1), zt(e)) {
                var t = Hn(e);
                ot = t.y, it = t.x
            }
        }

        function jt(e, t) {
            for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), i = 0; i < o.length; i++) n += o[i];
            return Math.ceil(n / t)
        }

        function Pt(t) {
            var n = (new Date).getTime(), o = Q(K(d)[0], y);
            if (F.autoScrolling && !He && !o) {
                var i = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail, r = Math.max(-1, Math.min(1, i)),
                    l = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                    a = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !l;
                Ye.length > 149 && Ye.shift(), Ye.push(Math.abs(i)), F.scrollBar && we(t);
                var s = n - at;
                return at = n, s > 200 && (Ye = []), Ve && jt(Ye, 10) >= jt(Ye, 70) && a && It(r < 0 ? "down" : "up"), !1
            }
            F.fitToSection && (Ge = !1)
        }

        function Dt(e, t) {
            var n = null == t ? K(g)[0] : t, o = K(H, n)[0];
            if (!(null == o || Re || K(M, o).length < 2)) {
                var i = K(O, o)[0], r = null;
                if (null == (r = "left" === e ? Z(i, M) : ee(i, M))) {
                    if (!F.loopHorizontal) return;
                    var l = ye(i);
                    r = "left" === e ? l[l.length - 1] : l[0]
                }
                Re = !de.test.isTesting, vn(o, r, e)
            }
        }

        function Vt() {
            for (var e = K(O), t = 0; t < e.length; t++) In(e[t], "internal")
        }

        function Yt(e, t, n) {
            if (null != e) {
                var o, i, r, l, a, s, u, f, d, v = {
                    element: e,
                    callback: t,
                    isMovementUp: n,
                    dtop: (i = (o = e).offsetHeight, r = o.offsetTop, a = r > st, s = (l = r) - je + i, u = F.bigSectionsDestination, i > je ? (a || u) && "bottom" !== u || (l = s) : (a || Pe && null == ne(o)) && (l = s), st = l, l),
                    yMovement: yn(e),
                    anchorLink: e.getAttribute("data-anchor"),
                    sectionIndex: ie(e, h),
                    activeSlide: K(O, e)[0],
                    activeSection: K(g)[0],
                    leavingSection: ie(K(g), h) + 1,
                    localIsResizing: Pe
                };
                if (!(v.activeSection == e && !Pe || F.scrollBar && be() === v.dtop && !Q(e, b))) {
                    if (null != v.activeSlide && (f = v.activeSlide.getAttribute("data-anchor"), d = ie(v.activeSlide)), Ee(F.onLeave) && !v.localIsResizing) {
                        var p = v.yMovement;
                        if (void 0 !== n && (p = n ? "up" : "down"), v.direction = p, !1 === Ut("onLeave", v)) return
                    }
                    F.autoScrolling && F.continuousVertical && void 0 !== v.isMovementUp && (!v.isMovementUp && "up" == v.yMovement || v.isMovementUp && "down" == v.yMovement) && ((m = v).isMovementUp ? me(K(g)[0], Oe(m.activeSection, h)) : ge(K(g)[0], Ce(m.activeSection, h).reverse()), Rn(K(g)[0].offsetTop), Vt(), m.wrapAroundElements = m.activeSection, m.dtop = m.element.offsetTop, m.yMovement = yn(m.element), m.leavingSection = ie(m.activeSection, h) + 1, m.sectionIndex = ie(m.element, h), v = m), v.localIsResizing || $t(v.activeSection), F.scrollOverflow && F.scrollOverflowHandler.beforeLeave(), ce(e, c), ue(ye(e), c), qt(e), F.scrollOverflow && F.scrollOverflowHandler.onLeave(), Ve = de.test.isTesting, kn(d, f, v.anchorLink, v.sectionIndex), function (e) {
                        if (F.css3 && F.autoScrolling && !F.scrollBar) {
                            var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                            Ln(t, !0), F.scrollingSpeed ? (clearTimeout(Xe), Xe = setTimeout(function () {
                                _t(e)
                            }, F.scrollingSpeed)) : _t(e)
                        } else {
                            var n = Xt(e.dtop);
                            de.test.top = -e.dtop + "px", Pn(n.element, n.options, F.scrollingSpeed, function () {
                                F.scrollBar ? setTimeout(function () {
                                    _t(e)
                                }, 30) : _t(e)
                            })
                        }
                    }(v), Se = v.anchorLink, bn(v.anchorLink, v.sectionIndex)
                }
            }
            var m
        }

        function Ut(e, t) {
            var n, o, i, r, l = (o = e, i = t, (r = F.v2compatible ? {
                afterRender: function () {
                    return [Ne]
                }, onLeave: function () {
                    return [i.activeSection, i.leavingSection, i.sectionIndex + 1, i.direction]
                }, afterLoad: function () {
                    return [i.element, i.anchorLink, i.sectionIndex + 1]
                }, afterSlideLoad: function () {
                    return [i.destiny, i.anchorLink, i.sectionIndex + 1, i.slideAnchor, i.slideIndex]
                }, onSlideLeave: function () {
                    return [i.prevSlide, i.anchorLink, i.sectionIndex + 1, i.prevSlideIndex, i.direction, i.slideIndex]
                }
            } : {
                afterRender: function () {
                    return {section: Ft(K(g)[0]), slide: Wt(K(O, K(g)[0])[0])}
                }, onLeave: function () {
                    return {origin: Ft(i.activeSection), destination: Ft(i.element), direction: i.direction}
                }, afterLoad: function () {
                    return r.onLeave()
                }, afterSlideLoad: function () {
                    return {
                        section: Ft(i.section),
                        origin: Wt(i.prevSlide),
                        destination: Wt(i.destiny),
                        direction: i.direction
                    }
                }, onSlideLeave: function () {
                    return r.afterSlideLoad()
                }
            })[o]());
            if (F.v2compatible) {
                if (!1 === F[e].apply(l[0], l.slice(1))) return !1
            } else if (Le(Ne, e, l), !1 === F[e].apply(l[Object.keys(l)[0]], (n = l, Object.keys(n).map(function (e) {
                return n[e]
            })))) return !1;
            return !0
        }

        function Ft(e) {
            return e ? new Yn(e) : null
        }

        function Wt(e) {
            return e ? new function (e) {
                Vn.call(this, e, M)
            }(e) : null
        }

        function Xt(t) {
            var n = {};
            return F.autoScrolling && !F.scrollBar ? (n.options = -t, n.element = K(o)[0]) : (n.options = t, n.element = e), n
        }

        function _t(e) {
            var t;
            null != (t = e).wrapAroundElements && (t.isMovementUp ? me(K(h)[0], t.wrapAroundElements) : ge(K(h)[K(h).length - 1], t.wrapAroundElements), Rn(K(g)[0].offsetTop), Vt()), Ee(F.afterLoad) && !e.localIsResizing && Ut("afterLoad", e), F.scrollOverflow && F.scrollOverflowHandler.afterLoad(), e.localIsResizing || Qt(e.element), ce(e.element, f), ue(ye(e.element), f), Ve = !0, Ee(e.callback) && e.callback()
        }

        function Kt(e, t) {
            e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t)
        }

        function qt(e) {
            F.lazyLoading && K("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Jt(e)).forEach(function (e) {
                if (["src", "srcset"].forEach(function (t) {
                    var n = e.getAttribute("data-" + t);
                    null != n && n && Kt(e, t)
                }), xe(e, "source")) {
                    var t = he(e, "video, audio");
                    t && t.load()
                }
            })
        }

        function Qt(e) {
            var t = Jt(e);
            K("video, audio", t).forEach(function (e) {
                e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
            }), K('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                e.hasAttribute("data-autoplay") && Gt(e), e.onload = function () {
                    e.hasAttribute("data-autoplay") && Gt(e)
                }
            })
        }

        function Gt(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function $t(e) {
            var t = Jt(e);
            K("video, audio", t).forEach(function (e) {
                e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
            }), K('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function Jt(e) {
            var t = K(O, e);
            return t.length && (e = t[0]), e
        }

        function Zt() {
            var e = tn(), t = e.section, n = e.slide;
            t && (F.animateAnchor ? Tn(t, n) : yt(t, n))
        }

        function en() {
            if (!tt && !F.lockAnchors) {
                var e = tn(), t = e.section, n = e.slide, o = void 0 === Se, i = void 0 === Se && void 0 === n && !Re;
                t && t.length && (t && t !== Se && !o || i || !Re && Me != n) && Tn(t, n)
            }
        }

        function tn() {
            var t, n, o = e.location.hash;
            if (o.length) {
                var i = o.replace("#", "").split("/"), r = o.indexOf("#/") > -1;
                t = r ? "/" + i[1] : decodeURIComponent(i[0]);
                var l = r ? i[2] : i[1];
                l && l.length && (n = decodeURIComponent(l))
            }
            return {section: t, slide: n}
        }

        function nn(e) {
            clearTimeout(Qe);
            var n = t.activeElement, o = e.keyCode;
            9 === o ? function (e) {
                var n = e.shiftKey, o = t.activeElement, i = K(g)[0], r = K(O, i)[0],
                    l = K(Ze + ':not([tabindex="-1"])', r || i);

                function a(e) {
                    return we(e), l[0].focus()
                }

                o ? null == he(o, g + "," + O) && (o = a(e)) : a(e), (!n && o == l[l.length - 1] || n && o == l[0]) && we(e)
            }(e) : xe(n, "textarea") || xe(n, "input") || xe(n, "select") || "true" === n.getAttribute("contentEditable") || "" === n.getAttribute("contentEditable") || !F.keyboardScrolling || !F.autoScrolling || ([40, 38, 32, 33, 34].indexOf(o) > -1 && we(e), He = e.ctrlKey, Qe = setTimeout(function () {
                !function (e) {
                    var t = e.shiftKey;
                    if (Ve || !([37, 39].indexOf(e.keyCode) < 0)) switch (e.keyCode) {
                        case 38:
                        case 33:
                            Ue.k.up && St();
                            break;
                        case 32:
                            if (t && Ue.k.up) {
                                St();
                                break
                            }
                        case 40:
                        case 34:
                            Ue.k.down && bt();
                            break;
                        case 36:
                            Ue.k.up && wt(1);
                            break;
                        case 35:
                            Ue.k.down && wt(K(h).length);
                            break;
                        case 37:
                            Ue.k.left && Lt();
                            break;
                        case 39:
                            Ue.k.right && Et()
                    }
                }(e)
            }, 150))
        }

        function on() {
            Le(te(this), "click")
        }

        function rn(e) {
            De && (He = e.ctrlKey)
        }

        function ln(e) {
            2 == e.which && (ct = e.pageY, Ne.addEventListener("mousemove", dn))
        }

        function an(e) {
            2 == e.which && Ne.removeEventListener("mousemove", dn)
        }

        function sn() {
            var e = he(this, h);
            Q(this, V) ? Ue.m.left && Lt(e) : Ue.m.right && Et(e)
        }

        function cn() {
            De = !1, He = !1
        }

        function un(e) {
            we(e);
            var t = ie(he(this, E + " li"));
            Yt(K(h)[t])
        }

        function fn(e) {
            we(e);
            var t = K(H, he(this, h))[0];
            vn(t, K(M, t)[ie(he(this, "li"))])
        }

        function dn(e) {
            Ve && (e.pageY < ct && Ue.m.up ? St() : e.pageY > ct && Ue.m.down && bt()), ct = e.pageY
        }

        function vn(e, t, n) {
            var o, i, r = he(e, h), l = {
                slides: e,
                destiny: t,
                direction: n,
                destinyPos: {left: t.offsetLeft},
                slideIndex: ie(t),
                section: r,
                sectionIndex: ie(r, h),
                anchorLink: r.getAttribute("data-anchor"),
                slidesNav: K(N, r)[0],
                slideAnchor: On(t),
                prevSlide: K(O, r)[0],
                prevSlideIndex: ie(K(O, r)[0]),
                localIsResizing: Pe
            };
            l.xMovement = (o = l.prevSlideIndex, i = l.slideIndex, o == i ? "none" : o > i ? "left" : "right"), l.localIsResizing || (Ve = !1), F.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && Ee(F.onSlideLeave) && !1 === Ut("onSlideLeave", l) ? Re = !1 : (ce(t, c), ue(ye(t), c), l.localIsResizing || ($t(l.prevSlide), qt(t)), !F.loopHorizontal && F.controlArrows && (Te(K(U, r), 0 !== l.slideIndex), Te(K(X, r), null != ne(t))), Q(r, c) && !l.localIsResizing && kn(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), function (e, t, n) {
                var o = t.destinyPos;
                if (F.css3) {
                    var i = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                    de.test.translate3dH[t.sectionIndex] = i, $(mn(K(R, e)), Bn(i)), _e = setTimeout(function () {
                        n && pn(t)
                    }, F.scrollingSpeed)
                } else de.test.left[t.sectionIndex] = Math.round(o.left), Pn(e, Math.round(o.left), F.scrollingSpeed, function () {
                    n && pn(t)
                })
            }(e, l, !0))
        }

        function pn(e) {
            var t, n;
            t = e.slidesNav, n = e.slideIndex, F.slidesNavigation && null != t && (ue(K(u, t), c), ce(K("a", K("li", t)[n]), c)), e.localIsResizing || (Ee(F.afterSlideLoad) && Ut("afterSlideLoad", e), Ve = !0, Qt(e.destiny)), Re = !1
        }

        function hn() {
            if (gn(), Be) {
                var e = t.activeElement;
                if (!xe(e, "textarea") && !xe(e, "input") && !xe(e, "select")) {
                    var n = G();
                    Math.abs(n - ut) > 20 * Math.max(ut, n) / 100 && (xt(!0), ut = n)
                }
            } else clearTimeout(We), We = setTimeout(function () {
                xt(!0)
            }, 350)
        }

        function gn() {
            var t = F.responsive || F.responsiveWidth, n = F.responsiveHeight, o = t && e.innerWidth < t,
                i = n && e.innerHeight < n;
            t && n ? Tt(o || i) : t ? Tt(o) : n && Tt(i)
        }

        function mn(e) {
            var t = "all " + F.scrollingSpeed + "ms " + F.easingcss3;
            return ue(e, r), $(e, {"-webkit-transition": t, transition: t})
        }

        function Sn(e) {
            return ce(e, r)
        }

        function bn(e, t) {
            var n, o, i, r;
            n = e, o = K(F.menu)[0], F.menu && null != o && (ue(K(u, o), c), ce(K('[data-menuanchor="' + n + '"]', o), c)), i = e, r = t, F.navigation && null != K(E)[0] && (ue(K(u, K(E)[0]), c), ce(i ? K('a[href="#' + i + '"]', K(E)[0]) : K("a", K("li", K(E)[0])[r]), c))
        }

        function yn(e) {
            var t = ie(K(g)[0], h), n = ie(e, h);
            return t == n ? "none" : t > n ? "up" : "down"
        }

        function wn(e) {
            if (!Q(e, B)) {
                var n = t.createElement("div");
                n.className = m, n.style.height = En(e) + "px", ce(e, B), pe(e, n)
            }
        }

        function En(e) {
            var t = je;
            if (F.paddingTop || F.paddingBottom) {
                var n = e;
                Q(n, p) || (n = he(e, h));
                var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                t = je - o
            }
            return t
        }

        function Ln(e, t) {
            t ? mn(Ne) : Sn(Ne), $(Ne, Bn(e)), de.test.translate3d = e, setTimeout(function () {
                ue(Ne, r)
            }, 10)
        }

        function xn(e) {
            var t = K(h + '[data-anchor="' + e + '"]', Ne)[0];
            if (!t) {
                var n = void 0 !== e ? e - 1 : 0;
                t = K(h)[n]
            }
            return t
        }

        function Tn(e, t) {
            var n = xn(e);
            if (null != n) {
                var o, i, r,
                    l = (null == (r = K(M + '[data-anchor="' + (o = t) + '"]', i = n)[0]) && (o = void 0 !== o ? o : 0, r = K(M, i)[o]), r);
                e === Se || Q(n, c) ? An(l) : Yt(n, function () {
                    An(l)
                })
            }
        }

        function An(e) {
            null != e && vn(he(e, H), e)
        }

        function kn(e, t, n, o) {
            var i = "";
            F.anchors.length && !F.lockAnchors && (e ? (null != n && (i = n), null == t && (t = e), Me = t, Mn(i + "/" + t)) : null != e ? (Me = t, Mn(n)) : Mn(n)), Cn()
        }

        function Mn(t) {
            if (F.recordHistory) location.hash = t; else if (Be || ze) e.history.replaceState(void 0, void 0, "#" + t); else {
                var n = e.location.href.split("#")[0];
                e.location.replace(n + "#" + t)
            }
        }

        function On(e) {
            if (!e) return null;
            var t = e.getAttribute("data-anchor"), n = ie(e);
            return null == t && (t = n), t
        }

        function Cn() {
            var e = K(g)[0], t = K(O, e)[0], n = On(e), o = On(t), i = String(n);
            t && (i = i + "-" + o), i = i.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + s + "-[^\\s]+\\b", "g");
            se.className = se.className.replace(r, ""), ce(se, s + "-" + i)
        }

        function Hn(e) {
            var t = [];
            return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, ze && zt(e) && F.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }

        function In(e, t) {
            vt(0, "internal"), void 0 !== t && (Pe = !0), vn(he(e, H), e), void 0 !== t && (Pe = !1), vt(et.scrollingSpeed, "internal")
        }

        function Rn(e) {
            var t = Math.round(e);
            if (F.css3 && F.autoScrolling && !F.scrollBar) Ln("translate3d(0px, -" + t + "px, 0px)", !1); else if (F.autoScrolling && !F.scrollBar) $(Ne, {top: -t + "px"}), de.test.top = -t + "px"; else {
                var n = Xt(t);
                Dn(n.element, n.options)
            }
        }

        function Bn(e) {
            return {"-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e}
        }

        function zn(e, t, n) {
            "all" !== t ? Ue[n][t] = e : Object.keys(Ue[n]).forEach(function (t) {
                Ue[n][t] = e
            })
        }

        function Nn(e, t, n) {
            F[e] = t, "internal" !== n && (et[e] = t)
        }

        function jn() {
            J || (_("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), _("error", "https://github.com/alvarotrigo/fullPage.js#options.")), Q(K("html"), a) ? _("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (F.continuousVertical && (F.loopTop || F.loopBottom) && (F.continuousVertical = !1, _("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), F.scrollBar && F.scrollOverflow && _("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !F.continuousVertical || !F.scrollBar && F.autoScrolling || (F.continuousVertical = !1, _("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), F.scrollOverflow && null == F.scrollOverflowHandler && (F.scrollOverflow = !1, _("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"].forEach(function (e) {
                F[e] && _("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e)
            }), F.anchors.forEach(function (e) {
                var t = [].slice.call(K("[name]")).filter(function (t) {
                    return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                }), n = [].slice.call(K("[id]")).filter(function (t) {
                    return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                });
                (n.length || t.length) && (_("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), n.length && _("error", '"' + e + '" is is being used by another element `id` property'), t.length && _("error", '"' + e + '" is is being used by another element `name` property'))
            }))
        }

        function Pn(t, n, o, i) {
            var r,
                l = (r = t).self != e && Q(r, C) ? r.scrollLeft : !F.autoScrolling || F.scrollBar ? be() : r.offsetTop,
                a = n - l, s = 0;
            Ge = !0;
            var c = function () {
                if (Ge) {
                    var r = n;
                    s += 20, o && (r = e.fp_easings[F.easing](s, l, a, o)), Dn(t, r), s < o ? setTimeout(c, 20) : void 0 !== i && i()
                } else s < o && i()
            };
            c()
        }

        function Dn(t, n) {
            !F.autoScrolling || F.scrollBar || t.self != e && Q(t, C) ? t.self != e && Q(t, C) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px"
        }

        function Vn(e, t) {
            this.anchor = e.getAttribute("data-anchor"), this.item = e, this.index = ie(e, t), this.isLast = this.index === K(t).length - 1, this.isFirst = !this.index
        }

        function Yn(e) {
            Vn.call(this, e, h)
        }

        jn()
    }
}), window.jQuery && window.fullpage && function (e, t) {
    "use strict";
    e && t ? e.fn.fullpage = function (n) {
        var o = new t("#" + e(this).attr("id"), n);
        Object.keys(o).forEach(function (t) {
            e.fn.fullpage[t] = o[t]
        })
    } : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
}(jQuery, fullpage);
//# sourceMappingURL=fullpage.min.js.map