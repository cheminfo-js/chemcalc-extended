/**
 * chemcalc-extended - chemcalc-extended project - extends chemcalc with new methods
 * @version v2.2.0
 * @link https://github.com/cheminfo-js/chemcalc-extended
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chemcalcExtended"] = factory();
	else
		root["chemcalcExtended"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * chemcalc - Analyse molecular formula
 * @version v3.4.1
 * @date 2017-09-22T11:57:23.497Z
 * @link http://www.chemcalc.org
 * @license BSD
*/
(function (root) {
    'use strict';

    function getExports($wnd) {

        var $doc = $wnd.document;
        var $gwt = {};
        var navigator = {
            userAgent: 'webkit'
        };

        function noop() {}

        var __gwtModuleFunction = noop;
        __gwtModuleFunction.__moduleStartupDone = noop;
        var $sendStats = noop;
        var $moduleName, $moduleBase;

        // Start GWT code 
        function Hh() {}
        function Dh() {}
        function Kh() {}
        function eb() {}
        function mc() {}
        function tc() {}
        function cc() {}
        function Qc() {}
        function pq() {}
        function ss() {}
        function du() {}
        function Pv() {}
        function Ih() {
            Jh();
        }
        function Ip() {
            tp(this);
        }
        function xq() {
            pn(this);
        }
        function Pi(a) {
            this.a = a;
        }
        function Ac(a) {
            this.a = a;
        }
        function Jc(a) {
            this.a = a;
        }
        function Uc(a) {
            this.a = a;
        }
        function ed(a) {
            this.a = a;
        }
        function Lh(a) {
            this.a = a;
        }
        function Dn(a) {
            this.a = a;
        }
        function po(a) {
            this.a = a;
        }
        function vo(a) {
            this.a = a;
        }
        function zo(a) {
            this.a = a;
        }
        function Eo(a) {
            this.a = a;
        }
        function co(a) {
            this.c = a;
        }
        function bq(a) {
            this.c = a;
        }
        function ep(a) {
            this.b = a;
        }
        function jp(a) {
            this.a = a;
        }
        function pp(a) {
            this.a = a;
        }
        function $s(a) {
            this.a = a;
        }
        function Cv(a) {
            this.a = a;
        }
        function zc() {
            this.a = [];
        }
        function Fc(a) {
            return a.a;
        }
        function Mc(a) {
            return a.a;
        }
        function Zc(a) {
            return a.a;
        }
        function kd(a) {
            return a.a;
        }
        function zd(a) {
            return a.a;
        }
        function rd() {
            return null;
        }
        function Tc() {
            return null;
        }
        function hc(a) {
            gc();fc.u(a);
        }
        function km() {
            gm();hm(this);
        }
        function cj() {
            zb.call(this);
        }
        function Uj() {
            zb.call(this);
        }
        function Oh() {
            zb.call(this);
        }
        function Ni() {
            zb.call(this);
        }
        function uq() {
            zb.call(this);
        }
        function vq() {
            zb.call(this);
        }
        function cr() {
            zb.call(this);
        }
        function Fr() {
            gr.call(this);
        }
        function bu() {
            $r.call(this);
        }
        function Qh() {
            Oh.call(this);
        }
        function Kq() {
            Kq = Dh;Jq = Mq();
        }
        function oq() {
            oq = Dh;nq = new pq();
        }
        function Mv() {
            Mv = Dh;Lv = new xq();
        }
        function Db() {
            Db = Dh;Cb = new eb();
        }
        function _b() {
            _b = Dh;$b = new cc();
        }
        function Pc() {
            Pc = Dh;Oc = new Qc();
        }
        function ew() {
            this.a = new zc();
        }
        function kw() {
            this.a = new dd();
        }
        function gr() {
            this.a = new Ip();
        }
        function Ls() {
            this.g = new $r();
        }
        function nt(a) {
            ht(a);return a;
        }
        function pt(a) {
            return isNaN(a);
        }
        function Jr(a) {
            a.c = null;a.d = 0;
        }
        function Ab(a) {
            yb.call(this, a);
        }
        function dj(a) {
            Bb.call(this, a);
        }
        function ej(a) {
            Ab.call(this, a);
        }
        function Nc(a) {
            Ab.call(this, a);
        }
        function Nh(a) {
            Ab.call(this, a);
        }
        function Ph(a) {
            Ab.call(this, a);
        }
        function Mi(a) {
            Ab.call(this, a);
        }
        function Vj(a) {
            Ab.call(this, a);
        }
        function gj(a) {
            Mi.call(this, a);
        }
        function Pj(a) {
            Ph.call(this, a);
        }
        function Rh(a) {
            Ph.call(this, a);
        }
        function _s(a) {
            $s.call(this, a);
        }
        function Xu(a) {
            Ms.call(this, a);
        }
        function iv(a) {
            yb.call(this, a);
        }
        function dd() {
            ed.call(this, {});
        }
        function Fj() {
            Lh.call(this, '');
        }
        function Mj() {
            Lh.call(this, '');
        }
        function Nj() {
            Lh.call(this, '');
        }
        function xh() {
            vh == null && (vh = []);
        }
        function wt() {
            wt = Dh;tt = {};vt = {};
        }
        function Rb() {
            Rb = Dh;!!(gc(), fc);
        }
        function Sr(a) {
            return !!a && a.b;
        }
        function $i(a) {
            return a < 0 ? -a : a;
        }
        function _i(a, b) {
            return a > b ? a : b;
        }
        function aj(a, b) {
            return a < b ? a : b;
        }
        function Ad(a, b) {
            return ni(a, b);
        }
        function Xo(a, b) {
            return !!a.W(b);
        }
        function eh(a, b) {
            return $g(a, b) > 0;
        }
        function gh(a, b) {
            return $g(a, b) < 0;
        }
        function od(a) {
            return new Uc(a);
        }
        function qd(a) {
            return new td(a);
        }
        function Zo(a) {
            return Yo(a, Mr(a));
        }
        function Tm(a) {
            return !a ? null : a.c;
        }
        function qn(a) {
            return a.a.c + a.b.c;
        }
        function is(a) {
            return a.b = ao(a.a);
        }
        function ie(a) {
            return a.l | a.m << 22;
        }
        function ru(a) {
            return a.a.e * a.a.c;
        }
        function su(a) {
            return a.a.e * a.a.d;
        }
        function fr(a, b) {
            return vp(a.a, b);
        }
        function bh(a, b) {
            return $g(a, b) == 0;
        }
        function hh(a, b) {
            return $g(a, b) <= 0;
        }
        function nd(a) {
            return Ic(), a ? Hc : Gc;
        }
        function fi(a) {
            ei(a);return a.k;
        }
        function Oq() {
            Kq();return new Jq();
        }
        function Qq(a, b) {
            return a.a.get(b);
        }
        function Fp(a) {
            kq(a.a, a.a.length);
        }
        function Ms(a) {
            this.g = new _r(a);
        }
        function Ei(a, b) {
            this.a = a;this.b = b;
        }
        function Jo(a, b) {
            this.c = a;this.d = b;
        }
        function $l(a, b) {
            Ei.call(this, a, b);
        }
        function zs(a, b) {
            Ei.call(this, a, b);
        }
        function Qo(a, b) {
            Jo.call(this, a, b);
        }
        function $r() {
            _r.call(this, null);
        }
        function Th() {
            Th = Dh;Sh = (Th(), false);
        }
        function oj(a, b) {
            return ht(a), a === b;
        }
        function Oi(a, b) {
            return Qi(a.a, b.a);
        }
        function xe(a) {
            return typeof a === rw;
        }
        function ye(a) {
            return typeof a === sw;
        }
        function Be(a) {
            return typeof a === tw;
        }
        function fh(a) {
            return typeof a === sw;
        }
        function Um(a) {
            return !a ? null : a.T();
        }
        function Yb(a) {
            $wnd.clearTimeout(a);
        }
        function Ys(a, b, c) {
            a.splice(b, c);
        }
        function Ws(a, b, c) {
            a.splice(b, 0, c);
        }
        function Wk(a) {
            Dk();Xk.call(this, a);
        }
        function ct() {
            $s.call(this, 'UTF-8');
        }
        function Zb() {
            Ob != 0 && (Ob = 0);Qb = -1;
        }
        function Dq(a) {
            this.a = Oq();this.b = a;
        }
        function Tq(a) {
            this.a = Oq();this.b = a;
        }
        function Ro(a) {
            Jo.call(this, a.c, a.d);
        }
        function tp(a) {
            a.a = Ed(rf, pw, 1, 0, 5, 1);
        }
        function qv(a) {
            a.b = a.d.b;a.c = new bu();
        }
        function Ej(a, b) {
            a.a += '' + b;return a;
        }
        function Ij(a, b) {
            a.a += '' + b;return a;
        }
        function Jj(a, b) {
            a.a += '' + b;return a;
        }
        function Kj(a, b) {
            a.a += '' + b;return a;
        }
        function Er(a, b) {
            vp(a.a, b);return b;
        }
        function qj(a, b) {
            return a.indexOf(b);
        }
        function _n(a) {
            return a.a < a.c.size();
        }
        function Ld(a) {
            return Md(a.l, a.m, a.h);
        }
        function Ci(a) {
            return oj(sw, typeof a);
        }
        function rj(a) {
            return oj(tw, typeof a);
        }
        function Ce(a) {
            return a == null ? null : a;
        }
        function er(a) {
            return a != null ? kb(a) : 0;
        }
        function Qi(a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
        }
        function lj(a, b) {
            return a.charCodeAt(b);
        }
        function ot(a, b) {
            return a == b ? 0 : a < b ? -1 : 1;
        }
        function st(a) {
            return a.$H || (a.$H = ++rt);
        }
        function Xg(a) {
            return a.backingJsObject;
        }
        function Vd(a) {
            return a.l + a.m * Lw + a.h * Mw;
        }
        function Md(a, b, c) {
            return { l: a, m: b, h: c };
        }
        function Ds() {
            zs.call(this, 'Head', 1);
        }
        function Is() {
            zs.call(this, 'Tail', 3);
        }
        function Fs() {
            zs.call(this, 'Range', 2);
        }
        function Gj(a) {
            Lh.call(this, (ht(a), a));
        }
        function Oj(a) {
            Lh.call(this, (ht(a), a));
        }
        function mb(a) {
            a.g = Ed(tf, pw, 33, 0, 0, 1);
        }
        function ft(a) {
            if (!a) {
                throw Xg(new cr());
            }
        }
        function lt(a) {
            if (!a) {
                throw Xg(new Ni());
            }
        }
        function Sj() {
            Sj = Dh;Qj = new Kh();Rj = new Kh();
        }
        function tq(a) {
            var b;b = a[$w] | 0;a[$w] = b + 1;
        }
        function ps(a) {
            this.a = a;ep.call(this, a);
        }
        function ks(a) {
            ls.call(this, a, (ys(), us));
        }
        function zb() {
            mb(this);nb(this);this.t();
        }
        function sj(a, b) {
            return a.lastIndexOf(b);
        }
        function yj(a, b, c) {
            return a.substr(b, c - b);
        }
        function we(a, b) {
            return a != null && te(a, b);
        }
        function ai(a) {
            return a >= 56320 && a <= 57343;
        }
        function Gp(a) {
            return Us(a.a, a.a.length);
        }
        function Uh(a) {
            Th();return oj(rw, typeof a);
        }
        function Vh(a, b) {
            Th();return a == b ? 0 : a ? 1 : -1;
        }
        function kc(a) {
            gc();return parseInt(a) || -1;
        }
        function mk(a) {
            this.e = 5;gk(this, (ht(a), a));
        }
        function yv(a, b) {
            this.d = a;qv(this);this.c = b;
        }
        function Iu(a, b, c) {
            Ju.call(this, a, b, c, true);
        }
        function hw(a, b, c) {
            bd(a.a, b, c);return a;
        }
        function Io(a, b) {
            var c;c = a.d;a.d = b;return c;
        }
        function js(a) {
            bo(a.a);Vr(a.c, a.b);a.b = null;
        }
        function ei(a) {
            if (a.k != null) {
                return;
            }ri(a);
        }
        function ue(a) {
            return String.fromCharCode(a);
        }
        function gn(a, b) {
            return hn(b, a.b) || hn(b, a.a);
        }
        function Ap(a, b) {
            return Bp(a, b, a.a.length - 1);
        }
        function Ae(a, b) {
            return a && b && a instanceof b;
        }
        function tj(a, b, c) {
            return a.lastIndexOf(b, c);
        }
        function Sb(a, b, c) {
            return a.apply(b, c);var d;
        }
        function Vu(a, b, c) {
            Wu.call(this, a, b, c, 1, true);
        }
        function mu(a, b, c, d) {
            lu.call(this, a, 0, b, c, d);
        }
        function $q(a, b, c) {
            this.a = a;this.b = b;this.c = c;
        }
        function kk(a) {
            this.f = a;this.e = 5;this.a = nk(a);
        }
        function kq(a, b) {
            et(b, a.length);iq(a, 0, b, null);
        }
        function vp(a, b) {
            a.a[a.a.length] = b;return true;
        }
        function ji(a) {
            var b;b = ii(a);vi(a, b);return b;
        }
        function Zi() {
            Zi = Dh;Yi = Ed(mf, pw, 22, 256, 0, 1);
        }
        function mj(a, b) {
            return ot((ht(a), a), (ht(b), b));
        }
        function mh(a, b) {
            return _g(de(fh(a) ? qh(a) : a, b));
        }
        function nh(a, b) {
            return _g(ee(fh(a) ? qh(a) : a, b));
        }
        function oh(a, b) {
            return _g(fe(fh(a) ? qh(a) : a, b));
        }
        function xj(a, b) {
            return a.substr(b, a.length - b);
        }
        function Xs(a, b, c) {
            Vs(c, 0, a, b, c.length, false);
        }
        function up(a, b, c) {
            jt(b, a.a.length);Ws(a.a, b, c);
        }
        function yp(a, b) {
            gt(b, a.a.length);return a.a[b];
        }
        function dw(a, b) {
            xc(a.a, a.a.a.length, b);return a;
        }
        function dt(a, b) {
            if (!a) {
                throw Xg(new Mi(b));
            }
        }
        function lr(a, b) {
            if (a < 0 || a >= b) {
                throw Xg(new Qh());
            }
        }
        function it(a, b) {
            if (a == null) {
                throw Xg(new ej(b));
            }
        }
        function zt() {
            if (ut == 256) {
                tt = vt;vt = {};ut = 0;
            }++ut;
        }
        function qt(b, c, d) {
            try {
                b[c] = d;
            } catch (a) {}
        }
        function Cd(a, b, c, d, e, f) {
            return Dd(a, b, c, d, e, 0, f);
        }
        function th(a) {
            if (fh(a)) {
                return '' + a;
            }return je(a);
        }
        function sh(a) {
            if (fh(a)) {
                return a | 0;
            }return ie(a);
        }
        function cp(a) {
            if (!a) {
                throw Xg(new cr());
            }return a.c;
        }
        function li(a) {
            var b;b = ii(a);b.j = a;b.e = 1;return b;
        }
        function Pq(a, b) {
            return !(a.a.get(b) === undefined);
        }
        function Ks(a, b) {
            return Tr(a.g, b, (Th(), Sh)) == null;
        }
        function Gd(a) {
            return Array.isArray(a) && a.bb === Hh;
        }
        function ve(a) {
            return !Array.isArray(a) && a.bb === Hh;
        }
        function be(a) {
            return Md(~a.l & Iw, ~a.m & Iw, ~a.h & Jw);
        }
        function Yd(a, b) {
            return Md(a.l & b.l, a.m & b.m, a.h & b.h);
        }
        function ce(a, b) {
            return Md(a.l | b.l, a.m | b.m, a.h | b.h);
        }
        function ke(a, b) {
            return Md(a.l ^ b.l, a.m ^ b.m, a.h ^ b.h);
        }
        function fn(a, b) {
            return Be(b) ? ln(a, b) : !!Aq(a.a, b);
        }
        function jn(a, b) {
            return Be(b) ? kn(a, b) : Um(Aq(a.a, b));
        }
        function Dt(a) {
            return a.a != 0 ? '[' + a.a + a.i + ']' : a.i;
        }
        function _r(a) {
            this.c = null;this.b = (oq(), !a ? nq : a);
        }
        function yb(a) {
            mb(this);this.f = a;nb(this);this.t();
        }
        function Tk(a, b, c) {
            Dk();this.e = a;this.d = b;this.a = c;
        }
        function xv(a, b) {
            b < 1.0E-10 && (b = 1.0E-10);a.b = b;
        }
        function dc(a, b) {
            !a && (a = []);a[a.length] = b;return a;
        }
        function xc(a, b, c) {
            var d;d = wc(a, b);yc(a, b, c);return d;
        }
        function bd(a, b, c) {
            var d;d = _c(a, b);cd(a, b, c);return d;
        }
        function Ur(a, b) {
            var c;c = new ss();Wr(a, b, c);return c.d;
        }
        function Us(a, b) {
            var c;c = a.slice(0, b);return Id(c, a);
        }
        function Hj(a, b) {
            a.a += String.fromCharCode(b);return a;
        }
        function Aj(a) {
            return String.fromCharCode.apply(null, a);
        }
        function $h(a) {
            return (/\d/.test(String.fromCharCode(a))
            );
        }
        function wq(a, b) {
            return Ce(a) === Ce(b) || a != null && gb(a, b);
        }
        function dr(a, b) {
            return Ce(a) === Ce(b) || a != null && gb(a, b);
        }
        function mn(a, b, c) {
            return Be(b) ? nn(a, b, c) : Bq(a.a, b, c);
        }
        function Yo(a, b) {
            !!b && Vr(a, b);return !b ? null : new Ro(b);
        }
        function zq(a, b) {
            var c;c = a.a.get(b);return c == null ? [] : c;
        }
        function sq(a, b) {
            if (b[$w] != a[$w]) {
                throw Xg(new uq());
            }
        }
        function ht(a) {
            if (a == null) {
                throw Xg(new cj());
            }return a;
        }
        function td(a) {
            if (a == null) {
                throw Xg(new cj());
            }this.a = a;
        }
        function uu(a) {
            this.a = a;if (a.d > a.c) throw Xg(new iv(fx));
        }
        function hj(a, b, c) {
            this.a = qw;this.d = a;this.b = b;this.c = c;
        }
        function bw(a, b, c, d) {
            this.a = a;this.c = b;this.b = d;this.d = c;
        }
        function bv(a, b, c, d) {
            this.c = a;this.b = b;this.d = c;this.a = d;
        }
        function ho(a, b) {
            co.call(this, a);jt(b, a.size());this.a = b;
        }
        function qb(a, b) {
            a.backingJsObject = b;b != null && qt(b, vw, a);
        }
        function rb(a, b) {
            var c;c = fi(a._);return b == null ? c : c + ': ' + b;
        }
        function ki(a, b) {
            var c;c = ii(a);vi(a, c);c.e = b ? 8 : 0;return c;
        }
        function Ic() {
            Ic = Dh;Gc = new Jc(false);Hc = new Jc(true);
        }
        function gc() {
            gc = Dh;var a, b;b = !lc();a = new tc();fc = b ? new mc() : a;
        }
        function zi(a) {
            return oj(sw, typeof a) || a instanceof Number;
        }
        function ln(a, b) {
            return b == null ? !!Aq(a.a, null) : Pq(a.b, b);
        }
        function kn(a, b) {
            return b == null ? Um(Aq(a.a, null)) : Qq(a.b, b);
        }
        function Mm(a, b) {
            return b === a ? '(this Map)' : b == null ? xw : Gh(b);
        }
        function Zg(a, b) {
            return _g(Yd(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b));
        }
        function lh(a, b) {
            return _g(ce(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b));
        }
        function uh(a, b) {
            return _g(ke(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b));
        }
        function nj(a, b) {
            return mj(a.toLowerCase(), b.toLowerCase());
        }
        function _h(a) {
            return (/[A-Z]/i.test(String.fromCharCode(a))
            );
        }
        function Ib(a) {
            return !!a && !!a.hashCode ? a.hashCode() : st(a);
        }
        function De(a) {
            return Math.max(Math.min(a, uw), -2147483648) | 0;
        }
        function Tv() {
            return Qv(Vv(new xq(), hv(null), (gv(), gv(), ev)));
        }
        function nn(a, b, c) {
            return b == null ? Bq(a.a, null, c) : Rq(a.b, b, c);
        }
        function Cs() {
            ys();return Hd(Ad(wg, 1), pw, 30, 0, [us, vs, ws, xs]);
        }
        function Xb(a) {
            Rb();$wnd.setTimeout(function () {
                throw a;
            }, 0);
        }
        function Fq(a) {
            this.e = a;this.b = this.e.a.entries();this.a = [];
        }
        function aq(a) {
            ft(a.a < a.c.a.length);a.b = a.a++;return a.c.a[a.b];
        }
        function Cn(a, b) {
            if (we(b, 31)) {
                return Km(a.a, b);
            }return false;
        }
        function Hv(a) {
            if (ln(Fv, a)) {
                return kn(Fv, a);
            }return null;
        }
        function _c(a, b) {
            if (b == null) {
                throw Xg(new cj());
            }return ad(a, b);
        }
        function Yr(a, b) {
            var c;c = 1 - b;a.a[c] = Zr(a.a[c], c);return Zr(a, b);
        }
        function Lb(a, b) {
            var c = Kb[a.charCodeAt(0)];return c == null ? a : c;
        }
        function ni(a, b) {
            var c = a.a = a.a || [];return c[b] || (c[b] = a.D(b));
        }
        function Dp(a, b, c) {
            var d;kt(b, c, a.a.length);d = c - b;Ys(a.a, b, d);
        }
        function jo(a, b, c) {
            kt(b, c, a.size());this.c = a;this.a = b;this.b = c - b;
        }
        function Fb(a) {
            Db();Bb.call(this, a);this.a = '';this.b = a;this.a = '';
        }
        function bo(a) {
            lt(a.b != -1);a.c.removeAtIndex(a.b);a.a = a.b;a.b = -1;
        }
        function ao(a) {
            ft(a.a < a.c.size());return a.c.getAtIndex(a.b = a.a++);
        }
        function rh(a) {
            var b;if (fh(a)) {
                b = a;return b == -0. ? 0 : b;
            }return he(a);
        }
        function Eh(a) {
            function b() {}
            ;b.prototype = a || {};return new b();
        }
        function tb(b) {
            if (!('stack' in b)) {
                try {
                    throw b;
                } catch (a) {}
            }return b;
        }
        function pi(a) {
            if (a.J()) {
                return null;
            }var b = a.j;var c = Ah[b];return c;
        }
        function Lj(a, b, c) {
            a.a = yj(a.a, 0, b) + ('' + c) + xj(a.a, b);return a;
        }
        function om(a, b, c, d, e, f, g) {
            a += e + g + (b ^ c ^ d);a = a << f | a >>> -f;return a + b;
        }
        function ov(a) {
            if (a.e.c.d == 0) throw Xg(new Ab(yx));return au(a.e.c);
        }
        function nv(a) {
            if (a.e.c.d == 0) throw Xg(new Ab(yx));return _t(a.e.c);
        }
        function Fk(a) {
            while (a.d > 0 && a.a[--a.d] == 0) {}a.a[a.d++] == 0 && (a.e = 0);
        }
        function Hb(a, b) {
            return !!a && !!a.equals ? a.equals(b) : Ce(a) === Ce(b);
        }
        function Ml(a, b) {
            Gl();return b < Fl.length ? Ll(a, Fl[b]) : Lk(a, Pl(b));
        }
        function Aq(a, b) {
            var c;return yq(b, zq(a, b == null ? 0 : (c = kb(b), c | 0)));
        }
        function Wo(a, b) {
            var c, d;c = b.S();d = a.W(c);return !!d && dr(d.d, b.T());
        }
        function Vb(a, b, c) {
            var d;d = Tb();try {
                return Sb(a, b, c);
            } finally {
                Wb(d);
            }
        }
        function Ts(a, b, c, d) {
            Array.prototype.splice.apply(a, [b, c].concat(d));
        }
        function vj(a, b, c) {
            c = Cj(c);return a.replace(new $wnd.RegExp(b, 'g'), c);
        }
        function mt(a, b, c) {
            if (a < 0 || b > c || b < a) {
                throw Xg(new Pj(Gw + a + Hw + b + Fw + c));
            }
        }
        function cd(d, a, b) {
            if (b) {
                var c = b.A();d.a[a] = c(b);
            } else {
                delete d.a[a];
            }
        }
        function yc(d, a, b) {
            if (b) {
                var c = b.A();b = c(b);
            } else {
                b = undefined;
            }d.a[a] = b;
        }
        function Nk(a, b) {
            if (b == 0 || a.e == 0) {
                return a;
            }return b > 0 ? fl(a, b) : il(a, -b);
        }
        function Pk(a, b) {
            if (b == 0 || a.e == 0) {
                return a;
            }return b > 0 ? il(a, b) : fl(a, -b);
        }
        function Ik(a, b) {
            var c;for (c = a.d - 1; c >= 0 && a.a[c] === b[c]; c--) {}return c < 0;
        }
        function Bl(a, b, c, d) {
            var e;e = Ed(He, pw, 7, b, 15, 1);Cl(e, a, b, c, d);return e;
        }
        function pm(a, b, c, d, e, f, g) {
            a += e + g + (c ^ (b | ~d));a = a << f | a >>> -f;return a + b;
        }
        function nm(a, b, c, d, e, f, g) {
            a += e + g + (c ^ d & (b ^ c));a = a << f | a >>> -f;return a + b;
        }
        function mm(a, b, c, d, e, f, g) {
            a += e + g + (d ^ b & (c ^ d));a = a << f | a >>> -f;return a + b;
        }
        function Ep(a, b, c) {
            var d;d = (gt(b, a.a.length), a.a[b]);a.a[b] = c;return d;
        }
        function Bp(a, b, c) {
            for (; c >= 0; --c) {
                if (dr(b, a.a[c])) {
                    return c;
                }
            }return -1;
        }
        function Gr(a, b) {
            !a.a ? a.a = new Oj(a.d) : Kj(a.a, a.b);Ij(a.a, b);return a;
        }
        function nb(a) {
            if (a.j) {
                a.backingJsObject !== zw && a.t();a.g = null;
            }return a;
        }
        function Cp(a, b) {
            var c;c = (gt(b, a.a.length), a.a[b]);Ys(a.a, b, 1);return c;
        }
        function on(a, b) {
            return Be(b) ? b == null ? Cq(a.a, null) : Sq(a.b, b) : Cq(a.a, b);
        }
        function pn(a) {
            var b;a.a = new Dq(a);a.b = new Tq(a);b = a[$w] | 0;a[$w] = b + 1;
        }
        function ys() {
            ys = Dh;us = new zs('All', 0);vs = new Ds();ws = new Fs();xs = new Is();
        }
        function Zs() {
            Zs = Dh;new ct();new _s('ISO-LATIN-1');new _s('ISO-8859-1');
        }
        function Vr(a, b) {
            var c;c = new ss();c.c = true;c.d = b.T();return Wr(a, b.S(), c);
        }
        function Kd(a) {
            var b, c, d;b = a & Iw;c = a >> 22 & Iw;d = a < 0 ? Jw : 0;return Md(b, c, d);
        }
        function Wb(a) {
            a && bc((_b(), $b));--Ob;if (a) {
                if (Qb != -1) {
                    Yb(Qb);Qb = -1;
                }
            }
        }
        function rs(a, b) {
            Qo.call(this, a, b);this.a = Ed(rg, pw, 43, 2, 0, 1);this.b = true;
        }
        function Sk(a, b) {
            Dk();this.e = a;this.d = 1;this.a = Hd(Ad(He, 1), pw, 7, 15, [b]);
        }
        function Hr(a, b) {
            this.b = ', ';this.d = a;this.e = b;this.c = this.d + ('' + this.e);
        }
        function pv(a, b, c, d) {
            this.g = new xq();this.c = a;this.d = b;this.b = c;this.a = d;
        }
        function Vq(a) {
            this.d = a;this.b = this.d.a.entries();this.a = this.b.next();
        }
        function Ub(b) {
            Rb();return function () {
                return Vb(b, this, arguments);var a;
            };
        }
        function Jb() {
            if (Date.now) {
                return Date.now();
            }return new Date().getTime();
        }
        function Jp() {
            tp(this);dt(true, 'Initial capacity must not be negative');
        }
        function wk(a) {
            if ($g(a, 0) == 0 && 5 < ak.length) {
                return ak[5];
            }return new lk(a, 5);
        }
        function kh(a) {
            var b;if (fh(a)) {
                b = 0 - a;if (!isNaN(b)) {
                    return b;
                }
            }return _g(ae(a));
        }
        function Zq(a) {
            if (a.a.d != a.c) {
                return Qq(a.a, a.b.value[0]);
            }return a.b.value[1];
        }
        function jt(a, b) {
            if (a < 0 || a > b) {
                throw Xg(new Ph('Index: ' + a + ', Size: ' + b));
            }
        }
        function gt(a, b) {
            if (a < 0 || a >= b) {
                throw Xg(new Ph('Index: ' + a + ', Size: ' + b));
            }
        }
        function jw(a, b, c) {
            return c == null ? hw(a, b, (Pc(), Pc(), Oc)) : hw(a, b, new td(c));
        }
        function iq(a, b, c, d) {
            var e;d = (oq(), !d ? nq : d);e = a.slice(b, c);jq(e, a, b, c, -b, d);
        }
        function wl(a, b, c, d) {
            var e;e = Ed(He, pw, 7, b + 1, 15, 1);xl(e, a, b, c, d);return e;
        }
        function Ed(a, b, c, d, e, f) {
            var g;g = Fd(e, d);e != 10 && Hd(Ad(a, f), b, c, e, g);return g;
        }
        function Id(a, b) {
            Bd(b) != 10 && Hd(ib(b), b.ab, b.__elementTypeId$, Bd(b), a);return a;
        }
        function Lk(a, b) {
            if (b.e == 0) {
                return Ck;
            }if (a.e == 0) {
                return Ck;
            }return Gl(), Hl(a, b);
        }
        function zp(a, b, c) {
            for (; c < a.a.length; ++c) {
                if (dr(b, a.a[c])) {
                    return c;
                }
            }return -1;
        }
        function Lr(a) {
            var b, c;if (!a.c) {
                return null;
            }c = a.c;while (b = c.a[0]) {
                c = b;
            }return c;
        }
        function Mr(a) {
            var b, c;if (!a.c) {
                return null;
            }c = a.c;while (b = c.a[1]) {
                c = b;
            }return c;
        }
        function Sv(a) {
            var b = new xq();if (a) {
                for (var c in a) {
                    b.put(c, String(a[c]));
                }
            }return b;
        }
        function fw(a) {
            var b;ew.call(this);for (b = 0; b < a.length; b++) {
                dw(this, new Uc(a[b]));
            }
        }
        function iw(a, b) {
            return b == null ? hw(a, Ox, (Pc(), Pc(), Oc)) : hw(a, Ox, new Uc((ht(b), b)));
        }
        function ze(a) {
            return a != null && (typeof a === mw || typeof a === 'function') && !(a.bb === Hh);
        }
        function Bd(a) {
            return a.__elementTypeCategory$ == null ? 10 : a.__elementTypeCategory$;
        }
        function uj(a) {
            return new $wnd.RegExp('^(^[A-Z][a-z]?\\{.*\\}$)$').test(a);
        }
        function _l() {
            Zl();return Hd(Ad(Cf, 1), pw, 26, 0, [Yl, Sl, Rl, Tl, Wl, Ul, Vl, Xl]);
        }
        function pe() {
            pe = Dh;le = Md(Iw, Iw, 524287);me = Md(0, 0, Kw);ne = Kd(1);Kd(2);oe = Kd(0);
        }
        function lk(a, b) {
            this.e = b;this.a = ok(a);this.a < 54 ? this.f = rh(a) : this.c = dl(a);
        }
        function lu(a, b, c, d, e) {
            this.b = new xq();this.c = a;this.d = b;this.g = c;this.e = d;this.a = e;
        }
        function Gt(a, b, c, d) {
            if (c > d) throw Xg(new iv(fx));this.i = a;this.b = b;this.d = c;this.c = d;
        }
        function Qv(a) {
            if (Ax in a.a.a) {
                throw Xg(new Fb(_c(a.a, Ax).B().a));
            } else {
                return a.a.a;
            }
        }
        function he(a) {
            if (Zd(a, (pe(), oe)) < 0) {
                return -Vd(ae(a));
            }return a.l + a.m * Lw + a.h * Mw;
        }
        function hk(a) {
            if (a.a < 54) {
                return a.f < 0 ? -1 : a.f > 0 ? 1 : 0;
            }return (!a.c && (a.c = cl(a.f)), a.c).e;
        }
        function Wg(a) {
            var b;if (we(a, 9)) {
                return a;
            }b = a && a[vw];if (!b) {
                b = new Fb(a);hc(b);
            }return b;
        }
        function vi(a, b) {
            var c;if (!a) {
                return;
            }b.j = a;var d = pi(b);if (!d) {
                Ah[a] = [b];return;
            }d._ = b;
        }
        function Vi(a) {
            var b, c;if (a == 0) {
                return 32;
            } else {
                c = 0;for (b = 1; (b & a) == 0; b <<= 1) {
                    ++c;
                }return c;
            }
        }
        function bc(a) {
            var b, c;if (a.b) {
                c = null;do {
                    b = a.b;a.b = null;c = ec(b, c);
                } while (a.b);a.b = c;
            }
        }
        function ac(a) {
            var b, c;if (a.a) {
                c = null;do {
                    b = a.a;a.a = null;c = ec(b, c);
                } while (a.a);a.a = c;
            }
        }
        function gw(a) {
            var b;ew.call(this);for (b = 0; b < a.length; b++) {
                dw(this, new fw(a[b]).a);
            }
        }
        function wh() {
            xh();var a = vh;for (var b = 0; b < arguments.length; b++) {
                a.push(arguments[b]);
            }
        }
        function wc(d, a) {
            var b = d.a[a];var c = (md(), ld)[typeof b];return c ? c(b) : sd(typeof b);
        }
        function $c(e, a) {
            var b = e.a;var c = 0;for (var d in b) {
                b.hasOwnProperty(d) && (a[c++] = d);
            }return a;
        }
        function sm(a, b) {
            var c, d, e;ht(b);c = false;for (e = b.K(); e.O();) {
                d = e.P();c = c | a.add(d);
            }return c;
        }
        function lq(a) {
            var b, c, d;d = 0;for (c = a.K(); c.O();) {
                b = c.P();d = d + (b != null ? kb(b) : 0);d = d | 0;
            }return d;
        }
        function Zr(a, b) {
            var c, d;c = 1 - b;d = a.a[c];a.a[c] = d.a[b];d.a[b] = a;a.b = true;d.b = false;return d;
        }
        function ii(a) {
            var b;b = new gi();b.k = 'Class$' + (a ? 'S' + a : '' + b.g);b.b = b.k;b.i = b.k;return b;
        }
        function _g(a) {
            var b;b = a.h;if (b == 0) {
                return a.l + a.m * Lw;
            }if (b == Jw) {
                return a.l + a.m * Lw - Mw;
            }return a;
        }
        function tv(a, b) {
            if (a.d.f == 0) {
                return uv(a, b);
            } else if (a.d.f == 1) {
                return vv(a, b);
            }return uv(a, b);
        }
        function hn(a, b) {
            var c, d;for (d = b.K(); d.O();) {
                c = d.P();if (wq(a, c.T())) {
                    return true;
                }
            }return false;
        }
        function jc(a) {
            var b = /function(?:\s+([\w$]+))?\s*\(/;var c = b.exec(a);return c && c[1] || nw;
        }
        function qh(a) {
            var b, c, d, e;e = a;d = 0;if (e < 0) {
                e += Mw;d = Jw;
            }c = De(e / Lw);b = De(e - c * Lw);return Md(b, c, d);
        }
        function mq(a) {
            var b, c, d;d = 1;for (c = a.K(); c.O();) {
                b = c.P();d = 31 * d + (b != null ? kb(b) : 0);d = d | 0;
            }return d;
        }
        function Jk(a) {
            var b;if (a.b == -2) {
                if (a.e == 0) {
                    b = -1;
                } else {
                    for (b = 0; a.a[b] == 0; b++) {}
                }a.b = b;
            }return a.b;
        }
        function Xk(a) {
            ht(a);if (a.length == 0) {
                throw Xg(new gj('Zero length BigInteger'));
            }al(this, a);
        }
        function Ct(a) {
            if (a.d == a.c) return a.d;throw Xg(new Ab('Atoms.getCount(): undefined (min!=max)'));
        }
        function dh(a) {
            if (Ow < a && a < Mw) {
                return a < 0 ? $wnd.Math.ceil(a) : $wnd.Math.floor(a);
            }return _g($d(a));
        }
        function Jn(a) {
            if (a.a.O()) {
                return true;
            }if (a.a != a.d) {
                return false;
            }a.a = new Fq(a.e.a);return a.a.O();
        }
        function Ov(a) {
            Mv();var b, c;b = '61-' + a;if (ln(Lv, b)) return kn(Lv, b);c = new Kv(a);nn(Lv, b, c);return c;
        }
        function Rv(a, b) {
            var c;c = Sv(b);Rq(c.b, wx, a);return Qv(Wv(c, hv(c.b.a.get(Bx)), (gv(), gv(), ev)));
        }
        function Uv(a, b) {
            var c;c = Sv(b);Rq(c.b, jx, '' + a);return Qv(Zv(c, hv(c.b.a.get(Bx)), (gv(), gv(), ev)));
        }
        function Xd(a, b) {
            var c, d, e;c = a.l + b.l;d = a.m + b.m + (c >> 22);e = a.h + b.h + (d >> 22);return Md(c & Iw, d & Iw, e & Jw);
        }
        function ge(a, b) {
            var c, d, e;c = a.l - b.l;d = a.m - b.m + (c >> 22);e = a.h - b.h + (d >> 22);return Md(c & Iw, d & Iw, e & Jw);
        }
        function yq(a, b) {
            var c, d, e;for (d = 0, e = b.length; d < e; ++d) {
                c = b[d];if (wq(a, c.S())) {
                    return c;
                }
            }return null;
        }
        function hl(a, b, c) {
            var d, e, f;d = 0;for (e = 0; e < c; e++) {
                f = b[e];a[e] = f << 1 | d;d = f >>> 31;
            }d != 0 && (a[c] = d);
        }
        function zh(a, b) {
            typeof window === mw && typeof window['$gwt'] === mw && (window['$gwt'][a] = b);
        }
        function Ht(a) {
            this.i = a.i;this.b = a.b;this.d = a.d;this.c = a.c;this.e = a.e;this.f = a.f;this.a = a.a;
        }
        function ls(a, b) {
            var c;this.c = a;c = new Ip();Pr(a, c, b, a.c, null, false, null, false);this.a = new ho(c, 0);
        }
        function Tr(a, b, c) {
            var d, e;d = new rs(b, c);e = new ss();a.c = Rr(a, a.c, d, e);e.b || ++a.d;a.c.b = false;return e.d;
        }
        function Sq(a, b) {
            var c;c = a.a.get(b);if (c === undefined) {
                ++a.d;
            } else {
                a.a[dx](b);--a.c;tq(a.b);
            }return c;
        }
        function Bt(a, b) {
            var c;if (we(b, 35)) {
                c = b;if (oj(a.i, c.i) && a.a == c.a) return true;
            } else {
                Sj();
            }return false;
        }
        function St(a, b) {
            var c, d, e;c = new ps(a).b.V();while (_n(c.a)) {
                d = c.b = ao(c.a);e = nt(d.T());e < b && js(c);
            }
        }
        function wv(a, b, c, d) {
            St(a.c, d);switch (a.d.f) {case 0:
                    Qt(a.c, c);break;case 1:
                    Rt(a.c, c);}Wt(a.c, b);
        }
        function ae(a) {
            var b, c, d;b = ~a.l + 1 & Iw;c = ~a.m + (b == 0 ? 1 : 0) & Iw;d = ~a.h + (b == 0 && c == 0 ? 1 : 0) & Jw;return Md(b, c, d);
        }
        function Sd(a) {
            var b, c, d;b = ~a.l + 1 & Iw;c = ~a.m + (b == 0 ? 1 : 0) & Iw;d = ~a.h + (b == 0 && c == 0 ? 1 : 0) & Jw;a.l = b;a.m = c;a.h = d;
        }
        function Td(a) {
            var b, c;c = Ui(a.h);if (c == 32) {
                b = Ui(a.m);return b == 32 ? Ui(a.l) + 32 : b + 20 - 10;
            } else {
                return c - 12;
            }
        }
        function aw(a, b) {
            var c;c = Di($wnd.Math.abs(a.a), $wnd.Math.abs(b.a));if (c != 0) return c;return mj(a.b, b.b);
        }
        function um(a, b) {
            var c, d;ht(b);for (d = b.K(); d.O();) {
                c = d.P();if (!a.contains(c)) {
                    return false;
                }
            }return true;
        }
        function Eu(b) {
            try {
                Bi(b);return true;
            } catch (a) {
                a = Wg(a);if (we(a, 21)) {
                    return false;
                } else throw Xg(a);
            }
        }
        function Di(a, b) {
            if (a < b) {
                return -1;
            }if (a > b) {
                return 1;
            }if (a == b) {
                return 0;
            }return isNaN(a) ? isNaN(b) ? 0 : 1 : -1;
        }
        function xp(a, b) {
            var c, d;c = b.toArray();d = c.length;if (d == 0) {
                return false;
            }Xs(a.a, a.a.length, c);return true;
        }
        function fq(a) {
            var b, c, d, e;e = 1;for (c = 0, d = a.length; c < d; ++c) {
                b = a[c];e = 31 * e + (b != null ? kb(b) : 0);e = e | 0;
            }return e;
        }
        function Kr(a, b) {
            var c, d, e;e = a.c;while (e) {
                c = a.b.Y(b, e.c);if (c == 0) {
                    return e;
                }d = c < 0 ? 0 : 1;e = e.a[d];
            }return null;
        }
        function Pd(a, b, c, d, e) {
            var f;f = ee(a, b);c && Sd(f);if (e) {
                a = Rd(a, b);d ? Jd = ae(a) : Jd = Md(a.l, a.m, a.h);
            }return f;
        }
        function Hd(a, b, c, d, e) {
            e._ = a;e.ab = b;e.bb = Hh;e.__elementTypeId$ = c;e.__elementTypeCategory$ = d;return e;
        }
        function Xh(a) {
            if (oj(typeof a, tw)) {
                return true;
            }return a != null && a.$implements__java_lang_CharSequence;
        }
        function wb(a) {
            var b;if (a != null) {
                b = a[vw];if (b) {
                    return b;
                }
            }return Ae(a, $wnd.TypeError) ? new dj(a) : new Bb(a);
        }
        function $g(a, b) {
            var c;if (fh(a) && fh(b)) {
                c = a - b;if (!isNaN(c)) {
                    return c;
                }
            }return Zd(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b);
        }
        function ok(a) {
            var b;$g(a, 0) < 0 && (a = _g(be(fh(a) ? qh(a) : a)));return b = sh(nh(a, 32)), 64 - (b != 0 ? Ui(b) : Ui(sh(a)) + 32);
        }
        function pb(a) {
            var b, c, d, e;for (b = (a.g == null && (a.g = (gc(), e = fc.v(a), ic(e))), a.g), c = 0, d = b.length; c < d; ++c) {}
        }
        function Kn(a) {
            var b;this.e = a;this.d = new Vq(this.e.b);this.a = this.d;this.b = Jn(this);b = a[$w];this[$w] = b;
        }
        function gi() {
            this.g = di++;this.k = null;this.i = null;this.f = null;this.d = null;this.b = null;this.j = null;this.a = null;
        }
        function Av(a, b, c) {
            this.d = a;qv(this);this.a = c;sv(this, b);if (b.a != 0) {
                Pt(this.c, -b.a * zx);Ut(this.c, 1 / $i(b.a));
            }
        }
        function Bb(a) {
            mb(this);nb(this);this.backingJsObject = a;a != null && qt(a, vw, this);this.f = a == null ? xw : Gh(a);
        }
        function Dr(a) {
            var b;b = a.a.a.length;if (b > 0) {
                return lr(b - 1, a.a.a.length), Cp(a.a, b - 1);
            } else {
                throw Xg(new vq());
            }
        }
        function Hk(a, b) {
            var c;if (a === b) {
                return true;
            }if (we(b, 5)) {
                c = b;return a.e == c.e && a.d == c.d && Ik(a, c.a);
            }return false;
        }
        function cl(a) {
            Dk();if (a < 0) {
                if (a != -1) {
                    return new Rk(-1, -a);
                }return xk;
            } else return a <= 10 ? zk[De(a)] : new Rk(1, a);
        }
        function yl(a, b, c) {
            var d;for (d = c - 1; d >= 0 && a[d] === b[d]; d--) {}return d < 0 ? 0 : gh(Zg(a[d], Vw), Zg(b[d], Vw)) ? -1 : 1;
        }
        function vm(a, b) {
            var c, d, e;ht(b);c = false;for (d = a.K(); d.O();) {
                e = d.P();if (b.contains(e)) {
                    d.Q();c = true;
                }
            }return c;
        }
        function lv(a) {
            var b, c, d;b = hx;for (d = new bq(a.d.d); d.a < d.c.a.length;) {
                c = aq(d);c.f > b && (b = c.f);
            }wv(a.e, b, a.b, a.a);
        }
        function Yv(a) {
            var b, c, d;d = dl(1);for (c = new bq(a.a); c.a < c.c.a.length;) {
                b = aq(c);d = Lk(d, dl(b.a.c - b.a.d + 1));
            }return d;
        }
        function Xi(a) {
            var b, c;if (a > -129 && a < 128) {
                b = a + 128;c = (Zi(), Yi)[b];!c && (c = Yi[b] = new Pi(a));return c;
            }return new Pi(a);
        }
        function Gh(a) {
            if (Array.isArray(a) && a.bb === Hh) {
                return fi(ib(a)) + '@' + (kb(a) >>> 0).toString(16);
            }return a.toString();
        }
        function Wh(a, b) {
            Th();return Be(a) ? mj(a, b) : ye(a) ? Di((ht(a), a), (ht(b), b)) : xe(a) ? Vh((ht(a), a), (ht(b), b)) : a.C(b);
        }
        function gb(a, b) {
            return Be(a) ? oj(a, b) : ye(a) ? (ht(a), a === b) : xe(a) ? (ht(a), a === b) : ve(a) ? a.n(b) : Gd(a) ? a === b : Hb(a, b);
        }
        function kb(a) {
            return Be(a) ? yt(a) : ye(a) ? De((ht(a), a)) : xe(a) ? (ht(a), a) ? 1231 : 1237 : ve(a) ? a.p() : Gd(a) ? st(a) : Ib(a);
        }
        function ib(a) {
            return Be(a) ? xf : ye(a) ? ff : xe(a) ? df : ve(a) ? a._ : Gd(a) ? a._ : a._ || Array.isArray(a) && Ad(Je, 1) || Je;
        }
        function bi(a) {
            return String.fromCharCode(a).toLowerCase().charCodeAt(0) == a && /[A-Z]/i.test(String.fromCharCode(a));
        }
        function sd(a) {
            md();throw Xg(new Nc("Unexpected typeof result '" + a + "'; please report this bug to the GWT team"));
        }
        function md() {
            md = Dh;ld = { 'boolean': nd, 'number': od, 'string': qd, 'object': pd, 'function': pd, 'undefined': rd };
        }
        function wp(a, b, c) {
            var d, e;jt(b, a.a.length);d = c.toArray();e = d.length;if (e == 0) {
                return false;
            }Xs(a.a, b, d);return true;
        }
        function Kk(a) {
            var b;if (a.c != 0) {
                return a.c;
            }for (b = 0; b < a.a.length; b++) {
                a.c = a.c * 33 + (a.a[b] & -1);
            }a.c = a.c * a.e;return a.c;
        }
        function Zh(a) {
            if (a >= 48 && a < 58) {
                return a - 48;
            }if (a >= 97 && a < 97) {
                return a - 97 + 10;
            }if (a >= 65 && a < 65) {
                return a - 65 + 10;
            }return -1;
        }
        function ph(a, b) {
            var c;if (fh(a) && fh(b)) {
                c = a - b;if (Ow < c && c < Mw) {
                    return c;
                }
            }return _g(ge(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b));
        }
        function jh(a, b) {
            var c;if (fh(a) && fh(b)) {
                c = a * b;if (Ow < c && c < Mw) {
                    return c;
                }
            }return _g(_d(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b));
        }
        function Yg(a, b) {
            var c;if (fh(a) && fh(b)) {
                c = a + b;if (Ow < c && c < Mw) {
                    return c;
                }
            }return _g(Xd(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b));
        }
        function Vt(a, b) {
            var c, d, e, f;c = new ps(a).b.V();while (_n(c.a)) {
                d = c.b = ao(c.a);e = d.S();f = d.T();Tr(a, e, (ht(f), f) * b);
            }
        }
        function hq(a, b, c, d, e, f, g, h) {
            var i;i = c;while (f < g) {
                i >= d || b < c && h.Y(a[b], a[i]) <= 0 ? e[f++] = a[b++] : e[f++] = a[i++];
            }
        }
        function gq(a, b, c, d) {
            var e, f, g;for (e = b + 1; e < c; ++e) {
                for (f = e; f > b && d.Y(a[f - 1], a[f]) > 0; --f) {
                    g = a[f];a[f] = a[f - 1];a[f - 1] = g;
                }
            }
        }
        function lm(a, b) {
            var c, d;for (c = 0, d = 0; d < 16; d++) {
                b[d] = a[c++] & 255 | (a[c++] & 255) << 8 | (a[c++] & 255) << 16 | (a[c++] & 255) << 24;
            }
        }
        function zl(a, b, c) {
            var d, e;d = Zg(c, Vw);for (e = 0; $g(d, 0) != 0 && e < b; e++) {
                d = Yg(d, Zg(a[e], Vw));a[e] = sh(d);d = nh(d, 32);
            }return sh(d);
        }
        function Dj(a, b, c) {
            var d, e, f, g;f = b + c;mt(b, f, a.length);g = '';for (e = b; e < f;) {
                d = e + Ew < f ? e + Ew : f;g += Aj(a.slice(e, d));e = d;
            }return g;
        }
        function jv(a, b, c) {
            var d, e, f;f = Nv(ov(a), b, c);e = new bu();for (d = 0; d < f.length; d++) {
                Tr(e, f[d][0], f[d][1]);
            }a.e.c = e;a.e.c.a = Sw;
        }
        function Rq(a, b, c) {
            var d;d = a.a.get(b);a.a.set(b, c === undefined ? null : c);if (d === undefined) {
                ++a.c;tq(a.b);
            } else {
                ++a.d;
            }return d;
        }
        function Yt(a) {
            var b, c;b = new jk(a);c = ik(fk(b, (Zl(), Zl(), Wl)));if (c.indexOf('.') != -1) {
                return vj(c, '\\.?0+$', '');
            }return c;
        }
        function Ok(a) {
            var b, c, d, e;return a.e == 0 ? a : (b = a.d, c = b + 1, d = Ed(He, pw, 7, c, 15, 1), hl(d, a.a, b), e = new Tk(a.e, c, d), Fk(e), e);
        }
        function $k(a) {
            var b, c, d;if (a < Bk.length) {
                return Bk[a];
            }c = a >> 5;b = a & 31;d = Ed(He, pw, 7, c + 1, 15, 1);d[c] = 1 << b;return new Tk(1, c + 1, d);
        }
        function Il(a, b, c, d, e) {
            if (b == 0 || d == 0) {
                return;
            }b == 1 ? e[d] = Kl(e, c, d, a[0]) : d == 1 ? e[b] = Kl(e, a, b, c[0]) : Jl(a, c, e, b, d);
        }
        function el(a) {
            var b, c, d;if (a.e == 0) {
                return 0;
            }b = a.d << 5;c = a.a[a.d - 1];if (a.e < 0) {
                d = Jk(a);if (d == a.d - 1) {
                    --c;c = c | 0;
                }
            }b -= Ui(c);return b;
        }
        function Nr(a, b) {
            var c, d, e;d = null;e = a.c;while (e) {
                c = a.b.Y(b, e.c);if (c == 0) {
                    return e;
                }if (c >= 0) {
                    e = e.a[1];
                } else {
                    d = e;e = e.a[0];
                }
            }return d;
        }
        function Or(a, b) {
            var c, d, e;d = null;e = a.c;while (e) {
                c = a.b.Y(b, e.c);if (c == 0) {
                    return e;
                }if (c <= 0) {
                    e = e.a[0];
                } else {
                    d = e;e = e.a[1];
                }
            }return d;
        }
        function tm(a, b, c) {
            var d, e;for (e = a.K(); e.O();) {
                d = e.P();if (Ce(b) === Ce(d) || b != null && gb(b, d)) {
                    c && e.Q();return true;
                }
            }return false;
        }
        function fl(a, b) {
            var c, d, e, f;c = b >> 5;b &= 31;e = a.d + c + (b == 0 ? 0 : 1);d = Ed(He, pw, 7, e, 15, 1);gl(d, a.a, c, b);f = new Tk(a.e, e, d);Fk(f);return f;
        }
        function yt(a) {
            wt();var b, c, d;c = ':' + a;d = vt[c];if (!(d === undefined)) {
                return d;
            }d = tt[c];b = d === undefined ? xt(a) : d;zt();vt[c] = b;return b;
        }
        function ih(a, b) {
            var c;if (fh(a) && fh(b)) {
                c = a % b;if (Ow < c && c < Mw) {
                    return c;
                }
            }return _g((Nd(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b, true), Jd));
        }
        function gk(a, b) {
            var c;a.c = b;a.a = el(b);a.a < 54 && (a.f = (c = b.d > 1 ? lh(mh(b.a[1], 32), Zg(b.a[0], Vw)) : Zg(b.a[0], Vw), rh(jh(b.e, c))));
        }
        function Od(a, b) {
            if (a.h == Kw && a.m == 0 && a.l == 0) {
                b && (Jd = Md(0, 0, 0));return Ld((pe(), ne));
            }b && (Jd = Md(a.l, a.m, a.h));return Md(0, 0, 0);
        }
        function iu(a) {
            if (a.d == 0) throw Xg(new Ab('Exact mass of ' + a.g + ' is unknown. Run calculateExactMass() first.'));return a.d;
        }
        function kt(a, b, c) {
            if (a < 0 || b > c) {
                throw Xg(new Ph(Gw + a + Hw + b + ', size: ' + c));
            }if (a > b) {
                throw Xg(new Mi(Gw + a + ' > toIndex: ' + b));
            }
        }
        function et(a, b) {
            if (0 > a) {
                throw Xg(new Mi('fromIndex: 0 > toIndex: ' + a));
            }if (a > b) {
                throw Xg(new Rh('fromIndex: 0, toIndex: ' + a + Fw + b));
            }
        }
        function Jt(a, b, c) {
            if (b > c) throw Xg(new iv(fx));this.d = b;this.c = c;this.e = Qu(a.a);this.f = Ru(a.a);this.a = 0;this.i = a.b;this.b = Pu(a.a);
        }
        function jk(a) {
            ck();if (!isNaN(a) && !isFinite(a) || isNaN(a)) {
                throw Xg(new gj('Infinite or NaN'));
            }ek(this, a.toPrecision(20));
        }
        function dl(a) {
            Dk();if ($g(a, 0) < 0) {
                if ($g(a, -1) != 0) {
                    return new Uk(-1, kh(a));
                }return xk;
            } else return $g(a, 10) <= 0 ? zk[sh(a)] : new Uk(1, a);
        }
        function Ek(a, b) {
            if (a.e > b.e) {
                return 1;
            }if (a.e < b.e) {
                return -1;
            }if (a.d > b.d) {
                return a.e;
            }if (a.d < b.d) {
                return -b.e;
            }return a.e * yl(a.a, b.a, a.d);
        }
        function xi(a) {
            var b;b = typeof a;if (oj(b, rw) || oj(b, sw) || oj(b, tw)) {
                return true;
            }return a != null && a.$implements__java_lang_Comparable;
        }
        function ci(a) {
            return String.fromCharCode(a).toLocaleUpperCase().charCodeAt(0) == a && /[A-Z]/i.test(String.fromCharCode(a));
        }
        function Bh() {
            Ah = {};!Array.isArray && (Array.isArray = function (a) {
                return Object.prototype.toString.call(a) === '[object Array]';
            });
        }
        function Yh(a, b, c) {
            var d, e;d = lj(a, b++);if (d >= 55296 && d <= 56319 && b < c && ai(e = a.charCodeAt(b))) {
                return Cw + ((d & 1023) << 10) + (e & 1023);
            }return d;
        }
        function ui(a, b) {
            var c = 0;while (!b[c] || b[c] == '') {
                c++;
            }var d = b[c++];for (; c < b.length; c++) {
                if (!b[c] || b[c] == '') {
                    continue;
                }d += a + b[c];
            }return d;
        }
        function lc() {
            if (Error.stackTraceLimit > 0) {
                $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;return true;
            }return 'stack' in new Error();
        }
        function Tb() {
            var a;if (Ob != 0) {
                a = Jb();if (a - Pb > 2000) {
                    Pb = a;Qb = $wnd.setTimeout(Zb, 10);
                }
            }if (Ob++ == 0) {
                ac((_b(), $b));return true;
            }return false;
        }
        function bj(a) {
            var b;if ($wnd.Math.abs(a) < 4503599627370496) {
                b = a % 2;b == -1.5 || b == 0.5 ? a = $wnd.Math.floor(a) : a = $wnd.Math.round(a);
            }return a;
        }
        function Kl(a, b, c, d) {
            Gl();var e, f;e = 0;for (f = 0; f < c; f++) {
                e = Yg(jh(Zg(b[f], Vw), Zg(d, Vw)), Zg(sh(e), Vw));a[f] = sh(e);e = oh(e, 32);
            }return sh(e);
        }
        function Ou(a, b) {
            var c, d, e, f;for (d = (f = new jp(a.g).a.N().b.V(), new pp(f)); _n(d.a.a);) {
                c = (e = is(d.a), e.S());if (oj(c.i, b)) return c;
            }return null;
        }
        function Pt(a, b) {
            var c, d, e, f, g;d = new bu();c = new ps(a).b.V();while (_n(c.a)) {
                e = c.b = ao(c.a);f = e.S();g = e.T();Tr(d, (ht(f), f) + b, g);js(c);
            }Ot(a, d);
        }
        function Ut(a, b) {
            var c, d, e, f, g;d = new bu();c = new ps(a).b.V();while (_n(c.a)) {
                e = c.b = ao(c.a);f = e.S();g = e.T();Tr(d, (ht(f), f) * b, g);js(c);
            }Ot(a, d);
        }
        function Tt(a) {
            var b, c, d, e, f, g;b = hx;f = 0;c = new ps(a).b.V();while (_n(c.a)) {
                d = c.b = ao(c.a);e = d.S();g = nt(d.T());if (g > b) {
                    b = g;f = (ht(e), e);
                }
            }return f;
        }
        function ad(f, a) {
            var b = f.a;var c;a = String(a);b.hasOwnProperty(a) && (c = b[a]);var d = (md(), ld)[typeof c];var e = d ? d(c) : sd(typeof c);return e;
        }
        function Hp(a, b) {
            var c, d, e;e = a.a.length;b.length < e && (b = (d = new Array(e), Id(d, b)));for (c = 0; c < e; ++c) {
                b[c] = a.a[c];
            }b.length > e && (b[e] = null);return b;
        }
        function wm(a, b) {
            var c, d, e, f;f = a.size();b.length < f && (b = (e = new Array(f), Id(e, b)));d = a.K();for (c = 0; c < f; ++c) {
                b[c] = d.P();
            }b.length > f && (b[f] = null);return b;
        }
        function Vk(a) {
            Dk();if (a.length == 0) {
                this.e = 0;this.d = 1;this.a = Hd(Ad(He, 1), pw, 7, 15, [0]);
            } else {
                this.e = 1;this.d = a.length;this.a = a;Fk(this);
            }
        }
        function Rk(a, b) {
            this.e = a;if (b < Ww) {
                this.d = 1;this.a = Hd(Ad(He, 1), pw, 7, 15, [b | 0]);
            } else {
                this.d = 2;this.a = Hd(Ad(He, 1), pw, 7, 15, [b % Ww | 0, b / Ww | 0]);
            }
        }
        function tu(a, b, c, d, e, f) {
            a.d = _i(De($wnd.Math.floor((c - f - b - e) / a.a.e)), a.a.d);a.c = aj(De($wnd.Math.ceil((c + f - b - d) / a.a.e)), a.a.c);a.b = a.d - 1;
        }
        function pj(a) {
            ht(Bw);if (a == null) {
                return false;
            }if (oj(Bw, a)) {
                return true;
            }return Bw.length == a.length && oj(Bw.toLowerCase(), a.toLowerCase());
        }
        function te(a, b) {
            if (Be(a)) {
                return !!se[b];
            } else if (a.ab) {
                return !!a.ab[b];
            } else if (ye(a)) {
                return !!re[b];
            } else if (xe(a)) {
                return !!qe[b];
            }return false;
        }
        function Ju(a, b, c, d) {
            this.a = b;this.b = c;this.d = new Jp();Fu(this, a, d);if (this.d.a.length == 0) throw Xg(new iv('Cannot parse: empty formula: ->' + a + '<-'));
        }
        function Pr(a, b, c, d, e, f, g, h) {
            var i, j;if (!d) {
                return;
            }i = d.a[0];!!i && Pr(a, b, c, i, e, f, g, h);Qr(a, c, d.c, e, f, g, h) && b.add(d);j = d.a[1];!!j && Pr(a, b, c, j, e, f, g, h);
        }
        function zj(a) {
            var b, c, d;c = a.length;d = 0;while (d < c && a.charCodeAt(d) <= 32) {
                ++d;
            }b = c;while (b > d && a.charCodeAt(b - 1) <= 32) {
                --b;
            }return d > 0 || b < c ? a.substr(d, b - d) : a;
        }
        function ob(a, b, c) {
            var d, e, f, g, h;pb(a);for (e = (a.i == null && (a.i = Ed(yf, pw, 9, 0, 0, 1)), a.i), f = 0, g = e.length; f < g; ++f) {
                d = e[f];ob(d, b, '\t' + c);
            }h = a.e;!!h && ob(h, b, c);
        }
        function Cj(a) {
            var b;b = 0;while (0 <= (b = a.indexOf('\\', b))) {
                a.charCodeAt(b + 1) == 36 ? a = a.substr(0, b) + '$' + xj(a, ++b) : a = a.substr(0, b) + ('' + xj(a, ++b));
            }return a;
        }
        function Rd(a, b) {
            var c, d, e;if (b <= 22) {
                c = a.l & (1 << b) - 1;d = e = 0;
            } else if (b <= 44) {
                c = a.l;d = a.m & (1 << b - 22) - 1;e = 0;
            } else {
                c = a.l;d = a.m;e = a.h & (1 << b - 44) - 1;
            }return Md(c, d, e);
        }
        function Qr(a, b, c, d, e, f, g) {
            var h, i;if (b.Z() && (i = a.b.Y(c, d), i < 0 || !e && i == 0)) {
                return false;
            }if (b.$() && (h = a.b.Y(c, f), h > 0 || !g && h == 0)) {
                return false;
            }return true;
        }
        function Vs(a, b, c, d, e, f) {
            var g, h, i;if (Ce(a) === Ce(c)) {
                a = a.slice(b, b + e);b = 0;
            }for (h = b, i = b + e; h < i;) {
                g = h + Ew < i ? h + Ew : i;e = g - h;Ts(c, d, f ? e : 0, a.slice(h, g));h = g;d += e;
            }
        }
        function yu(a) {
            var b, c, d, e, f;c = '';b = new km();d = em(b, bt((f = a, Zs(), f)));for (e = 0; e < 5; e++) {
                e == 0 ? c += ue($i(d[0] % 26) + 65 & Dw) : c += ue($i(d[e] % 26) + 97 & Dw);
            }return c;
        }
        function Ot(a, b) {
            var c, d, e, f, g;e = new ps(b).b.V();while (_n(e.a)) {
                c = e.b = ao(e.a);f = c.S();g = c.T();d = Um(Kr(a, f));d != null && (g = (ht(d), d) + (ht(g), g));Tr(a, f, g);
            }
        }
        function Nu(a) {
            var b, c, d, e, f, g;f = Pu(a);for (c = (e = new jp(a.g).a.N().b.V(), new pp(e)); _n(c.a.a);) {
                b = (d = is(c.a), d.S());b.g = (g = bj(b.b * Ct(b) * 100 / f * Sw), g / Sw);
            }
        }
        function Ru(a) {
            var b, c, d, e, f;if (a.e) throw Xg(new iv(tx));f = 0;for (c = (e = new jp(a.g).a.N().b.V(), new pp(e)); _n(c.a.a);) {
                b = (d = is(c.a), d.S());f += b.f * Ct(b);
            }return f;
        }
        function Cu(a) {
            var b, c, d;if (a.c) throw Xg(new iv(qx));if (a.e) throw Xg(new iv(rx));d = 0;for (c = new bq(a.d); c.a < c.c.a.length;) {
                b = aq(c);d = De(d + Ru(b) * b.f);
            }return d;
        }
        function Fd(a, b) {
            var c = new Array(b);var d;switch (a) {case 14:case 15:
                    d = 0;break;case 16:
                    d = false;break;default:
                    return c;}for (var e = 0; e < b; ++e) {
                c[e] = d;
            }return c;
        }
        function Wd(a, b) {
            var c, d, e;e = a.h - b.h;if (e < 0) {
                return false;
            }c = a.l - b.l;d = a.m - b.m + (c >> 22);e += d >> 22;if (e < 0) {
                return false;
            }a.l = c & Iw;a.m = d & Iw;a.h = e & Jw;return true;
        }
        function ah(a, b) {
            var c;if (fh(a) && fh(b)) {
                c = a / b;if (Ow < c && c < Mw) {
                    return c < 0 ? $wnd.Math.ceil(c) : $wnd.Math.floor(c);
                }
            }return _g(Nd(fh(a) ? qh(a) : a, fh(b) ? qh(b) : b, false));
        }
        function Lm(a, b, c) {
            var d, e, f;for (e = a.N().K(); e.O();) {
                d = e.P();f = d.S();if (Ce(b) === Ce(f) || b != null && gb(b, f)) {
                    if (c) {
                        d = new Qo(d.S(), d.T());e.Q();
                    }return d;
                }
            }return null;
        }
        function Km(a, b) {
            var c, d, e;c = b.S();e = b.T();d = a.get(c);if (!(Ce(e) === Ce(d) || e != null && gb(e, d))) {
                return false;
            }if (d == null && !a.containsKey(c)) {
                return false;
            }return true;
        }
        function Uk(a, b) {
            this.e = a;if (bh(Zg(b, -4294967296), 0)) {
                this.d = 1;this.a = Hd(Ad(He, 1), pw, 7, 15, [sh(b)]);
            } else {
                this.d = 2;this.a = Hd(Ad(He, 1), pw, 7, 15, [sh(b), sh(nh(b, 32))]);
            }
        }
        function Zd(a, b) {
            var c, d, e, f, g, h, i, j;i = a.h >> 19;j = b.h >> 19;if (i != j) {
                return j - i;
            }e = a.h;h = b.h;if (e != h) {
                return e - h;
            }d = a.m;g = b.m;if (d != g) {
                return d - g;
            }c = a.l;f = b.l;return c - f;
        }
        function nl(a) {
            var b, c, d;if ($g(a, 0) >= 0) {
                c = ah(a, Nw);d = ih(a, Nw);
            } else {
                b = oh(a, 1);c = ah(b, 500000000);d = ih(b, 500000000);d = Yg(mh(d, 1), Zg(a, 1));
            }return lh(mh(d, 32), Zg(c, Vw));
        }
        function em(a, b) {
            var c, d;im(a, b, 0, b.length);return c = rm(mh(a.b, 3)), d = Ed(Ee, pw, 7, 16, 15, 1), a.c > 8 ? im(a, fm, 0, a.c - 8) : im(a, fm, 0, 64 + (a.c - 8)), im(a, c, 0, 8), qm(a.d, d), hm(a), d;
        }
        function qm(a, b) {
            var c, d;for (c = 0, d = 0; c < 4; c++) {
                b[d++] = (a[c] & 255) << 24 >> 24;b[d++] = (a[c] >>> 8 & 255) << 24 >> 24;b[d++] = (a[c] >>> 16 & 255) << 24 >> 24;b[d++] = (a[c] >>> 24 & 255) << 24 >> 24;
            }
        }
        function gu(a) {
            var b, c, d, e, f;if (qn(a.b) == 0) {
                return;
            }e = 0;for (d = (f = new zo(a.b).a.N().K(), new Eo(f)); d.a.O();) {
                c = (b = d.a.P(), b.T());e += c.b * c.d / 100;
            }if (e == 0) return;a.c = e;
        }
        function Tu(a) {
            var b, c, d, e, f;if (a.g.d == 0) return '';f = new Gj('');for (c = (e = new jp(a.g).a.N().b.V(), new pp(e)); _n(c.a.a);) {
                b = (d = is(c.a), d.S());Ej(f, Et(b));
            }return f.a;
        }
        function yh(b, c, d, e) {
            xh();var f = vh;$moduleName = c;$moduleBase = d;Vg = e;function g() {
                for (var a = 0; a < f.length; a++) {
                    f[a]();
                }
            }
            if (b) {
                try {
                    lw(g)();
                } catch (a) {
                    b(c, a);
                }
            } else {
                lw(g)();
            }
        }
        function Cl(a, b, c, d, e) {
            var f, g;f = 0;for (g = 0; g < e; g++) {
                f = Yg(f, ph(Zg(b[g], Vw), Zg(d[g], Vw)));a[g] = sh(f);f = nh(f, 32);
            }for (; g < c; g++) {
                f = Yg(f, Zg(b[g], Vw));a[g] = sh(f);f = nh(f, 32);
            }
        }
        function ic(a) {
            var b, c, d, e;b = 'hc';c = 'vb';e = aj(a.length, 5);for (d = e - 1; d >= 0; d--) {
                if (oj(a[d].d, b) || oj(a[d].d, c)) {
                    a.length >= d + 1 && (a.splice(0, d + 1), undefined);break;
                }
            }return a;
        }
        function Ai(a) {
            yi == null && (yi = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);if (!yi.test(a)) {
                throw Xg(new gj(ww + a + '"'));
            }return parseFloat(a);
        }
        function Tj(a, b, c, d, e) {
            Sj();var f, g;it(a, 'src');it(c, 'dest');ib(a);ib(c);g = a.length;f = c.length;if (b < 0 || d < 0 || e < 0 || b + e > g || d + e > f) {
                throw Xg(new Oh());
            }e > 0 && Vs(a, b, c, d, e, true);
        }
        function Bu(a) {
            var b, c, d, e;if (a.c) throw Xg(new iv(qx));if (a.e) throw Xg(new iv(rx));b = 0;for (d = new bq(a.d); d.a < d.c.a.length;) {
                c = aq(d);b += Qu(c) * c.f;
            }return e = bj(b * Tw), e / Tw;
        }
        function Du(a, b) {
            var c, d, e, f;if (a.c) throw Xg(new iv(ox));if (a.e) throw Xg(new iv(px));f = 0;for (d = new bq(a.d); d.a < d.c.a.length;) {
                c = aq(d);f += nt(Jv(c, b)) * c.f;
            }return e = bj(f * Tw), e / Tw;
        }
        function zu(a) {
            var b, c, d, e;if (a.e) throw Xg(new iv('The charge is not clearly defined'));b = 0;for (d = new bq(a.d); d.a < d.c.a.length;) {
                c = aq(d);b += c.a * c.f;
            }return e = bj(b * Tw), e / Tw;
        }
        function Qu(a) {
            var b, c, d, e, f, g;if (a.e) throw Xg(new iv(tx));f = 0;for (c = (e = new jp(a.g).a.N().b.V(), new pp(e)); _n(c.a.a);) {
                b = (d = is(c.a), d.S());f += b.e * Ct(b);
            }return g = bj(f * Tw), g / Tw;
        }
        function Ol(a, b) {
            Gl();var c, d;d = (Dk(), yk);c = a;for (; b > 1; b >>= 1) {
                (b & 1) != 0 && (d = Lk(d, c));c.d == 1 ? c = Lk(c, c) : c = new Vk(Ql(c.a, c.d, Ed(He, pw, 7, c.d << 1, 15, 1)));
            }d = Lk(d, c);return d;
        }
        function Dd(a, b, c, d, e, f, g) {
            var h, i, j, k, l;k = e[f];j = f == g - 1;h = j ? d : 0;l = Fd(h, k);d != 10 && Hd(Ad(a, g - f), b[f], c[f], h, l);if (!j) {
                ++f;for (i = 0; i < k; ++i) {
                    l[i] = Dd(a, b, c, d, e, f, g);
                }
            }return l;
        }
        function hm(a) {
            a.a = Ed(Ee, pw, 7, 64, 15, 1);a.d = Ed(He, pw, 7, 4, 15, 1);a.e = Ed(He, pw, 7, 16, 15, 1);a.d[0] = 1732584193;a.d[1] = -271733879;a.d[2] = -1732584194;a.d[3] = 271733878;a.b = 0;a.c = 64;
        }
        function xm(a) {
            var b, c, d;d = new Hr('[', ']');for (c = a.K(); c.O();) {
                b = c.P();Gr(d, b === a ? '(this Collection)' : b == null ? xw : Gh(b));
            }return !d.a ? d.c : d.e.length == 0 ? d.a.a : d.a.a + ('' + d.e);
        }
        function Et(a) {
            var b;a.a != 0 ? b = '<sup>' + a.a + '<\/sup>' + a.i : b = a.i;if (a.c == 1 && a.d == 1) return b;if (a.c == a.d) return b + '<sub>' + a.c + '<\/sub>';return b + '<sub>' + a.d + '-' + a.c + '<\/sub>';
        }
        function gm() {
            gm = Dh;fm = Hd(Ad(Ee, 1), pw, 7, 15, [-128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
        function Iv(a, b) {
            Gv();var c, d, e, f;f = 2;for (d = new bq(a.a); d.a < d.c.a.length;) {
                c = aq(d);e = Hv(c.a.i);if (!e) {
                    if (b == null) {
                        return null;
                    } else {
                        f += (ht(b), b) * c.b;
                    }
                } else {
                    f += e.a * c.b;
                }
            }return f / 2;
        }
        function Xv(a, b, c) {
            var d, e;for (d = 0; d < a.a.a.length; d++) {
                for (e = d + 1; e < a.a.a.length; e++) {
                    b[d] = b[d] + su((lr(e, a.a.a.length), yp(a.a, e)));c[d] = c[d] + ru((lr(e, a.a.a.length), yp(a.a, e)));
                }
            }
        }
        function Mq() {
            function b() {
                try {
                    return new Map().entries().next().done;
                } catch (a) {
                    return false;
                }
            }
            if (typeof Map === 'function' && Map.prototype.entries && b()) {
                return Map;
            } else {
                return Nq();
            }
        }
        function Bj(a) {
            var b, c;if (a >= Cw) {
                b = 55296 + (a - Cw >> 10 & 1023) & Dw;c = 56320 + (a - Cw & 1023) & Dw;return String.fromCharCode(b) + ('' + String.fromCharCode(c));
            } else {
                return String.fromCharCode(a & Dw);
            }
        }
        function gl(a, b, c, d) {
            var e, f, g;if (d == 0) {
                Tj(b, 0, a, c, a.length - c);
            } else {
                g = 32 - d;a[a.length - 1] = 0;for (f = a.length - 1; f > c; f--) {
                    a[f] |= b[f - c - 1] >>> g;a[f - 1] = b[f - c - 1] << d;
                }
            }for (e = 0; e < c; e++) {
                a[e] = 0;
            }
        }
        function im(a, b, c, d) {
            while (true) {
                if (d >= a.c) {
                    Tj(b, c, a.a, sh(Zg(a.b, 63)), a.c);jm(a, a.a);a.b = Yg(a.b, a.c);c += a.c;d -= a.c;a.c = 64;
                } else {
                    Tj(b, c, a.a, sh(Zg(a.b, 63)), d);a.b = Yg(a.b, d);a.c -= d;break;
                }
            }
        }
        function Xr(a, b, c, d) {
            var e, f;f = b;e = f.c == null || a.b.Y(c.c, f.c) > 0 ? 1 : 0;while (f.a[e] != c) {
                f = f.a[e];e = a.b.Y(c.c, f.c) > 0 ? 1 : 0;
            }f.a[e] = d;d.b = c.b;d.a[0] = c.a[0];d.a[1] = c.a[1];c.a[0] = null;c.a[1] = null;
        }
        function Bv(a, b, c) {
            var d, e;d = b.a != 0 ? Ct(b) : $wnd.Math.pow(qn(kn(a.a.a, b.i).b) - 1, Ct(b));e = c.a != 0 ? Ct(c) : $wnd.Math.pow(qn(kn(a.a.a, c.i).b) - 1, Ct(c));if (d == e) return Di(b.b, c.b);return -Di(d, e);
        }
        function zv(a, b, c) {
            var d, e, f, g, h;this.d = a;qv(this);this.a = c;e = qn(b.b);xv(this, a.b / (e * 4));for (g = (h = new zo(b.b).a.N().K(), new Eo(h)); g.a.O();) {
                f = (d = g.a.P(), d.T());Tr(this.c, f.b, f.d / 100);
            }
        }
        function Ft(a, b) {
            var c, d;c = a.i;!!b && ln(b, a.i) && uj(kn(b, a.i).e) && (c = kn(b, a.i).e);d = '';a.a != 0 ? d += '[' + a.a + c + ']' : d += c;if (a.c == 1 && a.d == 1) return d;if (a.c == a.d) return d + a.c;return d + a.d + '-' + a.c;
        }
        function Au(a) {
            var b, c, d, e;if (a.c) throw Xg(new iv(qx));if (a.e) throw Xg(new iv('The mass is not defined'));d = 0;for (c = new bq(a.d); c.a < c.c.a.length;) {
                b = aq(c);d += Pu(b) * b.f;
            }return e = bj(d * Sw), e / Sw;
        }
        function de(a, b) {
            var c, d, e;b &= 63;if (b < 22) {
                c = a.l << b;d = a.m << b | a.l >> 22 - b;e = a.h << b | a.m >> 22 - b;
            } else if (b < 44) {
                c = 0;d = a.l << b - 22;e = a.m << b - 22 | a.l >> 44 - b;
            } else {
                c = 0;d = 0;e = a.l << b - 44;
            }return Md(c & Iw, d & Iw, e & Jw);
        }
        function fe(a, b) {
            var c, d, e, f;b &= 63;c = a.h & Jw;if (b < 22) {
                f = c >>> b;e = a.m >> b | c << 22 - b;d = a.l >> b | a.m << 22 - b;
            } else if (b < 44) {
                f = 0;e = c >>> b - 22;d = a.m >> b - 22 | a.h << 44 - b;
            } else {
                f = 0;e = 0;d = c >>> b - 44;
            }return Md(d & Iw, e & Iw, f & Jw);
        }
        function $t(a) {
            var b, c, d, e, f, g, h;e = a.d;e > (a.a / 2 | 0) && (e = a.a / 2 | 0);f = '';d = new ps(a).b.V();b = 0;while (_n(d.a) && b < e) {
                ++b;c = d.b = ao(d.a);g = nt(c.S());h = nt(c.T());h > -1.0E100 && (f += g + ', ' + h + ix);
            }return f;
        }
        function _t(a) {
            var b, c, d, e, f, g, h;e = a.d;e > (a.a / 2 | 0) && (e = a.a / 2 | 0);f = new Fj();d = new ps(a).b.V();b = 0;while (_n(d.a) && b < e) {
                ++b;c = d.b = ao(d.a);g = nt(c.S());h = nt(c.T());Ej(f, Yt(g) + ', ' + Yt(h * 100) + ix);
            }return f;
        }
        function Xt(a) {
            var b, c, d, e, f, g, h;g = a.a / 2 | 0;if (a.d < g) return;h = new Ms(new du());sm(h, new ps(a));e = 0;for (f = (d = new jp(h.g).a.N().b.V(), new pp(d)); _n(f.a.a);) {
                c = (b = is(f.a), b.S());e++ > g && Ur(a, c.S());
            }
        }
        function Mu(a, b) {
            var c;if (b.c < b.d) throw Xg(new iv('Syntax error: maxCount<minCount'));c = Ou(a, b.i);if (c) if (c.a == b.a) {
                c.d += b.d;c.c += b.c;return;
            }b.c == 0 && b.d == 0 && (a.e = true);Tr(a.g, b, (Th(), Sh)) == null;
        }
        function rk(a, b, c) {
            var d, e, f, g, h;f = (e = a / b, e > 0 ? $wnd.Math.floor(e) : $wnd.Math.ceil(e));g = a % b;h = Di(a * b, 0);if (g != 0) {
                d = Di($wnd.Math.abs(g) * 2, $wnd.Math.abs(b));f += uk(De(f) & 1, h * (5 + d), c);
            }return new kk(f);
        }
        function jl(a, b, c, d, e) {
            var f, g, h;f = true;for (g = 0; g < d; g++) {
                f = f & c[g] == 0;
            }if (e == 0) {
                Tj(c, d, a, 0, b);
            } else {
                h = 32 - e;f = f & c[g] << h == 0;for (g = 0; g < b - 1; g++) {
                    a[g] = c[g + d] >>> e | c[g + d + 1] << h;
                }a[g] = c[g + d] >>> e;++g;
            }return f;
        }
        function Fh(a, b) {
            var c = $wnd;if (a === '') {
                return c;
            }var d = a.split('.');!(d[0] in c) && c.execScript && c.execScript('var ' + d[0]);for (var e; d.length && (e = d.shift());) {
                c = c[e] = c[e] || !d.length && b || {};
            }return c;
        }
        function _u(b) {
            var c, d;d = new kw();jw(d, 'name', b.c);jw(d, 'symbol', b.b);jw(d, wx, Uu(b.a));try {
                hw(d, 'mass', new Uc(Pu(b.a)));
            } catch (a) {
                a = Wg(a);if (we(a, 4)) {
                    c = a;ob(c, (Sj(), Qj), '');
                } else throw Xg(a);
            }return d;
        }
        function Qt(a, b) {
            var c, d, e, f, g, h;e = new bu();d = new ps(a).b.V();while (_n(d.a)) {
                f = d.b = ao(d.a);g = nt(f.S());h = nt(f.T());g = bj(g / b) * b;c = Um(e.W(g));c != null && (h += (ht(c), c));Tr(e, g, h);
            }a.c = null;a.d = 0;Ot(a, e);
        }
        function Eb(a) {
            var b;if (a.c == null) {
                b = Ce(a.b) === Ce(Cb) ? null : a.b;a.d = b == null ? xw : ze(b) ? b == null ? null : b.name : Be(b) ? 'String' : fi(ib(b));a.a = a.a + ': ' + (ze(b) ? b == null ? null : b.message : b + '');a.c = '(' + a.d + ') ' + a.a;
            }
        }
        function Zl() {
            Zl = Dh;Yl = new $l('UP', 0);Sl = new $l('DOWN', 1);Rl = new $l('CEILING', 2);Tl = new $l('FLOOR', 3);Wl = new $l('HALF_UP', 4);Ul = new $l('HALF_DOWN', 5);Vl = new $l('HALF_EVEN', 6);Xl = new $l('UNNECESSARY', 7);
        }
        function Wt(a, b) {
            var c, d, e, f, g;c = hx;d = new ps(a).b.V();while (_n(d.a)) {
                e = d.b = ao(d.a);e.S();g = nt(e.T());g > c && (c = g);
            }d = new ps(a).b.V();while (_n(d.a)) {
                e = d.b = ao(d.a);f = e.S();g = e.T();Tr(a, f, (ht(g), g) / c * b);
            }
        }
        function Bq(a, b, c) {
            var d, e, f, g, h;h = b == null ? 0 : (g = kb(b), g | 0);e = (d = a.a.get(h), d == null ? [] : d);if (e.length == 0) {
                a.a.set(h, e);
            } else {
                f = yq(b, e);if (f) {
                    return f.U(c);
                }
            }e[e.length] = new Qo(b, c);++a.c;tq(a.b);return null;
        }
        function jq(a, b, c, d, e, f) {
            var g, h, i, j;g = d - c;if (g < 7) {
                gq(b, c, d, f);return;
            }i = c + e;h = d + e;j = i + (h - i >> 1);jq(b, a, i, j, -e, f);jq(b, a, j, h, -e, f);if (f.Y(a[j - 1], a[j]) <= 0) {
                while (c < d) {
                    b[c++] = a[i++];
                }return;
            }hq(a, i, j, h, b, c, d, f);
        }
        function rv(a, b) {
            var c;if (b <= 0) throw Xg(new Ab('Error: power=' + b));if (b == 1) return a;if (b == 2) {
                a.c = tv(a, a);return a;
            }--b;c = new yv(a.d, a.c);while (b != 0) {
                (b & 1) != 0 && (a.c = tv(a, c));b >>= 1;b != 0 && (c.c = tv(c, c));
            }return a;
        }
        function xt(a) {
            var b, c, d, e;b = 0;d = a.length;e = d - 4;c = 0;while (c < e) {
                b = a.charCodeAt(c + 3) + 31 * (a.charCodeAt(c + 2) + 31 * (a.charCodeAt(c + 1) + 31 * (a.charCodeAt(c) + 31 * b)));b = b | 0;c += 4;
            }while (c < d) {
                b = b * 31 + lj(a, c++);
            }b = b | 0;return b;
        }
        function ec(b, c) {
            var d, e, f, g;for (e = 0, f = b.length; e < f; e++) {
                g = b[e];try {
                    g[1] ? g[0].cb() && (c = dc(c, g)) : g[0].cb();
                } catch (a) {
                    a = Wg(a);if (we(a, 9)) {
                        d = a;Rb();Xb(we(d, 52) ? Ce(d.b) === Ce(Cb) ? null : d.b : d);
                    } else throw Xg(a);
                }
            }return c;
        }
        function Su(a) {
            var b, c, d, e, f;if (a.e) throw Xg(new iv('Cannot get the number of atoms: this is a range formula'));f = 0;for (c = (e = new jp(a.g).a.N().b.V(), new pp(e)); _n(c.a.a);) {
                b = (d = is(c.a), d.S());f += Ct(b);
            }return f;
        }
        function Pu(a) {
            var b, c, d, e, f, g;if (a.e) throw Xg(new iv('Cannot calculate mass of a range formula'));f = 0;for (c = (e = new jp(a.g).a.N().b.V(), new pp(e)); _n(c.a.a);) {
                b = (d = is(c.a), d.S());f += b.b * Ct(b);
            }return g = bj(f * Sw), g / Sw;
        }
        function pd(a) {
            if (!a) {
                return Pc(), Oc;
            }var b = a.valueOf ? a.valueOf() : a;if (b !== a) {
                var c = ld[typeof b];return c ? c(b) : sd(typeof b);
            } else if (a instanceof Array || a instanceof $wnd.Array) {
                return new Ac(a);
            } else {
                return new ed(a);
            }
        }
        function Mk(a, b) {
            var c;if (b < 0) {
                throw Xg(new Nh('Negative exponent'));
            }if (b == 0) {
                return yk;
            } else if (b == 1 || Hk(a, yk) || Hk(a, Ck)) {
                return a;
            }if (!Qk(a, 0)) {
                c = 1;while (!Qk(a, c)) {
                    ++c;
                }return Lk($k(c * b), Mk(Pk(a, c), b));
            }return Ol(a, b);
        }
        function nk(a) {
            var b, c;if (a > -140737488355328 && a < 140737488355328) {
                if (a == 0) {
                    return 0;
                }b = a < 0;b && (a = -a);c = De($wnd.Math.floor($wnd.Math.log(a) / 0.6931471805599453));(!b || a != $wnd.Math.pow(2, c)) && ++c;return c;
            }return ok(dh(a));
        }
        function Kv(a) {
            var b, c, d;this.b = 61;this.a = a;c = a / (2 * $wnd.Math.sqrt(2 * $wnd.Math.log(2)));this.c = Ed(Ge, Qw, 7, 61, 15, 1);for (b = 0; b < 61; b++) {
                d = b - 30;this.c[b] = 1 / (c * $wnd.Math.sqrt(6.283185307179586)) * $wnd.Math.exp(-d * d / (2 * c * c));
            }
        }
        function Jl(a, b, c, d, e) {
            var f, g, h, i;if (Ce(a) === Ce(b) && d == e) {
                Ql(a, d, c);return;
            }for (h = 0; h < d; h++) {
                g = 0;f = a[h];for (i = 0; i < e; i++) {
                    g = Yg(Yg(jh(Zg(f, Vw), Zg(b[i], Vw)), Zg(c[h + i], Vw)), Zg(sh(g), Vw));c[h + i] = sh(g);g = oh(g, 32);
                }c[h + e] = sh(g);
            }
        }
        function Uu(a) {
            var b, c, d, e, f;if (a.g.d == 0) return '';f = new Gj('');for (c = (e = new jp(a.g).a.N().b.V(), new pp(e)); _n(c.a.a);) {
                b = (d = is(c.a), d.S());Ej(f, Ft(b, a.c));
            }a.a != 0 && (a.a > 0 ? Ej(f, '(+' + a.a + ')') : Ej(f, '(' + a.a + ')'));return f.a;
        }
        function Jv(a, b) {
            Gv();var c, d, e, f, g, h;h = 2;for (d = (g = new jp(a.g).a.N().b.V(), new pp(g)); _n(d.a.a);) {
                c = (f = is(d.a), f.S());e = Hv(c.i);if (!e) {
                    if (b == null) {
                        return null;
                    } else {
                        h += (ht(b), b) * Ct(c);
                    }
                } else {
                    h += e.a * Ct(c);
                }
            }return (h + a.a) / 2;
        }
        function Ui(a) {
            var b, c, d;if (a < 0) {
                return 0;
            } else if (a == 0) {
                return 32;
            } else {
                d = -(a >> 16);b = d >> 16 & 16;c = 16 - b;a = a >> b;d = a - 256;b = d >> 16 & 8;c += b;a <<= b;d = a - 4096;b = d >> 16 & 4;c += b;a <<= b;d = a - 16384;b = d >> 16 & 2;c += b;a <<= b;d = a >> 14;b = d & ~(d >> 1);return c + 2 - b;
            }
        }
        function Mb(b) {
            var c = (!Kb && (Kb = Nb()), Kb);var d = b.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function (a) {
                return Lb(a, c);
            });return '"' + d + '"';
        }
        function Cq(a, b) {
            var c, d, e, f, g, h;g = b == null ? 0 : (f = kb(b), f | 0);d = (c = a.a.get(g), c == null ? [] : c);for (h = 0; h < d.length; h++) {
                e = d[h];if (wq(b, e.S())) {
                    if (d.length == 1) {
                        d.length = 0;a.a[dx](g);
                    } else {
                        d.splice(h, 1);
                    }--a.c;tq(a.b);return e.T();
                }
            }return null;
        }
        function ee(a, b) {
            var c, d, e, f, g;b &= 63;c = a.h;d = (c & Kw) != 0;d && (c |= -1048576);if (b < 22) {
                g = c >> b;f = a.m >> b | c << 22 - b;e = a.l >> b | a.m << 22 - b;
            } else if (b < 44) {
                g = d ? Jw : 0;f = c >> b - 22;e = a.m >> b - 22 | c << 44 - b;
            } else {
                g = d ? Jw : 0;f = d ? Iw : 0;e = c >> b - 44;
            }return Md(e & Iw, f & Iw, g & Jw);
        }
        function Hu(a) {
            var b, c, d, e, f;d = new bq(a.d);f = new Gj('');b = true;while (d.a < d.c.a.length) {
                b ? b = false : (f.a += '.', f);c = aq(d);if (c.f == 1) {
                    Ej(f, Uu(c));
                } else if (c.f == 0) {
                    Ej(f, 'n' + Uu(c));
                } else {
                    e = vj(c.f + '', '\\.0+$', '');Ej(f, e + ('' + Uu(c)));
                }
            }return f.a;
        }
        function Qk(a, b) {
            var c, d, e;if (b == 0) {
                return (a.a[0] & 1) != 0;
            }if (b < 0) {
                throw Xg(new Nh('Negative bit address'));
            }e = b >> 5;if (e >= a.d) {
                return a.e < 0;
            }c = a.a[e];b = 1 << (b & 31);if (a.e < 0) {
                d = Jk(a);if (e < d) {
                    return false;
                } else d == e ? c = -c : c = ~c;
            }return (c & b) != 0;
        }
        function ul(a, b, c, d, e) {
            var f, g, h;f = 0;g = 0;for (h = 0; h < d; h++) {
                f = (Gl(), Yg(jh(Zg(c[h], Vw), Zg(e, Vw)), Zg(sh(f), Vw)));g = Yg(ph(Zg(a[b + h], Vw), Zg(f, Vw)), g);a[b + h] = sh(g);g = nh(g, 32);f = oh(f, 32);
            }g = Yg(ph(Zg(a[b + d], Vw), f), g);a[b + d] = sh(g);return sh(nh(g, 32));
        }
        function ri(a) {
            if (a.I()) {
                var b = a.c;b.J() ? a.k = '[' + b.j : !b.I() ? a.k = '[L' + b.G() + ';' : a.k = '[' + b.G();a.b = b.F() + '[]';a.i = b.H() + '[]';return;
            }var c = a.f;var d = a.d;d = d.split('/');a.k = ui('.', [c, ui('$', d)]);a.b = ui('.', [c, ui('.', d)]);a.i = d[d.length - 1];
        }
        function _v(b, c) {
            var d, e, f, g, h;h = new gr();try {
                for (e = (g = new jp(b.g).a.N().b.V(), new pp(g)); _n(e.a.a);) {
                    d = (f = is(e.a), f.S());d.c = aj(d.c, De(c / d.e));if (d.d > d.c) return null;fr(h, new uu(d));
                }Fp(h.a);
            } catch (a) {
                a = Wg(a);if (!we(a, 4)) throw Xg(a);
            }return h;
        }
        function Gu(b) {
            var c, d, e;e = wj(b, '/');if (e.length != 2) throw Xg(new iv(sx + b));try {
                c = Bi(e[1]);if (c == 0) throw Xg(new iv('Syntax error: divide by zero: ' + b));d = Bi(e[0]);return d / c;
            } catch (a) {
                a = Wg(a);if (we(a, 21)) {
                    throw Xg(new iv(sx + b));
                } else throw Xg(a);
            }
        }
        function au(a) {
            var b, c, d, e, f, g, h;e = a.d;e > (a.a / 2 | 0) && (e = a.a / 2 | 0);f = Cd(Ge, [pw, Qw], [32, 7], 15, [e, 2], 2);b = 0;for (h = (d = new jp(a).a.N().b.V(), new pp(d)); _n(h.a.a);) {
                g = (c = is(h.a), c.S());f[b][0] = (ht(g), g);f[b][1] = nt(Um(Kr(a, g)));++b;if (b == e) break;
            }return f;
        }
        function Rt(a, b) {
            var c, d, e, f, g, h, i;d = new bu();c = new ps(a).b.V();if (!_n(c.a)) {
                return;
            }e = gx;f = 0;while (_n(c.a)) {
                g = c.b = ao(c.a);h = nt(g.S());i = nt(g.T());if (h - e > b) {
                    e != gx && Tr(d, e, f);e = h;f = i;
                } else {
                    e = (e * f + h * i) / (f + i);f += i;
                }
            }e != gx && Tr(d, e, f);a.c = null;a.d = 0;Ot(a, d);
        }
        function hv(b) {
            gv();var c, d, e, f, g;if (b == null) return fv;g = wj(b, ' *, *');for (e = 0; e < g.length; e++) {
                f = g[e];d = vj(f, ' *:.*', '');c = vj(f, '.*: *', '');if (!oj(d, '') && !oj(c, '')) {
                    try {
                        nn(fv, d, new av(d, d, c, ev, fv));
                    } catch (a) {
                        a = Wg(a);if (!we(a, 4)) throw Xg(a);
                    }
                }
            }return fv;
        }
        function Ch(a, b, c) {
            var d = Ah,
                h;var e = d[a];var f = e instanceof Array ? e[0] : null;if (e && !f) {
                _ = e;
            } else {
                _ = (h = b && b.prototype, !h && (h = Ah[b]), Eh(h));_.ab = c;_.constructor = _;!b && (_.bb = Hh);d[a] = _;
            }for (var g = 3; g < arguments.length; ++g) {
                arguments[g].prototype = _;
            }f && (_._ = f);
        }
        function ku(a) {
            var b, c, d, e, f;f = 'Element: ' + a.a + lx + a.g + ' - exact mass: ' + a.d + mx + a.c + ' - name: ' + a.e + ' - nb isotope: ' + qn(a.b) + ix;for (d = (e = new zo(a.b).a.N().K(), new Eo(e)); d.a.O();) {
                c = (b = d.a.P(), b.T());f += 'Number: ' + c.c + mx + c.b + nx + c.d + lx + c.a + ix;
            }return f;
        }
        function bt(a) {
            var b, c, d, e, f, g, h;g = a.length;b = 0;for (f = 0; f < g;) {
                d = Yh(a, f, a.length);f += d >= Cw ? 2 : 1;d < 128 ? ++b : d < 2048 ? b += 2 : d < Cw ? b += 3 : d < 2097152 ? b += 4 : d < 67108864 && (b += 5);
            }c = Ed(Ee, pw, 7, b, 15, 1);h = 0;for (e = 0; e < g;) {
                d = Yh(a, e, a.length);e += d >= Cw ? 2 : 1;h += at(c, h, d);
            }return c;
        }
        function At(a, b) {
            if (Bt(a, b)) return 0;if (oj(a.i, 'C')) {
                if (oj(b.i, 'C')) return a.a - b.a;return -1;
            }if (oj(a.i, 'H')) {
                if (oj(b.i, 'C')) return 1;if (oj(b.i, 'H')) return a.a - b.a;return -1;
            }if (oj(b.i, 'H') || oj(b.i, 'C')) {
                return 1;
            }if (oj(a.i, b.i)) return a.a - b.a;return mj(a.i, b.i);
        }
        function Hl(a, b) {
            Gl();var c, d, e, f, g, h, i, j, k;if (b.d > a.d) {
                h = a;a = b;b = h;
            }if (b.d < 63) {
                return Nl(a, b);
            }g = (a.d & -2) << 4;j = Pk(a, g);k = Pk(b, g);d = Al(a, Nk(j, g));e = Al(b, Nk(k, g));i = Hl(j, k);c = Hl(d, e);f = Hl(Al(j, d), Al(e, k));f = vl(vl(f, i), c);f = Nk(f, g);i = Nk(i, g << 1);return vl(vl(i, f), c);
        }
        function Ud(a) {
            var b, c, d;c = a.l;if ((c & c - 1) != 0) {
                return -1;
            }d = a.m;if ((d & d - 1) != 0) {
                return -1;
            }b = a.h;if ((b & b - 1) != 0) {
                return -1;
            }if (b == 0 && d == 0 && c == 0) {
                return -1;
            }if (b == 0 && d == 0 && c != 0) {
                return Vi(c);
            }if (b == 0 && d != 0 && c == 0) {
                return Vi(d) + 22;
            }if (b != 0 && d == 0 && c == 0) {
                return Vi(b) + 44;
            }return -1;
        }
        function It(a, b, c, d) {
            var e;if (c > d) throw Xg(new iv(fx));if (b == 0) {
                this.d = c;this.c = d;this.e = iu(a);this.f = a.f;this.a = 0;this.i = a.g;this.b = a.c;return;
            }e = jn(a.b, new Pi(b));if (!e) throw Xg(new iv('Isotope not found'));this.a = b;this.i = a.g;this.b = e.b;this.e = e.b;this.d = c;this.c = d;
        }
        function $d(a) {
            var b, c, d, e, f;if (isNaN(a)) {
                return pe(), oe;
            }if (a < -9223372036854775808) {
                return pe(), me;
            }if (a >= 9223372036854775807) {
                return pe(), le;
            }e = false;if (a < 0) {
                e = true;a = -a;
            }d = 0;if (a >= Mw) {
                d = De(a / Mw);a -= d * Mw;
            }c = 0;if (a >= Lw) {
                c = De(a / Lw);a -= c * Lw;
            }b = De(a);f = Md(b, c, d);e && Sd(f);return f;
        }
        function rm(a) {
            var b;b = Ed(Ee, pw, 7, 8, 15, 1);b[0] = sh(a) << 24 >> 24;a = oh(a, 8);b[1] = sh(a) << 24 >> 24;a = oh(a, 8);b[2] = sh(a) << 24 >> 24;a = oh(a, 8);b[3] = sh(a) << 24 >> 24;a = oh(a, 8);b[4] = sh(a) << 24 >> 24;a = oh(a, 8);b[5] = sh(a) << 24 >> 24;a = oh(a, 8);b[6] = sh(a) << 24 >> 24;a = oh(a, 8);b[7] = sh(a) << 24 >> 24;return b;
        }
        function av(b, c, d, e, f) {
            var g;this.b = b;this.c = c;try {
                this.a = new Vu(d, e, f);
            } catch (a) {
                a = Wg(a);if (we(a, 8)) {
                    g = a;Sj();"Group creation error: '" + b + "'='" + d + "': " + rb(g, g.s());this.a = new Vu('', e, f);
                } else throw Xg(a);
            }if (this.a.e) throw Xg(new iv('Range formulas not allowed for groups'));
        }
        function fk(a, b) {
            var c;ht(b);c = 5 - a.e;if (c == 0) {
                return a;
            }if (c > 0) {
                if (c < $j.length && a.a + _j[De(c)] < 54) {
                    return new kk(a.f * $j[De(c)]);
                }return new mk(Ml((!a.c && (a.c = cl(a.f)), a.c), De(c)));
            }if (a.a < 54 && -c < $j.length) {
                return rk(a.f, $j[De(-c)], b);
            }return qk((!a.c && (a.c = cl(a.f)), a.c), Pl(-c), b);
        }
        function Ll(a, b) {
            var c, d, e, f, g, h, i, j, k;j = a.e;if (j == 0) {
                return Dk(), Ck;
            }d = a.d;c = a.a;if (d == 1) {
                e = jh(Zg(c[0], Vw), Zg(b, Vw));i = sh(e);g = sh(oh(e, 32));return g == 0 ? new Sk(j, i) : new Tk(j, 2, Hd(Ad(He, 1), pw, 7, 15, [i, g]));
            }h = d + 1;f = Ed(He, pw, 7, h, 15, 1);f[d] = Kl(f, c, d, b);k = new Tk(j, h, f);Fk(k);return k;
        }
        function Nl(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;d = a.d;f = b.d;h = d + f;i = a.e != b.e ? -1 : 1;if (h == 2) {
                k = jh(Zg(a.a[0], Vw), Zg(b.a[0], Vw));m = sh(k);l = sh(oh(k, 32));return l == 0 ? new Sk(i, m) : new Tk(i, 2, Hd(Ad(He, 1), pw, 7, 15, [m, l]));
            }c = a.a;e = b.a;g = Ed(He, pw, 7, h, 15, 1);Il(c, d, e, f, g);j = new Tk(i, h, g);Fk(j);return j;
        }
        function hu(a) {
            var b, c, d, e, f, g, h;if (qn(a.b) == 0) {
                a.d = a.c;a.f = sh(dh($wnd.Math.round(a.c)));return;
            }b = 1.7976931348623157E308;h = hx;d = true;for (f = (g = new zo(a.b).a.N().K(), new Eo(g)); f.a.O();) {
                e = (c = f.a.P(), c.T());if (e.d > h || d) {
                    d = false;b = e.b;h = e.d;
                }
            }a.d = b;a.f = sh(dh($wnd.Math.round(b)));
        }
        function Gl() {
            Gl = Dh;var a, b;Dl = Ed(Bf, pw, 5, 32, 0, 1);El = Ed(Bf, pw, 5, 32, 0, 1);Fl = Hd(Ad(He, 1), pw, 7, 15, [1, 10, 100, 1000, Ew, Rw, Sw, 10000000, 100000000, Nw]);a = 1;for (b = 0; b <= 18; b++) {
                Dl[b] = dl(a);El[b] = dl(mh(a, b));a = jh(a, 5);
            }for (; b < El.length; b++) {
                Dl[b] = Lk(Dl[b - 1], Dl[1]);El[b] = Lk(El[b - 1], (Dk(), Ak));
            }
        }
        function Dk() {
            Dk = Dh;var a;yk = new Sk(1, 1);Ak = new Sk(1, 10);Ck = new Sk(0, 0);xk = new Sk(-1, 1);zk = Hd(Ad(Bf, 1), pw, 5, 0, [Ck, yk, new Sk(1, 2), new Sk(1, 3), new Sk(1, 4), new Sk(1, 5), new Sk(1, 6), new Sk(1, 7), new Sk(1, 8), new Sk(1, 9), Ak]);Bk = Ed(Bf, pw, 5, 32, 0, 1);for (a = 0; a < Bk.length; a++) {
                Bk[a] = dl(mh(1, a));
            }
        }
        function il(a, b) {
            var c, d, e, f, g;d = b >> 5;b &= 31;if (d >= a.d) {
                return a.e < 0 ? (Dk(), xk) : (Dk(), Ck);
            }f = a.d - d;e = Ed(He, pw, 7, f + 1, 15, 1);jl(e, f, a.a, d, b);if (a.e < 0) {
                for (c = 0; c < d && a.a[c] == 0; c++) {}if (c < d || b > 0 && a.a[c] << 32 - b != 0) {
                    for (c = 0; c < f && e[c] == -1; c++) {
                        e[c] = 0;
                    }c == f && ++f;++e[c];
                }
            }g = new Tk(a.e, f, e);Fk(g);return g;
        }
        function Rr(a, b, c, d) {
            var e, f;if (!b) {
                return c;
            } else {
                e = a.b.Y(c.c, b.c);if (e == 0) {
                    d.d = Io(b, c.d);d.b = true;return b;
                }f = e < 0 ? 0 : 1;b.a[f] = Rr(a, b.a[f], c, d);if (Sr(b.a[f])) {
                    if (Sr(b.a[1 - f])) {
                        b.b = true;b.a[0].b = false;b.a[1].b = false;
                    } else {
                        Sr(b.a[f].a[f]) ? b = Zr(b, 1 - f) : Sr(b.a[f].a[1 - f]) && (b = Yr(b, 1 - f));
                    }
                }
            }return b;
        }
        function nu(a, b, c) {
            var d, e, f, g, h, i, j, k, l;this.e = c;this.g = b;this.a = a.a;this.b = new xq();h = vj(c, '[^0-9,\\.]', '');k = wj(h, ',');e = 0;for (g = (j = new zo(a.b).a.N().K(), new Eo(j)); g.a.O();) {
                f = (d = g.a.P(), d.T());l = 0;k.length > e && (l = Ai(k[e]));i = new bv(f.c, f.b, l, f.a);mn(this.b, Xi(f.c), i);++e;
            }gu(this);hu(this);
        }
        function tl(a, b) {
            var c, d, e, f, g;d = Zg(b, Vw);if ($g(a, 0) >= 0) {
                f = ah(a, d);g = ih(a, d);
            } else {
                c = oh(a, 1);e = b >>> 1;f = ah(c, e);g = ih(c, e);g = Yg(mh(g, 1), Zg(a, 1));if ((b & 1) != 0) {
                    if ($g(f, g) <= 0) {
                        g = ph(g, f);
                    } else {
                        if (hh(ph(f, g), d)) {
                            g = Yg(g, ph(d, f));f = ph(f, 1);
                        } else {
                            g = Yg(g, ph(mh(d, 1), f));f = ph(f, 2);
                        }
                    }
                }
            }return lh(mh(g, 32), Zg(f, Vw));
        }
        function Gv() {
            Gv = Dh;Fv = new xq();nn(Fv, 'O', Xi(0));nn(Fv, 'N', Xi(1));nn(Fv, 'H', Xi(-1));nn(Fv, 'C', Xi(2));nn(Fv, 'F', Xi(-1));nn(Fv, 'Cl', Xi(-1));nn(Fv, 'Br', Xi(-1));nn(Fv, 'I', Xi(-1));nn(Fv, 'S', Xi(0));nn(Fv, 'P', Xi(1));nn(Fv, 'Li', Xi(-1));nn(Fv, 'Na', Xi(-1));nn(Fv, 'K', Xi(-1));nn(Fv, 'Ca', Xi(0));nn(Fv, 'Mg', Xi(0));
        }
        function al(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p;m = b.length;i = m;if (b.charCodeAt(0) == 45) {
                k = -1;l = 1;--m;
            } else {
                k = 1;l = 0;
            }f = (ml(), ll)[10];e = m / f | 0;p = m % f;p != 0 && ++e;h = Ed(He, pw, 7, e, 15, 1);c = kl[8];g = 0;n = l + (p == 0 ? f : p);for (o = l; o < i; o = n, n = n + f) {
                d = Bi(b.substr(o, n - o));j = (Gl(), Kl(h, h, g, c));j += zl(h, g, d);h[g++] = j;
            }a.e = k;a.d = g;a.a = h;Fk(a);
        }
        function Bi(a) {
            var b, c, d, e, f;if (a == null) {
                throw Xg(new gj(xw));
            }d = a.length;e = d > 0 && (a.charCodeAt(0) == 45 || a.charCodeAt(0) == 43) ? 1 : 0;for (b = e; b < d; b++) {
                if (Zh(a.charCodeAt(b)) == -1) {
                    throw Xg(new gj(ww + a + '"'));
                }
            }f = parseInt(a, 10);c = f < yw;if (isNaN(f)) {
                throw Xg(new gj(ww + a + '"'));
            } else if (c || f > uw) {
                throw Xg(new gj(ww + a + '"'));
            }return f;
        }
        function je(a) {
            var b, c, d, e, f;if (a.l == 0 && a.m == 0 && a.h == 0) {
                return '0';
            }if (a.h == Kw && a.m == 0 && a.l == 0) {
                return '-9223372036854775808';
            }if (a.h >> 19 != 0) {
                return '-' + je(ae(a));
            }c = a;d = '';while (!(c.l == 0 && c.m == 0 && c.h == 0)) {
                e = Kd(Nw);c = Nd(c, e, true);b = '' + ie(Jd);if (!(c.l == 0 && c.m == 0 && c.h == 0)) {
                    f = 9 - b.length;for (; f > 0; f--) {
                        b = '0' + b;
                    }
                }d = b + d;
            }return d;
        }
        function $v(a, b) {
            var c, d, e, f;f = '';for (d = new bq(a.a); d.a < d.c.a.length;) {
                c = aq(d);e = Dt(c.a);(e == null ? !!Aq(b.a, null) : Pq(b.b, e)) && (oj((e == null ? Um(Aq(b.a, null)) : Qq(b.b, e)).c.substr(0, '{'.length), '{') ? e = (e == null ? Um(Aq(b.a, null)) : Qq(b.b, e)).c : e = (e == null ? Um(Aq(b.a, null)) : Qq(b.b, e)).b);c.b > 1 ? f += e + c.b : c.b > 0 && (f += e);
            }return f;
        }
        function Lq() {
            if (!Object.create || !Object.getOwnPropertyNames) {
                return false;
            }var a = '__proto__';var b = Object.create(null);if (b[a] !== undefined) {
                return false;
            }var c = Object.getOwnPropertyNames(b);if (c.length != 0) {
                return false;
            }b[a] = 42;if (b[a] !== 42) {
                return false;
            }if (Object.getOwnPropertyNames(b).length == 0) {
                return false;
            }return true;
        }
        function kv(a) {
            var b, c, d, e, f;c = true;for (e = new bq(a.d.d); e.a < e.c.a.length;) {
                d = aq(e);if (c) {
                    a.e = new Av(a, d, a.c);Vt(a.e.c, d.f);b = a.e;c = false;
                } else {
                    b = new Av(a, d, a.c);Vt(b.c, d.f);Ot(a.e.c, b.c);
                }if (d.b != '') {
                    f = Tt(b.c);fn(a.g, f) ? mn(a.g, f, jn(a.g, f) + ',' + d.b) : mn(a.g, f, d.b);
                }
            }if (a.e.c.d == 0) throw Xg(new iv('Isotopic distribution: empty table'));
        }
        function rl(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o;m = a.a;n = a.d;o = a.e;if (n == 1) {
                d = Zg(m[0], Vw);e = Zg(b, Vw);f = ah(d, e);i = ih(d, e);o != c && (f = kh(f));o < 0 && (i = kh(i));return Hd(Ad(Bf, 1), pw, 5, 0, [dl(f), dl(i)]);
            }h = o == c ? 1 : -1;g = Ed(He, pw, 7, n, 15, 1);j = Hd(Ad(He, 1), pw, 7, 15, [sl(g, m, n, b)]);k = new Tk(h, n, g);l = new Tk(o, 1, j);Fk(k);Fk(l);return Hd(Ad(Bf, 1), pw, 5, 0, [k, l]);
        }
        function ju(a) {
            var b, c, d, e, f, g, h, i;e = new kw();jw(e, 'symbol', a.g);hw(e, jx, new Uc(a.d));hw(e, 'mass', new Uc(a.c));jw(e, 'name', a.e);hw(e, 'atomicNumber', new Uc(a.a));g = new ew();hw(e, 'isotopes', g.a);for (d = (h = new zo(a.b).a.N().K(), new Eo(h)); d.a.O();) {
                c = (b = d.a.P(), b.T());f = (i = new kw(), hw(i, 'mass', new Uc(c.b)), hw(i, kx, new Uc(c.d)), i);dw(g, f.a);
            }return e;
        }
        function Ql(a, b, c) {
            var d, e, f, g, h;for (f = 0; f < b; f++) {
                d = 0;for (h = f + 1; h < b; h++) {
                    d = Yg(Yg(jh(Zg(a[f], Vw), Zg(a[h], Vw)), Zg(c[f + h], Vw)), Zg(sh(d), Vw));c[f + h] = sh(d);d = oh(d, 32);
                }c[f + b] = sh(d);
            }hl(c, c, b << 1);d = 0;for (e = 0, g = 0; e < b; ++e, g++) {
                d = Yg(Yg(jh(Zg(a[e], Vw), Zg(a[e], Vw)), Zg(c[g], Vw)), Zg(sh(d), Vw));c[g] = sh(d);d = oh(d, 32);++g;d = Yg(d, Zg(c[g], Vw));c[g] = sh(d);d = oh(d, 32);
            }return c;
        }
        function sl(a, b, c, d) {
            var e, f, g, h, i, j, k;j = 0;f = Zg(d, Vw);for (h = c - 1; h >= 0; h--) {
                k = lh(mh(j, 32), Zg(b[h], Vw));if ($g(k, 0) >= 0) {
                    i = ah(k, f);j = ih(k, f);
                } else {
                    e = oh(k, 1);g = d >>> 1;i = ah(e, g);j = ih(e, g);j = Yg(mh(j, 1), Zg(k, 1));if ((d & 1) != 0) {
                        if ($g(i, j) <= 0) {
                            j = ph(j, i);
                        } else {
                            if (hh(ph(i, j), f)) {
                                j = Yg(j, ph(f, i));i = ph(i, 1);
                            } else {
                                j = Yg(j, ph(mh(f, 1), i));i = ph(i, 2);
                            }
                        }
                    }
                }a[h] = sh(Zg(i, Vw));
            }return sh(j);
        }
        function Gk(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o;f = b.e;if (f == 0) {
                throw Xg(new Nh('BigInteger divide by zero'));
            }e = b.d;d = b.a;if (e == 1) {
                return rl(a, d[0], f);
            }m = a.a;n = a.d;c = n != e ? n > e ? 1 : -1 : yl(m, d, n);if (c < 0) {
                return Hd(Ad(Bf, 1), pw, 5, 0, [Ck, a]);
            }o = a.e;h = n - e + 1;i = o == f ? 1 : -1;g = Ed(He, pw, 7, h, 15, 1);j = ql(g, h, m, n, d, e);k = new Tk(i, h, g);l = new Tk(o, e, j);Fk(k);Fk(l);return Hd(Ad(Bf, 1), pw, 5, 0, [k, l]);
        }
        function Qd(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m;j = Td(b) - Td(a);g = de(b, j);i = Md(0, 0, 0);while (j >= 0) {
                h = Wd(a, g);if (h) {
                    j < 22 ? (i.l |= 1 << j, undefined) : j < 44 ? (i.m |= 1 << j - 22, undefined) : (i.h |= 1 << j - 44, undefined);if (a.l == 0 && a.m == 0 && a.h == 0) {
                        break;
                    }
                }k = g.m;l = g.h;m = g.l;g.h = l >>> 1;g.m = k >>> 1 | (l & 1) << 21;g.l = m >>> 1 | (k & 1) << 21;--j;
            }c && Sd(i);if (f) {
                if (d) {
                    Jd = ae(a);e && (Jd = ge(Jd, (pe(), ne)));
                } else {
                    Jd = Md(a.l, a.m, a.h);
                }
            }return i;
        }
        function xl(a, b, c, d, e) {
            var f, g;f = Yg(Zg(b[0], Vw), Zg(d[0], Vw));a[0] = sh(f);f = nh(f, 32);if (c >= e) {
                for (g = 1; g < e; g++) {
                    f = Yg(f, Yg(Zg(b[g], Vw), Zg(d[g], Vw)));a[g] = sh(f);f = nh(f, 32);
                }for (; g < c; g++) {
                    f = Yg(f, Zg(b[g], Vw));a[g] = sh(f);f = nh(f, 32);
                }
            } else {
                for (g = 1; g < c; g++) {
                    f = Yg(f, Yg(Zg(b[g], Vw), Zg(d[g], Vw)));a[g] = sh(f);f = nh(f, 32);
                }for (; g < e; g++) {
                    f = Yg(f, Zg(d[g], Vw));a[g] = sh(f);f = nh(f, 32);
                }
            }$g(f, 0) != 0 && (a[g] = sh(f));
        }
        function wj(a, b) {
            var c, d, e, f, g, h, i;c = new $wnd.RegExp(b, 'g');h = Ed(xf, pw, 2, 0, 6, 1);d = 0;i = a;f = null;while (true) {
                g = c.exec(i);if (g == null || i == '') {
                    h[d] = i;break;
                } else {
                    h[d] = yj(i, 0, g.index);i = yj(i, g.index + g[0].length, i.length);c.lastIndex = 0;if (f == i) {
                        h[d] = i.substr(0, 1);i = i.substr(1, i.length - 1);
                    }f = i;++d;
                }
            }if (a.length > 0) {
                e = h.length;while (e > 0 && h[e - 1] == '') {
                    --e;
                }e < h.length && (h.length = e, undefined);
            }return h;
        }
        function uk(a, b, c) {
            var d;d = 0;switch (c.b) {case 7:
                    if (b != 0) {
                        throw Xg(new Nh('Rounding necessary'));
                    }break;case 0:
                    d = b == 0 ? 0 : b < 0 ? -1 : 1;break;case 2:
                    d = (b == 0 ? 0 : b < 0 ? -1 : 1) > 0 ? b == 0 ? 0 : b < 0 ? -1 : 1 : 0;break;case 3:
                    d = (b == 0 ? 0 : b < 0 ? -1 : 1) < 0 ? b == 0 ? 0 : b < 0 ? -1 : 1 : 0;break;case 4:
                    (b < 0 ? -b : b) >= 5 && (d = b == 0 ? 0 : b < 0 ? -1 : 1);break;case 5:
                    (b < 0 ? -b : b) > 5 && (d = b == 0 ? 0 : b < 0 ? -1 : 1);break;case 6:
                    (b < 0 ? -b : b) + a > 5 && (d = b == 0 ? 0 : b < 0 ? -1 : 1);}return d;
        }
        function $u(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m;if (b.indexOf(',') == -1) throw Xg(new iv('Syntax error: combinatorial'));if (c != d) throw Xg(new iv('Combinatorial range formulae are not allowed'));j = wj(b, ',');i = 0;h = j.length;m = new Gj('{');for (g = 0; g < h - 1; g++) {
                l = zj(j[g]);f = new Vu(l, a.c, a.d);Ej(m, Tu(f) + ',');i += Pu(f);
            }k = zj(j[h - 1]);e = new Vu(k, a.c, a.d);Ej(m, Tu(e) + '}');i += Pu(e);i /= h;Mu(a, new Gt(m.a, i, c, d));
        }
        function dk(a, b) {
            var c, d, e, f, g, h;e = hk(a);h = hk(b);if (e == h) {
                if (a.e == b.e && a.a < 54 && b.a < 54) {
                    return a.f < b.f ? -1 : a.f > b.f ? 1 : 0;
                }d = a.e - b.e;c = (a.d > 0 ? a.d : $wnd.Math.floor((a.a - 1) * Uw) + 1) - (b.d > 0 ? b.d : $wnd.Math.floor((b.a - 1) * Uw) + 1);if (c > d + 1) {
                    return e;
                } else if (c < d - 1) {
                    return -e;
                } else {
                    f = (!a.c && (a.c = cl(a.f)), a.c);g = (!b.c && (b.c = cl(b.f)), b.c);d < 0 ? f = Lk(f, Pl(-d)) : d > 0 && (g = Lk(g, Pl(d)));return Ek(f, g);
                }
            } else return e < h ? -1 : 1;
        }
        function Vv(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n;j = new kw();n = b.b.a.get(Cx);if (n != null && !oj(n, '')) {
                try {
                    d = (gv(), gv(), ev);
                } catch (a) {
                    a = Wg(a);if (!we(a, 47)) throw Xg(a);
                }
            }if (d) {
                k = new ew();hw(j, 'elements', k.a);for (f = (m = new zo(d).a.N().K(), new Eo(m)); f.a.O();) {
                    e = (g = f.a.P(), g.T());dw(k, ju(e).a);
                }
            }if (c) {
                l = new ew();hw(j, Bx, l.a);for (i = (m = new zo(c).a.N().K(), new Eo(m)); i.a.O();) {
                    h = (g = i.a.P(), g.T());dw(l, _u(h).a);
                }
            }return j;
        }
        function Nv(a, b, c) {
            Mv();var d, e, f, g, h, i, j, k, l, m, n, o;i = ((b.b - 1) / b.a | 0) / 2 | 0;h = a[0][0];g = a[a.length - 1][0];k = sh(dh($wnd.Math.round((g - h) / c * b.a))) + 2 * b.a * i + 1;o = Ed(Ge, Qw, 7, k, 15, 1);for (m = 0, n = a.length; m < n; ++m) {
                l = a[m];d = sh(dh($wnd.Math.round((l[0] - h) / c * b.a + b.a * i)));for (f = 0; f < b.c.length; f++) {
                    o[d + f - b.a * i] += b.c[f] * l[1];
                }
            }j = Cd(Ge, [pw, Qw], [32, 7], 15, [k, 2], 2);for (e = 0; e < k; e++) {
                j[e][0] = (e / b.a - i) * c + h;j[e][1] = o[e];
            }return j;
        }
        function Pl(a) {
            Gl();var b, c, d, e;b = De(a);if (a < El.length) {
                return El[b];
            } else if (a <= 50) {
                return Mk((Dk(), Ak), b);
            } else if (a <= 1000) {
                return Nk(Mk(Dl[1], b), b);
            }if (a > Sw) {
                throw Xg(new Nh('power of ten too big'));
            }if (a <= uw) {
                return Nk(Mk(Dl[1], b), b);
            }d = Mk(Dl[1], uw);e = d;c = dh(a - uw);b = De(a % uw);while ($g(c, uw) > 0) {
                e = Lk(e, d);c = ph(c, uw);
            }e = Lk(e, Mk(Dl[1], b));e = Nk(e, uw);c = dh(a - uw);while ($g(c, uw) > 0) {
                e = Nk(e, uw);c = ph(c, uw);
            }e = Nk(e, b);return e;
        }
        function Al(a, b) {
            var c, d, e, f, g, h, i, j, k, l;g = a.e;i = b.e;if (i == 0) {
                return a;
            }if (g == 0) {
                return b.e == 0 ? b : new Tk(-b.e, b.d, b.a);
            }f = a.d;h = b.d;if (f + h == 2) {
                c = Zg(a.a[0], Vw);d = Zg(b.a[0], Vw);g < 0 && (c = kh(c));i < 0 && (d = kh(d));return dl(ph(c, d));
            }e = f != h ? f > h ? 1 : -1 : yl(a.a, b.a, f);if (e == -1) {
                l = -i;k = g == i ? Bl(b.a, h, a.a, f) : wl(b.a, h, a.a, f);
            } else {
                l = g;if (g == i) {
                    if (e == 0) {
                        return Dk(), Ck;
                    }k = Bl(a.a, f, b.a, h);
                } else {
                    k = wl(a.a, f, b.a, h);
                }
            }j = new Tk(l, k.length, k);Fk(j);return j;
        }
        function mv(b) {
            var c, d, e;if (b.e.c.d == 0) throw Xg(new Ab(yx));Tr(b.e.c, nt(cp(Lr(b.e.c))) - 2, 0);Tr(b.e.c, nt(cp(Mr(b.e.c))) + 2, 0);d = new xq();nn(d, 'FWHM', b.b + '');nn(d, 'Threshold', b.a + '');try {
                if (b.d.d.a.length == 1) {
                    e = yp(b.d.d, 0);nn(d, 'Monoisotopic mass', Qu(e) + '');nn(d, 'Molecular weight', Pu(e) + '');Jv(e, null) != null && nn(d, 'Unsaturation', Jv(e, null) + '');
                }
            } catch (a) {
                a = Wg(a);if (we(a, 8)) {
                    c = a;ob(c, (Sj(), Rj), '');
                } else throw Xg(a);
            }return Zt(b.e.c, b.d + ' - fwhm: ' + b.b, b.g, d);
        }
        function ml() {
            ml = Dh;kl = Hd(Ad(He, 1), pw, 7, 15, [yw, 1162261467, Xw, 1220703125, 362797056, 1977326743, Xw, 387420489, Nw, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, Xw, 1291467969, 1544804416, 1838265625, 60466176]);ll = Hd(Ad(He, 1), pw, 7, 15, [-1, -1, 31, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
        }
        function xu(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m;if (a.c) throw Xg(new iv(ox));if (a.e) throw Xg(new iv(px));e = new xq();for (i = new bq(a.d); i.a < i.c.a.length;) {
                h = aq(i);for (d = (g = new jp(h.g).a.N().b.V(), new pp(g)); _n(d.a.a);) {
                    b = (f = is(d.a), f.S());if (ln(e, b.i)) {
                        k = kn(e, b.i);k.d = De(k.d + b.d * h.f);k.c = De(k.c + b.c * h.f);
                    } else {
                        k = new Ht(b);k.d = De(k.d * h.f);k.c = De(k.c * h.f);nn(e, b.i, k);
                    }
                }
            }j = Au(a);for (c = (l = new zo(e).a.N().K(), new Eo(l)); c.a.O();) {
                b = (f = c.a.P(), f.T());b.g = (m = bj(b.b * Ct(b) * 100 / j * Sw), m / Sw);
            }return new zo(e);
        }
        function vl(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o;g = a.e;i = b.e;if (g == 0) {
                return b;
            }if (i == 0) {
                return a;
            }f = a.d;h = b.d;if (f + h == 2) {
                c = Zg(a.a[0], Vw);d = Zg(b.a[0], Vw);if (g == i) {
                    k = Yg(c, d);o = sh(k);n = sh(oh(k, 32));return n == 0 ? new Sk(g, o) : new Tk(g, 2, Hd(Ad(He, 1), pw, 7, 15, [o, n]));
                }return dl(g < 0 ? ph(d, c) : ph(c, d));
            } else if (g == i) {
                m = g;l = f >= h ? wl(a.a, f, b.a, h) : wl(b.a, h, a.a, f);
            } else {
                e = f != h ? f > h ? 1 : -1 : yl(a.a, b.a, f);if (e == 0) {
                    return Dk(), Ck;
                }if (e == 1) {
                    m = g;l = Bl(a.a, f, b.a, h);
                } else {
                    m = i;l = Bl(b.a, h, a.a, f);
                }
            }j = new Tk(m, l.length, l);Fk(j);return j;
        }
        function ik(a) {
            var b, c, d, e, f;if (a.g != null) {
                return a.g;
            }if (a.a < 32) {
                a.g = ol(dh(a.f), De(a.e));return a.g;
            }e = pl((!a.c && (a.c = cl(a.f)), a.c), 0);if (a.e == 0) {
                return e;
            }b = (!a.c && (a.c = cl(a.f)), a.c).e < 0 ? 2 : 1;c = e.length;d = -a.e + c - b;f = new Mj();f.a += '' + e;if (a.e > 0 && d >= -6) {
                if (d >= 0) {
                    Lj(f, c - De(a.e), String.fromCharCode(46));
                } else {
                    f.a = yj(f.a, 0, b - 1) + '0.' + xj(f.a, b - 1);Lj(f, b + 1, Dj(Xj, 0, -De(d) - 1));
                }
            } else {
                if (c - b >= 1) {
                    Lj(f, b, String.fromCharCode(46));++c;
                }Lj(f, c, String.fromCharCode(69));d > 0 && Lj(f, ++c, String.fromCharCode(43));Lj(f, ++c, '' + th(dh(d)));
            }a.g = f.a;return a.g;
        }
        function _d(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B, C, D, F, G;c = a.l & 8191;d = a.l >> 13 | (a.m & 15) << 9;e = a.m >> 4 & 8191;f = a.m >> 17 | (a.h & 255) << 5;g = (a.h & 1048320) >> 8;h = b.l & 8191;i = b.l >> 13 | (b.m & 15) << 9;j = b.m >> 4 & 8191;k = b.m >> 17 | (b.h & 255) << 5;l = (b.h & 1048320) >> 8;B = c * h;C = d * h;D = e * h;F = f * h;G = g * h;if (i != 0) {
                C += c * i;D += d * i;F += e * i;G += f * i;
            }if (j != 0) {
                D += c * j;F += d * j;G += e * j;
            }if (k != 0) {
                F += c * k;G += d * k;
            }l != 0 && (G += c * l);n = B & Iw;o = (C & 511) << 13;m = n + o;q = B >> 22;r = C >> 9;s = (D & 262143) << 4;t = (F & 31) << 17;p = q + r + s + t;v = D >> 18;w = F >> 5;A = (G & 4095) << 8;u = v + w + A;p += m >> 22;m &= Iw;u += p >> 22;p &= Iw;u &= Jw;return Md(m, p, u);
        }
        function Nd(a, b, c) {
            var d, e, f, g, h, i;if (b.l == 0 && b.m == 0 && b.h == 0) {
                throw Xg(new Nh('divide by zero'));
            }if (a.l == 0 && a.m == 0 && a.h == 0) {
                c && (Jd = Md(0, 0, 0));return Md(0, 0, 0);
            }if (b.h == Kw && b.m == 0 && b.l == 0) {
                return Od(a, c);
            }i = false;if (b.h >> 19 != 0) {
                b = ae(b);i = true;
            }g = Ud(b);f = false;e = false;d = false;if (a.h == Kw && a.m == 0 && a.l == 0) {
                e = true;f = true;if (g == -1) {
                    a = Ld((pe(), le));d = true;i = !i;
                } else {
                    h = ee(a, g);i && Sd(h);c && (Jd = Md(0, 0, 0));return h;
                }
            } else if (a.h >> 19 != 0) {
                f = true;a = ae(a);d = true;i = !i;
            }if (g != -1) {
                return Pd(a, g, i, f, c);
            }if (Zd(a, b) < 0) {
                c && (f ? Jd = ae(a) : Jd = Md(a.l, a.m, a.h));return Md(0, 0, 0);
            }return Qd(d ? a : Md(a.l, a.m, a.h), b, i, f, e, c);
        }
        function at(a, b, c) {
            if (c < 128) {
                a[b] = (c & 127) << 24 >> 24;return 1;
            } else if (c < 2048) {
                a[b++] = (c >> 6 & 31 | 192) << 24 >> 24;a[b] = (c & 63 | 128) << 24 >> 24;return 2;
            } else if (c < Cw) {
                a[b++] = (c >> 12 & 15 | 224) << 24 >> 24;a[b++] = (c >> 6 & 63 | 128) << 24 >> 24;a[b] = (c & 63 | 128) << 24 >> 24;return 3;
            } else if (c < 2097152) {
                a[b++] = (c >> 18 & 7 | 240) << 24 >> 24;a[b++] = (c >> 12 & 63 | 128) << 24 >> 24;a[b++] = (c >> 6 & 63 | 128) << 24 >> 24;a[b] = (c & 63 | 128) << 24 >> 24;return 4;
            } else if (c < 67108864) {
                a[b++] = (c >> 24 & 3 | 248) << 24 >> 24;a[b++] = (c >> 18 & 63 | 128) << 24 >> 24;a[b++] = (c >> 12 & 63 | 128) << 24 >> 24;a[b++] = (c >> 6 & 63 | 128) << 24 >> 24;a[b] = (c & 63 | 128) << 24 >> 24;return 5;
            }throw Xg(new Mi('Character out of range: ' + c));
        }
        function Lu(b, c, d, e, f, g) {
            var h, i, j, k, l, m, n, o;if (oj(c, 'Zcharge')) {
                b.a += d;return;
            }if (c.charCodeAt(0) == 91) {
                h = 1;while ($h(c.charCodeAt(h))) {
                    ++h;
                }if (f == 0) {
                    try {
                        f = Bi(c.substr(1, h - 1));
                    } catch (a) {
                        a = Wg(a);if (we(a, 8)) {
                            throw Xg(new iv('Bad isotope syntax'));
                        } else throw Xg(a);
                    }
                }c = yj(c, h, c.length - 1);
            }i = kn(b.c, c);if (!i) {
                n = kn(b.d, c);if (!n) throw Xg(new iv('Unrecognized symbol: ' + c));if (f != 0) throw Xg(new iv('Syntax error: cannot specify isotopes for groups'));if (g) {
                    m = (k = new jp(n.a.g).a.N().b.V(), new pp(k));while (_n(m.a.a)) {
                        l = (j = is(m.a), j.S());o = new Ht(l);o.d *= d;o.c *= e;Mu(b, o);
                    }
                } else {
                    Mu(b, new Jt(n, d, e));
                }
            } else {
                Mu(b, new It(i, f, d, e));
            }
        }
        function pc(a, b) {
            var c, d, e, f, g, h, i, j, k;if (b.length == 0) {
                return a.w(qw, nw, -1, -1);
            }k = zj(b);oj(k.substr(0, 3), 'at ') && (k = k.substr(3, k.length - 3));k = k.replace(/\[.*?\]/g, '');g = k.indexOf('(');if (g == -1) {
                g = k.indexOf('@');if (g == -1) {
                    j = k;k = '';
                } else {
                    j = zj(k.substr(g + 1, k.length - (g + 1)));k = zj(k.substr(0, g));
                }
            } else {
                c = k.indexOf(')', g);j = k.substr(g + 1, c - (g + 1));k = zj(k.substr(0, g));
            }g = qj(k, Bj(46));g != -1 && (k = k.substr(g + 1, k.length - (g + 1)));(k.length == 0 || oj(k, 'Anonymous function')) && (k = nw);h = sj(j, Bj(58));e = tj(j, Bj(58), h - 1);i = -1;d = -1;f = qw;if (h != -1 && e != -1) {
                f = j.substr(0, e);i = kc(j.substr(e + 1, h - (e + 1)));d = kc(j.substr(h + 1, j.length - (h + 1)));
            }return a.w(f, k, i, d);
        }
        function qk(a, b, c) {
            var d, e, f, g, h, i, j, k, l;f = Gk(a, b);g = f[0];i = f[1];if (i.e == 0) {
                return new mk(g);
            }j = a.e * b.e;if (el(b) < 54) {
                h = (l = i.d > 1 ? lh(mh(i.a[1], 32), Zg(i.a[0], Vw)) : Zg(i.a[0], Vw), jh(i.e, l));e = (k = b.d > 1 ? lh(mh(b.a[1], 32), Zg(b.a[0], Vw)) : Zg(b.a[0], Vw), jh(b.e, k));d = gh(mh($g(h, 0) < 0 ? kh(h) : h, 1), $g(e, 0) < 0 ? kh(e) : e) ? -1 : eh(mh($g(h, 0) < 0 ? kh(h) : h, 1), $g(e, 0) < 0 ? kh(e) : e) ? 1 : 0;d = uk(Qk(g, 0) ? 1 : 0, j * (5 + d), c);
            } else {
                d = Ek(Ok(i.e < 0 ? new Tk(1, i.d, i.a) : i), b.e < 0 ? new Tk(1, b.d, b.a) : b);d = uk(Qk(g, 0) ? 1 : 0, j * (5 + d), c);
            }if (d != 0) {
                if (el(g) < 54) {
                    return wk((k = g.d > 1 ? lh(mh(g.a[1], 32), Zg(g.a[0], Vw)) : Zg(g.a[0], Vw), Yg(jh(g.e, k), d)));
                }g = vl(g, dl(d));return new mk(g);
            }return new mk(g);
        }
        function sv(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p;p = new Xu(new Cv(a));sm(p, b);m = 1;for (e = (k = new jp(p.g).a.N().b.V(), new pp(k)); _n(e.a.a);) {
                c = (i = is(e.a), i.S());h = kn(a.a, c.i);qn(h.b) > m && (m = qn(h.b));
            }n = 2 * m * $wnd.Math.log(Su(p) + 1) / $wnd.Math.log(2);o = a.d.b / (n * 4);xv(a, o);Tr(a.c, 0, 1);for (d = (j = new jp(p.g).a.N().b.V(), new pp(j)); _n(d.a.a);) {
                c = (i = is(d.a), i.S());h = kn(a.a, c.i);if (c.a != 0) {
                    f = new lu(c.b, c.b, h.g, h.e, h.a);h = f;
                }if (qn(h.b) == 0) {
                    l = new bv(De(h.c + 0.5), h.c, 1, h.g);mn(h.b, new Pi(l.c), l);
                }if (Ct(c) < 0) {
                    throw Xg(new iv('Number of element under 0'));
                } else if (Ct(c) == 0) ;else if (Ct(c) == 1) {
                    a.c = tv(a, new zv(a.d, h, a.a));
                } else {
                    g = new zv(a.d, h, a.a);xv(g, a.b);a.c = tv(a, rv(g, Ct(c)));
                }
            }
        }
        function Wr(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n;if (!a.c) {
                return false;
            }g = null;m = null;i = new rs(null, null);e = 1;i.a[1] = a.c;l = i;while (l.a[e]) {
                j = e;h = m;m = l;l = l.a[e];d = a.b.Y(b, l.c);e = d < 0 ? 0 : 1;d == 0 && (!c.c || dr(l.d, c.d)) && (g = l);if (!(!!l && l.b) && !Sr(l.a[e])) {
                    if (Sr(l.a[1 - e])) {
                        m = m.a[j] = Zr(l, e);
                    } else if (!Sr(l.a[1 - e])) {
                        n = m.a[1 - j];if (n) {
                            if (!Sr(n.a[1 - j]) && !Sr(n.a[j])) {
                                m.b = false;n.b = true;l.b = true;
                            } else {
                                f = h.a[1] == m ? 1 : 0;Sr(n.a[j]) ? h.a[f] = Yr(m, j) : Sr(n.a[1 - j]) && (h.a[f] = Zr(m, j));l.b = h.a[f].b = true;h.a[f].a[0].b = false;h.a[f].a[1].b = false;
                            }
                        }
                    }
                }
            }if (g) {
                c.b = true;c.d = g.d;if (l != g) {
                    k = new rs(l.c, l.d);Xr(a, i, g, k);m == g && (m = k);
                }m.a[m.a[1] == l ? 1 : 0] = l.a[!l.a[0] ? 1 : 0];--a.d;
            }a.c = i.a[1];!!a.c && (a.c.b = false);return c.b;
        }
        function ql(a, b, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;q = Ed(He, pw, 7, d + 1, 15, 1);r = Ed(He, pw, 7, f + 1, 15, 1);i = Ui(e[f - 1]);if (i != 0) {
                gl(r, e, 0, i);gl(q, c, 0, i);
            } else {
                Tj(c, 0, q, 0, d);Tj(e, 0, r, 0, f);
            }j = r[f - 1];l = b - 1;m = d;while (l >= 0) {
                if (q[m] == j) {
                    k = -1;
                } else {
                    s = Yg(mh(Zg(q[m], Vw), 32), Zg(q[m - 1], Vw));v = tl(s, j);k = sh(v);u = sh(nh(v, 32));if (k != 0) {
                        t = false;++k;do {
                            --k;if (t) {
                                break;
                            }o = jh(Zg(k, Vw), Zg(r[f - 2], Vw));w = Yg(mh(u, 32), Zg(q[m - 2], Vw));p = Yg(Zg(u, Vw), Zg(j, Vw));Ui(sh(oh(p, 32))) < 32 ? t = true : u = sh(p);
                        } while (eh(uh(o, Yw), uh(w, Yw)));
                    }
                }if (k != 0) {
                    g = ul(q, m - f, r, f, k);if (g != 0) {
                        --k;h = 0;for (n = 0; n < f; n++) {
                            h = Yg(h, Yg(Zg(q[m - f + n], Vw), Zg(r[n], Vw)));q[m - f + n] = sh(h);h = oh(h, 32);
                        }
                    }
                }a[l] = k;--m;--l;
            }if (i != 0) {
                jl(r, f, q, 0, i);return r;
            }Tj(q, 0, r, 0, f);return q;
        }
        function Wu(a, b, c, d, e) {
            var f, g, h, i, j, k, l;Ls.call(this);this.c = b;this.d = c;this.f = d;h = a.indexOf('$');if (h > -1) {
                this.b = a.substr(h + 1, a.length - (h + 1));a = a.substr(0, h);
            }g = new RegExp('(\\([0-9]+[+-]\\))');for (j = g.exec(a); j; j = g.exec(a)) {
                f = j[0];l = Bi(vj(vj(vj(f, '[^0-9+-]', ''), '^([0-9]+)([+-])$', '$2$1'), '^[+]', ''));a = a.replace(g, '(Zcharge' + l + ')');
            }g = new RegExp('(\\([+-][0-9]+\\))');for (k = g.exec(a); k; k = g.exec(a)) {
                f = k[0];l = Bi(vj(vj(vj(f, '[^0-9+-]', ''), '^([0-9])([+-])$', '$1$2'), '^[+]', ''));a = a.replace(g, '(Zcharge' + l + ')');
            }g = new RegExp('([+-])(?![0-9])');for (i = g.exec(a); i; i = g.exec(a)) {
                f = i[0];oj(f, '+') ? a = a.replace(g, 'Zcharge') : a = a.replace(g, '(Zcharge-1)');
            }new $wnd.RegExp('^([a-zA-Z][0-9]+-[0-9])$').test(a) && (this.e = true);a.indexOf('}') != -1;Zu(this, a, e);
        }
        function ck() {
            ck = Dh;var a, b, c;new lk(1, 0);new lk(10, 0);new lk(0, 0);Wj = Ed(Af, pw, 17, 11, 0, 1);Xj = Ed(Fe, pw, 7, 100, 15, 1);Yj = Hd(Ad(Ge, 1), Qw, 7, 15, [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125, 6103515625, 30517578125, 152587890625, 762939453125, 3814697265625, 19073486328125, 95367431640625, 476837158203125, 2384185791015625]);Zj = Ed(He, pw, 7, Yj.length, 15, 1);$j = Hd(Ad(Ge, 1), Qw, 7, 15, [1, 10, 100, 1000, Ew, Rw, Sw, 10000000, 100000000, Nw, Tw, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000, 10000000000000000]);_j = Ed(He, pw, 7, $j.length, 15, 1);ak = Ed(Af, pw, 17, 11, 0, 1);a = 0;for (; a < ak.length; a++) {
                Wj[a] = new lk(a, 0);ak[a] = new lk(0, a);Xj[a] = 48;
            }for (; a < Xj.length; a++) {
                Xj[a] = 48;
            }for (c = 0; c < Zj.length; c++) {
                Zj[c] = nk(Yj[c]);
            }for (b = 0; b < _j.length; b++) {
                _j[b] = nk($j[b]);
            }Gl();
        }
        function uv(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;f = b.c.a;a.c.d > f && Xt(a.c);b.c.d > f && Xt(b.c);k = new bu();j = new ps(b.c).b.V();e = 0;while (_n(j.a)) {
                i = j.b = ao(j.a);h = i.S();g = i.T();q = new ps(a.c).b.V();while (_n(q.a)) {
                    p = q.b = ao(q.a);o = p.S();n = p.T();m = (ht(o), o) + (ht(h), h);l = (ht(n), n) * (ht(g), g);d = Tm(Or(k, m));c = Tm(Nr(k, m));if (d != null && (ht(d), d === m)) {
                        l += nt(Um(Kr(k, c)));
                    } else {
                        d != null && $wnd.Math.abs((ht(d), d) - m) > a.b && (d = null);c != null && $wnd.Math.abs((ht(c), c) - m) > a.b && (c = null);c != null && d != null && ($wnd.Math.abs((ht(c), c) - m) < $wnd.Math.abs((ht(d), d) - m) ? d = null : c = null);if (c != null) {
                            if (nt(Um(Kr(k, c))) > l) {
                                l += nt(Um(Kr(k, c)));m = (ht(c), c);
                            } else {
                                l += nt(Um(Kr(k, c)));Ur(k, c);
                            }
                        } else if (d != null) {
                            if (nt(Um(Kr(k, d))) > l) {
                                l += nt(Um(Kr(k, d)));m = (ht(d), d);
                            } else {
                                l += nt(Um(Kr(k, d)));Ur(k, d);
                            }
                        }
                    }l > a.d.a / Rw && Tr(k, m, l);l > e && (e = l);
                }k.d > f && Xt(k);
            }Vt(k, 1 / e);return k;
        }
        function Nq() {
            function e() {
                this.obj = this.createObject();
            }
            ;e.prototype.createObject = function (a) {
                return Object.create(null);
            };e.prototype.get = function (a) {
                return this.obj[a];
            };e.prototype.set = function (a, b) {
                this.obj[a] = b;
            };e.prototype[dx] = function (a) {
                delete this.obj[a];
            };e.prototype.keys = function () {
                return Object.getOwnPropertyNames(this.obj);
            };e.prototype.entries = function () {
                var b = this.keys();var c = this;var d = 0;return { next: function next() {
                        if (d >= b.length) return { done: true };var a = b[d++];return { value: [a, c.get(a)], done: false };
                    } };
            };if (!Lq()) {
                e.prototype.createObject = function () {
                    return {};
                };e.prototype.get = function (a) {
                    return this.obj[':' + a];
                };e.prototype.set = function (a, b) {
                    this.obj[':' + a] = b;
                };e.prototype[dx] = function (a) {
                    delete this.obj[':' + a];
                };e.prototype.keys = function () {
                    var a = [];for (var b in this.obj) {
                        b.charCodeAt(0) == 58 && a.push(b.substring(1));
                    }return a;
                };
            }return e;
        }
        function vv(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q;f = b.c.a;a.c.d > f && Xt(a.c);b.c.d > f && Xt(b.c);k = new bu();j = new ps(b.c).b.V();e = 0;while (_n(j.a)) {
                i = j.b = ao(j.a);h = i.S();g = i.T();q = new ps(a.c).b.V();while (_n(q.a)) {
                    p = q.b = ao(q.a);o = p.S();n = p.T();m = (ht(o), o) + (ht(h), h);l = (ht(n), n) * (ht(g), g);d = Tm(Or(k, m));c = Tm(Nr(k, m));if (d != null && (ht(d), d === m)) {
                        l += nt(Um(Kr(k, c)));
                    } else {
                        d != null && $wnd.Math.abs((ht(d), d) - m) > a.b && (d = null);c != null && $wnd.Math.abs((ht(c), c) - m) > a.b && (c = null);if (c != null && d != null) {
                            m = (m * l + (ht(c), c) * nt(Um(Kr(k, c))) + (ht(d), d) * nt(Um(Kr(k, d)))) / (l + nt(Um(Kr(k, c))) + nt(Um(Kr(k, d))));l += nt(Um(Kr(k, c))) + nt(Um(Kr(k, d)));Ur(k, c);Ur(k, d);
                        } else if (c != null) {
                            m = (m * l + (ht(c), c) * nt(Um(Kr(k, c)))) / (l + nt(Um(Kr(k, c))));l += nt(Um(Kr(k, c)));Ur(k, c);
                        } else if (d != null) {
                            m = (m * l + (ht(d), d) * nt(Um(Kr(k, d)))) / (l + nt(Um(Kr(k, d))));l += nt(Um(Kr(k, d)));Ur(k, d);
                        }
                    }l > a.d.a / Rw && Tr(k, m, l);l > e && (e = l);
                }k.d > f && Xt(k);
            }Vt(k, 1 / e);return k;
        }
        function ol(a, b) {
            ml();var c, d, e, f, g, h, i, j, k, l, m, n;h = $g(a, 0) < 0;h && (a = kh(a));if ($g(a, 0) == 0) {
                switch (b) {case 0:
                        return '0';case 1:
                        return '0.0';case 2:
                        return '0.00';case 3:
                        return '0.000';case 4:
                        return '0.0000';case 5:
                        return '0.00000';case 6:
                        return '0.000000';default:
                        l = new Mj();b < 0 ? (l.a += '0E+', l) : (l.a += '0E', l);l.a += b == yw ? '2147483648' : '' + -b;return l.a;}
            }j = Ed(Fe, pw, 7, 19, 15, 1);c = 18;n = a;do {
                i = n;n = ah(n, 10);j[--c] = sh(Yg(48, ph(i, jh(n, 10)))) & Dw;
            } while ($g(n, 0) != 0);d = ph(ph(ph(18, c), b), 1);if (b == 0) {
                h && (j[--c] = 45);return Dj(j, c, 18 - c);
            }if (b > 0 && $g(d, -6) >= 0) {
                if ($g(d, 0) >= 0) {
                    e = c + sh(d);for (g = 17; g >= e; g--) {
                        j[g + 1] = j[g];
                    }j[++e] = 46;h && (j[--c] = 45);return Dj(j, c, 18 - c + 1);
                }for (f = 2; gh(f, Yg(kh(d), 1)); f++) {
                    j[--c] = 48;
                }j[--c] = 46;j[--c] = 48;h && (j[--c] = 45);return Dj(j, c, 18 - c);
            }m = c + 1;k = new Nj();h && (k.a += '-', k);if (18 - m >= 1) {
                Hj(k, j[c]);k.a += '.';k.a += Dj(j, c + 1, 18 - c - 1);
            } else {
                k.a += Dj(j, c, 18 - c);
            }k.a += 'E';$g(d, 0) > 0 && (k.a += '+', k);k.a += '' + th(d);return k.a;
        }
        function ek(a, b) {
            var c, d, e, f, g, h, i, j;c = 0;g = 0;f = b.length;j = new Nj();if (0 < f && b.charCodeAt(0) == 43) {
                ++g;++c;if (g < f && (b.charCodeAt(g) == 43 || b.charCodeAt(g) == 45)) {
                    throw Xg(new gj(ww + b + '"'));
                }
            }while (g < f && b.charCodeAt(g) != 46 && b.charCodeAt(g) != 101 && b.charCodeAt(g) != 69) {
                ++g;
            }j.a += '' + yj(b == null ? xw : (ht(b), b), c, g);if (g < f && b.charCodeAt(g) == 46) {
                ++g;c = g;while (g < f && b.charCodeAt(g) != 101 && b.charCodeAt(g) != 69) {
                    ++g;
                }a.e = g - c;j.a += '' + yj(b == null ? xw : (ht(b), b), c, g);
            } else {
                a.e = 0;
            }if (g < f && (b.charCodeAt(g) == 101 || b.charCodeAt(g) == 69)) {
                ++g;c = g;if (g < f && b.charCodeAt(g) == 43) {
                    ++g;g < f && b.charCodeAt(g) != 45 && ++c;
                }h = b.substr(c, f - c);a.e = a.e - Bi(h);if (a.e != De(a.e)) {
                    throw Xg(new gj('Scale out of range.'));
                }
            }i = j.a;if (i.length < 16) {
                a.f = (bk == null && (bk = /^[+-]?\d*$/i), bk.test(i) ? parseInt(i, 10) : NaN);if (pt(a.f)) {
                    throw Xg(new gj(ww + b + '"'));
                }a.a = nk(a.f);
            } else {
                gk(a, new Wk(i));
            }a.d = j.a.length;for (e = 0; e < j.a.length; ++e) {
                d = lj(j.a, e);if (d != 45 && d != 48) {
                    break;
                }--a.d;
            }a.d == 0 && (a.d = 1);
        }
        function Jh() {
            var a, b, c;b = $doc.compatMode;a = Hd(Ad(xf, 1), pw, 2, 6, [Pw]);for (c = 0; c < a.length; c++) {
                if (oj(a[c], b)) {
                    return;
                }
            }a.length == 1 && oj(Pw, a[0]) && oj('BackCompat', b) ? "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + b + '"/&gt;' : "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + b + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
        }
        function Nb() {
            var a = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];a[34] = '\\"';a[92] = '\\\\';a[173] = '\\u00ad';a[1536] = '\\u0600';a[1537] = '\\u0601';a[1538] = '\\u0602';a[1539] = '\\u0603';a[1757] = '\\u06dd';a[1807] = '\\u070f';a[6068] = '\\u17b4';a[6069] = '\\u17b5';a[8203] = '\\u200b';a[8204] = '\\u200c';a[8205] = '\\u200d';a[8206] = '\\u200e';a[8207] = '\\u200f';a[8232] = '\\u2028';a[8233] = '\\u2029';a[8234] = '\\u202a';a[8235] = '\\u202b';a[8236] = '\\u202c';a[8237] = '\\u202d';a[8238] = '\\u202e';a[8288] = '\\u2060';a[8289] = '\\u2061';a[8290] = '\\u2062';a[8291] = '\\u2063';a[8292] = '\\u2064';a[8298] = '\\u206a';a[8299] = '\\u206b';a[8300] = '\\u206c';a[8301] = '\\u206d';a[8302] = '\\u206e';a[8303] = '\\u206f';a[65279] = '\\ufeff';a[65529] = '\\ufff9';a[65530] = '\\ufffa';a[65531] = '\\ufffb';return a;
        }
        function Fu(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B;b = vj(b, ' ', '');new $wnd.RegExp('^(.*[a-zA-Z][0-9]+-[0-9].*)$').test(b) && (a.c = true);r = new RegExp('([A-Z][a-z]?\\{[0-9.,]*\\})');for (t = r.exec(b); t; t = r.exec(b)) {
                h = t[1];p = (v = yu(h), w = vj(h, '\\{.*', ''), gn(a.a, v) || nn(a.a, v, new nu(kn(a.a, w), v, h)), v);b = b.replace(r, p);
            }r = new RegExp('(\\{[A-Za-z0-9]*\\})');for (s = r.exec(b); s; s = r.exec(b)) {
                h = s[1];q = (A = yu(h), B = vj(h, '[\\{\\}]', ''), gn(a.b, A) || nn(a.b, A, new av(A, h, B, a.a, a.b)), A);b = b.replace(r, q);
            }b.indexOf('}') != -1;g = wj(b, '\\.');n = 1;o = false;for (e = 0, f = g.length; e < f; ++e) {
                d = g[e];if (Eu(d)) {
                    if (o) throw Xg(new iv("Syntax error: 'number.number.'"));n = Ai(d);o = true;continue;
                }u = d.indexOf('/');if (u != -1) {
                    if (o) throw Xg(new iv("Syntax error: 'number.number/number'"));k = u + 1;l = d.length;while ($h(lj(d, k++))) {
                        if (k >= l) break;
                    }k < l && --k;n = Gu(d.substr(0, k));o = true;if (k >= l) continue;else d = d.substr(k, d.length - k);
                }j = 0;for (; j < d.length; j++) {
                    if (!$h(d.charCodeAt(j))) break;
                }if (j > 0) {
                    m = Ai(d.substr(0, j));d = d.substr(j, d.length - j);o ? n += m / $wnd.Math.pow(10, j) : n = m;
                }i = new Wu(d, a.a, a.b, n, c);i.f == 0 && (a.e = true);i.e && (a.c = true);vp(a.d, i);n = 1;o = false;
            }
        }
        function pl(a, b) {
            ml();var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B, C, D, F, G;A = a.e;n = a.d;e = a.a;if (A == 0) {
                switch (b) {case 0:
                        return '0';case 1:
                        return '0.0';case 2:
                        return '0.00';case 3:
                        return '0.000';case 4:
                        return '0.0000';case 5:
                        return '0.00000';case 6:
                        return '0.000000';default:
                        v = new Mj();b < 0 ? (v.a += '0E+', v) : (v.a += '0E', v);v.a += -b;return v.a;}
            }s = n * 10 + 1 + 7;t = Ed(Fe, pw, 7, s + 1, 15, 1);c = s;if (n == 1) {
                g = e[0];if (g < 0) {
                    G = Zg(g, Vw);do {
                        o = G;G = ah(G, 10);t[--c] = 48 + sh(ph(o, jh(G, 10))) & Dw;
                    } while ($g(G, 0) != 0);
                } else {
                    G = g;do {
                        o = G;G = G / 10 | 0;t[--c] = 48 + (o - G * 10) & Dw;
                    } while (G != 0);
                }
            } else {
                C = Ed(He, pw, 7, n, 15, 1);F = n;Tj(e, 0, C, 0, n);H: while (true) {
                    w = 0;for (i = F - 1; i >= 0; i--) {
                        D = Yg(mh(w, 32), Zg(C[i], Vw));q = nl(D);C[i] = sh(q);w = sh(nh(q, 32));
                    }r = sh(w);p = c;do {
                        t[--c] = 48 + r % 10 & Dw;
                    } while ((r = r / 10 | 0) != 0 && c != 0);d = 9 - p + c;for (h = 0; h < d && c > 0; h++) {
                        t[--c] = 48;
                    }k = F - 1;for (; C[k] == 0; k--) {
                        if (k == 0) {
                            break H;
                        }
                    }F = k + 1;
                }while (t[c] == 48) {
                    ++c;
                }
            }m = A < 0;f = s - c - b - 1;if (b == 0) {
                m && (t[--c] = 45);return Dj(t, c, s - c);
            }if (b > 0 && f >= -6) {
                if (f >= 0) {
                    j = c + f;for (l = s - 1; l >= j; l--) {
                        t[l + 1] = t[l];
                    }t[++j] = 46;m && (t[--c] = 45);return Dj(t, c, s - c + 1);
                }for (k = 2; k < -f + 1; k++) {
                    t[--c] = 48;
                }t[--c] = 46;t[--c] = 48;m && (t[--c] = 45);return Dj(t, c, s - c);
            }B = c + 1;u = new Nj();m && (u.a += '-', u);if (s - B >= 1) {
                Hj(u, t[c]);u.a += '.';u.a += Dj(t, c + 1, s - c - 1);
            } else {
                u.a += Dj(t, c, s - c);
            }u.a += 'E';f > 0 && (u.a += '+', u);u.a += '' + f;return u.a;
        }
        function Zt(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A;u = new Fj();t = a.d;t > (a.a / 2 | 0) && (t = a.a / 2 | 0);u.a += '##TITLE= ' + b + ix + '##JCAMP-DX= 5.00\r\n' + '##DATA TYPE= MASS SPECTRUM\r\n' + '##DATA CLASS= PEAK TABLE\r\n' + '##ORIGIN= Generated spectrum based on ChemCalc www.chemcalc.org\r\n' + '##SPECTROMETER/DATA SYSTEM= Based on ChemCalc isotopic distribution calculator\r\n' + '##XUNITS= M/Z\r\n' + '##YUNITS= RELATIVE ABUNDANCE\r\n' + '##NPOINTS=         \r\n';e = u.a.length;u.a += '##MAXY= 100\r\n##MINY= 0\r\n';for (n = (q = new po(d).a.N().K(), new vo(q)); n.a.O();) {
                m = (h = n.a.P(), h.S());Ej(u, '##$' + m + '=' + (m == null ? Um(Aq(d.a, null)) : Qq(d.b, m)) + ix);
            }u.a += '##PEAK TABLE= (XY..XY)\r\n';p = 0;l = new ps(a).b.V();o = wm(new po(c), Ed(ff, { 3: 1, 144: 1 }, 72, new po(c).a.size(), 7, 1));iq(o, 0, o.length, null);g = 0;r = hx;j = true;f = 0;s = false;A = '';while (_n(l.a) && f < t) {
                ++f;h = l.b = ao(l.a);v = nt(h.S());w = nt(h.T());w < 1.0E-9 && (w = 0);if (w != 0 && A.length > 0) {
                    u.a += A;++p;A = '';
                }i = true;for (k = g; k < o.length; k++) {
                    if (!_n(l.a) || $wnd.Math.abs(nt(o[k]) - r) < $wnd.Math.abs(nt(o[k]) - v)) {
                        if (i) {
                            u.a += '  $$ ';i = false;
                        } else {
                            u.a += ',';
                        }Ej(u, jn(c, o[k]));++g;
                    } else {
                        break;
                    }
                }r = v;if (j) {
                    j = false;Ej(u, Yt(v) + ', ' + Yt(w * 100));++p;
                } else {
                    if (!s || w != 0) {
                        u.a += ix;Ej(u, Yt(v) + ', ' + Yt(w * 100));++p;
                    } else {
                        A = ix + Yt(v) + ', ' + Yt(0);
                    }w == 0 ? s = true : s = false;
                }
            }u.a += '\r\n##END=\r\n';u.a = yj(u.a, 0, e - 10) + (p + '') + xj(u.a, e - 2);return u;
        }
        function jm(a, b) {
            var c, d, e, f;lm(b, a.e);c = a.d[0];d = a.d[1];e = a.d[2];f = a.d[3];c = mm(c, d, e, f, a.e[0], 7, -680876936);f = mm(f, c, d, e, a.e[1], 12, -389564586);e = mm(e, f, c, d, a.e[2], 17, 606105819);d = mm(d, e, f, c, a.e[3], 22, -1044525330);c = mm(c, d, e, f, a.e[4], 7, -176418897);f = mm(f, c, d, e, a.e[5], 12, 1200080426);e = mm(e, f, c, d, a.e[6], 17, -1473231341);d = mm(d, e, f, c, a.e[7], 22, -45705983);c = mm(c, d, e, f, a.e[8], 7, 1770035416);f = mm(f, c, d, e, a.e[9], 12, -1958414417);e = mm(e, f, c, d, a.e[10], 17, -42063);d = mm(d, e, f, c, a.e[11], 22, -1990404162);c = mm(c, d, e, f, a.e[12], 7, 1804603682);f = mm(f, c, d, e, a.e[13], 12, -40341101);e = mm(e, f, c, d, a.e[14], 17, -1502002290);d = mm(d, e, f, c, a.e[15], 22, 1236535329);c = nm(c, d, e, f, a.e[1], 5, -165796510);f = nm(f, c, d, e, a.e[6], 9, -1069501632);e = nm(e, f, c, d, a.e[11], 14, 643717713);d = nm(d, e, f, c, a.e[0], 20, -373897302);c = nm(c, d, e, f, a.e[5], 5, -701558691);f = nm(f, c, d, e, a.e[10], 9, 38016083);e = nm(e, f, c, d, a.e[15], 14, -660478335);d = nm(d, e, f, c, a.e[4], 20, -405537848);c = nm(c, d, e, f, a.e[9], 5, 568446438);f = nm(f, c, d, e, a.e[14], 9, -1019803690);e = nm(e, f, c, d, a.e[3], 14, -187363961);d = nm(d, e, f, c, a.e[8], 20, 1163531501);c = nm(c, d, e, f, a.e[13], 5, -1444681467);f = nm(f, c, d, e, a.e[2], 9, -51403784);e = nm(e, f, c, d, a.e[7], 14, 1735328473);d = nm(d, e, f, c, a.e[12], 20, -1926607734);c = om(c, d, e, f, a.e[5], 4, -378558);f = om(f, c, d, e, a.e[8], 11, -2022574463);e = om(e, f, c, d, a.e[11], 16, 1839030562);d = om(d, e, f, c, a.e[14], 23, -35309556);c = om(c, d, e, f, a.e[1], 4, -1530992060);f = om(f, c, d, e, a.e[4], 11, 1272893353);e = om(e, f, c, d, a.e[7], 16, -155497632);d = om(d, e, f, c, a.e[10], 23, -1094730640);c = om(c, d, e, f, a.e[13], 4, 681279174);f = om(f, c, d, e, a.e[0], 11, -358537222);e = om(e, f, c, d, a.e[3], 16, -722521979);d = om(d, e, f, c, a.e[6], 23, 76029189);c = om(c, d, e, f, a.e[9], 4, -640364487);f = om(f, c, d, e, a.e[12], 11, -421815835);e = om(e, f, c, d, a.e[15], 16, 530742520);d = om(d, e, f, c, a.e[2], 23, -995338651);c = pm(c, d, e, f, a.e[0], 6, -198630844);f = pm(f, c, d, e, a.e[7], 10, 1126891415);e = pm(e, f, c, d, a.e[14], 15, -1416354905);d = pm(d, e, f, c, a.e[5], 21, -57434055);c = pm(c, d, e, f, a.e[12], 6, 1700485571);f = pm(f, c, d, e, a.e[3], 10, -1894986606);e = pm(e, f, c, d, a.e[10], 15, -1051523);d = pm(d, e, f, c, a.e[1], 21, -2054922799);c = pm(c, d, e, f, a.e[8], 6, 1873313359);f = pm(f, c, d, e, a.e[15], 10, -30611744);e = pm(e, f, c, d, a.e[6], 15, -1560198380);d = pm(d, e, f, c, a.e[13], 21, 1309151649);c = pm(c, d, e, f, a.e[4], 6, -145523070);f = pm(f, c, d, e, a.e[11], 10, -1120210379);e = pm(e, f, c, d, a.e[2], 15, 718787259);d = pm(d, e, f, c, a.e[9], 21, -343485551);a.d[0] = a.d[0] + c | 0;a.d[1] = a.d[1] + d | 0;a.d[2] = a.d[2] + e | 0;a.d[3] = a.d[3] + f | 0;
        }
        function Zu(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;c = zj(c);c = vj(c, '[=]', '');if (c.indexOf('.') != -1) throw Xg(new Ab('Error: the formula "' + c + '"contains dots (error in parsing)'));if (oj(c, '')) {
                return;
            }if ($h(c.charCodeAt(0))) {
                throw Xg(new Ab('Error: the formula starts with a number'));
            }c.charCodeAt(0) == 120 && (c = 'X' + yj(c, 1, c.length));g = new Fr();k = 1;j = 1;m = 1;l = 1;r = 1;q = 1;w = c.length - 1;while (w >= 0) {
                if ($h(c.charCodeAt(w))) {
                    f = w;while (w > 0 && $h(c.charCodeAt(w))) {
                        --w;
                    }e = nt(c.substr(w + 1, f + 1 - (w + 1)));u = Bi(e);if (c.charCodeAt(w) == 45) {
                        --w;if (w < 0) throw Xg(new iv("Syntax error: the formula starts with '-': " + c));f = w;while (w > 0 && $h(c.charCodeAt(w))) {
                            --w;
                        }w == 0 && $h(c.charCodeAt(0)) && --w;o = nt(c.substr(w + 1, f + 1 - (w + 1)));if (o.length == 0) {
                            u = Bi('-' + e);v = u;
                        } else {
                            v = Bi(o);
                        }
                    } else v = u;if (c.charCodeAt(w) == 41) {
                        --w;if (w < 0) throw Xg(new iv(ux + c));Er(g, new Pi(r));Er(g, new Pi(q));r = m;q = l;l *= u;m *= v;
                    } else {
                        k = v;j = u;
                    }
                } else {
                    if (c.charCodeAt(w) == 93) {
                        s = w;--w;if (w <= 1) throw Xg(new iv(vx));if (!_h(c.charCodeAt(w))) throw Xg(new iv(vx));while (w > 0 && bi(c.charCodeAt(w))) {
                            --w;
                        }if (!ci(c.charCodeAt(w))) throw Xg(new iv('Syntax error: bad symbol (must start with uppercase)'));t = c.substr(w, s - w);--w;if (w < 0) throw Xg(new iv(vx));if (!$h(c.charCodeAt(w))) throw Xg(new iv(vx));f = w;while (w > 0 && c.charCodeAt(w) != 91) {
                            --w;
                        }p = c.substr(w + 1, f + 1 - (w + 1));try {
                            n = Bi(p);
                        } catch (a) {
                            a = Wg(a);if (we(a, 21)) {
                                throw Xg(new iv('Syntax error: bad isotope number ' + p));
                            } else throw Xg(a);
                        }if (c.charCodeAt(w) != 91) throw Xg(new iv("Isotope syntax error: no opening '['"));Lu(b, t, k * m, j * l, n, d);j = 1;k = 1;if (w > 0) --w;else return;
                    } else {
                        if (_h(c.charCodeAt(w))) {
                            s = w;while (w > 0 && bi(c.charCodeAt(w))) {
                                --w;
                            }if (s == 0 && w == 0 && c.charCodeAt(0) == 110) {
                                b.f = 0;return;
                            }if (!ci(c.charCodeAt(w))) throw Xg(new iv('Syntax error: the symbol must start with uppercase'));t = c.substr(w, s + 1 - w);if (oj(t, 'X') && w == 0) {
                                b.f = 0;return;
                            }--w;Lu(b, t, k * m, j * l, 0, d);j = 1;k = 1;
                        } else {
                            while (c.charCodeAt(w) == 41) {
                                --w;if (w < 0) throw Xg(new iv(ux + c));Er(g, new Pi(r));Er(g, new Pi(q));r = m;q = l;
                            }if (w < 0) break;while (c.charCodeAt(w) == 40) {
                                l = q;m = r;if (g.a.a.length == 0) {
                                    q = 1;r = 1;
                                } else {
                                    q = Dr(g).a;r = Dr(g).a;
                                }--w;if (w < 0) break;
                            }if (w < 0) break;if (c.charCodeAt(w) == 125) {
                                i = w;while (w > 0 && c.charCodeAt(w) != 123) {
                                    --w;
                                }if (c.charCodeAt(w) != 123) throw Xg(new iv('Syntax error (combinatorial): no opening brace'));$u(b, c.substr(w + 1, i - (w + 1)), k * m, j * l);--w;
                            }
                        }
                    }
                }if (w < 0) break;h = c.charCodeAt(w);if (h == 123) throw Xg(new iv('Syntax error (combinatorial): no closing brace'));if (h == 91) throw Xg(new iv('Syntax error (isotope): no closing bracket'));if (!/[A-Z\d]/i.test(String.fromCharCode(h)) && h != 40 && h != 91 && h != 123 && h != 93 && h != 41 && h != 125) throw Xg(new iv("Syntax error: unrecognized character: '" + String.fromCharCode(h) + "'"));
            }
        }
        function Wv(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S;B = new kw();if (!b) {
                hw(B, Ax, new td(Dx));return B;
            }O = b.b.a.get(Cx);if (O != null && !oj(O, '')) {
                try {
                    d = (gv(), gv(), ev);
                } catch (a) {
                    a = Wg(a);if (!we(a, 47)) throw Xg(a);
                }
            }H = b.b.a.get(wx);v = b.b.a.get(Ex);R = b.b.a.get(Fx) != null && nt((Th(), pj(b.b.a.get(Fx)) ? true : false));q = 0.001;try {
                q = Ai(b.b.a.get(Gx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }Q = 1.0E-5;try {
                Q = Ai(b.b.a.get(Hx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }s = 0;try {
                s = De(Ai(b.b.a.get(Ix)));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }i = null;try {
                i = Ai(b.b.a.get(Jx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }A = 0;Pq(b.b, Kx) && oj(b.b.a.get(Kx).toLowerCase(), 'center') && (A = 1);D = new kw();H == null ? hw(D, wx, (Pc(), Pc(), Oc)) : hw(D, wx, new td(H));Q == null ? hw(D, Hx, (Pc(), Pc(), Oc)) : hw(D, Hx, new Uc((ht(Q), Q)));q == null ? hw(D, Gx, (Pc(), Pc(), Oc)) : hw(D, Gx, new Uc((ht(q), q)));hw(D, Fx, (Ic(), R ? Hc : Gc));v == null ? hw(D, Ex, (Pc(), Pc(), Oc)) : hw(D, Ex, new td(v));s > 0 && hw(D, Ix, new Uc(s));O == null ? hw(D, Cx, (Pc(), Pc(), Oc)) : hw(D, Cx, new td(O));hw(B, 'options', D.a);n = null;if (H != null) {
                H = zj(H);oj(H, '') && (H = null);
            }if (H != null) {
                try {
                    n = new Iu(H, d, c);if (n.d.a.length > 0) {
                        if (n.e) {
                            hw(B, Ax, new td('mass not defined'));
                        } else {
                            if (R) {
                                I = new kw();hw(I, Lx, new td(wx));jw(I, Mx, Hu(n));hw(B, wx, I.a);
                            } else {
                                jw(B, wx, Hu(n));
                            }hw(B, Nx, new Uc(zu(n)));if (n.c) {
                                hw(B, 'isRange', (null, Hc));
                            } else {
                                hw(B, 'mw', new Uc(Au(n)));hw(B, 'em', new Uc(Bu(n)));hw(B, 'nominalMass', new Uc(Cu(n)));hw(B, Nx, new Uc(zu(n)));try {
                                    hw(B, Ox, new Uc(Du(n, i)));
                                } catch (a) {
                                    a = Wg(a);if (!we(a, 8)) throw Xg(a);
                                }t = new ew();for (h = (L = xu(n).a.N().K(), new Eo(L)); h.a.O();) {
                                    f = (l = h.a.P(), l.T());k = new kw();jw(k, 'element', f.i);hw(k, sw, new Uc(Ct(f)));hw(k, kx, new Uc(f.g));dw(t, k.a);
                                }hw(B, 'ea', t.a);if (v != null && !oj(v, '')) {
                                    P = new pv(d, n, (ht(q), q), (ht(Q), Q));P.f = A;kv(P);lv(P);if (s > 0) {
                                        r = Ov(s);jv(P, r, (ht(q), q));
                                    }hw(D, 'numberLines', new Uc(P.e.c.d));if (v.indexOf(Px) > -1) {
                                        if (R) {
                                            w = new kw();hw(w, Lx, new td(Px));jw(w, Mx, mv(P).a);hw(B, Px, w.a);
                                        } else {
                                            jw(B, Px, mv(P).a);
                                        }
                                    }if (v.indexOf('xy') > -1) {
                                        if (R) {
                                            S = new kw();hw(S, Lx, new td('xy'));jw(S, Mx, nv(P).a);hw(B, 'xy', S.a);
                                        } else {
                                            jw(B, 'xy', nv(P).a);
                                        }
                                    }if (v.indexOf('array') > -1 && v.indexOf('arrayX') == -1) {
                                        e = ov(P);C = new ew();F = new ew();G = new ew();for (u = 0; u < e.length; u++) {
                                            dw(F, new Uc(e[u][0]));dw(G, new Uc(e[u][1]));
                                        }dw(C, F.a);dw(C, G.a);hw(B, 'spectrum', C.a);
                                    }if (v.indexOf('arrayXXYY') > -1) {
                                        e = ov(P);C = new ew();F = new ew();G = new ew();for (u = 0; u < e.length; u++) {
                                            dw(F, new Uc(e[u][0]));dw(G, new Uc(e[u][1]));
                                        }dw(C, F.a);dw(C, G.a);hw(B, 'arrayXXYY', C.a);
                                    }if (v.indexOf('arrayXYXY') > -1) {
                                        e = ov(P);hw(B, 'arrayXYXY', new gw(e).a);
                                    }
                                }N = new ew();hw(B, 'parts', N.a);for (p = new bq(n.d); p.a < p.c.a.length;) {
                                    o = aq(p);M = new kw();dw(N, M.a);if (R) {
                                        I = new kw();hw(I, Lx, new td(wx));jw(I, Mx, Uu(o));hw(M, wx, I.a);
                                    } else {
                                        jw(M, wx, Uu(o));
                                    }hw(M, 'mw', new Uc(Pu(o)));hw(M, 'em', new Uc(Qu(o)));hw(M, sw, new Uc(o.f));o.b.length > 0 && jw(M, 'comment', o.b);iw(M, Jv(o, i));K = Qu(o) - o.a * zx;if (o.a != 0) {
                                        hw(M, Nx, new Uc(o.a));K = K / $i(o.a);
                                    }hw(M, 'msem', new Uc(K));Nu(o);j = new ew();for (g = (m = new jp(o.g).a.N().b.V(), new pp(m)); _n(g.a.a);) {
                                        f = (l = is(g.a), l.S());k = new kw();jw(k, 'element', f.i);hw(k, sw, new Uc(Ct(f)));hw(k, kx, new Uc(f.g));dw(j, k.a);
                                    }hw(M, 'ea', j.a);
                                }
                            }
                        }
                    } else {
                        hw(B, Ax, new td('there is no part in the molecule'));
                    }
                } catch (a) {
                    a = Wg(a);if (we(a, 4)) {
                        J = a;jw(B, Ax, J.f);
                    } else throw Xg(a);
                }
            } else {
                hw(B, Ax, new td('parameter mf not specified'));
            }return B;
        }
        function Zv(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, A, B, C, D, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, ab, bb, cb, db;H = 0.5;S = 0;M = 50;K = 1000;u = false;db = false;T = false;A = b.b.a.get(Qx) != null && nt((Th(), pj(b.b.a.get(Qx)) ? true : false));w = b.b.a.get(Rx) == null ? 'http://www.chemcalc.org/service/jcamp/' : b.b.a.get(Rx);P = 'C0-100H0-202N0-10O0-10F0-3Cl0-3Br0-1';$ = hx;Z = new Ls();bb = b.b.a.get(Fx) != null && nt((Th(), pj(b.b.a.get(Fx)) ? true : false));s = 0.001;try {
                s = Ai(b.b.a.get(Gx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }t = 0;try {
                t = De(Ai(b.b.a.get(Ix)));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }C = new kw();if (!b) {
                hw(C, Ax, new td(Dx));return C;
            }W = b.b.a.get(Cx);if (W != null && !oj(W, '')) {
                try {
                    d = (gv(), gv(), ev);
                } catch (a) {
                    a = Wg(a);if (!we(a, 47)) throw Xg(a);
                }
            }l = null;try {
                l = Ai(b.b.a.get(Jx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }try {
                S = Ai(b.b.a.get(Sx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }try {
                M = Ai(b.b.a.get(Tx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }if (Pq(b.b, Ux)) {
                try {
                    u = (Th(), pj(b.b.a.get(Ux)));
                } catch (a) {
                    a = Wg(a);if (!we(a, 8)) throw Xg(a);
                }
            }if (Pq(b.b, Vx)) {
                try {
                    db = (Th(), pj(b.b.a.get(Vx)));
                } catch (a) {
                    a = Wg(a);if (!we(a, 8)) throw Xg(a);
                }
            }if (Pq(b.b, Wx)) {
                try {
                    T = (Th(), pj(b.b.a.get(Wx)));
                } catch (a) {
                    a = Wg(a);if (!we(a, 8)) throw Xg(a);
                }
            }try {
                K = Ai(b.b.a.get('maxNumberRows'));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }try {
                $ = Ai(b.b.a.get(jx));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }try {
                H = Ai(b.b.a.get('massRange'));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }R = $ - H;J = $ + H;try {
                J = Ai(b.b.a.get('maxMass'));
            } catch (a) {
                a = Wg(a);if (!we(a, 8)) throw Xg(a);
            }Pq(b.b, Xx) && b.b.a.get(Xx) != null && b.b.a.get(Xx).length > 0 && (P = b.b.a.get(Xx));if ($ < 0) {
                hw(C, Ax, new td('monoisotopicMass must be specified and larger than 0'));return C;
            }D = new kw();hw(D, Sx, new Uc(S));hw(D, Tx, new Uc(M));hw(D, Ux, (Ic(), u ? Hc : Gc));hw(D, Vx, db ? Hc : Gc);hw(D, Wx, T ? Hc : Gc);hw(D, 'minMass', new Uc(rh(dh($wnd.Math.round(R * Tw))) / Tw));hw(D, 'maxMass', new Uc(rh(dh($wnd.Math.round(J * Tw))) / Tw));hw(D, 'massRange', new Uc(rh(dh($wnd.Math.round(H * Tw))) / Tw));P == null ? hw(D, Xx, (Pc(), Pc(), Oc)) : hw(D, Xx, new td(P));hw(D, jx, new Uc(rh(dh($wnd.Math.round($ * Tw))) / Tw));W == null ? hw(D, Cx, (Pc(), Pc(), Oc)) : hw(D, Cx, new td(W));hw(D, Qx, A ? Hc : Gc);w == null ? hw(D, Rx, (Pc(), Pc(), Oc)) : hw(D, Rx, new td(w));hw(D, Fx, bb ? Hc : Gc);hw(C, 'options', D.a);v = 0;U = 0;f = 0;g = 0;try {
                e = new Ju(P, d, c, false);if (e.d.a.length != 1) {
                    hw(C, Ax, new td('Number of parts not equal to 1'));return C;
                }f = yp(e.d, 0).a;g = f < 0 ? -f : f;if (f != 0) {
                    $ = $ * g + f * zx;R = R * g + f * zx;J = J * g + f * zx;H = H * g;
                }V = _v(yp(e.d, 0), $ + H);if (V) {
                    j = Ed(Ge, Qw, 7, V.a.a.length, 15, 1);Q = Ed(Ge, Qw, 7, V.a.a.length, 15, 1);I = Ed(Ge, Qw, 7, V.a.a.length, 15, 1);Xv(V, Q, I);hw(C, 'bruteForceIteration', new Uc(Ai(pl(Yv(V), 0))));ab = false;k = 0;L = V.a.a.length;tu((lr(0, V.a.a.length), yp(V.a, 0)), 0, $, Q[0], I[0], H);while (!ab) {
                        if ($g(v, 2000000000) > 0) {
                            throw Xg(new iv('Iteration number is over the current maximum of: 2000000000'));
                        }if (j[k] >= R && j[k] <= J) {
                            cb = Iv(V, l);if (!db || cb == null || (ht(cb), cb) >= S && (ht(cb), cb) <= M && (!u || (ht(cb), cb) == De((ht(cb), cb)))) {
                                U = Yg(U, 1);if (!T) {
                                    if (Z.g.d >= K) {
                                        if ($wnd.Math.abs(cp(Mr(Z.g)).a) > $wnd.Math.abs(j[k] - $)) {
                                            Tm(Zo(Z.g));Ks(Z, new bw(j[k] - $, j[k], cb, $v(V, c)));
                                        }
                                    } else {
                                        Ks(Z, new bw(j[k] - $, j[k], cb, $v(V, c)));
                                    }
                                }
                            }
                        }while (k < L && k >= 0) {
                            v = Yg(v, 1);i = (lr(k, V.a.a.length), yp(V.a, k));if (i.b < i.c) {
                                ++i.b;k == 0 ? j[0] = i.a.e * i.b : j[k] = j[k - 1] + i.a.e * i.b;if (k < L - 1) {
                                    ++k;tu((lr(k, V.a.a.length), yp(V.a, k)), j[k - 1], $, Q[k], I[k], H);
                                } else {
                                    break;
                                }
                            } else {
                                --k;
                            }
                        }k < 0 && (ab = true);
                    }
                }hw(C, 'realIteration', new Uc(rh(ph(v, 1))));hw(C, 'numberResults', new Uc(rh(U)));hw(C, Nx, new Uc(f));
            } catch (a) {
                a = Wg(a);if (we(a, 4)) {
                    m = a;jw(C, Ax, rb(m, m.f) + '\r' + (ei(Ug), Ug.k + '@' + (st(D) >>> 0).toString(16)));
                } else throw Xg(a);
            }G = new ew();h = '';f != 0 && (f > 0 ? h = '(+' + f + ')' : h = '(' + f + ')');for (Y = (q = new jp(Z.g).a.N().b.V(), new pp(q)); _n(Y.a.a);) {
                X = (p = is(Y.a), p.S());F = new kw();if (f == 0) {
                    r = rh(dh($wnd.Math.round(X.a * Tw))) / Tw;o = rh(dh($wnd.Math.round(X.c * Tw))) / Tw;
                } else {
                    r = rh(dh($wnd.Math.round(X.a / g * Tw))) / Tw;o = rh(dh($wnd.Math.round((X.c - f * zx) / g * Tw))) / Tw;
                }hw(F, Ax, new Uc(r));hw(F, 'em', new Uc(o));hw(F, 'ppm', new Uc(rh(dh($wnd.Math.round(r / o * Tw))) / Tw * Sw));jw(F, 'info', X.b + h);try {
                    B = w + ('' + X.b) + '&fwhm=' + s;t > 0 && (B += '&gaussianWidth=' + t);if (bb) {
                        N = new kw();hw(N, Lx, new td(wx));jw(N, Mx, Hu(new Iu(X.b + h, d, c)));hw(F, wx, N.a);if (A) {
                            O = new kw();hw(O, Lx, new td(Px));hw(O, 'url', new td(B));hw(F, Px, O.a);
                        }
                    } else {
                        jw(F, wx, Hu(new Iu(X.b + h, d, c)));A && hw(F, 'jcampURL', new td(B));
                    }
                } catch (a) {
                    a = Wg(a);if (we(a, 4)) {
                        n = a;jw(F, wx, rb(n, n.f));
                    } else throw Xg(a);
                }try {
                    hw(F, 'unsat', new Uc(rh(dh($wnd.Math.round(nt(X.d) * Tw))) / Tw));
                } catch (a) {
                    a = Wg(a);if (!we(a, 8)) throw Xg(a);
                }dw(G, F.a);
            }hw(C, 'results', G.a);return C;
        }
        function gv() {
            gv = Dh;var b, c, d, e, f, g, h, i, j, k, l, m, n, o;ev = new xq();e = new xq();l = wj('1\tH\tHydrogen\t1.0079407540647767\n2\tHe\tHelium\t4.002601932126928\n3\tLi\tLithium\t6.940036602958518\n4\tBe\tBeryllium\t9.01218306582\n5\tB\tBoron\t10.811028050830402\n6\tC\tCarbon\t12.010735896735273\n7\tN\tNitrogen\t14.006703211447812\n8\tO\tOxygen\t15.99940492431999\n9\tF\tFluorine\t18.9984031627392\n10\tNe\tNeon\t20.1800463805534\n11\tNa\tSodium\t22.989769282019\n12\tMg\tMagnesium\t24.30505162003182\n13\tAl\tAluminium\t26.9815385311\n14\tSi\tSilicon\t28.085498705717367\n15\tP\tPhosphorus\t30.973761998427005\n16\tS\tSulfur\t32.06478740616064\n17\tCl\tChlorine\t35.45293758302163\n18\tAr\tArgon\t39.94779856360816\n19\tK\tPotassium\t39.098300910134526\n20\tCa\tCalcium\t40.078022511320995\n21\tSc\tScandium\t44.9559082877\n22\tTi\tTitanium\t47.86674496650784\n23\tV\tVanadium\t50.94146504682524\n24\tCr\tChromium\t51.99613176185417\n25\tMn\tManganese\t54.9380439148\n26\tFe\tIron\t55.84514443879042\n27\tCo\tCobalt\t58.9331942956\n28\tNi\tNickel\t58.69334711516411\n29\tCu\tCopper\t63.54603995189275\n30\tZn\tZinc\t65.37778253794673\n31\tGa\tGallium\t69.72306608387825\n32\tGe\tGermanium\t72.62755016686985\n33\tAs\tArsenic\t74.9215945795\n34\tSe\tSelenium\t78.9593885653162\n35\tBr\tBromine\t79.90352779450998\n36\tKr\tKrypton\t83.7979999970144\n37\tRb\tRubidium\t85.4676635956754\n38\tSr\tStrontium\t87.6166444816256\n39\tY\tYttrium\t88.905840324\n40\tZr\tZirconium\t91.223641617088\n41\tNb\tNiobium\t92.90637302\n42\tMo\tMolybdenum\t95.95978854712139\n43\tTc\tTechnetium\t97.907212436\n44\tRu\tRuthenium\t101.06494015455816\n45\tRh\tRhodium\t102.905498026\n46\tPd\tPalladium\t106.4153275191986\n47\tAg\tSilver\t107.86814965477768\n48\tCd\tCadmium\t112.4115578234279\n49\tIn\tIndium\t114.81808662995083\n50\tSn\tTin\t118.71011260065993\n51\tSb\tAntimony\t121.75978370048469\n52\tTe\tTellurium\t127.60312649313722\n53\tI\tIodine\t126.90447193899999\n54\tXe\tXenon\t131.29276144954605\n55\tCs\tCaesium\t132.90545196108\n56\tBa\tBarium\t137.326891631724\n57\tLa\tLanthanum\t138.90546889772423\n58\tCe\tCerium\t140.11573076170473\n59\tPr\tPraseodymium\t140.907657623\n60\tNd\tNeodymium\t144.2415960520596\n61\tPm\tPromethium\t144.912755933\n62\tSm\tSamarium\t150.36635573073943\n63\tEu\tEuropium\t151.96437814438002\n64\tGd\tGadolinium\t157.25213066410058\n65\tTb\tTerbium\t158.925354719\n66\tDy\tDysprosium\t162.49947283943277\n67\tHo\tHolmium\t164.930328821\n68\tEr\tErbium\t167.25908267223062\n69\tTm\tThulium\t168.934217922\n70\tYb\tYtterbium\t173.05415018857693\n71\tLu\tLutetium\t174.96681497785502\n72\tHf\tHafnium\t178.48497874351798\n73\tTa\tTantalum\t180.94787565622738\n74\tW\tTungsten\t183.84177756194964\n75\tRe\tRhenium\t186.206704560478\n76\tOs\tOsmium\t190.22485964996508\n77\tIr\tIridium\t192.21605167309997\n78\tPt\tPlatinum\t195.08445687604046\n79\tAu\tGold\t196.9665687971\n80\tHg\tMercury\t200.599167040318\n81\tTl\tThallium\t204.38341285336003\n82\tPb\tLead\t207.21690807599998\n83\tBi\tBismuth\t208.980399116\n84\tPo\tPolonium\t208.98243082000002\n85\tAt\tAstatine\t209.987147983\n86\tRn\tRadon\t222.017578225\n87\tFr\tFrancium\t223.019736025\n88\tRa\tRadium\t226.02541032500002\n89\tAc\tActinium\t227.027752325\n90\tTh\tThorium\t232.03805582100003\n91\tPa\tProtactinium\t231.035884224\n92\tU\tUranium\t238.0289104816502\n93\tNp\tNeptunium\t237.048173619\n94\tPu\tPlutonium\t244.06420535600003\n95\tAm\tAmericium\t243.061381324\n96\tCm\tCurium\t247.070354147\n97\tBk\tBerkelium\t247.070307359\n98\tCf\tCalifornium\t251.079588648\n99\tEs\tEinsteinium\t252.08298054\n100\tFm\tFermium\t257.095106169\n101\tMd\tMendelevium\t258.09843155\n102\tNo\tNobelium\t259.1010311\n103\tLr\tLawrencium\t266.1198356\n104\tRf\tRutherfordium\t267.1217962\n105\tDb\tDubnium\t268.1256757\n106\tSg\tSeaborgium\t269.1286339\n107\tBh\tBohrium\t270.1333631\n108\tHs\tHassium\t277.1519058\n109\tMt\tMeitnerium\t278.1563168\n110\tDs\tDarmstadtium\t281.1645159\n111\tRg\tRoentgenium\t282.1691272\n112\tCn\tCopernicium\t285.177126\n113\tNh\tNihonium\t286.1822172\n114\tFl\tFlerovium\t289.190426\n115\tMc\tMoscovium\t290.1959873\n116\tLv\tLivermorium\t293.204496\n117\tTs\tTeennessine\t294.2104674\n118\tOg\tOganesson\t294.2139271', xx);for (h = 0; h < l.length; h++) {
                o = wj(l[h], '\t');c = new mu(Ai(o[3]), zj(o[1]), o[2], Bi(o[0]));nn(ev, c.g, c);nn(e, o[0], c);
            }l = wj('1\t1.007825032239\t99.9885\t1\n2\t2.0141017781212\t0.0115\t1\n3\t3.016049277924\t0\t1\n4\t3.016029320125\t0.00013\t2\n5\t4.002603254136\t99.99987\t2\n6\t6.015122887416\t7.59\t3\n7\t7.016003436645\t92.41\t3\n8\t9.01218306582\t100\t4\n9\t10.0129369541\t19.9\t5\n10\t11.0093053645\t80.1\t5\n11\t12.0\t98.93\t6\n12\t13.0033548350723\t1.07\t6\n13\t14.00324198844\t0\t6\n14\t14.003074004432\t99.636\t7\n15\t15.0001088988864\t0.364\t7\n17\t16.9991317565069\t0.038\t8\n16\t15.9949146195717\t99.757\t8\n18\t17.9991596128676\t0.205\t8\n19\t18.9984031627392\t100\t9\n21\t20.99384668541\t0.27\t10\n20\t19.992440176217\t90.48\t10\n22\t21.99138511418\t9.25\t10\n23\t22.989769282019\t100\t11\n25\t24.9858369765\t10\t12\n24\t23.98504169714\t78.99\t12\n26\t25.98259296831\t11.01\t12\n27\t26.9815385311\t100\t13\n29\t28.9764946649052\t4.685\t14\n28\t27.9769265346544\t92.223\t14\n30\t29.97377013623\t3.092\t14\n31\t30.973761998427\t100\t15\n34\t33.96786700447\t4.25\t16\n35\t35.967080712\t0.01\t16\n32\t31.972071174414\t94.99\t16\n33\t32.971458909815\t0.75\t16\n36\t34.96885268237\t75.76\t17\n37\t36.96590260255\t24.24\t17\n38\t35.96754510528\t0.3336\t18\n39\t37.9627321121\t0.0629\t18\n40\t39.962383123724\t99.6035\t18\n42\t39.9639981666\t0.0117\t19\n43\t40.961825257941\t6.7302\t19\n41\t38.963706486449\t93.2581\t19\n49\t47.9525227613\t0.187\t20\n48\t45.953689024\t0.004\t20\n46\t42.9587664424\t0.135\t20\n47\t43.9554815635\t2.086\t20\n44\t39.96259086322\t96.941\t20\n45\t41.9586178316\t0.647\t20\n50\t44.9559082877\t100\t21\n51\t45.9526277235\t8.25\t22\n55\t49.9447868939\t5.18\t22\n54\t48.9478656839\t5.41\t22\n53\t47.9479419838\t73.72\t22\n52\t46.9517587938\t7.44\t22\n57\t50.9439570494\t99.75\t23\n56\t49.9471560195\t0.25\t23\n59\t51.9405062363\t83.789\t24\n58\t49.9460418394\t4.345\t24\n61\t53.9388791661\t2.365\t24\n60\t52.9406481562\t9.501\t24\n62\t54.9380439148\t100\t25\n64\t55.9349363349\t91.754\t26\n65\t56.9353928449\t2.119\t26\n66\t57.9332744353\t0.282\t26\n63\t53.9396089953\t5.845\t26\n67\t58.9331942956\t100\t27\n68\t57.9353424152\t68.077\t28\n69\t59.9307858852\t26.223\t28\n70\t60.9310555752\t1.1399\t28\n71\t61.9283453755\t3.6346\t28\n72\t63.9279668258\t0.9255\t28\n73\t62.9295977256\t69.15\t29\n74\t64.9277897071\t30.85\t29\n76\t65.9260338194\t27.73\t30\n77\t66.9271277596\t4.04\t30\n78\t67.9248445598\t18.45\t30\n79\t69.925319221\t0.61\t30\n75\t63.9291420171\t49.17\t30\n81\t70.9247025887\t39.892\t31\n80\t68.925573513\t60.108\t31\n85\t73.92117776113\t36.5\t32\n84\t72.92345895661\t7.75\t32\n86\t75.92140272619\t7.73\t32\n83\t71.92207582681\t27.45\t32\n82\t69.924248759\t20.57\t32\n87\t74.9215945795\t100\t33\n93\t81.916699515\t8.73\t34\n92\t79.916521813\t49.61\t34\n89\t75.91921370417\t9.37\t34\n88\t73.92247593415\t0.89\t34\n91\t77.917309282\t23.77\t34\n90\t76.91991415467\t7.63\t34\n95\t80.916289714\t49.31\t35\n94\t78.918337614\t50.69\t35\n100\t83.911497728244\t56.987\t36\n101\t85.910610626941\t17.279\t36\n98\t81.9134827394\t11.593\t36\n99\t82.9141271632\t11.5\t36\n96\t77.9203649476\t0.355\t36\n97\t79.9163780875\t2.286\t36\n102\t84.911789737954\t72.17\t37\n103\t86.90918053106\t27.83\t37\n106\t86.908877512\t7\t38\n107\t87.905612512\t82.58\t38\n104\t83.913419113\t0.56\t38\n105\t85.909260612\t9.86\t38\n108\t88.905840324\t100\t39\n113\t95.908271421\t2.8\t40\n112\t93.90631082\t17.38\t40\n110\t90.90563962\t11.22\t40\n111\t91.90503472\t17.15\t40\n109\t89.90469772\t51.45\t40\n114\t92.90637302\t100\t41\n119\t96.9060181249\t9.6\t42\n118\t95.9046761247\t16.67\t42\n117\t94.9058387747\t15.84\t42\n116\t93.9050849048\t9.15\t42\n115\t91.9068079684\t14.53\t42\n121\t99.907471811\t9.82\t42\n120\t97.9054048249\t24.39\t42\n124\t98.90625081\t0\t43\n123\t97.907212436\t100\t43\n122\t96.90636674\t0\t43\n129\t100.905576912\t17.06\t44\n127\t98.905934111\t12.76\t44\n128\t99.904214311\t12.6\t44\n126\t97.905286869\t1.87\t44\n131\t103.905427528\t18.62\t44\n125\t95.9075902549\t5.54\t44\n130\t101.904344112\t31.55\t44\n132\t102.905498026\t100\t45\n137\t107.903891612\t26.46\t46\n136\t105.903480412\t27.33\t46\n138\t109.9051722075\t11.72\t46\n133\t101.905602228\t1.02\t46\n135\t104.905079612\t22.33\t46\n134\t103.904030514\t11.14\t46\n139\t106.905091626\t51.839\t47\n140\t108.904755314\t48.161\t47\n141\t105.906459912\t1.25\t48\n143\t109.9030066161\t12.49\t48\n142\t107.904183412\t0.89\t48\n144\t110.9041828761\t12.8\t48\n145\t111.902762876\t24.13\t48\n146\t112.9044081345\t12.22\t48\n147\t113.9033650943\t28.73\t48\n148\t115.9047631517\t7.49\t48\n149\t112.9040618491\t4.29\t49\n150\t114.90387877612\t95.71\t49\n152\t113.90278271\t0.66\t50\n153\t114.90334469916\t0.34\t50\n154\t115.901742801\t14.54\t50\n155\t116.9029539852\t7.68\t50\n156\t117.9016065754\t24.22\t50\n157\t118.9033111778\t8.59\t50\n158\t119.9022016397\t32.58\t50\n159\t121.903443826\t4.63\t50\n160\t123.905276611\t5.79\t50\n151\t111.9048238761\t0.97\t50\n162\t122.904213223\t42.79\t51\n161\t120.90381203\t57.21\t51\n170\t129.90622274812\t34.08\t52\n169\t127.9044612893\t31.74\t52\n168\t125.903310916\t18.84\t52\n163\t119.904059333\t0.09\t52\n167\t124.904429916\t7.07\t52\n166\t123.902817116\t4.74\t52\n165\t122.904269816\t0.89\t52\n164\t121.903043516\t2.55\t52\n171\t126.904471939\t100\t53\n175\t128.90478086116\t26.4006\t54\n174\t127.903531011\t1.9102\t54\n173\t125.904298338\t0.089\t54\n172\t123.905892019\t0.0952\t54\n178\t131.904155085656\t26.9086\t54\n179\t133.905394669\t10.4357\t54\n176\t129.9035093491\t4.071\t54\n177\t130.9050840624\t21.2324\t54\n180\t135.90721448411\t8.8573\t54\n181\t132.90545196108\t100\t55\n186\t135.9045757329\t7.854\t56\n187\t136.905827143\t11.232\t56\n184\t133.904508183\t2.417\t56\n185\t134.9056883829\t6.592\t56\n188\t137.9052470031\t71.698\t56\n182\t129.906320728\t0.106\t56\n183\t131.905061111\t0.101\t56\n190\t138.906356324\t99.91119\t57\n189\t137.907114937\t0.08881\t57\n191\t135.9071292141\t0.185\t58\n193\t139.905443123\t88.45\t58\n192\t137.90599111\t0.251\t58\n194\t141.909250429\t11.114\t58\n195\t140.907657623\t100\t59\n201\t147.916899326\t5.756\t60\n200\t145.91312262\t17.189\t60\n202\t149.920902218\t5.638\t60\n197\t142.90982002\t12.174\t60\n196\t141.90772902\t27.152\t60\n199\t144.91257932\t8.293\t60\n198\t143.91009302\t23.798\t60\n204\t146.915145019\t0\t61\n203\t144.912755933\t100\t61\n205\t143.912006521\t3.07\t62\n207\t147.914829219\t11.24\t62\n206\t146.914904419\t14.99\t62\n208\t148.917192118\t13.82\t62\n209\t149.917282918\t7.38\t62\n210\t151.919739718\t26.75\t62\n211\t153.92221692\t22.75\t62\n212\t150.919857818\t47.81\t63\n213\t152.921238018\t52.19\t63\n220\t159.927062418\t21.86\t64\n216\t154.922630517\t14.8\t64\n217\t155.922131217\t20.47\t64\n218\t156.923968617\t15.65\t64\n219\t157.924112317\t24.84\t64\n214\t151.919799518\t0.2\t64\n215\t153.920874117\t2.18\t64\n221\t158.925354719\t100\t65\n222\t155.924284717\t0.056\t66\n223\t157.924415931\t0.095\t66\n228\t163.92918192\t28.26\t66\n227\t162.92873832\t24.896\t66\n226\t161.92680562\t25.475\t66\n225\t160.92694052\t18.889\t66\n224\t159.92520462\t2.329\t66\n229\t164.930328821\t100\t67\n235\t169.935470226\t14.91\t68\n234\t167.932376722\t26.978\t68\n233\t166.932054622\t22.869\t68\n232\t165.930299522\t33.503\t68\n231\t163.92920882\t1.601\t68\n230\t161.92878842\t0.139\t68\n236\t168.934217922\t100\t69\n239\t170.936330222\t14.09\t70\n238\t169.934766422\t2.982\t70\n237\t167.933889622\t0.123\t70\n242\t173.938866422\t32.026\t70\n243\t175.942576424\t12.996\t70\n240\t171.936385922\t21.68\t70\n241\t172.938215122\t16.103\t70\n244\t174.94077522\t97.401\t71\n245\t175.94268972\t2.599\t71\n250\t178.94582322\t13.62\t72\n251\t179.94655702\t35.08\t72\n248\t176.94322772\t18.6\t72\n249\t177.94370582\t27.28\t72\n246\t173.940046128\t0.16\t72\n247\t175.941407622\t5.26\t72\n252\t179.947464824\t0.01201\t73\n253\t180.94799582\t99.98799\t73\n258\t185.954362817\t28.43\t74\n254\t179.94671082\t0.12\t74\n255\t181.9482039491\t26.5\t74\n256\t182.950222759\t14.31\t74\n257\t183.9509309294\t30.64\t74\n259\t184.952954513\t37.4\t75\n260\t186.955750116\t62.6\t75\n262\t185.953835016\t1.59\t76\n263\t186.955747416\t1.96\t76\n261\t183.952488514\t0.02\t76\n266\t189.958443717\t26.26\t76\n267\t191.961477029\t40.78\t76\n264\t187.955835216\t13.24\t76\n265\t188.958144217\t16.15\t76\n268\t190.960589321\t37.3\t77\n269\t192.962921621\t62.7\t77\n275\t197.967894923\t7.356\t78\n274\t195.9649520999\t25.21\t78\n273\t194.96479171\t33.78\t78\n272\t193.96268091\t32.86\t78\n270\t189.959929763\t0.012\t78\n271\t191.961038732\t0.782\t78\n276\t196.9665687971\t100\t79\n279\t198.9682806446\t16.87\t80\n278\t197.9667686052\t9.97\t80\n277\t195.965832632\t0.15\t80\n283\t203.9734939853\t6.87\t80\n282\t201.9706434069\t29.86\t80\n281\t200.9703028469\t13.18\t80\n280\t199.9683265947\t23.1\t80\n285\t204.974427814\t70.48\t81\n284\t202.972344614\t29.52\t81\n288\t206.975897313\t22.1\t82\n289\t207.976652513\t52.4\t82\n287\t205.974465713\t24.1\t82\n286\t203.973044013\t1.4\t82\n290\t208.980399116\t100\t83\n291\t208.98243082\t100\t84\n292\t209.982874113\t0\t84\n293\t209.987147983\t100\t85\n294\t210.98749663\t0\t85\n295\t210.990601173\t0\t86\n296\t220.011394123\t0\t86\n297\t222.017578225\t100\t86\n298\t223.019736025\t100\t87\n299\t223.018502327\t0\t88\n300\t224.020212023\t0\t88\n301\t226.025410325\t100\t88\n302\t228.031070726\t0\t88\n303\t227.027752325\t100\t89\n305\t232.038055821\t100\t90\n304\t230.033134119\t0\t90\n306\t231.035884224\t100\t91\n307\t233.039635529\t0\t92\n309\t235.043930119\t0.7204\t92\n308\t234.040952319\t0.0054\t92\n311\t238.05078842\t99.2742\t92\n310\t236.045568219\t0\t92\n313\t237.048173619\t100\t93\n312\t236.04657054\t0\t93\n315\t239.052163619\t0\t94\n314\t238.049560119\t0\t94\n317\t241.056851719\t0\t94\n316\t240.053813819\t0\t94\n319\t244.064205356\t100\t94\n318\t242.05874282\t0\t94\n320\t241.056829319\t0\t95\n321\t243.061381324\t100\t95\n326\t247.070354147\t100\t96\n327\t248.072349956\t0\t96\n324\t245.065491522\t0\t96\n325\t246.067223822\t0\t96\n322\t243.061389322\t0\t96\n323\t244.062752819\t0\t96\n328\t247.070307359\t100\t97\n329\t249.074987727\t0\t97\n332\t251.079588648\t100\t98\n333\t252.081627256\t0\t98\n330\t249.074853923\t0\t98\n331\t250.076406222\t0\t98\n334\t252.08298054\t100\t99\n335\t257.095106169\t100\t100\n337\t260.1036534\t0\t101\n336\t258.09843155\t100\t101\n338\t259.1010311\t100\t102\n340\t266.1198356\t100\t103\n339\t262.1096122\t0\t103\n341\t267.1217962\t100\t104\n342\t268.1256757\t100\t105\n343\t269.1286339\t100\t106\n344\t271.1339363\t0\t106\n346\t272.1382658\t0\t107\n345\t270.1333631\t100\t107\n348\t277.1519058\t100\t108\n347\t270.1342927\t0\t108\n350\t278.1563168\t100\t109\n349\t276.1515959\t0\t109\n351\t281.1645159\t100\t110\n352\t280.1651461\t0\t111\n353\t282.1691272\t100\t111\n354\t285.177126\t100\t112\n356\t286.1822172\t100\t113\n355\t284.1787362\t0\t113\n357\t289.190426\t100\t114\n358\t288.1927462\t0\t115\n359\t290.1959873\t100\t115\n360\t293.204496\t100\t116\n361\t292.2074675\t0\t117\n362\t294.2104674\t100\t117\n363\t294.2139271\t100\t118', xx);for (i = 0; i < l.length; i++) {
                o = wj(l[i], '\t');c = kn(e, o[3]);j = Ai(o[1]);k = Ai(o[2]);b = new bv(De(j + 0.5), j, k, c.g);mn(c.b, new Pi(b.c), b);
            }for (d = (m = new zo(ev).a.N().K(), new Eo(m)); d.a.O();) {
                c = (f = d.a.P(), f.T());hu(c);if (qn(c.b) == 0) {
                    n = new bv(De(c.c + 0.5), c.c, 100, c.g);mn(c.b, new Pi(n.c), n);
                }
            }fv = new xq();l = wj("1\tAbu\t2-Aminobutyric acid diradical\tC4H7NO\r\n2\tAcet\tAcetyl\tC2H3O\r\n3\tAcm\tAcetamidomethyl\tC3H6NO\r\n4\tAdao\tAdamantyloxy\tC10H15O\r\n5\tAib\talpha-Aminoisobutyric acid diradical\tC4H7NO\r\n6\tAla\tAlainine diradical\tC3H5NO\r\n7\tArg\tArginine diradical\tC6H12N4O\r\n8\tArgp\tArginine triradical\tC6H11N4O\r\n9\tAsn\tAsparagine diradical\tC4H6N2O2\r\n10\tAsnp\tAsparagine triradical\tC4H5N2O2\r\n11\tAsp\tAspartic acid diradical\tC4H5NO3\r\n12\tAspp\tAspartic acid triradical\tC4H4NO3\r\n13\tAsu\talpha-Aminosuberic acid diradical\tC8H13NO3\r\n14\tAsup\talpha-Aminosuberic acid triradical\tC8H12NO3\r\n15\tBoc\tt-Butoxycarbonyl\tC5H9O2\r\n16\tBom\tBenzyloxymethyl\tC8H9O\r\n17\tBrz\t2-Bromobenzyloxycarbonyl\tC8H6BrO2\r\n18\tBu\tButyl\tC4H9\r\n19\tBum\tt-Butoxymethyl\tC5H11O\r\n20\tBz\tBenzoyl\tC7H5O\r\n21\tBzl\tBenzyl\tC7H7\r\n22\tBn\tBenzyl\tC7H7\r\n23\tBzlo\tBenzyloxy\tC7H7O\r\n24\tCha\tbeta-Cyclohexylalanine diradical\tC9H15NO\r\n25\tChxo\tCyclohexyloxy\tC6H11O\r\n26\tCit\tCitrulline diradical\tC6H11N3O2\r\n27\tCitp\tCitrulline triradical\tC6H10N3O2\r\n28\tClz\t2-Chlorobenzyloxycarbonyl\tC8H6ClO2\r\n29\tCp\tCyclopentadienyl\tC5H5\r\n30\tCys\tCysteine diradical\tC3H5NOS\r\n31\tCysp\tCysteine triradical\tC3H4NOS\r\n32\tD\tDeuterium\t[2H]\r\n33\tDde\tDde\tC10H13O2\r\n34\tDnp\t2,4-Dinitrophenyl\tC6H3N2O4\r\n35\tEt\tEthyl\tC2H5\r\n36\tFmoc\tFluorenylmethoxycarbonyl\tC15H11O2\r\n37\tFor\tFormyl\tCHO\r\n38\tGln\tGlutamine diradical\tC5H8N2O2\r\n39\tGlnp\tGlutamine triradical\tC5H7N2O2\r\n40\tGlp\tPyroglutamine\tC5H5NO2\r\n41\tGlu\tGlutamic acid diradical\tC5H7NO3\r\n42\tGlup\tGlutamic acid triradical\tC5H6NO3\r\n43\tGly\tGlycine diradical\tC2H3NO\r\n44\tHci\tHomocitrulline diradical\tC7H13N3O2\r\n45\tHcip\tHomocitrulline triradical\tC7H12N3O2\r\n46\tHis\tHistidine diradical\tC6H7N3O\r\n47\tHisp\tHistidine triradical\tC6H6N3O\r\n48\tHser\tHomoserine diradical\tC4H7NO2\r\n49\tHserp\tHomoserine triradical\tC4H6NO2\r\n50\tHyp\tHydroxyproline diradical\tC5H7NO2\r\n51\tHypp\tHydroxyproline triradical\tC5H6NO2\r\n52\tIle\tIsoleucine diradical\tC6H11NO\r\n53\tIvdde\t1-[4,4-dimethyl-2,6-dioxocyclohexylidene)3-methylb\tC14H21O2\r\n54\tLeu\tLeucine diradical\tC6H11NO\r\n55\tLys\tLysine diradical\tC6H12N2O\r\n56\tLysp\tLysine triradical\tC6H11N2O\r\n57\tMbh\t4,4'-Dimethoxybenzhydryl\tC15H15O2\r\n58\tMe\tMethyl\tCH3\r\n59\tMebzl\t4-Methylbenzyl\tC8H9\r\n60\tMeobzl\t4-Methoxybenzyl1-[4,4-dimethyl-2,6-dioxocyclohexyl\tC8H9O\r\n61\tMet\tMethionine diradical\tC5H9NOS\r\n62\tMmt\t4-Methoxytrityl\tC20H17O\r\n63\tMtc\t2,2,5,7,8-pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n64\tMtr\t4-Methoxy-2,3,6-trimethylbenzenesulphonyl\tC10H13O3S\r\n65\tMts\tMesitylene-2-sulphonyl\tC9H11O2S\r\n66\tMtt\t4-Methyltrityl\tC20H17\r\n67\tNle\tNorleucine diradical\tC6H11NO\r\n68\tNpys\t3-Nitro-2-pyridinesulphenyl\tC5H3N2O2S\r\n69\tNva\tNorvaline diradical\tC5H9NO\r\n70\tOdmab\tOdmab\tC20H26NO3\r\n71\tOrn\tOrnithine diradical\tC5H10N2O\r\n72\tOrnp\tOrnithine triradical\tC5H9N2O\r\n73\tPbf\t2,2,4,6,7-pentamethyldihydrobenzofurane-5-sulfonyl\tC13H17O3S\r\n74\tPen\tPenicillamine diradical\tC5H9NOS\r\n75\tPenp\tPenicillamine triradical\tC5H8NOS\r\n76\tPh\tPhenyl\tC6H5\r\n77\tPhe\tPhenylalanine diradical\tC9H9NO\r\n78\tPhepcl\t4-Chlorophenylalanine diradical\tC9H8ClNO\r\n79\tPhg\tPhenylglycine\tC8H7NO\r\n80\tPmc\t2,2,5,7,8-Pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n81\tPro\tProline diradical\tC5H7NO\r\n82\tPyr\tPyroglutamine\tC5H5NO2\r\n83\tSar\tSarcosine diradical\tC3H5NO\r\n84\tSer\tSerine diradical\tC3H5NO2\r\n85\tSerp\tSerine triradical\tC3H4NO2\r\n86\tSta\tStatine diradical\tC8H15NO2\r\n87\tStap\tStatine triradical\tC8H14NO2\r\n88\tTacm\tTrimethylacetamidomethyl\tC6H12NO\r\n89\tTbdms\tt-Butyldimethylsilyl\tC6H15Si\r\n90\tTbu\tt-Butyl\tC4H9\r\n91\tTbuo\tt-Butoxy\tC4H9O\r\n92\tTbuthio\tt-Butylthio\tC4H9S\r\n93\tTfa\tTrifluoroacetyl\tC2F3O\r\n94\tThi\tbeta-(2-thenyl)alanine\tC7H7NOS\r\n95\tThr\tThreonine diradical\tC4H7NO2\r\n96\tThrp\tThreonine triradical\tC4H6NO2\r\n97\tTips\tTriisopropylsilyl\tC9H21Si\r\n98\tTms\tTrimethylsilyl\tC3H9Si\r\n99\tTos\tTosyl\tC7H7O2S\r\n100\tTrp\tTryptophan diradical\tC11H10N2O\r\n101\tTrpp\tTryptophan triradical\tC11H9N2O\r\n102\tTrt\tTrityl\tC19H15\r\n103\tTyr\tTyrosine diradical\tC9H9NO2\r\n104\tTyrp\tTyrosine triradical\tC9H8NO2\r\n105\tVal\tValine\tC5H9NO\r\n106\tValoh\tbeta-Hydroxyvaline diradical\tC5H9NO2\r\n107\tValohp\tbeta-Hydroxyvaline triradical\tC5H8NO2\r\n108\tXan\tXanthyl\tC13H9O\r\n109\tZ\tBenzyloxycarbonyl\tC8H7O2\r\n110\tT\tTritium\t[3H]", xx);for (g = 0; g < l.length; g++) {
                o = wj(l[g], '\t');try {
                    nn(fv, o[1], new av(o[1], o[2], o[3], ev, fv));
                } catch (a) {
                    a = Wg(a);if (we(a, 4)) {
                        Sj();
                    } else throw Xg(a);
                }
            }
        }
        var mw = 'object',
            nw = 'anonymous',
            ow = 'fnStack',
            pw = { 3: 1 },
            qw = 'Unknown',
            rw = 'boolean',
            sw = 'number',
            tw = 'string',
            uw = 2147483647,
            vw = '__java$exception',
            ww = 'For input string: "',
            xw = 'null',
            yw = -2147483648,
            zw = '__noinit__',
            Aw = { 3: 1, 8: 1, 9: 1 },
            Bw = 'true',
            Cw = 65536,
            Dw = 65535,
            Ew = 10000,
            Fw = ', length: ',
            Gw = 'fromIndex: ',
            Hw = ', toIndex: ',
            Iw = 4194303,
            Jw = 1048575,
            Kw = 524288,
            Lw = 4194304,
            Mw = 17592186044416,
            Nw = 1000000000,
            Ow = -17592186044416,
            Pw = 'CSS1Compat',
            Qw = { 32: 1, 3: 1 },
            Rw = 100000,
            Sw = 1000000,
            Tw = 10000000000,
            Uw = 0.3010299956639812,
            Vw = 4294967295,
            Ww = 4294967296,
            Xw = 1073741824,
            Yw = { l: 0, m: 0, h: 524288 },
            Zw = { 14: 1, 39: 1 },
            $w = '_gwt_modCount',
            _w = { 38: 1 },
            ax = { 41: 1, 31: 1 },
            bx = { 3: 1, 63: 1 },
            cx = { 3: 1, 56: 1 },
            dx = 'delete',
            ex = { 3: 1, 14: 1, 34: 1, 30: 1 },
            fx = 'Error: minCount>maxCount',
            gx = -Infinity,
            hx = 4.9E-324,
            ix = '\r\n',
            jx = 'monoisotopicMass',
            kx = 'percentage',
            lx = ' - symbol: ',
            mx = ' - mass: ',
            nx = ' - percentage: ',
            ox = 'Cannot calculate unsaturation: this is a range formula',
            px = 'The unsaturation is not clearly defined',
            qx = 'Cannot calculate mass: this is a range formula',
            rx = 'The mass is not clearly defined',
            sx = 'Syntax error: bad fraction syntax: ',
            tx = 'Cannot calculate exact mass of a range formula',
            ux = "Syntax error: the formula starts with ')': ",
            vx = 'Syntax error: bad isotope syntax',
            wx = 'mf',
            xx = '[\r\n]+',
            yx = 'No isotopic distribution data',
            zx = 5.4857990946E-4,
            Ax = 'error',
            Bx = 'groups',
            Cx = 'referenceVersion',
            Dx = 'options is null',
            Ex = 'isotopomers',
            Fx = 'typedResult',
            Gx = 'fwhm',
            Hx = 'threshold',
            Ix = 'gaussianWidth',
            Jx = 'defaultUnsaturationContribution',
            Kx = 'joiningAlgorithm',
            Lx = 'type',
            Mx = 'value',
            Nx = 'charge',
            Ox = 'unsaturation',
            Px = 'jcamp',
            Qx = 'jcampLink',
            Rx = 'jcampBaseURL',
            Sx = 'minUnsaturation',
            Tx = 'maxUnsaturation',
            Ux = 'integerUnsaturation',
            Vx = 'useUnsaturation',
            Wx = 'numberOfResultsOnly',
            Xx = 'mfRange',
            Yx = 'locale',
            Zx = 'default',
            $x = 'user.agent';var _,
            Ah,
            vh,
            Vg = -1;Bh();Ch(1, null, {}, eb);_.n = function fb(a) {
            return this === a;
        };_.o = function hb() {
            return this._;
        };_.p = function jb() {
            return st(this);
        };_.q = function lb() {
            return fi(ib(this)) + '@' + (kb(this) >>> 0).toString(16);
        };_.equals = function (a) {
            return this.n(a);
        };_.hashCode = function () {
            return this.p();
        };_.toString = function () {
            return this.q();
        };var fc;Ch(134, 1, {});Ch(96, 134, {}, mc);
        _.u = function nc(a) {
            var b = {},
                j;var c = [];a[ow] = c;var d = arguments.callee.caller;while (d) {
                var e = (gc(), d.name || (d.name = jc(d.toString())));c.push(e);var f = ':' + e;var g = b[f];if (g) {
                    var h, i;for (h = 0, i = g.length; h < i; h++) {
                        if (g[h] === d) {
                            return;
                        }
                    }
                }(g || (b[f] = [])).push(d);d = d.caller;
            }
        };_.v = function oc(a) {
            var b, c, d, e;d = (gc(), a && a[ow] ? a[ow] : []);c = d.length;e = Ed(tf, pw, 33, c, 0, 1);for (b = 0; b < c; b++) {
                e[b] = new hj(d[b], null, -1);
            }return e;
        };Ch(135, 134, {});_.u = function qc(a) {};_.w = function rc(a, b, c, d) {
            return new hj(b, a + '@' + d, c < 0 ? -1 : c);
        };_.v = function sc(a) {
            var b, c, d, e, f, g, h;e = (gc(), h = a.backingJsObject, h && h.stack ? h.stack.split('\n') : []);f = Ed(tf, pw, 33, 0, 0, 1);b = 0;d = e.length;if (d == 0) {
                return f;
            }g = pc(this, e[0]);oj(g.d, nw) || (f[b++] = g);for (c = 1; c < d; c++) {
                f[b++] = pc(this, e[c]);
            }return f;
        };Ch(97, 135, {}, tc);_.w = function uc(a, b, c, d) {
            return new hj(b, a, -1);
        };var qe, re, se;qe = { 3: 1, 90: 1, 14: 1 };var Sh;Ch(69, 1, {}, gi);_.D = function hi(a) {
            var b;b = new gi();b.e = 4;a > 1 ? b.c = ni(this, a - 1) : b.c = this;return b;
        };_.F = function mi() {
            ei(this);return this.b;
        };_.G = function oi() {
            return fi(this);
        };_.H = function qi() {
            ei(this);return this.i;
        };_.I = function si() {
            return (this.e & 4) != 0;
        };_.J = function ti() {
            return (this.e & 1) != 0;
        };_.q = function wi() {
            return ((this.e & 2) != 0 ? 'interface ' : (this.e & 1) != 0 ? '' : 'class ') + (ei(this), this.k);
        };_.e = 0;_.g = 0;var di = 1;Ch(49, 1, { 3: 1, 49: 1 });var yi;re = { 3: 1, 14: 1, 72: 1, 49: 1 };Ch(9, 1, { 3: 1, 9: 1 });_.r = function sb(a) {
            return new $wnd.Error(a);
        };_.s = function ub() {
            return this.f;
        };_.t = function vb() {
            var a, b, c;c = this.f == null ? null : this.f.replace(new $wnd.RegExp('\n', 'g'), ' ');b = (a = fi(this._), c == null ? a : a + ': ' + c);qb(this, tb(this.r(b)));hc(this);
        };_.q = function xb() {
            return rb(this, this.s());
        };_.backingJsObject = zw;_.j = true;Ch(8, 9, Aw);Ch(22, 49, { 3: 1, 14: 1, 22: 1, 49: 1 }, Pi);_.C = function Ri(a) {
            return Qi(this.a, a.a);
        };_.n = function Si(a) {
            return we(a, 22) && a.a == this.a;
        };_.p = function Ti() {
            return this.a;
        };_.q = function Wi() {
            return '' + this.a;
        };_.a = 0;Ch(11, 8, Aw, Ab);Ch(46, 11, Aw, Bb);Ch(45, 46, Aw, cj, dj, ej);_.r = function fj(a) {
            return new $wnd.TypeError(a);
        };se = { 3: 1, 70: 1, 14: 1, 2: 1 };var rt = 0;var tt,
            ut = 0,
            vt;var rf = ji(1);var Je = ji(0);var Qe = ji(134);var Ne = ji(96);var Pe = ji(135);var Oe = ji(97);var df = ji(90);var ef = ji(69);var qf = ji(49);var ff = ji(72);var yf = ji(9);var hf = ji(8);var mf = ji(22);var sf = ji(11);var nf = ji(46);var of = ji(45);var xf = ji(2);Ch(98, 46, Aw);var Le = ji(98);Ch(52, 98, { 52: 1, 3: 1, 8: 1, 9: 1 }, Fb);_.s = function Gb() {
            Eb(this);return this.c;
        };var Cb;var Ie = ji(52);var Kb;Ch(118, 1, {});var Ke = ji(118);var Ob = 0,
            Pb = 0,
            Qb = -1;Ch(111, 118, {}, cc);var $b;var Me = ji(111);Ch(136, 1, {});_.B = function vc() {
            return null;
        };var Ye = ji(136);Ch(68, 136, { 68: 1 }, zc, Ac);_.n = function Bc(a) {
            if (!we(a, 68)) {
                return false;
            }return Hb(this.a, a.a);
        };_.A = function Cc() {
            return Fc;
        };_.p = function Dc() {
            return Ib(this.a);
        };_.q = function Ec() {
            var a, b, c;c = new Oj('[');for (b = 0, a = this.a.length; b < a; b++) {
                b > 0 && (c.a += ',', c);Jj(c, wc(this, b));
            }c.a += ']';return c.a;
        };var Re = ji(68);Ch(87, 136, {}, Jc);_.A = function Kc() {
            return Mc;
        };_.q = function Lc() {
            return Th(), '' + this.a;
        };_.a = false;var Gc, Hc;var Se = ji(87);Ch(113, 11, Aw, Nc);var Te = ji(113);Ch(110, 136, {}, Qc);_.A = function Rc() {
            return Tc;
        };_.q = function Sc() {
            return xw;
        };var Oc;var Ue = ji(110);Ch(6, 136, { 6: 1 }, Uc);_.n = function Vc(a) {
            if (!we(a, 6)) {
                return false;
            }return this.a == a.a;
        };_.A = function Wc() {
            return Zc;
        };_.p = function Xc() {
            return De(nt(this.a));
        };_.q = function Yc() {
            return this.a + '';
        };_.a = 0;var Ve = ji(6);Ch(59, 136, { 59: 1 }, dd, ed);_.n = function fd(a) {
            if (!we(a, 59)) {
                return false;
            }return Hb(this.a, a.a);
        };_.A = function gd() {
            return kd;
        };_.p = function hd() {
            return Ib(this.a);
        };_.q = function jd() {
            var a, b, c, d, e, f;f = new Oj('{');a = true;e = $c(this, Ed(xf, pw, 2, 0, 6, 1));for (c = 0, d = e.length; c < d; ++c) {
                b = e[c];a ? a = false : (f.a += ', ', f);Kj(f, Mb(b));f.a += ':';Jj(f, _c(this, b));
            }f.a += '}';return f.a;
        };var We = ji(59);var ld;Ch(10, 136, { 10: 1 }, td);_.n = function ud(a) {
            if (!we(a, 10)) {
                return false;
            }return oj(this.a, a.a);
        };_.A = function vd() {
            return zd;
        };_.p = function wd() {
            return yt(this.a);
        };_.B = function xd() {
            return this;
        };_.q = function yd() {
            return Mb(this.a);
        };var Xe = ji(10);var Jd;var le, me, ne, oe;Ch(120, 1, {});var $e = ji(120);Ch(119, 120, {});var Ze = ji(119);Ch(71, 119, {}, Kh);var _e = ji(71);Ch(48, 1, { 70: 1 });_.q = function Mh() {
            return this.a;
        };var af = ji(48);Ch(44, 11, Aw, Nh);var bf = ji(44);Ch(37, 11, Aw, Oh, Ph);var lf = ji(37);Ch(88, 37, Aw, Qh, Rh);var cf = ji(88);Ch(34, 1, { 3: 1, 14: 1, 34: 1 });_.C = function Gi(a) {
            return this.b - a.b;
        };_.compareTo = function Fi(a) {
            return this.b - a.b;
        };_.equals = function Hi(a) {
            return this === a;
        };_.n = function (a) {
            return this.equals(a);
        };_.hashCode = function Ii() {
            return st(this);
        };_.p = function () {
            return this.hashCode();
        };_.name = function Ji() {
            return this.a != null ? this.a : '' + this.b;
        };_.ordinal = function Ki() {
            return this.b;
        };_.toString = function Li() {
            return this.a != null ? this.a : '' + this.b;
        };_.q = function () {
            return this.toString();
        };_.b = 0;var gf = ji(34);Ch(50, 11, Aw, Mi);var jf = ji(50);Ch(99, 11, Aw, Ni);var kf = ji(99);var Yi;Ch(21, 50, { 3: 1, 8: 1, 21: 1, 9: 1 }, gj);var pf = ji(21);Ch(33, 1, { 3: 1, 33: 1 }, hj);_.n = function ij(a) {
            var b;if (we(a, 33)) {
                b = a;return this.c == b.c && dr(this.d, b.d) && dr(this.a, b.a) && dr(this.b, b.b);
            }return false;
        };_.p = function jj() {
            return fq(Hd(Ad(rf, 1), pw, 1, 5, [Xi(this.c), this.a, this.d, this.b]));
        };_.q = function kj() {
            return this.a + '.' + this.d + '(' + (this.b != null ? this.b : 'Unknown Source') + (this.c >= 0 ? ':' + this.c : '') + ')';
        };_.c = 0;var tf = ji(33);Ch(40, 48, { 70: 1 }, Fj, Gj);var uf = ji(40);Ch(28, 48, { 70: 1 }, Mj, Nj, Oj);var vf = ji(28);Ch(100, 37, Aw, Pj);var wf = ji(100);Ch(160, 1, {});var Qj, Rj;Ch(27, 11, Aw, Uj, Vj);var zf = ji(27);Ch(17, 49, { 3: 1, 14: 1, 49: 1, 17: 1 }, jk, kk, lk, mk);_.C = function pk(a) {
            return dk(this, a);
        };_.n = function sk(a) {
            var b;if (this === a) {
                return true;
            }if (we(a, 17)) {
                b = a;return this.e == b.e && dk(this, b) == 0;
            }return false;
        };_.p = function tk() {
            var a;if (this.b != 0) {
                return this.b;
            }if (this.a < 54) {
                a = dh(this.f);this.b = sh(Zg(a, -1));this.b = 33 * this.b + sh(Zg(nh(a, 32), -1));this.b = 17 * this.b + De(this.e);return this.b;
            }this.b = 17 * Kk(this.c) + De(this.e);return this.b;
        };_.q = function vk() {
            return ik(this);
        };_.a = 0;_.b = 0;_.d = 0;_.e = 0;_.f = 0;var Wj, Xj, Yj, Zj, $j, _j, ak, bk;var Af = ji(17);Ch(5, 49, { 3: 1, 14: 1, 49: 1, 5: 1 }, Rk, Sk, Tk, Uk, Vk, Wk);_.C = function Yk(a) {
            return Ek(this, a);
        };_.n = function Zk(a) {
            return Hk(this, a);
        };_.p = function _k() {
            return Kk(this);
        };_.q = function bl() {
            return pl(this, 0);
        };_.b = -2;_.c = 0;_.d = 0;_.e = 0;var xk, yk, zk, Ak, Bk, Ck;var Bf = ji(5);var kl, ll;var Dl, El, Fl;Ch(26, 34, { 3: 1, 14: 1, 34: 1, 26: 1 }, $l);var Rl, Sl, Tl, Ul, Vl, Wl, Xl, Yl;var Cf = ki(26, _l);Ch(39, 1, Zw);_.C = function am(a) {
            return nj(this.a, a.a);
        };_.n = function bm(a) {
            var b;if (a === this) {
                return true;
            }if (!we(a, 39)) {
                return false;
            }b = a;return oj(this.a, b.a);
        };_.p = function cm() {
            return yt(this.a);
        };_.q = function dm() {
            return this.a;
        };var Df = ji(39);Ch(140, 1, {});var Ff = ji(140);Ch(141, 140, {});var Gf = ji(141);Ch(114, 141, {}, km);_.b = 0;_.c = 0;var fm;var Ef = ji(114);Ch(132, 1, {});_.add = function ym(a) {
            throw Xg(new Vj('Add not supported on this collection'));
        };_.addAll = function zm(a) {
            return sm(this, a);
        };_.clear = function Am() {
            var a;for (a = this.K(); a.O();) {
                a.P();a.Q();
            }
        };_.contains = function Bm(a) {
            return tm(this, a, false);
        };_.containsAll = function Cm(a) {
            return um(this, a);
        };_.isEmpty = function Dm() {
            return this.size() == 0;
        };_.remove = function Em(a) {
            return tm(this, a, true);
        };_.removeAll = function Fm(a) {
            return vm(this, a);
        };_.retainAll = function Gm(a) {
            var b, c, d;ht(a);b = false;for (c = this.K(); c.O();) {
                d = c.P();if (!a.contains(d)) {
                    c.Q();b = true;
                }
            }return b;
        };_.toArray = function Hm() {
            return this.L(Ed(rf, pw, 1, this.size(), 5, 1));
        };_.L = function Im(a) {
            return wm(this, a);
        };_.q = function Jm() {
            return xm(this);
        };var Hf = ji(132);Ch(131, 1, { 56: 1 });_.getOrDefault = function Vm(a, b) {
            var c;return c = this.get(a), c == null && !this.containsKey(a) ? b : c;
        };_.putIfAbsent = function _m(a, b) {
            var c;return c = this.get(a), c != null ? c : this.put(a, b);
        };_.replace = function bn(a, b) {
            return this.containsKey(a) ? this.put(a, b) : null;
        };_.clear = function Nm() {
            this.N().clear();
        };_.M = function Om(a) {
            return Km(this, a);
        };_.containsKey = function Pm(a) {
            return !!Lm(this, a, false);
        };_.containsValue = function Qm(a) {
            var b, c, d;for (c = this.N().K(); c.O();) {
                b = c.P();d = b.T();if (Ce(a) === Ce(d) || a != null && gb(a, d)) {
                    return true;
                }
            }return false;
        };_.n = function Rm(a) {
            var b, c, d;if (a === this) {
                return true;
            }if (!we(a, 56)) {
                return false;
            }d = a;if (this.size() != d.size()) {
                return false;
            }for (c = d.N().K(); c.O();) {
                b = c.P();if (!this.M(b)) {
                    return false;
                }
            }return true;
        };_.get = function Sm(a) {
            return Um(Lm(this, a, false));
        };_.p = function Wm() {
            return lq(this.N());
        };_.isEmpty = function Xm() {
            return this.size() == 0;
        };_.keySet = function Ym() {
            return new po(this);
        };_.put = function Zm(a, b) {
            throw Xg(new Vj('Put not supported on this map'));
        };_.putAll = function $m(a) {
            var b, c;ht(a);for (c = a.N().K(); c.O();) {
                b = c.P();this.put(b.S(), b.T());
            }
        };_.remove = function an(a) {
            return Um(Lm(this, a, true));
        };_.size = function cn() {
            return this.N().size();
        };_.q = function dn() {
            var a, b, c;c = new Hr('{', '}');for (b = this.N().K(); b.O();) {
                a = b.P();Gr(c, Mm(this, a.S()) + '=' + Mm(this, a.T()));
            }return !c.a ? c.c : c.e.length == 0 ? c.a.a : c.a.a + ('' + c.e);
        };_.values = function en() {
            return new zo(this);
        };var Xf = ji(131);Ch(91, 131, { 56: 1 });_.clear = function rn() {
            pn(this);
        };_.containsKey = function sn(a) {
            return fn(this, a);
        };_.containsValue = function tn(a) {
            return gn(this, a);
        };_.N = function un() {
            return new Dn(this);
        };_.get = function vn(a) {
            return jn(this, a);
        };_.put = function wn(a, b) {
            return mn(this, a, b);
        };_.remove = function xn(a) {
            return on(this, a);
        };_.size = function yn() {
            return qn(this);
        };var Kf = ji(91);Ch(133, 132, _w);_.n = function zn(a) {
            var b;if (a === this) {
                return true;
            }if (!we(a, 38)) {
                return false;
            }b = a;if (b.size() != this.size()) {
                return false;
            }return um(this, b);
        };_.p = function An() {
            return lq(this);
        };_.removeAll = function Bn(a) {
            var b, c, d, e;ht(a);e = this.size();if (e < a.size()) {
                for (b = this.K(); b.O();) {
                    c = b.P();a.contains(c) && b.Q();
                }
            } else {
                for (d = a.K(); d.O();) {
                    c = d.P();this.remove(c);
                }
            }return e != this.size();
        };var ag = ji(133);Ch(92, 133, _w, Dn);_.clear = function En() {
            pn(this.a);
        };_.contains = function Fn(a) {
            return Cn(this, a);
        };_.K = function Gn() {
            return new Kn(this.a);
        };_.remove = function Hn(a) {
            var b;if (Cn(this, a)) {
                b = a.S();on(this.a, b);return true;
            }return false;
        };_.size = function In() {
            return qn(this.a);
        };var Jf = ji(92);Ch(93, 1, {}, Kn);_.P = function Mn() {
            var a;return sq(this.e, this), ft(this.b), this.c = this.a, a = this.a.P(), this.b = Jn(this), a;
        };_.O = function Ln() {
            return this.b;
        };_.Q = function Nn() {
            var a;lt(!!this.c);sq(this.e, this);this.c.Q();this.c = null;this.b = Jn(this);a = this.e[$w];this[$w] = a;
        };_.b = false;var If = ji(93);Ch(139, 132, { 63: 1 });_.addAtIndex = function On(a, b) {
            throw Xg(new Vj('Add not supported on this list'));
        };_.add = function Pn(a) {
            this.addAtIndex(this.size(), a);return true;
        };_.addAllAtIndex = function Qn(a, b) {
            var c, d, e;ht(b);c = false;for (e = b.K(); e.O();) {
                d = e.P();this.addAtIndex(a++, d);c = true;
            }return c;
        };_.clear = function Rn() {
            this.R(0, this.size());
        };_.n = function Sn(a) {
            var b, c, d, e, f;if (a === this) {
                return true;
            }if (!we(a, 63)) {
                return false;
            }f = a;if (this.size() != f.size()) {
                return false;
            }e = f.K();for (c = this.K(); c.O();) {
                b = c.P();d = e.P();if (!(Ce(b) === Ce(d) || b != null && gb(b, d))) {
                    return false;
                }
            }return true;
        };_.p = function Tn() {
            return mq(this);
        };_.indexOf = function Un(a) {
            var b, c;for (b = 0, c = this.size(); b < c; ++b) {
                if (dr(a, this.getAtIndex(b))) {
                    return b;
                }
            }return -1;
        };_.K = function Vn() {
            return new co(this);
        };_.lastIndexOf = function Wn(a) {
            var b;for (b = this.size() - 1; b > -1; --b) {
                if (dr(a, this.getAtIndex(b))) {
                    return b;
                }
            }return -1;
        };_.removeAtIndex = function Xn(a) {
            throw Xg(new Vj('Remove not supported on this list'));
        };_.R = function Yn(a, b) {
            var c, d;d = new ho(this, a);for (c = a; c < b; ++c) {
                ft(d.a < d.c.size());d.c.getAtIndex(d.b = d.a++);bo(d);
            }
        };_.setAtIndex = function Zn(a, b) {
            throw Xg(new Vj('Set not supported on this list'));
        };_.subList = function $n(a, b) {
            return new jo(this, a, b);
        };var Of = ji(139);Ch(81, 1, {}, co);_.O = function eo() {
            return _n(this);
        };_.P = function fo() {
            return ao(this);
        };_.Q = function go() {
            bo(this);
        };_.a = 0;_.b = -1;var Lf = ji(81);Ch(82, 81, {}, ho);_.Q = function io() {
            bo(this);
        };var Mf = ji(82);Ch(83, 139, { 63: 1 }, jo);_.addAtIndex = function ko(a, b) {
            jt(a, this.b);this.c.addAtIndex(this.a + a, b);++this.b;
        };_.getAtIndex = function lo(a) {
            gt(a, this.b);return this.c.getAtIndex(this.a + a);
        };_.removeAtIndex = function mo(a) {
            var b;gt(a, this.b);b = this.c.removeAtIndex(this.a + a);--this.b;return b;
        };_.setAtIndex = function no(a, b) {
            gt(a, this.b);return this.c.setAtIndex(this.a + a, b);
        };_.size = function oo() {
            return this.b;
        };_.a = 0;_.b = 0;var Nf = ji(83);Ch(58, 133, _w, po);_.clear = function qo() {
            this.a.clear();
        };_.contains = function ro(a) {
            return this.a.containsKey(a);
        };_.K = function so() {
            var a;return a = this.a.N().K(), new vo(a);
        };_.remove = function to(a) {
            if (this.a.containsKey(a)) {
                this.a.remove(a);return true;
            }return false;
        };_.size = function uo() {
            return this.a.size();
        };var Qf = ji(58);Ch(73, 1, {}, vo);_.O = function wo() {
            return this.a.O();
        };_.P = function xo() {
            var a;return a = this.a.P(), a.S();
        };_.Q = function yo() {
            this.a.Q();
        };var Pf = ji(73);Ch(23, 132, {}, zo);_.clear = function Ao() {
            this.a.clear();
        };_.contains = function Bo(a) {
            return this.a.containsValue(a);
        };_.K = function Co() {
            var a;return a = this.a.N().K(), new Eo(a);
        };_.size = function Do() {
            return this.a.size();
        };var Sf = ji(23);Ch(24, 1, {}, Eo);_.O = function Fo() {
            return this.a.O();
        };_.P = function Go() {
            var a;return a = this.a.P(), a.T();
        };_.Q = function Ho() {
            this.a.Q();
        };var Rf = ji(24);Ch(41, 1, ax);_.n = function Ko(a) {
            var b;if (!we(a, 31)) {
                return false;
            }b = a;return dr(this.c, b.S()) && dr(this.d, b.T());
        };_.S = function Lo() {
            return this.c;
        };_.T = function Mo() {
            return this.d;
        };_.p = function No() {
            return er(this.c) ^ er(this.d);
        };_.U = function Oo(a) {
            return Io(this, a);
        };_.q = function Po() {
            return this.c + '=' + this.d;
        };var Tf = ji(41);Ch(51, 41, { 41: 1, 51: 1, 31: 1 }, Qo);var Uf = ji(51);Ch(94, 41, ax, Ro);_.U = function So(a) {
            throw Xg(new Uj());
        };var Vf = ji(94);Ch(137, 1, { 31: 1 });_.n = function To(a) {
            var b;if (!we(a, 31)) {
                return false;
            }b = a;return dr(this.b.value[0], b.S()) && dr(Zq(this), b.T());
        };_.p = function Uo() {
            return er(this.b.value[0]) ^ er(Zq(this));
        };_.q = function Vo() {
            return this.b.value[0] + '=' + Zq(this);
        };var Wf = ji(137);Ch(138, 131, { 56: 1 });_.M = function $o(a) {
            return Wo(this, a);
        };_.containsKey = function _o(a) {
            return Xo(this, a);
        };_.N = function ap() {
            return new ep(this);
        };_.get = function bp(a) {
            return Um(this.W(a));
        };_.keySet = function dp() {
            return new jp(this);
        };var _f = ji(138);Ch(80, 133, _w, ep);_.contains = function fp(a) {
            return we(a, 31) && Wo(this.b, a);
        };_.K = function gp() {
            return this.b.V();
        };_.remove = function hp(a) {
            var b;if (we(a, 31)) {
                b = a;return this.b.X(b);
            }return false;
        };_.size = function ip() {
            return this.b.size();
        };var Yf = ji(80);Ch(12, 133, _w, jp);_.clear = function kp() {
            this.a.clear();
        };_.contains = function lp(a) {
            return Xo(this.a, a);
        };_.K = function mp() {
            var a;return a = this.a.N().b.V(), new pp(a);
        };_.remove = function np(a) {
            if (Xo(this.a, a)) {
                this.a.remove(a);return true;
            }return false;
        };_.size = function op() {
            return this.a.size();
        };var $f = ji(12);Ch(13, 1, {}, pp);_.O = function qp() {
            return _n(this.a.a);
        };_.P = function rp() {
            var a;return a = is(this.a), a.S();
        };_.Q = function sp() {
            js(this.a);
        };var Zf = ji(13);Ch(67, 139, bx, Ip, Jp);_.addAtIndex = function Kp(a, b) {
            up(this, a, b);
        };_.add = function Lp(a) {
            return vp(this, a);
        };_.addAllAtIndex = function Mp(a, b) {
            return wp(this, a, b);
        };_.addAll = function Np(a) {
            return xp(this, a);
        };_.clear = function Op() {
            this.a = Ed(rf, pw, 1, 0, 5, 1);
        };_.contains = function Pp(a) {
            return zp(this, a, 0) != -1;
        };_.getAtIndex = function Qp(a) {
            return yp(this, a);
        };_.indexOf = function Rp(a) {
            return zp(this, a, 0);
        };_.isEmpty = function Sp() {
            return this.a.length == 0;
        };_.K = function Tp() {
            return new bq(this);
        };_.lastIndexOf = function Up(a) {
            return Ap(this, a);
        };_.removeAtIndex = function Vp(a) {
            return Cp(this, a);
        };_.remove = function Wp(a) {
            var b;b = zp(this, a, 0);if (b == -1) {
                return false;
            }Cp(this, b);return true;
        };_.R = function Xp(a, b) {
            Dp(this, a, b);
        };_.setAtIndex = function Yp(a, b) {
            return Ep(this, a, b);
        };_.size = function Zp() {
            return this.a.length;
        };_.toArray = function $p() {
            return Gp(this);
        };_.L = function _p(a) {
            return Hp(this, a);
        };var cg = ji(67);Ch(19, 1, {}, bq);_.O = function cq() {
            return this.a < this.c.a.length;
        };_.P = function dq() {
            return aq(this);
        };_.Q = function eq() {
            lt(this.b != -1);Cp(this.c, this.a = this.b);this.b = -1;
        };_.a = 0;_.b = -1;var bg = ji(19);var nq;Ch(112, 1, pw, pq);_.Y = function qq(a, b) {
            return ht(a), Wh(a, (ht(b), b));
        };_.n = function rq(a) {
            return this === a;
        };var dg = ji(112);Ch(117, 11, Aw, uq);var eg = ji(117);Ch(116, 11, Aw, vq);var fg = ji(116);Ch(25, 91, cx, xq);var gg = ji(25);Ch(109, 1, {}, Dq);_.K = function Eq() {
            return new Fq(this);
        };_.c = 0;var ig = ji(109);Ch(86, 1, {}, Fq);_.P = function Hq() {
            return this.d = this.a[this.c++], this.d;
        };_.O = function Gq() {
            var a;if (this.c < this.a.length) {
                return true;
            }a = this.b.next();if (!a.done) {
                this.a = a.value[1];this.c = 0;return true;
            }return false;
        };_.Q = function Iq() {
            Cq(this.e, this.d.S());this.c != 0 && --this.c;
        };_.c = 0;_.d = null;var hg = ji(86);var Jq;Ch(101, 1, {}, Tq);_.K = function Uq() {
            return new Vq(this);
        };_.c = 0;_.d = 0;var lg = ji(101);Ch(77, 1, {}, Vq);_.P = function Xq() {
            return this.c = this.a, this.a = this.b.next(), new $q(this.d, this.c, this.d.d);
        };_.O = function Wq() {
            return !this.a.done;
        };_.Q = function Yq() {
            Sq(this.d, this.c.value[0]);
        };var jg = ji(77);Ch(102, 137, { 31: 1 }, $q);_.S = function _q() {
            return this.b.value[0];
        };_.T = function ar() {
            return Zq(this);
        };_.U = function br(a) {
            return Rq(this.a, this.b.value[0], a);
        };_.c = 0;var kg = ji(102);Ch(89, 11, Aw, cr);var mg = ji(89);Ch(84, 139, bx, gr);_.addAtIndex = function hr(a, b) {
            lr(a, this.a.a.length + 1);up(this.a, a, b);
        };_.add = function ir(a) {
            return fr(this, a);
        };_.addAllAtIndex = function jr(a, b) {
            lr(a, this.a.a.length + 1);return wp(this.a, a, b);
        };_.addAll = function kr(a) {
            return xp(this.a, a);
        };_.clear = function mr() {
            this.a.a = Ed(rf, pw, 1, 0, 5, 1);
        };_.contains = function nr(a) {
            return zp(this.a, a, 0) != -1;
        };_.containsAll = function or(a) {
            return um(this.a, a);
        };_.getAtIndex = function pr(a) {
            return lr(a, this.a.a.length), yp(this.a, a);
        };_.indexOf = function qr(a) {
            return zp(this.a, a, 0);
        };_.isEmpty = function rr() {
            return this.a.a.length == 0;
        };_.K = function sr() {
            return new bq(this.a);
        };_.lastIndexOf = function tr(a) {
            return Ap(this.a, a);
        };_.removeAtIndex = function ur(a) {
            return lr(a, this.a.a.length), Cp(this.a, a);
        };_.removeAll = function vr(a) {
            return vm(this.a, a);
        };_.R = function wr(a, b) {
            Dp(this.a, a, b);
        };_.setAtIndex = function xr(a, b) {
            lr(a, this.a.a.length);return Ep(this.a, a, b);
        };_.size = function yr() {
            return this.a.a.length;
        };_.subList = function zr(a, b) {
            return new jo(this.a, a, b);
        };_.toArray = function Ar() {
            return Gp(this.a);
        };_.L = function Br(a) {
            return Hp(this.a, a);
        };_.q = function Cr() {
            return xm(this.a);
        };var zg = ji(84);Ch(115, 84, bx, Fr);var ng = ji(115);Ch(74, 1, {}, Hr);_.q = function Ir() {
            return !this.a ? this.c : this.e.length == 0 ? this.a.a : this.a.a + ('' + this.e);
        };var og = ji(74);Ch(62, 138, cx, $r, _r);_.clear = function as() {
            Jr(this);
        };_.V = function bs() {
            return new ks(this);
        };_.N = function cs() {
            return new ps(this);
        };_.W = function ds(a) {
            return Kr(this, a);
        };_.put = function es(a, b) {
            return Tr(this, a, b);
        };_.remove = function fs(a) {
            return Ur(this, a);
        };_.X = function gs(a) {
            return Vr(this, a);
        };_.size = function hs() {
            return this.d;
        };_.d = 0;var xg = ji(62);Ch(79, 1, {}, ks);_.P = function ns() {
            return is(this);
        };_.O = function ms() {
            return _n(this.a);
        };_.Q = function os() {
            js(this);
        };var pg = ji(79);Ch(15, 80, _w, ps);_.clear = function qs() {
            Jr(this.a);
        };var qg = ji(15);Ch(43, 51, { 41: 1, 51: 1, 31: 1, 43: 1 }, rs);_.b = false;var rg = ji(43);Ch(66, 1, {}, ss);_.q = function ts() {
            return 'State: mv=' + this.c + ' value=' + this.d + ' done=' + this.a + ' found=' + this.b;
        };_.a = false;_.b = false;_.c = false;var sg = ji(66);Ch(30, 34, ex, zs);_.Z = function As() {
            return false;
        };_.$ = function Bs() {
            return false;
        };var us, vs, ws, xs;var wg = ki(30, Cs);Ch(105, 30, ex, Ds);_.$ = function Es() {
            return true;
        };var tg = ki(105, null);Ch(106, 30, ex, Fs);_.Z = function Gs() {
            return true;
        };_.$ = function Hs() {
            return true;
        };var ug = ki(106, null);Ch(107, 30, ex, Is);_.Z = function Js() {
            return true;
        };var vg = ki(107, null);Ch(61, 133, { 3: 1, 38: 1 }, Ls, Ms);_.add = function Ns(a) {
            return Ks(this, a);
        };_.clear = function Os() {
            Jr(this.g);
        };_.contains = function Ps(a) {
            return Xo(this.g, a);
        };_.K = function Qs() {
            var a;return a = new jp(this.g).a.N().b.V(), new pp(a);
        };_.remove = function Rs(a) {
            return Ur(this.g, a) != null;
        };_.size = function Ss() {
            return this.g.d;
        };var yg = ji(61);Ch(75, 39, Zw);var Cg = ji(75);Ch(76, 75, Zw, _s);var Ag = ji(76);Ch(95, 75, Zw, ct);var Bg = ji(95);Ch(35, 1, { 14: 1, 35: 1 }, Gt, Ht, It, Jt);_.C = function Kt(a) {
            if (!we(a, 35)) throw Xg(new Vj('Not comparable: Atoms and ' + fi(ib(a))));return At(this, a);
        };_.n = function Lt(a) {
            return Bt(this, a);
        };_.p = function Mt() {
            var a;a = this.a + this.i;return yt(a);
        };_.q = function Nt() {
            return Ft(this, null);
        };_.a = 0;_.b = 0;_.c = 0;_.d = 0;_.e = 0;_.f = 0;_.g = 0;var Dg = ji(35);Ch(36, 62, cx, bu);_.q = function cu() {
            return $t(this);
        };_.a = Ew;var Fg = ji(36);Ch(108, 1, {}, du);_.n = function fu(a) {
            return this === a;
        };_.Y = function eu(a, b) {
            return -Wh(a.T(), b.T());
        };var Eg = ji(108);Ch(53, 1, { 14: 1, 53: 1 }, lu, mu, nu);_.C = function ou(a) {
            Sj();return mj(this.g, a.g);
        };_.n = function pu(a) {
            var b;if (this === a) return true;if (Gg != ib(a)) return false;b = a;if (oj(this.g, b.g)) return true;return false;
        };_.q = function qu() {
            return ku(this);
        };_.a = 0;_.c = 0;_.d = 0;_.f = 0;var Gg = ji(53);Ch(85, 1, { 14: 1, 85: 1 }, uu);_.C = function vu(a) {
            return Oi(new Pi(this.a.c - this.a.d), Xi(a.a.c - a.a.d));
        };_.q = function wu() {
            return this.a.i + ' - ' + this.a.d + ' to ' + this.a.c + ' - current: ' + this.b;
        };_.b = 0;_.c = 0;_.d = 0;var Hg = ji(85);Ch(54, 1, {}, Iu, Ju);_.q = function Ku() {
            return Hu(this);
        };_.c = false;_.e = false;var Jg = ji(54);Ch(29, 61, { 3: 1, 38: 1, 29: 1 }, Vu, Wu, Xu);_.q = function Yu() {
            return Uu(this);
        };_.a = 0;_.b = '';_.e = false;_.f = 0;var Ig = ji(29);Ch(60, 1, { 60: 1 }, av);var Kg = ji(60);Ch(42, 1, { 14: 1, 42: 1 }, bv);_.C = function cv(a) {
            var b;if (we(a, 42)) {
                b = a;return this.c = b.c;
            } else throw Xg(new Vj('Cannot compare Isotope to ' + a));
        };_.q = function dv() {
            return 'Number: ' + this.c + mx + this.b + nx + this.d + lx + this.a;
        };_.b = 0;_.c = 0;_.d = 0;var Lg = ji(42);var ev, fv;Ch(4, 8, { 3: 1, 8: 1, 9: 1, 4: 1 }, iv);var Mg = ji(4);Ch(103, 1, {}, pv);_.a = 0;_.b = 0;_.e = null;_.f = 0;var Pg = ji(103);Ch(55, 1, {}, yv, zv, Av);_.b = 0;var Og = ji(55);Ch(104, 1, {}, Cv);_.Y = function Dv(a, b) {
            return Bv(this, a, b);
        };_.n = function Ev(a) {
            return this === a;
        };var Ng = ji(104);var Fv;Ch(78, 1, { 78: 1 }, Kv);_.a = 0;_.b = 0;_.c = null;var Qg = ji(78);var Lv;Ch(130, 1, {}, Pv);var Rg = ji(130);Ch(65, 1, { 14: 1, 65: 1 }, bw);_.C = function cw(a) {
            return aw(this, a);
        };_.a = 0;_.c = 0;var Sg = ji(65);Ch(18, 1, {}, ew, fw, gw);var Tg = ji(18);Ch(16, 1, {}, kw);var Ug = ji(16);var Fe = li('C');var He = li('I');var Ee = li('B');var Ge = li('D');_ = Fh('CI.Chemcalc', Pv);_.analyseMF = Rv;_.getInfo = Tv;_.mfFromMonoisotopicMass = Uv;Th();_ = Fh('java.lang.Boolean');_.$isInstance = Uh;_ = Fh('java.lang.CharSequence');_.$isInstance = Xh;_ = Fh('java.lang.Comparable');_.$isInstance = xi;_ = Fh('java.lang.Double');_.$isInstance = Ci;_ = Fh('java.lang.Number');_.$isInstance = zi;_ = Fh('java.lang.String');_.$isInstance = rj;_ = Fh('java.lang.Throwable');_.of = wb;var lw = (Rb(), Ub);var gwtOnLoad = gwtOnLoad = yh;wh(Ih);zh('permProps', [[[Yx, Zx], [$x, 'gecko1_8']], [[Yx, Zx], [$x, 'ie10']], [[Yx, Zx], [$x, 'ie8']], [[Yx, Zx], [$x, 'ie9']], [[Yx, Zx], [$x, 'safari']]]);$sendStats('moduleStartup', 'moduleEvalEnd');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId, __gwtModuleFunction.__computePropValue);$sendStats('moduleStartup', 'end');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);

        // End GWT code

        var toReturn = $wnd["CI"]["Chemcalc"];

        toReturn.version = '3.4.1';

        return toReturn;
    }

    var isBrowser, globalEnv;

    if (typeof self !== 'undefined') {
        // Usual Browser Window or Web Worker
        isBrowser = true;
        globalEnv = self;
    } else if (typeof global !== 'undefined') {
        // Node.js
        isBrowser = false;
        globalEnv = global;
    } else {
        // Other environment (example: CouchDB)
        isBrowser = false;
        globalEnv = root;
    }

    var document = globalEnv.document || {};

    if (!document.compatMode) {
        document.compatMode = 'CSS1Compat';
    }

    var fakeWindow;
    if (isBrowser && !true) {
        fakeWindow = globalEnv;
    } else {
        fakeWindow = {};
        fakeWindow.setTimeout = globalEnv.setTimeout ? globalEnv.setTimeout.bind(globalEnv) : noop;
        fakeWindow.clearTimeout = globalEnv.clearTimeout ? globalEnv.clearTimeout.bind(globalEnv) : noop;
        fakeWindow.setInterval = globalEnv.setInterval ? globalEnv.setInterval.bind(globalEnv) : noop;
        fakeWindow.clearInterval = globalEnv.clearInterval ? globalEnv.clearInterval.bind(globalEnv) : noop;
        // required since GWT 2.8.0
        fakeWindow.Error = globalEnv.Error;
        fakeWindow.Math = globalEnv.Math;
        fakeWindow.RegExp = globalEnv.RegExp;
        fakeWindow.TypeError = globalEnv.TypeError;
    }

    if (!fakeWindow.document) {
        fakeWindow.document = document;
    }

    var exportedApi = getExports(fakeWindow);

    if (true) {
        // NodeJS
        fillExports(exportedApi, exports);
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(function () {
            var exportsObj = {};
            fillExports(exportedApi, exportsObj);
            return exportsObj;
        });
    } else {
        // Global
        var path = ["CI", "Chemcalc"];
        var l = path.length - 1;
        var obj = globalEnv;
        for (var i = 0; i < l; i++) {
            obj = obj[path[i]] || (obj[path[i]] = {});
        }
        obj[path[l]] = {};
        fillExports(exportedApi, obj[path[l]]);
    }

    function fillExports(obj, exports) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            exports[keys[i]] = obj[keys[i]];
        }
    }

    function noop() {}
})(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  ROOT: 0,
  GROUP: 1,
  POSITION: 2,
  SET: 3,
  RANGE: 4,
  REPETITION: 5,
  REFERENCE: 6,
  CHAR: 7
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// SOURCE: https://en.wikipedia.org/wiki/Amino_acid

module.exports = [
// Standard amino acids
{
    name: "Alanine",
    aa3: "Ala",
    aa1: "A",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.33,
    pKaN: 9.71
}, {
    name: "Arginine",
    aa3: "Arg",
    aa1: "R",
    sc: {
        type: "positive",
        pKa: 12.10
    },
    pKaC: 2.03,
    pKaN: 9.00
}, {
    name: "Asparagine",
    aa3: "Asn",
    aa1: "N",
    sc: {
        type: "polar"
    },
    pKaC: 2.13,
    pKaN: 9.05
}, {
    name: "Aspartic acid",
    aa3: "Asp",
    aa1: "D",
    sc: {
        type: "negative",
        pKa: 3.71
    },
    pKaC: 1.95,
    pKaN: 9.66
}, {
    name: "Cysteine",
    aa3: "Cys",
    aa1: "C",
    sc: {
        type: "special",
        pKa: 8.14
    },
    pKaC: 1.91,
    pKaN: 10.28
}, {
    name: "Glutamic acid",
    aa3: "Glu",
    aa1: "E",
    sc: {
        type: "negative",
        pKa: 4.15
    },
    pKaC: 2.16,
    pKaN: 9.58
}, {
    name: "Glutamine",
    aa3: "Gln",
    aa1: "Q",
    sc: {
        type: "polar"
    },
    pKaC: 2.18,
    pKaN: 9.00
}, {
    name: "Glycine",
    aa3: "Gly",
    aa1: "G",
    sc: {
        type: "special"
    },
    pKaC: 2.34,
    pKaN: 9.58
}, {
    name: "Histidine",
    aa3: "His",
    aa1: "H",
    sc: {
        type: "positive",
        pKa: 6.04
    },
    pKaC: 1.70,
    pKaN: 9.09
}, {
    name: "Isoleucine",
    aa3: "Ile",
    aa1: "I",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.26,
    pKaN: 9.60
}, {
    name: "Leucine",
    aa3: "Leu",
    aa1: "L",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.32,
    pKaN: 9.58
}, {
    name: "Lysine",
    aa3: "Lys",
    aa1: "K",
    sc: {
        type: "positive",
        pKa: 10.67
    },
    pKaC: 2.15,
    pKaN: 9.16
}, {
    name: "Methionine",
    aa3: "Met",
    aa1: "M",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.16,
    pKaN: 9.08
}, {
    name: "Phenylalanine",
    aa3: "Phe",
    aa1: "F",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.18,
    pKaN: 9.09
}, {
    name: "Proline",
    aa3: "Pro",
    aa1: "P",
    sc: {
        type: "special"
    },
    pKaC: 1.95,
    pKaN: 10.47
}, {
    name: "Serine",
    aa3: "Ser",
    aa1: "S",
    sc: {
        type: "polar"
    },
    pKaC: 2.13,
    pKaN: 9.05
}, {
    name: "Threonine",
    aa3: "Thr",
    aa1: "T",
    sc: {
        type: "polar"
    },
    pKaC: 2.20,
    pKaN: 8.96
}, {
    name: "Tryptophan",
    aa3: "Trp",
    aa1: "W",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.38,
    pKaN: 9.34
}, {
    name: "Tyrosine",
    aa3: "Tyr",
    aa1: "Y",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.24,
    pKaN: 9.04
}, {
    name: "Valine",
    aa3: "Val",
    aa1: "V",
    sc: {
        type: "hydrophobic"
    },
    pKaC: 2.27,
    pKaN: 9.52
},
// Additional
{
    name: "Selenocysteine",
    aa3: "Sec",
    aa1: "U"
}, {
    name: "Pyrrolysine",
    aa3: "Pyl",
    aa1: "O"
},
// Ambiguous
{
    name: "Asparagine or aspartic acid",
    aa3: "Asx",
    aa1: "B"
}, {
    name: "Glutamine or glutamic acid",
    aa3: "Glx",
    aa1: "Z"
}, {
    name: "Leucine or isoleucine",
    aa3: "Xle",
    aa1: "J"
}, {
    name: "Unspecified or unknown",
    aa3: "Xaa",
    aa1: "X"
}];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bestResults;

/* we have 2 criteria to find the best results
 1. best match per zone based on the bestOf parameter
 2. maxResults : maximal number of results
 */
function bestResults(results, bestOf, maxResults, minSimilarity) {
    var newResults = [];

    // in order to find the bestOf we will sort by similarity and take all of them for which there is nothing in a range
    // of the bestOf range

    results.sort(function (a, b) {
        return b.similarity - a.similarity;
    });

    if (minSimilarity) {
        for (var i = 0; i < results.length; i++) {
            if (results[i].similarity < minSimilarity) {
                results = results.slice(0, i);
                break;
            }
        }
    }

    if (bestOf) {
        for (var i = 0; i < results.length; i++) {
            for (var j = 0; j < newResults.length; j++) {
                if (Math.abs(newResults[j].msem - results[i].msem) < bestOf / (results[i].charge || 1)) {
                    break;
                }
            }
            if (j == newResults.length) {
                newResults.push(results[i]);
            }
        }
    } else {
        newResults = results.slice(0);
    }

    if (maxResults) {
        newResults = newResults.slice(0, maxResults);
    }

    return newResults;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.array = __webpack_require__(8);
exports.matrix = __webpack_require__(27);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function splitSequence(sequence) {
    var aas = sequence.replace(/([A-Z])/g, " $1").split(/ /);
    var begin = 0;
    while (aas[begin] === '' || aas[begin] === 'H') {
        begin++;
    }
    var end = aas.length - 1;
    while (aas[end] === 'O' || aas[end] === 'H') {
        end--;
    }
    aas = aas.slice(begin, end + 1);
    return aas;
}

module.exports = splitSequence;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initSimilarity = __webpack_require__(7).initSimilarity;

var CC = __webpack_require__(0);

function MFProcessor(experimental, options) {
    initSimilarity(this, options);

    this.options.isotopomers = 'arrayXXYY';
    // init with options ans experimental spectrum
    this.options.zone = this.options.zone || {};
    if (!this.options.zone.low) this.options.zone.low = -0.5;
    if (!this.options.zone.high) this.options.zone.high = 4.5;

    if (this.options.decimalsMass) this.factorMass = Math.pow(10, this.options.decimalsMass);
    if (this.options.decimalsPPM) this.factorPPM = Math.pow(10, this.options.decimalsPPM);

    this.similarity.setPeaks1(experimental);
}

MFProcessor.prototype.process = function (mf, result) {
    // we allow to add information on an existing result
    result = result || {};
    var ccResult = CC.analyseMF(mf, this.options);

    var charge = Math.abs(ccResult.parts[0].charge || 1);
    var target = ccResult.parts[0].msem || ccResult.parts[0].em;

    var from, to;
    if (this.options.from && this.options.to) {
        from = this.options.from;
        to = this.options.to;
    } else {
        from = target + this.options.zone.low / charge;
        to = target + this.options.zone.high / charge;
    }

    if (this.widthFunction) {
        var width = this.widthFunction(target, charge);
        this.similarity.setTrapezoid(width.widthBottom, width.widthTop);
    }

    this.similarity.setFromTo(from, to);
    this.similarity.setPeaks2(ccResult.arrayXXYY);

    var similarityResult = this.similarity.getSimilarity();
    if (!result.em) result.em = ccResult.em;
    if (!result.info) result.info = mf;
    if (!result.mf) result.mf = ccResult.mf;
    if (!result.charge) result.charge = ccResult.parts[0].charge || 0;
    if (!result.msem) result.msem = ccResult.parts[0].msem || 0;
    result.fromTo = { from: from, to: to };
    result.extract = similarityResult.extract2;
    result.extractInfo = similarityResult.extractInfo2;
    result.extractInfo = similarityResult.extractInfo2;
    result.extractInfo = similarityResult.extractInfo2;
    result.widthBottom = similarityResult.widthBottom;
    result.widthTop = similarityResult.widthTop;
    result.diff = similarityResult.diff;
    result.similarity = Math.floor(similarityResult.similarity * 1e4) / 1e2;
    result.color = 'hsla(' + Math.round(similarityResult.similarity * 120) + ',100%,60%,0.6)';
    if (this.options.addExperimentalExtract) {
        result.extractExperimental = similarityResult.extract1;
        result.extractInfoExperimental = similarityResult.extractInfo1;
    }

    if (this.factorPPM) result.ppm = Math.round(result.ppm * this.factorPPM) / this.factorPPM;
    if (this.factorMass) result.em = Math.round(result.em * this.factorMass) / this.factorMass;
    if (this.factorMass && result.msem) result.msem = Math.round(result.msem * this.factorMass) / this.factorMass;

    return result;
};

module.exports = MFProcessor;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Similarity = __webpack_require__(26);

module.exports.initSimilarity = function (context, options) {
    // we will copy the options to be sure ...
    context.options = Object.create(options || {});
    context.widthFunction = undefined;
    if (context.options.widthFunction) {
        // we will create a function
        var theFunction = [];
        if (context.options.widthBottom) theFunction.push("var widthBottom=" + context.options.widthBottom + ";");
        if (context.options.widthTop) theFunction.push("var widthTop=" + context.options.widthTop + ";");
        theFunction.push(context.options.widthFunction);
        theFunction.push(";");
        theFunction.push("return {widthBottom: widthBottom, widthTop: widthTop};");
        context.widthFunction = new Function('mass', 'charge', theFunction.join("\r\n"));
    }

    context.similarity = new Similarity({
        widthTop: context.options.widthTop,
        widthBottom: context.options.widthBottom,
        common: context.options.common
    });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compareNumbers(a, b) {
    return a - b;
}

/**
 * Computes the sum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.sum = function sum(values) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
};

/**
 * Computes the maximum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.max = function max(values) {
    var max = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] > max) max = values[i];
    }
    return max;
};

/**
 * Computes the minimum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.min = function min(values) {
    var min = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] < min) min = values[i];
    }
    return min;
};

/**
 * Computes the min and max of the given values
 * @param {Array} values
 * @returns {{min: number, max: number}}
 */
exports.minMax = function minMax(values) {
    var min = values[0];
    var max = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] < min) min = values[i];
        if (values[i] > max) max = values[i];
    }
    return {
        min: min,
        max: max
    };
};

/**
 * Computes the arithmetic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.arithmeticMean = function arithmeticMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        sum += values[i];
    }
    return sum / l;
};

/**
 * {@link arithmeticMean}
 */
exports.mean = exports.arithmeticMean;

/**
 * Computes the geometric mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.geometricMean = function geometricMean(values) {
    var mul = 1;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        mul *= values[i];
    }
    return Math.pow(mul, 1 / l);
};

/**
 * Computes the mean of the log of the given values
 * If the return value is exponentiated, it gives the same result as the
 * geometric mean.
 * @param {Array} values
 * @returns {number}
 */
exports.logMean = function logMean(values) {
    var lnsum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        lnsum += Math.log(values[i]);
    }
    return lnsum / l;
};

/**
 * Computes the weighted grand mean for a list of means and sample sizes
 * @param {Array} means - Mean values for each set of samples
 * @param {Array} samples - Number of original values for each set of samples
 * @returns {number}
 */
exports.grandMean = function grandMean(means, samples) {
    var sum = 0;
    var n = 0;
    var l = means.length;
    for (var i = 0; i < l; i++) {
        sum += samples[i] * means[i];
        n += samples[i];
    }
    return sum / n;
};

/**
 * Computes the truncated mean of the given values using a given percentage
 * @param {Array} values
 * @param {number} percent - The percentage of values to keep (range: [0,1])
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.truncatedMean = function truncatedMean(values, percent, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }
    var l = values.length;
    var k = Math.floor(l * percent);
    var sum = 0;
    for (var i = k; i < l - k; i++) {
        sum += values[i];
    }
    return sum / (l - 2 * k);
};

/**
 * Computes the harmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.harmonicMean = function harmonicMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        if (values[i] === 0) {
            throw new RangeError('value at index ' + i + 'is zero');
        }
        sum += 1 / values[i];
    }
    return l / sum;
};

/**
 * Computes the contraharmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.contraHarmonicMean = function contraHarmonicMean(values) {
    var r1 = 0;
    var r2 = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        r1 += values[i] * values[i];
        r2 += values[i];
    }
    if (r2 < 0) {
        throw new RangeError('sum of values is negative');
    }
    return r1 / r2;
};

/**
 * Computes the median of the given values
 * @param {Array} values
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.median = function median(values, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }
    var l = values.length;
    var half = Math.floor(l / 2);
    if (l % 2 === 0) {
        return (values[half - 1] + values[half]) * 0.5;
    } else {
        return values[half];
    }
};

/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.variance = function variance(values, unbiased) {
    if (unbiased === undefined) unbiased = true;
    var theMean = exports.mean(values);
    var theVariance = 0;
    var l = values.length;

    for (var i = 0; i < l; i++) {
        var x = values[i] - theMean;
        theVariance += x * x;
    }

    if (unbiased) {
        return theVariance / (l - 1);
    } else {
        return theVariance / l;
    }
};

/**
 * Computes the standard deviation of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.standardDeviation = function standardDeviation(values, unbiased) {
    return Math.sqrt(exports.variance(values, unbiased));
};

exports.standardError = function standardError(values) {
    return exports.standardDeviation(values) / Math.sqrt(values.length);
};

/**
 * IEEE Transactions on biomedical engineering, vol. 52, no. 1, january 2005, p. 76-
 * Calculate the standard deviation via the Median of the absolute deviation
 *  The formula for the standard deviation only holds for Gaussian random variables.
 * @returns {{mean: number, stdev: number}}
 */
exports.robustMeanAndStdev = function robustMeanAndStdev(y) {
    var mean = 0,
        stdev = 0;
    var length = y.length,
        i = 0;
    for (i = 0; i < length; i++) {
        mean += y[i];
    }
    mean /= length;
    var averageDeviations = new Array(length);
    for (i = 0; i < length; i++) {
        averageDeviations[i] = Math.abs(y[i] - mean);
    }averageDeviations.sort(compareNumbers);
    if (length % 2 === 1) {
        stdev = averageDeviations[(length - 1) / 2] / 0.6745;
    } else {
        stdev = 0.5 * (averageDeviations[length / 2] + averageDeviations[length / 2 - 1]) / 0.6745;
    }

    return {
        mean: mean,
        stdev: stdev
    };
};

exports.quartiles = function quartiles(values, alreadySorted) {
    if (typeof alreadySorted === 'undefined') alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }

    var quart = values.length / 4;
    var q1 = values[Math.ceil(quart) - 1];
    var q2 = exports.median(values, true);
    var q3 = values[Math.ceil(quart * 3) - 1];

    return { q1: q1, q2: q2, q3: q3 };
};

exports.pooledStandardDeviation = function pooledStandardDeviation(samples, unbiased) {
    return Math.sqrt(exports.pooledVariance(samples, unbiased));
};

exports.pooledVariance = function pooledVariance(samples, unbiased) {
    if (typeof unbiased === 'undefined') unbiased = true;
    var sum = 0;
    var length = 0,
        l = samples.length;
    for (var i = 0; i < l; i++) {
        var values = samples[i];
        var vari = exports.variance(values);

        sum += (values.length - 1) * vari;

        if (unbiased) length += values.length - 1;else length += values.length;
    }
    return sum / length;
};

exports.mode = function mode(values) {
    var l = values.length,
        itemCount = new Array(l),
        i;
    for (i = 0; i < l; i++) {
        itemCount[i] = 0;
    }
    var itemArray = new Array(l);
    var count = 0;

    for (i = 0; i < l; i++) {
        var index = itemArray.indexOf(values[i]);
        if (index >= 0) itemCount[index]++;else {
            itemArray[count] = values[i];
            itemCount[count] = 1;
            count++;
        }
    }

    var maxValue = 0,
        maxIndex = 0;
    for (i = 0; i < count; i++) {
        if (itemCount[i] > maxValue) {
            maxValue = itemCount[i];
            maxIndex = i;
        }
    }

    return itemArray[maxIndex];
};

exports.covariance = function covariance(vector1, vector2, unbiased) {
    if (typeof unbiased === 'undefined') unbiased = true;
    var mean1 = exports.mean(vector1);
    var mean2 = exports.mean(vector2);

    if (vector1.length !== vector2.length) throw 'Vectors do not have the same dimensions';

    var cov = 0,
        l = vector1.length;
    for (var i = 0; i < l; i++) {
        var x = vector1[i] - mean1;
        var y = vector2[i] - mean2;
        cov += x * y;
    }

    if (unbiased) return cov / (l - 1);else return cov / l;
};

exports.skewness = function skewness(values, unbiased) {
    if (typeof unbiased === 'undefined') unbiased = true;
    var theMean = exports.mean(values);

    var s2 = 0,
        s3 = 0,
        l = values.length;
    for (var i = 0; i < l; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s3 += dev * dev * dev;
    }
    var m2 = s2 / l;
    var m3 = s3 / l;

    var g = m3 / Math.pow(m2, 3 / 2.0);
    if (unbiased) {
        var a = Math.sqrt(l * (l - 1));
        var b = l - 2;
        return a / b * g;
    } else {
        return g;
    }
};

exports.kurtosis = function kurtosis(values, unbiased) {
    if (typeof unbiased === 'undefined') unbiased = true;
    var theMean = exports.mean(values);
    var n = values.length,
        s2 = 0,
        s4 = 0;

    for (var i = 0; i < n; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s4 += dev * dev * dev * dev;
    }
    var m2 = s2 / n;
    var m4 = s4 / n;

    if (unbiased) {
        var v = s2 / (n - 1);
        var a = n * (n + 1) / ((n - 1) * (n - 2) * (n - 3));
        var b = s4 / (v * v);
        var c = (n - 1) * (n - 1) / ((n - 2) * (n - 3));

        return a * b - 3 * c;
    } else {
        return m4 / (m2 * m2) - 3;
    }
};

exports.entropy = function entropy(values, eps) {
    if (typeof eps === 'undefined') eps = 0;
    var sum = 0,
        l = values.length;
    for (var i = 0; i < l; i++) {
        sum += values[i] * Math.log(values[i] + eps);
    }return -sum;
};

exports.weightedMean = function weightedMean(values, weights) {
    var sum = 0,
        l = values.length;
    for (var i = 0; i < l; i++) {
        sum += values[i] * weights[i];
    }return sum;
};

exports.weightedStandardDeviation = function weightedStandardDeviation(values, weights) {
    return Math.sqrt(exports.weightedVariance(values, weights));
};

exports.weightedVariance = function weightedVariance(values, weights) {
    var theMean = exports.weightedMean(values, weights);
    var vari = 0,
        l = values.length;
    var a = 0,
        b = 0;

    for (var i = 0; i < l; i++) {
        var z = values[i] - theMean;
        var w = weights[i];

        vari += w * (z * z);
        b += w;
        a += w * w;
    }

    return vari * (b / (b * b - a));
};

exports.center = function center(values, inPlace) {
    if (typeof inPlace === 'undefined') inPlace = false;

    var result = values;
    if (!inPlace) result = [].concat(values);

    var theMean = exports.mean(result),
        l = result.length;
    for (var i = 0; i < l; i++) {
        result[i] -= theMean;
    }
};

exports.standardize = function standardize(values, standardDev, inPlace) {
    if (typeof standardDev === 'undefined') standardDev = exports.standardDeviation(values);
    if (typeof inPlace === 'undefined') inPlace = false;
    var l = values.length;
    var result = inPlace ? values : new Array(l);
    for (var i = 0; i < l; i++) {
        result[i] = values[i] / standardDev;
    }return result;
};

exports.cumulativeSum = function cumulativeSum(array) {
    var l = array.length;
    var result = new Array(l);
    result[0] = array[0];
    for (var i = 1; i < l; i++) {
        result[i] = result[i - 1] + array[i];
    }return result;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Promise wrapper for superagent
 */

function wrap(superagent, Promise) {
  /**
   * Request object similar to superagent.Request, but with end() returning
   * a promise.
   */
  function PromiseRequest() {
    superagent.Request.apply(this, arguments);
  }

  // Inherit form superagent.Request
  PromiseRequest.prototype = Object.create(superagent.Request.prototype);

  /** Send request and get a promise that `end` was emitted */
  PromiseRequest.prototype.end = function (cb) {
    var _end = superagent.Request.prototype.end;
    var self = this;

    return new Promise(function (accept, reject) {
      _end.call(self, function (err, response) {
        if (cb) {
          cb(err, response);
        }

        if (err) {
          err.response = response;
          reject(err);
        } else {
          accept(response);
        }
      });
    });
  };

  /** Provide a more promise-y interface */
  PromiseRequest.prototype.then = function (resolve, reject) {
    var _end = superagent.Request.prototype.end;
    var self = this;

    return new Promise(function (accept, reject) {
      _end.call(self, function (err, response) {
        if (err) {
          err.response = response;
          reject(err);
        } else {
          accept(response);
        }
      });
    }).then(resolve, reject);
  };

  /**
   * Request builder with same interface as superagent.
   * It is convenient to import this as `request` in place of superagent.
   */
  var request = function request(method, url) {
    return new PromiseRequest(method, url);
  };

  /** Helper for making an options request */
  request.options = function (url) {
    return request('OPTIONS', url);
  };

  /** Helper for making a head request */
  request.head = function (url, data) {
    var req = request('HEAD', url);
    if (data) {
      req.send(data);
    }
    return req;
  };

  /** Helper for making a get request */
  request.get = function (url, data) {
    var req = request('GET', url);
    if (data) {
      req.query(data);
    }
    return req;
  };

  /** Helper for making a post request */
  request.post = function (url, data) {
    var req = request('POST', url);
    if (data) {
      req.send(data);
    }
    return req;
  };

  /** Helper for making a put request */
  request.put = function (url, data) {
    var req = request('PUT', url);
    if (data) {
      req.send(data);
    }
    return req;
  };

  /** Helper for making a patch request */
  request.patch = function (url, data) {
    var req = request('PATCH', url);
    if (data) {
      req.send(data);
    }
    return req;
  };

  /** Helper for making a delete request */
  request.del = function (url) {
    return request('DELETE', url);
  };

  // Export the request builder
  return request;
}

module.exports = wrap;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var Emitter = __webpack_require__(29);
var reduce = __webpack_require__(30);
var requestBase = __webpack_require__(31);
var isObject = __webpack_require__(11);

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self !== 'undefined') {
  // Web Worker
  root = self;
} else {
  // Other environments
  root = undefined;
}

/**
 * Noop.
 */

function noop() {};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Expose `request`.
 */

var request = module.exports = __webpack_require__(32).bind(null, Request);

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  } else {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
    } catch (e) {}
    try {
      return new ActiveXObject('Msxml2.XMLHTTP');
    } catch (e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
    }
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (Array.isArray(val)) {
    return val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  }
  pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};

/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return (/[\/+]json\b/.test(mime)
  );
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str) {
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str) {
  return reduce(str.split(/ *; */), function (obj, str) {
    var parts = str.split(/ *= */),
        key = parts.shift(),
        val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD' ? this.parseBody(this.text ? this.text : this.xhr.response) : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function (header) {
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) {
    this[key] = obj[key];
  }
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function (str) {
  var parse = request.parse[this.type];
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function (status) {
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = 4 == type || 5 == type ? this.toError() : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
      // issue #876: return the http status code if the response parsing fails
      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter` and `requestBase`.
 */

Emitter(Request.prototype);
for (var key in requestBase) {
  Request.prototype[key] = requestBase[key];
}

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function () {
  if (this.aborted) return;
  this.aborted = true;
  this.xhr && this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set responseType to `val`. Presently valid responseTypes are 'blob' and 
 * 'arraybuffer'.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function (user, pass, options) {
  if (!options) {
    options = {
      type: 'basic'
    };
  }

  switch (options.type) {
    case 'basic':
      var str = btoa(user + ':' + pass);
      this.set('Authorization', 'Basic ' + str);
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;
  }
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function (val) {
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function (field, file, filename) {
  this._getFormData().append(field, file, filename || file.name);
  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function (data) {
  var obj = isObject(data);
  var type = this._header['content-type'];

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data ? this._data + '&' + data : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * @deprecated
 */
Response.prototype.parse = function serialize(fn) {
  if (root.console) {
    console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0");
  }
  this.serialize(fn);
  return this;
};

Response.prototype.serialize = function serialize(fn) {
  this._parser = fn;
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function (err, res) {
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function () {
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function () {
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function (fn) {
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function () {
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try {
      status = xhr.status;
    } catch (e) {
      status = 0;
    }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function handleProgress(e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = 'download';
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch (e) {}
  // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
  // Reported here:
  // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context


  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?') ? '&' + query : '?' + query;
  }

  // initiate request
  if (this.username && this.password) {
    xhr.open(this.method, this.url, true, this.username, this.password);
  } else {
    xhr.open(this.method, this.url, true);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function (url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

function del(url, fn) {
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function (url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function (url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null != obj && 'object' == typeof obj;
}

module.exports = isObject;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var request = __webpack_require__(9)(__webpack_require__(10), Promise);
var Papa = __webpack_require__(35);
var CC = __webpack_require__(0);
var combineMFs = __webpack_require__(13);

function getReferenceList(url, urlReferences) {

    if (urlReferences) {
        return Promise.all([request.get(url).end(), request.get(urlReferences).end()]).then(function (results) {
            return parse(results[0].text, results[1].text);
        });
    } else {
        return Promise.all([request.get(url).end()]).then(function (results) {
            return parse(results[0].text);
        });
    }

    function parse(tsv, tsvReferences) {
        var contaminants = Papa.parse(tsv, {
            delimiter: "\t",
            header: true
        }).data.filter(e => e.mf);

        if (tsvReferences) {
            var referencesArray = Papa.parse(tsvReferences, {
                delimiter: "\t",
                header: true
            }).data;

            var references = {};
            referencesArray.forEach(function (ref) {
                references[ref.label] = ref;
            });
        }

        var results = [];

        for (var contaminant of contaminants) {
            if (tsvReferences) {
                // we add references
                var refs = contaminant.references.split(/[ ,]+/);
                contaminant.references = [];
                for (var ref of refs) {
                    contaminant.references.push(references[ref]);
                }
            }

            // we need to calculate all the possibilities
            var mfs = combineMFs([contaminant.mf, contaminant.modif]);
            for (var mf of mfs) {
                mf.info = contaminant;
                if (!contaminant.ESI && !contaminant.MALDI && !contaminant.positive && !contaminant.negative) {
                    mf.ESI = true;
                    mf.MALDI = true;
                    mf.positive = true;
                    mf.negative = true;
                } else {
                    mf.ESI = contaminant.ESI === 'X' ? true : false;
                    mf.MALDI = contaminant.MALDI === 'X' ? true : false;
                    mf.positive = contaminant.positive === 'X' ? true : false;
                    mf.negative = contaminant.negative === 'X' ? true : false;
                }
                mf.similarity = '';
                mf.mf = CC.analyseMF(mf.mf).mf;
                results.push(mf);
            }
        }

        results = results.filter(function (a) {
            return a.msem !== 0;
        });

        results.sort(function (a, b) {
            return a.msem - b.msem;
        });

        var uniqueResults = [results[0]];
        for (var i = 1; i < results.length; i++) {
            if (results[i - 1].msem !== results[i].msem) {
                uniqueResults.push(results[i]);
            }
        }

        return uniqueResults;
    }
}

module.exports = getReferenceList;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CC = __webpack_require__(0);
var removeMFLastPart = __webpack_require__(36);

// TODO replace from the value coming from chemcalc
var ELECTRON_MASS = 5.4857990946e-4;

/**
 *
 * @param keys
 * @param options
 * @param {number} [options.limit=1000000] - Maximum number of results
 * @param {number} [options.minMass=0] - Minimal monoisotopic mass
 * @param {number} [options.maxMass=+Infinity] - Maximal monoisotopic mass
 * @param {number} [options.minMSMass=0] - Minimal observed monoisotopic mass
 * @param {number} [options.maxMSMass=+Infinity] - Maximal observed monoisotopic mass
 * @param {number} [options.minCharge=-Infinity] - Minimal charge
 * @param {number} [options.maxCharge=+Infinity] - Maximal charge
 * @returns {Array}
 */

function combineMFs(keys, options) {

    options = Object.assign({}, {
        limit: 1000000,
        minCharge: Number.NEGATIVE_INFINITY,
        maxCharge: Number.POSITIVE_INFINITY
    }, options);
    if (!Array.isArray(keys)) return [];

    // we allow String delimited by ". , or ;" instead of an array
    for (var i = 0; i < keys.length; i++) {
        if (!Array.isArray(keys[i])) {
            keys[i] = keys[i].split(/[\.,;]/);
        }
    }

    // we allow ranges in a string ...
    // problem with ranges is that we need to now to what the range applies
    for (var i = 0; i < keys.length; i++) {
        var parts = keys[i];
        var newParts = [];
        for (var j = 0; j < parts.length; j++) {
            var part = parts[j];
            var comment = part.replace(/^([^$]*\$|.*)/, '');
            part = part.replace(/\$.*/, '');

            if (~part.indexOf('-')) {
                // there are ranges ... we are in trouble !
                newParts = newParts.concat(processRange(part, comment));
            } else {
                newParts.push(parts[j]); // the part with the comments !
            }
        }
        keys[i] = newParts;
    }

    var results = [];
    var sizes = new Array(keys.length);
    var currents = new Array(keys.length);
    for (var i = 0; i < keys.length; i++) {
        sizes[i] = keys[i].length - 1;
        currents[i] = 0;
    }
    var position = 0;
    var evolution = 0;

    while (position < currents.length) {
        if (currents[position] < sizes[position]) {
            evolution++;
            appendResult(results, currents, keys, options);
            currents[position]++;
            for (var i = 0; i < position; i++) {
                currents[i] = 0;
            }
            position = 0;
        } else {
            position++;
        }
        if (evolution > options.limit) {
            throw new Error('You have reached the limit of ' + options.limit + '. You could still change this value using options.limit but it is likely to crash.');
        }
    }
    appendResult(results, currents, keys, options);
    return results;
}

module.exports = combineMFs;

var ems = {};

function getEM(mf) {
    if (!ems[mf]) {
        // we need to calculate based on the mf
        var info = CC.analyseMF(mf);
        ems[mf] = {
            em: info.em,
            charge: info.parts[0].charge || 0
        };
    }
    return {
        em: ems[mf].em,
        charge: ems[mf].charge
    };
}

function getEMFromParts(parts, currents) {
    var charge = 0;
    var em = 0;

    for (var i = 0; i < parts.length; i++) {
        var part = parts[i][currents[i]];
        if (part) {
            var info = getEM(part);
            charge += info.charge;
            em += info.em;
        }
    }
    var msem = em;
    if (charge > 0) {
        msem = msem / charge - ELECTRON_MASS;
    } else if (charge < 0) {
        msem = msem / (charge * -1) + ELECTRON_MASS;
    } else {
        msem = 0;
    }
    return {
        charge: charge,
        em: em,
        msem: msem
    };
}

function appendResult(results, currents, keys, options) {
    // this script is designed to combine molecular formula
    // that may contain comments after a "$" sign
    // therefore we should put all the comments at the ned

    var info = getEMFromParts(keys, currents);

    var em = info.em;
    var msem = info.msem;
    var charge = info.charge;

    if (typeof options.minMass !== 'undefined' && em < options.minMass || typeof options.maxMass !== 'undefined' && em > options.maxMass) return;
    if (typeof options.minMSMass !== 'undefined' && msem < options.minMSMass || typeof options.maxMSMass !== 'undefined' && msem > options.maxMSMass) return;
    if (charge < options.minCharge || charge > options.maxCharge) return;

    var result = { mf: '' };
    var comments = [];

    result.em = em;
    result.msem = msem;
    result.charge = charge;

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i][currents[i]];
        if (key) {
            result['part' + (i + 1)] = key;
            if (key.indexOf('$') > -1) {
                comments.push(key.replace(/^[^$]*\$/, ''));
                key = key.replace(/\$.*/, '');
            }
            result.mf += key;
        }
    }

    if (comments.length > 0) result.mf += '$' + comments.join(' ');

    results.push(result);
}

function processRange(string, comment) {
    var results = [];
    var parts = string.split(/([0-9]+-[0-9]+)/).filter(function (value) {
        if (value) return value;
    });
    var position = -1;
    var mfs = [];
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (!~part.search(/[0-9]-[0-9]/)) {
            position++;
            mfs[position] = {
                mf: part,
                min: 1,
                max: 1
            };
        } else {
            mfs[position].min = part.replace(/^(-?[0-9]*)-(-?[0-9]*)/, "$1") >> 0;
            mfs[position].max = part.replace(/^(-?[0-9]*)-(-?[0-9]*)/, "$2") >> 0;
        }
    }

    var currents = new Array(mfs.length);
    for (var i = 0; i < currents.length; i++) {
        currents[i] = mfs[i].min;
    }
    var position = 0;
    while (position < currents.length) {
        if (currents[position] < mfs[position].max) {
            results.push(getMF(mfs, currents, comment));
            currents[position]++;
            for (var i = 0; i < position; i++) {
                currents[i] = mfs[i].min;
            }
            position = 0;
        } else {
            position++;
        }
    }
    results.push(getMF(mfs, currents, comment));
    return results;
}

function getMF(mfs, currents, comment) {
    var mf = "";
    for (var i = 0; i < mfs.length; i++) {
        if (currents[i] === 0) {
            // TODO we need to remove from currents[i] till we reach another part of the MF
            mf += removeMFLastPart(mfs[i].mf);
        } else {
            mf += mfs[i].mf;
            if (currents[i] !== 1) {
                mf += currents[i];
            }
        }
    }
    if (comment) mf += "$" + comment;
    return mf;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(39);
var types = __webpack_require__(1);
var sets = __webpack_require__(15);
var positions = __webpack_require__(40);

module.exports = function (regexpStr) {
  var i = 0,
      l,
      c,
      start = { type: types.ROOT, stack: [] },


  // Keep track of last clause/group and stack.
  lastGroup = start,
      last = start.stack,
      groupStack = [];

  var repeatErr = function repeatErr(i) {
    util.error(regexpStr, 'Nothing to repeat at column ' + (i - 1));
  };

  // Decode a few escaped characters.
  var str = util.strToChars(regexpStr);
  l = str.length;

  // Iterate through each character in string.
  while (i < l) {
    c = str[i++];

    switch (c) {
      // Handle escaped characters, inclues a few sets.
      case '\\':
        c = str[i++];

        switch (c) {
          case 'b':
            last.push(positions.wordBoundary());
            break;

          case 'B':
            last.push(positions.nonWordBoundary());
            break;

          case 'w':
            last.push(sets.words());
            break;

          case 'W':
            last.push(sets.notWords());
            break;

          case 'd':
            last.push(sets.ints());
            break;

          case 'D':
            last.push(sets.notInts());
            break;

          case 's':
            last.push(sets.whitespace());
            break;

          case 'S':
            last.push(sets.notWhitespace());
            break;

          default:
            // Check if c is integer.
            // In which case it's a reference.
            if (/\d/.test(c)) {
              last.push({ type: types.REFERENCE, value: parseInt(c, 10) });

              // Escaped character.
            } else {
              last.push({ type: types.CHAR, value: c.charCodeAt(0) });
            }
        }

        break;

      // Positionals.
      case '^':
        last.push(positions.begin());
        break;

      case '$':
        last.push(positions.end());
        break;

      // Handle custom sets.
      case '[':
        // Check if this class is 'anti' i.e. [^abc].
        var not;
        if (str[i] === '^') {
          not = true;
          i++;
        } else {
          not = false;
        }

        // Get all the characters in class.
        var classTokens = util.tokenizeClass(str.slice(i), regexpStr);

        // Increase index by length of class.
        i += classTokens[1];
        last.push({
          type: types.SET,
          set: classTokens[0],
          not: not
        });

        break;

      // Class of any character except \n.
      case '.':
        last.push(sets.anyChar());
        break;

      // Push group onto stack.
      case '(':
        // Create group.
        var group = {
          type: types.GROUP,
          stack: [],
          remember: true
        };

        c = str[i];

        // If if this is a special kind of group.
        if (c === '?') {
          c = str[i + 1];
          i += 2;

          // Match if followed by.
          if (c === '=') {
            group.followedBy = true;

            // Match if not followed by.
          } else if (c === '!') {
            group.notFollowedBy = true;
          } else if (c !== ':') {
            util.error(regexpStr, 'Invalid group, character \'' + c + '\' after \'?\' at column ' + (i - 1));
          }

          group.remember = false;
        }

        // Insert subgroup into current group stack.
        last.push(group);

        // Remember the current group for when the group closes.
        groupStack.push(lastGroup);

        // Make this new group the current group.
        lastGroup = group;
        last = group.stack;
        break;

      // Pop group out of stack.
      case ')':
        if (groupStack.length === 0) {
          util.error(regexpStr, 'Unmatched ) at column ' + (i - 1));
        }
        lastGroup = groupStack.pop();

        // Check if this group has a PIPE.
        // To get back the correct last stack.
        last = lastGroup.options ? lastGroup.options[lastGroup.options.length - 1] : lastGroup.stack;
        break;

      // Use pipe character to give more choices.
      case '|':
        // Create array where options are if this is the first PIPE
        // in this clause.
        if (!lastGroup.options) {
          lastGroup.options = [lastGroup.stack];
          delete lastGroup.stack;
        }

        // Create a new stack and add to options for rest of clause.
        var stack = [];
        lastGroup.options.push(stack);
        last = stack;
        break;

      // Repetition.
      // For every repetition, remove last element from last stack
      // then insert back a RANGE object.
      // This design is chosen because there could be more than
      // one repetition symbols in a regex i.e. `a?+{2,3}`.
      case '{':
        var rs = /^(\d+)(,(\d+)?)?\}/.exec(str.slice(i)),
            min,
            max;
        if (rs !== null) {
          if (last.length === 0) {
            repeatErr(i);
          }
          min = parseInt(rs[1], 10);
          max = rs[2] ? rs[3] ? parseInt(rs[3], 10) : Infinity : min;
          i += rs[0].length;

          last.push({
            type: types.REPETITION,
            min: min,
            max: max,
            value: last.pop()
          });
        } else {
          last.push({
            type: types.CHAR,
            value: 123
          });
        }
        break;

      case '?':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: 1,
          value: last.pop()
        });
        break;

      case '+':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 1,
          max: Infinity,
          value: last.pop()
        });
        break;

      case '*':
        if (last.length === 0) {
          repeatErr(i);
        }
        last.push({
          type: types.REPETITION,
          min: 0,
          max: Infinity,
          value: last.pop()
        });
        break;

      // Default is a character that is not `\[](){}?+*^$`.
      default:
        last.push({
          type: types.CHAR,
          value: c.charCodeAt(0)
        });
    }
  }

  // Check if any groups have not been closed.
  if (groupStack.length !== 0) {
    util.error(regexpStr, 'Unterminated group');
  }

  return start;
};

module.exports.types = types;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(1);

var INTS = function INTS() {
  return [{ type: types.RANGE, from: 48, to: 57 }];
};

var WORDS = function WORDS() {
  return [{ type: types.CHAR, value: 95 }, { type: types.RANGE, from: 97, to: 122 }, { type: types.RANGE, from: 65, to: 90 }].concat(INTS());
};

var WHITESPACE = function WHITESPACE() {
  return [{ type: types.CHAR, value: 9 }, { type: types.CHAR, value: 10 }, { type: types.CHAR, value: 11 }, { type: types.CHAR, value: 12 }, { type: types.CHAR, value: 13 }, { type: types.CHAR, value: 32 }, { type: types.CHAR, value: 160 }, { type: types.CHAR, value: 5760 }, { type: types.CHAR, value: 6158 }, { type: types.CHAR, value: 8192 }, { type: types.CHAR, value: 8193 }, { type: types.CHAR, value: 8194 }, { type: types.CHAR, value: 8195 }, { type: types.CHAR, value: 8196 }, { type: types.CHAR, value: 8197 }, { type: types.CHAR, value: 8198 }, { type: types.CHAR, value: 8199 }, { type: types.CHAR, value: 8200 }, { type: types.CHAR, value: 8201 }, { type: types.CHAR, value: 8202 }, { type: types.CHAR, value: 8232 }, { type: types.CHAR, value: 8233 }, { type: types.CHAR, value: 8239 }, { type: types.CHAR, value: 8287 }, { type: types.CHAR, value: 12288 }, { type: types.CHAR, value: 65279 }];
};

var NOTANYCHAR = function NOTANYCHAR() {
  return [{ type: types.CHAR, value: 10 }, { type: types.CHAR, value: 13 }, { type: types.CHAR, value: 8232 }, { type: types.CHAR, value: 8233 }];
};

// Predefined class objects.
exports.words = function () {
  return { type: types.SET, set: WORDS(), not: false };
};

exports.notWords = function () {
  return { type: types.SET, set: WORDS(), not: true };
};

exports.ints = function () {
  return { type: types.SET, set: INTS(), not: false };
};

exports.notInts = function () {
  return { type: types.SET, set: INTS(), not: true };
};

exports.whitespace = function () {
  return { type: types.SET, set: WHITESPACE(), not: false };
};

exports.notWhitespace = function () {
  return { type: types.SET, set: WHITESPACE(), not: true };
};

exports.anyChar = function () {
  return { type: types.SET, set: NOTANYCHAR(), not: true };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var initSimilarity = __webpack_require__(7).initSimilarity;

/*
  We calculate the similarity between an experimental spectrum and a specific XY
 */

function SimilarityProcessor(experimental, options) {
    initSimilarity(this, options);

    this.similarity.setPeaks1(experimental);
}

SimilarityProcessor.prototype.process = function (spectrum, from, to) {

    if (this.widthFunction) {
        var width = this.widthFunction(spectrum[0][0]);
        this.similarity.setTrapezoid(width.widthBottom, width.widthTop);
    }

    return this.similarity.fastSimilarity(spectrum, from, to);
};

module.exports = SimilarityProcessor;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CC = __webpack_require__(0);
var PEP = __webpack_require__(19);

var bestResults = exports.bestResults = __webpack_require__(3);
var MFProcessor = exports.MFProcessor = __webpack_require__(6);
var getPubchemStats = __webpack_require__(28);
var mfFromMonoisotopicMassPubchemPromise = __webpack_require__(33);

exports.getContaminantsReferenceList = __webpack_require__(34);
exports.getReferenceList = __webpack_require__(12);

exports.combineMFs = __webpack_require__(13);
exports.enumerateMF = __webpack_require__(37);
exports.SimilarityProcessor = __webpack_require__(16);
exports.MFSimilarityProcessor = __webpack_require__(42);
var massPeakPicking = __webpack_require__(43);

if (typeof self !== 'undefined') {
    exports.MFProcessorWorker = __webpack_require__(44);
}

var CE = exports;

CE.analyseMF = __webpack_require__(47);
CE.getInfo = CC.getInfo;
CE.mfFromMonoisotopicMass = CC.mfFromMonoisotopicMass;

/*
 mfFromMonoisotopicMassSimilarity
 We will extend mfFromMonoisotopicMass in order to include in the options:
 * experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]
 * widthTop : top width of the trapezoid
 * widthBottom : bottom width of the trapezoid
 * from : mass "from" which calculate the similarity
 * to : mass "to" which calculate the similarity
 * As an alternative the from / to parameters can be calculated based target mass
 *
 * decimalsPPM : number of decimals for PPM
 * decimalsMass : number odecimals for the mass
 */
// TODO : May not be moved (and create it's own file) because it also has to work inside a worker !!!!!
CE.mfFromMonoisotopicMassSimilarity = function mfFromMonoisotopicMassSimilarity(mass, experimental, options) {
    var mfResults = CC.mfFromMonoisotopicMass(mass, options);
    var processor = new MFProcessor(experimental, options);

    var results = mfResults.results;
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        processor.process(result.mf.value || result.mf, result);
    }
    mfResults.extractExperimental = processor.similarity.getExtract1();

    mfResults.results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
    return mfResults;
};

CE.pubchemStats = {};
CE.getPubchemStats = function (id) {
    id = id || '25_C-H.C-N.C-O.C-S.C-P.C-FClBr.O-P.O-S.CCNP-HFClBr';
    if (CE.pubchemStats[id]) return Promise.resolve(CE.pubchemStats[id]);
    return getPubchemStats(id).then(function (value) {
        CE.pubchemStats[id] = value;
        return value;
    });
};

CE.mfFromMonoisotopicMassPubchemPromise = function (mass, options) {
    return CE.getPubchemStats().then(function (pubchemStats) {
        return mfFromMonoisotopicMassPubchemPromise(mass, pubchemStats, options);
    });
};

CE.matchMFs = function (mfsArray, experimental, options) {
    options = options || {};
    options.addExperimentalExtract = true;
    options.maxResults = options.maxResults || 500;
    options.minSimilarity = isNaN(options.minSimilarity) ? 50 : options.minSimilarity;

    var processor = new MFProcessor(experimental, options);
    var mfs = CE.combineMFs(mfsArray);

    var results = [];
    for (var i = 0; i < mfs.length; i++) {
        var result = processor.process(mfs[i].mf);
        results.push(result);
        result.parts = mfs[i];
        if (results.length > options.maxResults * 2) {
            results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
        }
    }
    results = bestResults(results, options.bestOf, options.maxResults, options.minSimilarity);
    return { options: options, results: results };
};

CE.getEutrophicationPotential = function (mf) {
    var chemcalc = CC.analyseMF(mf);
    var atoms = chemcalc.parts[0].ea;
    var mw = chemcalc.mw;
    var nC = 0,
        nO = 0,
        nN = 0,
        nP = 0,
        nH = 0;
    for (var i = 0; i < atoms.length; i++) {
        var atom = atoms[i];
        switch (atom.element) {
            case 'C':
                nC = atom.number;
                break;
            case 'N':
                nN = atom.number;
                break;
            case 'O':
                nO = atom.number;
                break;
            case 'H':
                nH = atom.number;
                break;
            case 'P':
                nP = atom.number;
                break;
            default:
                return { log: 'EP can not be calculated because the MF contains the element: ' + atom.element };
        }
    }

    var vRef = 1;
    var mwRef = 94.97;

    var thOD = nC + (nH - 3 * nN) / 4 - nO / 2;
    var v = nP + nN / 16 + thOD / 138;
    var ep = v / mw / (vRef / mwRef);

    return {
        v: v,
        thOD: thOD,
        ep: ep,
        mf: { type: 'mf', value: mf },
        mw: chemcalc.mw,
        log: 'Successful calculation'
    };
};

CE.convertAASequence = PEP.convertAASequence;

CE.chargePeptide = PEP.chargePeptide;

CE.generatePeptideFragments = PEP.generatePeptideFragments;

CE.splitPeptide = PEP.splitPeptide;

CE.digestPeptide = PEP.digestPeptide;

CE.massPeakPicking = massPeakPicking;

CE.allowNeutralLoss = PEP.allowNeutralLoss;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aa = __webpack_require__(2);
var IEP = __webpack_require__(20);
var chargePeptide = __webpack_require__(21);
var allowNeutralLoss = __webpack_require__(23);
var splitPeptide = __webpack_require__(5);
var digestPeptide = __webpack_require__(24);
var generatePeptideFragments = __webpack_require__(25);

exports.getInfo = function () {
    return aa;
};

// sequence should be in the "right" format like HAlaGlyProOH

exports.splitPeptide = splitPeptide;
exports.digestPeptide = digestPeptide;

exports.calculateIEP = function (sequence) {
    var aas = splitPeptide(sequence);
    var result = IEP.calculateIEP(aas);
    return result;
};

exports.calculateIEPChart = function (sequence) {
    var aas = splitPeptide(sequence);
    var result = IEP.calculateChart(aas);
    return result;
};

exports.getColorForIEP = function (iep) {
    return IEP.getColor(iep);
};

exports.calculateCharge = function (sequence, ph) {
    var aas = splitPeptide(sequence);
    return IEP.calculateCharge(aas, ph);
};

exports.generatePeptideFragments = generatePeptideFragments;

exports.chargePeptide = chargePeptide;
exports.allowNeutralLoss = allowNeutralLoss;

function aa1To3(code) {
    for (var i = 0; i < aa.length; i++) {
        if (aa[i].aa1 === code) {
            return aa[i].aa3;
        }
    }
    throw new Error('Invalid 1 letter code: ' + code);
}

function converAA1To3(mf) {
    var newmf = '';
    for (var i = 0; i < mf.length; i++) {
        newmf += aa1To3(mf.charAt(i));
    }
    return newmf;
}

function capitalizeAA3(mf) {
    for (var i = 0; i < aa.length; i++) {
        var regexp = new RegExp(aa[i].aa3, 'gi');
        mf = mf.replace(regexp, aa[i].aa3);
    }
    return mf;
}

exports.convertAASequence = function convertAASequence(mf) {
    // this function will check if it is a sequence of aa in 1 letter or 3 letters and convert them if it is the case
    // it could be a multiline mf !
    // if it is a multiline we could make some "tricks" ...
    var newmf = mf;
    // SEQRES   1 B  256  MET PRO VAL GLU ILE THR VAL LYS GLU LEU LEU GLU ALA
    // SEQRES   2 B  256  GLY VAL HIS PHE GLY HIS GLU ARG LYS ARG TRP ASN PRO
    // or
    // MET PRO VAL GLU ILE THR VAL LYS GLU LEU LEU GLU ALA
    // GLY VAL HIS PHE GLY HIS GLU ARG LYS ARG TRP ASN PRO
    if (mf.search(/[A-Z]{3} [A-Z]{3} [A-Z]{3}/) > -1) {
        // this is a PDB !
        var tmpmf = mf.replace(/[\r\n]+/g, ' ');
        tmpmf = tmpmf.replace(/(SEQRES|[0-9]+| [A-Z] | [0-9A-Z]{4-50})/g, '');
        // we need to correct the uppercase / lowercase
        var parts = tmpmf.split(' ');
        newmf = 'H';
        for (var i = 0; i < parts.length; i++) {
            newmf += parts[i].substr(0, 1) + parts[i].substr(1).toLowerCase();
        }
        newmf += 'OH';
    } else if (mf.search(/[A-Z]{3}/) > -1 && mf.search(/[a-zA-Z][a-z0-9]/) == -1) {
        // UNIPROT
        //   370        380        390        400        410        420
        //GFKPNLRKTF VSGLFRESCG AHFYRGVDVK PFYIKKPVDN LFALMLILNR LRGWGVVGGM
        //
        //    430        440        450        460        470        480
        //SDPRLYKVWV RLSSQVPSMF FGGTDLAADY YVVSPPTAVS VYTKTPYGRL LADTRTSGFR
        // We remove all the number, all the spaces, etc
        newmf = 'H' + converAA1To3(newmf.replace(/[^A-Z]/g, '')) + 'OH';
    }

    return newmf;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aa = __webpack_require__(2);

// we will convert the data to an object to be much faster
var aaObject = {};
for (var i = 0; i < aa.length; i++) {
    aaObject[aa[i].aa3] = aa[i];
}

function calculateCharge(aas, pH) {
    if (!pH) pH = 7.0;
    var combined = combine(aas);
    if (!combined) return;
    var charge = calculateForPh(combined, pH);
    return Math.round(charge * 1000) / 1000;
}

// this methods required an array of aas

function calculateIEP(aas) {
    var combined = combine(aas);
    if (!combined) return;
    var first = 0;
    var last = 14;
    var current = 14;
    var previous = 0;
    var currentCharge;
    while (Math.abs(current - previous) > 0.0001) {
        previous = current;
        current = (last + first) / 2;
        currentCharge = calculateForPh(combined, current);
        if (currentCharge > 0) {
            first = current;
        } else if (currentCharge < 0) {
            last = current;
        } else {
            previous = current;
        }
    }
    return Math.round(current * 1000) / 1000;
}

function calculateChart(aas) {
    var combined = combine(aas);
    if (!combined) return;
    var y = [];
    var yAbs = [];
    for (var i = 0; i <= 14; i = i + 0.01) {
        var charge = calculateForPh(combined, i);
        y.push(charge);
        yAbs.push(Math.abs(charge));
    }
    combined.y = y;
    combined.yAbs = yAbs;

    return combined;
}

function calculateForPh(combined, pH) {
    var total = 0;
    total += 1 / (1 + Math.pow(10, pH - combined.first));
    total += -1 / (1 + Math.pow(10, combined.last - pH));
    for (var key in combined.acid) {
        total += -combined.acid[key] / (1 + Math.pow(10, aaObject[key].sc.pKa - pH));
    }
    for (var key in combined.basic) {
        total += combined.basic[key] / (1 + Math.pow(10, pH - aaObject[key].sc.pKa));
    }
    return total;
}

// we will combine the amino acids
function combine(aas) {
    var combined = {};
    if (aaObject[aas[0]]) {
        combined.first = aaObject[aas[0]].pKaN;
    } else {
        return;
    }
    if (aaObject[aas[aas.length - 1]]) {
        combined.last = aaObject[aas[aas.length - 1]].pKaC;
    } else {
        return;
    }
    combined.basic = {};
    combined.acid = {};
    for (var i = 0; i < aas.length; i++) {
        var aa = aas[i];
        if (!aaObject[aa]) return;
        if (aaObject[aa].sc && aaObject[aa].sc.type) {
            if (aaObject[aa].sc.type == "positive") {
                if (!combined.basic[aa]) {
                    combined.basic[aa] = 0;
                }
                combined.basic[aa]++;
            } else if (aaObject[aa].sc.type == "negative") {
                if (!combined.acid[aa]) {
                    combined.acid[aa] = 0;
                }
                combined.acid[aa]++;
            }
        }
    }
    return combined;
}

/*
 We can generate a color based on iep
 0 -> 7 means that at pH 7 it is charged negatively (blue)
 7 -> 14 means that at pH7 it is charged positively (red)
 */
function getColor(iep) {
    if (iep < 7) {
        if (iep < 3) iep = 3;
        var white = Math.round(255 - (7 - iep) * (200 / 4));
        return "rgb(" + white + "," + white + ",255)";
    } else if (iep > 7) {
        if (iep > 11) iep = 11;
        var white = Math.round(255 - (iep - 7) * (200 / 4));
        return "rgb(255," + white + "," + white + ")";
    }
    return "rgb(255,255,255)";
}

module.exports = {
    calculateIEP: calculateIEP,
    calculateCharge: calculateCharge,
    calculateChart: calculateChart,
    getColor: getColor
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAA = __webpack_require__(22);

// SOURCE: https://en.wikipedia.org/wiki/Amino_acid

function chargePeptide(mf, options) {
    var options = options || {};
    if (options.pH === undefined) options.pH = 0;
    if (Array.isArray(mf)) {
        for (var i = 0; i < mf.length; i++) {
            mf[i] = chargeOnePeptide(mf[i], options);
        }
        return mf;
    } else {
        return chargeOnePeptide(mf, options);
    }
}

function chargeOnePeptide(mf, options) {
    var pH = options.pH;
    // we will allow to charge the peptide at a specific pH

    // first amino acids (N-terminal)
    if (mf.match(/^H[A-Z][a-z]{2}/)) {
        var firstAA = mf.replace(/^H([A-Z][a-z]{2}).*/, "$1");
        if (getAA(firstAA) && pH < getAA(firstAA).pKaN) {
            mf = mf.replace(/^H([^+])/, 'H+H$1');
        }
    }

    // last amino acids (C-terminal)
    if (mf.match(/[A-Z][a-z]{2}OH$/)) {
        var lastAA = mf.replace(/.*([A-Z][a-z]{2})OH$/, "$1");
        if (getAA(firstAA) && pH > getAA(firstAA).pKaC) {
            mf = mf.replace(/OH$/, 'O-');
        }
    }

    // basic AA
    if (pH < getAA('Arg').sc.pKa) mf = mf.replace(/(Arg)(?!\()/g, '$1(H+)');
    if (pH < getAA('His').sc.pKa) mf = mf.replace(/(His)(?!\()/g, '$1(H+)');
    if (pH < getAA('Lys').sc.pKa) mf = mf.replace(/(Lys)(?!\()/g, '$1(H+)');

    // acid AA
    if (pH > getAA('Asp').sc.pKa) mf = mf.replace(/(Asp)(?!\()/g, '$1(H-1-)');
    if (pH > getAA('Glu').sc.pKa) mf = mf.replace(/(Glu)(?!\()/g, '$1(H-1-)');

    if (pH > getAA('Cys').sc.pKa) mf = mf.replace(/(Cys)(?!\()/g, '$1(H-1-)');

    return mf;
};

module.exports = chargePeptide;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aa = __webpack_require__(2);

function getAA(code) {
    if (code.length === 1) {
        for (var i = 0; i < aa.length; i++) {
            if (aa[i].aa1 === code) {
                return aa[i];
            }
        }
    }
    if (code.length === 3) {
        for (var i = 0; i < aa.length; i++) {
            if (aa[i].aa3 === code) {
                return aa[i];
            }
        }
    }
}

module.exports = getAA;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function allowNeutralLoss(mf, options) {
    if (Array.isArray(mf)) {
        for (var i = 0; i < mf.length; i++) {
            mf[i] = allowOneNeutralLoss(mf[i], options);
        }
        return mf;
    } else {
        return allowOneNeutralLoss(mf, options);
    }
}

function allowOneNeutralLoss(mf, options) {
    mf = mf.replace(/(Ser|Thr|Asp|Glu)(?!\()/g, '$1(H-2O-1)0-1');
    mf = mf.replace(/(Arg|Lys|Asn|Gln)(?!\()/g, '$1(N-1H-3)0-1');

    return mf;
};

module.exports = allowNeutralLoss;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var splitSequence = __webpack_require__(5);

/*
Iotuibs:
* minMissed (default: 0)
* maxMissed (default: 0)
* minResidue: 0;
* maxResidue: infinity
* enzyme: chymotrypsin, trypsin, glucph4, glucph8, thermolysin, cyanogenbromide : Mandatory, no default value !
 */

function digestSequence(sequence, options) {
    var options = options || {};

    sequence = sequence.replace(/^H([^a-z])/, '$1').replace(/OH$/, '');

    options.enzyme = options.enzyme || 'trypsin';
    if (options.minMissed === undefined) options.minMissed = 0;
    if (options.maxMissed === undefined) options.maxMissed = 0;
    if (options.minResidue === undefined) options.minResidue = 0;
    if (options.maxResidue === undefined) options.maxResidue = Number.MAX_VALUE;
    var regexp = getRegexp(options.enzyme);
    var fragments = sequence.replace(regexp, "$1 ").split(/ /);
    if (!fragments[fragments.length - 1]) fragments = fragments.slice(0, fragments.length - 1);

    var from = 0;
    for (var i = 0; i < fragments.length; i++) {
        var nbResidue = splitSequence(fragments[i]).length;
        fragments[i] = {
            sequence: fragments[i],
            nbResidue: nbResidue,
            from: from + 1,
            to: from + nbResidue
        };
        from += nbResidue;
    }

    var results = [];

    for (var i = 0; i < fragments.length - options.minMissed; i++) {
        for (var j = options.minMissed; j <= Math.min(options.maxMissed, fragments.length - i - 1); j++) {
            var fragment = '';
            var nbResidue = 0;
            for (var k = i; k <= i + j; k++) {
                fragment += fragments[k].sequence;
                nbResidue += fragments[k].nbResidue;
            }
            var from = fragments[i].from;
            var to = fragments[i + j].to;
            if (fragment && nbResidue >= options.minResidue && nbResidue <= options.maxResidue) {
                results.push("H" + fragment + "OH" + "$D" + from + ">" + to);
            }
        }
    }

    return results;
}

function getRegexp(enzyme) {
    switch (enzyme.toLowerCase().replace(/[^a-z0-9]/g, '')) {
        case 'chymotrypsin':
            return (/(Phe|Tyr|Trp)(?!Pro)/g
            );
        case 'trypsin':
            return (/(Lys|Arg)(?!Pro)/g
            );
        case 'lysc':
            return (/(Lys)(?!Pro)/g
            );
        case 'glucph4':
            return (/(Glu)(?!Pro|Glu)/g
            );
        case 'glucph8':
            return (/(Asp|Glu)(?!Pro|Glu)/g
            );
        case 'thermolysin':
            return (/(Leu|Ile|Met|Phe|Trp)/g
            );
        case 'cyanogenbromide':
            return (/(Met)/g
            );
    }
    throw new Error('Digestion enzyme: ' + enzyme + ' is unknown');
}

module.exports = digestSequence;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (mf, options) {
    if (options === undefined) {
        options = {
            a: false,
            b: true,
            c: false,
            x: false,
            y: true,
            z: false,
            i: false,
            ya: false,
            yb: false,
            yc: false,
            zc: false
        };
    }
    options.maxInternal = options.maxInternal || Number.MAX_VALUE;
    options.minInternal = options.minInternal || 0;

    var mfs = [];
    // need to allow 0-9 to deal with neutral loss
    var mfparts = mf.replace(/([a-z\)0-9])([A-Z][a-z](?=[a-z]))/g, "$1 $2").split(/ /);

    var nTerm = "";
    var cTerm = "";

    for (var i = 1; i < mfparts.length; i++) {
        nTerm += mfparts[i - 1];
        cTerm = mfparts[mfparts.length - i] + cTerm;
        addNTerm(mfs, nTerm, i, options);
        addCTerm(mfs, cTerm, i, options);
        if (options.i) mfs.push(mfparts[i] + "HC-1O-1(+1)$i:" + mfparts[i]);

        if (options.ya || options.yb || options.yc || options.zc) {
            // we have double fragmentations
            for (var j = i + 1; j < Math.min(mfparts.length, options.maxInternal + i + 1); j++) {
                var iTerm = '';
                if (j - i >= options.minInternal) {
                    for (var k = i; k < j; k++) {
                        iTerm += mfparts[k];
                    }
                    addITerm(mfs, iTerm, mfparts.length - i, j, options);
                }
            }
        }
    }

    if (mfs.length === 0) {
        mfs = mfs.concat([mf]);
    }

    return mfs;
};

function addNTerm(mfs, nTerm, i, options) {
    if (options.a) mfs.push(nTerm + "C-1O-1(+1)$a" + i);
    if (options.b) mfs.push(nTerm + "(+1)$b" + i);
    if (options.c) mfs.push(nTerm + "NH3(+1)$c" + i);
}

function addITerm(mfs, iTerm, i, j, options) {
    if (options.ya) mfs.push("H" + iTerm + "C-1O-1(+1)$a" + j + "y" + i);
    if (options.yb) mfs.push("H" + iTerm + "(+1)$b" + j + "y" + i);
    if (options.yc) mfs.push("H" + iTerm + "NH3(+1)$c" + j + "y" + i);
    if (options.zc) mfs.push("N-1" + iTerm + "NH3(+1)$c" + j + "z" + i);
}

function addCTerm(mfs, cTerm, i, options) {
    if (options.x) mfs.push("CO(+1)" + cTerm + "$x" + i);
    if (options.y) mfs.push("H2(+1)" + cTerm + "$y" + i);
    if (options.z) mfs.push("N-1H-1(+1)" + cTerm + "$z" + i);
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var COMMON_NO = 0;
var COMMON_FIRST = 1;
var COMMON_SECOND = 2;
var COMMON_BOTH = 3; // should be a binary operation !

var Stat = __webpack_require__(4).array;

module.exports = function Comparator(options) {

    var widthTop, widthBottom, from, to;
    var array1Extract, array2Extract, widthSlope, array1ExtractInfo, array2ExtractInfo;
    var common, commonFactor;

    setOptions(options);

    var array1 = [];
    var array2 = [];

    /*
     2 formats are allowed:
     [[x1,x2,...],[y1,y2,...]] or [[x1,y1],[x2,y2], ...]
    */

    function setOptions(newOptions) {
        options = newOptions || {};
        if (typeof options.common === 'string') {
            if (options.common.toLowerCase() === 'first') {
                common = COMMON_FIRST;
            } else if (options.common.toLowerCase() === 'second') {
                common = COMMON_SECOND;
            } else if (options.common.toLowerCase() === 'both') {
                common = COMMON_BOTH;
            } else {
                common = COMMON_NO;
            }
        } else {
            if (options.common == true) {
                common = COMMON_BOTH;
            } else {
                common = COMMON_NO;
            }
        }
        commonFactor = options.commonFactor || commonFactor || 4;

        if (options.widthBottom == undefined) {
            options.widthBottom = widthBottom || 2;
        }
        if (options.widthTop == undefined) {
            options.widthTop = widthTop || 1;
        }
        setTrapezoid(options.widthBottom, options.widthTop);
        setFromTo(options.from || from, options.to || to);
    }

    function setPeaks1(anArray) {
        array1 = checkArray(anArray);

        if (common) {
            var extracts = commonExtractAndNormalize(array1, array2, widthBottom, from, to, common);
            array1Extract = extracts.data1;
            array1ExtractInfo = extracts.info1;
            array2Extract = extracts.data2;
            array2ExtractInfo = extracts.info2;
        } else {
            var extract = extractAndNormalize(array1, from, to);
            array1Extract = extract.data;
            array1ExtractInfo = extract.info;
        }
    }
    function setPeaks2(anArray) {
        array2 = checkArray(anArray);
        if (common) {
            var extracts = commonExtractAndNormalize(array1, array2, widthBottom, from, to, common);
            array1Extract = extracts.data1;
            array1ExtractInfo = extracts.info1;
            array2Extract = extracts.data2;
            array2ExtractInfo = extracts.info2;
        } else {
            var extract = extractAndNormalize(array2, from, to);
            array2Extract = extract.data;
            array2ExtractInfo = extract.info;
        }
    }

    function getExtract1() {
        return array1Extract;
    }

    function getExtract2() {
        return array2Extract;
    }

    function getExtractInfo1() {
        return array1ExtractInfo;
    }

    function getExtractInfo2() {
        return array2ExtractInfo;
    }

    function setTrapezoid(newWidthBottom, newWidthTop) {
        widthTop = newWidthTop;
        widthBottom = newWidthBottom;
        widthSlope = (widthBottom - widthTop) / 2;
        if (widthBottom < widthTop) throw "widthBottom has to be larger than widthTop";
    }

    function setFromTo(newFrom, newTo) {
        if (newFrom === from && newTo === to) return;
        from = newFrom;
        to = newTo;
        if (common) {
            var extracts = commonExtractAndNormalize(array1, array2, widthBottom, from, to, common, commonFactor);
            array1Extract = extracts.data1;
            array1ExtractInfo = extracts.info1;
            array2Extract = extracts.data2;
            array2ExtractInfo = extracts.info2;
        } else {
            var extract = extractAndNormalize(array1, from, to);
            array1Extract = extract.data;
            array1ExtractInfo = extract.info;
            var extract = extractAndNormalize(array2, from, to);
            array2Extract = extract.data;
            array2ExtractInfo = extract.info;
        }
    }

    function getOverlap(x1, y1, x2, y2) {
        if (y1 === 0 || y2 === 0) return 0;

        // TAKE CARE !!! We multiply the diff by 2 !!!
        var diff = Math.abs(x1 - x2) * 2;

        if (diff > widthBottom) return 0;
        if (diff <= widthTop) {
            return Math.min(y1, y2);
        }

        var maxValue = Math.max(y1, y2) * (widthBottom - diff) / (widthBottom - widthTop);
        return Math.min(y1, y2, maxValue);

        return NaN;
    }

    // This is the old trapezoid similarity
    function getOverlapTrapezoid(x1, y1, x2, y2) {

        var factor = 2 / (widthTop + widthBottom); // correction for surface=1
        if (y1 === 0 || y2 === 0) return 0;
        if (x1 === x2) {
            // they have the same position
            return Math.min(y1, y2);
        }

        var diff = Math.abs(x1 - x2);
        if (diff >= widthBottom) return 0;
        if (y1 === y2) {
            // do they have the same height ???
            // we need to find the common length
            if (diff <= widthTop) {
                return ((widthTop + widthBottom) / 2 - diff) * y1 * factor;
            } else if (diff <= widthBottom) {
                return (widthBottom - diff) * y1 / 2 * (diff - widthTop) / (widthBottom - widthTop) * factor;
            }
            return 0;
        } else {
            // the height are different and not the same position ...
            // we need to consider only one segment to find its intersection

            var small = Math.min(y1, y2);
            var big = Math.max(y1, y2);

            var targets = [[[0, 0], [widthSlope, small]], [[widthSlope, small], [widthSlope + widthTop, small]], [[widthTop + widthSlope, small], [widthBottom, 0]]];
            if (x1 > x2 && y1 > y2 || x1 < x2 && y1 < y2) {
                var segment = [[diff, 0], [diff + widthSlope, big]];
            } else {
                var segment = [[diff + widthSlope, big], [diff, 0]];
            }

            for (var i = 0; i < 3; i++) {
                var intersection = getIntersection(targets[i], segment);
                if (intersection) {
                    switch (i) {
                        case 0:
                            return small - diff * intersection.y / 2 * factor;
                        case 1:
                            // to simplify ...
                            //     console.log("           ",widthSlope,small,big,intersection.x)
                            return (widthSlope * small / (2 * big) * small + (widthTop + widthSlope - intersection.x) * small + widthSlope * small / 2) * factor;
                        case 2:
                            return (widthBottom - diff) * intersection.y / 2 * factor;
                    }
                }
            }
        }
        return NaN;
    }

    // this method calculates the total diff. The sum of positive value will yield to overlap
    function calculateDiff() {
        // we need to take 2 pointers
        // and travel progressively between them ...
        var newFirst = [[].concat(array1Extract[0]), [].concat(array1Extract[1])];
        var newSecond = [[].concat(array2Extract[0]), [].concat(array2Extract[1])];
        var array1Length = array1Extract[0] ? array1Extract[0].length : 0;
        var array2Length = array2Extract[0] ? array2Extract[0].length : 0;

        var pos1 = 0;
        var pos2 = 0;
        var previous2 = 0;
        while (pos1 < array1Length) {
            var diff = newFirst[0][pos1] - array2Extract[0][pos2];
            if (Math.abs(diff) < widthBottom) {
                // there is some overlap
                if (options.trapezoid) {
                    var overlap = getOverlapTrapezoid(newFirst[0][pos1], newFirst[1][pos1], newSecond[0][pos2], newSecond[1][pos2], widthTop, widthBottom);
                } else {
                    var overlap = getOverlap(newFirst[0][pos1], newFirst[1][pos1], newSecond[0][pos2], newSecond[1][pos2], widthTop, widthBottom);
                }
                newFirst[1][pos1] -= overlap;
                newSecond[1][pos2] -= overlap;
                if (pos2 < array2Length - 1) {
                    pos2++;
                } else {
                    pos1++;
                    pos2 = previous2;
                }
            } else {
                if (diff > 0 && pos2 < array2Length - 1) {
                    pos2++;
                    previous2 = pos2;
                } else {
                    pos1++;
                    pos2 = previous2;
                }
            }
        }
        return newSecond;
    }

    /*
        This code requires the use of an array like  [[x1,y1],[x2,y2], ...]
        If it is not the right format, we will just convert it
        Otherwise we return the correct format
     */
    function checkArray(points) {
        // if it is already a 2D array of points, we just return them
        if (Array.isArray(points) && Array.isArray(points[0]) && points.length === 2) return points;
        var x = new Array(points.length);
        var y = new Array(points.length);
        for (var i = 0; i < points.length; i++) {
            x[i] = points[i][0];
            y[i] = points[i][1];
        }
        return [x, y];
    }

    function getSimilarity(newPeaks1, newPeaks2) {
        if (newPeaks1) setPeaks1(newPeaks1);
        if (newPeaks2) setPeaks2(newPeaks2);
        var result = {};
        result.diff = calculateDiff();
        result.extract1 = getExtract1();
        result.extract2 = getExtract2();
        result.extractInfo1 = getExtractInfo1();
        result.extractInfo2 = getExtractInfo2();
        result.similarity = calculateOverlapFromDiff(result.diff);
        result.widthBottom = widthBottom;
        result.widthTop = widthTop;
        return result;
    }

    /*
        This works mainly when you have a array1 that is fixed
        newPeaks2 have to be normalized ! (sum to 1)
     */
    function fastSimilarity(newPeaks2, from, to) {
        array1Extract = extract(array1, from, to);
        array2Extract = newPeaks2;
        if (common & COMMON_SECOND) array1Extract = getCommonArray(array1Extract, array2Extract, widthBottom);
        normalize(array1Extract);
        var diff = calculateDiff();
        return calculateOverlapFromDiff(diff);
    }

    this.setPeaks1 = setPeaks1;
    this.setPeaks2 = setPeaks2;
    this.getExtract1 = getExtract1;
    this.getExtract2 = getExtract2;
    this.getExtractInfo1 = getExtractInfo1;
    this.getExtractInfo2 = getExtractInfo2;
    this.setFromTo = setFromTo;
    this.setOptions = setOptions;
    this.setTrapezoid = setTrapezoid;
    this.getSimilarity = getSimilarity;
    this.getCommonArray = getCommonArray;

    this.fastSimilarity = fastSimilarity;
};

// returns an new array based on array1 where there is a peak of array2 at a distance under width/2
function getCommonArray(array1, array2, width) {
    var newArray = [[], []];
    var pos2 = 0;
    width /= 2;
    var j = 0;
    var array1Length = array1[0] ? array1[0].length : 0;
    var array2Length = array2[0] ? array2[0].length : 0;

    for (var i = 0; i < array1Length; i++) {
        while (pos2 < array2Length && array1[0][i] > array2[0][pos2] + width) {
            pos2++;
        }
        if (pos2 < array2Length && array1[0][i] > array2[0][pos2] - width) {
            newArray[0][j] = array1[0][i];
            newArray[1][j] = array1[1][i];
            j++;
        }
    }
    return newArray;
}

// Adapted from: http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect/1968345#1968345
function getIntersection(segment1, segment2) {
    var p0_x = segment1[0][0];
    var p0_y = segment1[0][1];
    var p1_x = segment1[1][0];
    var p1_y = segment1[1][1];
    var p2_x = segment2[0][0];
    var p2_y = segment2[0][1];
    var p3_x = segment2[1][0];
    var p3_y = segment2[1][1];

    var s1_x, s1_y, s2_x, s2_y;
    s1_x = p1_x - p0_x;
    s1_y = p1_y - p0_y;
    s2_x = p3_x - p2_x;
    s2_y = p3_y - p2_y;
    var s, t;
    s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
    t = (s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);
    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        return {
            x: p0_x + t * s1_x,
            y: p0_y + t * s1_y
        };
    }
    return null; // No collision
}

function normalize(array) {
    var min = Stat.min(array[1]);
    var max = Stat.max(array[1]);
    var sum = Stat.sum(array[1]);
    var length = array[1] ? array[1].length : 0;
    if (sum != 0) {
        for (var i = 0; i < length; i++) {
            array[1][i] /= sum;
        }
    }
    return {
        sum: sum,
        min: min,
        max: max
    };
}

// this method will systemtatically take care of both array
function commonExtractAndNormalize(array1, array2, width, from, to, common) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return {
        info: undefined,
        data: undefined
    };
    var extract1 = extract(array1, from, to);
    var extract2 = extract(array2, from, to);
    var common1, common2, info1, info2;
    if (common & COMMON_SECOND) {
        common1 = getCommonArray(extract1, extract2, width);
        info1 = normalize(common1);
    } else {
        common1 = extract1;
        info1 = normalize(common1);
    }
    if (common & COMMON_FIRST) {
        common2 = getCommonArray(extract2, extract1, width);
        info2 = normalize(common2);
    } else {
        common2 = extract2;
        info2 = normalize(common2);
    }

    return {
        info1: info1,
        info2: info2,
        data1: common1,
        data2: common2
    };
}

function extract(array, from, to) {
    var newArray = [[], []];
    var j = 0;
    var length = array[0] ? array[0].length : 0;
    for (var i = 0; i < length; i++) {
        if ((!from || array[0][i] >= from) && (!to || array[0][i] <= to)) {
            newArray[0][j] = array[0][i];
            newArray[1][j] = array[1][i];
            j++;
        }
    }
    return newArray;
}

function extractAndNormalize(array, from, to) {
    if (!Array.isArray(array)) return {
        info: undefined,
        data: undefined
    };
    var newArray = extract(array, from, to);
    var info = normalize(newArray);
    return {
        info: info,
        data: newArray
    };
}

function calculateOverlapFromDiff(diffs) {
    if (diffs[1].length === 0) return 0;
    var sumPos = 0;
    for (var i = 0; i < diffs[1].length; i++) {
        sumPos += Math.abs(diffs[1][i]);
    }
    return 1 - sumPos;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayStat = __webpack_require__(8);

function compareNumbers(a, b) {
    return a - b;
}

exports.max = function max(matrix) {
    var max = -Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) max = matrix[i][j];
        }
    }
    return max;
};

exports.min = function min(matrix) {
    var min = Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
        }
    }
    return min;
};

exports.minMax = function minMax(matrix) {
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
            if (matrix[i][j] > max) max = matrix[i][j];
        }
    }
    return {
        min: min,
        max: max
    };
};

exports.entropy = function entropy(matrix, eps) {
    if (typeof eps === 'undefined') {
        eps = 0;
    }
    var sum = 0,
        l1 = matrix.length,
        l2 = matrix[0].length;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            sum += matrix[i][j] * Math.log(matrix[i][j] + eps);
        }
    }
    return -sum;
};

exports.mean = function mean(matrix, dimension) {
    if (typeof dimension === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theMean,
        N,
        i,
        j;

    if (dimension === -1) {
        theMean = [0];
        N = rows * cols;
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theMean[0] += matrix[i][j];
            }
        }
        theMean[0] /= N;
    } else if (dimension === 0) {
        theMean = new Array(cols);
        N = rows;
        for (j = 0; j < cols; j++) {
            theMean[j] = 0;
            for (i = 0; i < rows; i++) {
                theMean[j] += matrix[i][j];
            }
            theMean[j] /= N;
        }
    } else if (dimension === 1) {
        theMean = new Array(rows);
        N = cols;
        for (j = 0; j < rows; j++) {
            theMean[j] = 0;
            for (i = 0; i < cols; i++) {
                theMean[j] += matrix[j][i];
            }
            theMean[j] /= N;
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theMean;
};

exports.sum = function sum(matrix, dimension) {
    if (typeof dimension === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theSum,
        i,
        j;

    if (dimension === -1) {
        theSum = [0];
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theSum[0] += matrix[i][j];
            }
        }
    } else if (dimension === 0) {
        theSum = new Array(cols);
        for (j = 0; j < cols; j++) {
            theSum[j] = 0;
            for (i = 0; i < rows; i++) {
                theSum[j] += matrix[i][j];
            }
        }
    } else if (dimension === 1) {
        theSum = new Array(rows);
        for (j = 0; j < rows; j++) {
            theSum[j] = 0;
            for (i = 0; i < cols; i++) {
                theSum[j] += matrix[j][i];
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theSum;
};

exports.product = function product(matrix, dimension) {
    if (typeof dimension === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theProduct,
        i,
        j;

    if (dimension === -1) {
        theProduct = [1];
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theProduct[0] *= matrix[i][j];
            }
        }
    } else if (dimension === 0) {
        theProduct = new Array(cols);
        for (j = 0; j < cols; j++) {
            theProduct[j] = 1;
            for (i = 0; i < rows; i++) {
                theProduct[j] *= matrix[i][j];
            }
        }
    } else if (dimension === 1) {
        theProduct = new Array(rows);
        for (j = 0; j < rows; j++) {
            theProduct[j] = 1;
            for (i = 0; i < cols; i++) {
                theProduct[j] *= matrix[j][i];
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theProduct;
};

exports.standardDeviation = function standardDeviation(matrix, means, unbiased) {
    var vari = exports.variance(matrix, means, unbiased),
        l = vari.length;
    for (var i = 0; i < l; i++) {
        vari[i] = Math.sqrt(vari[i]);
    }
    return vari;
};

exports.variance = function variance(matrix, means, unbiased) {
    if (typeof unbiased === 'undefined') {
        unbiased = true;
    }
    means = means || exports.mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum1 = 0,
            sum2 = 0,
            x = 0;
        for (var i = 0; i < rows; i++) {
            x = matrix[i][j] - means[j];
            sum1 += x;
            sum2 += x * x;
        }
        if (unbiased) {
            vari[j] = (sum2 - sum1 * sum1 / rows) / (rows - 1);
        } else {
            vari[j] = (sum2 - sum1 * sum1 / rows) / rows;
        }
    }
    return vari;
};

exports.median = function median(matrix) {
    var rows = matrix.length,
        cols = matrix[0].length;
    var medians = new Array(cols);

    for (var i = 0; i < cols; i++) {
        var data = new Array(rows);
        for (var j = 0; j < rows; j++) {
            data[j] = matrix[j][i];
        }
        data.sort(compareNumbers);
        var N = data.length;
        if (N % 2 === 0) {
            medians[i] = (data[N / 2] + data[N / 2 - 1]) * 0.5;
        } else {
            medians[i] = data[Math.floor(N / 2)];
        }
    }
    return medians;
};

exports.mode = function mode(matrix) {
    var rows = matrix.length,
        cols = matrix[0].length,
        modes = new Array(cols),
        i,
        j;
    for (i = 0; i < cols; i++) {
        var itemCount = new Array(rows);
        for (var k = 0; k < rows; k++) {
            itemCount[k] = 0;
        }
        var itemArray = new Array(rows);
        var count = 0;

        for (j = 0; j < rows; j++) {
            var index = itemArray.indexOf(matrix[j][i]);
            if (index >= 0) {
                itemCount[index]++;
            } else {
                itemArray[count] = matrix[j][i];
                itemCount[count] = 1;
                count++;
            }
        }

        var maxValue = 0,
            maxIndex = 0;
        for (j = 0; j < count; j++) {
            if (itemCount[j] > maxValue) {
                maxValue = itemCount[j];
                maxIndex = j;
            }
        }

        modes[i] = itemArray[maxIndex];
    }
    return modes;
};

exports.skewness = function skewness(matrix, unbiased) {
    if (typeof unbiased === 'undefined') unbiased = true;
    var means = exports.mean(matrix);
    var n = matrix.length,
        l = means.length;
    var skew = new Array(l);

    for (var j = 0; j < l; j++) {
        var s2 = 0,
            s3 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s3 += dev * dev * dev;
        }

        var m2 = s2 / n;
        var m3 = s3 / n;
        var g = m3 / Math.pow(m2, 3 / 2);

        if (unbiased) {
            var a = Math.sqrt(n * (n - 1));
            var b = n - 2;
            skew[j] = a / b * g;
        } else {
            skew[j] = g;
        }
    }
    return skew;
};

exports.kurtosis = function kurtosis(matrix, unbiased) {
    if (typeof unbiased === 'undefined') unbiased = true;
    var means = exports.mean(matrix);
    var n = matrix.length,
        m = matrix[0].length;
    var kurt = new Array(m);

    for (var j = 0; j < m; j++) {
        var s2 = 0,
            s4 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s4 += dev * dev * dev * dev;
        }
        var m2 = s2 / n;
        var m4 = s4 / n;

        if (unbiased) {
            var v = s2 / (n - 1);
            var a = n * (n + 1) / ((n - 1) * (n - 2) * (n - 3));
            var b = s4 / (v * v);
            var c = (n - 1) * (n - 1) / ((n - 2) * (n - 3));
            kurt[j] = a * b - 3 * c;
        } else {
            kurt[j] = m4 / (m2 * m2) - 3;
        }
    }
    return kurt;
};

exports.standardError = function standardError(matrix) {
    var samples = matrix.length;
    var standardDeviations = exports.standardDeviation(matrix);
    var l = standardDeviations.length;
    var standardErrors = new Array(l);
    var sqrtN = Math.sqrt(samples);

    for (var i = 0; i < l; i++) {
        standardErrors[i] = standardDeviations[i] / sqrtN;
    }
    return standardErrors;
};

exports.covariance = function covariance(matrix, dimension) {
    return exports.scatter(matrix, undefined, dimension);
};

exports.scatter = function scatter(matrix, divisor, dimension) {
    if (typeof dimension === 'undefined') {
        dimension = 0;
    }
    if (typeof divisor === 'undefined') {
        if (dimension === 0) {
            divisor = matrix.length - 1;
        } else if (dimension === 1) {
            divisor = matrix[0].length - 1;
        }
    }
    var means = exports.mean(matrix, dimension);
    var rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov,
        i,
        j,
        s,
        k;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
};

exports.correlation = function correlation(matrix) {
    var means = exports.mean(matrix),
        standardDeviations = exports.standardDeviation(matrix, true, means),
        scores = exports.zScores(matrix, means, standardDeviations),
        rows = matrix.length,
        cols = matrix[0].length,
        i,
        j;

    var cor = new Array(cols);
    for (i = 0; i < cols; i++) {
        cor[i] = new Array(cols);
    }
    for (i = 0; i < cols; i++) {
        for (j = i; j < cols; j++) {
            var c = 0;
            for (var k = 0, l = scores.length; k < l; k++) {
                c += scores[k][j] * scores[k][i];
            }
            c /= rows - 1;
            cor[i][j] = c;
            cor[j][i] = c;
        }
    }
    return cor;
};

exports.zScores = function zScores(matrix, means, standardDeviations) {
    means = means || exports.mean(matrix);
    if (typeof standardDeviations === 'undefined') standardDeviations = exports.standardDeviation(matrix, true, means);
    return exports.standardize(exports.center(matrix, means, false), standardDeviations, true);
};

exports.center = function center(matrix, means, inPlace) {
    means = means || exports.mean(matrix);
    var result = matrix,
        l = matrix.length,
        i,
        j,
        jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var row = result[i];
        for (j = 0, jj = row.length; j < jj; j++) {
            row[j] = matrix[i][j] - means[j];
        }
    }
    return result;
};

exports.standardize = function standardize(matrix, standardDeviations, inPlace) {
    if (typeof standardDeviations === 'undefined') standardDeviations = exports.standardDeviation(matrix);
    var result = matrix,
        l = matrix.length,
        i,
        j,
        jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var resultRow = result[i];
        var sourceRow = matrix[i];
        for (j = 0, jj = resultRow.length; j < jj; j++) {
            if (standardDeviations[j] !== 0 && !isNaN(standardDeviations[j])) {
                resultRow[j] = sourceRow[j] / standardDeviations[j];
            }
        }
    }
    return result;
};

exports.weightedVariance = function weightedVariance(matrix, weights) {
    var means = exports.mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum = 0;
        var a = 0,
            b = 0;

        for (var i = 0; i < rows; i++) {
            var z = matrix[i][j] - means[j];
            var w = weights[i];

            sum += w * (z * z);
            b += w;
            a += w * w;
        }

        vari[j] = sum * (b / (b * b - a));
    }

    return vari;
};

exports.weightedMean = function weightedMean(matrix, weights, dimension) {
    if (typeof dimension === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length,
        means,
        i,
        ii,
        j,
        w,
        row;

    if (dimension === 0) {
        means = new Array(cols);
        for (i = 0; i < cols; i++) {
            means[i] = 0;
        }
        for (i = 0; i < rows; i++) {
            row = matrix[i];
            w = weights[i];
            for (j = 0; j < cols; j++) {
                means[j] += row[j] * w;
            }
        }
    } else if (dimension === 1) {
        means = new Array(rows);
        for (i = 0; i < rows; i++) {
            means[i] = 0;
        }
        for (j = 0; j < rows; j++) {
            row = matrix[j];
            w = weights[j];
            for (i = 0; i < cols; i++) {
                means[j] += row[i] * w;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    var weightSum = arrayStat.sum(weights);
    if (weightSum !== 0) {
        for (i = 0, ii = means.length; i < ii; i++) {
            means[i] /= weightSum;
        }
    }
    return means;
};

exports.weightedCovariance = function weightedCovariance(matrix, weights, means, dimension) {
    dimension = dimension || 0;
    means = means || exports.weightedMean(matrix, weights, dimension);
    var s1 = 0,
        s2 = 0;
    for (var i = 0, ii = weights.length; i < ii; i++) {
        s1 += weights[i];
        s2 += weights[i] * weights[i];
    }
    var factor = s1 / (s1 * s1 - s2);
    return exports.weightedScatter(matrix, weights, means, factor, dimension);
};

exports.weightedScatter = function weightedScatter(matrix, weights, means, factor, dimension) {
    dimension = dimension || 0;
    means = means || exports.weightedMean(matrix, weights, dimension);
    if (typeof factor === 'undefined') {
        factor = 1;
    }
    var rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov,
        i,
        j,
        k,
        s;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += weights[k] * (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += weights[k] * (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var request = __webpack_require__(9)(__webpack_require__(10), Promise);

function getPubchemStats(id) {
    return request.get('https://pubchem.cheminfo.org/mfStats/search?id=' + id).then(function (results) {
        return results.body.result;
    });
}

module.exports = getPubchemStats;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function (arr, fn, initial) {
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3 ? initial : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }

  return curr;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = __webpack_require__(11);

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

exports.clearTimeout = function _clearTimeout() {
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Force given parser
 *
 * Sets the body parser no matter type.
 *
 * @param {Function}
 * @api public
 */

exports.parse = function parse(fn) {
  this._parser = fn;
  return this;
};

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

exports.timeout = function timeout(ms) {
  this._timeout = ms;
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

exports.then = function then(fulfill, reject) {
  return this.end(function (err, res) {
    err ? reject(err) : fulfill(res);
  });
};

/**
 * Allow for extension
 */

exports.use = function use(fn) {
  fn(this);
  return this;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

exports.get = function (field) {
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

exports.getHeader = exports.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

exports.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
exports.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
exports.field = function (name, val) {
  this._getFormData().append(name, val);
  return this;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// The node and browser modules expose versions of this with the
// appropriate constructor function bound as first argument
/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(RequestConstructor, method, url) {
  // callback
  if ('function' == typeof url) {
    return new RequestConstructor('GET', method).end(url);
  }

  // url first
  if (2 == arguments.length) {
    return new RequestConstructor('GET', method);
  }

  return new RequestConstructor(method, url);
}

module.exports = request;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CC = __webpack_require__(0);
var MFProcessor = exports.MFProcessor = __webpack_require__(6);
var bestResults = exports.bestResults = __webpack_require__(3);

/*
 mfFromMonoisotopicMassPubchem
 We will extend mfFromMonoisotopicMass in order to deal with pubchem statistics:
 * experimental : an array of [[x1,y1],[x2,y2],...] or [[x1,x2,x3,...][y1,y2,y3,...]]
 * widthTop : top width of the trapezoid
 * widthBottom : bottom width of the trapezoid
 * from : mass "from" which calculate the similarity
 * to : mass "to" which calculate the similarity
 * As an alternative the from / to parameters can be calculated based target mass
 *
 * decimalsPPM : number of decimals for PPM
 * decimalsMass : number odecimals for the mass
 */
function mfFromMonoisotopicMassPubchemPromise(mass, pubchemStats, options) {
    var mfResults = CC.mfFromMonoisotopicMass(mass, options);
    // retrieve the statistics depending the mass
    var stats = getStatsForMass(mass, pubchemStats.allStats).stats;
    var results = mfResults.results;
    for (var i = 0; i < results.length; i++) {
        var result = results[i];
        result.rank = i + 1;
        result.absppm = Math.abs(result.ppm);
        result.pubchem = {};
        addAtoms(result);
        addRatios(result, stats);
        addRatiosScore(result, stats);
    }
    return mfResults;
}

function addAtoms(result) {
    var mf = result.mf;
    var parts = mf.split(/(?=[A-Z])/);
    var atoms = {};
    for (var part of parts) {
        var label = part.replace(/[0-9]/g, '');
        var number = part.replace(/[^0-9]/g, '') * 1 || 1;
        atoms[label] = number;
    }
    result.atoms = atoms;
}

function addRatios(result, stats) {
    var ratios = result.pubchem.ratios = {};

    for (var j = 0; j < stats.length; j++) {
        var stat = stats[j];
        var kind = stat.kind;
        var sd = stat.standardDeviation;
        var mean = stat.mean;
        var topAtoms = kind.split("/")[0];
        var bottomAtoms = kind.split("/")[1];
        var topAtomsArray = topAtoms.split(/(?=[A-Z])/);
        var bottomAtomsArray = bottomAtoms.split(/(?=[A-Z])/);
        var top = getSumAtoms(topAtomsArray, result.atoms);
        var bottom = getSumAtoms(bottomAtomsArray, result.atoms);
        if (top !== 0 && bottom !== 0) {
            var ratio = Math.log2(top / bottom);
            ratios[kind] = {
                sparkline: [-8, mean - 3 * sd, mean - 3 * sd, mean, mean + 3 * sd, mean + 3 * sd, 8],
                options: {
                    "type": "box",
                    "raw": false,
                    "boxLineColor": "lightgrey",
                    "boxFillColor": "lightgrey",
                    "whiskerColor": "rgba(0,0,0,0)",
                    "medianColor": "black",
                    "lineColor": "grey",
                    "target": ratio + 0.0000001,
                    "targetColor": "red"
                },
                value: ratio
            };
        }
    }
}

function getStatsForMass(targetMass, allStats) {
    for (var stats of allStats) {
        if (targetMass >= stats.minMass && targetMass < stats.maxMass) return stats;
    }
}

function getSumAtoms(atoms, mf) {
    var sum = 0;
    for (var k = 0; k < atoms.length; k++) {
        if (mf[atoms[k]]) sum += mf[atoms[k]];
    }
    return sum;
}

function addRatiosScore(result, stats) {
    var score = 1;
    var ratios = result.pubchem.ratios;
    var total = 0;
    for (var i = 0; i < stats.length; ++i) {
        // For all the MF in stats
        var kind = stats[i].kind;
        var ratio = ratios[kind];
        var mean = stats[i].mean;
        var sd = stats[i].standardDeviation;

        if (ratio) {
            var currentRatio = ratio.value;
            if (currentRatio !== 0) {
                total++;
                var distance = Math.abs(currentRatio - mean) / sd;
                var currentScore = Math.pow(0.8, distance);
                score *= currentScore;
            }
            ratios[kind].score = currentScore;
        }
    }
    result.pubchem.score = Math.pow(score, 1 / total);
}

module.exports = mfFromMonoisotopicMassPubchemPromise;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getReferenceList = __webpack_require__(12);

function getContaminantsReferenceList() {
    return getReferenceList('https://googledocs.cheminfo.org/spreadsheets/d/1LrJCl9-xSZKhGA9Y8nKVkYwB-mEOHBkTXg5qYXeFpZY/export?format=tsv', 'https://googledocs.cheminfo.org/spreadsheets/d/1C_H9aiJyu9M9in7sHMOaz-d3Sv758rE72oLxEKH9ioA/export?format=tsv');
}

module.exports = getContaminantsReferenceList;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*@license
	Papa Parse
	v4.4.0
	https://github.com/mholt/PapaParse
	License: MIT
*/
(function (root, factory) {
	/* globals define */
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module === 'object' && typeof exports !== 'undefined') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.Papa = factory();
	}
})(undefined, function () {
	'use strict';

	var global = function () {
		// alternative method, similar to `Function('return this')()`
		// but without using `eval` (which is disabled when
		// using Content Security Policy).

		if (typeof self !== 'undefined') {
			return self;
		}
		if (typeof window !== 'undefined') {
			return window;
		}
		if (typeof global !== 'undefined') {
			return global;
		}

		// When running tests none of the above have been defined
		return {};
	}();

	var IS_WORKER = !global.document && !!global.postMessage,
	    IS_PAPA_WORKER = IS_WORKER && /(\?|&)papaworker(=|&|$)/.test(global.location.search),
	    LOADED_SYNC = false,
	    AUTO_SCRIPT_PATH;
	var workers = {},
	    workerIdCounter = 0;

	var Papa = {};

	Papa.parse = CsvToJson;
	Papa.unparse = JsonToCsv;

	Papa.RECORD_SEP = String.fromCharCode(30);
	Papa.UNIT_SEP = String.fromCharCode(31);
	Papa.BYTE_ORDER_MARK = '\ufeff';
	Papa.BAD_DELIMITERS = ['\r', '\n', '"', Papa.BYTE_ORDER_MARK];
	Papa.WORKERS_SUPPORTED = !IS_WORKER && !!global.Worker;
	Papa.SCRIPT_PATH = null; // Must be set by your code if you use workers and this lib is loaded asynchronously

	// Configurable chunk sizes for local and remote files, respectively
	Papa.LocalChunkSize = 1024 * 1024 * 10; // 10 MB
	Papa.RemoteChunkSize = 1024 * 1024 * 5; // 5 MB
	Papa.DefaultDelimiter = ','; // Used if not specified and detection fails

	// Exposed for testing and development only
	Papa.Parser = Parser;
	Papa.ParserHandle = ParserHandle;
	Papa.NetworkStreamer = NetworkStreamer;
	Papa.FileStreamer = FileStreamer;
	Papa.StringStreamer = StringStreamer;
	Papa.ReadableStreamStreamer = ReadableStreamStreamer;

	if (global.jQuery) {
		var $ = global.jQuery;
		$.fn.parse = function (options) {
			var config = options.config || {};
			var queue = [];

			this.each(function (idx) {
				var supported = $(this).prop('tagName').toUpperCase() === 'INPUT' && $(this).attr('type').toLowerCase() === 'file' && global.FileReader;

				if (!supported || !this.files || this.files.length === 0) return true; // continue to next input element

				for (var i = 0; i < this.files.length; i++) {
					queue.push({
						file: this.files[i],
						inputElem: this,
						instanceConfig: $.extend({}, config)
					});
				}
			});

			parseNextFile(); // begin parsing
			return this; // maintains chainability


			function parseNextFile() {
				if (queue.length === 0) {
					if (isFunction(options.complete)) options.complete();
					return;
				}

				var f = queue[0];

				if (isFunction(options.before)) {
					var returned = options.before(f.file, f.inputElem);

					if (typeof returned === 'object') {
						if (returned.action === 'abort') {
							error('AbortError', f.file, f.inputElem, returned.reason);
							return; // Aborts all queued files immediately
						} else if (returned.action === 'skip') {
							fileComplete(); // parse the next file in the queue, if any
							return;
						} else if (typeof returned.config === 'object') f.instanceConfig = $.extend(f.instanceConfig, returned.config);
					} else if (returned === 'skip') {
						fileComplete(); // parse the next file in the queue, if any
						return;
					}
				}

				// Wrap up the user's complete callback, if any, so that ours also gets executed
				var userCompleteFunc = f.instanceConfig.complete;
				f.instanceConfig.complete = function (results) {
					if (isFunction(userCompleteFunc)) userCompleteFunc(results, f.file, f.inputElem);
					fileComplete();
				};

				Papa.parse(f.file, f.instanceConfig);
			}

			function error(name, file, elem, reason) {
				if (isFunction(options.error)) options.error({ name: name }, file, elem, reason);
			}

			function fileComplete() {
				queue.splice(0, 1);
				parseNextFile();
			}
		};
	}

	if (IS_PAPA_WORKER) {
		global.onmessage = workerThreadReceivedMessage;
	} else if (Papa.WORKERS_SUPPORTED) {
		AUTO_SCRIPT_PATH = getScriptPath();

		// Check if the script was loaded synchronously
		if (!document.body) {
			// Body doesn't exist yet, must be synchronous
			LOADED_SYNC = true;
		} else {
			document.addEventListener('DOMContentLoaded', function () {
				LOADED_SYNC = true;
			}, true);
		}
	}

	function CsvToJson(_input, _config) {
		_config = _config || {};
		var dynamicTyping = _config.dynamicTyping || false;
		if (isFunction(dynamicTyping)) {
			_config.dynamicTypingFunction = dynamicTyping;
			// Will be filled on first row call
			dynamicTyping = {};
		}
		_config.dynamicTyping = dynamicTyping;

		if (_config.worker && Papa.WORKERS_SUPPORTED) {
			var w = newWorker();

			w.userStep = _config.step;
			w.userChunk = _config.chunk;
			w.userComplete = _config.complete;
			w.userError = _config.error;

			_config.step = isFunction(_config.step);
			_config.chunk = isFunction(_config.chunk);
			_config.complete = isFunction(_config.complete);
			_config.error = isFunction(_config.error);
			delete _config.worker; // prevent infinite loop

			w.postMessage({
				input: _input,
				config: _config,
				workerId: w.id
			});

			return;
		}

		var streamer = null;
		if (typeof _input === 'string') {
			if (_config.download) streamer = new NetworkStreamer(_config);else streamer = new StringStreamer(_config);
		} else if (_input.readable === true && isFunction(_input.read) && isFunction(_input.on)) {
			streamer = new ReadableStreamStreamer(_config);
		} else if (global.File && _input instanceof File || _input instanceof Object) // ...Safari. (see issue #106)
			streamer = new FileStreamer(_config);

		return streamer.stream(_input);
	}

	function JsonToCsv(_input, _config) {
		// Default configuration

		/** whether to surround every datum with quotes */
		var _quotes = false;

		/** whether to write headers */
		var _writeHeader = true;

		/** delimiting character */
		var _delimiter = ',';

		/** newline character(s) */
		var _newline = '\r\n';

		/** quote character */
		var _quoteChar = '"';

		unpackConfig();

		var quoteCharRegex = new RegExp(_quoteChar, 'g');

		if (typeof _input === 'string') _input = JSON.parse(_input);

		if (_input instanceof Array) {
			if (!_input.length || _input[0] instanceof Array) return serialize(null, _input);else if (typeof _input[0] === 'object') return serialize(objectKeys(_input[0]), _input);
		} else if (typeof _input === 'object') {
			if (typeof _input.data === 'string') _input.data = JSON.parse(_input.data);

			if (_input.data instanceof Array) {
				if (!_input.fields) _input.fields = _input.meta && _input.meta.fields;

				if (!_input.fields) _input.fields = _input.data[0] instanceof Array ? _input.fields : objectKeys(_input.data[0]);

				if (!(_input.data[0] instanceof Array) && typeof _input.data[0] !== 'object') _input.data = [_input.data]; // handles input like [1,2,3] or ['asdf']
			}

			return serialize(_input.fields || [], _input.data || []);
		}

		// Default (any valid paths should return before this)
		throw 'exception: Unable to serialize unrecognized input';

		function unpackConfig() {
			if (typeof _config !== 'object') return;

			if (typeof _config.delimiter === 'string' && _config.delimiter.length === 1 && Papa.BAD_DELIMITERS.indexOf(_config.delimiter) === -1) {
				_delimiter = _config.delimiter;
			}

			if (typeof _config.quotes === 'boolean' || _config.quotes instanceof Array) _quotes = _config.quotes;

			if (typeof _config.newline === 'string') _newline = _config.newline;

			if (typeof _config.quoteChar === 'string') _quoteChar = _config.quoteChar;

			if (typeof _config.header === 'boolean') _writeHeader = _config.header;
		}

		/** Turns an object's keys into an array */
		function objectKeys(obj) {
			if (typeof obj !== 'object') return [];
			var keys = [];
			for (var key in obj) {
				keys.push(key);
			}return keys;
		}

		/** The double for loop that iterates the data and writes out a CSV string including header row */
		function serialize(fields, data) {
			var csv = '';

			if (typeof fields === 'string') fields = JSON.parse(fields);
			if (typeof data === 'string') data = JSON.parse(data);

			var hasHeader = fields instanceof Array && fields.length > 0;
			var dataKeyedByField = !(data[0] instanceof Array);

			// If there a header row, write it first
			if (hasHeader && _writeHeader) {
				for (var i = 0; i < fields.length; i++) {
					if (i > 0) csv += _delimiter;
					csv += safe(fields[i], i);
				}
				if (data.length > 0) csv += _newline;
			}

			// Then write out the data
			for (var row = 0; row < data.length; row++) {
				var maxCol = hasHeader ? fields.length : data[row].length;

				for (var col = 0; col < maxCol; col++) {
					if (col > 0) csv += _delimiter;
					var colIdx = hasHeader && dataKeyedByField ? fields[col] : col;
					csv += safe(data[row][colIdx], col);
				}

				if (row < data.length - 1) csv += _newline;
			}

			return csv;
		}

		/** Encloses a value around quotes if needed (makes a value safe for CSV insertion) */
		function safe(str, col) {
			if (typeof str === 'undefined' || str === null) return '';

			str = str.toString().replace(quoteCharRegex, _quoteChar + _quoteChar);

			var needsQuotes = typeof _quotes === 'boolean' && _quotes || _quotes instanceof Array && _quotes[col] || hasAny(str, Papa.BAD_DELIMITERS) || str.indexOf(_delimiter) > -1 || str.charAt(0) === ' ' || str.charAt(str.length - 1) === ' ';

			return needsQuotes ? _quoteChar + str + _quoteChar : str;
		}

		function hasAny(str, substrings) {
			for (var i = 0; i < substrings.length; i++) {
				if (str.indexOf(substrings[i]) > -1) return true;
			}return false;
		}
	}

	/** ChunkStreamer is the base prototype for various streamer implementations. */
	function ChunkStreamer(config) {
		this._handle = null;
		this._finished = false;
		this._completed = false;
		this._input = null;
		this._baseIndex = 0;
		this._partialLine = '';
		this._rowCount = 0;
		this._start = 0;
		this._nextChunk = null;
		this.isFirstChunk = true;
		this._completeResults = {
			data: [],
			errors: [],
			meta: {}
		};
		replaceConfig.call(this, config);

		this.parseChunk = function (chunk, isFakeChunk) {
			// First chunk pre-processing
			if (this.isFirstChunk && isFunction(this._config.beforeFirstChunk)) {
				var modifiedChunk = this._config.beforeFirstChunk(chunk);
				if (modifiedChunk !== undefined) chunk = modifiedChunk;
			}
			this.isFirstChunk = false;

			// Rejoin the line we likely just split in two by chunking the file
			var aggregate = this._partialLine + chunk;
			this._partialLine = '';

			var results = this._handle.parse(aggregate, this._baseIndex, !this._finished);

			if (this._handle.paused() || this._handle.aborted()) return;

			var lastIndex = results.meta.cursor;

			if (!this._finished) {
				this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
				this._baseIndex = lastIndex;
			}

			if (results && results.data) this._rowCount += results.data.length;

			var finishedIncludingPreview = this._finished || this._config.preview && this._rowCount >= this._config.preview;

			if (IS_PAPA_WORKER) {
				global.postMessage({
					results: results,
					workerId: Papa.WORKER_ID,
					finished: finishedIncludingPreview
				});
			} else if (isFunction(this._config.chunk) && !isFakeChunk) {
				this._config.chunk(results, this._handle);
				if (this._handle.paused() || this._handle.aborted()) return;
				results = undefined;
				this._completeResults = undefined;
			}

			if (!this._config.step && !this._config.chunk) {
				this._completeResults.data = this._completeResults.data.concat(results.data);
				this._completeResults.errors = this._completeResults.errors.concat(results.errors);
				this._completeResults.meta = results.meta;
			}

			if (!this._completed && finishedIncludingPreview && isFunction(this._config.complete) && (!results || !results.meta.aborted)) {
				this._config.complete(this._completeResults, this._input);
				this._completed = true;
			}

			if (!finishedIncludingPreview && (!results || !results.meta.paused)) this._nextChunk();

			return results;
		};

		this._sendError = function (error) {
			if (isFunction(this._config.error)) this._config.error(error);else if (IS_PAPA_WORKER && this._config.error) {
				global.postMessage({
					workerId: Papa.WORKER_ID,
					error: error,
					finished: false
				});
			}
		};

		function replaceConfig(config) {
			// Deep-copy the config so we can edit it
			var configCopy = copy(config);
			configCopy.chunkSize = parseInt(configCopy.chunkSize); // parseInt VERY important so we don't concatenate strings!
			if (!config.step && !config.chunk) configCopy.chunkSize = null; // disable Range header if not streaming; bad values break IIS - see issue #196
			this._handle = new ParserHandle(configCopy);
			this._handle.streamer = this;
			this._config = configCopy; // persist the copy to the caller
		}
	}

	function NetworkStreamer(config) {
		config = config || {};
		if (!config.chunkSize) config.chunkSize = Papa.RemoteChunkSize;
		ChunkStreamer.call(this, config);

		var xhr;

		if (IS_WORKER) {
			this._nextChunk = function () {
				this._readChunk();
				this._chunkLoaded();
			};
		} else {
			this._nextChunk = function () {
				this._readChunk();
			};
		}

		this.stream = function (url) {
			this._input = url;
			this._nextChunk(); // Starts streaming
		};

		this._readChunk = function () {
			if (this._finished) {
				this._chunkLoaded();
				return;
			}

			xhr = new XMLHttpRequest();

			if (this._config.withCredentials) {
				xhr.withCredentials = this._config.withCredentials;
			}

			if (!IS_WORKER) {
				xhr.onload = bindFunction(this._chunkLoaded, this);
				xhr.onerror = bindFunction(this._chunkError, this);
			}

			xhr.open('GET', this._input, !IS_WORKER);
			// Headers can only be set when once the request state is OPENED
			if (this._config.downloadRequestHeaders) {
				var headers = this._config.downloadRequestHeaders;

				for (var headerName in headers) {
					xhr.setRequestHeader(headerName, headers[headerName]);
				}
			}

			if (this._config.chunkSize) {
				var end = this._start + this._config.chunkSize - 1; // minus one because byte range is inclusive
				xhr.setRequestHeader('Range', 'bytes=' + this._start + '-' + end);
				xhr.setRequestHeader('If-None-Match', 'webkit-no-cache'); // https://bugs.webkit.org/show_bug.cgi?id=82672
			}

			try {
				xhr.send();
			} catch (err) {
				this._chunkError(err.message);
			}

			if (IS_WORKER && xhr.status === 0) this._chunkError();else this._start += this._config.chunkSize;
		};

		this._chunkLoaded = function () {
			if (xhr.readyState !== 4) return;

			if (xhr.status < 200 || xhr.status >= 400) {
				this._chunkError();
				return;
			}

			this._finished = !this._config.chunkSize || this._start > getFileSize(xhr);
			this.parseChunk(xhr.responseText);
		};

		this._chunkError = function (errorMessage) {
			var errorText = xhr.statusText || errorMessage;
			this._sendError(new Error(errorText));
		};

		function getFileSize(xhr) {
			var contentRange = xhr.getResponseHeader('Content-Range');
			if (contentRange === null) {
				// no content range, then finish!
				return -1;
			}
			return parseInt(contentRange.substr(contentRange.lastIndexOf('/') + 1));
		}
	}
	NetworkStreamer.prototype = Object.create(ChunkStreamer.prototype);
	NetworkStreamer.prototype.constructor = NetworkStreamer;

	function FileStreamer(config) {
		config = config || {};
		if (!config.chunkSize) config.chunkSize = Papa.LocalChunkSize;
		ChunkStreamer.call(this, config);

		var reader, slice;

		// FileReader is better than FileReaderSync (even in worker) - see http://stackoverflow.com/q/24708649/1048862
		// But Firefox is a pill, too - see issue #76: https://github.com/mholt/PapaParse/issues/76
		var usingAsyncReader = typeof FileReader !== 'undefined'; // Safari doesn't consider it a function - see issue #105

		this.stream = function (file) {
			this._input = file;
			slice = file.slice || file.webkitSlice || file.mozSlice;

			if (usingAsyncReader) {
				reader = new FileReader(); // Preferred method of reading files, even in workers
				reader.onload = bindFunction(this._chunkLoaded, this);
				reader.onerror = bindFunction(this._chunkError, this);
			} else reader = new FileReaderSync(); // Hack for running in a web worker in Firefox

			this._nextChunk(); // Starts streaming
		};

		this._nextChunk = function () {
			if (!this._finished && (!this._config.preview || this._rowCount < this._config.preview)) this._readChunk();
		};

		this._readChunk = function () {
			var input = this._input;
			if (this._config.chunkSize) {
				var end = Math.min(this._start + this._config.chunkSize, this._input.size);
				input = slice.call(input, this._start, end);
			}
			var txt = reader.readAsText(input, this._config.encoding);
			if (!usingAsyncReader) this._chunkLoaded({ target: { result: txt } }); // mimic the async signature
		};

		this._chunkLoaded = function (event) {
			// Very important to increment start each time before handling results
			this._start += this._config.chunkSize;
			this._finished = !this._config.chunkSize || this._start >= this._input.size;
			this.parseChunk(event.target.result);
		};

		this._chunkError = function () {
			this._sendError(reader.error);
		};
	}
	FileStreamer.prototype = Object.create(ChunkStreamer.prototype);
	FileStreamer.prototype.constructor = FileStreamer;

	function StringStreamer(config) {
		config = config || {};
		ChunkStreamer.call(this, config);

		var remaining;
		this.stream = function (s) {
			remaining = s;
			return this._nextChunk();
		};
		this._nextChunk = function () {
			if (this._finished) return;
			var size = this._config.chunkSize;
			var chunk = size ? remaining.substr(0, size) : remaining;
			remaining = size ? remaining.substr(size) : '';
			this._finished = !remaining;
			return this.parseChunk(chunk);
		};
	}
	StringStreamer.prototype = Object.create(StringStreamer.prototype);
	StringStreamer.prototype.constructor = StringStreamer;

	function ReadableStreamStreamer(config) {
		config = config || {};

		ChunkStreamer.call(this, config);

		var queue = [];
		var parseOnData = true;
		var streamHasEnded = false;

		this.pause = function () {
			ChunkStreamer.prototype.pause.apply(this, arguments);
			this._input.pause();
		};

		this.resume = function () {
			ChunkStreamer.prototype.resume.apply(this, arguments);
			this._input.resume();
		};

		this.stream = function (stream) {
			this._input = stream;

			this._input.on('data', this._streamData);
			this._input.on('end', this._streamEnd);
			this._input.on('error', this._streamError);
		};

		this._checkIsFinished = function () {
			if (streamHasEnded && queue.length === 1) {
				this._finished = true;
			}
		};

		this._nextChunk = function () {
			this._checkIsFinished();
			if (queue.length) {
				this.parseChunk(queue.shift());
			} else {
				parseOnData = true;
			}
		};

		this._streamData = bindFunction(function (chunk) {
			try {
				queue.push(typeof chunk === 'string' ? chunk : chunk.toString(this._config.encoding));

				if (parseOnData) {
					parseOnData = false;
					this._checkIsFinished();
					this.parseChunk(queue.shift());
				}
			} catch (error) {
				this._streamError(error);
			}
		}, this);

		this._streamError = bindFunction(function (error) {
			this._streamCleanUp();
			this._sendError(error);
		}, this);

		this._streamEnd = bindFunction(function () {
			this._streamCleanUp();
			streamHasEnded = true;
			this._streamData('');
		}, this);

		this._streamCleanUp = bindFunction(function () {
			this._input.removeListener('data', this._streamData);
			this._input.removeListener('end', this._streamEnd);
			this._input.removeListener('error', this._streamError);
		}, this);
	}
	ReadableStreamStreamer.prototype = Object.create(ChunkStreamer.prototype);
	ReadableStreamStreamer.prototype.constructor = ReadableStreamStreamer;

	// Use one ParserHandle per entire CSV file or string
	function ParserHandle(_config) {
		// One goal is to minimize the use of regular expressions...
		var FLOAT = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i;

		var self = this;
		var _stepCounter = 0; // Number of times step was called (number of rows parsed)
		var _input; // The input being parsed
		var _parser; // The core parser being used
		var _paused = false; // Whether we are paused or not
		var _aborted = false; // Whether the parser has aborted or not
		var _delimiterError; // Temporary state between delimiter detection and processing results
		var _fields = []; // Fields are from the header row of the input, if there is one
		var _results = { // The last results returned from the parser
			data: [],
			errors: [],
			meta: {}
		};

		if (isFunction(_config.step)) {
			var userStep = _config.step;
			_config.step = function (results) {
				_results = results;

				if (needsHeaderRow()) processResults();else // only call user's step function after header row
					{
						processResults();

						// It's possbile that this line was empty and there's no row here after all
						if (_results.data.length === 0) return;

						_stepCounter += results.data.length;
						if (_config.preview && _stepCounter > _config.preview) _parser.abort();else userStep(_results, self);
					}
			};
		}

		/**
   * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
   * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
   * when an input comes in multiple chunks, like from a file.
   */
		this.parse = function (input, baseIndex, ignoreLastRow) {
			if (!_config.newline) _config.newline = guessLineEndings(input);

			_delimiterError = false;
			if (!_config.delimiter) {
				var delimGuess = guessDelimiter(input, _config.newline, _config.skipEmptyLines);
				if (delimGuess.successful) _config.delimiter = delimGuess.bestDelimiter;else {
					_delimiterError = true; // add error after parsing (otherwise it would be overwritten)
					_config.delimiter = Papa.DefaultDelimiter;
				}
				_results.meta.delimiter = _config.delimiter;
			} else if (isFunction(_config.delimiter)) {
				_config.delimiter = _config.delimiter(input);
				_results.meta.delimiter = _config.delimiter;
			}

			var parserConfig = copy(_config);
			if (_config.preview && _config.header) parserConfig.preview++; // to compensate for header row

			_input = input;
			_parser = new Parser(parserConfig);
			_results = _parser.parse(_input, baseIndex, ignoreLastRow);
			processResults();
			return _paused ? { meta: { paused: true } } : _results || { meta: { paused: false } };
		};

		this.paused = function () {
			return _paused;
		};

		this.pause = function () {
			_paused = true;
			_parser.abort();
			_input = _input.substr(_parser.getCharIndex());
		};

		this.resume = function () {
			_paused = false;
			self.streamer.parseChunk(_input, true);
		};

		this.aborted = function () {
			return _aborted;
		};

		this.abort = function () {
			_aborted = true;
			_parser.abort();
			_results.meta.aborted = true;
			if (isFunction(_config.complete)) _config.complete(_results);
			_input = '';
		};

		function processResults() {
			if (_results && _delimiterError) {
				addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + Papa.DefaultDelimiter + '\'');
				_delimiterError = false;
			}

			if (_config.skipEmptyLines) {
				for (var i = 0; i < _results.data.length; i++) {
					if (_results.data[i].length === 1 && _results.data[i][0] === '') _results.data.splice(i--, 1);
				}
			}

			if (needsHeaderRow()) fillHeaderFields();

			return applyHeaderAndDynamicTyping();
		}

		function needsHeaderRow() {
			return _config.header && _fields.length === 0;
		}

		function fillHeaderFields() {
			if (!_results) return;
			for (var i = 0; needsHeaderRow() && i < _results.data.length; i++) {
				for (var j = 0; j < _results.data[i].length; j++) {
					var header = _results.data[i][j];

					if (_config.trimHeaders) {
						header = header.trim();
					}

					_fields.push(header);
				}
			}_results.data.splice(0, 1);
		}

		function shouldApplyDynamicTyping(field) {
			// Cache function values to avoid calling it for each row
			if (_config.dynamicTypingFunction && _config.dynamicTyping[field] === undefined) {
				_config.dynamicTyping[field] = _config.dynamicTypingFunction(field);
			}
			return (_config.dynamicTyping[field] || _config.dynamicTyping) === true;
		}

		function parseDynamic(field, value) {
			if (shouldApplyDynamicTyping(field)) {
				if (value === 'true' || value === 'TRUE') return true;else if (value === 'false' || value === 'FALSE') return false;else if (FLOAT.test(value)) {
					return parseFloat(value);
				} else {
					return value === '' ? null : value;
				}
			}
			return value;
		}

		function applyHeaderAndDynamicTyping() {
			if (!_results || !_config.header && !_config.dynamicTyping) return _results;

			for (var i = 0; i < _results.data.length; i++) {
				var row = _config.header ? {} : [];

				var j;
				for (j = 0; j < _results.data[i].length; j++) {
					var field = j;
					var value = _results.data[i][j];

					if (_config.header) field = j >= _fields.length ? '__parsed_extra' : _fields[j];

					value = parseDynamic(field, value);

					if (field === '__parsed_extra') {
						row[field] = row[field] || [];
						row[field].push(value);
					} else row[field] = value;
				}

				_results.data[i] = row;

				if (_config.header) {
					if (j > _fields.length) addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, i);else if (j < _fields.length) addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, i);
				}
			}

			if (_config.header && _results.meta) _results.meta.fields = _fields;
			return _results;
		}

		function guessDelimiter(input, newline, skipEmptyLines) {
			var delimChoices = [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP];
			var bestDelim, bestDelta, fieldCountPrevRow;

			for (var i = 0; i < delimChoices.length; i++) {
				var delim = delimChoices[i];
				var delta = 0,
				    avgFieldCount = 0,
				    emptyLinesCount = 0;
				fieldCountPrevRow = undefined;

				var preview = new Parser({
					delimiter: delim,
					newline: newline,
					preview: 10
				}).parse(input);

				for (var j = 0; j < preview.data.length; j++) {
					if (skipEmptyLines && preview.data[j].length === 1 && preview.data[j][0].length === 0) {
						emptyLinesCount++;
						continue;
					}
					var fieldCount = preview.data[j].length;
					avgFieldCount += fieldCount;

					if (typeof fieldCountPrevRow === 'undefined') {
						fieldCountPrevRow = fieldCount;
						continue;
					} else if (fieldCount > 1) {
						delta += Math.abs(fieldCount - fieldCountPrevRow);
						fieldCountPrevRow = fieldCount;
					}
				}

				if (preview.data.length > 0) avgFieldCount /= preview.data.length - emptyLinesCount;

				if ((typeof bestDelta === 'undefined' || delta < bestDelta) && avgFieldCount > 1.99) {
					bestDelta = delta;
					bestDelim = delim;
				}
			}

			_config.delimiter = bestDelim;

			return {
				successful: !!bestDelim,
				bestDelimiter: bestDelim
			};
		}

		function guessLineEndings(input) {
			input = input.substr(0, 1024 * 1024); // max length 1 MB

			var r = input.split('\r');

			var n = input.split('\n');

			var nAppearsFirst = n.length > 1 && n[0].length < r[0].length;

			if (r.length === 1 || nAppearsFirst) return '\n';

			var numWithN = 0;
			for (var i = 0; i < r.length; i++) {
				if (r[i][0] === '\n') numWithN++;
			}

			return numWithN >= r.length / 2 ? '\r\n' : '\r';
		}

		function addError(type, code, msg, row) {
			_results.errors.push({
				type: type,
				code: code,
				message: msg,
				row: row
			});
		}
	}

	/** The core parser implements speedy and correct CSV parsing */
	function Parser(config) {
		// Unpack the config object
		config = config || {};
		var delim = config.delimiter;
		var newline = config.newline;
		var comments = config.comments;
		var step = config.step;
		var preview = config.preview;
		var fastMode = config.fastMode;
		var quoteChar;
		/** Allows for no quoteChar by setting quoteChar to undefined in config */
		if (config.quoteChar === undefined) {
			quoteChar = '"';
		} else {
			quoteChar = config.quoteChar;
		}
		var escapeChar = quoteChar;
		if (config.escapeChar !== undefined) {
			escapeChar = config.escapeChar;
		}

		// Delimiter must be valid
		if (typeof delim !== 'string' || Papa.BAD_DELIMITERS.indexOf(delim) > -1) delim = ',';

		// Comment character must be valid
		if (comments === delim) throw 'Comment character same as delimiter';else if (comments === true) comments = '#';else if (typeof comments !== 'string' || Papa.BAD_DELIMITERS.indexOf(comments) > -1) comments = false;

		// Newline must be valid: \r, \n, or \r\n
		if (newline !== '\n' && newline !== '\r' && newline !== '\r\n') newline = '\n';

		// We're gonna need these at the Parser scope
		var cursor = 0;
		var aborted = false;

		this.parse = function (input, baseIndex, ignoreLastRow) {
			// For some reason, in Chrome, this speeds things up (!?)
			if (typeof input !== 'string') throw 'Input must be a string';

			// We don't need to compute some of these every time parse() is called,
			// but having them in a more local scope seems to perform better
			var inputLen = input.length,
			    delimLen = delim.length,
			    newlineLen = newline.length,
			    commentsLen = comments.length;
			var stepIsFunction = isFunction(step);

			// Establish starting state
			cursor = 0;
			var data = [],
			    errors = [],
			    row = [],
			    lastCursor = 0;

			if (!input) return returnable();

			if (fastMode || fastMode !== false && input.indexOf(quoteChar) === -1) {
				var rows = input.split(newline);
				for (var i = 0; i < rows.length; i++) {
					row = rows[i];
					cursor += row.length;
					if (i !== rows.length - 1) cursor += newline.length;else if (ignoreLastRow) return returnable();
					if (comments && row.substr(0, commentsLen) === comments) continue;
					if (stepIsFunction) {
						data = [];
						pushRow(row.split(delim));
						doStep();
						if (aborted) return returnable();
					} else pushRow(row.split(delim));
					if (preview && i >= preview) {
						data = data.slice(0, preview);
						return returnable(true);
					}
				}
				return returnable();
			}

			var nextDelim = input.indexOf(delim, cursor);
			var nextNewline = input.indexOf(newline, cursor);
			var quoteCharRegex = new RegExp(escapeChar.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&') + quoteChar, 'g');
			var quoteSearch;

			// Parser loop
			for (;;) {
				// Field has opening quote
				if (input[cursor] === quoteChar) {
					// Start our search for the closing quote where the cursor is
					quoteSearch = cursor;

					// Skip the opening quote
					cursor++;

					for (;;) {
						// Find closing quote
						quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);

						//No other quotes are found - no other delimiters
						if (quoteSearch === -1) {
							if (!ignoreLastRow) {
								// No closing quote... what a pity
								errors.push({
									type: 'Quotes',
									code: 'MissingQuotes',
									message: 'Quoted field unterminated',
									row: data.length, // row has yet to be inserted
									index: cursor
								});
							}
							return finish();
						}

						// Closing quote at EOF
						if (quoteSearch === inputLen - 1) {
							var value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
							return finish(value);
						}

						// If this quote is escaped, it's part of the data; skip it
						// If the quote character is the escape character, then check if the next character is the escape character
						if (quoteChar === escapeChar && input[quoteSearch + 1] === escapeChar) {
							quoteSearch++;
							continue;
						}

						// If the quote character is not the escape character, then check if the previous character was the escape character
						if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar) {
							continue;
						}

						var spacesBetweenQuoteAndDelimiter = extraSpaces(nextDelim);

						// Closing quote followed by delimiter or 'unnecessary steps + delimiter'
						if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter] === delim) {
							row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
							cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;
							nextDelim = input.indexOf(delim, cursor);
							nextNewline = input.indexOf(newline, cursor);
							break;
						}

						var spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);

						// Closing quote followed by newline or 'unnecessary spaces + newLine'
						if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, newlineLen) === newline) {
							row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
							saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
							nextDelim = input.indexOf(delim, cursor); // because we may have skipped the nextDelim in the quoted field

							if (stepIsFunction) {
								doStep();
								if (aborted) return returnable();
							}

							if (preview && data.length >= preview) return returnable(true);

							break;
						}

						// Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
						errors.push({
							type: 'Quotes',
							code: 'InvalidQuotes',
							message: 'Trailing quote on quoted field is malformed',
							row: data.length, // row has yet to be inserted
							index: cursor
						});

						quoteSearch++;
						continue;
					}

					continue;
				}

				// Comment found at start of new line
				if (comments && row.length === 0 && input.substr(cursor, commentsLen) === comments) {
					if (nextNewline === -1) // Comment ends at EOF
						return returnable();
					cursor = nextNewline + newlineLen;
					nextNewline = input.indexOf(newline, cursor);
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// Next delimiter comes before next newline, so we've reached end of field
				if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1)) {
					row.push(input.substring(cursor, nextDelim));
					cursor = nextDelim + delimLen;
					nextDelim = input.indexOf(delim, cursor);
					continue;
				}

				// End of row
				if (nextNewline !== -1) {
					row.push(input.substring(cursor, nextNewline));
					saveRow(nextNewline + newlineLen);

					if (stepIsFunction) {
						doStep();
						if (aborted) return returnable();
					}

					if (preview && data.length >= preview) return returnable(true);

					continue;
				}

				break;
			}

			return finish();

			function pushRow(row) {
				data.push(row);
				lastCursor = cursor;
			}

			/**
             * checks if there are extra spaces after closing quote and given index without any text
             * if Yes, returns the number of spaces
             */
			function extraSpaces(index) {
				var spaceLength = 0;
				if (index !== -1) {
					var textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
					if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === '') {
						spaceLength = textBetweenClosingQuoteAndIndex.length;
					}
				}
				return spaceLength;
			}

			/**
    * Appends the remaining input from cursor to the end into
    * row, saves the row, calls step, and returns the results.
    */
			function finish(value) {
				if (ignoreLastRow) return returnable();
				if (typeof value === 'undefined') value = input.substr(cursor);
				row.push(value);
				cursor = inputLen; // important in case parsing is paused
				pushRow(row);
				if (stepIsFunction) doStep();
				return returnable();
			}

			/**
    * Appends the current row to the results. It sets the cursor
    * to newCursor and finds the nextNewline. The caller should
    * take care to execute user's step function and check for
    * preview and end parsing if necessary.
    */
			function saveRow(newCursor) {
				cursor = newCursor;
				pushRow(row);
				row = [];
				nextNewline = input.indexOf(newline, cursor);
			}

			/** Returns an object with the results, errors, and meta. */
			function returnable(stopped) {
				return {
					data: data,
					errors: errors,
					meta: {
						delimiter: delim,
						linebreak: newline,
						aborted: aborted,
						truncated: !!stopped,
						cursor: lastCursor + (baseIndex || 0)
					}
				};
			}

			/** Executes the user's step function and resets data & errors. */
			function doStep() {
				step(returnable());
				data = [];
				errors = [];
			}
		};

		/** Sets the abort flag */
		this.abort = function () {
			aborted = true;
		};

		/** Gets the cursor position */
		this.getCharIndex = function () {
			return cursor;
		};
	}

	// If you need to load Papa Parse asynchronously and you also need worker threads, hard-code
	// the script path here. See: https://github.com/mholt/PapaParse/issues/87#issuecomment-57885358
	function getScriptPath() {
		var scripts = document.getElementsByTagName('script');
		return scripts.length ? scripts[scripts.length - 1].src : '';
	}

	function newWorker() {
		if (!Papa.WORKERS_SUPPORTED) return false;
		if (!LOADED_SYNC && Papa.SCRIPT_PATH === null) throw new Error('Script path cannot be determined automatically when Papa Parse is loaded asynchronously. ' + 'You need to set Papa.SCRIPT_PATH manually.');
		var workerUrl = Papa.SCRIPT_PATH || AUTO_SCRIPT_PATH;
		// Append 'papaworker' to the search string to tell papaparse that this is our worker.
		workerUrl += (workerUrl.indexOf('?') !== -1 ? '&' : '?') + 'papaworker';
		var w = new global.Worker(workerUrl);
		w.onmessage = mainThreadReceivedMessage;
		w.id = workerIdCounter++;
		workers[w.id] = w;
		return w;
	}

	/** Callback when main thread receives a message */
	function mainThreadReceivedMessage(e) {
		var msg = e.data;
		var worker = workers[msg.workerId];
		var aborted = false;

		if (msg.error) worker.userError(msg.error, msg.file);else if (msg.results && msg.results.data) {
			var abort = function abort() {
				aborted = true;
				completeWorker(msg.workerId, { data: [], errors: [], meta: { aborted: true } });
			};

			var handle = {
				abort: abort,
				pause: notImplemented,
				resume: notImplemented
			};

			if (isFunction(worker.userStep)) {
				for (var i = 0; i < msg.results.data.length; i++) {
					worker.userStep({
						data: [msg.results.data[i]],
						errors: msg.results.errors,
						meta: msg.results.meta
					}, handle);
					if (aborted) break;
				}
				delete msg.results; // free memory ASAP
			} else if (isFunction(worker.userChunk)) {
				worker.userChunk(msg.results, handle, msg.file);
				delete msg.results;
			}
		}

		if (msg.finished && !aborted) completeWorker(msg.workerId, msg.results);
	}

	function completeWorker(workerId, results) {
		var worker = workers[workerId];
		if (isFunction(worker.userComplete)) worker.userComplete(results);
		worker.terminate();
		delete workers[workerId];
	}

	function notImplemented() {
		throw 'Not implemented.';
	}

	/** Callback when worker thread receives a message */
	function workerThreadReceivedMessage(e) {
		var msg = e.data;

		if (typeof Papa.WORKER_ID === 'undefined' && msg) Papa.WORKER_ID = msg.workerId;

		if (typeof msg.input === 'string') {
			global.postMessage({
				workerId: Papa.WORKER_ID,
				results: Papa.parse(msg.input, msg.config),
				finished: true
			});
		} else if (global.File && msg.input instanceof File || msg.input instanceof Object) // thank you, Safari (see issue #106)
			{
				var results = Papa.parse(msg.input, msg.config);
				if (results) global.postMessage({
					workerId: Papa.WORKER_ID,
					results: results,
					finished: true
				});
			}
	}

	/** Makes a deep copy of an array or object (mostly) */
	function copy(obj) {
		if (typeof obj !== 'object') return obj;
		var cpy = obj instanceof Array ? [] : {};
		for (var key in obj) {
			cpy[key] = copy(obj[key]);
		}return cpy;
	}

	function bindFunction(f, self) {
		return function () {
			f.apply(self, arguments);
		};
	}

	function isFunction(func) {
		return typeof func === 'function';
	}

	return Papa;
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 C10H -> C10
 C10((Me)N) -> C10
 C10Ala -> C10
 C10Ala((Me)N) -> C10Ala
 */
module.exports = function (mf) {
    var parenthesis = 0;
    var start = true;
    for (var i = mf.length - 1; i >= 0; i--) {
        var ascii = mf.charCodeAt(i);

        if (ascii > 96 && ascii < 123) {
            // lowercase
            if (!start && !parenthesis) {
                return mf.substr(0, i + 1);
            }
        } else if (ascii > 64 && ascii < 91) {
            // uppercase
            if (!start && !parenthesis) {
                return mf.substr(0, i + 1);
            }
            start = false;
        } else if (ascii === 40) {
            // (
            parenthesis--;
            if (!parenthesis) return mf.substr(0, i);
        } else if (ascii === 41) {
            // )
            parenthesis++;
        } else {
            start = false;
            if (!parenthesis) return mf.substr(0, i + 1);
        }
    }
    return "";
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enumerateRegExp = __webpack_require__(38);

/**
 * Enumerate molecules given a regular expression.
 * @param {string|RegExp} regexp - Regular expression to enumerate
 * @param {object} options - same parameters as [regexp-enumerator](https://cheminfo-js.github.io/regexp-enumerator/)
 * @return {Array} - Array of molecules generated with the regular expression.
 */
function enumerateMF(regexp, options) {
    options = options || {};
    var source = preprocessRegExp(typeof regexp !== 'string' ? regexp.source : regexp);
    var output = enumerateRegExp(source, options);
    output = postProcess(output);
    return output;
}

module.exports = enumerateMF;

function preprocessRegExp(string) {
    var replace = [/\(/g, /\)/g, /{/g, /}/g];
    var to = ['(\\((', ')\\))', '\\{', '\\}'];

    for (var i = 0; i < replace.length; i++) {
        string = string.replace(replace[i], to[i]);
    }

    return string;
}

function postProcess(output) {
    return output.map(elem => elem.replace(/\(\)/g, ''));
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = enumerateRegExp;

var _ret = __webpack_require__(14);

var _ret2 = _interopRequireDefault(_ret);

var _utils = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Function that generates all possible strings given a regular expression.
 * @param {string|regexp} regexp - regular expression to use
 * @param {object} options
 * @param {regexp} [options.universe=/[a-z]/] - universe of letters allowed for the 'not' operator.
 * @param {number} [options.maxSize=10] - max string size of the generated output.
 * @return {Array} - generated string given the regular expression.
 */
function enumerateRegExp(regexp, options = {}) {
    var _options$maxSize = options.maxSize,
        maxSize = _options$maxSize === undefined ? 10 : _options$maxSize,
        _options$universe = options.universe,
        universe = _options$universe === undefined ? /[a-z]/ : _options$universe;


    var source = typeof regexp === 'string' ? regexp : regexp.source;
    var tokens = (0, _ret2.default)(source);

    var charSetTokens = (0, _ret2.default)(universe.source);

    if (charSetTokens.stack[0].set) {
        var charMap = (0, _utils.createRegexpMap)(charSetTokens.stack[0].set);
    } else {
        charMap = (0, _utils.createCharMap)(charSetTokens.stack);
    }

    return generate(tokens, [''], {
        tokens: tokens,
        charMap: charMap,
        infSize: maxSize
    });
}

/**
 * @private
 * Generate recursively all the possible string from the given tokens.
 * @param {object} tokens - current regexp tokens to process.
 * @param {Array} build - array of strings build until the current recursive call.
 * @param {object} common - common elements for each recursive call.
 * @return {Array} - current possible combination given the build.
 */

function generate(tokens, build, common) {
    var isGroup = tokens.type === _ret2.default.types.ROOT || tokens.type === _ret2.default.types.GROUP;
    var newBuild = [];

    if (tokens.options) {
        var options = tokens.options;
        for (var i = 0; i < options.length; ++i) {
            (0, _utils.pushArray)(newBuild, generate(options[i], build, common));
        }
        build = newBuild;
    } else {
        var stack = isGroup ? tokens.stack : tokens;
        for (i = 0; i < stack.length; ++i) {
            var currentToken = stack[i];
            newBuild = [];

            switch (currentToken.type) {
                case _ret2.default.types.CHAR:
                    var str = String.fromCharCode(currentToken.value);
                    (0, _utils.pushArray)(newBuild, build.map(a => a + str));
                    break;
                case _ret2.default.types.SET:
                    var tokenSet;
                    if (currentToken.not) {
                        var currentTokenMap = (0, _utils.createRegexpMap)(currentToken.set);
                        var universe = Object.keys(common.charMap);
                        var availableTokens = [];
                        for (var j = 0; j < universe.length; ++j) {
                            var universeToken = universe[j];
                            if (currentTokenMap[universeToken] === undefined) {
                                availableTokens.push(common.charMap[universeToken]);
                            }
                        }
                        tokenSet = availableTokens;
                    } else {
                        tokenSet = currentToken.set;
                    }

                    for (j = 0; j < tokenSet.length; ++j) {
                        (0, _utils.pushArray)(newBuild, generate([tokenSet[j]], build, common));
                    }
                    break;
                case _ret2.default.types.GROUP:
                    (0, _utils.pushArray)(newBuild, generate(currentToken, build, common));
                    break;
                case _ret2.default.types.RANGE:
                    for (j = currentToken.from; j <= currentToken.to; ++j) {
                        var currentChar = String.fromCharCode(j);
                        (0, _utils.pushArray)(newBuild, build.map(elem => elem + currentChar));
                    }
                    break;
                case _ret2.default.types.REPETITION:
                    j = 0;
                    newBuild = build;
                    for (; j < currentToken.min; ++j) {
                        build = newBuild = generate([currentToken.value], build, common);
                    }

                    // from min to max
                    var max = currentToken.max !== Infinity ? currentToken.max : common.infSize;
                    for (; j < max; ++j) {
                        (0, _utils.pushArray)(newBuild, generate([currentToken.value], newBuild, common));
                    }

                    newBuild = Array.from(new Set(newBuild));
                    break;
                case _ret2.default.types.POSITION:
                    // case for '$' '^', don't touch the previous build
                    continue;
                default:
                    throw new Error('Unsupported type:', currentToken.type);
            }

            build = newBuild;
        }
    }

    return build;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(1);
var sets = __webpack_require__(15);

// All of these are private and only used by randexp.
// It's assumed that they will always be called with the correct input.

var CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
var SLSH = { '0': 0, 't': 9, 'n': 10, 'v': 11, 'f': 12, 'r': 13 };

/**
 * Finds character representations in str and convert all to
 * their respective characters
 *
 * @param {String} str
 * @return {String}
 */
exports.strToChars = function (str) {
  /* jshint maxlen: false */
  var chars_regex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g;
  str = str.replace(chars_regex, function (s, b, lbs, a16, b16, c8, dctrl, eslsh) {
    if (lbs) {
      return s;
    }

    var code = b ? 8 : a16 ? parseInt(a16, 16) : b16 ? parseInt(b16, 16) : c8 ? parseInt(c8, 8) : dctrl ? CTRL.indexOf(dctrl) : SLSH[eslsh];

    var c = String.fromCharCode(code);

    // Escape special regex characters.
    if (/[\[\]{}\^$.|?*+()]/.test(c)) {
      c = '\\' + c;
    }

    return c;
  });

  return str;
};

/**
 * turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {String} str
 * @param {String} regexpStr
 * @return {Array.<Array.<Object>, Number>}
 */
exports.tokenizeClass = function (str, regexpStr) {
  /* jshint maxlen: false */
  var tokens = [];
  var regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g;
  var rs, c;

  while ((rs = regexp.exec(str)) != null) {
    if (rs[1]) {
      tokens.push(sets.words());
    } else if (rs[2]) {
      tokens.push(sets.ints());
    } else if (rs[3]) {
      tokens.push(sets.whitespace());
    } else if (rs[4]) {
      tokens.push(sets.notWords());
    } else if (rs[5]) {
      tokens.push(sets.notInts());
    } else if (rs[6]) {
      tokens.push(sets.notWhitespace());
    } else if (rs[7]) {
      tokens.push({
        type: types.RANGE,
        from: (rs[8] || rs[9]).charCodeAt(0),
        to: rs[10].charCodeAt(0)
      });
    } else if (c = rs[12]) {
      tokens.push({
        type: types.CHAR,
        value: c.charCodeAt(0)
      });
    } else {
      return [tokens, regexp.lastIndex];
    }
  }

  exports.error(regexpStr, 'Unterminated character class');
};

/**
 * Shortcut to throw errors.
 *
 * @param {String} regexp
 * @param {String} msg
 */
exports.error = function (regexp, msg) {
  throw new SyntaxError('Invalid regular expression: /' + regexp + '/: ' + msg);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(1);

exports.wordBoundary = function () {
  return { type: types.POSITION, value: 'b' };
};

exports.nonWordBoundary = function () {
  return { type: types.POSITION, value: 'B' };
};

exports.begin = function () {
  return { type: types.POSITION, value: '^' };
};

exports.end = function () {
  return { type: types.POSITION, value: '$' };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCharMap = createCharMap;
exports.createRegexpMap = createRegexpMap;
exports.pushArray = pushArray;

var _ret = __webpack_require__(14);

var _ret2 = _interopRequireDefault(_ret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allowedTypes = [_ret2.default.types.CHAR];
var call = {};
call[_ret2.default.types.CHAR] = onChar;

function createCharMap(tokens) {
    var map = {};
    for (var i = 0; i < tokens.length; ++i) {
        var currentToken = tokens[i];
        if (!allowedTypes.includes(currentToken.type)) {
            throw new RangeError('universe must be a regexp of letters');
        }

        call[currentToken.type](map, currentToken);
    }

    return map;
}

// only support chars and ranges
function createRegexpMap(set) {
    var map = {};
    for (var i = 0; i < set.length; ++i) {
        var currentToken = set[i];
        switch (currentToken.type) {
            case _ret2.default.types.CHAR:
                map[currentToken.value] = currentToken;
                break;
            case _ret2.default.types.RANGE:
                for (var j = currentToken.from; j <= currentToken.to; ++j) {
                    map[j] = {
                        type: _ret2.default.types.CHAR,
                        value: j
                    };
                }
                break;
            default:
        }
    }

    return map;
}

function pushArray(arr, toPush) {
    for (var i = 0; i < toPush.length; ++i) {
        arr.push(toPush[i]);
    }
}

function onChar(map, token) {
    map[token.value] = token;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CC = __webpack_require__(0);
var SimilarityProcessor = __webpack_require__(16);
var Stat = __webpack_require__(4).array;

/*

// We are looking for a specific pattern in an experimental spectrum

options:
  * before (default : 0.5)
  * width (default : theoretical + 1)
  * common
  * widthBottom
  * widthTop
  * widthFunction
 */

function MFSimilarityProcessor(experimental, mf, options) {
    SimilarityProcessor.call(this, experimental, options);

    // we calculate the theoretical spectrum, normalize (sum to 1) it
    this.theoretical = CC.analyseMF(mf, { isotopomers: 'arrayXXYY' }).arrayXXYY;
    var xTheoretical = this.theoretical[0];
    var yTheoretical = this.theoretical[1];
    var sumY = Stat.sum(yTheoretical);
    for (var i = 0; i < yTheoretical.length; i++) {
        yTheoretical[i] /= sumY;
    }

    if (!this.options.before) this.options.before = 0.5;
    if (!this.options.width) this.options.width = xTheoretical[xTheoretical.length] - xTheoretical[0] + 0.5;
}

MFSimilarityProcessor.prototype.process = function (firstX) {
    if (this.widthFunction) {
        var width = this.widthFunction(spectrum[0][0]);
        this.similarity.setTrapezoid(width.widthBottom, width.widthTop);
    }

    var xTheoretical = this.theoretical[0];
    var yTheoretical = this.theoretical[1];
    var shift = -xTheoretical[0] + firstX;
    for (var i = 0; i < yTheoretical.length; i++) {
        xTheoretical[i] += shift;
    }

    var from = firstX - this.options.before;
    var to = firstX + this.options.width;

    return this.similarity.fastSimilarity(this.theoretical, from, to);
};

module.exports = MFSimilarityProcessor;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stat = __webpack_require__(4);

module.exports = massPeakPicking;

function massPeakPicking(x, y) {

    // we calculate the noise
    var noiseLevel = Stat.array.median(y.filter(function (a) {
        return a > 0;
    })) * 3;

    return gsd(x, y, {
        noiseLevel: noiseLevel
    });
}

function gsd(x, y, options) {
    options = options || {};
    if (options.minMaxRatio === undefined) options.minMaxRatio = 0.00025;
    if (options.noiseLevel === undefined) options.noiseLevel = 0;;

    if (options.noiseLevel > 0) {
        y = [].concat(y);
        for (var i = 0; i < y.length; i++) {
            if (Math.abs(y[i]) < options.noiseLevel) {
                y[i] = 0;
            }
        }
    }

    // fill convolution frequency axis
    var X = []; //x[2:(x.length-2)];

    // fill Savitzky-Golay polynomes
    var size = x.length - 4;
    var Y = new Array(size);
    var dY = new Array(size);
    var ddY = new Array(size);

    //var dx = x[1]-x[0];

    for (var j = 2; j < size + 2; j++) {
        var dx = x[j] - x[j - 1];
        Y[j - 2] = 1 / 35.0 * (-3 * y[j - 2] + 12 * y[j - 1] + 17 * y[j] + 12 * y[j + 1] - 3 * y[j + 2]);
        X[j - 2] = x[j];
        dY[j - 2] = 1 / (12 * dx) * (y[j - 2] - 8 * y[j - 1] + 8 * y[j + 1] - y[j + 2]);
        ddY[j - 2] = 1 / (7 * dx * dx) * (2 * y[j - 2] - y[j - 1] - 2 * y[j] - y[j + 1] + 2 * y[j + 2]);
    }

    var maxDdy = 0;
    //console.log(Y.length);
    for (var i = 0; i < Y.length; i++) {
        if (Math.abs(ddY[i]) > maxDdy) {
            maxDdy = Math.abs(ddY[i]);
        }
    }
    //console.log(maxY+"x"+maxDy+"x"+maxDdy);
    var minddY = [];
    var intervals = [];
    var stackInt = [];
    for (var i = 1; i < Y.length - 1; i++) {
        if (dY[i] < dY[i - 1] && dY[i] <= dY[i + 1] || dY[i] <= dY[i - 1] && dY[i] < dY[i + 1]) {
            //console.log(X[i])
            stackInt.push(X[i]);
        }

        if (dY[i] >= dY[i - 1] && dY[i] > dY[i + 1] || dY[i] > dY[i - 1] && dY[i] >= dY[i + 1]) {
            try {
                intervals.push([X[i], stackInt.pop()]);
            } catch (e) {
                console.log("Error I don't know why " + e);
            }
        }

        if (ddY[i] < ddY[i - 1] && ddY[i] < ddY[i + 1]) {
            minddY.push([X[i], Y[i], i]); // TODO should we change this to have 3 arrays ? Huge overhead creating arrays
        }
    }

    var signals = [];

    Y.sort(function (a, b) {
        return b - a;
    });

    for (var j = 0; j < minddY.length; j++) {
        var f = minddY[j];
        var frequency = f[0];
        var possible = [];
        for (var k = 0; k < intervals.length; k++) {
            var i = intervals[k];
            if (Math.abs(frequency - (i[0] + i[1]) / 2) < Math.abs(i[0] - i[1]) / 2) possible.push(i);
        }
        //console.log(possible);
        //console.log("possible "+possible.length);
        if (possible.length > 0) if (possible.length == 1) {
            var inter = possible[0];
            var linewidth = Math.abs(inter[1] - inter[0]);
            var height = f[1];
            //console.log(height, options.minMaxRatio, Y[0]);
            if (Math.abs(height) > options.minMaxRatio * Y[0]) {
                signals.push({
                    x: frequency,
                    y: height,
                    width: linewidth
                });
            }
        } else {
            //TODO: nested peaks
            //console.log("Nested "+possible);
        }
    }

    signals.sort(function (a, b) {
        return a.x - b.x;
    });

    return signals;
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WorkerManager = __webpack_require__(45);

var bestResults = __webpack_require__(3);

module.exports = MFProcessorWorker;

function MFProcessorWorker(managerOptions) {
    if (!managerOptions.url) {
        throw new Error('URL to the chemcalc extended library is required');
    }
    managerOptions.deps = [managerOptions.url];
    this.managerOptions = managerOptions;
    this.manager = null;
    this._init();
}

MFProcessorWorker.prototype._init = function () {
    this.manager = new WorkerManager(insideMFProcessor, this.managerOptions);
};

MFProcessorWorker.prototype.callbacks = function (callBacksOptions) {
    callBacksOptions = callBacksOptions || {};
    this.onStep = callBacksOptions.onStep || Function.prototype;
    this.onError = callBacksOptions.onError || Function.prototype;
};

MFProcessorWorker.prototype.init = function (experimental, calculationOptions) {
    this.calculationOptions = calculationOptions;
    return this.manager.postAll('init', [experimental, calculationOptions]);
};

MFProcessorWorker.prototype.process = function (mfs) {
    if (!Array.isArray(mfs)) {
        throw new TypeError('mfs must be an array');
    }
    var self = this;
    return new Promise(function (resolve, reject) {
        var processed = 0;
        var total = mfs.length;
        var results = [];
        mfs.forEach(function (mf) {
            self.manager.post('data', [mf.mf]).then(function (result) {
                result.parts = mf;
                results.push(result);
                if (results.length > self.calculationOptions.maxResults * 2) {
                    results = bestResults(results, self.calculationOptions.bestOf, self.calculationOptions.maxResults, self.calculationOptions.minSimilarity);
                }
            }, self.onError).then(function () {
                processed++;
                self.onStep(processed, total);
                if (processed === total) {
                    results = bestResults(results, self.calculationOptions.bestOf, self.calculationOptions.maxResults, self.calculationOptions.minSimilarity);
                    results = results.map(function (a) {
                        var ppm = (a.msem - self.calculationOptions.mass) / a.msem * 1e6;
                        a.ppm = Math.round(ppm * 100) / 100;
                        a.absppm = Math.abs(a.ppm * 100) / 100;
                        return a;
                    });
                    resolve(results);
                }
            });
        });
    });
};

MFProcessorWorker.prototype.reset = function () {
    this.manager.terminate();
    this._init();
};

function insideMFProcessor() {
    var processor;
    worker.on('init', function (send, exp, options) {
        processor = new chemcalcExtended.MFProcessor(exp, options);
        send(true);
    });
    worker.on('data', function (send, data) {
        send(processor.process(data));
    });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var workerTemplate = __webpack_require__(46);

var CORES = navigator.hardwareConcurrency || 1;

var noop = Function.prototype;

function WorkerManager(func, options) {
    // Check arguments
    if (typeof func !== 'string' && typeof func !== 'function') throw new TypeError('func argument must be a function');
    if (options === undefined) options = {};
    if (typeof options !== 'object' || options === null) throw new TypeError('options argument must be an object');

    this._workerCode = func.toString();

    // Parse options
    this._numWorkers = options.maxWorkers > 0 ? Math.min(options.maxWorkers, CORES) : CORES;
    this._workers = new Map();
    this._timeout = options.timeout || 0;
    this._terminateOnError = !!options.terminateOnError;

    var deps = options.deps;
    if (typeof deps === 'string') deps = [deps];
    if (!Array.isArray(deps)) deps = undefined;

    this._id = 0;
    this._terminated = false;
    this._working = 0;
    this._waiting = [];

    this._init(deps);
}

WorkerManager.prototype._init = function (deps) {
    var workerURL = workerTemplate.newWorkerURL(this._workerCode, deps);

    for (var i = 0; i < this._numWorkers; i++) {
        var worker = new Worker(workerURL);
        worker.onmessage = this._onmessage.bind(this, worker);
        worker.onerror = this._onerror.bind(this, worker);
        worker.running = false;
        worker.id = i;
        this._workers.set(worker, null);
    }

    URL.revokeObjectURL(workerURL);
};

WorkerManager.prototype._onerror = function (worker, error) {
    if (this._terminated) return;
    this._working--;
    worker.running = false;
    var callback = this._workers.get(worker);
    if (callback) {
        callback[1](error.message);
    }
    this._workers.set(worker, null);
    if (this._terminateOnError) {
        this.terminate();
    } else {
        this._exec();
    }
};

WorkerManager.prototype._onmessage = function (worker, event) {
    if (this._terminated) return;
    this._working--;
    worker.running = false;
    var callback = this._workers.get(worker);
    if (callback) {
        callback[0](event.data.data);
    }
    this._workers.set(worker, null);
    this._exec();
};

WorkerManager.prototype._exec = function () {
    for (var worker of this._workers.keys()) {
        if (this._working === this._numWorkers || this._waiting.length === 0) {
            return;
        }
        if (!worker.running) {
            for (var i = 0; i < this._waiting.length; i++) {
                var execInfo = this._waiting[i];
                if (typeof execInfo[3] === 'number' && execInfo[3] !== worker.id) {
                    // this message is intended to another worker, let's ignore it
                    continue;
                }
                this._waiting.splice(i, 1);
                worker.postMessage({
                    action: 'exec',
                    event: execInfo[0],
                    args: execInfo[1]
                });
                worker.running = true;
                worker.time = Date.now();
                this._workers.set(worker, execInfo[2]);
                this._working++;
                break;
            }
        }
    }
};

WorkerManager.prototype.terminate = function () {
    if (this._terminated) return;
    for (var entry of this._workers) {
        entry[0].terminate();
        if (entry[1]) {
            entry[1][1](new Error('Terminated'));
        }
    }
    this._workers.clear();
    this._waiting = [];
    this._working = 0;
    this._terminated = true;
};

WorkerManager.prototype.postAll = function (event, args) {
    if (this._terminated) throw new Error('Cannot post (terminated)');
    var promises = [];
    for (var worker of this._workers.keys()) {
        promises.push(this.post(event, args, worker.id));
    }
    return Promise.all(promises);
};

WorkerManager.prototype.post = function (event, args, id) {
    if (args === undefined) args = [];
    if (!Array.isArray(args)) {
        args = [args];
    }

    var self = this;
    return new Promise(function (resolve, reject) {
        if (self._terminated) throw new Error('Cannot post (terminated)');
        self._waiting.push([event, args, [resolve, reject], id]);
        self._exec();
    });
};

module.exports = WorkerManager;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var worker = function worker() {
    var window = self.window = self;
    function ManagedWorker() {
        this._listeners = {};
    }
    ManagedWorker.prototype.on = function (event, callback) {
        if (this._listeners[event]) throw new RangeError('there is already a listener for ' + event);
        if (typeof callback !== 'function') throw new TypeError('callback argument must be a function');
        this._listeners[event] = callback;
    };
    ManagedWorker.prototype._send = function (id, data) {
        self.postMessage({
            id: id,
            data: data
        });
    };
    ManagedWorker.prototype._trigger = function (event, args) {
        if (!this._listeners[event]) throw new Error('event ' + event + ' is not defined');
        this._listeners[event].apply(null, args);
    };
    var worker = new ManagedWorker();
    self.onmessage = function (event) {
        switch (event.data.action) {
            case 'exec':
                event.data.args.unshift(function (data) {
                    worker._send(event.data.id, data);
                });
                worker._trigger(event.data.event, event.data.args);
                break;
            case 'ping':
                worker.send(event.data.id, 'pong');
                break;
        }
    };
    "CODE";
};

var workerStr = worker.toString().split('"CODE";');

exports.newWorkerURL = function newWorkerURL(code, deps) {
    var blob = new Blob(['(', workerStr[0], 'importScripts.apply(self, ' + JSON.stringify(deps) + ');\n', '(', code, ')();', workerStr[1], ')();'], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = analyseMF;
var CC = __webpack_require__(0);

function analyseMF(mf, options) {
    var result = CC.analyseMF(mf, options);
    var atoms = {};
    result.atoms = atoms;
    for (var part of result.parts) {
        for (var atom of part.ea) {
            if (!atoms[atom.element]) {
                atoms[atom.element] = 0;
            }
            atoms[atom.element] += atom.number * part.number;
        }
    }

    if (result.parts.length > 1) {
        var totalMF = [];
        for (var atom of Object.keys(result.atoms)) {
            var number = result.atoms[atom];
            totalMF.push(atom + (number !== 1 ? number : ''));
        }
        result.totalMF = totalMF.join('');
    }

    return result;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=chemcalc-extended.js.map