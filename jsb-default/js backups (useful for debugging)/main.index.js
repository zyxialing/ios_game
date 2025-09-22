window.__require = function t(e, n, o) {
function i(a, s) {
if (!n[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = n[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return i(e[a][1][t] || t);
}, u, u.exports, t, e, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
1: [ function(t, e) {
var n = t("util/"), o = Array.prototype.slice, i = Object.prototype.hasOwnProperty, r = e.exports = u;
r.AssertionError = function(t) {
this.name = "AssertionError";
this.actual = t.actual;
this.expected = t.expected;
this.operator = t.operator;
if (t.message) {
this.message = t.message;
this.generatedMessage = !1;
} else {
this.message = c(this);
this.generatedMessage = !0;
}
var e = t.stackStartFunction || l;
if (Error.captureStackTrace) Error.captureStackTrace(this, e); else {
var n = new Error();
if (n.stack) {
var o = n.stack, i = e.name, r = o.indexOf("\n" + i);
if (r >= 0) {
var a = o.indexOf("\n", r + 1);
o = o.substring(a + 1);
}
this.stack = o;
}
}
};
n.inherits(r.AssertionError, Error);
function a(t, e) {
return n.isUndefined(e) ? "" + e : n.isNumber(e) && !isFinite(e) ? e.toString() : n.isFunction(e) || n.isRegExp(e) ? e.toString() : e;
}
function s(t, e) {
return n.isString(t) ? t.length < e ? t : t.slice(0, e) : t;
}
function c(t) {
return s(JSON.stringify(t.actual, a), 128) + " " + t.operator + " " + s(JSON.stringify(t.expected, a), 128);
}
function l(t, e, n, o, i) {
throw new r.AssertionError({
message: n,
actual: t,
expected: e,
operator: o,
stackStartFunction: i
});
}
r.fail = l;
function u(t, e) {
t || l(t, !0, e, "==", r.ok);
}
r.ok = u;
r.equal = function(t, e, n) {
t != e && l(t, e, n, "==", r.equal);
};
r.notEqual = function(t, e, n) {
t == e && l(t, e, n, "!=", r.notEqual);
};
r.deepEqual = function(t, e, n) {
p(t, e) || l(t, e, n, "deepEqual", r.deepEqual);
};
function p(t, e) {
if (t === e) return !0;
if (n.isBuffer(t) && n.isBuffer(e)) {
if (t.length != e.length) return !1;
for (var o = 0; o < t.length; o++) if (t[o] !== e[o]) return !1;
return !0;
}
return n.isDate(t) && n.isDate(e) ? t.getTime() === e.getTime() : n.isRegExp(t) && n.isRegExp(e) ? t.source === e.source && t.global === e.global && t.multiline === e.multiline && t.lastIndex === e.lastIndex && t.ignoreCase === e.ignoreCase : n.isObject(t) || n.isObject(e) ? f(t, e) : t == e;
}
function d(t) {
return "[object Arguments]" == Object.prototype.toString.call(t);
}
function f(t, e) {
if (n.isNullOrUndefined(t) || n.isNullOrUndefined(e)) return !1;
if (t.prototype !== e.prototype) return !1;
if (n.isPrimitive(t) || n.isPrimitive(e)) return t === e;
var i = d(t), r = d(e);
if (i && !r || !i && r) return !1;
if (i) return p(t = o.call(t), e = o.call(e));
var a, s, c = g(t), l = g(e);
if (c.length != l.length) return !1;
c.sort();
l.sort();
for (s = c.length - 1; s >= 0; s--) if (c[s] != l[s]) return !1;
for (s = c.length - 1; s >= 0; s--) if (!p(t[a = c[s]], e[a])) return !1;
return !0;
}
r.notDeepEqual = function(t, e, n) {
p(t, e) && l(t, e, n, "notDeepEqual", r.notDeepEqual);
};
r.strictEqual = function(t, e, n) {
t !== e && l(t, e, n, "===", r.strictEqual);
};
r.notStrictEqual = function(t, e, n) {
t === e && l(t, e, n, "!==", r.notStrictEqual);
};
function h(t, e) {
return !(!t || !e) && ("[object RegExp]" == Object.prototype.toString.call(e) ? e.test(t) : t instanceof e || !0 === e.call({}, t));
}
function _(t, e, o, i) {
var r;
if (n.isString(o)) {
i = o;
o = null;
}
try {
e();
} catch (t) {
r = t;
}
i = (o && o.name ? " (" + o.name + ")." : ".") + (i ? " " + i : ".");
t && !r && l(r, o, "Missing expected exception" + i);
!t && h(r, o) && l(r, o, "Got unwanted exception" + i);
if (t && r && o && !h(r, o) || !t && r) throw r;
}
r.throws = function(t, e, n) {
_.apply(this, [ !0 ].concat(o.call(arguments)));
};
r.doesNotThrow = function(t, e) {
_.apply(this, [ !1 ].concat(o.call(arguments)));
};
r.ifError = function(t) {
if (t) throw t;
};
var g = Object.keys || function(t) {
var e = [];
for (var n in t) i.call(t, n) && e.push(n);
return e;
};
}, {
"util/": 4
} ],
2: [ function(t, e) {
"function" == typeof Object.create ? e.exports = function(t, e) {
t.super_ = e;
t.prototype = Object.create(e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
});
} : e.exports = function(t, e) {
t.super_ = e;
var n = function() {};
n.prototype = e.prototype;
t.prototype = new n();
t.prototype.constructor = t;
};
}, {} ],
3: [ function(t, e) {
e.exports = function(t) {
return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8;
};
}, {} ],
4: [ function(t, e, n) {
(function(e, o) {
var i = /%[sdj%]/g;
n.format = function(t) {
if (!S(t)) {
for (var e = [], n = 0; n < arguments.length; n++) e.push(s(arguments[n]));
return e.join(" ");
}
n = 1;
for (var o = arguments, r = o.length, a = String(t).replace(i, function(t) {
if ("%%" === t) return "%";
if (n >= r) return t;
switch (t) {
case "%s":
return String(o[n++]);

case "%d":
return Number(o[n++]);

case "%j":
try {
return JSON.stringify(o[n++]);
} catch (t) {
return "[Circular]";
}

default:
return t;
}
}), c = o[n]; n < r; c = o[++n]) E(c) || !C(c) ? a += " " + c : a += " " + s(c);
return a;
};
n.deprecate = function(t, i) {
if (b(o.process)) return function() {
return n.deprecate(t, i).apply(this, arguments);
};
if (!0 === e.noDeprecation) return t;
var r = !1;
return function() {
if (!r) {
if (e.throwDeprecation) throw new Error(i);
e.traceDeprecation ? console.trace(i) : console.error(i);
r = !0;
}
return t.apply(this, arguments);
};
};
var r, a = {};
n.debuglog = function(t) {
b(r) && (r = e.env.NODE_DEBUG || "");
t = t.toUpperCase();
if (!a[t]) if (new RegExp("\\b" + t + "\\b", "i").test(r)) {
var o = e.pid;
a[t] = function() {
var e = n.format.apply(n, arguments);
console.error("%s %d: %s", t, o, e);
};
} else a[t] = function() {};
return a[t];
};
function s(t, e) {
var o = {
seen: [],
stylize: l
};
arguments.length >= 3 && (o.depth = arguments[2]);
arguments.length >= 4 && (o.colors = arguments[3]);
m(e) ? o.showHidden = e : e && n._extend(o, e);
b(o.showHidden) && (o.showHidden = !1);
b(o.depth) && (o.depth = 2);
b(o.colors) && (o.colors = !1);
b(o.customInspect) && (o.customInspect = !0);
o.colors && (o.stylize = c);
return p(o, t, o.depth);
}
n.inspect = s;
s.colors = {
bold: [ 1, 22 ],
italic: [ 3, 23 ],
underline: [ 4, 24 ],
inverse: [ 7, 27 ],
white: [ 37, 39 ],
grey: [ 90, 39 ],
black: [ 30, 39 ],
blue: [ 34, 39 ],
cyan: [ 36, 39 ],
green: [ 32, 39 ],
magenta: [ 35, 39 ],
red: [ 31, 39 ],
yellow: [ 33, 39 ]
};
s.styles = {
special: "cyan",
number: "yellow",
boolean: "yellow",
undefined: "grey",
null: "bold",
string: "green",
date: "magenta",
regexp: "red"
};
function c(t, e) {
var n = s.styles[e];
return n ? "[" + s.colors[n][0] + "m" + t + "[" + s.colors[n][1] + "m" : t;
}
function l(t) {
return t;
}
function u(t) {
var e = {};
t.forEach(function(t) {
e[t] = !0;
});
return e;
}
function p(t, e, o) {
if (t.customInspect && e && O(e.inspect) && e.inspect !== n.inspect && (!e.constructor || e.constructor.prototype !== e)) {
var i = e.inspect(o, t);
S(i) || (i = p(t, i, o));
return i;
}
var r = d(t, e);
if (r) return r;
var a = Object.keys(e), s = u(a);
t.showHidden && (a = Object.getOwnPropertyNames(e));
if (A(e) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return f(e);
if (0 === a.length) {
if (O(e)) {
var c = e.name ? ": " + e.name : "";
return t.stylize("[Function" + c + "]", "special");
}
if (R(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
if (T(e)) return t.stylize(Date.prototype.toString.call(e), "date");
if (A(e)) return f(e);
}
var l, m = "", E = !1, v = [ "{", "}" ];
if (y(e)) {
E = !0;
v = [ "[", "]" ];
}
O(e) && (m = " [Function" + (e.name ? ": " + e.name : "") + "]");
R(e) && (m = " " + RegExp.prototype.toString.call(e));
T(e) && (m = " " + Date.prototype.toUTCString.call(e));
A(e) && (m = " " + f(e));
if (0 === a.length && (!E || 0 == e.length)) return v[0] + m + v[1];
if (o < 0) return R(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
t.seen.push(e);
l = E ? h(t, e, o, s, a) : a.map(function(n) {
return _(t, e, o, s, n, E);
});
t.seen.pop();
return g(l, m, v);
}
function d(t, e) {
if (b(e)) return t.stylize("undefined", "undefined");
if (S(e)) {
var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
return t.stylize(n, "string");
}
return v(e) ? t.stylize("" + e, "number") : m(e) ? t.stylize("" + e, "boolean") : E(e) ? t.stylize("null", "null") : void 0;
}
function f(t) {
return "[" + Error.prototype.toString.call(t) + "]";
}
function h(t, e, n, o, i) {
for (var r = [], a = 0, s = e.length; a < s; ++a) P(e, String(a)) ? r.push(_(t, e, n, o, String(a), !0)) : r.push("");
i.forEach(function(i) {
i.match(/^\d+$/) || r.push(_(t, e, n, o, i, !0));
});
return r;
}
function _(t, e, n, o, i, r) {
var a, s, c;
(c = Object.getOwnPropertyDescriptor(e, i) || {
value: e[i]
}).get ? s = c.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : c.set && (s = t.stylize("[Setter]", "special"));
P(o, i) || (a = "[" + i + "]");
s || (t.seen.indexOf(c.value) < 0 ? (s = E(n) ? p(t, c.value, null) : p(t, c.value, n - 1)).indexOf("\n") > -1 && (s = r ? s.split("\n").map(function(t) {
return "  " + t;
}).join("\n").substr(2) : "\n" + s.split("\n").map(function(t) {
return "   " + t;
}).join("\n")) : s = t.stylize("[Circular]", "special"));
if (b(a)) {
if (r && i.match(/^\d+$/)) return s;
if ((a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
a = a.substr(1, a.length - 2);
a = t.stylize(a, "name");
} else {
a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
a = t.stylize(a, "string");
}
}
return a + ": " + s;
}
function g(t, e, n) {
return t.reduce(function(t, e) {
e.indexOf("\n");
return t + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
}, 0) > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1];
}
function y(t) {
return Array.isArray(t);
}
n.isArray = y;
function m(t) {
return "boolean" == typeof t;
}
n.isBoolean = m;
function E(t) {
return null === t;
}
n.isNull = E;
n.isNullOrUndefined = function(t) {
return null == t;
};
function v(t) {
return "number" == typeof t;
}
n.isNumber = v;
function S(t) {
return "string" == typeof t;
}
n.isString = S;
n.isSymbol = function(t) {
return "symbol" == typeof t;
};
function b(t) {
return void 0 === t;
}
n.isUndefined = b;
function R(t) {
return C(t) && "[object RegExp]" === N(t);
}
n.isRegExp = R;
function C(t) {
return "object" == typeof t && null !== t;
}
n.isObject = C;
function T(t) {
return C(t) && "[object Date]" === N(t);
}
n.isDate = T;
function A(t) {
return C(t) && ("[object Error]" === N(t) || t instanceof Error);
}
n.isError = A;
function O(t) {
return "function" == typeof t;
}
n.isFunction = O;
n.isPrimitive = function(t) {
return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t;
};
n.isBuffer = t("./support/isBuffer");
function N(t) {
return Object.prototype.toString.call(t);
}
function w(t) {
return t < 10 ? "0" + t.toString(10) : t.toString(10);
}
var M = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
function I() {
var t = new Date(), e = [ w(t.getHours()), w(t.getMinutes()), w(t.getSeconds()) ].join(":");
return [ t.getDate(), M[t.getMonth()], e ].join(" ");
}
n.log = function() {
console.log("%s - %s", I(), n.format.apply(n, arguments));
};
n.inherits = t("inherits");
n._extend = function(t, e) {
if (!e || !C(e)) return t;
for (var n = Object.keys(e), o = n.length; o--; ) t[n[o]] = e[n[o]];
return t;
};
function P(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
}).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"./support/isBuffer": 3,
_process: 10,
inherits: 2
} ],
5: [ function(t, e, n) {
"use strict";
n.byteLength = function(t) {
var e = l(t), n = e[0], o = e[1];
return 3 * (n + o) / 4 - o;
};
n.toByteArray = function(t) {
var e, n, o = l(t), a = o[0], s = o[1], c = new r(u(0, a, s)), p = 0, d = s > 0 ? a - 4 : a;
for (n = 0; n < d; n += 4) {
e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)];
c[p++] = e >> 16 & 255;
c[p++] = e >> 8 & 255;
c[p++] = 255 & e;
}
if (2 === s) {
e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4;
c[p++] = 255 & e;
}
if (1 === s) {
e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2;
c[p++] = e >> 8 & 255;
c[p++] = 255 & e;
}
return c;
};
n.fromByteArray = function(t) {
for (var e, n = t.length, i = n % 3, r = [], a = 0, s = n - i; a < s; a += 16383) r.push(p(t, a, a + 16383 > s ? s : a + 16383));
if (1 === i) {
e = t[n - 1];
r.push(o[e >> 2] + o[e << 4 & 63] + "==");
} else if (2 === i) {
e = (t[n - 2] << 8) + t[n - 1];
r.push(o[e >> 10] + o[e >> 4 & 63] + o[e << 2 & 63] + "=");
}
return r.join("");
};
for (var o = [], i = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) {
o[s] = a[s];
i[a.charCodeAt(s)] = s;
}
i["-".charCodeAt(0)] = 62;
i["_".charCodeAt(0)] = 63;
function l(t) {
var e = t.length;
if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = t.indexOf("=");
-1 === n && (n = e);
return [ n, n === e ? 0 : 4 - n % 4 ];
}
function u(t, e, n) {
return 3 * (e + n) / 4 - n;
}
function p(t, e, n) {
for (var i, r, a = [], s = e; s < n; s += 3) {
i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]);
a.push(o[(r = i) >> 18 & 63] + o[r >> 12 & 63] + o[r >> 6 & 63] + o[63 & r]);
}
return a.join("");
}
}, {} ],
6: [ function(t, e, n) {
(function(e) {
"use strict";
var o = t("base64-js"), i = t("ieee754"), r = t("isarray");
n.Buffer = c;
n.SlowBuffer = function(t) {
+t != t && (t = 0);
return c.alloc(+t);
};
n.INSPECT_MAX_BYTES = 50;
c.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
try {
var t = new Uint8Array(1);
t.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
};
return 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
} catch (t) {
return !1;
}
}();
n.kMaxLength = a();
function a() {
return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function s(t, e) {
if (a() < e) throw new RangeError("Invalid typed array length");
if (c.TYPED_ARRAY_SUPPORT) (t = new Uint8Array(e)).__proto__ = c.prototype; else {
null === t && (t = new c(e));
t.length = e;
}
return t;
}
function c(t, e, n) {
if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
if ("number" == typeof t) {
if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
return d(this, t);
}
return l(this, t, e, n);
}
c.poolSize = 8192;
c._augment = function(t) {
t.__proto__ = c.prototype;
return t;
};
function l(t, e, n, o) {
if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? _(t, e, n, o) : "string" == typeof e ? f(t, e, n) : g(t, e);
}
c.from = function(t, e, n) {
return l(null, t, e, n);
};
if (c.TYPED_ARRAY_SUPPORT) {
c.prototype.__proto__ = Uint8Array.prototype;
c.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
value: null,
configurable: !0
});
}
function u(t) {
if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
if (t < 0) throw new RangeError('"size" argument must not be negative');
}
function p(t, e, n, o) {
u(e);
return e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof o ? s(t, e).fill(n, o) : s(t, e).fill(n) : s(t, e);
}
c.alloc = function(t, e, n) {
return p(null, t, e, n);
};
function d(t, e) {
u(e);
t = s(t, e < 0 ? 0 : 0 | y(e));
if (!c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
return t;
}
c.allocUnsafe = function(t) {
return d(null, t);
};
c.allocUnsafeSlow = function(t) {
return d(null, t);
};
function f(t, e, n) {
"string" == typeof n && "" !== n || (n = "utf8");
if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var o = 0 | m(e, n), i = (t = s(t, o)).write(e, n);
i !== o && (t = t.slice(0, i));
return t;
}
function h(t, e) {
var n = e.length < 0 ? 0 : 0 | y(e.length);
t = s(t, n);
for (var o = 0; o < n; o += 1) t[o] = 255 & e[o];
return t;
}
function _(t, e, n, o) {
e.byteLength;
if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (e.byteLength < n + (o || 0)) throw new RangeError("'length' is out of bounds");
e = void 0 === n && void 0 === o ? new Uint8Array(e) : void 0 === o ? new Uint8Array(e, n) : new Uint8Array(e, n, o);
c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = h(t, e);
return t;
}
function g(t, e) {
if (c.isBuffer(e)) {
var n = 0 | y(e.length);
if (0 === (t = s(t, n)).length) return t;
e.copy(t, 0, 0, n);
return t;
}
if (e) {
if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (o = e.length) != o ? s(t, 0) : h(t, e);
if ("Buffer" === e.type && r(e.data)) return h(t, e.data);
}
var o;
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function y(t) {
if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
return 0 | t;
}
c.isBuffer = function(t) {
return !(null == t || !t._isBuffer);
};
c.compare = function(t, e) {
if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
if (t === e) return 0;
for (var n = t.length, o = e.length, i = 0, r = Math.min(n, o); i < r; ++i) if (t[i] !== e[i]) {
n = t[i];
o = e[i];
break;
}
return n < o ? -1 : o < n ? 1 : 0;
};
c.isEncoding = function(t) {
switch (String(t).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
};
c.concat = function(t, e) {
if (!r(t)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === t.length) return c.alloc(0);
var n;
if (void 0 === e) {
e = 0;
for (n = 0; n < t.length; ++n) e += t[n].length;
}
var o = c.allocUnsafe(e), i = 0;
for (n = 0; n < t.length; ++n) {
var a = t[n];
if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
a.copy(o, i);
i += a.length;
}
return o;
};
function m(t, e) {
if (c.isBuffer(t)) return t.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
"string" != typeof t && (t = "" + t);
var n = t.length;
if (0 === n) return 0;
for (var o = !1; ;) switch (e) {
case "ascii":
case "latin1":
case "binary":
return n;

case "utf8":
case "utf-8":
case void 0:
return K(t).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return Z(t).length;

default:
if (o) return K(t).length;
e = ("" + e).toLowerCase();
o = !0;
}
}
c.byteLength = m;
function E(t, e, n) {
var o = !1;
(void 0 === e || e < 0) && (e = 0);
if (e > this.length) return "";
(void 0 === n || n > this.length) && (n = this.length);
if (n <= 0) return "";
if ((n >>>= 0) <= (e >>>= 0)) return "";
t || (t = "utf8");
for (;;) switch (t) {
case "hex":
return D(this, e, n);

case "utf8":
case "utf-8":
return M(this, e, n);

case "ascii":
return U(this, e, n);

case "latin1":
case "binary":
return L(this, e, n);

case "base64":
return w(this, e, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return B(this, e, n);

default:
if (o) throw new TypeError("Unknown encoding: " + t);
t = (t + "").toLowerCase();
o = !0;
}
}
c.prototype._isBuffer = !0;
function v(t, e, n) {
var o = t[e];
t[e] = t[n];
t[n] = o;
}
c.prototype.swap16 = function() {
var t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var e = 0; e < t; e += 2) v(this, e, e + 1);
return this;
};
c.prototype.swap32 = function() {
var t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var e = 0; e < t; e += 4) {
v(this, e, e + 3);
v(this, e + 1, e + 2);
}
return this;
};
c.prototype.swap64 = function() {
var t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var e = 0; e < t; e += 8) {
v(this, e, e + 7);
v(this, e + 1, e + 6);
v(this, e + 2, e + 5);
v(this, e + 3, e + 4);
}
return this;
};
c.prototype.toString = function() {
var t = 0 | this.length;
return 0 === t ? "" : 0 === arguments.length ? M(this, 0, t) : E.apply(this, arguments);
};
c.prototype.equals = function(t) {
if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
return this === t || 0 === c.compare(this, t);
};
c.prototype.inspect = function() {
var t = "", e = n.INSPECT_MAX_BYTES;
if (this.length > 0) {
t = this.toString("hex", 0, e).match(/.{2}/g).join(" ");
this.length > e && (t += " ... ");
}
return "<Buffer " + t + ">";
};
c.prototype.compare = function(t, e, n, o, i) {
if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
void 0 === e && (e = 0);
void 0 === n && (n = t ? t.length : 0);
void 0 === o && (o = 0);
void 0 === i && (i = this.length);
if (e < 0 || n > t.length || o < 0 || i > this.length) throw new RangeError("out of range index");
if (o >= i && e >= n) return 0;
if (o >= i) return -1;
if (e >= n) return 1;
if (this === t) return 0;
for (var r = (i >>>= 0) - (o >>>= 0), a = (n >>>= 0) - (e >>>= 0), s = Math.min(r, a), l = this.slice(o, i), u = t.slice(e, n), p = 0; p < s; ++p) if (l[p] !== u[p]) {
r = l[p];
a = u[p];
break;
}
return r < a ? -1 : a < r ? 1 : 0;
};
function S(t, e, n, o, i) {
if (0 === t.length) return -1;
if ("string" == typeof n) {
o = n;
n = 0;
} else n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648);
n = +n;
isNaN(n) && (n = i ? 0 : t.length - 1);
n < 0 && (n = t.length + n);
if (n >= t.length) {
if (i) return -1;
n = t.length - 1;
} else if (n < 0) {
if (!i) return -1;
n = 0;
}
"string" == typeof e && (e = c.from(e, o));
if (c.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, o, i);
if ("number" == typeof e) {
e &= 255;
return c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [ e ], n, o, i);
}
throw new TypeError("val must be string, number or Buffer");
}
function b(t, e, n, o, i) {
var r, a = 1, s = t.length, c = e.length;
if (void 0 !== o && ("ucs2" === (o = String(o).toLowerCase()) || "ucs-2" === o || "utf16le" === o || "utf-16le" === o)) {
if (t.length < 2 || e.length < 2) return -1;
a = 2;
s /= 2;
c /= 2;
n /= 2;
}
function l(t, e) {
return 1 === a ? t[e] : t.readUInt16BE(e * a);
}
if (i) {
var u = -1;
for (r = n; r < s; r++) if (l(t, r) === l(e, -1 === u ? 0 : r - u)) {
-1 === u && (u = r);
if (r - u + 1 === c) return u * a;
} else {
-1 !== u && (r -= r - u);
u = -1;
}
} else {
n + c > s && (n = s - c);
for (r = n; r >= 0; r--) {
for (var p = !0, d = 0; d < c; d++) if (l(t, r + d) !== l(e, d)) {
p = !1;
break;
}
if (p) return r;
}
}
return -1;
}
c.prototype.includes = function(t, e, n) {
return -1 !== this.indexOf(t, e, n);
};
c.prototype.indexOf = function(t, e, n) {
return S(this, t, e, n, !0);
};
c.prototype.lastIndexOf = function(t, e, n) {
return S(this, t, e, n, !1);
};
function R(t, e, n, o) {
n = Number(n) || 0;
var i = t.length - n;
o ? (o = Number(o)) > i && (o = i) : o = i;
var r = e.length;
if (r % 2 != 0) throw new TypeError("Invalid hex string");
o > r / 2 && (o = r / 2);
for (var a = 0; a < o; ++a) {
var s = parseInt(e.substr(2 * a, 2), 16);
if (isNaN(s)) return a;
t[n + a] = s;
}
return a;
}
function C(t, e, n, o) {
return q(K(e, t.length - n), t, n, o);
}
function T(t, e, n, o) {
return q(Q(e), t, n, o);
}
function A(t, e, n, o) {
return T(t, e, n, o);
}
function O(t, e, n, o) {
return q(Z(e), t, n, o);
}
function N(t, e, n, o) {
return q(J(e, t.length - n), t, n, o);
}
c.prototype.write = function(t, e, n, o) {
if (void 0 === e) {
o = "utf8";
n = this.length;
e = 0;
} else if (void 0 === n && "string" == typeof e) {
o = e;
n = this.length;
e = 0;
} else {
if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
e |= 0;
if (isFinite(n)) {
n |= 0;
void 0 === o && (o = "utf8");
} else {
o = n;
n = void 0;
}
}
var i = this.length - e;
(void 0 === n || n > i) && (n = i);
if (t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
o || (o = "utf8");
for (var r = !1; ;) switch (o) {
case "hex":
return R(this, t, e, n);

case "utf8":
case "utf-8":
return C(this, t, e, n);

case "ascii":
return T(this, t, e, n);

case "latin1":
case "binary":
return A(this, t, e, n);

case "base64":
return O(this, t, e, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return N(this, t, e, n);

default:
if (r) throw new TypeError("Unknown encoding: " + o);
o = ("" + o).toLowerCase();
r = !0;
}
};
c.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function w(t, e, n) {
return 0 === e && n === t.length ? o.fromByteArray(t) : o.fromByteArray(t.slice(e, n));
}
function M(t, e, n) {
n = Math.min(t.length, n);
for (var o = [], i = e; i < n; ) {
var r = t[i], a = null, s = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
if (i + s <= n) {
var c, l, u, p;
switch (s) {
case 1:
r < 128 && (a = r);
break;

case 2:
128 == (192 & (c = t[i + 1])) && (p = (31 & r) << 6 | 63 & c) > 127 && (a = p);
break;

case 3:
c = t[i + 1];
l = t[i + 2];
128 == (192 & c) && 128 == (192 & l) && (p = (15 & r) << 12 | (63 & c) << 6 | 63 & l) > 2047 && (p < 55296 || p > 57343) && (a = p);
break;

case 4:
c = t[i + 1];
l = t[i + 2];
u = t[i + 3];
128 == (192 & c) && 128 == (192 & l) && 128 == (192 & u) && (p = (15 & r) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & u) > 65535 && p < 1114112 && (a = p);
}
}
if (null === a) {
a = 65533;
s = 1;
} else if (a > 65535) {
a -= 65536;
o.push(a >>> 10 & 1023 | 55296);
a = 56320 | 1023 & a;
}
o.push(a);
i += s;
}
return P(o);
}
var I = 4096;
function P(t) {
var e = t.length;
if (e <= I) return String.fromCharCode.apply(String, t);
for (var n = "", o = 0; o < e; ) n += String.fromCharCode.apply(String, t.slice(o, o += I));
return n;
}
function U(t, e, n) {
var o = "";
n = Math.min(t.length, n);
for (var i = e; i < n; ++i) o += String.fromCharCode(127 & t[i]);
return o;
}
function L(t, e, n) {
var o = "";
n = Math.min(t.length, n);
for (var i = e; i < n; ++i) o += String.fromCharCode(t[i]);
return o;
}
function D(t, e, n) {
var o, i = t.length;
(!e || e < 0) && (e = 0);
(!n || n < 0 || n > i) && (n = i);
for (var r = "", a = e; a < n; ++a) r += (o = t[a]) < 16 ? "0" + o.toString(16) : o.toString(16);
return r;
}
function B(t, e, n) {
for (var o = t.slice(e, n), i = "", r = 0; r < o.length; r += 2) i += String.fromCharCode(o[r] + 256 * o[r + 1]);
return i;
}
c.prototype.slice = function(t, e) {
var n, o = this.length;
(t = ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o);
(e = void 0 === e ? o : ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o);
e < t && (e = t);
if (c.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = c.prototype; else {
var i = e - t;
n = new c(i, void 0);
for (var r = 0; r < i; ++r) n[r] = this[r + t];
}
return n;
};
function G(t, e, n) {
if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
if (t + e > n) throw new RangeError("Trying to access beyond buffer length");
}
c.prototype.readUIntLE = function(t, e, n) {
t |= 0;
e |= 0;
n || G(t, e, this.length);
for (var o = this[t], i = 1, r = 0; ++r < e && (i *= 256); ) o += this[t + r] * i;
return o;
};
c.prototype.readUIntBE = function(t, e, n) {
t |= 0;
e |= 0;
n || G(t, e, this.length);
for (var o = this[t + --e], i = 1; e > 0 && (i *= 256); ) o += this[t + --e] * i;
return o;
};
c.prototype.readUInt8 = function(t, e) {
e || G(t, 1, this.length);
return this[t];
};
c.prototype.readUInt16LE = function(t, e) {
e || G(t, 2, this.length);
return this[t] | this[t + 1] << 8;
};
c.prototype.readUInt16BE = function(t, e) {
e || G(t, 2, this.length);
return this[t] << 8 | this[t + 1];
};
c.prototype.readUInt32LE = function(t, e) {
e || G(t, 4, this.length);
return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
};
c.prototype.readUInt32BE = function(t, e) {
e || G(t, 4, this.length);
return 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
};
c.prototype.readIntLE = function(t, e, n) {
t |= 0;
e |= 0;
n || G(t, e, this.length);
for (var o = this[t], i = 1, r = 0; ++r < e && (i *= 256); ) o += this[t + r] * i;
o >= (i *= 128) && (o -= Math.pow(2, 8 * e));
return o;
};
c.prototype.readIntBE = function(t, e, n) {
t |= 0;
e |= 0;
n || G(t, e, this.length);
for (var o = e, i = 1, r = this[t + --o]; o > 0 && (i *= 256); ) r += this[t + --o] * i;
r >= (i *= 128) && (r -= Math.pow(2, 8 * e));
return r;
};
c.prototype.readInt8 = function(t, e) {
e || G(t, 1, this.length);
return 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
};
c.prototype.readInt16LE = function(t, e) {
e || G(t, 2, this.length);
var n = this[t] | this[t + 1] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt16BE = function(t, e) {
e || G(t, 2, this.length);
var n = this[t + 1] | this[t] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt32LE = function(t, e) {
e || G(t, 4, this.length);
return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
};
c.prototype.readInt32BE = function(t, e) {
e || G(t, 4, this.length);
return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
};
c.prototype.readFloatLE = function(t, e) {
e || G(t, 4, this.length);
return i.read(this, t, !0, 23, 4);
};
c.prototype.readFloatBE = function(t, e) {
e || G(t, 4, this.length);
return i.read(this, t, !1, 23, 4);
};
c.prototype.readDoubleLE = function(t, e) {
e || G(t, 8, this.length);
return i.read(this, t, !0, 52, 8);
};
c.prototype.readDoubleBE = function(t, e) {
e || G(t, 8, this.length);
return i.read(this, t, !1, 52, 8);
};
function k(t, e, n, o, i, r) {
if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (e > i || e < r) throw new RangeError('"value" argument is out of bounds');
if (n + o > t.length) throw new RangeError("Index out of range");
}
c.prototype.writeUIntLE = function(t, e, n, o) {
t = +t;
e |= 0;
n |= 0;
o || k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
var i = 1, r = 0;
this[e] = 255 & t;
for (;++r < n && (i *= 256); ) this[e + r] = t / i & 255;
return e + n;
};
c.prototype.writeUIntBE = function(t, e, n, o) {
t = +t;
e |= 0;
n |= 0;
o || k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
var i = n - 1, r = 1;
this[e + i] = 255 & t;
for (;--i >= 0 && (r *= 256); ) this[e + i] = t / r & 255;
return e + n;
};
c.prototype.writeUInt8 = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 1, 255, 0);
c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t));
this[e] = 255 & t;
return e + 1;
};
function F(t, e, n, o) {
e < 0 && (e = 65535 + e + 1);
for (var i = 0, r = Math.min(t.length - n, 2); i < r; ++i) t[n + i] = (e & 255 << 8 * (o ? i : 1 - i)) >>> 8 * (o ? i : 1 - i);
}
c.prototype.writeUInt16LE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = 255 & t;
this[e + 1] = t >>> 8;
} else F(this, t, e, !0);
return e + 2;
};
c.prototype.writeUInt16BE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 8;
this[e + 1] = 255 & t;
} else F(this, t, e, !1);
return e + 2;
};
function j(t, e, n, o) {
e < 0 && (e = 4294967295 + e + 1);
for (var i = 0, r = Math.min(t.length - n, 4); i < r; ++i) t[n + i] = e >>> 8 * (o ? i : 3 - i) & 255;
}
c.prototype.writeUInt32LE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e + 3] = t >>> 24;
this[e + 2] = t >>> 16;
this[e + 1] = t >>> 8;
this[e] = 255 & t;
} else j(this, t, e, !0);
return e + 4;
};
c.prototype.writeUInt32BE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 24;
this[e + 1] = t >>> 16;
this[e + 2] = t >>> 8;
this[e + 3] = 255 & t;
} else j(this, t, e, !1);
return e + 4;
};
c.prototype.writeIntLE = function(t, e, n, o) {
t = +t;
e |= 0;
if (!o) {
var i = Math.pow(2, 8 * n - 1);
k(this, t, e, n, i - 1, -i);
}
var r = 0, a = 1, s = 0;
this[e] = 255 & t;
for (;++r < n && (a *= 256); ) {
t < 0 && 0 === s && 0 !== this[e + r - 1] && (s = 1);
this[e + r] = (t / a >> 0) - s & 255;
}
return e + n;
};
c.prototype.writeIntBE = function(t, e, n, o) {
t = +t;
e |= 0;
if (!o) {
var i = Math.pow(2, 8 * n - 1);
k(this, t, e, n, i - 1, -i);
}
var r = n - 1, a = 1, s = 0;
this[e + r] = 255 & t;
for (;--r >= 0 && (a *= 256); ) {
t < 0 && 0 === s && 0 !== this[e + r + 1] && (s = 1);
this[e + r] = (t / a >> 0) - s & 255;
}
return e + n;
};
c.prototype.writeInt8 = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 1, 127, -128);
c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t));
t < 0 && (t = 255 + t + 1);
this[e] = 255 & t;
return e + 1;
};
c.prototype.writeInt16LE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = 255 & t;
this[e + 1] = t >>> 8;
} else F(this, t, e, !0);
return e + 2;
};
c.prototype.writeInt16BE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 8;
this[e + 1] = 255 & t;
} else F(this, t, e, !1);
return e + 2;
};
c.prototype.writeInt32LE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 4, 2147483647, -2147483648);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = 255 & t;
this[e + 1] = t >>> 8;
this[e + 2] = t >>> 16;
this[e + 3] = t >>> 24;
} else j(this, t, e, !0);
return e + 4;
};
c.prototype.writeInt32BE = function(t, e, n) {
t = +t;
e |= 0;
n || k(this, t, e, 4, 2147483647, -2147483648);
t < 0 && (t = 4294967295 + t + 1);
if (c.TYPED_ARRAY_SUPPORT) {
this[e] = t >>> 24;
this[e + 1] = t >>> 16;
this[e + 2] = t >>> 8;
this[e + 3] = 255 & t;
} else j(this, t, e, !1);
return e + 4;
};
function H(t, e, n, o) {
if (n + o > t.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function V(t, e, n, o, r) {
r || H(t, 0, n, 4);
i.write(t, e, n, o, 23, 4);
return n + 4;
}
c.prototype.writeFloatLE = function(t, e, n) {
return V(this, t, e, !0, n);
};
c.prototype.writeFloatBE = function(t, e, n) {
return V(this, t, e, !1, n);
};
function x(t, e, n, o, r) {
r || H(t, 0, n, 8);
i.write(t, e, n, o, 52, 8);
return n + 8;
}
c.prototype.writeDoubleLE = function(t, e, n) {
return x(this, t, e, !0, n);
};
c.prototype.writeDoubleBE = function(t, e, n) {
return x(this, t, e, !1, n);
};
c.prototype.copy = function(t, e, n, o) {
n || (n = 0);
o || 0 === o || (o = this.length);
e >= t.length && (e = t.length);
e || (e = 0);
o > 0 && o < n && (o = n);
if (o === n) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (e < 0) throw new RangeError("targetStart out of bounds");
if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
if (o < 0) throw new RangeError("sourceEnd out of bounds");
o > this.length && (o = this.length);
t.length - e < o - n && (o = t.length - e + n);
var i, r = o - n;
if (this === t && n < e && e < o) for (i = r - 1; i >= 0; --i) t[i + e] = this[i + n]; else if (r < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (i = 0; i < r; ++i) t[i + e] = this[i + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + r), e);
return r;
};
c.prototype.fill = function(t, e, n, o) {
if ("string" == typeof t) {
if ("string" == typeof e) {
o = e;
e = 0;
n = this.length;
} else if ("string" == typeof n) {
o = n;
n = this.length;
}
if (1 === t.length) {
var i = t.charCodeAt(0);
i < 256 && (t = i);
}
if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
if ("string" == typeof o && !c.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
} else "number" == typeof t && (t &= 255);
if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
if (n <= e) return this;
e >>>= 0;
n = void 0 === n ? this.length : n >>> 0;
t || (t = 0);
var r;
if ("number" == typeof t) for (r = e; r < n; ++r) this[r] = t; else {
var a = c.isBuffer(t) ? t : K(new c(t, o).toString()), s = a.length;
for (r = 0; r < n - e; ++r) this[r + e] = a[r % s];
}
return this;
};
var Y = /[^+\/0-9A-Za-z-_]/g;
function z(t) {
if ((t = W(t).replace(Y, "")).length < 2) return "";
for (;t.length % 4 != 0; ) t += "=";
return t;
}
function W(t) {
return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function K(t, e) {
e = e || Infinity;
for (var n, o = t.length, i = null, r = [], a = 0; a < o; ++a) {
if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
if (!i) {
if (n > 56319) {
(e -= 3) > -1 && r.push(239, 191, 189);
continue;
}
if (a + 1 === o) {
(e -= 3) > -1 && r.push(239, 191, 189);
continue;
}
i = n;
continue;
}
if (n < 56320) {
(e -= 3) > -1 && r.push(239, 191, 189);
i = n;
continue;
}
n = 65536 + (i - 55296 << 10 | n - 56320);
} else i && (e -= 3) > -1 && r.push(239, 191, 189);
i = null;
if (n < 128) {
if ((e -= 1) < 0) break;
r.push(n);
} else if (n < 2048) {
if ((e -= 2) < 0) break;
r.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((e -= 3) < 0) break;
r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((e -= 4) < 0) break;
r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return r;
}
function Q(t) {
for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
return e;
}
function J(t, e) {
for (var n, o, i, r = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) {
o = (n = t.charCodeAt(a)) >> 8;
i = n % 256;
r.push(i);
r.push(o);
}
return r;
}
function Z(t) {
return o.toByteArray(z(t));
}
function q(t, e, n, o) {
for (var i = 0; i < o && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
return i;
}
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 5,
ieee754: 9,
isarray: 7
} ],
7: [ function(t, e) {
var n = {}.toString;
e.exports = Array.isArray || function(t) {
return "[object Array]" == n.call(t);
};
}, {} ],
8: [ function(t, e) {
(function(n) {
var o = t("util"), i = t("assert");
function r() {
return new Date().getTime();
}
var a, s = Array.prototype.slice, c = {};
a = "undefined" != typeof n && n.console ? n.console : "undefined" != typeof window && window.console ? window.console : {};
for (var l = [ [ function() {}, "log" ], [ function() {
a.log.apply(a, arguments);
}, "info" ], [ function() {
a.log.apply(a, arguments);
}, "warn" ], [ function() {
a.warn.apply(a, arguments);
}, "error" ], [ function(t) {
c[t] = r();
}, "time" ], [ function(t) {
var e = c[t];
if (!e) throw new Error("No such label: " + t);
delete c[t];
var n = r() - e;
a.log(t + ": " + n + "ms");
}, "timeEnd" ], [ function() {
var t = new Error();
t.name = "Trace";
t.message = o.format.apply(null, arguments);
a.error(t.stack);
}, "trace" ], [ function(t) {
a.log(o.inspect(t) + "\n");
}, "dir" ], [ function(t) {
if (!t) {
var e = s.call(arguments, 1);
i.ok(!1, o.format.apply(null, e));
}
}, "assert" ] ], u = 0; u < l.length; u++) {
var p = l[u], d = p[0], f = p[1];
a[f] || (a[f] = d);
}
e.exports = a;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
assert: 1,
util: 13
} ],
9: [ function(t, e, n) {
n.read = function(t, e, n, o, i) {
var r, a, s = 8 * i - o - 1, c = (1 << s) - 1, l = c >> 1, u = -7, p = n ? i - 1 : 0, d = n ? -1 : 1, f = t[e + p];
p += d;
r = f & (1 << -u) - 1;
f >>= -u;
u += s;
for (;u > 0; r = 256 * r + t[e + p], p += d, u -= 8) ;
a = r & (1 << -u) - 1;
r >>= -u;
u += o;
for (;u > 0; a = 256 * a + t[e + p], p += d, u -= 8) ;
if (0 === r) r = 1 - l; else {
if (r === c) return a ? NaN : Infinity * (f ? -1 : 1);
a += Math.pow(2, o);
r -= l;
}
return (f ? -1 : 1) * a * Math.pow(2, r - o);
};
n.write = function(t, e, n, o, i, r) {
var a, s, c, l = 8 * r - i - 1, u = (1 << l) - 1, p = u >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = o ? 0 : r - 1, h = o ? 1 : -1, _ = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
e = Math.abs(e);
if (isNaN(e) || Infinity === e) {
s = isNaN(e) ? 1 : 0;
a = u;
} else {
a = Math.floor(Math.log(e) / Math.LN2);
if (e * (c = Math.pow(2, -a)) < 1) {
a--;
c *= 2;
}
if ((e += a + p >= 1 ? d / c : d * Math.pow(2, 1 - p)) * c >= 2) {
a++;
c /= 2;
}
if (a + p >= u) {
s = 0;
a = u;
} else if (a + p >= 1) {
s = (e * c - 1) * Math.pow(2, i);
a += p;
} else {
s = e * Math.pow(2, p - 1) * Math.pow(2, i);
a = 0;
}
}
for (;i >= 8; t[n + f] = 255 & s, f += h, s /= 256, i -= 8) ;
a = a << i | s;
l += i;
for (;l > 0; t[n + f] = 255 & a, f += h, a /= 256, l -= 8) ;
t[n + f - h] |= 128 * _;
};
}, {} ],
10: [ function(t, e) {
var n, o, i = e.exports = {};
function r() {
throw new Error("setTimeout has not been defined");
}
function a() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
n = "function" == typeof setTimeout ? setTimeout : r;
} catch (t) {
n = r;
}
try {
o = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (t) {
o = a;
}
})();
function s(t) {
if (n === setTimeout) return setTimeout(t, 0);
if ((n === r || !n) && setTimeout) {
n = setTimeout;
return setTimeout(t, 0);
}
try {
return n(t, 0);
} catch (e) {
try {
return n.call(null, t, 0);
} catch (e) {
return n.call(this, t, 0);
}
}
}
function c(t) {
if (o === clearTimeout) return clearTimeout(t);
if ((o === a || !o) && clearTimeout) {
o = clearTimeout;
return clearTimeout(t);
}
try {
return o(t);
} catch (e) {
try {
return o.call(null, t);
} catch (e) {
return o.call(this, t);
}
}
}
var l, u = [], p = !1, d = -1;
function f() {
if (p && l) {
p = !1;
l.length ? u = l.concat(u) : d = -1;
u.length && h();
}
}
function h() {
if (!p) {
var t = s(f);
p = !0;
for (var e = u.length; e; ) {
l = u;
u = [];
for (;++d < e; ) l && l[d].run();
d = -1;
e = u.length;
}
l = null;
p = !1;
c(t);
}
}
i.nextTick = function(t) {
var e = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
u.push(new _(t, e));
1 !== u.length || p || s(h);
};
function _(t, e) {
this.fun = t;
this.array = e;
}
_.prototype.run = function() {
this.fun.apply(null, this.array);
};
i.title = "browser";
i.browser = !0;
i.env = {};
i.argv = [];
i.version = "";
i.versions = {};
function g() {}
i.on = g;
i.addListener = g;
i.once = g;
i.off = g;
i.removeListener = g;
i.removeAllListeners = g;
i.emit = g;
i.prependListener = g;
i.prependOnceListener = g;
i.listeners = function() {
return [];
};
i.binding = function() {
throw new Error("process.binding is not supported");
};
i.cwd = function() {
return "/";
};
i.chdir = function() {
throw new Error("process.chdir is not supported");
};
i.umask = function() {
return 0;
};
}, {} ],
11: [ function(t, e, n) {
arguments[4][2][0].apply(n, arguments);
}, {
dup: 2
} ],
12: [ function(t, e, n) {
arguments[4][3][0].apply(n, arguments);
}, {
dup: 3
} ],
13: [ function(t, e, n) {
arguments[4][4][0].apply(n, arguments);
}, {
"./support/isBuffer": 12,
_process: 10,
dup: 4,
inherits: 11
} ],
14: [ function(t, e) {
var n = {
utf8: {
stringToBytes: function(t) {
return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
},
bytesToString: function(t) {
return decodeURIComponent(escape(n.bin.bytesToString(t)));
}
},
bin: {
stringToBytes: function(t) {
for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
return e;
},
bytesToString: function(t) {
for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
return e.join("");
}
}
};
e.exports = n;
}, {} ],
15: [ function(t, e) {
n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {
rotl: function(t, e) {
return t << e | t >>> 32 - e;
},
rotr: function(t, e) {
return t << 32 - e | t >>> e;
},
endian: function(t) {
if (t.constructor == Number) return 16711935 & o.rotl(t, 8) | 4278255360 & o.rotl(t, 24);
for (var e = 0; e < t.length; e++) t[e] = o.endian(t[e]);
return t;
},
randomBytes: function(t) {
for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
return e;
},
bytesToWords: function(t) {
for (var e = [], n = 0, o = 0; n < t.length; n++, o += 8) e[o >>> 5] |= t[n] << 24 - o % 32;
return e;
},
wordsToBytes: function(t) {
for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
return e;
},
bytesToHex: function(t) {
for (var e = [], n = 0; n < t.length; n++) {
e.push((t[n] >>> 4).toString(16));
e.push((15 & t[n]).toString(16));
}
return e.join("");
},
hexToBytes: function(t) {
for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
return e;
},
bytesToBase64: function(t) {
for (var e = [], o = 0; o < t.length; o += 3) for (var i = t[o] << 16 | t[o + 1] << 8 | t[o + 2], r = 0; r < 4; r++) 8 * o + 6 * r <= 8 * t.length ? e.push(n.charAt(i >>> 6 * (3 - r) & 63)) : e.push("=");
return e.join("");
},
base64ToBytes: function(t) {
t = t.replace(/[^A-Z0-9+\/]/gi, "");
for (var e = [], o = 0, i = 0; o < t.length; i = ++o % 4) 0 != i && e.push((n.indexOf(t.charAt(o - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | n.indexOf(t.charAt(o)) >>> 6 - 2 * i);
return e;
}
}, e.exports = o;
var n, o;
}, {} ],
16: [ function(t, e) {
e.exports = function(t) {
return null != t && (n(t) || o(t) || !!t._isBuffer);
};
function n(t) {
return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
}
function o(t) {
return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0));
}
}, {} ],
17: [ function(t, e) {
(function() {
var n = t("crypt"), o = t("charenc").utf8, i = t("is-buffer"), r = t("charenc").bin, a = function(t, e) {
t.constructor == String ? t = e && "binary" === e.encoding ? r.stringToBytes(t) : o.stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());
for (var s = n.bytesToWords(t), c = 8 * t.length, l = 1732584193, u = -271733879, p = -1732584194, d = 271733878, f = 0; f < s.length; f++) s[f] = 16711935 & (s[f] << 8 | s[f] >>> 24) | 4278255360 & (s[f] << 24 | s[f] >>> 8);
s[c >>> 5] |= 128 << c % 32;
s[14 + (c + 64 >>> 9 << 4)] = c;
var h = a._ff, _ = a._gg, g = a._hh, y = a._ii;
for (f = 0; f < s.length; f += 16) {
var m = l, E = u, v = p, S = d;
l = h(l, u, p, d, s[f + 0], 7, -680876936);
d = h(d, l, u, p, s[f + 1], 12, -389564586);
p = h(p, d, l, u, s[f + 2], 17, 606105819);
u = h(u, p, d, l, s[f + 3], 22, -1044525330);
l = h(l, u, p, d, s[f + 4], 7, -176418897);
d = h(d, l, u, p, s[f + 5], 12, 1200080426);
p = h(p, d, l, u, s[f + 6], 17, -1473231341);
u = h(u, p, d, l, s[f + 7], 22, -45705983);
l = h(l, u, p, d, s[f + 8], 7, 1770035416);
d = h(d, l, u, p, s[f + 9], 12, -1958414417);
p = h(p, d, l, u, s[f + 10], 17, -42063);
u = h(u, p, d, l, s[f + 11], 22, -1990404162);
l = h(l, u, p, d, s[f + 12], 7, 1804603682);
d = h(d, l, u, p, s[f + 13], 12, -40341101);
p = h(p, d, l, u, s[f + 14], 17, -1502002290);
l = _(l, u = h(u, p, d, l, s[f + 15], 22, 1236535329), p, d, s[f + 1], 5, -165796510);
d = _(d, l, u, p, s[f + 6], 9, -1069501632);
p = _(p, d, l, u, s[f + 11], 14, 643717713);
u = _(u, p, d, l, s[f + 0], 20, -373897302);
l = _(l, u, p, d, s[f + 5], 5, -701558691);
d = _(d, l, u, p, s[f + 10], 9, 38016083);
p = _(p, d, l, u, s[f + 15], 14, -660478335);
u = _(u, p, d, l, s[f + 4], 20, -405537848);
l = _(l, u, p, d, s[f + 9], 5, 568446438);
d = _(d, l, u, p, s[f + 14], 9, -1019803690);
p = _(p, d, l, u, s[f + 3], 14, -187363961);
u = _(u, p, d, l, s[f + 8], 20, 1163531501);
l = _(l, u, p, d, s[f + 13], 5, -1444681467);
d = _(d, l, u, p, s[f + 2], 9, -51403784);
p = _(p, d, l, u, s[f + 7], 14, 1735328473);
l = g(l, u = _(u, p, d, l, s[f + 12], 20, -1926607734), p, d, s[f + 5], 4, -378558);
d = g(d, l, u, p, s[f + 8], 11, -2022574463);
p = g(p, d, l, u, s[f + 11], 16, 1839030562);
u = g(u, p, d, l, s[f + 14], 23, -35309556);
l = g(l, u, p, d, s[f + 1], 4, -1530992060);
d = g(d, l, u, p, s[f + 4], 11, 1272893353);
p = g(p, d, l, u, s[f + 7], 16, -155497632);
u = g(u, p, d, l, s[f + 10], 23, -1094730640);
l = g(l, u, p, d, s[f + 13], 4, 681279174);
d = g(d, l, u, p, s[f + 0], 11, -358537222);
p = g(p, d, l, u, s[f + 3], 16, -722521979);
u = g(u, p, d, l, s[f + 6], 23, 76029189);
l = g(l, u, p, d, s[f + 9], 4, -640364487);
d = g(d, l, u, p, s[f + 12], 11, -421815835);
p = g(p, d, l, u, s[f + 15], 16, 530742520);
l = y(l, u = g(u, p, d, l, s[f + 2], 23, -995338651), p, d, s[f + 0], 6, -198630844);
d = y(d, l, u, p, s[f + 7], 10, 1126891415);
p = y(p, d, l, u, s[f + 14], 15, -1416354905);
u = y(u, p, d, l, s[f + 5], 21, -57434055);
l = y(l, u, p, d, s[f + 12], 6, 1700485571);
d = y(d, l, u, p, s[f + 3], 10, -1894986606);
p = y(p, d, l, u, s[f + 10], 15, -1051523);
u = y(u, p, d, l, s[f + 1], 21, -2054922799);
l = y(l, u, p, d, s[f + 8], 6, 1873313359);
d = y(d, l, u, p, s[f + 15], 10, -30611744);
p = y(p, d, l, u, s[f + 6], 15, -1560198380);
u = y(u, p, d, l, s[f + 13], 21, 1309151649);
l = y(l, u, p, d, s[f + 4], 6, -145523070);
d = y(d, l, u, p, s[f + 11], 10, -1120210379);
p = y(p, d, l, u, s[f + 2], 15, 718787259);
u = y(u, p, d, l, s[f + 9], 21, -343485551);
l = l + m >>> 0;
u = u + E >>> 0;
p = p + v >>> 0;
d = d + S >>> 0;
}
return n.endian([ l, u, p, d ]);
};
a._ff = function(t, e, n, o, i, r, a) {
var s = t + (e & n | ~e & o) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + e;
};
a._gg = function(t, e, n, o, i, r, a) {
var s = t + (e & o | n & ~o) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + e;
};
a._hh = function(t, e, n, o, i, r, a) {
var s = t + (e ^ n ^ o) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + e;
};
a._ii = function(t, e, n, o, i, r, a) {
var s = t + (n ^ (e | ~o)) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + e;
};
a._blocksize = 16;
a._digestsize = 16;
e.exports = function(t, e) {
if (null == t) throw new Error("Illegal argument " + t);
var o = n.wordsToBytes(a(t, e));
return e && e.asBytes ? o : e && e.asString ? r.bytesToString(o) : n.bytesToHex(o);
};
})();
}, {
charenc: 14,
crypt: 15,
"is-buffer": 16
} ],
Alert: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "78052U/SxxKbaWY5cjj8G5p", "Alert");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../../framework/componects/EventComponent"), a = t("../config/Config"), s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._closeBtn = null;
e._vcontent = null;
e._textContent = null;
e._richTextContent = null;
e._contentLayout = null;
e._confirm = null;
e._cancel = null;
e._config = null;
return e;
}
Object.defineProperty(e.prototype, "config", {
get: function() {
return this._config;
},
enumerable: !1,
configurable: !0
});
e.prototype.show = function(t) {
this._vcontent = cc.find("content", this.node);
this._contentLayout = cc.find("scroll/view/content", this._vcontent).getComponent(cc.Layout);
this._textContent = cc.find("scroll/view/content/content", this._vcontent).getComponent(cc.Label);
this._richTextContent = cc.find("scroll/view/content/richContent", this._vcontent).getComponent(cc.RichText);
this._closeBtn = cc.find("bgs/back/Title/close", this._vcontent);
this._confirm = cc.find("layout/confirm", this._vcontent);
this._cancel = cc.find("layout/cancel", this._vcontent);
t.confirmString || (t.confirmString = "Ok");
t.cancelString || (t.cancelString = "Cancel");
this._config = t;
this.writeContent(t);
this.showButton(t);
};
e.prototype.writeContent = function(t) {
if (t.richText) {
this._textContent.node.active = !1;
this._richTextContent.node.active = !0;
this._richTextContent.string = t.richText;
this._richTextContent._updateRichText();
(e = .5 * (215 - this._richTextContent.node.getContentSize().height)) < 0 && (e = 0);
this._contentLayout.paddingTop = e;
} else {
this._textContent.node.active = !0;
this._richTextContent.node.active = !1;
if (t.text) {
this._textContent.string = t.text;
this._textContent._forceUpdateRenderData();
var e;
(e = .5 * (215 - this._textContent.node.getContentSize().height)) < 0 && (e = 0);
this._contentLayout.paddingTop = e;
} else {
Log.e("请指定提示内容");
this._textContent.string = "";
}
}
t.confirmString && (n = cc.find("Background/Label", this._confirm)) && (n.getComponent(cc.Label).string = t.confirmString);
if (t.cancelString) {
var n;
(n = cc.find("Background/Label", this._cancel)) && (n.getComponent(cc.Label).string = t.cancelString);
}
};
e.prototype.showButton = function(t) {
if (this._confirm && this._cancel && this._closeBtn) {
this._closeBtn.active = t.hideX;
this.onN(this._closeBtn, cc.Node.EventType.TOUCH_END, this.close.bind(this));
if (t.confirmCb) {
this._confirm.active = !0;
this.onN(this._confirm, cc.Node.EventType.TOUCH_END, this.onSureClick.bind(this));
} else this._confirm.active = !1;
if (t.cancelCb) {
this._cancel.active = !0;
this.onN(this._cancel, cc.Node.EventType.TOUCH_END, this.onCancelClick.bind(this));
} else this._cancel.active = !1;
this._confirm.active ? this._cancel.active || (this._confirm.x = 0) : this._cancel.active ? this._cancel.x = 0 : Log.w("提示框无按钮显示");
}
};
e.prototype.close = function() {
var t = this;
App.globalAudio.playButtonClick();
if (this._config.immediatelyCallback) {
this._close(null);
this._config.tag = 1;
this.config.closeCb && this.config.closeCb();
} else this._close(function() {
t.config.closeCb && t.config.closeCb();
});
};
e.prototype._close = function(t) {
if (cc.isValid(this._vcontent)) {
cc.Tween.stopAllByTarget(this._vcontent);
App.alert.finishAlert();
t && t();
}
};
e.prototype.onSureClick = function() {
var t = this;
App.globalAudio.playButtonClick();
if (this._config.immediatelyCallback) {
this._close(null);
this._config.tag = 1;
this._config.confirmCb && this._config.confirmCb();
} else this._close(function() {
t._config.confirmCb && t._config.confirmCb();
});
};
e.prototype.onCancelClick = function() {
var t = this;
App.globalAudio.playButtonClick();
if (this._config.immediatelyCallback) {
this._close(null);
this._config.tag = 1;
this._config.cancelCb && this._config.cancelCb();
} else this._close(function() {
t._config.cancelCb && t._config.cancelCb();
});
};
return e;
}(r.default), c = function() {
function t() {
this.module = null;
this.isResident = !0;
this.curPanel = null;
this.queue = [];
}
Object.defineProperty(t.prototype, "prefab", {
get: function() {
return App.uiManager.getScenePrefab("Alert");
},
enumerable: !1,
configurable: !0
});
t.prototype.getConfig = function(t) {
var e = {};
t.tag && (e.tag = t.tag);
t.text && (e.text = t.text);
t.title && (e.title = t.title);
t.confirmString && (e.confirmString = t.confirmString);
t.cancelString && (e.cancelString = t.cancelString);
t.richText && (e.richText = t.richText);
t.immediatelyCallback && (e.immediatelyCallback = t.immediatelyCallback);
t.isRepeat && (e.isRepeat = t.isRepeat);
return e;
};
t.prototype.show = function(t) {
Log.e("------------------------------------------");
if (t.tag && 0 == t.isRepeat && this.isRepeat(t.tag)) {
Log.w("弹出框已经存在 config : " + JSON.stringify(this.getConfig(t)));
return !1;
}
this.queue.push(t);
this._show(t);
return !0;
};
t.prototype.isCurrentShow = function(t) {
return !(!this.curPanel || this.curPanel.getComponent(s).config.tag != t);
};
t.prototype.currentShow = function(t) {
if (this.curPanel) {
var e = this.curPanel.getComponent(s).config;
if (!t) return e;
if (e.tag == t) return e;
}
return null;
};
t.prototype.isRepeat = function(t) {
if (this.curPanel) {
var e = this.curPanel.getComponent(s).config;
if (e.tag == t) {
Log.w("重复的弹出框 config ; " + JSON.stringify(this.getConfig(e)));
return !0;
}
} else for (var n = 0; n < this.queue.length; n++) {
var o = this.queue[n];
if (o.tag == t) {
Log.w("重复的弹出框 config ; " + JSON.stringify(this.getConfig(o)));
return !0;
}
}
return !1;
};
t.prototype.close = function(t) {
if (t) {
for (var e = this.queue.length; e--; ) this.queue[e].tag == t && this.queue.splice(e, 1);
this.curPanel && this.curPanel.getComponent(s).config.tag == t && this.finishAlert();
} else this.finishAlert();
};
t.prototype.closeAll = function() {
this.queue = [];
this.finishAlert();
};
t.prototype.finishAlert = function() {
if (this.curPanel) {
this.curPanel.destroy();
this.curPanel = null;
}
var t = this.queue.shift();
if (0 != this.queue.length) {
this._show(this.queue[0]);
return this.queue[0];
}
return t;
};
t.prototype._show = function(t) {
if (!this.curPanel) {
this.curPanel = cc.instantiate(this.prefab);
var e = this.curPanel.addComponent(s);
t.isSpOrder ? App.uiManager.addView(this.curPanel, a.ViewZOrder.SpGameLoading) : App.uiManager.addView(this.curPanel, a.ViewZOrder.Alert);
e.show(t);
}
};
t.module = "【Alert】";
return t;
}();
n.default = c;
cc._RF.pop();
}, {
"../../framework/componects/EventComponent": "EventComponent",
"../config/Config": "Config"
} ],
AnimationPlayState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0ca1c2dxK1CBLcdpUI2RcMf", "AnimationPlayState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
return e;
}
e.prototype.init = function() {
if (!this.anim) {
this.anim = this.node.getComponentInChildren(cc.Animation);
this.rewardNode = this.anim.node;
}
};
e.prototype.show = function(e) {
t.prototype.show.call(this, e);
this.init();
this.node.active = !0;
this.anim.play(null, 0);
};
e.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ c ], e);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
Animation_Nodes: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c7591OPSYRHNZ0MVtaoU6om", "Animation_Nodes");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Animation_PlayType = void 0;
var a, s = cc._decorator, c = s.ccclass, l = s.property;
(function(t) {
t[t.Once = 0] = "Once";
t[t.Loop = 1] = "Loop";
})(a = n.Animation_PlayType || (n.Animation_PlayType = {}));
var u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isPlayOnEnable = !0;
e.playType = a.Once;
e.speed = .05;
e.isStop_LastFrameOfOnce = !1;
e.beginShowId = 0;
e.delayTimeToSecond = 0;
e.needPlayCount = 1;
e.hadPlayCount = 0;
e.node_children = [];
e.callback_OverOnce = null;
e.curShowId = 0;
e.time = 0;
e.lastTime = 0;
e.isRun = !1;
return e;
}
e.prototype.onLoad = function() {
this.node_children = [];
for (var t = this.node.children, e = 0; e < t.length; e++) {
var n = t[e];
n.active = !1;
this.node_children.push(n);
}
};
e.prototype.onEnable = function() {
0 != this.node_children.length && this.isPlayOnEnable && this.Play();
};
e.prototype.Play = function() {
this.hadPlayCount = 0;
this.curShowId = this.beginShowId;
this.beginShowId >= 0 && this.ShowCurNode();
this.lastTime = this.time + this.delayTimeToSecond;
this.isRun = !0;
};
e.prototype.Stop = function() {
this.node.active = !1;
this.isRun = !1;
for (var t = 0; t < this.node_children.length; t++) this.node_children[t].active = !1;
};
e.prototype.SetCallback_OnceOver = function(t) {
this.callback_OverOnce = t;
};
e.prototype.SetNeedPlayCount = function(t) {
this.needPlayCount = t;
};
e.prototype.ShowCurNode = function() {
this.node_children[this.curShowId].active = !0;
};
e.prototype.update = function(t) {
this.time += t;
if (this.isRun && this.lastTime + this.speed <= this.time) {
this.lastTime = this.time;
this.playType == a.Loop ? this.CheckNextShow_Loop() : this.CheckNextShow_Once();
}
};
e.prototype.CheckNextShow_Once = function() {
this.curShowId >= 0 && (this.node_children[this.curShowId].active = !1);
if (this.curShowId == this.node_children.length - 1) {
this.hadPlayCount++;
if (this.hadPlayCount < this.needPlayCount) {
this.curShowId = (this.curShowId + 1) % this.node_children.length;
this.ShowCurNode();
return;
}
if (this.callback_OverOnce) {
this.callback_OverOnce();
this.callback_OverOnce = null;
}
this.isRun = !1;
this.isStop_LastFrameOfOnce ? this.node_children[this.curShowId].active = !0 : this.Stop();
} else {
this.curShowId = (this.curShowId + 1) % this.node_children.length;
this.ShowCurNode();
}
};
e.prototype.CheckNextShow_Loop = function() {
this.curShowId >= 0 && (this.node_children[this.curShowId].active = !1);
this.curShowId = (this.curShowId + 1) % this.node_children.length;
this.ShowCurNode();
};
r([ l ], e.prototype, "isPlayOnEnable", void 0);
r([ l({
type: cc.Enum(a)
}) ], e.prototype, "playType", void 0);
r([ l ], e.prototype, "speed", void 0);
r([ l ], e.prototype, "isStop_LastFrameOfOnce", void 0);
r([ l ], e.prototype, "beginShowId", void 0);
r([ l ], e.prototype, "delayTimeToSecond", void 0);
return r([ c ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
AppInfo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fd091hr2g1Ekp9f7yM7fDrc", "AppInfo");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../HotVersion"), i = t("../common/config/ConstString"), r = t("../common/config/GlobalVar"), a = t("../common/enum/GlobalEnum"), s = t("../common/utils/CmmUtils"), c = t("../config/URLConfig"), l = t("./GameNativeConfig"), u = t("./SdkManager"), p = function() {
function t() {}
Object.defineProperty(t, "data", {
get: function() {
null == this._data && (this._data = JSON.parse(u.default.getGameConfig()));
return this._data;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "appData", {
get: function() {
return this._data;
},
enumerable: !1,
configurable: !0
});
t.initAppsflyerSdk = function() {};
t.getLoginType = function() {
this._loginType = App.storage.getItem(l.default.Key.autoLoginType, null);
return this._loginType;
};
t.getVerCode = function() {
return t.isApp ? this.data.gameVersion : u.default.verCode;
};
t.getAppVer = function() {
return o.default.hot_version;
};
t.getChannelId = function() {
return this.data.channel || u.default.channelID;
};
t.getOffLineMode = function() {
return "true" == this.data.offline;
};
t.isSimulator = function() {
return "1" == u.default.CheckIsSimulator();
};
t.getVersionString = function() {
if (App.SingleGame) return "h5_" + t.getAppVer();
var e = c.default.getChannel();
return e ? t.getChannelId() + "_" + e.version + "_" + t.getAppVer() + "_" + e.id : "error";
};
t.getPlatform = function() {
return App.IsHtmlGame ? 1003 : t.isAndroid ? 1001 : t.isIOS ? 1004 : 1003;
};
t.getLanguage = function() {
return this.data.local || "";
};
t.getDeviceId = function() {
return u.default.getDeviceId() || "";
};
t.getThridInfo = function() {
return this.data.hardware || "";
};
t.getAdjust_Adid = function() {
null == this._adid && (this._adid = u.default.getAdjustAdid());
return this._adid || "";
};
t.getAppflyId = function() {
null == this._afid && (this._afid = u.default.GetAppsFlyerId());
return this._afid || "";
};
t.getGoogleAdId = function() {
null == this._googleId && (this._googleId = u.default.getGoogleID());
return this._googleId || u.default.getDeviceId();
};
t.getFireBaseAppInstanceID = function() {
return u.default.getFirebaseAppInstanceId() || "";
};
t.getPhoneOS = function() {
return this.data.supportAbi || "";
};
t.isSupportBackHome = function() {
if (this.data && this.data.gameVersion) try {
return Number.parseInt(this.data.gameVersion.split(".")[0]) >= 2;
} catch (t) {
return !1;
}
return !1;
};
t.isSupportOpenAndroidUrl = function() {
if (this.data && this.data.gameVersion) try {
return Number.parseInt(this.data.gameVersion.split(".")[0]) >= 3;
} catch (t) {
return !1;
}
return !1;
};
t.isSupportGoogleLogin = function() {
if (!t.isAndroid) return t.isIOS, !1;
if (this.data && this.data.gameVersion) try {
return Number.parseInt(this.data.gameVersion.split(".")[0]) >= 4;
} catch (t) {
return !1;
}
};
t.getPhoneDeviceType = function() {
return cc.sys.os || "";
};
t.getSimOperator = function() {
return this.data.simOperator || "";
};
t.getOsVersion = function() {
return this.data.device || "";
};
t.getMobileBrand = function() {
return this.data.brand || "";
};
t.getMobileModel = function() {
return this.data.model || "";
};
t.getOpenUDID = function() {
return this.data.androidId || "";
};
t.getCashModel = function() {
return this.data["version.codename"] || "";
};
t.getYcn = function() {
return "ver_uid";
};
t.getInstallRefer = function() {
return this.data.installed || "";
};
t.checkVpn = function() {
return "";
};
t.getDeviceInfo = function() {
return this.data.display || "";
};
t.getAllInstallPackages = function() {
return this.data.pkgName || "";
};
Object.defineProperty(t, "pkgLabel", {
get: function() {
return this.data.pkgLabel || "";
},
enumerable: !1,
configurable: !0
});
t.getPkgId = function() {
null == this._pkgId && (null != this.data.pkgId ? this._pkgId = this.data.pkgId : this._pkgId = u.default.getPkgId());
return this._pkgId || "";
};
t.hasBigFunSdk = function() {
return 1;
};
t.hasletPmSdk = function() {
return 1;
};
t.hasAdjustSdk = function() {
return !0;
};
t.hasKaoPuSdk = function() {
return !1;
};
Object.defineProperty(t, "ostime", {
get: function() {
return s.CmmUtils.msec;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "isAndroid", {
get: function() {
return !cc.sys.isBrowser && cc.sys.os == cc.sys.OS_ANDROID;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "isIOS", {
get: function() {
return !cc.sys.isBrowser && cc.sys.os == cc.sys.OS_IOS;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "isBrowser", {
get: function() {
return !!cc.sys.isBrowser;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "isApp", {
get: function() {
return this.isIOS || this.isAndroid;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "isWindowBrowser", {
get: function() {
return !!cc.sys.isBrowser && cc.sys.os != cc.sys.OS_ANDROID && cc.sys.os != cc.sys.OS_IOS;
},
enumerable: !1,
configurable: !0
});
t.showCustomService = function() {
var t = App.storage.getItem(i.ConstString.userId), e = App.storage.getItem(i.ConstString.userName), n = r.GlobalVar.cusUrl;
t && (n = n.replace("unset_id", t));
e && (n = n.replace("unset_name", e));
n += "&lan=0";
u.default.openUrl(n);
};
t.showNtaUrl = function() {
u.default.openUrl(r.GlobalVar.ntaUrl);
};
t.showNoticeUrl = function() {};
t.showShareLinkUrl = function() {
u.default.setClipboardContent(r.GlobalVar.shareLinkUrl);
};
t.showTC = function() {
u.default.openUrl(r.GlobalVar.tc_url);
};
t.showPP = function() {
u.default.openUrl(r.GlobalVar.pp_url);
};
t.showKYC = function() {
u.default.openUrl(r.GlobalVar.kycUrl);
};
t.getCountryLange = function() {
var t = a.GlobalEnum.LanguageType.English;
switch (r.GlobalVar.countryCode) {
case 0:
t = a.GlobalEnum.LanguageType.Hindi;
break;

case 1:
t = a.GlobalEnum.LanguageType.English;
break;

case 2:
t = a.GlobalEnum.LanguageType.Indonesian;
break;

case 3:
t = a.GlobalEnum.LanguageType.Portuguese;
break;

case 4:
t = a.GlobalEnum.LanguageType.HindiEnglish;
break;

case 5:
t = a.GlobalEnum.LanguageType.Mexico;
}
return t;
};
t.isHaveTwoLanguage = function() {
return t.getCountryLange() != a.GlobalEnum.LanguageType.English;
};
t.getCountryLanguages = function() {
var t = [];
switch (r.GlobalVar.countryCode) {
case 3:
t = [ {
name: "Português",
type: 3
}, {
name: "English",
type: 0
} ];
break;

case 1:
t = [ {
name: "English",
type: 0
} ];
break;

default:
t = [ {
name: "English",
type: 0
}, {
name: "हिंदी भाषा",
type: 1
}, {
name: "Hindi(English)",
type: 4
} ];
}
return t;
};
t.getOneLinkInviteCode = function() {
if (App.IsHtmlGame) {
var e = u.default._ios_addeeplink;
if (e) {
console.error("+++++++++++++++++++++++" + e);
l = t.getIOSInviteBrowserValue("deep_link_value");
s.CmmUtils.stringNotEmpty(l) || (l = t.getCookie("deep_link_value"));
var n = t.getIOSInviteBrowserValue("deep_link_sub1");
s.CmmUtils.stringNotEmpty(n) || (n = t.getCookie("_fbp"));
var o = t.getIOSInviteBrowserValue("deep_link_sub2");
s.CmmUtils.stringNotEmpty(o) || (o = t.getCookie("_fbc"));
var r = t.getIOSInviteBrowserValue("deep_link_sub3");
s.CmmUtils.stringNotEmpty(o) || (r = t.getCookie("uuid_fb"));
(c = {}).deep_link_value = l;
c.deep_link_sub1 = n;
c.deep_link_sub2 = o;
c.deep_link_sub3 = r;
c.click_id = t.getPixel_clickId();
return JSON.stringify(c);
}
l = t.getBrowserValue("deep_link_value");
s.CmmUtils.stringNotEmpty(l) || (l = t.getCookie("deep_link_value"));
n = t.getBrowserValue("deep_link_sub1");
s.CmmUtils.stringNotEmpty(n) || (n = t.getCookie("_fbp"));
o = t.getBrowserValue("deep_link_sub2");
s.CmmUtils.stringNotEmpty(o) || (o = t.getCookie("_fbc"));
r = t.getBrowserValue("deep_link_sub3");
s.CmmUtils.stringNotEmpty(o) || (r = t.getCookie("uuid_fb"));
(c = {}).deep_link_value = l;
c.deep_link_sub1 = n;
c.deep_link_sub2 = o;
c.deep_link_sub3 = r;
c.click_id = t.getPixel_clickId();
return JSON.stringify(c);
}
var a = App.storage.getItem(i.ConstString.saveOneLinkInviteCode, "");
if (t.isIOS) {
u.default._ios_addeeplink = a;
var c, l = t.getIOSInviteBrowserValue("deep_link_value");
(c = {}).deep_link_value = l;
return JSON.stringify(c);
}
return a;
};
t.getCookie = function(t) {
var e = ("; " + document.cookie).split("; " + t + "=");
return 2 === e.length ? e.pop().split(";").shift() : "";
};
t.getBrowserValue = function(t) {
for (var e = window.location.search.substring(1).split("&"), n = 0; n < e.length; n++) {
var o = e[n].split("=");
if (o[0] == t) return o[1];
}
return null;
};
t.getIOSInviteBrowserValue = function(t) {
for (var e = u.default._ios_addeeplink.substring(1).split("&"), n = 0; n < e.length; n++) {
var o = e[n].split("=");
if (o[0] == t) return o[1];
}
return null;
};
t.getPixel_clickId = function() {
if (App.IsHtmlGame) {
var e = t.getBrowserValue("click_id");
s.CmmUtils.stringNotEmpty(e) || (e = t.getCookie("click_id"));
if (e && s.CmmUtils.stringNotEmpty(e)) {
App.storage.setItem(i.ConstString.pexel_click_id, e);
return e;
}
return App.storage.getItem(i.ConstString.pexel_click_id, "");
}
return "";
};
t.getHtmlChannelID = function() {
var e = t.getBrowserValue("r");
s.CmmUtils.stringNotEmpty(e) || (e = t.getCookie("webChannel"));
if (e) {
var n = [ 0, 0 ];
n[1] = parseInt(e.substring(4), 36);
n[1] = n[1] - e.charCodeAt(0) - e.charCodeAt(1);
n[0] = parseInt(e.substring(2, 4), 36) - 170;
return n[1];
}
return 0;
};
t.getHttpId = function() {
if (App.IsHtmlGame) {
var e = t.getBrowserValue("r");
s.CmmUtils.stringNotEmpty(e) || (e = t.getCookie("webChannel"));
if (e) {
var n = [ 0, 0 ];
n[1] = parseInt(e.substring(4), 36);
n[1] = n[1] - e.charCodeAt(0) - e.charCodeAt(1);
n[0] = parseInt(e.substring(2, 4), 36) - 170;
return n[0].toString();
}
return -1;
}
return t.getApkHttpId();
};
t.getApkHttpId = function() {
return u.default.getHttpId();
};
t.isSingleOpener = function() {
return App.SingleGame && !window.opener;
};
t.isTestChannel = function() {
return 3928880 == u.default.channelID;
};
t._data = null;
return t;
}();
n.default = p;
cc._RF.pop();
}, {
"../HotVersion": "HotVersion",
"../common/config/ConstString": "ConstString",
"../common/config/GlobalVar": "GlobalVar",
"../common/enum/GlobalEnum": "GlobalEnum",
"../common/utils/CmmUtils": "CmmUtils",
"../config/URLConfig": "URLConfig",
"./GameNativeConfig": "GameNativeConfig",
"./SdkManager": "SdkManager"
} ],
Application: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8b46bGdLJ5CLrG33SnmY+DP", "Application");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Application = void 0;
var r = t("./scripts/common/component/Alert"), a = t("./scripts/common/component/GlobalAudio"), s = t("./scripts/common/component/Loading"), c = t("./scripts/common/component/Tips"), l = t("./scripts/common/component/UILoading"), u = t("./scripts/common/component/UIReconnect"), p = t("./scripts/common/component/UpdateLoading"), d = t("./scripts/common/config/ConstString"), f = t("./scripts/common/config/GlobalVar"), h = t("./scripts/common/config/HostInfo"), _ = t("./scripts/common/data/Bundles"), g = t("./scripts/common/data/StageData"), y = t("./scripts/common/entry/CmmEntry"), m = t("./scripts/common/utils/CmmUtils"), E = t("./scripts/config/URLConfig"), v = t("./scripts/framework/defines/Enums"), S = t("./scripts/framework/defines/Macros"), b = t("./scripts/framework/Framework"), R = t("./scripts/framework/utils/Singleton"), C = t("./scripts/sdk/AppInfo"), T = t("./scripts/sdk/SdkManager"), A = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._offlineMode = !1;
e._singleGame = !1;
e._nativeGame = !0;
e._enterBackgroundTime = 0;
e._globalAudio = null;
return e;
}
Object.defineProperty(e.prototype, "isLazyRelease", {
get: function() {
this.isAutoReleaseUnuseResources || Log.w("需要使用都自己导出cc.game.EVENT_LOW_MEMORY事件");
return !1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "Bundles", {
get: function() {
return _.Bundles;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "OfflineMode", {
get: function() {
return this._offlineMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "SingleGame", {
get: function() {
return this._singleGame;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "IsHtmlGame", {
get: function() {
return !this._nativeGame && C.default.isBrowser;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isAutoReleaseUnuseResources", {
get: function() {
return !0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "autoReleaseUnuseResourcesTimeout", {
get: function() {
return 300;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "utils", {
get: function() {
return R.Singleton.instance.get(m.CmmUtils);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "uiReconnect", {
get: function() {
return R.Singleton.instance.get(u.UIReconnect);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "tips", {
get: function() {
return R.Singleton.instance.get(c.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "uiLoading", {
get: function() {
return R.Singleton.instance.get(l.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "alert", {
get: function() {
return R.Singleton.instance.get(r.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "loading", {
get: function() {
return R.Singleton.instance.get(s.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "updateLoading", {
get: function() {
return R.Singleton.instance.get(p.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "cmmData", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "stageData", {
get: function() {
return this.dataCenter.get(g.StageData);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "globalAudio", {
get: function() {
if (this._globalAudio) return this._globalAudio;
this._globalAudio = this.uiManager.canvas.getComponent(a.default);
return this._globalAudio;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
if (App.IsHtmlGame) {
T.default.channelID = C.default.getHtmlChannelID();
T.default.httpId = C.default.getHttpId();
}
t.prototype.init.call(this);
this.updateConfig();
this.entryManager.delegate = new y.CmmEntry();
};
e.prototype.onLoad = function(t) {
C.default.data;
cc.view.setDesignResolutionSize(750, 1600, cc.ResolutionPolicy.NO_BORDER);
this.initPopSort();
App.uiManager.onLoad(t);
App.serviceManager.onLoad();
App.entryManager.onLoad(t);
};
e.prototype.updateGlobalConfig = function() {};
e.prototype.initPopSort = function() {
var t = App.storage.getItem(d.ConstString.showBigSaleDay), e = App.storage.getItem(d.ConstString.showShareAfter, 0);
if (m.CmmUtils.day != t) {
App.storage.setItem(d.ConstString.showBigSaleDay, m.CmmUtils.day);
App.storage.setItem(d.ConstString.showShareAfter, 1);
} else App.storage.setItem(d.ConstString.showShareAfter, e + 1);
};
e.prototype.updateConfig = function() {
var t = this;
if (C.default.isAndroid || C.default.isIOS) {
var e = T.default.GetUrlData();
if (m.CmmUtils.stringNotEmpty(e)) {
E.default.urlData = e;
var n = E.default.getChannel();
this.initConfig(n);
}
this._offlineMode = C.default.getOffLineMode();
} else if (this.SingleGame) {
f.GlobalVar.token = C.default.getBrowserValue("token");
f.GlobalVar.host = decodeURIComponent(C.default.getBrowserValue("host"));
f.GlobalVar.guid = C.default.getBrowserValue("uid");
f.GlobalVar.curGameId = C.default.getBrowserValue("gId");
f.GlobalVar.resPath = C.default.getBrowserValue("resPath");
Log.e("测试token:" + f.GlobalVar.token);
switch (C.default.getBrowserValue("country")) {
case "PK":
f.GlobalVar.money_symbol = "Rs";
f.GlobalVar.countryCode = 1;
break;

case "BR":
f.GlobalVar.money_symbol = "R$";
f.GlobalVar.countryCode = 3;
break;

case "MEX":
f.GlobalVar.money_symbol = "$";
f.GlobalVar.countryCode = 5;
break;

default:
f.GlobalVar.money_symbol = "₹";
f.GlobalVar.countryCode = 0;
}
} else App.asset.LoadTxt(S.Macro.BUNDLE_RESOURCES, "configs/url", null, function(e, n) {
E.default.urlData = n.text;
var o = E.default.getChannel();
t.initConfig(o);
});
};
e.prototype.initConfig = function(t) {
if (t) {
h.HostInfo.URL_Login_Server = t.url;
f.GlobalVar.countryCode = t.countryCode;
f.GlobalVar.phone_prefix = t.phone_prefix;
f.GlobalVar.money_symbol = t.money_symbol;
f.GlobalVar.gameCode = t.gameCode;
f.GlobalVar.channelName = t.channelName;
f.GlobalVar.des = t.des;
} else App.tips.show("channelid config error!");
};
e.prototype.update = function() {};
e.prototype.onDestroy = function(t) {
App.serviceManager.onDestroy();
App.entryManager.onDestroy(t);
};
e.prototype.onEnterBackground = function() {
this._enterBackgroundTime = Date.timeNow();
Log.d("[MainController]", "onEnterBackground " + this._enterBackgroundTime);
App.globalAudio.onEnterBackground();
};
e.prototype.onEnterForgeground = function() {};
return e;
}(b.Framewok);
n.Application = A;
var O = new A();
O.logger.level = v.LogLevel.ALL;
window.App = O;
O.init();
cc._RF.pop();
}, {
"./scripts/common/component/Alert": "Alert",
"./scripts/common/component/GlobalAudio": "GlobalAudio",
"./scripts/common/component/Loading": "Loading",
"./scripts/common/component/Tips": "Tips",
"./scripts/common/component/UILoading": "UILoading",
"./scripts/common/component/UIReconnect": "UIReconnect",
"./scripts/common/component/UpdateLoading": "UpdateLoading",
"./scripts/common/config/ConstString": "ConstString",
"./scripts/common/config/GlobalVar": "GlobalVar",
"./scripts/common/config/HostInfo": "HostInfo",
"./scripts/common/data/Bundles": "Bundles",
"./scripts/common/data/StageData": "StageData",
"./scripts/common/entry/CmmEntry": "CmmEntry",
"./scripts/common/utils/CmmUtils": "CmmUtils",
"./scripts/config/URLConfig": "URLConfig",
"./scripts/framework/Framework": "Framework",
"./scripts/framework/defines/Enums": "Enums",
"./scripts/framework/defines/Macros": "Macros",
"./scripts/framework/utils/Singleton": "Singleton",
"./scripts/sdk/AppInfo": "AppInfo",
"./scripts/sdk/SdkManager": "SdkManager"
} ],
AssetManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4fc1D2m55E+a6Fji/1Ky71", "AssetManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.AssetManager = void 0;
var o = t("./Resource"), i = function() {
function t() {
this._logTag = "[RemoteLoader] ";
}
t.prototype.loadImage = function(t, e) {
var n = this;
return new Promise(function(o) {
if (null == t || null == t || t.length <= 0) o(null); else {
if (e) {
var i = App.cache.remoteCaches.getSpriteFrame(t);
if (i && i.data) {
o(i.data);
return;
}
App.cache.remoteCaches.remove(t);
} else App.cache.remoteCaches.remove(t);
n._loadRemoteRes(t, cc.Texture2D, e).then(function(e) {
var n = App.cache.remoteCaches.get(t);
if (e && n) {
n.data = e;
n.data.name = t;
var i = App.cache.remoteCaches.setSpriteFrame(t, n.data);
o(i);
} else o(null);
});
}
});
};
t.prototype.loadImage_fixed = function(t, e, n) {
var o = this;
return new Promise(function(i) {
if (null == t || null == t || t.length <= 0) i(null); else {
if (e) {
var r = App.cache.remoteCaches.getSpriteFrame(t);
if (r && r.data) {
i({
url: t,
sprite: r.data,
compare: n
});
return;
}
App.cache.remoteCaches.remove(t);
} else App.cache.remoteCaches.remove(t);
o._loadRemoteRes(t, cc.Texture2D, e).then(function(e) {
var o = App.cache.remoteCaches.get(t);
if (e && o) {
o.data = e;
o.data.name = t;
var r = App.cache.remoteCaches.setSpriteFrame(t, o.data);
i({
url: t,
sprite: r,
compare: n
});
} else i(null);
});
}
});
};
t.prototype._loadRemoteRes = function(t, e) {
return new Promise(function(n) {
var i = App.cache.remoteCaches.get(t);
if (i) i.isLoaded ? n(i.data) : i.finishCb.push(n); else {
(i = new o.Resource.CacheData()).info.resourceType = o.Resource.Type.Remote;
i.info.type = e;
App.cache.remoteCaches.set(t, i);
cc.assetManager.loadRemote(t, function(t, e) {
if (i) {
i.isLoaded = !0;
if (e) {
i.data = e;
i.data.addRef();
}
i.doFinish(e);
n(i.data);
}
});
}
});
};
t.prototype.update = function() {};
return t;
}(), r = function() {
function t() {
this.isResident = !0;
this.module = null;
this._remote = new i();
}
Object.defineProperty(t.prototype, "remote", {
get: function() {
return this._remote;
},
enumerable: !1,
configurable: !0
});
t.prototype.getBundle = function(t) {
return App.bundleManager.getBundle(t);
};
t.prototype.load = function(t, e, n, i, r) {
var a = App.cache.get(t, e);
if (a) {
a.isLoaded ? r(a) : a.finishCb.push(r);
a.status = o.Resource.CacheStatus.NONE;
} else {
(a = new o.Resource.CacheData()).info.url = e;
a.info.type = n;
a.info.bundle = t;
App.cache.set(t, e, a);
console.time("加载资源 : " + a.info.url);
var s = this.getBundle(t);
if (!s) {
var c = new Error(this.module + " " + t + " 没有加载，请先加载");
this._onLoadComplete(a, r, c, null);
return;
}
var l = s.get(e, n);
l ? this._onLoadComplete(a, r, null, l) : i ? s.load(e, n, i, this._onLoadComplete.bind(this, a, r)) : s.load(e, n, this._onLoadComplete.bind(this, a, r));
}
};
t.prototype._onLoadComplete = function(t, e, n, i) {
t.isLoaded = !0;
var r = t;
if (n) {
App.SingleGame || Log.e(this.module + "加载资源失败:" + t.info.url + " 原因:" + (n.message ? n.message : "未知"));
t.data = null;
r.data = null;
App.cache.remove(t.info.bundle, t.info.url);
e(t);
} else {
t.data = i;
r.data = i;
e(t);
}
t.doFinish(r);
t.doGet(r.data);
if (t.status == o.Resource.CacheStatus.WAITTING_FOR_RELEASE && t.data) {
t.status = o.Resource.CacheStatus.NONE;
var a = new o.Resource.Info();
a.url = t.info.url;
a.type = t.info.type;
a.data = t.data;
a.bundle = t.info.bundle;
this.releaseAsset(a);
}
console.timeEnd("加载资源 : " + t.info.url);
};
t.prototype.loadDir = function(t, e, n, i, r) {
var a = App.cache.get(t, e);
if (a) {
a.isLoaded ? r(a) : a.finishCb.push(r);
a.status = o.Resource.CacheStatus.NONE;
} else {
(a = new o.Resource.CacheData()).info.url = e;
a.info.type = n;
a.info.bundle = t;
App.cache.set(t, e, a);
console.time("加载资源 : " + a.info.url);
var s = this.getBundle(t);
if (!s) {
var c = new Error(this.module + " " + t + " 没有加载，请先加载");
this._onLoadComplete(a, r, c, null);
return;
}
i ? s.loadDir(e, n, i, this._onLoadComplete.bind(this, a, r)) : s.loadDir(e, n, this._onLoadComplete.bind(this, a, r));
}
};
t.prototype.LoadTxt = function(t, e, n, o) {
var i = this.getBundle(t);
i ? i.load(e, cc.TextAsset, n, o) : o(new Error(this.module + " " + t + " 没有加载，请先加载"), null);
};
t.prototype.loadScene = function(t, e, n, o) {
var i = this.getBundle(t);
i ? i.loadScene(e, n, o) : o(new Error(this.module + " " + t + " 没有加载，请先加载"), null);
};
t.prototype.releaseAsset = function(t) {
if (t && t.bundle) {
var e = App.cache.get(t.bundle, t.url, !1);
if (!e) return;
if (e.isInvalid) return;
if (e.isLoaded) {
if (e.info.retain) return;
App.cache.removeWithInfo(t);
} else e.status = o.Resource.CacheStatus.WAITTING_FOR_RELEASE;
}
};
t.prototype.retainAsset = function(t) {
if (t) {
var e = App.cache.get(t.bundle, t.url);
if (e) {
e.info.retain || (e.info.retain = t.retain);
if (Array.isArray(e.data)) for (var n = 0; n < e.data.length; n++) e.data[n] && e.data[n].addRef(); else e.data && e.data.addRef();
}
}
};
t.prototype.addPersistAsset = function(t, e, n) {
var i = new o.Resource.Info();
i.url = t;
i.data = e;
i.bundle = n;
i.retain = !0;
this.retainAsset(i);
};
t.module = "【AssetManager】";
return t;
}();
n.AssetManager = r;
cc._RF.pop();
}, {
"./Resource": "Resource"
} ],
AudioComponent: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "dbfa0kogUdFBoo4g5VgZ0Si", "AudioComponent");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./EventComponent"), s = t("../core/asset/Resource"), c = t("../utils/Singleton"), l = t("../defines/Macros"), u = cc._decorator, p = u.ccclass, d = (u.property, 
u.menu, function() {
function t() {
this.musicVolume = 1;
this.effectVolume = 1;
this.isEffectOn = !0;
this.isMusicOn = !0;
this._curMusicUrl = "";
this.prevMusicUrl = "";
this.curEffectId = -1;
this.curBundle = null;
this.curLoop = !0;
this.isPlaying = !1;
this._storeMusicKey = "default_save_music";
this._storeEffectKey = "default_save_effect";
this._storeMusicVolumeKey = "default_save_music_volume_key";
this._storeEffectVolumeKey = "default_save_effect_volume_key";
}
Object.defineProperty(t.prototype, "curMusicUrl", {
get: function() {
return this._curMusicUrl;
},
set: function(t) {
this.prevMusicUrl = this._curMusicUrl;
this._curMusicUrl = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function() {
this.isMusicOn = App.storage.getItem(this._storeMusicKey, this.isMusicOn);
this.isEffectOn = App.storage.getItem(this._storeEffectKey, this.isEffectOn);
this.musicVolume = App.storage.getItem(this._storeMusicVolumeKey, this.musicVolume);
this.effectVolume = App.storage.getItem(this._storeEffectVolumeKey, this.effectVolume);
};
t.prototype.save = function() {
try {
App.storage.setItem(this._storeMusicKey, this.isMusicOn);
App.storage.setItem(this._storeMusicVolumeKey, this.musicVolume);
App.storage.setItem(this._storeEffectKey, this.isEffectOn);
App.storage.setItem(this._storeEffectVolumeKey, this.effectVolume);
} catch (t) {}
};
t.module = "【音效数据】";
return t;
}()), f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.owner = null;
e.curPlayMusicUrl = null;
e.interval = .06;
e.curInterval = 0;
e.maxSamePlay = 1;
return e;
}
n = e;
e.prototype.addEvents = function() {
t.prototype.addEvents.call(this);
this.onD("AudioComponent_PLAY_MUSIC", this.onPlayMusic);
};
e.prototype.onPlayMusic = function() {
this.curPlayMusicUrl == this.curMusicUrl && !this.isPlaying && this.curMusicUrl && this.curBundle && this.playMusic(this.curMusicUrl, this.curBundle, this.curLoop);
};
Object.defineProperty(e.prototype, "audioData", {
get: function() {
return c.Singleton.instance.get(d);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "musicVolume", {
get: function() {
return this.audioData.musicVolume;
},
set: function(t) {
cc.audioEngine.setMusicVolume(t);
t <= 0 && this.stopMusic();
this.audioData.musicVolume = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "effectVolume", {
get: function() {
return this.audioData.effectVolume;
},
set: function(t) {
cc.audioEngine.setEffectsVolume(t);
t <= 0 && this.stopEffect();
this.audioData.effectVolume = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isEffectOn", {
get: function() {
return this.audioData.isEffectOn;
},
set: function(t) {
this.audioData.isEffectOn = t;
this.save();
t || this.stopEffect();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isMusicOn", {
get: function() {
return this.audioData.isMusicOn;
},
set: function(t) {
this.audioData.isMusicOn = t;
this.save();
if (this.audioData.isMusicOn) {
if (!this.curMusicUrl) return;
dispatch("AudioComponent_PLAY_MUSIC", this);
} else this.stopMusic();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "curMusicUrl", {
get: function() {
return this.audioData.curMusicUrl;
},
set: function(t) {
this.audioData.curMusicUrl = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "prevMusiUrl", {
get: function() {
return this.audioData.prevMusicUrl;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "curBundle", {
get: function() {
return this.audioData.curBundle;
},
set: function(t) {
this.audioData.curBundle = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "curLoop", {
get: function() {
return this.audioData.curLoop;
},
set: function(t) {
this.audioData.curLoop = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isPlaying", {
get: function() {
return this.audioData.isPlaying;
},
set: function(t) {
this.audioData.isPlaying = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.save = function() {
this.audioData.save();
};
e.prototype.stopEffect = function(t) {
void 0 === t && (t = null);
if (null == t) {
if (this.audioData.curEffectId < 0) return;
cc.audioEngine.stopEffect(this.audioData.curEffectId);
this.audioData.curEffectId = -1;
} else cc.audioEngine.stopEffect(t);
};
e.prototype.pauseEffect = function(t) {
void 0 === t && (t = null);
if (null == t) {
if (this.audioData.curEffectId < 0) return;
cc.audioEngine.pauseEffect(this.audioData.curEffectId);
this.audioData.curEffectId = -1;
} else cc.audioEngine.pauseEffect(t);
};
e.prototype.stopAllEffects = function() {
cc.audioEngine.stopAllEffects();
};
e.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
this.isPlaying = !1;
};
e.prototype.playMusic = function(t, e, n) {
var o = this;
void 0 === n && (n = !0);
return new Promise(function(i) {
o.curPlayMusicUrl = t;
o.curMusicUrl = t;
o.curBundle = e;
o.curLoop = n;
o.audioData.isMusicOn && App.cache.getCacheByAsync(t, cc.AudioClip, e).then(function(r) {
if (r) {
var a = new s.Resource.Info();
a.url = t;
a.type = cc.AudioClip;
a.data = r;
a.bundle = e;
o.owner ? App.uiManager.addLocal(a, o.owner.className) : App.uiManager.garbage.addLocal(a);
if (!o.isPlaying || o.curMusicUrl != o.prevMusiUrl) {
o.stopMusic();
cc.audioEngine.playMusic(r, n);
}
o.isPlaying = !0;
i({
url: t,
isSuccess: !0
});
} else i({
url: t,
isSuccess: !1
});
});
});
};
e.prototype.playEffect = function(t, e, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (o.audioData.isEffectOn) App.cache.getCacheByAsync(t, cc.AudioClip, e).then(function(r) {
if (r) {
var a = new s.Resource.Info();
a.url = t;
a.type = cc.AudioClip;
a.data = r;
a.bundle = e;
o.owner ? App.uiManager.addLocal(a, o.owner.className) : App.uiManager.garbage.addLocal(a);
var c = cc.audioEngine.playEffect(r, n);
o.audioData.curEffectId = c;
i(c);
} else i(-1);
}); else {
o.audioData.curEffectId = -1;
i(-1);
}
});
};
e.prototype.playBundleMultipleEffect = function(t, e) {
n.playLargeEffect(t, e);
};
e.prototype.playHallMultipleEffect = function(t) {
n.playLargeEffect(t, l.Macro.BUNDLE_RESOURCES);
};
e.prototype.playMainMultipleEffect = function(t) {
n.playLargeEffect(t, l.Macro.BUNDLE_RESOURCES);
};
e.prototype.onEnterBackground = function() {
App.globalAudio.pauseBackgroundMusic();
cc.audioEngine.pauseAllEffects();
};
e.prototype.onEnterForgeground = function() {
App.globalAudio.resumeBackgroundMusic();
cc.audioEngine.resumeAllEffects();
};
e.prototype.playCustomEffect = function(t, e, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (o.audioData.isEffectOn) App.cache.getCacheByAsync(t, cc.AudioClip, e).then(function(r) {
if (r) {
App.asset.addPersistAsset(t, r, e);
o.audioData.curEffectId = cc.audioEngine.playEffect(r, n);
i(o.audioData.curEffectId);
} else i(o.audioData.curEffectId);
}); else {
o.audioData.curEffectId = -1;
i(-1);
}
});
};
e.prototype.update = function(t) {
var e = this;
this.curInterval += t;
if (this.curInterval >= this.interval) {
this.curInterval = 0;
n.globalClip.size > 0 && n.globalClip.forEach(function(t) {
if (t.count > e.maxSamePlay) for (var n = 0; n < e.maxSamePlay; n++) e.playCustomEffect(t.name, t.bundle); else for (n = 0; n < t.count; n++) e.playCustomEffect(t.name, t.bundle);
});
n.globalClip.clear();
}
};
e.playLargeEffect = function(t, e) {
this.globalClip.has(t) ? this.globalClip.get(t).count++ : this.globalClip.set(t, {
name: t,
count: 1,
bundle: e
});
};
var n;
e.globalClip = new Map();
return n = r([ p ], e);
}(a.default);
n.default = f;
cc._RF.pop();
}, {
"../core/asset/Resource": "Resource",
"../defines/Macros": "Macros",
"../utils/Singleton": "Singleton",
"./EventComponent": "EventComponent"
} ],
AudioMgr: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bfb4fhT6L1HzLi8umIX5SbW", "AudioMgr");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.effects = [];
e.bgm = null;
return e;
}
n = e;
e.prototype.onLoad = function() {
n.instance = this;
var t = App.storage.getItem("soundState", !0);
this.setSoundState(t);
this.playBGM();
};
e.prototype.playEffect = function(t) {
for (var e = 0; e < this.effects.length; e++) {
var n = this.effects[e];
if (n.name == t) {
cc.audioEngine.playEffect(n, !1);
break;
}
}
};
e.prototype.playBGM = function() {
this.bgm && cc.audioEngine.playMusic(this.bgm, !0);
};
e.prototype.stopBGM = function() {
cc.audioEngine.stopMusic();
};
e.prototype.setSoundState = function(t) {
cc.audioEngine.setMusicVolume(t ? 1 : 0);
cc.audioEngine.setEffectsVolume(t ? 1 : 0);
};
var n;
e.instance = null;
r([ c(cc.AudioClip) ], e.prototype, "effects", void 0);
r([ c(cc.AudioClip) ], e.prototype, "bgm", void 0);
return n = r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
BaseAnimState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "caa3bDLKYxOVpuxk6Plb8Cn", "BaseAnimState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/enum/GlobalEnum"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.state = a.GlobalEnum.ElementState.Normal;
return e;
}
e.prototype.show = function(t) {
this.config = t;
this.node.active = !0;
};
e.prototype.hide = function() {
this.node.active = !1;
};
r([ l({
type: cc.Enum(a.GlobalEnum.ElementState)
}) ], e.prototype, "state", void 0);
return r([ c ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum"
} ],
"BaseLineItem ": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e0daew5TE9HTr87k1MeqWuo", "BaseLineItem ");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.init = function() {};
e.prototype.show = function() {
this.node.active = !0;
};
e.prototype.hide = function() {
this.node.active = !1;
};
return r([ s ], e);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
BaseLineMgr: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "582a4IlwrtCwLMi/e9YjH6+", "BaseLineMgr");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.init = function() {};
e.prototype.showRewardLine = function(t) {
this.lines[t].show();
};
e.prototype.showRewardLines = function() {};
e.prototype.showOtherType = function() {};
e.prototype.hide = function() {
if (this.lines) for (var t = 0; t < this.lines.length; t++) this.lines[t].hide();
};
e.prototype.lineAnims_None = function() {};
return r([ s ], e);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
BinaryStreamMessage: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0b706caWmdEULamHl7PndHE", "BinaryStreamMessage");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BinaryStreamHeartbeat = n.BinaryStream = n.UINT = n.USHORT = n.UBYTE = n.INT = n.SHORT = n.BYTE = n.DOUBLE = n.FLOAT = n.STRING = n.BOOL = n.serialize = void 0;
var r = t("../../../defines/Macros"), a = t("../../../plugin/ByteArray"), s = t("../Net"), c = t("./Message");
n.serialize = function(t, e, n, o, i) {
return function(r, a) {
if (void 0 === Reflect.getOwnPropertyDescriptor(r, "__serialize__")) {
var s = {};
if (Reflect.getPrototypeOf(r).__serialize__ && void 0 === Reflect.getOwnPropertyDescriptor(r, "__serialize__")) for (var c = Reflect.getPrototypeOf(r).__serialize__, l = Object.keys(c), u = l.length, p = 0; p < u; p++) s[l[p]] = c[l[p]].slice(0);
Reflect.defineProperty(r, "__serialize__", {
value: s
});
}
if (r.__serialize__[t]) throw "SerializeKey has already been declared:" + t;
r.__serialize__[t] = [ a, e, n, o, i ];
};
};
var l = function() {
function t() {
this.data = null;
}
t.prototype.read = function() {};
t.prototype.write = function() {};
Object.defineProperty(t.prototype, "littleEndian", {
get: function() {
return r.Macro.USING_LITTLE_ENDIAN;
},
enumerable: !1,
configurable: !0
});
return t;
}(), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.data = 0;
return e;
}
return e;
}(l), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.data = !1;
return e;
}
e.prototype.read = function(t) {
this.data = t.readBoolean();
};
e.prototype.write = function(t) {
t.writeBoolean(this.data);
};
return e;
}(l);
n.BOOL = p;
var d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.data = "";
e.byteSize = void 0;
return e;
}
e.prototype.read = function(t) {
var e = this.byteSize;
null == this.byteSize && (e = t.readUnsignedInt());
this.data = t.readUTFBytes(e);
};
e.prototype.write = function(t) {
var e = new a.ByteArray();
e.writeUTFBytes(this.data, this.byteSize);
null == this.byteSize && t.writeUnsignedInt(e.length);
t.writeBytes(e);
};
return e;
}(l);
n.STRING = d;
var f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readFloat();
};
e.prototype.write = function(t) {
t.writeFloat(this.data);
};
return e;
}(u);
n.FLOAT = f;
var h = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readDouble();
};
e.prototype.write = function(t) {
t.writeDouble(this.data);
};
return e;
}(u);
n.DOUBLE = h;
var _ = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readByte();
};
e.prototype.write = function(t) {
t.writeByte(this.data);
};
return e;
}(u);
n.BYTE = _;
var g = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readShort();
};
e.prototype.write = function(t) {
t.writeShort(this.data);
};
return e;
}(u);
n.SHORT = g;
var y = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readInt();
};
e.prototype.write = function(t) {
t.writeInt(this.data);
};
return e;
}(u);
n.INT = y;
var m = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readUnsignedByte();
};
e.prototype.write = function(t) {
t.writeByte(this.data);
};
return e;
}(u);
n.UBYTE = m;
var E = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readUnsignedShort();
};
e.prototype.write = function(t) {
t.writeUnsignedShort(this.data);
};
return e;
}(u);
n.USHORT = E;
var v = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.read = function(t) {
this.data = t.readUnsignedInt();
};
e.prototype.write = function(t) {
t.writeUnsignedInt(this.data);
};
return e;
}(u);
n.UINT = v;
var S = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.byteArray = null;
e.buffer = null;
return e;
}
e.prototype.encode = function() {
this.byteArray = new a.ByteArray(this.buffer);
this.byteArray.endian = r.Macro.USING_LITTLE_ENDIAN;
this.serialize();
this.buffer = this.byteArray.bytes;
return !0;
};
e.prototype.isNumberValue = function(t) {
return t == f || t == h || t == _ || t == g || t == y || t == m || t == E || t == v;
};
e.prototype.isBoolValue = function(t) {
return t == p;
};
e.prototype.isStringValue = function(t) {
return t == d;
};
e.prototype.serialize = function() {
var t = Reflect.getPrototypeOf(this).__serialize__;
if (!t) return null;
for (var e = Object.keys(t), n = e.length, o = 0; o < n; o++) {
var i = t[e[o]], r = i[0], a = i[1], s = i[2], c = i[3], l = i[4];
this.serializeMember(this[r], r, a, s, c, l);
}
};
e.prototype.serializeMember = function(t, n, o, i, r, a) {
if (this.isNumberValue(o)) this.serializeNumberStreamValue(t, o); else if (this.isBoolValue(o)) this.serializeBoolValue(t, o); else if (this.isStringValue(o)) this.serializeStringStreamValue(t, o, i); else if (t instanceof Array) this.serializeArray(t, n, o, i, r, a); else if (t instanceof e) {
t.byteArray = this.byteArray;
t.serialize();
} else Log.e("序列化成员 : " + n + " 出错!!");
};
e.prototype.serializeNumberStreamValue = function(t, e) {
var n = new e();
n.data = null == t || t == Number.NaN ? 0 : t;
n.write(this.byteArray);
};
e.prototype.serializeBoolValue = function(t, e) {
var n = new e();
n.data = null != t && t;
n.write(this.byteArray);
};
e.prototype.serializeStringStreamValue = function(t, e, n) {
var o = new e();
o.byteSize = n;
o.data = null == t ? "" : t;
o.write(this.byteArray);
};
e.prototype.checkArrayDimension = function(t, e) {
var n = 0, o = t;
do {
n++;
o = o[0];
} while (o && Array.isArray(o) && o.length > 0);
return n == e;
};
e.prototype.serializeArray = function(t, e, n, o, i, r) {
null == r && (r = 1);
if (this.checkArrayDimension(t, r)) {
this.byteArray.writeUnsignedInt(t.length);
for (var a = 0; a < t.length; a++) t[a] instanceof Array ? this.serializeArray(t[a], e + "[" + a + "]", n, o, i, r - 1) : this.serializeMember(t[a], e + "[" + a + "]", o, i, void 0);
} else Log.e(e + " 定义数组跟序列化的数组维度不一致");
};
e.prototype.decode = function(t) {
this.buffer = t;
this.byteArray = new a.ByteArray(t);
this.byteArray.endian = r.Macro.USING_LITTLE_ENDIAN;
this.deserialize();
return !0;
};
e.prototype.deserialize = function() {
var t = Reflect.getPrototypeOf(this).__serialize__;
if (!t) return !0;
for (var e = Object.keys(t), n = e.length, o = 0; o < n; o++) {
var i = t[e[o]], r = i[0], a = i[1], s = i[2], c = i[3], l = i[4];
this.deserializeMember(r, a, s, c, l);
}
};
e.prototype.deserializeMember = function(t, n, o, i, r) {
try {
var a = this[t];
if (this.isNumberValue(n)) this[t] = this.deserializeNumberStreamValue(t, n); else if (this.isBoolValue(n)) this[t] = this.deserializeBoolValue(t, n); else if (this.isStringValue(n)) this[t] = this.deserializeStringStreamValue(t, n, o); else if (a instanceof Array) this.deserializeArray(t, n, o, i, r); else if (a instanceof e) {
a.byteArray = this.byteArray;
a.deserialize();
} else Log.e("deserializeMember " + t + " error!!!");
} catch (e) {
Log.w(e.message);
Log.e("deserializeMember " + t + " error!!!");
}
};
e.prototype.deserializeNumberStreamValue = function(t, e) {
var n = new e();
n.read(this.byteArray);
return n.data;
};
e.prototype.deserializeBoolValue = function(t, e) {
var n = new e();
n.read(this.byteArray);
return n.data;
};
e.prototype.deserializeStringStreamValue = function(t, e, n) {
var o = new e();
o.byteSize = n;
o.read(this.byteArray);
return o.data;
};
e.prototype._deserializeArray = function(t, n, o, i, r, a) {
void 0 === a && (a = 1);
if (!(a <= 0)) for (var s = this.byteArray.readUnsignedInt(), c = 0, l = 0; l < s; l++) if (a > 1) {
t.push([]);
this._deserializeArray(t[c], n + "[" + c + "]", o, i, r, a - 1);
c++;
} else {
var u = new i();
if (u instanceof e) {
u.byteArray = this.byteArray;
t[l] = u.deserialize();
} else if (u instanceof d) {
u.byteSize = r;
u.read(this.byteArray);
t[l] = u.data;
} else {
u.read(this.byteArray);
t[l] = u.data;
}
}
};
e.prototype.deserializeArray = function(t, e, n, o, i) {
this[t] = [];
null == i && (i = 1);
this._deserializeArray(this[t], t, e, n, o, i);
};
return e;
}(c.Message);
n.BinaryStream = S;
var b = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.type = s.Net.ServiceType.BinaryStream;
return e;
}(S);
n.BinaryStreamHeartbeat = b;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../../plugin/ByteArray": "ByteArray",
"../Net": "Net",
"./Message": "Message"
} ],
BitEncrypt: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7cabdeR6KhPb5jNmHpa30Pt", "BitEncrypt");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BitEncrypt = void 0;
var o = function() {
function t() {
this.logTag = "[BitEncrypt]:";
this._encryptKey = "EskKbMvzZBILhcTv";
}
Object.defineProperty(t.prototype, "encryptKey", {
get: function() {
return this._encryptKey;
},
set: function(t) {
this._encryptKey = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.decode = function(t, e) {
return this._code(t, e);
};
t.prototype.encode = function(t, e) {
return this._code(t, e);
};
t.prototype._code = function(t, e) {
var n = this._check(t, e);
if (n.isOK) {
for (var o = [], i = 0; i < t.length; i++) o.push(t.charCodeAt(i));
var r = 0, a = /[\w\d_-`~#!$%^&*(){}=+;:'"<,>,/?|\\\u4e00-\u9fa5]/g;
for (i = 0; i < o.length; i++) {
var s = t[i].match(a);
if (s && s.length > 0) {
o[i] ^= n.key.charCodeAt(r);
(s = String.fromCharCode(o[i]).match(a)) && s.length || (o[i] ^= n.key.charCodeAt(r));
++r >= n.key.length && (r = 0);
}
}
var c = "";
for (i = 0; i < o.length; i++) c += String.fromCharCode(o[i]);
return c;
}
return t;
};
t.prototype._check = function(t, e) {
return t && t.length > 0 ? e && e.length > 0 ? {
isOK: !0,
key: e
} : this.encryptKey && this.encryptKey.length > 0 ? {
isOK: !0,
key: this.encryptKey
} : {
isOK: !1,
key: ""
} : {
isOK: !1,
key: ""
};
};
return t;
}();
n.BitEncrypt = new o();
cc._RF.pop();
}, {} ],
BundleManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1fefaUPK2VP1Z0gfox2dQg7", "BundleManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BundleManager = void 0;
var o = t("../../defines/Macros"), i = function() {
function t() {
this.module = null;
this.gameBundles = new Map();
}
t.prototype.isEngineBundle = function(t) {
return t == cc.AssetManager.BuiltinBundleName.INTERNAL || t == cc.AssetManager.BuiltinBundleName.MAIN || t == cc.AssetManager.BuiltinBundleName.RESOURCES || t == cc.AssetManager.BuiltinBundleName.START_SCENE;
};
t.prototype.getBundle = function(t) {
return t ? "string" == typeof t ? cc.assetManager.getBundle(t) : t : null;
};
t.prototype.getBundleName = function(t) {
if (t) return "string" == typeof t ? t : t.name;
Log.e("输入参数错误 : " + t);
return o.Macro.UNKNOWN;
};
t.prototype.enterBundle = function(t) {
t ? App.updateManager.dowonLoad(t) : Log.e("无效的入口信息");
};
t.prototype.loadBundle = function(t) {
var e = this;
t.bundle != o.Macro.BUNDLE_invite && t.bundle != o.Macro.BUNDLE_ACTIVITY_card || App.loading.show(0, 0, !0);
var n = this.getBundle(t.bundle);
if (n) {
Log.d(t.bundle + "已经加载在缓存中，直接使用");
t.handler.onLoadBundleComplete(t);
this.unLoadOtherBundles(t.bundle);
this.gameBundles.set(t.bundle, n);
} else {
t.handler.onStartLoadBundle(t);
Log.d("loadBundle : " + t.bundle);
this._loadBundle(t.bundle, function(n, o) {
if (n) {
Log.e("load bundle : " + t.bundle + " fail !!!");
t.handler.onLoadBundleError(t, n);
} else {
Log.d("load bundle : " + t.bundle + " success !!!");
t.handler.onLoadBundleComplete(t);
e.unLoadOtherBundles(t.bundle);
e.gameBundles.set(t.bundle, o);
}
});
}
};
t.prototype.unLoadOtherBundles = function(t) {
cc.director.getScene();
this.gameBundles.forEach(function(e, n) {
t != n && cc.assetManager.removeBundle(e);
});
this.gameBundles.clear();
};
t.prototype._loadBundle = function(t, e) {
cc.assetManager.loadBundle(t, e);
};
t.module = "【Bundle管理器】";
return t;
}();
n.BundleManager = i;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
BundleUpdateHandlerImpl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "aa5aek2Hb1Ne6ZDRnHkyWY2", "BundleUpdateHandlerImpl");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BundleUpdateHandlerImpl = void 0;
var o = t("../utils/CmmUtils"), i = function() {
function t() {
this.module = null;
this.isResident = !0;
}
t.prototype.onNewVersionFund = function(t) {
t.doUpdate();
};
t.prototype.onUpdateFailed = function() {};
t.prototype.onPreVersionFailed = function(t) {
this.onUpdateFailed(t);
};
t.prototype.onShowUpdating = function() {};
t.prototype.onNeedUpdateMain = function() {
App.alert.show({
text: "Game version Is too low! Please restart game.",
hideX: !1,
confirmCb: function() {
cc.game.restart();
}
});
};
t.prototype.onOther = function() {};
t.prototype.onDownloading = function() {};
t.prototype.onAreadyUpToData = function(t) {
App.tips.show("already RemoteVersion" + t.name);
};
t.prototype.onStarCheckUpdate = function() {};
t.prototype.onStartLoadBundle = function() {};
t.prototype.onLoadBundleError = function(t) {
App.tips.show("loadFailed" + t.name);
};
t.prototype.onLoadBundleComplete = function(t) {
App.entryManager.onLoadBundleComplete(t);
};
t.prototype.onLoadBundle = function(t) {
App.bundleManager.loadBundle(t);
};
t.prototype.onDownloadComplete = function() {};
t.prototype.onNeedRestartApp = function(t, e) {
var n = o.CmmUtils.string_format_args("{0} version Is too low! Please restart game.", t.name);
App.alert.show({
text: n,
confirmCb: function() {
e(!1, !0);
}
});
};
t.module = "【Bundle热更新】";
return t;
}();
n.BundleUpdateHandlerImpl = i;
cc._RF.pop();
}, {
"../utils/CmmUtils": "CmmUtils"
} ],
Bundles: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1b5b1/drJxONqwuCVtz9omd", "Bundles");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Bundles = void 0;
(function(t) {
t[t.resources = 0] = "resources";
t[t.hall = 1] = "hall";
t[t.Agame = 2] = "Agame";
t[t.rummy = 3] = "rummy";
t[t.dragontiger = 4] = "dragontiger";
t[t.teenpatti = 5] = "teenpatti";
t[t.teenpattiPrivate = 6] = "teenpattiPrivate";
t[t.anubis = 7] = "anubis";
t[t.baccarat3patti = 8] = "baccarat3patti";
t[t.baccaratab = 9] = "baccaratab";
t[t.buffalo = 10] = "buffalo";
t[t.motoracing = 11] = "motoracing";
t[t.updown7 = 12] = "updown7";
t[t.sixdice = 13] = "sixdice";
t[t.starslots = 14] = "starslots";
t[t.teenpattislots = 15] = "teenpattislots";
t[t.singlelp = 16] = "singlelp";
t[t.mines = 17] = "mines";
t[t.rouletteslots = 18] = "rouletteslots";
t[t.liondance = 19] = "liondance";
t[t.carsdrifting = 20] = "carsdrifting";
t[t.crash = 21] = "crash";
t[t.sicbo = 22] = "sicbo";
t[t.classicfruitslot = 23] = "classicfruitslot";
t[t.hotchilli = 24] = "hotchilli";
t[t.luckyjoker = 25] = "luckyjoker";
t[t.doubledragon = 26] = "doubledragon";
t[t.fortunetiger = 27] = "fortunetiger";
t[t.halloween = 28] = "halloween";
t[t.minesball = 29] = "minesball";
t[t.spinstrike = 30] = "spinstrike";
t[t.activitycard = 31] = "activitycard";
t[t.loca = 32] = "loca";
t[t.baccarat = 33] = "baccarat";
t[t.invite = 34] = "invite";
t[t.domino = 35] = "domino";
t[t.piggybank = 36] = "piggybank";
t[t.fastfielder = 37] = "fastfielder";
t[t.superwingo = 38] = "superwingo";
t[t.teenpattiJoker = 39] = "teenpattiJoker";
t[t.teenpattiAK47 = 40] = "teenpattiAK47";
t[t.lottery7 = 41] = "lottery7";
t[t.diwalilights = 42] = "diwalilights";
t[t.ganeshagold = 43] = "ganeshagold";
})(n.Bundles || (n.Bundles = {}));
cc._RF.pop();
}, {} ],
ByteArray: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7e5e7EuQNJHfJTtg8v9lh88", "ByteArray");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ByteArray = n.EndianConst = n.Endian = void 0;
var o, i, r = function() {
function t() {}
t.LITTLE_ENDIAN = "littleEndian";
t.BIG_ENDIAN = "bigEndian";
return t;
}();
n.Endian = r;
(function(t) {
t[t.LITTLE_ENDIAN = 0] = "LITTLE_ENDIAN";
t[t.BIG_ENDIAN = 1] = "BIG_ENDIAN";
})(o = n.EndianConst || (n.EndianConst = {}));
(function(t) {
t[t.SIZE_OF_BOOLEAN = 1] = "SIZE_OF_BOOLEAN";
t[t.SIZE_OF_INT8 = 1] = "SIZE_OF_INT8";
t[t.SIZE_OF_INT16 = 2] = "SIZE_OF_INT16";
t[t.SIZE_OF_INT32 = 4] = "SIZE_OF_INT32";
t[t.SIZE_OF_UINT8 = 1] = "SIZE_OF_UINT8";
t[t.SIZE_OF_UINT16 = 2] = "SIZE_OF_UINT16";
t[t.SIZE_OF_UINT32 = 4] = "SIZE_OF_UINT32";
t[t.SIZE_OF_FLOAT32 = 4] = "SIZE_OF_FLOAT32";
t[t.SIZE_OF_FLOAT64 = 8] = "SIZE_OF_FLOAT64";
})(i || (i = {}));
var a = function() {
function t(t, e) {
void 0 === e && (e = 0);
this.bufferExtSize = 0;
this.$endian = null;
this.EOF_byte = -1;
this.EOF_code_point = -1;
e < 0 && (e = 0);
this.bufferExtSize = e;
var n, o = 0;
if (t) {
var i = void 0;
if (t instanceof Uint8Array) {
i = t;
o = t.length;
} else {
o = t.byteLength;
i = new Uint8Array(t);
}
(n = 0 == e ? new Uint8Array(o) : new Uint8Array((1 + (o / e | 0)) * e)).set(i);
} else n = new Uint8Array(e);
this.write_position = o;
this._position = 0;
this._bytes = n;
this.data = new DataView(n.buffer);
this.endian = r.BIG_ENDIAN;
}
Object.defineProperty(t.prototype, "endian", {
get: function() {
return this.$endian == o.LITTLE_ENDIAN ? r.LITTLE_ENDIAN : r.BIG_ENDIAN;
},
set: function(t) {
this.$endian = t == r.LITTLE_ENDIAN ? o.LITTLE_ENDIAN : o.BIG_ENDIAN;
},
enumerable: !1,
configurable: !0
});
t.prototype.setArrayBuffer = function() {};
Object.defineProperty(t.prototype, "readAvailable", {
get: function() {
return this.write_position - this._position;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "buffer", {
get: function() {
return this.data.buffer.slice(0, this.write_position);
},
set: function(t) {
var e, n = t.byteLength, o = new Uint8Array(t), i = this.bufferExtSize;
(e = 0 == i ? new Uint8Array(n) : new Uint8Array((1 + (n / i | 0)) * i)).set(o);
this.write_position = n;
this._bytes = e;
this.data = new DataView(e.buffer);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "rawBuffer", {
get: function() {
return this.data.buffer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bytes", {
get: function() {
return this._bytes;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "dataView", {
get: function() {
return this.data;
},
set: function(t) {
this.buffer = t.buffer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bufferOffset", {
get: function() {
return this.data.byteOffset;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "position", {
get: function() {
return this._position;
},
set: function(t) {
this._position = t;
t > this.write_position && (this.write_position = t);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "length", {
get: function() {
return this.write_position;
},
set: function(t) {
this.write_position = t;
this.data.byteLength > t && (this._position = t);
this._validateBuffer(t);
},
enumerable: !1,
configurable: !0
});
t.prototype._validateBuffer = function(t) {
if (this.data.byteLength < t) {
var e = this.bufferExtSize, n = void 0;
(n = 0 == e ? new Uint8Array(t) : new Uint8Array((1 + (t / e >> 0)) * e)).set(this._bytes);
this._bytes = n;
this.data = new DataView(n.buffer);
}
};
Object.defineProperty(t.prototype, "bytesAvailable", {
get: function() {
return this.data.byteLength - this._position;
},
enumerable: !1,
configurable: !0
});
t.prototype.clear = function() {
var t = new ArrayBuffer(this.bufferExtSize);
this.data = new DataView(t);
this._bytes = new Uint8Array(t);
this._position = 0;
this.write_position = 0;
};
t.prototype.readBoolean = function() {
return !!this.validate(i.SIZE_OF_BOOLEAN) && !!this._bytes[this.position++];
};
t.prototype.readByte = function() {
return this.validate(i.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : 0;
};
t.prototype.readBytes = function(t, e, n) {
void 0 === e && (e = 0);
void 0 === n && (n = 0);
if (t) {
var o = this._position, i = this.write_position - o;
if (!(i < 0)) {
if (0 == n) n = i; else if (n > i) return;
var r = t._position;
t._position = 0;
t.validateBuffer(e + n);
t._position = r;
t._bytes.set(this._bytes.subarray(o, o + n), e);
this.position += n;
}
}
};
t.prototype.readDouble = function() {
if (this.validate(i.SIZE_OF_FLOAT64)) {
var t = this.data.getFloat64(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT64;
return t;
}
return 0;
};
t.prototype.readFloat = function() {
if (this.validate(i.SIZE_OF_FLOAT32)) {
var t = this.data.getFloat32(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT32;
return t;
}
return 0;
};
t.prototype.readInt = function() {
if (this.validate(i.SIZE_OF_INT32)) {
var t = this.data.getInt32(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT32;
return t;
}
return 0;
};
t.prototype.readShort = function() {
if (this.validate(i.SIZE_OF_INT16)) {
var t = this.data.getInt16(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT16;
return t;
}
return 0;
};
t.prototype.readUnsignedByte = function() {
return this.validate(i.SIZE_OF_UINT8) ? this._bytes[this.position++] : 0;
};
t.prototype.readUnsignedInt = function() {
if (this.validate(i.SIZE_OF_UINT32)) {
var t = this.data.getUint32(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT32;
return t;
}
return 0;
};
t.prototype.readUnsignedShort = function() {
if (this.validate(i.SIZE_OF_UINT16)) {
var t = this.data.getUint16(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT16;
return t;
}
return 0;
};
t.prototype.readUTF = function() {
var t = this.readUnsignedShort();
return t > 0 ? this.readUTFBytes(t) : "";
};
t.prototype.readUTFBytes = function(t) {
if (!this.validate(t)) return "";
var e = this.data, n = new Uint8Array(e.buffer, e.byteOffset + this._position, t);
this.position += t;
return this.decodeUTF8(n);
};
t.prototype.writeBoolean = function(t) {
this.validateBuffer(i.SIZE_OF_BOOLEAN);
this._bytes[this.position++] = +t;
};
t.prototype.writeByte = function(t) {
this.validateBuffer(i.SIZE_OF_INT8);
this._bytes[this.position++] = 255 & t;
};
t.prototype.writeBytes = function(t, e, n) {
void 0 === e && (e = 0);
void 0 === n && (n = 0);
var o;
if (!(e < 0) && !(n < 0) && (o = 0 == n ? t.length - e : Math.min(t.length - e, n)) > 0) {
this.validateBuffer(o);
this._bytes.set(t._bytes.subarray(e, e + o), this._position);
this.position = this._position + o;
}
};
t.prototype.writeDouble = function(t) {
this.validateBuffer(i.SIZE_OF_FLOAT64);
this.data.setFloat64(this._position, t, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT64;
};
t.prototype.writeFloat = function(t) {
this.validateBuffer(i.SIZE_OF_FLOAT32);
this.data.setFloat32(this._position, t, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT32;
};
t.prototype.writeInt = function(t) {
this.validateBuffer(i.SIZE_OF_INT32);
this.data.setInt32(this._position, t, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT32;
};
t.prototype.writeShort = function(t) {
this.validateBuffer(i.SIZE_OF_INT16);
this.data.setInt16(this._position, t, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT16;
};
t.prototype.writeUnsignedInt = function(t) {
this.validateBuffer(i.SIZE_OF_UINT32);
this.data.setUint32(this._position, t, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT32;
};
t.prototype.writeUnsignedShort = function(t) {
this.validateBuffer(i.SIZE_OF_UINT16);
this.data.setUint16(this._position, t, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT16;
};
t.prototype.writeUTF = function(t) {
var e = this.encodeUTF8(t), n = e.length;
this.validateBuffer(i.SIZE_OF_UINT16 + n);
this.data.setUint16(this._position, n, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT16;
this._writeUint8Array(e, !1);
};
t.prototype.writeUTFBytes = function(t, e) {
this._writeUint8Array(this.encodeUTF8(t, e));
};
t.prototype.toString = function() {
return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable;
};
t.prototype._writeUint8Array = function(t, e) {
void 0 === e && (e = !0);
var n = this._position, o = n + t.length;
e && this.validateBuffer(o);
this.bytes.set(t, n);
this.position = o;
};
t.prototype.validate = function(t) {
var e = this._bytes.length;
return e > 0 && this._position + t <= e;
};
t.prototype.validateBuffer = function(t) {
this.write_position = t > this.write_position ? t : this.write_position;
t += this._position;
this._validateBuffer(t);
};
t.prototype.encodeUTF8 = function(t, e) {
for (var n = 0, o = this.stringToCodePoints(t), i = []; o.length > n; ) {
var r = o[n++];
if (this.inRange(r, 55296, 57343)) this.encoderError(r); else if (this.inRange(r, 0, 127)) if (null == e) i.push(r); else {
if (!(i.length + 1 < e)) break;
i.push(r);
} else {
var a = 0, s = 0;
if (this.inRange(r, 128, 2047)) {
a = 1;
s = 192;
} else if (this.inRange(r, 2048, 65535)) {
a = 2;
s = 224;
} else if (this.inRange(r, 65536, 1114111)) {
a = 3;
s = 240;
}
if (null == e) {
i.push(this.div(r, Math.pow(64, a)) + s);
for (;a > 0; ) {
var c = this.div(r, Math.pow(64, a - 1));
i.push(128 + c % 64);
a -= 1;
}
} else {
var l = 0;
i.push(this.div(r, Math.pow(64, a)) + s);
l++;
for (;a > 0; ) {
c = this.div(r, Math.pow(64, a - 1));
i.push(128 + c % 64);
a -= 1;
l++;
}
if (i.length > e) {
i.splice(i.length - l, l);
break;
}
}
}
}
if (null != e && i.length < e) for (a = e - i.length; a > 0; ) {
i.push(0);
a--;
}
return new Uint8Array(i);
};
t.prototype.decodeUTF8 = function(t) {
for (var e = 0, n = "", o = null, i = 0, r = 0, a = 0, s = 0; t.length > e; ) {
var c = t[e++];
if (c == this.EOF_byte) o = 0 != r ? this.decoderError(!1) : this.EOF_code_point; else if (0 == r) if (this.inRange(c, 0, 127)) o = c; else {
if (this.inRange(c, 194, 223)) {
r = 1;
s = 128;
i = c - 192;
} else if (this.inRange(c, 224, 239)) {
r = 2;
s = 2048;
i = c - 224;
} else if (this.inRange(c, 240, 244)) {
r = 3;
s = 65536;
i = c - 240;
} else this.decoderError(!1);
i *= Math.pow(64, r);
o = null;
} else if (this.inRange(c, 128, 191)) {
a += 1;
i += (c - 128) * Math.pow(64, r - a);
if (a !== r) o = null; else {
var l = i, u = s;
i = 0;
r = 0;
a = 0;
s = 0;
o = this.inRange(l, u, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(!1, c);
}
} else {
i = 0;
r = 0;
a = 0;
s = 0;
e--;
o = this.decoderError(!1, c);
}
if (null !== o && o !== this.EOF_code_point) if (o <= 65535) o > 0 && (n += String.fromCharCode(o)); else {
o -= 65536;
n += String.fromCharCode(55296 + (o >> 10 & 1023));
n += String.fromCharCode(56320 + (1023 & o));
}
}
return n;
};
t.prototype.encoderError = function() {};
t.prototype.decoderError = function(t, e) {
return e || 65533;
};
t.prototype.inRange = function(t, e, n) {
return e <= t && t <= n;
};
t.prototype.div = function(t, e) {
return Math.floor(t / e);
};
t.prototype.stringToCodePoints = function(t) {
for (var e = [], n = 0, o = t.length; n < t.length; ) {
var i = t.charCodeAt(n);
if (this.inRange(i, 55296, 57343)) if (this.inRange(i, 56320, 57343)) e.push(65533); else if (n == o - 1) e.push(65533); else {
var r = t.charCodeAt(n + 1);
if (this.inRange(r, 56320, 57343)) {
var a = 1023 & i, s = 1023 & r;
n += 1;
e.push(65536 + (a << 10) + s);
} else e.push(65533);
} else e.push(i);
n += 1;
}
return e;
};
return t;
}();
n.ByteArray = a;
cc._RF.pop();
}, {} ],
CacheManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4bfajBspdK6rFm4JM2XHck", "CacheManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CacheManager = void 0;
var o = t("./Resource"), i = t("../../defines/Macros"), r = function() {
function t(t) {
this._caches = new Map();
this.name = i.Macro.UNKNOWN;
this.name = t;
}
t.prototype.get = function(t, e) {
if (this._caches.has(t)) {
var n = this._caches.get(t);
if (e && n && n.isInvalid) {
Log.w("资源加载完成，但已经被释放 , 重新加载资源 : " + t);
this.remove(t);
return null;
}
return this._caches.get(t);
}
return null;
};
t.prototype.set = function(t, e) {
this._caches.set(t, e);
};
t.prototype.remove = function(t) {
return this._caches.delete(t);
};
t.prototype.removeUnuseCaches = function() {
var t = this;
this._caches.forEach(function(e, n) {
if (Array.isArray(e.data)) {
for (var o = !0, i = 0; i < e.data.length; i++) e.data[i] && e.data[i].refCount > 0 && (o = !1);
o && t._caches.delete(n);
} else e.data && e.data.refCount <= 0 && t._caches.delete(n);
});
};
Object.defineProperty(t.prototype, "size", {
get: function() {
return this._caches.size;
},
enumerable: !1,
configurable: !0
});
t.prototype.debug = function() {
this.name;
var t = this._caches, e = [], n = [];
t.forEach(function(t, o) {
var i = {
url: o,
data: {
url: t.info.url,
isLoaded: t.isLoaded,
isValid: cc.isValid(t.data),
assetType: cc.js.getClassName(t.info.type),
data: t.data ? cc.js.getClassName(t.data) : null,
status: t.status
}
};
t.isLoaded && t.data && !cc.isValid(t.data) ? n.push(i) : e.push(i);
});
if (e.length > 0) {
Log.d("----------- 有效缓存信息 -----------");
Log.d(JSON.stringify(e));
}
if (n.length > 0) {
Log.d("----------- 无效缓存信息 -----------");
Log.d(JSON.stringify(n));
}
};
return t;
}(), a = function() {
this.refCount = 0;
this.url = "";
this.retain = !1;
}, s = function() {
function t() {
this._caches = new Map();
this._spriteFrameCaches = new Map();
this._resMap = new Map();
}
t.prototype.get = function(t) {
return this._caches.has(t) ? this._caches.get(t) : null;
};
t.prototype.getSpriteFrame = function(t) {
if (this._spriteFrameCaches.has(t)) {
var e = this._spriteFrameCaches.get(t);
if (this.get(t)) return e;
this.remove(t);
return null;
}
return null;
};
t.prototype.setSpriteFrame = function(t, e) {
if (e && e instanceof cc.Texture2D) {
var n = this.getSpriteFrame(t);
if (n) return n.data;
var i = new o.Resource.CacheData();
i.data = new cc.SpriteFrame(e);
i.isLoaded = !0;
i.info.url = t;
this._spriteFrameCaches.set(t, i);
return i.data;
}
return null;
};
t.prototype.set = function(t, e) {
e.info.url = t;
this._caches.set(t, e);
};
t.prototype._getCacheInfo = function(t, e) {
void 0 === e && (e = !0);
if (t && t.url && t.url.length > 0) {
if (!this._resMap.has(t.url)) {
if (!e) return null;
var n = new a();
n.url = t.url;
this._resMap.set(t.url, n);
}
return this._resMap.get(t.url);
}
return null;
};
t.prototype.retainAsset = function(t) {
if (t && t.data) {
var e = this._getCacheInfo(t);
if (e) {
e.retain ? t.retain : e.retain = t.retain;
t.data.addRef();
e.refCount++;
e.retain && (e.refCount = 999999);
}
}
};
t.prototype.releaseAsset = function(t) {
if (t && t.data) {
var e = this._getCacheInfo(t, !1);
if (e) {
if (e.retain) return;
e.refCount--;
e.refCount <= 0 && this.remove(e.url);
}
}
};
t.prototype.remove = function(t) {
this._resMap.delete(t);
if (this._spriteFrameCaches.has(t)) {
this._spriteFrameCaches.get(t).data.decRef();
this._spriteFrameCaches.delete(t);
}
var e = this._caches.has(t) ? this._caches.get(t) : null;
if (e && e.data instanceof cc.Asset) {
e.data.decRef();
e.info.data = e.data;
}
return this._caches.delete(t);
};
t.prototype.debug = function() {
var t = this._spriteFrameCaches, e = this._caches, n = this._resMap;
Log.d("---- 远程加载资源缓存信息 ----");
var o = [], i = [];
t.forEach(function(t, e) {
var n = {
url: e,
data: {
url: t.info.url,
isLoaded: t.isLoaded,
isValid: cc.isValid(t.data),
assetType: cc.js.getClassName(t.info.type),
data: t.data ? cc.js.getClassName(t.data) : null,
status: t.status
}
};
t.isLoaded && (t.data && !cc.isValid(t.data) || !t.data) ? i.push(n) : o.push(n);
});
if (o.length > 0) {
Log.d("----------------有效 spriteFrame 缓存信息------------------");
Log.d(JSON.stringify(o));
}
if (i.length > 0) {
Log.d("----------------无效 spriteFrame 缓存信息------------------");
Log.d(JSON.stringify(i));
}
o = [];
i = [];
e.forEach(function(t, e) {
var n = {
url: e,
data: {
url: t.info.url,
isLoaded: t.isLoaded,
isValid: cc.isValid(t.data),
assetType: cc.js.getClassName(t.info.type),
data: t.data ? cc.js.getClassName(t.data) : null,
status: t.status
}
};
t.isLoaded && t.data && !cc.isValid(t.data) ? i.push(n) : o.push(n);
});
if (o.length > 0) {
Log.d("----------------有效缓存信息------------------");
Log.d(JSON.stringify(o));
}
if (i.length > 0) {
Log.d("----------------无效缓存信息------------------");
Log.d(JSON.stringify(i));
}
if (n.size > 0) {
Log.d("----------------当前资源引用计数信息------------------");
o = [];
n.forEach(function(t, e) {
var n = {
url: e,
data: {
refCount: t.refCount,
url: t.url,
retain: t.retain
}
};
o.push(n);
});
Log.d(JSON.stringify(o));
}
};
return t;
}(), c = function() {
function t() {
this.isResident = !0;
this.module = null;
this._bundles = new Map();
this._remoteCaches = new s();
}
Object.defineProperty(t.prototype, "remoteCaches", {
get: function() {
return this._remoteCaches;
},
enumerable: !1,
configurable: !0
});
t.prototype.getBundleName = function(t) {
return App.bundleManager.getBundleName(t);
};
t.prototype.get = function(t, e, n) {
void 0 === n && (n = !0);
var o = this.getBundleName(t);
return o && this._bundles.has(o) ? this._bundles.get(o).get(e, n) : null;
};
t.prototype.set = function(t, e, n) {
var o = this.getBundleName(t);
if (o) if (this._bundles.has(o)) this._bundles.get(o).set(e, n); else {
var i = new r(o);
i.set(e, n);
this._bundles.set(o, i);
}
};
t.prototype.remove = function(t, e) {
var n = this.getBundleName(t);
return !(!n || !this._bundles.has(n)) && this._bundles.get(n).remove(e);
};
t.prototype.removeWithInfo = function(t) {
if (t) if (t.data) if (Array.isArray(t.data)) {
for (var e = !0, n = 0; n < t.data.length; n++) {
t.data[n].decRef();
0 != t.data[n].refCount && (e = !1);
}
if (e) {
this.remove(t.bundle, t.url);
return !0;
}
} else {
t.data.decRef();
if (0 == t.data.refCount) {
this.remove(t.bundle, t.url);
return !0;
}
} else Log.e("info.data is null , bundle : " + t.bundle + " url : " + t.url); else Log.e("info is null");
return !1;
};
t.prototype.removeBundle = function(t) {
var e = this.getBundleName(t);
e && this._bundles.has(e) && this._bundles.delete(e);
};
t.prototype._removeUnuseCaches = function() {
this._bundles.forEach(function(t) {
t && t.removeUnuseCaches();
});
};
t.prototype._getGetCacheByAsyncArgs = function() {
return arguments.length < 3 ? null : "string" != typeof arguments[0] ? null : cc.js.isChildClassOf(arguments[1], cc.Asset) ? {
url: arguments[0],
type: arguments[1],
bundle: arguments[2]
} : null;
};
t.prototype.getCache = function() {
var t = arguments, e = this;
return new Promise(function(n) {
var o = e._getGetCacheByAsyncArgs.apply(e, t);
if (o) {
var i = e.get(o.bundle, o.url);
i ? i.isLoaded ? o.type ? i.data instanceof o.type ? n(i.data) : n(null) : n(i.data) : i.getCb.push(n) : n(null);
} else n(null);
});
};
t.prototype.getCacheByAsync = function() {
var t = this, e = this, n = this._getGetCacheByAsyncArgs.apply(this, arguments);
return new Promise(function(o) {
n ? e.getCache(n.url, n.type, n.bundle).then(function(e) {
n = n;
e && e instanceof n.type ? o(e) : App.asset.load(n.bundle, n.url, n.type, null, function(e) {
n = n;
if (e && e.data && e.data instanceof n.type) o(e.data); else {
App.SingleGame || Log.e(t.module + "加载失败 : " + n.url);
o(null);
}
});
}) : o(null);
});
};
t.prototype.getSpriteFrameByAsync = function(t, e, n, i, r) {
var a = this;
return new Promise(function(s) {
var c = 0, l = function(u) {
a.getCacheByAsync(u, cc.SpriteAtlas, r).then(function(a) {
var p = new o.Resource.Info();
p.url = u;
p.type = cc.SpriteAtlas;
p.data = a;
p.bundle = r;
i(n, p);
if (a) {
var d = a.getSpriteFrame(e);
if (d) if (cc.isValid(d)) s({
url: u,
spriteFrame: d
}); else {
Log.e("精灵帧被释放，释放当前无法的图集资源 url ：" + u + " key : " + e);
App.asset.releaseAsset(p);
s({
url: u,
spriteFrame: null,
isTryReload: !0
});
} else ++c >= t.length ? s({
url: u,
spriteFrame: null
}) : l(t[c]);
} else s({
url: u,
spriteFrame: null
});
});
};
l(t[c]);
});
};
t.prototype.debug = function() {
this._bundles.forEach(function(t) {
t.debug();
});
this.remoteCaches.debug();
};
t.module = "【缓存管理器】";
return t;
}();
n.CacheManager = c;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros",
"./Resource": "Resource"
} ],
CanvasHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5210dzFU1lPr5pMvEIr/xA/", "CanvasHelper");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CanvasHelper = void 0;
var o = function() {
function t() {
this.module = null;
this.downloadMime = "image/octet-stream";
}
Object.defineProperty(t.prototype, "support", {
get: function() {
var t = document.createElement("canvas"), e = t.getContext("2d");
return {
canvas: !!e,
imageData: !!(null == e ? void 0 : e.getImageData),
dataURL: !!t.toDataURL,
btoa: !!window.btoa
};
},
enumerable: !1,
configurable: !0
});
t.prototype.scaleCanvas = function(t, e, n) {
var o = t.width, i = t.height;
null == e && (e = o);
null == n && (n = i);
var r = document.createElement("canvas"), a = r.getContext("2d");
r.width = e;
r.height = n;
null == a || a.drawImage(t, 0, 0, o, i, 0, 0, e, n);
return r;
};
t.prototype.getDataURL = function(t, e, n, o) {
return (t = this.scaleCanvas(t, n, o)).toDataURL(e);
};
t.prototype.saveFile = function(t, e, n) {
this.fileDownload(t, e, n);
};
t.prototype.genImage = function(t) {
var e = document.createElement("img");
e.src = t;
return e;
};
t.prototype.fixType = function(t) {
return "image/" + (t = t.toLowerCase().replace(/jpg/i, "jpeg")).match(/png|jpeg|bmp|gif/)[0];
};
t.prototype.encodeData = function(t) {
if (!window.btoa) throw "btoa undefined";
var e = "";
if ("string" == typeof t) e = t; else for (var n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
return btoa(e);
};
t.prototype.getImageData = function(t) {
var e, n = t.width, o = t.height;
return null === (e = t.getContext("2d")) || void 0 === e ? void 0 : e.getImageData(0, 0, n, o);
};
t.prototype.makeURL = function(t, e) {
return "data:" + e + ";base64," + t;
};
t.prototype.genBitmapImage = function(t) {
var e = t.width, n = t.height, o = e * n * 3, i = o + 54, r = [ 66, 77, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0 ], a = [ 40, 0, 0, 0, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], s = (4 - 3 * e % 4) % 4, c = t.data, l = "", u = e << 2, p = n, d = String.fromCharCode;
do {
for (var f = u * (p - 1), h = "", _ = 0; _ < e; _++) {
var g = _ << 2;
h += d(c[f + g + 2]) + d(c[f + g + 1]) + d(c[f + g]);
}
for (var y = 0; y < s; y++) h += String.fromCharCode(0);
l += h;
} while (--p);
return this.encodeData(r.concat(a)) + this.encodeData(l);
};
t.prototype.savaAsImage = function(t, e, n, o, i) {
void 0 === o && (o = "png");
void 0 === i && (i = "defaultpng");
var r = null;
if (this.support.canvas && this.support.dataURL) {
if ("string" == typeof t) {
var a = document.getElementById(t);
a && (r = a);
} else r = t;
if (!r) return;
o = this.fixType(o);
if (/bmp/.test(o)) {
var s = this.getImageData(this.scaleCanvas(r, e, n));
if (s) {
var c = this.genBitmapImage(s);
this.saveFile(this.makeURL(c, this.downloadMime), o.replace("image/", ""), i);
}
} else {
r = this.scaleCanvas(r, e, n);
var l = this;
r.toBlob(function(t) {
var e = URL.createObjectURL(t);
l.saveFile(e, o.replace("image/", ""), i);
}, o, 1);
}
}
};
t.prototype.convertToImage = function(t, e, n, o) {
void 0 === o && (o = "png");
var i = null;
if (this.support.canvas && this.support.dataURL) {
if ("string" == typeof t) {
var r = document.getElementById(t);
r && (i = r);
} else i = t;
if (!i) return;
if (/bmp/.test(o)) {
var a = this.getImageData(this.scaleCanvas(i, e, n)), s = this.genBitmapImage(a);
return this.genImage(this.makeURL(s, "image/bmp"));
}
s = this.getDataURL(i, o, e, n);
return this.genImage(s);
}
};
t.prototype.fileDownload = function(t, e, n) {
var o = document.createElement("a");
o.style.display = "none";
o.href = t;
o.download = n + "." + e;
document.body.appendChild(o);
o.click();
document.body.removeChild(o);
};
t.prototype.saveAsPNG = function(t, e, n) {
return this.savaAsImage(t, e, n, "png", "defaultpng");
};
t.prototype.saveAsJPEG = function(t, e, n) {
return this.savaAsImage(t, e, n, "jpeg", "defaultjpg");
};
t.prototype.saveAsGIF = function(t, e, n) {
return this.savaAsImage(t, e, n, "gif", "defaultgif");
};
t.prototype.saveAsBMP = function(t, e, n) {
return this.savaAsImage(t, e, n, "bmp", "defaultbmp");
};
t.prototype.convertToPNG = function(t, e, n) {
return this.convertToImage(t, e, n, "png");
};
t.prototype.convertToJPEG = function(t, e, n) {
return this.convertToImage(t, e, n, "jpeg");
};
t.prototype.convertToGIF = function(t, e, n) {
return this.convertToImage(t, e, n, "gif");
};
t.prototype.convertToBMP = function(t, e, n) {
return this.convertToImage(t, e, n, "bmp");
};
t.module = "【CanvasHelper】";
return t;
}();
n.CanvasHelper = o;
cc._RF.pop();
}, {} ],
CmdConfig: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f7ecb37+gFCb4nV3AYSD2s7", "CmdConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = {
LabaTCP: {
SERVER_GAME_HEART: -1,
SERVER_GAME_LOGIN: 6e3,
Laba_UpDate_User: -1,
Laba_LOGIN_REQ: 6e3,
Laba_CONNENCT_SUCC: 4001,
SERVER_NOTIFY_TABLE_DISBAND: 6666,
Laba_GM_ROOM_INFO_RETURN: 8812,
Laba_SM_ROOM_INFO_RETURN: 8813,
Laba_OutGame: 4002,
Laba_SERVER_SYSTEM_MESSAGE: 9001,
Laba_Server_BroadCast: 1e4,
SERVER_FORCED_OFFLINE: 9003,
SERVER_TABLE_INFO_CHANGE: 8903,
SERVER_NOTIFY_REFLUSH_GAMEHOST: 9005,
SERVER_NOTIFY_GAME_MODE_INFO: 9006,
SERVER_NOTICE_USER_CHANGE: 8904,
CLINET_NOTICE_USER_CHANGE: 8905,
CLINET_NOTICE_KYC_CHANGE: 9008,
CLIENT_HEART_PING: 8888,
CLINET__SEND_CHAT_MSG: 8906,
SERVER_SEND_CHAT_MSG: 8907
},
CallbreakTCP: {
SERVER_LOGIN_Req: 6e3,
SERVER_LOGIN_SUCC_UC: 6001,
SERVER_TABLE_INFO_UC: 6002,
CLIENT_ROOM_INFO_REQ: 6033,
SERVER_LOGIN_SUCC_BC: 6003,
SERVER_LOGOUT_SUCC_BC: 6004,
CLIENT_LOGOUT_REQ: 6005,
CLIENT_SWITCH_ROOM: 6021,
CLIENT_READY_REQ: 6022,
GF_CLIENT_CHAT_REQ: 6025,
GF_CLIENT_FACE_REQ: 6031,
GF_CLIENT_EMOTION_REQ: 6028,
SERVER_CHAT_BC: 6027,
SERVER_FACE_BC: 6032,
SERVER_EMOTION_BC: 6030,
SERVER_GAME_HEART: -1,
SERVER_GAME_WILL_START_BC: 6006,
SERVER_GAME_START_BC: 6007,
SERVER_GAME_CARDS_BC: 6008,
SERVER_NOTIFY_SCORE_BC: 6009,
CLIENT_SCORE_REQUEST: 6010,
SERVER_SCORE_RETURN: 6011,
SERVER_SCORE_RETURN_BC: 6012,
SERVER_NOTIFY_OUT_CARD_BC: 6013,
SERVER_NOTIFY_OUT_CARD: 6014,
CLIENT_OUT_CARD_REQUEST: 6015,
SERVER_OUT_CARD_RETURN: 6016,
SERVER_OUT_CARD_RETURN_BC: 6017,
SERVER_GET_SCORE_BC: 6018,
SERVER_GAME_ROUND_BC: 6019
},
TeenTCP: {
SERVER_LOGIN_Req: 6e3,
SERVER_LOGIN_SUCC_UC: 6001,
CLIENT_ROOM_INFO_REQ: 1010,
GF_CLIENT_CHAT_REQ: 1005,
GF_CLIENT_FACE_REQ: 1006,
GF_CLIENT_EMOTION_REQ: 1011,
SERVER_GAME_HEART: -1,
SERVER_LOGIN_SUCC_BC: 4001,
SERVER_LOGIN_ERR_UC: 4002,
SERVER_LOGOUT_SUCC_BC: 4004,
CLIENT_LOGOUT_REQ: 1002,
SERVER_TABLE_INFO_UC: 4006,
SERVER_GAME_START_BC: 4009,
SERVER_NEXT_BET_BC: 4010,
SERVER_BET_SUCC_BC: 4011,
GM_NOTIFY_BUY_REQUEST: 5026,
SERVER_BET_SUCC_UC: 4012,
SERVER_GAME_END_BC: 4014,
SERVER_CHAT_BC: 4016,
SERVER_FACE_BC: 4017,
SERVER_EMOTION_BC: 4021,
SM_PRE_SLIDE_SHOW_RETURN: 5021,
CLIENT_BET_REQ: 1004,
SM_SLIDE_SHOW_RETURN: 5020,
SM_AJECT_SLIDE_SHOW_RETURN: 5022,
SM_AGREE_SLIDE_SHOW_RETURN: 5029,
SM_ALL_SHOW_RETURN: 5023,
SM_SEE_FLAG_RETURN: 5024,
SM_SLIDE_BET_BC: 5025,
SM_BUY_BC_RETURN: 5027,
SM_SHOW_OTHER_CARD: 5028,
SERVER_SHOWCARD_INFORM: 5002,
CLIENT_SWITCH_ROOM: 1007,
SERVER_START_GAME: 5030,
CLIENT_START_GAME_REQ: 5031,
SERVER_START_GAME_RETURN: 5032,
SERVER_ALERT_RETURN: 5044,
CLIENT_READY_REQ: 5006,
SERVER_SHOW_INFO: 6030,
SM_BUY_BC_START: 5035
},
AbTCP: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_BC_RETURN: 4002,
SM_LOGIN_SUCC_BC_RETURN: 4003,
SM_LOGOUT_SUCC_BC_RETURN: 4004,
GM_LOGINOUT_REQUEST: 4005,
GM_CHANGE_REQUEST: 4006,
SM_PRE_START_BC_RETURN: 4007,
SM_START_BC_RETURN: 4008,
SM_BACK_CARD_BC_RETURN: 4009,
SM_NOTIFY_STATE_BC_RETURN: 4010,
GM_PLAYER_BET_REQUEST: 4011,
SM_PLAYER_BET_RETURN: 4012,
SM_PLAYER_BET_BC_RETURN: 4013,
SM_GAME_END_BC_INFORM: 4014,
GF_CLIENT_CHAT_REQ: 4015,
SM_CHAT_RETURN: 4016,
SM_CHAT_BC_RETURN: 4017,
GF_CLIENT_EMOTION_REQ: 4018,
SM_EXPRESSION_RETURN: 4019,
SM_EXPRESSION_BC_RETURN: 4020,
GF_CLIENT_FACE_REQ: 4021,
SM_NORMALEXPRESION_BC_RETURN: 4022,
SM_NOTIFY_PLAYER_STATE_BC_RETURN: 4023,
SM_TABLE_INFO_RETURN: 4024,
GM_CANCEL_BET_REQUEST: 4025,
SM_CANCEL_BET_RETURN: 4026,
SM_CANCEL_BET_BC_RETURN: 4027,
GM_CHANGE_BET_REQUEST: 4028,
SM_CHANGE_BET_RETURN: 4029
},
SevenUpTcp: {
GF_RollDice_GM_LOGIN_REQUEST: 6e3,
GF_RollDice_SM_LOGIN_RETURN: 6001,
GF_RollDice_SM_TABLEINFO_RETURN: 6002,
GF_RollDice_SM_LOGOUT_SUCC_BC_RETURN: 6005,
GF_RollDice_GM_LOGINOUT_REQUEST: 6006,
GF_RollDice_SM_NOTIFY_ROLL_RESULT: 6007,
GF_RollDice_GM_HISTORY_RECORD_REQUSET: 6010,
GF_RollDice_SM_HISTORY_RECORD_RETURN: 6011,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_SM_BET_RETURN: 6013,
GF_RollDice_SM_BET_BC: 6014,
GF_RollDice_SM_PER_SECOND_BET_INFO: 6015,
GF_RollDice_SM_NOTIFY_BET: 6016,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_SM_BET_CHANGE_RETURN: 6018,
GF_RollDice_GM_SIT_DOWN_REQUEST: 6019,
GF_RollDice_SM_SIT_DOWN_RETURN: 6020,
GF_RollDice_SM_SIT_DOWN_BC: 6021,
GF_RollDice_GM_STAND_UP_REQUEST: 6022,
GF_RollDice_SM_STAND_UP_RETURN: 6023,
GF_RollDice_SM_STAND_UP_BC: 6024,
GF_RollDice_SM_NOTIFY_COMMING_REST: 6025,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GF_RollDice_SM_PLAYERS_INFO_RETURN: 6027,
GF_RollDice_GM_REQUEST_TABLE_INFO: 6028,
GF_RollDice_SERVER_CHAT_BC: 6040,
GF_RollDice_SERVER_FACE_BC: 6041,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
GF_RollDice_SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
SM_ONLINE_PLAYERS_COUNT: 6029
},
RummyTcp: {
SERVER_GAME_HEART: -1,
SERVER_CREATE_REQ: 5e3,
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_BC_RETURN: 7002,
SM_LOGIN_SUCC_BC_RETURN: 7003,
GM_LOGINOUT_REQUEST: 7004,
SM_LOGOUT_SUCC_BC_RETURN: 7005,
GM_CHANGE_REQUEST: 7006,
SM_NOTIFY_GAME_START_BC_RETURN: 7008,
SM_START_BC_RETURN: 7009,
GM_SELF_CARDS_REQUEST: 7010,
SM_SELF_CARDS_RETURN: 7011,
GM_GONG_CARDS_REQUEST: 7012,
SM_GONG_CARDS_RETURN: 7013,
SM_NEXT_DEAL_BC_RETURN: 7014,
GM_DROP_CARD_REQUEST: 7015,
SM_DROP_CARD_RETURN: 7016,
SM_DROP_CARD_BC_RETURN: 7017,
GM_PICK_CARD_REQUEST: 7018,
SM_PICK_CARD_RETRUN: 7019,
SM_PICK_CARD_BC_RETRUN: 7020,
GM_DISCARD_CARD_REQUEST: 7021,
SM_DISCARD_CARD_RETURN: 7022,
SM_DISCARD_CARD_BC_RETURN: 7023,
GM_MOVE_CARD_REQUEST: 7024,
SM_MOVE_CARD_REQUEST: 7025,
GM_GROUP_CARD_REQUEST: 7026,
SM_GROUP_CARD_REQUEST: 7027,
GM_DECARE_CARD_REQUEST: 7028,
SM_DECARE_CARD_RETURN: 7029,
SM_DECARE_CARD_BC_RETURN: 7030,
GM_FINISH_REQUEST: 7031,
SM_FINISH_RETURN: 7032,
SM_GAME_END_BC_INFORM: 7033,
GM_LAST_CARD_REQUEST: 7034,
SM_LAST_CARD_RETURN: 7035,
GF_CLIENT_CHAT_REQ: 7036,
SM_CHAT_RETURN: 7037,
SM_CHAT_BC_RETURN: 7038,
GF_CLIENT_EMOTION_REQ: 7039,
SM_EXPRESSION_RETURN: 7040,
SM_EXPRESSION_BC_RETURN: 7041,
GF_CLIENT_FACE_REQ: 7042,
SM_NORMALEXPRESION_REQUEST: 7043,
SM_NORMALEXPRESION_BC_RETURN: 7044,
SM_LEVEL_CD_BC_RETURN: 7045,
GM_FLUSH_TABLEINFO_REQUEST: 7046,
GM_DECARE_CARD_CHECK_RETURN: 7047,
SM_DECARE_CARD_CHECK_RETURN: 7048,
GM_GAME_SHOW_INFO: 7051,
SM_GAME_SHOW_INFO: 7052,
GM_ADD_CARD_REQUEST: 7053,
SM_ADD_CARD_RETURN: 7054,
SM_NOTIFY_MONEY_CHANGE_BC_RETURN: 7056,
SERVER_ALERT_RETURN: 5044,
GM_NOTIFY_BUY_REQUEST: 5026,
SM_NOTIFY_DRAW_CARDS_BC_RETURN: 7059,
SM_FINISH_RETURN_BC: 7060,
SM_GAME_SHOW_SWITCH: 7061,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GM_OUT_CARD_RECORD_REQ: 7057,
SM_OUT_CARD_RECORD_RETURN: 7058
},
InbetweenTCP: {
GM_LOGIN_REQUEST: 7e3,
SM_LOGIN_RETURN: 7001,
SM_LOGIN_SUCC_BC_RETURN: 7002,
GM_LOGINOUT_REQUEST: 7003,
SM_LOGOUT_SUCC_BC_RETURN: 7004,
SM_TABLEINFO_BC_RETURN: 7005,
GM_CHANGE_REQUEST: 7006,
SM_CHANGE_SUCC_BC_RETURN: 7007,
SM_NOTIFY_GAME_START_BC_RETURN: 7008,
SM_START_BC_RETURN: 7009,
SM_NOTIFY_DRAW_CARDS_BC_RETURN: 7010,
SM_SELF_CARDS_RETURN: 7011,
SM_NEXT_DEAL_BC_RETURN: 7012,
GM_BET_REQUEST: 7013,
SM_BET_RETURN: 7014,
SM_BET_BC_RETURN: 7015,
GM_FOLD_CARD_REQUEST: 7016,
SM_FOLD_CARD_RETURN: 7017,
SM_FOLD_CARD_BC_RETURN: 7018,
GF_CLIENT_CHAT_REQ: 7019,
SM_CHAT_RETURN: 7020,
SM_CHAT_BC_RETURN: 7021,
GF_CLIENT_EMOTION_REQ: 7022,
SM_EXPRESSION_RETURN: 7023,
SM_EXPRESSION_BC_RETURN: 7024,
GF_CLIENT_FACE_REQ: 7025,
SM_NORMALEXPRESION_REQUEST: 7026,
SM_NORMALEXPRESION_BC_RETURN: 7027,
CLIENT_ROOM_INFO_REQ: 7028,
SM_NOTIFY_GAME_SETTLE: 7029,
SM_NOTIFY_MONEY_CHANGE_BC_RETURN: 7030,
SERVER_ALERT_RETURN: 5044,
GM_NOTIFY_BUY_REQUEST: 5026
},
RedBlackTCP: {
RB_CLIENT_LOGIN_REQUEST: 6e3,
RB_CLIENT_LOGINOUT_REQUEST: 6004,
RB_CLIENT_BET_REQUEST: 6006,
RB_CLIENT_BET_AGIN_REQUEST: 6010,
RB_CLIENT_AUTO_REQUEST: 6012,
RB_CLIENT_GAME_INFO_REQUEST: 6015,
RB_CLIENT_GAME_RECORD_REQUEST: 6016,
RB_SERVER_LOGIN_RETURN: 6001,
RB_SERVER_GAME_INFO_RETURN: 6002,
RB_SERVER_LOGOUT_SUCC_RETURN: 6003,
RB_SERVER_NOTIFY_ROLL_RESULT: 6005,
RB_SERVER_BET_RETURN: 6007,
RB_SERVER_PER_SECOND_BET_INFO: 6008,
RB_SERVER_NOTIFY_STATE_CHANGE: 6009,
RB_SERVER_BET_AGIN_RETURN: 6011,
RB_SERVER_AUTO_RETURN: 6013,
RB_SERVER_TRENDINFO_RETURN: 6014,
RB_SERVER_GAME_RECORD_RETURN: 6017,
RB_SERVER_GAME_SCROLLER: 6018,
RB_SERVER_GAME_RED: 6019,
RB_SERVER_GAME_WINNER_REQUEST: 6021,
RB_CLIENT_EXIT_GAME_REQUEST: 6022
},
SlotMachineTCP: {
RB_CLIENT_LOGIN_REQUEST: 6e3,
RB_CLIENT_LOGINOUT_REQUEST: 7006,
RB_CLIENT_BET_REQUEST: 7012,
RB_CLIENT_BET_AUTO_REQUEST: 7037,
RB_CLIENT_BET_CHANGE_REQUEST: 7017,
RB_CLIENT_GAME_INFO_REQUEST: 7028,
RB_CLIENT_GAME_RECORD_REQUEST: 7010,
RB_SERVER_LOGIN_RETURN: 6001,
RB_SERVER_GAME_INFO_RETURN: 7002,
RB_SERVER_LOGOUT_SUCC_RETURN: 7005,
RB_SERVER_BET_RETURN: 7013,
RB_SERVER_AUTO_BET_RETURN: 7038,
RB_SERVER_BET_CHANGE_RETURN: 7018,
RB_SERVER_GAME_RECORD_RETURN: 7011,
RB_SERVER_GAME_RED: 7034
},
SixDiceTcp: {
GF_RollDice_GM_LOGIN_REQUEST: 6e3,
GF_RollDice_SM_LOGIN_RETURN: 6001,
GF_RollDice_SM_TABLEINFO_RETURN: 6002,
GF_RollDice_SM_LOGOUT_SUCC_BC_RETURN: 6005,
GF_RollDice_GM_LOGINOUT_REQUEST: 6006,
GF_RollDice_SM_NOTIFY_ROLL_RESULT: 6007,
GF_RollDice_GM_HISTORY_RECORD_REQUSET: 6010,
GF_RollDice_SM_HISTORY_RECORD_RETURN: 6011,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_SM_BET_RETURN: 6013,
GF_RollDice_SM_BET_BC: 6014,
GF_RollDice_SM_PER_SECOND_BET_INFO: 6015,
GF_RollDice_SM_NOTIFY_BET: 6016,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_SM_BET_CHANGE_RETURN: 6018,
GF_RollDice_GM_SIT_DOWN_REQUEST: 6019,
GF_RollDice_SM_SIT_DOWN_RETURN: 6020,
GF_RollDice_SM_SIT_DOWN_BC: 6021,
GF_RollDice_GM_STAND_UP_REQUEST: 6022,
GF_RollDice_SM_STAND_UP_RETURN: 6023,
GF_RollDice_SM_STAND_UP_BC: 6024,
GF_RollDice_SM_NOTIFY_COMMING_REST: 6025,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GF_RollDice_SM_PLAYERS_INFO_RETURN: 6027,
GF_RollDice_GM_REQUEST_TABLE_INFO: 6028,
GF_RollDice_SERVER_CHAT_BC: 6040,
GF_RollDice_SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
GF_RollDice_SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033
},
GuessNumberTcp: {
GF_RollDice_GM_LOGIN_REQUEST: 6e3,
GF_RollDice_SM_LOGIN_RETURN: 6001,
GF_RollDice_SM_TABLEINFO_RETURN: 6002,
GGF_RollDice_SM_LOGOUT_SUCC_BC_RETURN: 6005,
GF_RollDice_GM_LOGINOUT_REQUEST: 6006,
GF_RollDice_SM_NOTIFY_ROLL_RESULT: 6007,
GF_RollDice_GM_HISTORY_RECORD_REQUSET: 6010,
GF_RollDice_SM_HISTORY_RECORD_RETURN: 6011,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_SM_BET_RETURN: 6013,
GF_RollDice_SM_BET_BC: 6014,
GF_RollDice_SM_PER_SECOND_BET_INFO: 6015,
GF_RollDice_SM_NOTIFY_BET: 6016,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_SM_BET_CHANGE_RETURN: 6018,
GF_RollDice_GM_SIT_DOWN_REQUEST: 6019,
GF_RollDice_SM_SIT_DOWN_RETURN: 6020,
GF_RollDice_SM_SIT_DOWN_BC: 6021,
GF_RollDice_GM_STAND_UP_REQUEST: 6022,
GF_RollDice_SM_STAND_UP_RETURN: 6023,
GF_RollDice_SM_STAND_UP_BC: 6024,
GF_RollDice_SM_NOTIFY_COMMING_REST: 6025,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GF_RollDice_SM_PLAYERS_INFO_RETURN: 6027,
GF_RollDice_GM_REQUEST_TABLE_INFO: 6028,
GF_RollDice_SERVER_CHAT_BC: 6040,
GF_RollDice_SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
GF_RollDice_SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SM_ONLINE_PLAYERS_COUNT: 6029
},
CommonRoomTCP: {
SERVER_VENHU_GUIDE: 9002,
COMMON_HEARTBEAT_REQ: 8888
},
BrpattiTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_REQUEST_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
GM_GET_GAME_RECORD: 6037,
SM_GET_GAME_RECORD: 6038,
GM_GET_BIG_WIN_RECORD: 6050,
SM_GET_BIG_WIN_RECORD: 6051,
GM_GET_JACKPOT_RECORD: 6052,
SM_GET_JACKPOT_RECORD: 6053
},
BrabTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_REQUEST_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_SEN_BASE_CARD: 6048,
SERVER_SEN_RESULT_CARD: 6049,
SERVER_GAME_HEART: -1
},
BigBattleTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_REQUEST_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1
},
PaomaTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_RACING_START: 6007,
SM_NOTIFY_RACING_END: 6008,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_GET_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
CLIENT_CHAT_REQ: 6042,
CLIENT_FACE_REQ: 6043,
SERVER_UPDATE_INFO_BC: 6044,
CLIENT_INFO_REQ: 6045,
SERVER_EMOTION_BC: 6046,
CLIENT_EMOTION_REQ: 6047,
SERVER_ONLINECOUNT_REQUEST: 6035,
SERVER_ONLINECOUNT_RETURN: 6036
},
BaccaratTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_GET_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
CLIENT_CHAT_REQ: 6042,
CLIENT_FACE_REQ: 6043,
SERVER_UPDATE_INFO_BC: 6044,
CLIENT_INFO_REQ: 6045,
SERVER_EMOTION_BC: 6046,
CLIENT_EMOTION_REQ: 6047,
SERVER_SEN_BASE_CARD: 6048,
SERVER_SEN_RESULT_CARD: 6049,
SERVER_NOTIFY_CLEAN_LOG: 6050,
SERVER_ONLINECOUNT_REQUEST: 6035,
SERVER_ONLINECOUNT_RETURN: 6036
},
VideoPokerTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_GAME_START_BC: 6003,
SM_LOGIN_SUCC_BC_RETURN: 6004,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
GM_DEAL_REQUEST: 6008,
SM_DEAL_RESPOND: 6009,
GM_DRAW_REQUEST: 6010,
SM_DRAW_RESPOND: 6011,
GM_DOUBLE_REQUEST: 6012,
SM_DOUBLE_RESPOND: 6013,
SM_NOTIFY_DOUBLE_OPEN: 6014,
SM_DOUBLE_OPEN_RESPOND: 6015,
GM_JACK_DOUBlE_REQUEST: 6016,
SM_JACK_DOUBLE_OPEN_RESPOND: 6017
},
CrashTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_RACING_START: 6007,
SM_NOTIFY_RACING_END: 6008,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_GET_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SM_RACING_BC: 6034,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
CLIENT_CHAT_REQ: 6042,
CLIENT_FACE_REQ: 6043,
SERVER_UPDATE_INFO_BC: 6044,
CLIENT_INFO_REQ: 6045,
SERVER_EMOTION_BC: 6046,
CLIENT_EMOTION_REQ: 6047,
SERVER_ONLINECOUNT_REQUEST: 6035,
SERVER_ONLINECOUNT_RETURN: 6036,
SM_CRASHOUT_REQUEST: 6037,
SM_CRASHOUT_RETURN: 6038,
SM_CRASHOUT_BC: 6039,
SM_ROOM_CLOSE: 6050
},
Mines: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_GAME_START_BC: 6003,
SM_LOGIN_SUCC_BC_RETURN: 6004,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_GAME_END: 6007,
GM_OPEN_REQUEST: 6008,
SM_OPEN_RESPOND: 6009,
GM_DRAW_REQUEST: 6010,
SM_DRAW_RESPOND: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
GM_GET_TABLE_INFO: 6028,
SM_ROOM_CLOSE: 6050
}
};
cc._RF.pop();
}, {} ],
CmdDefines: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b06838e7phP8ryXKzNFC0BC", "CmdDefines");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SUB_CMD_SYS = n.MainCmd = void 0;
n.MainCmd = {
CMD_SYS: 1,
CMD_GAME: 2,
CMD_LOBBY: 1e4,
CMD_PAY: 4,
CMD_CHAT: 5
};
n.SUB_CMD_SYS = {
CMD_SYS_HEART: 8888,
CMD_Game_Time_Out: 99
};
cc._RF.pop();
}, {} ],
CmmEntry: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7f398QeqRxGm4NRGJcpNW5h", "CmmEntry");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CmmEntry = void 0;
var r = t("../../framework/core/entry/EntryDelegate"), a = t("../../framework/defines/Macros"), s = t("../../framework/utils/Singleton"), c = t("./BundleUpdateHandlerImpl"), l = t("./MainUpdateHandlerImpl"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnterGameView = function(e, n) {
App.stageData.where = e.bundle;
t.prototype.onEnterGameView.call(this, e, n);
};
e.prototype.getEntryConfig = function(t) {
var e = App.stageData.getEntry(t);
if (e) {
var n = App.updateManager.getItem(e);
t == a.Macro.BUNDLE_RESOURCES ? n.handler = s.Singleton.instance.get(l.MainUpdateHandlerImpl) : n.handler = s.Singleton.instance.get(c.BundleUpdateHandlerImpl);
return n;
}
Log.e("未找到入口配置信息" + t);
return null;
};
e.prototype.getPersistBundle = function() {
return [ a.Macro.BUNDLE_RESOURCES ];
};
return e;
}(r.EntryDelegate);
n.CmmEntry = u;
cc._RF.pop();
}, {
"../../framework/core/entry/EntryDelegate": "EntryDelegate",
"../../framework/defines/Macros": "Macros",
"../../framework/utils/Singleton": "Singleton",
"./BundleUpdateHandlerImpl": "BundleUpdateHandlerImpl",
"./MainUpdateHandlerImpl": "MainUpdateHandlerImpl"
} ],
CmmUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "34b7aySWwlFtbKsOlMK4TuQ", "CmmUtils");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.director = n.display = n.CmmUtils = void 0;
var r = t("../../framework/defines/Macros"), a = t("../../framework/utils/Utils"), s = t("../../sdk/AppInfo"), c = t("../../sdk/GameNativeConfig"), l = t("../../sdk/SdkManager"), u = t("../config/Config"), p = t("../config/ConstString"), d = t("../config/GlobalVar"), f = t("../config/User"), h = t("../event/CommonEvent"), _ = t("./UIUtils"), g = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.getUpRoot = function() {
e.upRootNode || (e.upRootNode = cc.find("Canvas/uiRoot/upRoot"));
return e.upRootNode;
};
Object.defineProperty(e, "msec", {
get: function() {
return new Date().getTime();
},
enumerable: !1,
configurable: !0
});
e.string_format_args = function(t) {
for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
for (var o = 0; o < e.length; o++) t = t.replace(RegExp("\\{" + o + "\\}", "ig"), e[o]);
return t;
};
Object.defineProperty(e, "day", {
get: function() {
return new Date().getDay();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "sec", {
get: function() {
return Math.floor(this.msec / 1e3);
},
enumerable: !1,
configurable: !0
});
e.Since = function(t) {
return this.msec - t;
};
e.NumberAddCurrencyString = function(t) {
return t + "";
};
e.NumberForceAddCurrencyString = function(t) {
return d.GlobalVar.money_symbol + t;
};
e.NumberToKString = function(t) {
return t < 1e3 ? e.saveDecimal(2, t.toString()) : e.returnNumericalForNewUnit(t, 1e3, "K", 2, !1);
};
e.NumberToMString = function(t) {
return t < 1e3 ? e.saveDecimal(2, t.toString()) : t < 1e6 ? e.returnNumericalForNewUnit(t, 1e3, "K", 2, !1) : e.returnNumericalForNewUnit(t, 1e6, "M", 2, !1);
};
e.NumberToBString = function(t, n) {
t || (t = 0);
return t < 1e3 ? e.saveDecimal(2, t.toString()) : t < 1e6 ? e.returnNumericalForNewUnit(t, 1e3, "K", 2, n) : t < 1e9 ? e.returnNumericalForNewUnit(t, 1e6, "M", 2, n) : e.returnNumericalForNewUnit(t, 1e9, "B", 2, n);
};
e.NumberToTableGmaeBString = function(t, n) {
return t < 1e3 ? e.saveDecimal(0, t.toString()) : t < 1e6 ? e.returnNumericalForNewUnit(t, 1e3, "K", 2, n) : t < 1e9 ? e.returnNumericalForNewUnit(t, 1e6, "M", 2, n) : e.returnNumericalForNewUnit(t, 1e9, "B", 2, n);
};
e.NumberToGameString = function(t, n) {
void 0 === n && (n = 0);
return 2 == d.GlobalVar.countryCode ? t < 1e5 ? e.saveDecimal(n, t.toString()) : t < 1e7 ? e.returnNumericalForNewUnit(t, 1e3, "K", 2) : t < 1e10 ? e.returnNumericalForNewUnit(t, 1e6, "M", 2) : e.returnNumericalForNewUnit(t, 1e9, "B", 2) : t < 1e7 ? e.saveDecimal(n, t.toString()) : t < 1e9 ? e.returnNumericalForNewUnit(t, 1e3, "K", 2) : t < 1e12 ? e.returnNumericalForNewUnit(t, 1e6, "M", 2) : e.returnNumericalForNewUnit(t, 1e9, "B", 2);
};
e.NumberToGameStringHavePoint = function(t) {
return 2 == d.GlobalVar.countryCode ? t < 1e5 ? e.saveDecimal(0, t.toString()) : t < 1e7 ? e.returnNumericalForNewUnit(t, 1e3, "K", 2) : t < 1e10 ? e.returnNumericalForNewUnit(t, 1e6, "M", 2) : e.returnNumericalForNewUnit(t, 1e9, "B", 2) : t < 1e7 ? e.saveDecimal(2, t.toString()) : t < 1e9 ? e.returnNumericalForNewUnit(t, 1e3, "K", 2) : t < 1e12 ? e.returnNumericalForNewUnit(t, 1e6, "M", 2) : e.returnNumericalForNewUnit(t, 1e9, "B", 2);
};
e.NumberToHallString = function(t, n, o) {
t || (t = 0);
return 2 == d.GlobalVar.countryCode ? o ? this.returnNumericalForNewUnit(t, 1e3, "K", 2, !0) : this.returnNumericalForNewUnit(t, 1e3, "K", 2, !1) : this.returnNumerical(e.saveDecimal(2, t.toString(), n));
};
e.NumberToTabeGameString = function(t) {
t || (t = 0);
return 2 == d.GlobalVar.countryCode ? this.returnNumericalForNewUnit(t, 1e3, "K", 2, !0) : this.returnNumerical(e.saveDecimal(0, t.toString()));
};
e.NumberToOtherString = function(t, n, o) {
t || (t = 0);
return 2 == d.GlobalVar.countryCode ? o ? this.returnNumericalForNewUnit(t, 1e3, "K", 2, !0) : this.returnNumericalForNewUnit(t, 1e3, "K", 2, !1) : this.returnNumerical(e.saveDecimal(2, t.toString(), n));
};
e.NumberToJackString = function(t) {
t || (t = 0);
return 2 == d.GlobalVar.countryCode ? this.returnNumerical(e.saveDecimal(0, t, !1)) : this.returnNumerical(e.saveDecimal(2, t, !0));
};
e.NumberToString_Country = function(t, e, n) {
return 2 == e ? this.NumberToHallString_Indonesia(t, n) : this.NumberToHallString(t, n);
};
e.NumberToHallString_Indonesia = function(t, e) {
t || (t = 0);
var n = this.returnNumericalForNewUnit(t, 1e3, "K", 2, e);
if (t >= 1e3) {
var o = n.substring(0, n.length - 1);
n = this.returnNumerical(o) + "K";
}
return n;
};
e.stringToNumber = function(t) {
var e = 0;
Number(t) && (e = Number(t));
return e;
};
e.checkNumberAndSymbol = function(t) {
return !!Number(t);
};
e.AvatarPath = function(t) {
return p.ConstString.headPath + t;
};
e.Until = function(t) {
return t - this.msec;
};
e.formatDate = function(t) {
return new Date(1e3 * t).format("hh:mm:ss");
};
e.formatSec = function(t) {
var e = Math.floor(t % 86400 / 3600), n = Math.floor(t % 3600 / 60), o = Math.floor(t % 60);
return (e < 10 ? "0" + e : e) + ":" + (n < 10 ? "0" + n : n) + ":" + (o < 10 ? "0" + o : o);
};
e.color = function(t) {
return cc.color(t >> 16 & 255, t >> 8 & 255, t >> 0 & 255, 255);
};
e.sleep = function(t) {
return new Promise(function(e) {
setTimeout(function() {
e(1);
}, 1e3 * t);
});
};
e.precentString = function(t) {
return (100 * t).toFixed(0) + "%";
};
e.sleepNode = function(t, e) {
void 0 === e && (e = 0);
return new Promise(function(n) {
t.scheduleOnce(function() {
n(1);
}, e);
});
};
e.fromdate = function(t) {
var e = function(t) {
return t < 10 ? "0" + t : "" + t;
};
if (t > 3600) {
var n = Math.floor(t / 3600), o = (t - 3600 * n) % 60;
return n + ":" + e(Math.floor((t - 3600 * n) / 60)) + ":" + e(o);
}
if (t > 60) {
o = t % 60;
return "00:" + e(Math.floor(t / 60)) + ":" + e(o);
}
return "00:" + e(t);
};
e.parseRichText = function(t) {
for (var e = "", n = t.split("|"), o = 0; o < n.length; o++) {
var i = n[o], r = i.lastIndexOf("("), a = i.lastIndexOf(")");
if (-1 != r && -1 != a) {
var s = i.substr(0, r);
e += "<color=" + i.substr(r + 1).replace(")", "") + ">" + s + "</c>";
} else e += i;
}
return e;
};
e.copyObjWhenKeyEqual = function(t, e) {
for (var n = 0, o = Object.keys(t); n < o.length; n++) {
var i = o[n];
e[i] = t[i];
}
return e;
};
e.copyObjArrWhenKeyEqual = function(t) {
for (var e = [], n = 0; n < t.length; n++) {
var o = {};
this.copyObjWhenKeyEqual(t[n], o);
e.push(o);
}
return e;
};
e.money = function(t) {
return t ? Number.isInteger(t) ? t.toString() : t.toFixed(2) : "0";
};
e.isNil = function(t) {
return !cc.isValid(t);
};
e.isNull = function(t) {
return !t && 0 != t;
};
e.stringNotEmpty = function(t) {
return "string" == typeof t && "undefine" != t && "" != t;
};
e.nick = function(t, e) {
null == t && (t = "null");
void 0 === e && (e = 10);
return t.length > e ? t.substring(0, e) : t;
};
e.colorOfString = function(t) {
if (null == t || 7 != t.length) return null;
var e = t.toLowerCase();
if ("#" == e.charAt(0)) {
e = e.slice(1);
var n = parseInt(e[0] + e[1], 16), o = parseInt(e[2] + e[3], 16), i = parseInt(e[4] + e[5], 16);
return new cc.Color(n, o, i, 255);
}
};
e.isGameing = function() {
return !(!App.gameView || "LoginView" == App.gameView.className || "HallView" == App.gameView.className);
};
e.isHallviewing = function() {
return "HallView" == App.gameView.className;
};
e.returnNumerical = function(t) {
var e = "", n = 0, o = "", i = "";
if ("-" == t[0]) {
o = "-";
t = t.substring(1, t.length);
}
if (t.indexOf(".") > 0) {
i = "." + t.split(".")[1];
t = t.split(".")[0];
}
if (t.length > 3) {
n = t.length;
if (0 != (n %= 3)) {
for (var r = 0; r < n; r++) e += t[r];
e += ",";
}
}
var a = 0;
for (r = n; r < t.length; r++) {
e += t[r];
if (3 == ++a && r != t.length - 1) {
e += ",";
a = 0;
}
}
return o + e + i;
};
e.returnNumericalForNewUnit = function(t, e, n, o, i) {
void 0 === i && (i = !1);
var r = Number(this.saveDecimal(o, t.toString(), i));
return Math.abs(r) < e ? r + "" : this.saveDecimal(o, r / e + "", i) + n;
};
e.saveDecimal = function(t, e, n) {
void 0 === n && (n = !1);
for (var o = "", i = !1, r = "", a = !1, s = 0; s < e.length; s++) {
i && t--;
if ("." == e[s]) {
a = !0;
i = !0;
if (0 == t) break;
}
if (i) {
r += e[s];
if (0 == t) break;
} else o += e[s];
}
if (n) {
a || (r = "." + r);
for (s = 0; s < t; s++) r += "0";
}
return o + r;
};
e.stringToNumberArr = function(t, e) {
try {
for (var n = t.split(e), o = [], i = 0; i < n.length; i++) n[i].length > 0 && o.push(Number(n[i]));
return o;
} catch (t) {
Log.e(t.toString());
return null;
}
};
e.stringToIntArr = function(t, n) {
try {
for (var o = t.split(n), i = [], r = 0; r < o.length; r++) o[r].length > 0 && i.push(e.stringToInt(o[r]));
return i;
} catch (t) {
Log.e(t.toString());
return null;
}
};
e.stringToInt = function(t) {
try {
return "" == t || null == t ? 0 : Number.parseInt(t);
} catch (t) {
Log.e(t.toString());
return 0;
}
};
e.numberRollTo = function(t, e, n, o, i) {
var r = this, a = {
str: n,
scale: 1
};
cc.tween(a).to(e, {
str: o,
scale: 1.5
}, {
onUpdate: function() {
if (t) {
t.string = i ? d.GlobalVar.money_symbol + r.NumberToHallString(a.str, !0) : r.NumberToHallString(a.str, !0);
t.node.scale = a.scale;
}
}
}).call(function() {
cc.tween(a).to(.2, {
scale: 1
}, {
onUpdate: function() {
t && (t.node.scale = a.scale);
}
}).start();
}).start();
};
e.numberOnlyRollTo = function(t, e, n, o, i) {
var r = this, a = {
str: n
};
return cc.tween(a).to(e, {
str: o
}, {
onUpdate: function() {
t && (t.string = i ? d.GlobalVar.money_symbol + r.NumberToHallString(a.str, !0) : r.NumberToHallString(a.str, !0));
}
}).start();
};
e.scaleToBack = function(t) {
cc.tween(t).to(.1, {
scale: 1.3
}).call(function() {
cc.tween(t).to(.1, {
scale: 1
}).start();
}).start();
};
e.popRet1 = function(t, e) {
var n = t;
if (0 != n.ret) {
if (0 == n.type) {
App.tips.show(n.desc);
return;
}
if (4 == n.type) {
cc.director.clear();
cc.game.end();
return;
}
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: function() {
if (1 != n.type) {
if (2 != n.type) if (3 != n.type) ; else if (App.SingleGame) l.default.ExitSingleGame(); else {
if ("LoginView" == App.gameView.className) {
App.storage.removeItem(c.default.Key.PhoneId);
f.default.self.clear();
} else {
App.storage.removeItem(c.default.Key.PhoneId);
f.default.self.clear();
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
e && e.close();
}
} else if (App.SingleGame) l.default.ExitSingleGame(); else {
d.GlobalVar.isGameing && dispatch(h.ComponentGameEvent.SURE_TOP_BANNER_EXIT);
if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
e && e.close();
}
},
confirmString: "Ok",
text: n.desc,
hideX: !1,
tag: "http",
isRepeat: !1
});
}
};
e.popRetNoRet1 = function(t, e) {
var n = t;
if (0 != n.type) if (4 != n.type) App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: function() {
if (1 != n.type) {
if (2 != n.type) if (3 != n.type) ; else if (App.SingleGame) l.default.ExitSingleGame(); else {
if ("LoginView" == App.gameView.className) {
App.storage.removeItem(c.default.Key.PhoneId);
f.default.self.clear();
} else {
App.storage.removeItem(c.default.Key.PhoneId);
f.default.self.clear();
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
e && e.close();
}
} else if (App.SingleGame) l.default.ExitSingleGame(); else {
d.GlobalVar.isGameing && dispatch(h.ComponentGameEvent.SURE_TOP_BANNER_EXIT);
if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
e && e.close();
}
},
confirmString: "Ok",
text: n.desc,
hideX: !1,
tag: "http",
isRepeat: !1
}); else {
cc.director.clear();
cc.game.end();
} else App.tips.show(n.desc);
};
e.popTips = function(t) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: function() {},
confirmString: "Ok",
text: t,
hideX: !1,
isRepeat: !1
});
};
e.popSureOrCancelTips = function(t, e) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: e,
cancelCb: function() {},
confirmString: "Ok",
cancelString: "Cancel",
text: t,
hideX: !1,
isRepeat: !1
});
};
e.popTipsBack = function(t, e) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: e,
confirmString: "Ok",
richText: t,
hideX: !1,
isRepeat: !1
});
};
e.popTipsBackX = function(t, e, n) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: e,
confirmString: n,
richText: t,
hideX: !0,
isRepeat: !1
});
};
e.prototype.localConvertWorldPointAR = function(t) {
return t ? t.convertToWorldSpaceAR(cc.v2(0, 0)) : null;
};
e.prototype.localConvertlocalPointAR = function(t, e) {
if (t) {
var n = t.convertToWorldSpaceAR(cc.v2(0, 0));
return this.worldConvertLocalPointAR(e, n);
}
return null;
};
e.prototype.localConvertlocalPointAR_Vec3 = function(t, e) {
if (t) {
var n = t.convertToWorldSpaceAR(cc.v3(0, 0, 0));
return this.worldConvertLocalPointAR(e, n);
}
return null;
};
e.prototype.worldConvertLocalPointAR = function(t, e) {
return t ? t.convertToNodeSpaceAR(e) : null;
};
e.prototype.flyLizi = function(t, e, n, o, i, r, a) {
var s = {
prefab: n,
parent: o,
startPoint: t,
endPoint: e,
num: 1,
flyTime: 1 - .3 * i,
delay: 0,
dir: !0,
disableDir: !0,
extraY: 50 * i - 200,
finishCallBack: r,
updateCallBack: a
};
App.utils.flyCoinToPoint(s);
};
e.prototype.flyCoinToPoint = function(t) {
for (var e = 0, n = 0, o = [], i = 0; i < t.num; i++) {
var r = cc.instantiate(t.prefab);
o.push(r);
}
var a = function(i) {
t.parent.addChild(o[i]);
var r = s.worldConvertLocalPointAR(t.parent, t.startPoint), a = s.worldConvertLocalPointAR(t.parent, t.endPoint), c = r.add(a).multiplyScalar(.5), l = a.sub(r).mag(), u = t.dir ? (Math.random() + .01) * l : -(Math.random() + .01) * l;
t.disableDir && (u = 0);
var p = t.extraY || 0, d = t.extraX || 0, f = c.add(cc.v2(u + d, 0 + p));
o[i].position = r;
cc.tween(o[i]).delay(n).bezierTo(t.flyTime, r, f, a).call(function() {
e++;
t.updateCallBack ? t.updateCallBack(o[i]) : o[i].destroy();
e == t.num && t.finishCallBack && t.finishCallBack();
}).start();
n += t.delay;
}, s = this;
for (i = 0; i < t.num; i++) a(i);
return o;
};
e.prototype.flyLineCoinToPoint = function(t) {
for (var e = 0, n = 0, o = [], i = 0; i < t.num; i++) {
var r = cc.instantiate(t.prefab);
o.push(r);
}
var a = function(i) {
t.parent.addChild(o[i]);
var r = s.worldConvertLocalPointAR(t.parent, t.startPoint), a = s.worldConvertLocalPointAR(t.parent, t.endPoint);
o[i].position = r;
cc.tween(o[i]).delay(n).to(t.flyTime, {
position: a
}).call(function() {
++e == t.num && t.finishCallBack && t.finishCallBack();
t.updateCallBack ? t.updateCallBack(o[i]) : o[i].destroy();
}).start();
n += t.delay;
}, s = this;
for (i = 0; i < t.num; i++) a(i);
};
e.initAndroidAssets = function(t) {
for (var n = 0; n < t.length; n++) {
var o = t[n];
e.SetAndroidAssetsPic(null, o);
}
};
e.initAndroidTxts = function(t) {
for (var n = 0; n < t.length; n++) {
var o = t[n];
e.getAndroidJson(o);
}
};
e.SetAndroidAssetsPic = function(t, e) {
var n = this;
if (s.default.isAndroid) {
var o = jsb.fileUtils.getDefaultResourceRootPath() + "img/" + e;
if (this.cachPics.has(o)) {
if (t) {
t.spriteFrame = this.cachPics.get(o);
return !0;
}
} else try {
cc.assetManager.loadRemote(o, function(e, i) {
if (e) Log.e("++++" + e.message); else {
var r = new cc.SpriteFrame(i);
n.cachPics.set(o, r);
t && (t.spriteFrame = r);
}
});
} catch (t) {
Log.e("++++没有图片" + o);
}
}
return !1;
};
e.SetAndroidAssetsColor = function(t, e, n) {
if (s.default.isAndroid) {
var o = jsb.fileUtils.getDefaultResourceRootPath() + "txt/color.txt";
cc.assetManager.loadRemote(o, function(t, e) {
t ? Log.e(t.message) : Log.e(e.toString());
n && n();
});
}
};
e.setAndroidToNode = function(t, e) {
var n = t.name;
e && (n = e);
if (this.cachTxts.has(n)) {
var o = this.cachTxts.get(n);
t.active = o.active;
o.position && (t.position = cc.v3(o.position.x, o.position.y, 0));
o.scale && t.setScale(cc.v2(o.scale.x, o.scale.y));
o.rotation && (t.angle = o.rotation);
o.opacity && (t.opacity = o.opacity);
o.color && (t.color = this.colorOfString(o.color));
var i = t.getComponent(cc.Widget);
Log.e(o);
if (i && o.widget) {
Log.e(o.widget);
i.isAlignTop = o.widget.isAlignTop;
i.isAlignLeft = o.widget.isAlignLeft;
i.isAlignRight = o.widget.isAlignRight;
i.isAlignBottom = o.widget.isAlignBottom;
i.top = o.widget.top;
i.left = o.widget.left;
i.right = o.widget.right;
i.bottom = o.widget.bottom;
i.updateAlignment();
}
}
};
e.getAndroidJson = function(t) {
var e = this;
if (s.default.isAndroid) {
var n = jsb.fileUtils.getDefaultResourceRootPath() + "txt/" + t + ".txt";
if (this.cachTxts.has(n)) return this.cachTxts.get(n);
cc.assetManager.loadRemote(n, function(t, n) {
if (t) Log.e(t.message); else for (var o = JSON.parse(n.text), i = 0, r = Object.keys(o); i < r.length; i++) {
var a = r[i];
console.error(a);
console.error(o[a]);
e.cachTxts.set(a, o[a]);
}
});
} else {
n = "test/" + t;
if (this.cachTxts.has(n)) return this.cachTxts.get(n);
cc.resources.load(n, function(t, n) {
if (t) Log.e(t.message); else for (var o = JSON.parse(n.text), i = 0, r = Object.keys(o); i < r.length; i++) {
var a = r[i];
e.cachTxts.set(a, o[a]);
}
});
}
};
e.convertResult = function(t, e) {
var n = [];
t.awardResult && t.awardResult.awardline && (n = t.awardResult.awardline);
var o = [];
t.awardResult && t.awardResult.awardPos && (o = t.awardResult.awardPos);
for (var i = new Array(), r = [], a = 0, s = 0; s < t.value.length; s++) {
var c = t.value[s];
a++;
var l = c - 1;
if (c < 0) {
var u = Math.abs(c) - 1;
i.push({
index: u,
value: Math.abs(c),
isEmpty: !0
});
} else i.push({
index: l,
value: c,
isEmpty: !1
});
if (a == e) {
a = 0;
r.push(i);
i = new Array();
}
}
r.forEach(function(t) {
for (var e = !1, n = 0; n < t.length; n++) if (t[n].isEmpty) {
e = !0;
break;
}
for (n = 0; n < t.length; n++) t[n].isEmpty = e;
});
return {
awardline: n,
awardPos: o,
results: r
};
};
e.awaitTime = function(t, e) {
return new Promise(function(n, o) {
if (e && e.aborted) o(null); else {
var i = setTimeout(function() {
n(null);
}, t);
e && (e.abort = function() {
clearTimeout(i);
o(null);
e.abort = null;
e.aborted = !0;
});
}
});
};
e.convertResults = function(t, e) {
var n = [];
t.awardResult && t.awardResult.awardline && (n = t.awardResult.awardline);
var o = [];
t.awardResult && t.awardResult.awardPos && (o = t.awardResult.awardPos);
for (var i = [], r = 0; r < t.value.length; r++) {
for (var a = new Array(), s = [], c = 0, l = t.value[r], u = 0; u < l.length; u++) {
var p = l[u];
c++;
var d = p - 1;
if (-1 == p) {
var f = l[r + 1] - 1;
a.push({
index: f,
value: p,
isEmpty: !0
});
} else a.push({
index: d,
value: p,
isEmpty: !1
});
if (c == e) {
c = 0;
s.push(a);
a = new Array();
}
}
s.forEach(function(t) {
for (var e = !1, n = 0; n < t.length; n++) if (t[n].isEmpty) {
e = !0;
break;
}
for (var o = 0; o < t.length; o++) t[o].isEmpty = e;
});
i.push(s);
}
var h = [];
for (r = 0; r < i.length; r++) {
var _ = i[r], g = {
awardline: n[r] || [],
awardPos: o[r] || [],
resultWilds: [],
wildNums: [],
wildPos: [],
results: _
};
h.push(g);
}
return h;
};
e.convertClassicfruitResult = function(t) {
for (var e = new Array(), n = [], o = 0, i = 0; i < t.inCard.length; i++) {
var r = t.inCard[i];
o++;
var a = r - 1;
if (-1 == r) {
var s = t.inCard[i + 1] - 1;
e.push({
index: s,
value: r,
isEmpty: !0
});
} else e.push({
index: a,
value: r,
isEmpty: !1
});
if (1 == o) {
o = 0;
n.push(e);
e = new Array();
}
}
n.forEach(function(t) {
for (var e = !1, n = 0; n < t.length; n++) if (t[n].isEmpty) {
e = !0;
break;
}
for (n = 0; n < t.length; n++) t[n].isEmpty = e;
});
return {
results: n
};
};
e.InitSlotsCommonFreeEnter = function(t) {
return _.default.showPrefab(r.Macro.BUNDLE_RESOURCES, "slots_common/prefabs/freeEnterNode", t);
};
e.upRootNode = null;
e.cachPics = new Map();
e.cachTxts = new Map();
return e;
}(a.Utils);
n.CmmUtils = g;
var y = function() {
function t() {}
Object.defineProperty(t, "width", {
get: function() {
return cc.view.getVisibleSize().width;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "height", {
get: function() {
return cc.view.getVisibleSize().height;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "cx", {
get: function() {
return this.width >> 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "cy", {
get: function() {
return this.height >> 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "scaleX", {
get: function() {
return this.width / m.width;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "scaleY", {
get: function() {
return this.height / m.height;
},
enumerable: !1,
configurable: !0
});
t.fix = function(e) {
m.height > t.height && (e.scale = t.scaleY);
};
return t;
}();
n.display = y;
var m = function() {
function t() {}
Object.defineProperty(t, "scene", {
get: function() {
return cc.find("Canvas");
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "width", {
get: function() {
return 1336;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "height", {
get: function() {
return 720;
},
enumerable: !1,
configurable: !0
});
return t;
}();
n.director = m;
cc._RF.pop();
}, {
"../../framework/defines/Macros": "Macros",
"../../framework/utils/Utils": "Utils",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"../../sdk/SdkManager": "SdkManager",
"../config/Config": "Config",
"../config/ConstString": "ConstString",
"../config/GlobalVar": "GlobalVar",
"../config/User": "User",
"../event/CommonEvent": "CommonEvent",
"./UIUtils": "UIUtils"
} ],
CommonEvent: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a70e5fyz7RGvoGeXvoRT8o/", "CommonEvent");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SdkEvent = n.SimpleEvent = n.Hall_Event = n.ComponentGameEvent = n.HotEvent = n.HttpEvent = n.ShowLabaType = n.CommonEvent = void 0;
(function(t) {
t.TEST_PROTO_MSG = "TEST_PROTO_MSG";
t.TEST_BINARY_MSG = "TEST_BINARY_MSG";
t.TEST_JSON_MSG = "TEST_JSON_MSG";
t.LOBBY_SERVICE_CONNECTED = "LOBBY_SERVICE_CONNECTED";
t.LOBBY_SERVICE_CLOSE = "LOBBY_SERVICE_CLOSE";
t.GAME_SERVICE_CONNECTED = "GAME_SERVICE_CONNECTED";
t.GAME_SERVICE_CLOSE = "GAME_SERVICE_CLOSE";
t.CHAT_SERVICE_CONNECTED = "CHAT_SERVICE_CONNECTED";
t.CHAT_SERVICE_CLOSE = "CHAT_SERVICE_CLOSE";
t.Change_Language = "Change_Language";
t.Show_Hall = "Show_Hall";
t.Close_Panel = "Close_Panel";
t.Time_Second = "Time_Second";
t.EventMaskAll = "EventMaskAll";
t.OpenAndCloseActivity_Laba = "OpenAndCloseActivity_Laba";
t.Open_Show_Hide_laba = "Open_Show_Hide_laba";
t.laba_ChangeView = "laba_ChangeView";
t.ClearLoginToken = "ClearLoginToken";
t.OpenWebView = "OpenWebView";
t.BackToHall = "BackToHall";
t.Exit_Invite = "Exit_Invite";
t.GameInBackGroundBack = "GameInBackGroundBack";
t.RefreshRechageList = "RefreshRechageList";
t.PenetratingClickEvent = "PenetratingClickEvent";
t.PenetratingClickSwitchEvent = "PenetratingClickSwitchEvent";
t.AllLayoutUpdate = "AllLayoutUpdate";
t.ChangeDir = "ChangeDir";
t.TopBlackNode = "TopBlackNode";
})(n.CommonEvent || (n.CommonEvent = {}));
(function(t) {
t[t.All = 0] = "All";
t[t.Normal = 1] = "Normal";
t[t.New = 2] = "New";
})(n.ShowLabaType || (n.ShowLabaType = {}));
(function(t) {
t.CheckReportFinish = "CheckReportFinish";
t.CheckReportFinish_A = "CheckReportFinish_A";
t.BigSaleUpdate = "BigSaleUpdate";
t.WithDrawUpdate = "WithDrawUpdate";
t.updateBindCardAcount = "updateBindCardAcount";
t.UpdateFreeMoney = "UpdateFreeMoney";
t.UpdateRedPoint = "UpdateRedPoint";
t.CheckUpdateFinish = "CheckUpdateFinish";
t.UpdatePlayerInfo = "UpdatePlayerInfo";
t.UpdateCheckInfo = "UpdateCheckInfo";
t.UpdateAddPhoneInfo = "UpdateAddPhoneInfo";
t.GoogleLoginSuccessfull = "GoogleLoginSuccessfull";
t.ChangePayChannel = "ChangePayChannel";
})(n.HttpEvent || (n.HttpEvent = {}));
(function(t) {
t.CheckUpdateMain = "CheckUpdateMain";
t.MainUpdateShow = "MainUpdateShow";
t.MainLoadComplete = "MainLoadComplete";
t.DownProgress = "DownProgress";
t.DownComplete = "DownComplete";
t.DownMainProgress = "DownMainProgress";
t.DownMainComplete = "DownMainComplete";
t.DownHallProgress = "DownHallProgress";
t.DownHallComplete = "DownHallComplete";
t.DownGameFail = "DownGameFail";
})(n.HotEvent || (n.HotEvent = {}));
(function(t) {
t.Game_SwitchTable_Event = "Game_SwitchTable_Event";
t.Game_Exit_Event = "Game_Exit_Event";
t.Game_ExitAndEnterOtherGame_Event = "Game_ExitAndEnterOtherGame_Event";
t.Show_Hall_View = "Show_View";
t.Roll_Ease_Anim_End = "Roll_Ease_Anim_End";
t.GrayBtns_Event = "GrayBtns_Event";
t.GaryBtns_Quickly = "GaryBtns_Quickly";
t.Common_Scroll_Item_Click = "Common_Scroll_Item_Click";
t.Common_Scroll_Item_Update = "Common_Scroll_Item_Update";
t.Hide_ALL_UI = "Hide_ALL_UI";
t.TopBannerIsOpened = "TopBannerIsOpened";
t.TcololrEvent = "TcololrEvent";
t.ShowDemoBtn = "ShowDemoBtn";
t.TryGameRequest = "TryGameRequest";
t.GameList_refresh = "GameList_refresh";
t.GameList_update = "GameList_update";
t.GameSelfData_refresh = "GameSelfData_refresh";
t.EditorBox_begin = "EditorBox_changed";
t.EditorBox_changed = "EditorBox_changed";
t.EditorBox_changeEnded = "EditorBox_changeEnded";
t.SURE_TOP_BANNER_EXIT = "SURE_TOP_BANNER_EXIT";
t.UpdateScreenSize = "UpdateScreenSize";
t.UpdateCurGameAudio = "UpdateCurGameAudio";
t.UpdateLayoutUpdate = "UpdateLayoutUpdate";
})(n.ComponentGameEvent || (n.ComponentGameEvent = {}));
(function(t) {
t.fly_to_coin = "fly_to_coin";
t.refresh_coin = "refresh_coin";
t.refresh_activity = "refresh_activity";
t.acitvity_mask_name = "acitvity_mask_name";
t.acitvity_mask_name2 = "acitvity_mask_name2";
t.activity_close = "activity_close";
t.update_cpf_data = "update_cpf_data";
})(n.Hall_Event || (n.Hall_Event = {}));
(function(t) {
t.SimpleEvent_recharge_click = "SimpleEvent_recharge_click";
t.Html5_view_loading = "Html5_view_loading";
t.Cheat_view_Button = "Cheat_view_Button";
t.SP_GAME_OPEN_MUSIC = "SP_GAME_OPEN_MUSIC";
t.load_native_game_progress = "load_native_game_progress";
t.load_native_game_complete = "load_native_game_complete";
t.load_loadView_finish = "load_loadView_finish";
})(n.SimpleEvent || (n.SimpleEvent = {}));
(function(t) {
t.SdkEvent_hide_loading = "SdkEvent_hide_loading__";
t.SdkEvent_finish_video_back = "SdkEvent_finish_video_back__";
})(n.SdkEvent || (n.SdkEvent = {}));
cc._RF.pop();
}, {} ],
CommonGameJson: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d6e05nIr8lLrqVsp3p+BCrI", "CommonGameJson");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CommonGameJson = void 0;
var r = t("../../framework/core/net/message/JsonMessage"), a = t("../../sdk/AppInfo"), s = t("../config/GlobalVar"), c = t("./CmdDefines"), l = t("./HttpSender"), u = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.mainCmd = c.MainCmd.CMD_GAME;
e.data = {
uid: l.default.uid,
skey: l.default.skey,
roomId: s.GlobalVar.curRoomId,
token: s.GlobalVar.token,
channel: a.default.getChannelId(),
lan: 0
};
console.error(e.data);
return e;
}
Object.defineProperty(e.prototype, "cmd", {
get: function() {
return String(this.mainCmd) + String(this.subCmd);
},
enumerable: !1,
configurable: !0
});
return e;
}(r.JsonMessage);
n.CommonGameJson = u;
cc._RF.pop();
}, {
"../../framework/core/net/message/JsonMessage": "JsonMessage",
"../../sdk/AppInfo": "AppInfo",
"../config/GlobalVar": "GlobalVar",
"./CmdDefines": "CmdDefines",
"./HttpSender": "HttpSender"
} ],
CommonSender: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8f657bQGuFObovTUEt8JmZ1", "CommonSender");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../../common/net/HttpSender"), a = t("../../common/config/User"), s = t("../../sdk/AppInfo"), c = t("../../sdk/GameNativeConfig"), l = t("../config/GlobalVar"), u = t("../event/CommonEvent"), p = t("../enum/GlobalEnum"), d = t("../config/ConstString"), f = t("../../sdk/SdkManager"), h = t("../../sdk/SdkCallBack"), _ = t("../utils/CmmUtils"), g = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.Send_CheckRepot = function(t) {
var e = {
action: "CheckReport",
ts: s.default.ostime,
os: cc.sys.os,
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
is_simulator: s.default.isSimulator(),
installReferrer: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer_ts : "",
sim: f.default.getCountry(),
vpn: f.default.checkVPN()
};
this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Login);
};
e.prototype.Send_CheckVer = function(t) {
var e = {
action: "CheckVer",
ts: s.default.ostime,
os: cc.sys.os,
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
network: s.default.appData.network || "",
clickLabel: s.default.appData.clickLabel || "",
adjust_ts: s.default.appData.adjust_ts || 0,
is_simulator: s.default.isSimulator(),
installReferrer: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer_ts : "",
sim: f.default.getCountry(),
vpn: f.default.checkVPN()
};
return this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Login);
};
e.prototype.Send_GameUrl = function(t) {
var e = {
action: "GameUrl",
gameId: l.GlobalVar.curGameId
};
this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.Send_GetHost = function(t) {
this.SendPostHttp({
action: "GetHost"
}, t, p.GlobalEnum.HttpUrlType.Login);
};
e.prototype.Send_Login = function(t, e) {
var n = {
action: "GameLogin",
ts: s.default.ostime,
phonename: s.default.getPhoneDeviceType(),
deviceId: s.default.getDeviceId(),
phonenos: s.default.getPhoneOS(),
deep_link_value: s.default.getOneLinkInviteCode(),
loginType: c.default.LoginType.Phone,
os: cc.sys.os,
crashmodel: s.default.getCashModel(),
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
m_model: s.default.getMobileModel(),
vpn: f.default.checkVPN(),
third_info: s.default.getThridInfo(),
os_device: s.default.getDeviceInfo(),
pwdtoken: t,
firebaseId: s.default.getFireBaseAppInstanceID(),
is_simulator: s.default.isSimulator(),
ycz: s.default.getYcn(),
installReferrer: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer_ts : "",
sim: f.default.getCountry()
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Login);
};
e.prototype.Send_AutoRegister = function(t) {
var e = {
action: "GameLogin",
phonename: s.default.getPhoneDeviceType(),
deviceId: s.default.getDeviceId(),
phonenos: s.default.getPhoneOS(),
loginType: c.default.LoginType.Guest,
deep_link_value: s.default.getOneLinkInviteCode(),
os: cc.sys.os,
tel_no: "",
code: "",
crashmodel: s.default.getCashModel(),
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
m_model: s.default.getMobileModel(),
vpn: f.default.checkVPN(),
ycz: s.default.getYcn(),
third_info: s.default.getThridInfo(),
os_device: s.default.getDeviceInfo(),
firebaseId: s.default.getFireBaseAppInstanceID(),
is_simulator: s.default.isSimulator(),
installReferrer: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer_ts : "",
sim: f.default.getCountry()
};
Log.d("登录数据:", e);
this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Login);
};
e.prototype.Send_RedPoint = function(t) {
this.SendPostHttp({
action: "RedPoint"
}, t);
};
e.prototype.Send_SignupCode = function(t, e, n) {
var o = {
action: "SignupCode",
ycz: s.default.getYcn(),
tel_no: e,
type: n
};
this.SendPostHttp(o, t);
};
e.prototype.Send_PhoneLogin = function(t, e, n) {
var o = {
action: "SendLogin",
tel_no: e,
code: n,
deep_link_value: s.default.getOneLinkInviteCode(),
ts: s.default.ostime,
phonename: s.default.getPhoneDeviceType(),
deviceId: s.default.getDeviceId(),
phonenos: s.default.getPhoneOS(),
loginType: c.default.LoginType.Phone,
os: cc.sys.os,
crashmodel: s.default.getCashModel(),
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
m_model: s.default.getMobileModel(),
vpn: f.default.checkVPN(),
third_info: s.default.getThridInfo(),
os_device: s.default.getDeviceInfo(),
firebaseId: s.default.getFireBaseAppInstanceID(),
is_simulator: s.default.isSimulator(),
installReferrer: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: h.default.getInstance().coolData ? h.default.getInstance().coolData.installReferrer_ts : "",
sim: f.default.getCountry()
};
return this.SendPostHttp(o, t, p.GlobalEnum.HttpUrlType.Login, 1);
};
e.prototype.Send_PlayerInfo = function(t) {
return this.SendPostHttp({
action: "PlayerInfo"
}, t, p.GlobalEnum.HttpUrlType.Hall, 1);
};
e.prototype.Send_PayChannel = function(t) {
return this.SendPostHttp({
action: "PayChannel"
}, t, p.GlobalEnum.HttpUrlType.Hall, 1);
};
e.prototype.Send_GameRule = function() {
return this.SendPostHttp({
action: "GameRule"
}, function(t) {
for (var e = new Map(), n = t.data.rules, o = 0; o < n.length; o++) {
var i = n[o];
e.set(i.gameId, t.data.path + "/{0}/" + i.ruleImg);
}
l.GlobalVar.gameRuleMap = e;
});
};
e.prototype.Send_VipConfig = function(t) {
return this.SendPostHttp({
action: "VipConfig"
}, t);
};
e.prototype.Send_NShopList = function(t) {
return this.SendPostHttp({
action: "NShopList"
}, t, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.Send_UpdateIDCard = function(t, e, n) {
var o = {
action: "UpdateIDCard",
cert: t,
realName: e
};
this.SendPostHttp(o, n, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.Send_NShopGetDayfree = function(t) {
return this.SendPostHttp({
action: "ShopDayFree"
}, t, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
e.prototype.Send_Redeemcode = function(t, e) {
var n = {
action: "CDKey",
cdkey: e
};
return this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
e.prototype.Send_payMoney = function(t, e, n) {
var o = this;
if (a.default.self.isBindPhone) {
var i = {
action: "PayOrderGet",
mid: l.GlobalVar.getCurMidData().mid,
id: t
};
_.CmmUtils.isNull(e) || (i.bankCode = e);
_.CmmUtils.isNull(n) || (i.amount = n);
this.SendPostHttp(i, function(t) {
if (0 == t.ret) {
var e = t.data;
o.openURL(e);
}
}, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
}
};
e.prototype.Send_payMoney2 = function(t, e, n, o) {
if (a.default.self.isBindPhone) {
var i = {
action: "PayOrderGet",
mid: e,
id: t
};
_.CmmUtils.isNull(o) || (i.bankCode = o);
this.SendPostHttp(i, n, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
}
};
e.prototype.Send_payMoney3 = function(t, e) {
var n = {
action: "PayOrderGet",
amount: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.openURL = function(t) {
Log.d("open pay url:", t);
t.openType && 2 == +t.openType && cc.sys.openURL(t.ext_info);
};
e.prototype.Send_InitDayTask = function(t) {
this.SendPostHttp({
action: "InitDayTask"
}, t, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.Send_GetDayTask = function(t, e) {
var n = {
action: "GetDayTask",
id: t
};
this.SendPostHttp(n, e);
};
e.prototype.Send_InitWeekTask = function(t) {
this.SendPostHttp({
action: "InitWeekTask"
}, t, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.Send_InitTaskInfo = function(t) {
this.SendPostHttp({
action: "TaskInfo"
}, t, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.Send_WeekTaskGet = function(t, e, n) {
var o = {
action: "WeekTaskGet",
day: t,
id: e
};
this.SendPostHttp(o, n);
};
e.prototype.Send_GetTaskInfo = function(t, e) {
var n = {
action: "GetTask",
id: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, 100);
};
e.prototype.Send_SpinWeekTable = function(t) {
this.SendPostHttp({
action: "SpinWeekTable"
}, t, p.GlobalEnum.HttpUrlType.Hall, 100, null);
};
e.prototype.Send_WeekGet = function(t) {
this.SendPostHttp({
action: "WeekGet"
}, t);
};
e.prototype.Send_WithdrawRecord2 = function(t, e) {
var n = {
action: "WithdrawRecord",
page: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_ChargeRecord = function(t, e) {
var n = {
action: "ChargeRecord",
page: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_BindingPhone = function(t, e, n, o) {
var i = {
action: "BindingPhone",
tel_no: e,
code: n,
name: o
};
this.SendPostHttp(i, t);
};
e.prototype.Send_VipBonus = function(t) {
this.SendPostHttp({
action: "VipBonus"
}, t);
};
e.prototype.Send_VipBonusGet = function(t, e) {
var n = {
action: "VipBonusGet",
type: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_freeMoney = function(t) {
this.SendPostHttp({
action: "Hall.freeMoney"
}, t);
};
e.prototype.Send_getFreeMoney = function(t) {
this.SendPostHttp({
action: "Hall.getFreeMoney"
}, t);
};
e.prototype.Send_InitExchange = function(t) {
this.SendPostHttp({
action: "InitExchange"
}, t);
};
e.prototype.Send_GetExchange = function(t, e) {
var n = {
action: "Exchange",
id: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_getActInfo = function(t) {
this.SendPostHttp({
action: "Act.get"
}, t);
};
e.prototype.Send_getTaskInfo = function(t) {
this.SendPostHttp({
action: "Act_13.page"
}, t);
};
e.prototype.Send_getTask13Reward = function(t, e) {
var n = {
action: "Act_13.Get",
taskId: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_getACT_17 = function(t) {
this.SendPostHttp({
action: "Act_17.page"
}, t);
};
e.prototype.Send_getACT_17Reward = function(t) {
this.SendPostHttp({
action: "Act_17.Get"
}, t);
};
e.prototype.Send_getEamil = function(t, e) {
var n = {
action: "email.get",
page: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_getNotice = function(t, e) {
var n = {
action: "HallNotify",
page: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_writeEamil = function(t, e) {
var n = {
action: "email.act",
eid: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_WithdrawPage = function(t) {
this.SendPostHttp({
action: "WithdrawPage"
}, t);
};
e.prototype.Send_Withdraw = function(t, e) {
var n = e;
e || 0 == e || (n = "");
var o = {
action: "Withdraw",
transferId: App.storage.getItem(d.ConstString.transferId, ""),
accType: n
};
this.SendPostHttp(o, t);
};
e.prototype.Send_WithdrawApis = function(t, e) {
var n = {
action: "WithdrawApis",
account: e.account,
accountName: e.accountName,
ifsc: e.ifsc,
phone: e.phone,
email: e.email,
amount: e.amount,
fastId: e.fastId
};
_.CmmUtils.isNull(e.accType) || (n.accType = e.accType);
_.CmmUtils.isNull(e.iban) || (n.iban = e.iban);
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
e.prototype.Send_AddTransfer = function(t, e) {
var n = {
action: "AddTransfer",
account: e.account,
accountName: e.accountName,
ifsc: e.ifsc,
phone: e.phone,
email: e.email,
bankCode: e.bankCode
};
_.CmmUtils.isNull(e.accType) || (n.accType = e.accType);
_.CmmUtils.isNull(e.iban) || (n.iban = e.iban);
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
e.prototype.Send_WheelInfo = function(t) {
this.SendPostHttp({
action: "Act_10.page"
}, t);
};
e.prototype.Send_WheelDraw = function(t) {
this.SendPostHttp({
action: "Act_10.Get"
}, t);
};
e.prototype.Send_InitHall = function(t) {
this.SendPostHttp({
action: "InitHall"
}, t);
};
e.prototype.Send_GameList = function(t, e) {
void 0 === e && (e = "");
var n = {
action: "GameList",
gamelist: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_Act_16 = function(t) {
this.SendPostHttp({
action: "Act_16.page"
}, t);
};
e.prototype.Send_CheckPlayer = function() {
this.SendPostHttp({
action: "CheckPlayer"
}, null).then(function() {
a.default.self.updateMoneyInfo();
});
};
e.prototype.Send_Act_Get16 = function(t) {
this.SendPostHttp({
action: "Act_16.Get"
}, t, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
e.prototype.Send_Act_TestCash = function(t, e) {
var n = {
action: "TestCash",
type: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
e.prototype.Send_Act_15 = function(t) {
this.SendPostHttp({
action: "Act_15.page"
}, function(e) {
a.default.self.initFirstChargeInfo(e.data);
dispatch(u.HttpEvent.BigSaleUpdate);
t && t();
});
};
e.prototype.Send_PlayerLimit = function(t) {
var e = {
action: "PlayerLimit",
gameId: t
};
this.SendPostHttp(e, null, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_InitSignin = function(t) {
this.SendPostHttp({
action: "InitSignin"
}, t, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
e.prototype.Send_Signin = function(t, e) {
var n = {
action: "Signin",
type: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
e.prototype.Send_ChangeName = function(t, e) {
var n = {
action: "ModifyPlayerName",
name: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_ChangeAvatar = function(t, e) {
var n = {
action: "ModifyPlayerAvatar",
avatar: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_MoneyInfo = function(t) {
this.SendPostHttp({
action: "MoneyInfo"
}, t);
};
e.prototype.Send_Activate = function(t) {
var e = {
action: "activate",
data: t
};
this.SendPostHttp(e, null, p.GlobalEnum.HttpUrlType.Login, 0);
};
e.prototype.Send_SaveBoxInit = function(t, e) {
void 0 === e && (e = !1);
var n = {
action: "InitSafeBox"
};
e ? this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, 100) : this.SendPostHttp(n, t);
};
e.prototype.Send_SaveBoxIn = function(t, e) {
var n = {
action: "InSafeBox",
id: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_SaveBoxOut = function(t) {
this.SendPostHttp({
action: "OutSafeBox"
}, t);
};
e.prototype.Send_SaveBoxRecord = function(t, e) {
var n = {
action: "SafeBoxRecord",
page: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_GamePlayerCount = function(t) {
this.SendPostHttp({
action: "GameOnlines"
}, t);
};
e.prototype.Send_MatchInit = function(t, e) {
void 0 === e && (e = !1);
var n = {
action: "InitRankData"
};
e ? this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, 100) : this.SendPostHttp(n, t);
};
e.prototype.Send_MatchRankGet = function(t, e) {
var n = {
action: "RankGet",
id: e
};
this.SendPostHttp(n, t);
};
e.prototype.Send_ShareGiftInit = function(t) {
this.SendPostHttp({
action: "playerInfo"
}, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_ShareGetLockGold = function(t) {
this.SendPostHttp({
action: "claimLockGold"
}, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_ShareExtend1 = function(t) {
this.SendPostHttp({
action: "extend1"
}, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_ShareGiftGet = function(t, e) {
void 0 === e && (e = !1);
this.SendPostHttp({
action: "turntableSpin"
}, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_AgentInfo = function(t, e) {
var n = {
action: "agentInfo",
page: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_Claim = function(t, e) {
var n = {
action: "claim",
page: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_PDDInit = function(t) {
this.SendPostHttp({
action: "pddInit"
}, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_PDDSpin = function(t, e) {
var n = {
action: "pddSpin",
type: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_ShareGiftPDDInit = function(t) {
this.SendPostHttp({
action: "act2"
}, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_SharePDDInitData = function(t) {
this.SendPostHttp({
action: "act2_init"
}, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_ShareGiftPDDGet = function(t, e) {
var n = {
action: "act2_Lottery",
type: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_ShareGiftPDDWithdraw = function(t) {
this.SendPostHttp({
action: "act2_Claim"
}, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_ShareTreeInitData = function(t) {
this.SendPostHttp({
action: "act3_init"
}, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_ShareTreeGet = function(t, e, n) {
void 0 === n && (n = -1);
var o = {
action: "act3",
type: e,
index: n
};
this.SendPostHttp(o, t, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
e.prototype.Send_AddTransfer_share = function(t, e) {
var n = e.bankCode;
e.bankCode || (n = "");
var o = "";
e.iban && (o = e.iban);
var i = {
action: "AddTransfer",
account: e.account,
accountName: e.accountName,
ifsc: e.ifsc,
phone: e.phone,
email: e.email,
accType: e.accType,
bankCode: n,
cnic: e.cnic,
iban: o
};
this.SendPostHttp(i, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_WithdrawRecord2_share = function(t, e) {
void 0 === e && (e = 1);
var n = {
action: "WithdrawRecord",
page: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_ChargeRecord_share = function(t, e) {
void 0 === e && (e = 1);
var n = {
action: "ChargeRecord",
page: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_Transfers = function(t) {
this.SendPostHttp({
action: "Transfers"
}, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_Withdraw_share = function(t, e) {
void 0 === e && (e = "");
var n = {
action: "Withdraw",
accType: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_WithdrawApis_share = function(t, e) {
var n = {
action: "WithdrawApis",
account: e.account,
accountName: e.accountName,
ifsc: e.ifsc,
phone: e.phone,
email: e.email,
amount: e.amount,
index: e.index,
cnic: e.cnic,
accType: e.accType
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_ChangeToGame = function(t, e) {
var n = {
action: "exchange",
value: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_MoneyInfo_share = function(t) {
this.SendPostHttp({
action: "MoneyInfo"
}, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_Act1 = function(t) {
this.SendPostHttp({
action: "act1"
}, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_GetAct1 = function(t, e) {
var n = {
action: "act1Receive",
index: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.ShareGift);
};
e.prototype.Send_InitAdCoins = function(t) {
this.SendPostHttp({
action: "InitAdCoins"
}, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_GetAdCoins = function(t) {
this.SendPostHttp({
action: "GetAdCoins"
}, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_Join = function(t) {
var e = {
action: "joinGame",
gameId: l.GlobalVar.curGameId,
roomId: l.GlobalVar.curRoomId
};
this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_DeomJoin = function(t) {
var e = {
action: "joinGame",
gameId: l.GlobalVar.curGameId,
roomId: -1
};
this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_Spin = function(t, e) {
var n = {
action: "spin",
gameId: l.GlobalVar.curGameId,
betIndex: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_PlayGame = function(t, e, n) {
var o = n;
o.action = "playGame";
o.gameId = l.GlobalVar.curGameId;
o.betIndex = e;
Log.e("Send_PlayGame =>" + JSON.stringify(o));
this.SendPostHttp(o, t, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_Extra1 = function(t, e) {
var n = e;
n.action = "extra1";
n.gameId = l.GlobalVar.curGameId;
Log.e("Send_Extra1 =>" + JSON.stringify(n));
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_Extra2 = function(t) {
var e = {
action: "extra2",
gameId: l.GlobalVar.curGameId
};
Log.e("Send_Extra2 =>" + JSON.stringify(e));
this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_GetBonus = function(t) {
var e = {
action: "getBouns",
gameId: l.GlobalVar.curGameId
};
Log.e("Send_GetBonus =>" + JSON.stringify(e));
this.SendPostHttp(e, t, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_Jackpot = function(t, e) {
var n = {
action: "getJackpot",
gameId: l.GlobalVar.curGameId,
betIndex: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Game, !1, function() {});
};
e.prototype.Send_HeartBeat = function() {
var t = {
action: "heartbeat",
gameId: l.GlobalVar.curGameId
};
this.SendPostHttp(t, null, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_ExitGame = function() {
var t = {
action: "leaveGame",
gameId: l.GlobalVar.curGameId
};
this.SendPostHttp(t, null, p.GlobalEnum.HttpUrlType.Game);
};
e.prototype.Send_AddCPF = function(t, e) {
var n = {
action: "AddCPF",
cpf: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_InitSendMoney = function(t) {
this.SendPostHttp({
action: "InitSendMoney"
}, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_PlayerMode_offline = function(t, e) {
var n = {
action: "PlayerMode",
sendid: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_RechargePage = function(t) {
this.SendPostHttp({
action: "RechargePage"
}, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_SendMoney = function(t, e, n) {
var o = {
action: "SendMoney",
toId: e,
money: n
};
this.SendPostHttp(o, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_GiveRecord1 = function(t, e) {
var n = {
action: "GiveRecord",
type: 1,
page: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_GiveRecord2 = function(t, e) {
var n = {
action: "GiveRecord",
type: 2,
page: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_RecvMoney = function(t, e) {
var n = {
action: "RecvMoney",
id: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall);
};
e.prototype.Send_ShareInfo = function(t) {
this.SendPostHttp({
action: "ShareInfo"
}, t);
};
e.prototype.Send_ActivityList = function(t) {
this.SendPostHttp({
action: "ActivityList"
}, t, p.GlobalEnum.HttpUrlType.Activity, 100);
};
e.prototype.Send_InitActivity = function(t, e) {
var n = {
action: "InitActivity",
actId: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Activity, 100);
};
e.prototype.Send_Activity10100Req = function(t, e, n) {
var o = {
action: "ActivityReq",
actId: 10100,
type: e
}, i = 100;
if (n) {
_.CmmUtils.isNull(n.page) || (o.page = n.page);
_.CmmUtils.isNull(n.index) || (o.index = n.index);
_.CmmUtils.isNull(n.useCash) || (o.useCash = n.useCash);
_.CmmUtils.isNull(n.delay) || (i = n.delay);
}
this.SendPostHttp(o, t, p.GlobalEnum.HttpUrlType.Activity, i);
};
e.module = "CommonSender";
return e;
}(r.default);
n.default = g;
cc._RF.pop();
}, {
"../../common/config/User": "User",
"../../common/net/HttpSender": "HttpSender",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"../../sdk/SdkCallBack": "SdkCallBack",
"../../sdk/SdkManager": "SdkManager",
"../config/ConstString": "ConstString",
"../config/GlobalVar": "GlobalVar",
"../enum/GlobalEnum": "GlobalEnum",
"../event/CommonEvent": "CommonEvent",
"../utils/CmmUtils": "CmmUtils"
} ],
CommonService: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "cdac79M5PhBeIG696a7Pj9/", "CommonService");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CommonService = void 0;
var r = t("../config/Config"), a = t("../../framework/core/net/service/Service"), s = t("./ReconnectHandler"), c = t("./CmdDefines"), l = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.ip = "localhost";
e.port = 3e3;
e.protocol = "ws";
e._maxEnterBackgroundTime = r.Config.MAX_INBACKGROUND_TIME;
e._backgroundTimeOutId = -1;
e.reconnectHandler = new s.ReconnectHandler(e);
return e;
}
Object.defineProperty(e.prototype, "data", {
get: function() {
return App.stageData;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "maxEnterBackgroundTime", {
get: function() {
return this._maxEnterBackgroundTime;
},
set: function(t) {
(t < r.Config.MIN_INBACKGROUND_TIME || t > r.Config.MAX_INBACKGROUND_TIME) && (t = r.Config.MIN_INBACKGROUND_TIME);
Log.d(this.module, "maxEnterBackgroundTime " + t);
this._maxEnterBackgroundTime = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.initIP_PORT = function(t, e, n) {
this.ip = t;
this.port = e;
this.protocol = n;
};
e.prototype.connect = function() {
t.prototype.connect_server.call(this, this.ip, this.port, this.protocol);
};
e.prototype.sendHeartbeat = function() {
this.heartbeat ? this.send(new this.heartbeat()) : Log.e("请先设置心跳解析类型");
};
e.prototype.getMaxHeartbeatTimeOut = function() {
return t.prototype.getMaxHeartbeatTimeOut.call(this);
};
e.prototype.getHeartbeatInterval = function() {
return t.prototype.getHeartbeatInterval.call(this);
};
e.prototype.onHeartbeatTimeOut = function() {
Log.w(this.module + " 心跳超时，您已经断开网络");
this.close();
App.serviceManager.reconnect(this);
};
e.prototype.isHeartBeat = function(t) {
return t.cmd == String(c.MainCmd.CMD_SYS) + String(c.SUB_CMD_SYS.CMD_SYS_HEART);
};
e.prototype.onEnterBackground = function() {
if (!this.data.isLoginStage()) {
var t = this;
t._backgroundTimeOutId = setTimeout(function() {
Log.d("进入后台时间过长，主动关闭网络，等玩家切回前台重新连接网络");
t.close();
App.alert.close(r.Config.RECONNECT_ALERT_TAG);
}, 1e3 * t.maxEnterBackgroundTime);
}
};
e.prototype.onEnterForgeground = function(t) {
if (-1 != this._backgroundTimeOutId) {
Log.d("清除进入后台的超时关闭网络定时器");
clearTimeout(this._backgroundTimeOutId);
Log.d("在后台时间" + t + " , 最大时间为: " + this.maxEnterBackgroundTime);
if (this.data.isLoginStage()) return;
if (t > this.maxEnterBackgroundTime) {
Log.d("从回台切换，显示重新连接网络");
this.close();
App.alert.close(r.Config.RECONNECT_ALERT_TAG);
App.serviceManager.reconnect(this);
}
}
};
return e;
}(a.Service);
n.CommonService = l;
cc._RF.pop();
}, {
"../../framework/core/net/service/Service": "Service",
"../config/Config": "Config",
"./CmdDefines": "CmdDefines",
"./ReconnectHandler": "ReconnectHandler"
} ],
CommonUIHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e886x3W5ZLF5O3MX+mlH5Q", "CommonUIHelper");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../../common/config/User"), i = function() {
function t() {}
t.isNeedShowRecharge = function(t, e) {
var n = o.default.self.data.money;
(e || 0 == e) && (n = e);
return t > n;
};
return t;
}();
n.default = i;
cc._RF.pop();
}, {
"../../common/config/User": "User"
} ],
Config: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "df6483YRVVPlodAQqnkAnjN", "Config");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NetPriority = n.ViewZOrder = n.Config = void 0;
(function(t) {
t.isShowDebugButton = !0;
t.audioPath = {
dialog: "all_audio/dlg_open",
button: "all_audio/Click",
cash: "all_audio/Add_Cash",
gamestart: "all_audio/Game_Start",
winner: "all_audio/Winner",
loading: "all_audio/loading",
popreward: "all_audio/popreward"
};
t.alertTitlePath = {
TIPS: "TIPS"
};
t.isSkipCheckUpdate = !1;
t.HOT_UPDATE_URL = "http://192.168.1.5:3000";
t.USE_AUTO_VERSION = !0;
t.LOADING_TIME_OUT = 30;
t.HTTP_TIME_OUT = 10;
t.LOADING_CONTENT_CHANGE_INTERVAL = 3;
t.LOAD_VIEW_TIME_OUT = 20;
t.LOAD_VIEW_DELAY = .1;
t.RECONNECT_TIME_OUT = 10;
t.MAX_INBACKGROUND_TIME = 60;
t.MIN_INBACKGROUND_TIME = 5;
t.RECONNECT_ALERT_TAG = 100;
t.SHOW_DEBUG_INFO_KEY = "SHOW_DEBUG_INFO_KEY";
t.standaloneWindowsPlatformId = "1000";
t.androidPlatformId = "1001";
t.iosPlatformId = "1004";
t.isGcenter = !1;
t.useShangbaoStyle = 0;
})(n.Config || (n.Config = {}));
(function(t) {
t.Zero = 0;
t.Horn = 1;
t.UI = 2;
t.Tips = 3;
t.Alert = 4;
t.UP = 5;
t.Loading = 6;
t.UILoading = 7;
t.SpGameLoading0 = 8;
t.SpGameLoading = 9;
})(n.ViewZOrder || (n.ViewZOrder = {}));
(function(t) {
t[t.Game = 0] = "Game";
t[t.Chat = 1] = "Chat";
t[t.Lobby = 2] = "Lobby";
})(n.NetPriority || (n.NetPriority = {}));
cc._RF.pop();
}, {} ],
ConstString: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "65cc7oIG55KQaOYMnp303+O", "ConstString");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ConstString = void 0;
(function(t) {
t.localBgmPath = "__localBgmPath";
t.abBG = "__abBG";
t.agameData = "__agameData";
t.enableAutoLogin = "__enableAutoLogin";
t.accountName = "__accountName";
t.userId = "userId";
t.userName = "userName";
t.deviceIdKey = "my_did";
t.setting_vibration = "setting_vibration";
t.lan_key = "z_using_language";
t.showVipUpdate = "__showVipUpdate";
t.showBigSaleDay = "__showBigSaleDay2";
t.showShareAfter = "__showShareAfter2";
t.showAGift = "__showAGift";
t.gameListVersion = "__gameListVersion";
t.gameListData = "__gameListData";
t.agameListVersion = "__agameListVersion";
t.agameListData = "__agameListData";
t.rummy_time = "__rummy_time";
t.tp_time = "__tp_time";
t.coolData = "__coolData";
t.saveOneLinkInviteCode = "__saveOneLinkInviteCode";
t.simData = "__simData";
t.simulator = "__simulator";
t.transferId = "transferId";
t.lastSelectedPay = "__lastSelectedPay";
t.testUrlIndex = "__testUrlIndex";
t.limitGameData = "__limitGameData";
t.pay5DefalutType = "__pay5DefalutType";
t.c4_send_ID = "__c4_send_ID";
t.pexel_click_id = "__pexel_click_id";
t.default_withdraw_type_id = "__default_withdraw_type_id";
t.like_game_list = "__like_game_list";
t.game_children_list_page_version = "__game_children_list_page_version";
t.dontshowagainforjili = "__dontshowagainforjili";
t.defaultHeadPath = "all_texture/headicon/head";
t.headPath = "all_texture/headicon/";
t.vipPath = "common/texture/hall_vip/VIP";
t.lottery7_gou = "__lottery7_gou";
t.recharge_mid = "__recharge_mid";
t.hotPath = "/buildUpdate";
t.gameIconPath = "/gameIcons/";
t.http = "http";
})(n.ConstString || (n.ConstString = {}));
cc._RF.pop();
}, {} ],
DataCenter: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6dd53VIJxhDKb1mMOEPSGTs", "DataCenter");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DataCenter = void 0;
var r = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = null;
return e;
}
e.module = "【数据中心】";
return e;
}(t("../utils/SingletonT").SingletonT);
n.DataCenter = r;
cc._RF.pop();
}, {
"../utils/SingletonT": "SingletonT"
} ],
Decorators: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "28328Zes0dNXoR3TlxVIFxD", "Decorators");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.inject = n.registerEntry = void 0;
n.registerEntry = function(t, e, n) {
return function(o) {
o.__classname__ = t;
o.bundle = e;
App.entryManager.register(o, n);
};
};
function o(t, e, n) {
var o = cc.find(t, e);
return cc.js.isChildClassOf(n, cc.Component) ? null == o ? void 0 : o.getComponent(n) : o;
}
n.inject = function(t, e, n) {
return function(i, r) {
if (i instanceof cc.Component) {
var a = i;
if (!Reflect.has(i, "_FIND_OPTIONS_")) {
var s = a.onLoad;
a.onLoad = function() {
var t = this, e = Reflect.get(t, "_FIND_OPTIONS_"), n = function(n) {
var i = Reflect.get(e, n);
Reflect.get(t, i.member) || Reflect.defineProperty(t, i.member, {
enumerable: !0,
configurable: !0,
get: function() {
var e = t.node;
if (i.root) {
var r = "__" + i.root.replace(/\//g, "_");
cc.isValid(t[r]) || (t[r] = o(i.root, e, cc.Node));
e = t[r];
}
cc.isValid(t[n]) || (t[n] = o(i.path, e, i.type));
return t[n];
},
set: function(e) {
t[n] = e;
}
});
};
for (var i in e) n(i);
s && Reflect.apply(s, this, arguments);
};
Reflect.defineProperty(i, "_FIND_OPTIONS_", {
value: {}
});
}
var c = {
path: t,
type: e,
member: r,
root: n
}, l = "__" + r, u = Reflect.get(i, "_FIND_OPTIONS_");
Reflect.defineProperty(u, l, {
value: c,
enumerable: !0
});
} else Log.e("无法注入,仅支持 Component 组件");
};
};
cc._RF.pop();
}, {} ],
DefaultCodec: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d8e3b/byClMa67KBqQZr2Fa", "DefaultCodec");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DefaultCodec = void 0;
var r = t("../../../defines/Macros"), a = t("../../../plugin/ByteArray"), s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mainCmd = 0;
e.subCmd = 0;
e.buffer = null;
e.headerSize = 3 * Uint32Array.BYTES_PER_ELEMENT;
return e;
}
e.prototype.pack = function(t) {
this.mainCmd = t.mainCmd;
this.subCmd = t.subCmd;
var e = 0;
t.buffer && (e = t.buffer.length);
var n = new a.ByteArray();
n.endian = r.Macro.USING_LITTLE_ENDIAN;
n.writeUnsignedInt(e);
n.writeUnsignedInt(this.mainCmd);
n.writeUnsignedInt(this.subCmd);
if (t.buffer) {
var o = new a.ByteArray(t.buffer);
n.writeBytes(o);
}
this.buffer = n.bytes;
return !0;
};
e.prototype.unPack = function(t) {
var e = new a.ByteArray(t.data);
e.endian = r.Macro.USING_LITTLE_ENDIAN;
var n = e.readUnsignedInt();
this.mainCmd = e.readUnsignedInt();
this.subCmd = e.readUnsignedInt();
var o = e.buffer.slice(e.position);
this.buffer = new Uint8Array(o);
return n == this.buffer.length;
};
Object.defineProperty(e.prototype, "cmd", {
get: function() {
return String(this.mainCmd) + String(this.subCmd);
},
enumerable: !1,
configurable: !0
});
return e;
}(t("./Message").Codec);
n.DefaultCodec = s;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../../plugin/ByteArray": "ByteArray",
"./Message": "Message"
} ],
Dispatcher: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "76e60J3VtFFtpDVPb7EZx5v", "Dispatcher");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Dispatcher = void 0;
var o = function() {
function t() {
this._eventCaches = null;
this.isResident = !0;
this.module = null;
this._eventCaches = {};
}
Object.defineProperty(t, "instance", {
get: function() {
return this._instance || (this._instance = new t());
},
enumerable: !1,
configurable: !0
});
t.prototype.destory = function() {
t._instance = null;
};
t.prototype.add = function(t, e, n, o) {
if (t && e && n) {
for (var i = this._eventCaches[t] || [], r = !1, a = 0; a < i.length; a++) if (i[a].target === n) {
r = !0;
break;
}
if (!r) {
var s = {
type: t,
callback: e,
target: n,
once: o
};
i.push(s);
this._eventCaches[t] = i;
}
}
};
t.prototype.remove = function(t, e) {
if (t && e) {
var n = this._eventCaches[t];
if (n) {
for (var o = 0; o < n.length; o++) if (n[o].target === e) {
n.splice(o, 1);
break;
}
0 == n.length && delete this._eventCaches[t];
}
}
};
t.prototype.dispatch = function() {
if (!(arguments.length < 1)) {
var t = arguments[0];
if (t) {
Array.prototype.shift.apply(arguments);
var e = this._eventCaches[t];
if (e) {
for (var n = [], o = 0; o < e.length; o++) {
var i = e[o];
try {
"object" == typeof Reflect ? Reflect.apply(i.callback, i.target, arguments) : i.callback.apply(i.target, arguments);
i.once && n.push(i);
} catch (t) {
Log.e(t);
}
}
for (o = 0; o < n.length; o++) {
var r = n[o];
this.remove(r.type, r.target);
}
}
}
}
};
t._instance = null;
t.module = "【事件管理器】";
return t;
}();
n.Dispatcher = o;
window.dispatch = function() {
App ? Reflect.apply(App.dispatcher.dispatch, App.dispatcher, arguments) : Reflect.apply(o.instance.dispatch, o.instance, arguments);
};
cc._RF.pop();
}, {} ],
DragonPlayState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "cf70foaiJ9FcIJlsyRC2mld", "DragonPlayState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dragon = null;
return e;
}
e.prototype.init = function() {
this.dragon || (this.dragon = this.node.getComponentInChildren(dragonBones.ArmatureDisplay));
};
e.prototype.show = function() {
this.init();
this.node.active = !0;
this.dragon.armature().animation.gotoAndPlayByFrame(this.dragon.animationName, 0);
};
e.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ c ], e);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
ElementState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a5689NY8kROP6+M7phBJEYf", "ElementState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../ElementAnimState/BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.init = function(t) {
this.rollConfig = t;
this.states = [];
for (var e = this.node.children, n = 0; n < e.length; n++) {
var o = e[n].getComponent(a.default);
o && this.states.push(o);
}
};
e.prototype.show = function(t) {
this.node.active = !0;
for (var e = 0; e < this.states.length; e++) this.states[e].state == t ? this.states[e].show(this.rollConfig) : this.states[e].hide();
};
e.prototype.hide = function() {
this.node.active = !1;
};
e.prototype.setExtraFunction = function() {};
return r([ c ], e);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../ElementAnimState/BaseAnimState": "BaseAnimState"
} ],
EntryDelegate: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "dffc4VtciJG9ooQbgINQE1F", "EntryDelegate");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.EntryDelegate = void 0;
var o = t("../../defines/Macros"), i = function() {
function t() {}
t.prototype.onEnterGameView = function(t, e) {
var n = this.getPersistBundle();
t && n.push(t.bundle);
App.gameView && App.gameView.close();
App.gameView = e;
};
t.prototype.onShowGameView = function() {};
t.prototype.onCheckUpdate = function() {
Log.d("主包检测更新");
var t = this.getEntryConfig(o.Macro.BUNDLE_RESOURCES);
App.bundleManager.enterBundle(t);
};
t.prototype.getPersistBundle = function() {
return [ o.Macro.BUNDLE_RESOURCES ];
};
t.prototype.onEnterMain = function(t, e) {
if (t) {
App.gameView && App.gameView.close();
t.onEnter(e);
}
};
t.prototype.getEntryConfig = function() {
return null;
};
return t;
}();
n.EntryDelegate = i;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
EntryManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6a0a5urXGFIa6PxPM70GI94", "EntryManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.EntryManager = void 0;
var o = t("./EntryDelegate"), i = t("../../defines/Macros"), r = t("../../../common/config/GlobalVar"), a = t("../../../common/enum/GlobalEnum"), s = t("../../../common/event/CommonEvent"), c = function() {
function t() {
this.module = null;
this.isResident = !0;
this._entrys = new Map();
this.delegate = new o.EntryDelegate();
this.node = null;
}
t.prototype.register = function(t, e) {
var n = this.getEntry(t.bundle);
n && this._entrys.delete(t.bundle);
(n = new t()).bundle = t.bundle;
n.gameViewType = e;
this._entrys.set(n.bundle, n);
this.node && n.onLoad(this.node);
};
t.prototype.onLoad = function(t) {
var e = this;
this.node = t;
this._entrys.forEach(function(t) {
if (!t.isRunning) {
t.onLoad(e.node);
t.isMain && t.onEnter();
}
});
};
t.prototype.onDestroy = function() {
this._entrys.forEach(function(t) {
t.onDestroy();
});
};
t.prototype.onCheckUpdate = function() {
this.delegate.onCheckUpdate();
};
t.prototype.call = function(t, e) {
for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
var i = this.getEntry(t);
i && i.call(e, n);
};
t.prototype.enterBundle = function(t, e) {
var n = this.delegate.getEntryConfig(t);
if (n) {
if (t == i.Macro.BUNDLE_RESOURCES) {
var o = this.getEntry(t);
r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Login;
this.delegate.onEnterMain(o, e);
} else {
n.userData = e;
if (n.bundle == i.Macro.BUNDLE_RESOURCES) {
r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Hall;
dispatch(s.CommonEvent.Open_Show_Hide_laba, !0, 1);
} else n.bundle.includes("activity") ? r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Activity : r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Game;
App.bundleManager.enterBundle(n);
}
dispatch(s.CommonEvent.laba_ChangeView);
}
};
t.prototype.backBundle = function(t) {
var e = App.stageData.prevWhere;
e ? this.enterBundle(e, t) : Log.d(this.module + "已经是最后一个场景，无法返回");
};
t.prototype.onLoadBundleComplete = function(t) {
t.isLoaded = !0;
var e = this.getEntry(t.bundle);
e && e.onEnter(t.userData);
};
t.prototype.onEnterGameView = function(t, e) {
var n = this.getEntry(t);
if (n) {
this.delegate.onEnterGameView(n, e);
n.onEnterGameView(e);
}
};
t.prototype.onShowGameView = function(t, e) {
var n = this.getEntry(t);
if (n) {
this.delegate.onShowGameView(n, e);
n.onShowGameView(e);
}
};
t.prototype.onUnloadBundle = function(t) {
var e = this.getEntry(t);
e && e.onUnloadBundle();
};
t.prototype.onDestroyGameView = function(t, e) {
var n = this.getEntry(t);
if (n) {
n.onUnloadBundle();
n.onDestroyGameView(e);
}
};
t.prototype.getEntry = function(t) {
var e = App.bundleManager.getBundleName(t);
return this._entrys.get(e) || null;
};
t.prototype.debug = function() {
Log.d("-------Bundle入口管理器-------");
this._entrys.forEach(function(t) {
Log.d("bundle : " + t.bundle);
});
};
t.module = "【入口管理器】";
return t;
}();
n.EntryManager = c;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../../common/enum/GlobalEnum": "GlobalEnum",
"../../../common/event/CommonEvent": "CommonEvent",
"../../defines/Macros": "Macros",
"./EntryDelegate": "EntryDelegate"
} ],
Entry: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b3b13nmoK5Kw6BrevBcoPth", "Entry");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Entry = void 0;
var o = t("../../../common/config/GlobalVar"), i = t("../../defines/Macros"), r = t("../asset/ResourceLoader"), a = function() {
function t() {
this.gameViewType = null;
this.isMain = !1;
this.bundle = "";
this.loader = null;
this.node = null;
this.isRunning = !1;
this._gameView = null;
this.loader = new r.default();
}
Object.defineProperty(t.prototype, "gameView", {
get: function() {
return this._gameView;
},
set: function(t) {
this._gameView = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function(t) {
this.node = t;
this.isRunning = !0;
};
t.prototype.onDestroy = function() {
this.isRunning = !1;
};
t.prototype.onEnter = function(t) {
var e = this;
o.GlobalVar.curGameAlias = this.bundle;
this.initData();
this.loadResources(function() {
e.openGameView(t);
});
};
t.prototype.onEnterGameView = function(t) {
this._gameView = t;
};
t.prototype.onShowGameView = function() {};
t.prototype.onDestroyGameView = function() {
this._gameView = null;
};
t.prototype.onUnloadBundle = function() {
App.uiManager.closeBundleView(this.bundle);
this.unloadResources();
};
t.prototype.unloadResources = function() {
this.loader.unLoadResources();
};
t.prototype.openGameView = function(t) {
if (this.bundle != i.Macro.BUNDLE_RESOURCES) App.uiManager.open({
type: this.gameViewType,
bundle: this.bundle,
args: t,
isRoot: !0
}); else {
App.uiManager.open({
type: this.gameViewType,
bundle: this.bundle,
args: t,
isRoot: !0
});
App.bundleManager.unLoadOtherBundles(null);
}
};
t.prototype.closeGameView = function() {
App.uiManager.close(this.gameViewType);
};
t.prototype.call = function() {};
t.bundle = "";
return t;
}();
n.Entry = a;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../defines/Macros": "Macros",
"../asset/ResourceLoader": "ResourceLoader"
} ],
Enums: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "23267NRTnFKrK0t8pgnX8bC", "Enums");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NodeEvent = n.ButtonSpriteType = n.ViewStatus = n.LogLevel = void 0;
(function(t) {
t[t.DEBUG = 1] = "DEBUG";
t[t.DUMP = 16] = "DUMP";
t[t.WARN = 256] = "WARN";
t[t.ERROR = 4096] = "ERROR";
t[t.NONE = 65536] = "NONE";
t[t.ALL = 4369] = "ALL";
})(n.LogLevel || (n.LogLevel = {}));
(function(t) {
t[t.WAITTING_CLOSE = 0] = "WAITTING_CLOSE";
t[t.WATITING_HIDE = 1] = "WATITING_HIDE";
t[t.WAITTING_NONE = 2] = "WAITTING_NONE";
})(n.ViewStatus || (n.ViewStatus = {}));
(function(t) {
t.Norml = "normalSprite";
t.Pressed = "pressedSprite";
t.Hover = "hoverSprite";
t.Disable = "disabledSprite";
})(n.ButtonSpriteType || (n.ButtonSpriteType = {}));
(function(t) {
t.click = "click";
t.toggle = "toggle";
})(n.NodeEvent || (n.NodeEvent = {}));
cc._RF.pop();
}, {} ],
EventComponent: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2e4d76YTw1N17MrzXvyK5Tx", "EventComponent");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../core/event/EventProcessor"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._eventProcessor = new a.EventProcessor();
return e;
}
e.prototype.on = function(t) {
t.target || (t.target = this);
this._eventProcessor.on(t);
};
e.prototype.once = function(t) {
t.target || (t.target = this);
this._eventProcessor.once(t);
};
e.prototype.off = function(t) {
t.target || (t.target = this);
this._eventProcessor.off(t);
};
e.prototype.onD = function(t, e) {
this.on({
bind: "Dispatcher",
type: t,
cb: e
});
};
e.prototype.onceD = function(t, e) {
this.once({
bind: "Dispatcher",
type: t,
cb: e
});
};
e.prototype.offD = function(t) {
this.off({
bind: "Dispatcher",
type: t
});
};
e.prototype.onG = function(t, e) {
this.on({
bind: "Game",
type: t,
cb: e
});
};
e.prototype.onceG = function(t, e) {
this.once({
bind: "Game",
type: t,
cb: e
});
};
e.prototype.offG = function(t, e) {
this.off({
bind: "Game",
type: t,
cb: e
});
};
e.prototype.onI = function(t, e) {
this.on({
bind: "Input",
type: t,
cb: e
});
};
e.prototype.onceI = function(t, e) {
this.once({
bind: "Input",
type: t,
cb: e
});
};
e.prototype.offI = function(t, e) {
this.off({
bind: "Input",
type: t,
cb: e
});
};
e.prototype.onN = function(t, e, n, o, i) {
this.on({
bind: "Node",
type: e,
cb: n,
target: o,
useCapture: i,
node: t
});
};
e.prototype.onceN = function(t, e, n, o, i) {
this.once({
bind: "Node",
type: e,
cb: n,
target: o,
useCapture: i,
node: t
});
};
e.prototype.offN = function(t, e, n, o, i) {
this.off({
bind: "Node",
type: e,
cb: n,
target: o,
useCapture: i,
node: t
});
};
e.prototype.getComponentEvent = function(t, e) {
var n = new cc.Component.EventHandler();
n.target = this.node;
n.component = this._className;
n.handler = t;
n.customEventData = e;
return n;
};
e.prototype.addEvents = function() {};
e.prototype.onLoad = function() {
this.addEvents();
};
e.prototype.onDestroy = function() {
this._eventProcessor.onDestroy();
};
return r([ c ], e);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../core/event/EventProcessor": "EventProcessor"
} ],
EventProcessor: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c7128LLSnRNc7ihWrVwwpuJ", "EventProcessor");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.EventProcessor = void 0;
var o = function() {
function t() {
this._eventsD = new Map();
this._eventsG = [];
this._eventsI = [];
}
t.prototype.onD = function(t, e) {
this.on({
bind: "Dispatcher",
type: t,
cb: e
});
};
t.prototype.onceD = function(t, e) {
this.once({
bind: "Dispatcher",
type: t,
cb: e
});
};
t.prototype.offD = function(t) {
this.off({
bind: "Dispatcher",
type: t
});
};
t.prototype.onG = function(t, e) {
this.on({
bind: "Game",
type: t,
cb: e
});
};
t.prototype.onceG = function(t, e) {
this.once({
bind: "Game",
type: t,
cb: e
});
};
t.prototype.offG = function(t, e) {
this.off({
bind: "Game",
type: t,
cb: e
});
};
t.prototype.onI = function(t, e) {
this.on({
bind: "Input",
type: t,
cb: e
});
};
t.prototype.onceI = function(t, e) {
this.once({
bind: "Input",
type: t,
cb: e
});
};
t.prototype.offI = function(t, e) {
this.off({
bind: "Input",
type: t,
cb: e
});
};
t.prototype.onN = function(t, e, n, o, i) {
this.on({
bind: "Node",
type: e,
cb: n,
target: o,
useCapture: i,
node: t
});
};
t.prototype.onceN = function(t, e, n, o, i) {
this.once({
bind: "Node",
type: e,
cb: n,
target: o,
useCapture: i,
node: t
});
};
t.prototype.offN = function(t, e, n, o, i) {
this.off({
bind: "Node",
type: e,
cb: n,
target: o,
useCapture: i,
node: t
});
};
t.prototype.addEvents = function() {};
t.prototype.onLoad = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
this.addEvents();
};
t.prototype.onDestroy = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
this._cleanD();
this._cleanG();
this._cleanI();
this._cleanN();
};
t.prototype.on = function(t) {
switch (t.bind) {
case "Dispatcher":
this._onD(t);
break;

case "Game":
this._onG(t);
break;

case "Input":
this._onI(t);
break;

case "Node":
this._onN(t);
break;

default:
Log.e("on " + t.bind + " 未知事件类型");
}
};
t.prototype.once = function(t) {
t.once = !0;
this.on(t);
};
t.prototype.off = function(t) {
switch (t.bind) {
case "Dispatcher":
this._offD(t);
break;

case "Game":
this._offG(t);
break;

case "Input":
this._offI(t);
break;

case "Node":
this._offN(t);
break;

default:
Log.e("off " + t.bind + " 未知事件类型");
}
};
t.prototype._onD = function(t) {
t.target || (t.target = this);
if (this._eventsD.has(t.type)) Log.e(t.type + " 重复注册"); else {
App.dispatcher.add(t.type, t.cb, t.target, t.once);
this._eventsD.set(t.type, t);
}
};
t.prototype._offD = function(t) {
t.target || (t.target = this);
if (this._eventsD.has(t.type)) {
App.dispatcher.remove(t.type, t.target);
this._eventsD.delete(t.type);
}
};
t.prototype._cleanD = function() {
this._eventsD.forEach(function(t) {
App.dispatcher.remove(t.type, t.target);
});
this._eventsD.clear();
};
t.prototype._onG = function(t) {
t.target || (t.target = this);
if (!this._has(this._eventsG, t)) {
t.once ? cc.game.once(t.type, t.cb, t.target) : cc.game.on(t.type, t.cb, t.target);
this._eventsG.push(t);
}
};
t.prototype._offG = function(t) {
t.target || (t.target = this);
cc.game.off(t.type, t.cb, t.target);
for (var e = 0; e < this._eventsG.length; e++) {
var n = this._eventsG[e];
if (n.type == t.type && n.cb == t.cb && n.target == n.target) {
this._eventsG.splice(e, 1);
break;
}
}
};
t.prototype._cleanG = function() {
for (var t = 0; t < this._eventsG.length; t++) {
var e = this._eventsG[t];
cc.game.off(e.type, e.cb, e.target);
}
this._eventsG = [];
};
t.prototype._onI = function(t) {
t.target || (t.target = this);
if (!this._has(this._eventsI, t)) {
t.once ? cc.systemEvent.once(t.type, t.cb, t.target) : cc.systemEvent.on(t.type, t.cb, t.target);
this._eventsI.push(t);
}
};
t.prototype._offI = function(t) {
t.target || (t.target = this);
cc.systemEvent.off(t.type, t.cb, t.target);
for (var e = 0; e < this._eventsI.length; e++) {
var n = this._eventsI[e];
if (n.type == t.type && n.cb == t.cb && n.target == n.target) {
this._eventsI.splice(e, 1);
break;
}
}
};
t.prototype._cleanI = function() {
for (var t = 0; t < this._eventsI.length; t++) {
var e = this._eventsI[t];
cc.systemEvent.off(e.type, e.cb, e.target);
}
this._eventsI = [];
};
t.prototype._onN = function(t) {
var e, n;
t.target || (t.target = this);
cc.isValid(t.node) && (t.once ? null === (e = t.node) || void 0 === e || e.once(t.type, t.cb, t.target, t.useCapture) : null === (n = t.node) || void 0 === n || n.on(t.type, t.cb, t.target, t.useCapture));
};
t.prototype._offN = function(t) {
var e;
t.target || (t.target = this);
cc.isValid(t.node) && (null === (e = t.node) || void 0 === e || e.off(t.type, t.cb, t.target, t.useCapture));
};
t.prototype._cleanN = function() {};
t.prototype._has = function(t, e) {
for (var n = 0; n < t.length; n++) {
var o = t[n];
if (o.type == e.type && o.cb == e.cb && o.target == e.target) return !0;
}
return !1;
};
return t;
}();
n.EventProcessor = o;
cc._RF.pop();
}, {} ],
ExtraState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bc670TB6P1Jr595FGCNsF7i", "ExtraState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.init = function() {};
e.prototype.show = function() {
this.node.active = !0;
};
e.prototype.hide = function() {
this.node.active = !1;
};
return r([ s ], e);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
Framework: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62e5c5yqsdAGI6fxoZ3NCIO", "Framework");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Framewok = void 0;
var o = t("./core/event/Dispatcher"), i = t("./core/ui/UIManager"), r = t("./core/storage/LocalStorage"), a = t("./core/asset/AssetManager"), s = t("./core/asset/CacheManager"), c = t("./core/update/UpdateManager"), l = t("./core/asset/BundleManager"), u = t("./core/entry/EntryManager"), p = t("./data/DataCenter"), d = t("./core/log/Logger"), f = t("./core/net/service/ServiceManager"), h = t("./core/net/http/HttpClient"), _ = t("./utils/Singleton"), g = t("./core/net/service/SenderManager"), y = t("./core/net/service/HandlerManager"), m = t("./utils/Utils"), E = t("./utils/CanvasHelper"), v = function() {
function t() {
this.gameView = null;
}
Object.defineProperty(t.prototype, "serviceManager", {
get: function() {
return _.Singleton.instance.get(f.ServiceManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "senderManager", {
get: function() {
return _.Singleton.instance.get(g.SenderManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "handlerManager", {
get: function() {
return _.Singleton.instance.get(y.HandlerManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "logger", {
get: function() {
return _.Singleton.instance.get(d.LoggerImpl);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "dataCenter", {
get: function() {
return _.Singleton.instance.get(p.DataCenter);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "entryManager", {
get: function() {
return _.Singleton.instance.get(u.EntryManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "utils", {
get: function() {
return _.Singleton.instance.get(m.Utils);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bundleManager", {
get: function() {
return _.Singleton.instance.get(l.BundleManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "updateManager", {
get: function() {
return _.Singleton.instance.get(c.UpdateManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "retainMemory", {
get: function() {
return this.uiManager.retainMemory;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "dispatcher", {
get: function() {
return _.Singleton.instance.get(o.Dispatcher);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "uiManager", {
get: function() {
return _.Singleton.instance.get(i.UIManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "localStorage", {
get: function() {
return this.storage;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "storage", {
get: function() {
return _.Singleton.instance.get(r.LocalStorage);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "assetManager", {
get: function() {
return this.asset;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "asset", {
get: function() {
return _.Singleton.instance.get(a.AssetManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "cacheManager", {
get: function() {
return this.cache;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "cache", {
get: function() {
return _.Singleton.instance.get(s.CacheManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "http", {
get: function() {
return _.Singleton.instance.get(h.HttpClient);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "tips", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "uiLoading", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "canvasHelper", {
get: function() {
return _.Singleton.instance.get(E.CanvasHelper);
},
enumerable: !1,
configurable: !0
});
t.prototype.getGameView = function() {
return this.gameView;
};
t.prototype.init = function() {};
return t;
}();
n.Framewok = v;
cc._RF.pop();
}, {
"./core/asset/AssetManager": "AssetManager",
"./core/asset/BundleManager": "BundleManager",
"./core/asset/CacheManager": "CacheManager",
"./core/entry/EntryManager": "EntryManager",
"./core/event/Dispatcher": "Dispatcher",
"./core/log/Logger": "Logger",
"./core/net/http/HttpClient": "HttpClient",
"./core/net/service/HandlerManager": "HandlerManager",
"./core/net/service/SenderManager": "SenderManager",
"./core/net/service/ServiceManager": "ServiceManager",
"./core/storage/LocalStorage": "LocalStorage",
"./core/ui/UIManager": "UIManager",
"./core/update/UpdateManager": "UpdateManager",
"./data/DataCenter": "DataCenter",
"./utils/CanvasHelper": "CanvasHelper",
"./utils/Singleton": "Singleton",
"./utils/Utils": "Utils"
} ],
GameData: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a75f2tsgQhGmoy4AbVF7aOu", "GameData");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameData = void 0;
var o = t("../defines/Macros"), i = function() {
function t() {
this.module = "";
}
t.prototype.init = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
t.prototype.destory = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
t.prototype.clear = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
};
t.prototype.debug = function() {
Log.d("" + this.module);
};
t.module = o.Macro.UNKNOWN;
return t;
}();
n.GameData = i;
cc._RF.pop();
}, {
"../defines/Macros": "Macros"
} ],
GameDesignSizeTopFit: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "dec59oGiKxMX68B9BRhrcjL", "GameDesignSizeTopFit");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/event/CommonEvent"), s = t("../../sdk/SdkManager"), c = t("./EventComponent"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.useMove = !0;
return e;
}
e.prototype.addEvents = function() {
this.onD(a.ComponentGameEvent.UpdateScreenSize, this.updateSize.bind(this));
this.updateSize();
cc.view.setResizeCallback(this.updateSize.bind(this));
};
e.prototype.updateSize = function() {
if (cc.isValid(this.node)) {
var t = cc.view.getDesignResolutionSize().width, e = cc.view.getDesignResolutionSize().height;
s.default.ResolutionPolicy == cc.ResolutionPolicy.FIXED_HEIGHT || (s.default.ResolutionPolicy == cc.ResolutionPolicy.FIXED_WIDTH ? e = 1600 / s.default.getSizeRate().curRate : (s.default.ResolutionPolicy, 
cc.ResolutionPolicy.NO_BORDER));
e -= s.default.getStatusBarHeight();
this.node.setContentSize(t, e);
this.useMove && this.node.setPosition(0, -s.default.getStatusBarHeight() / 2);
}
};
r([ p(cc.Boolean) ], e.prototype, "useMove", void 0);
return r([ u ], e);
}(c.default);
n.default = d;
cc._RF.pop();
}, {
"../../common/event/CommonEvent": "CommonEvent",
"../../sdk/SdkManager": "SdkManager",
"./EventComponent": "EventComponent"
} ],
GameNativeConfig: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ee161Sx8Y9EFalxLFeZ7Mbl", "GameNativeConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = {
NEW_Server_Api_Ver: "1.0.0",
BetMin: 100,
BetMax: 5e3,
TalkMsec: 1e4,
Language: {
English: "en",
Hindi: "in"
},
GameState: {
READY: 0,
BETTING: 1,
END_GAME: 2,
PRE_READY: 3,
WAIT: 4
},
TeenAct: {
PLAYER_CALL: 2001,
PLAYER_RAISE: 2002,
PLAYER_COMPARE: 2003,
PLAYER_SEE: 2004,
PLAYER_FOLD: 2005,
PLAYER_PRE_COMPARE: 2006,
PLAYER_OK_PRE_COMPARE: 2007
},
Edit_InputMode: {
ANY: 0,
EMAIL_ADDRESS: 1,
NUMERIC: 2,
PHONE_NUMBER: 3,
URL: 4,
DECIMAL: 5,
SINGLE_LINE: 6
},
LoginType: {
Guest: 0,
Facebook: 1,
Phone: 2,
Google: 3,
Test: 5
},
GameModel: {
RealGold: 0,
Chip: 1,
Test: 2
},
GameType: {
Rummy: 1,
TeenPatti: 2,
DragonTiger: 3,
Baccarat3Patti: 4,
Buffalo: 5,
Anubis: 6,
StarSlots: 7,
SixDice: 8,
MotoRacing: 9,
BaccaratAB: 10,
UpDown7: 11,
RouletteSlots: 12,
TeenPattiSlots: 13,
Mines: 14,
Hotchilli: 16,
Liondance: 17,
SingleRoulette: 18,
CarsDrifting: 19,
Classicfruitslot: 20,
Halloween: 21,
LuckyJoker: 22,
Crash: 23,
Sicbo: 24,
DoubleDragon: 26,
Loca: 27,
Bjl: 29,
PiggyBank: 30,
FortuneTiger: 31,
Domino: 32,
TeenPattiPrivate: 34,
TeenPattiJoker: 35,
TeenPattiAK47: 36,
Spinstrike: 41,
Ganeshagold: 43,
SuperWingo: 45,
Diwalilights: 44
},
Update_Store: "Update_Store",
Get_StoreList_Err: "Get_StoreList_Err",
Update_Money: "update_money",
Update_Name: "update_name",
FbBlind_State: "fbBlind_state",
onEnterBackground: "onEnterBackground",
onEnterForeground: "onEnterForeground",
Update_PayTotal: "update_payTotal",
Update_ToTalBoard: "Update_ToTalBoard",
RedBlack_Ani: "redblack_ani",
RedBlack_Red: "redblack_red",
RedBlack_Win: "redblack_win",
SlotMachine_Ani: "slotmachine_ani",
SlotMachine_Red: "slotmachine_red",
SlotMachine_Win: "slotmachine_win",
Withdraw_Switch: "Withdraw_Switch",
Update_Deposit: "Update_Deposit",
Update_withdraw: "Update_withdraw",
Shop_Switch: "Shop_Switch",
OpenABSelect: "open_ab_select",
Update_Email: "update_email",
UpdateEvensPint: "update_evens_point",
Update_MoneyExe: "update_moneyexe",
Update_PrivateRoom: "Update_PrivateRoom",
Update_Bonus: "Update_Bonus",
Update_NoTifyRoom: "Update_NoTifyRoom",
Recharge: "Recharge",
RoomTable: "RoomTable",
Chest_Collest: "Chest_Collest",
Update_GetMoney: "Update_GetMoney",
Update_GetBonus: "Update_GetBonus",
UpdateDownloadStatus: "update_download_status",
Change_Language: "Change_Language",
Update_Ogame: "Update_Ogame",
Select_Time: "Select_Time",
Update_CashModel: "Update_CashModel",
Update_Kyc: "Update_Kyc",
Show_Shop: "Show_Shop",
UserActType: {
Loading_Scene: 21,
Touch_Guest_Login: 22,
Touch_Guest_Login_Ass: 23,
Guest_Login_Suc: 24,
Touch_FaceBook_Login: 25,
Fb_Login_Suc: 26,
Touch_Mobile_Login: 27,
Touch_MobileCode_Login: 28,
MobileCode_Login_Suc: 29,
Touch_MobileAccount_Login: 30,
MobileAccount_Login_Suc: 31,
Login_Scene: 33,
Touch_Account_Login: 32,
Test_Login_Scene: 332,
Test_Hall_Scene: 333,
Game_Pay_Suc: 5,
Hall_Pay_Suc: 6,
Begin_update: 12,
Suc_update: 13,
Suc_error: 14,
FaceBook_Err: 15,
Close_MObile: 33,
CLick_Mobile_Acoount_Login: 34,
CLick_Mobile_Code_Login: 35,
Change_Language_English: 37,
Change_Language_India: 38,
CLick_Game_Out: 36,
Deault_Language_India: 39,
Enter_Game_Click: 40
},
Event: {
facebookTokenResp: "facebookTokenResp",
exit_login: "exit_login",
click_room: "click_room",
enter_room: "enter_room",
play_game: "play_game",
goto_room: "goto_room",
page_click: "page_click",
Change_Head: "Change_Head",
Change_Name: "Change_Name",
update_money: "update_money",
update_topbanner_money: "update_topbanner_money",
update_topbanner_add_money: "update_topbanner_add_money",
update_topbanner_reduce_money: "update_topbanner_reduce_money",
update_add_reduce_anim_money: "update_add_reduce_anim_money",
update_topbanner_only_add_money: "update_topbanner_only_add_money",
update_topbanner_only_reduce_money: "update_topbanner_only_reduce_money",
game_open: "game_open",
game_message: "game_message",
game_close: "game_close",
game_open_3patti: "game_open_3patti",
game_message_3patti: "game_message_3patti",
game_close_3patti: "game_close_3patti",
laba_open: "laba_open",
laba_message: "laba_message",
laba_close: "laba_close",
login_enter: "login_enter",
exit_game: "exit_game",
send_game_page: "send_game_page",
on_game_page: "on_game_page",
open_music: "open_music",
ClickRecharge: "Recharge",
Recharge: "Recharge",
MobileBlind_State: "mobileBlind_state",
ADD_GROUP: "ADD_GROUP",
continue: "rummy_continue",
on_continue: "rummy_on_continue",
talk_about: "talk.about",
fly_gold: "fly_gold.to.safebox",
fly_gold1: "fly_gold.to.safebox1",
fly_gold2: "fly_gold.to.cash",
fly_coin: "fly_coin",
fly_props: "fly_props.to.safebox",
laba_chat: "laba_chat",
only_fly_coin: "only_fly_coin",
only_fly_Line_coin: "only_fly_Line_coin",
only_fly_boud: "only_fly_boud",
CLINET_NOTICE_KYC_CHANGE: "CmdConfig.LabaTCP.CLINET_NOTICE_KYC_CHANGE",
baseball_message: "baseball_message",
activity_tab: "Activity.Tab",
activity_closed: "Activity.Closed",
update_task: "update_task",
update_task_wheel: "update_task_wheel",
update_task_yoyo: "update_task_yoyo",
VIP_UPDATA: "VIP_UPDATA",
share_install: "share.install",
ScrollEffect: {
initData: "ScrollEffect.initData",
playResult: "ScrollEffect.playResult",
showWinAction: "ScrollEffect.showWinAction",
hideAllWin: "ScrollEffect.hideAllWin"
},
VIPGiftView: {
refresh: "VIPGiftView.Refresh"
},
GoActivityFinishActivity: "GoActivity.finishActivity"
},
Key: {
FacebookId: "facebook.token",
PhoneId: "phone.token",
autoLoginType: "autoLoginType",
guestId: "guest.token"
},
Page: {
Share: 0,
FirstPay: 1,
BindPhone: 2
}
};
cc._RF.pop();
}, {} ],
GameView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d14d1/SkptCtpqIMBcSyJMf", "GameView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../common/config/GlobalVar"), s = t("../../../sdk/SdkManager"), c = t("../../defines/Macros"), l = t("./UIView"), u = cc._decorator, p = u.ccclass, d = (u.property, 
u.menu), f = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.bindingNetServer();
this.onEnterGameView();
a.GlobalVar.curGameAlias = this.bundle;
};
e.prototype.show = function(e) {
t.prototype.show.call(this, e);
App.entryManager.onShowGameView(this.bundle, this);
};
e.prototype.onEnterGameView = function() {
App.entryManager.onEnterGameView(this.bundle, this);
};
e.prototype.enterBundle = function(t, e) {
App.entryManager.enterBundle(t, e);
};
e.prototype.onDestroy = function() {
this.audioHelper;
App.entryManager.onDestroyGameView(this.bundle, this);
t.prototype.onDestroy.call(this);
};
e.prototype.exitGameToHall = function() {
this.removeNetServer();
if (App.SingleGame) s.default.ExitSingleGame(); else if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(c.Macro.BUNDLE_RESOURCES);
s.default.setOrientation_l();
}
};
e.prototype.bindingNetServer = function() {};
e.prototype.removeNetServer = function() {};
e.prototype.playEffect_ResouceBundle = function(t, e) {
void 0 === e && (e = !1);
return this.audioHelper.playEffect(t, c.Macro.BUNDLE_RESOURCES, e);
};
e.prototype.playMusic_ResouceBundle = function(t) {
this.audioHelper.playMusic(t, c.Macro.BUNDLE_RESOURCES, !0);
};
return r([ p, d("Quick公共组件/GameView") ], e);
}(l.default);
n.default = f;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../../sdk/SdkManager": "SdkManager",
"../../defines/Macros": "Macros",
"./UIView": "UIView"
} ],
GetCmdKey: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0bd56wMR+RHGaVfkuVdPuGt", "GetCmdKey");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GetCmdKey = void 0;
n.GetCmdKey = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
for (var n = "", o = 0; o < t.length; o++) "number" != typeof t[o] ? n += t[o] : n += String(t[o]);
return n;
};
cc._RF.pop();
}, {} ],
GlobalAudio: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1facfFsEXlCYKgKMntC7Wla", "GlobalAudio");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../framework/componects/AudioComponent"), s = t("../../framework/defines/Macros"), c = t("../config/Config"), l = cc._decorator, u = l.ccclass, p = (l.property, 
l.menu), d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isPlayingMusic = !0;
return e;
}
e.prototype.playDialogOpen = function() {
this.playEffect(c.Config.audioPath.dialog, s.Macro.BUNDLE_RESOURCES, !1);
};
e.prototype.playButtonClick = function() {
this.playEffect(c.Config.audioPath.button, s.Macro.BUNDLE_RESOURCES, !1);
};
e.prototype.playAddCash = function() {
this.playEffect(c.Config.audioPath.cash, s.Macro.BUNDLE_RESOURCES, !1);
};
e.prototype.playGameStart = function() {
this.playEffect(c.Config.audioPath.gamestart, s.Macro.BUNDLE_RESOURCES, !1);
};
e.prototype.playWinner = function() {
this.playEffect(c.Config.audioPath.winner, s.Macro.BUNDLE_RESOURCES, !1);
};
e.prototype.playLoading = function() {
this.playEffect(c.Config.audioPath.loading, s.Macro.BUNDLE_RESOURCES, !1);
};
e.prototype.playPropReward = function() {
this.playEffect(c.Config.audioPath.popreward, s.Macro.BUNDLE_RESOURCES, !1);
};
e.prototype.playMusic = function(t, e, n) {
var o = this;
void 0 === n && (n = !0);
var i = this;
return new Promise(function(r) {
if (e == s.Macro.BUNDLE_RESOURCES) {
o.audioData.curMusicUrl = t;
o.audioData.curBundle = e;
o.audioData.isMusicOn && App.cache.getCacheByAsync(t, cc.AudioClip, e).then(function(a) {
if (a) {
App.asset.addPersistAsset(t, a, e);
i.stopMusic();
o.isPlayingMusic = !0;
cc.audioEngine.playMusic(a, n);
o.isPlaying = !0;
r({
url: t,
isSuccess: !0
});
} else r({
url: t,
isSuccess: !1
});
});
} else {
Log.e(t + " 不在 " + s.Macro.BUNDLE_RESOURCES + " 全局播放的声音发现存放到" + s.Macro.BUNDLE_RESOURCES);
r({
url: t,
isSuccess: !1
});
}
});
};
e.prototype.playBundleMusic = function(t, e, n) {
var o = this;
void 0 === n && (n = !0);
var i = this;
return new Promise(function(r) {
o.audioData.curMusicUrl = t;
o.audioData.curBundle = e;
o.audioData.isMusicOn && App.cache.getCacheByAsync(t, cc.AudioClip, e).then(function(a) {
if (a) {
App.asset.addPersistAsset(t, a, e);
i.stopMusic();
o.isPlayingMusic = !0;
cc.audioEngine.playMusic(a, n);
o.isPlaying = !0;
r({
url: t,
isSuccess: !0
});
} else r({
url: t,
isSuccess: !1
});
});
});
};
e.prototype.pauseMusic = function() {
this.isPlayingMusic = !1;
cc.audioEngine.pauseMusic();
};
e.prototype.resumeMusic = function() {
this.isPlayingMusic = !0;
cc.audioEngine.resumeMusic();
};
e.prototype.pauseBackgroundMusic = function() {
cc.audioEngine.pauseMusic();
};
e.prototype.resumeBackgroundMusic = function() {
this.isPlayingMusic && cc.audioEngine.resumeMusic();
};
e.prototype.playEffect = function(t, e, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (e == s.Macro.BUNDLE_RESOURCES) if (o.audioData.isEffectOn) App.cache.getCacheByAsync(t, cc.AudioClip, e).then(function(r) {
if (r) {
App.asset.addPersistAsset(t, r, e);
o.audioData.curEffectId = cc.audioEngine.playEffect(r, n);
i(o.audioData.curEffectId);
} else i(o.audioData.curEffectId);
}); else {
o.audioData.curEffectId = -1;
i(-1);
} else {
Log.e(t + " 不在 " + s.Macro.BUNDLE_RESOURCES + " 全局播放的声音发现存放到" + s.Macro.BUNDLE_RESOURCES);
i(-1);
}
});
};
e.prototype.playHallEffect = function(t, e) {
var n = this;
void 0 === e && (e = !1);
return new Promise(function(o) {
if (n.audioData.isEffectOn) App.cache.getCacheByAsync(t, cc.AudioClip, s.Macro.BUNDLE_RESOURCES).then(function(i) {
if (i) {
App.asset.addPersistAsset(t, i, s.Macro.BUNDLE_RESOURCES);
n.audioData.curEffectId = cc.audioEngine.playEffect(i, e);
o(n.audioData.curEffectId);
} else o(n.audioData.curEffectId);
}); else {
n.audioData.curEffectId = -1;
o(-1);
}
});
};
e.prototype.playBundleEffect = function(t, e, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (o.audioData.isEffectOn) App.cache.getCacheByAsync(t, cc.AudioClip, e).then(function(r) {
if (r) {
App.asset.addPersistAsset(t, r, e);
o.audioData.curEffectId = cc.audioEngine.playEffect(r, n);
i(o.audioData.curEffectId);
} else i(o.audioData.curEffectId);
}); else {
o.audioData.curEffectId = -1;
i(-1);
}
});
};
e.prototype.onLoad = function() {
this.effectVolume = this.audioData.effectVolume;
this.musicVolume = this.audioData.musicVolume;
};
return r([ u, p("Quick公共组件/GlobalAudio") ], e);
}(a.default);
n.default = d;
cc._RF.pop();
}, {
"../../framework/componects/AudioComponent": "AudioComponent",
"../../framework/defines/Macros": "Macros",
"../config/Config": "Config"
} ],
GlobalEnum: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8ee73PodlNFt4sEO1C5W+zC", "GlobalEnum");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GlobalEnum = void 0;
(function(t) {
(function(t) {
t[t.NONE = -1] = "NONE";
t[t.VISITOR = 1] = "VISITOR";
t[t.PHONE = 2] = "PHONE";
t[t.FB = 3] = "FB";
t[t.ACCOUNT = 4] = "ACCOUNT";
t[t.Google = 5] = "Google";
t[t.IPHONE = 6] = "IPHONE";
})(t.LoginType || (t.LoginType = {}));
(function(t) {
t[t.English = 0] = "English";
t[t.Hindi = 1] = "Hindi";
t[t.Indonesian = 2] = "Indonesian";
t[t.Portuguese = 3] = "Portuguese";
t[t.HindiEnglish = 4] = "HindiEnglish";
t[t.Mexico = 5] = "Mexico";
})(t.LanguageType || (t.LanguageType = {}));
(function(t) {
t[t.Login = 0] = "Login";
t[t.Hall = 1] = "Hall";
t[t.Game = 2] = "Game";
t[t.ShareGift = 3] = "ShareGift";
t[t.Activity = 4] = "Activity";
})(t.HttpUrlType || (t.HttpUrlType = {}));
(function(t) {
t[t.Up = 0] = "Up";
t[t.Down = 1] = "Down";
t[t.Left = 2] = "Left";
t[t.Right = 3] = "Right";
})(t.EffectLightDir || (t.EffectLightDir = {}));
(t.ChannelDes || (t.ChannelDes = {})).c4_N = "c4_N";
(function(t) {
t[t.Sprite = 0] = "Sprite";
t[t.UV = 1] = "UV";
t[t.Atlas = 2] = "Atlas";
t[t.Dragon = 3] = "Dragon";
})(t.ElementAnimType || (t.ElementAnimType = {}));
(function(t) {
t[t.Normal = 0] = "Normal";
t[t.Turn = 1] = "Turn";
t[t.BlurTrun = 2] = "BlurTrun";
t[t.Reward = 3] = "Reward";
})(t.ElementState || (t.ElementState = {}));
(function(t) {
t[t.None = 0] = "None";
})(t.LinesShowType || (t.LinesShowType = {}));
(function(t) {
t[t.Spin = 0] = "Spin";
t[t.Stop = 1] = "Stop";
t[t.Auto = 2] = "Auto";
t[t.Free = 3] = "Free";
t[t.Respin = 4] = "Respin";
})(t.SlotsSpinType || (t.SlotsSpinType = {}));
(function(t) {
t[t.Normal = 0] = "Normal";
t[t.Free = 1] = "Free";
t[t.Respin = 2] = "Respin";
})(t.RollRunType || (t.RollRunType = {}));
(function(t) {
t[t.FP_out = 0] = "FP_out";
t[t.FP_in = 1] = "FP_in";
t[t.FP_get = 2] = "FP_get";
t[t.FP_share = 3] = "FP_share";
t[t.FP_shareList = 4] = "FP_shareList";
t[t.FP_useShare = 5] = "FP_useShare";
t[t.FP_inReset = 6] = "FP_inReset";
})(t.ActReqType || (t.ActReqType = {}));
})(n.GlobalEnum || (n.GlobalEnum = {}));
cc._RF.pop();
}, {} ],
GlobalVar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "41c2cI35HtHHZj4fjfaVZ94", "GlobalVar");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GlobalVar = void 0;
var o = t("../enum/GlobalEnum"), i = t("../net/CommonSender"), r = t("../utils/CmmUtils"), a = t("./ConstString"), s = function() {
function t() {}
t.gotoWebGame = function() {};
t.gotoGame = function() {};
t.InitGamePlayerCount = function(t) {
if (t) {
this.gamePlayerCountsData.clear();
for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
var n = t[e];
this.gamePlayerCountsData.set(Number(e), n);
}
}
};
t.getGamePlayerCount = function(t) {
return this.gamePlayerCountsData.has(t) ? this.gamePlayerCountsData.get(t) : -1;
};
t.initLimitData = function(e) {
if (e.gameLimit) {
t.gameLimit_time = e.gameLimit.times;
if (0 == t.gameLimit_time) return;
t.gameLimit_intervalTime = e.gameLimit.sec1;
t.gameLimit_nextTime = e.gameLimit.sec2;
var n = App.storage.getItem(a.ConstString.limitGameData);
if (n) for (var o = new Date().getTime(), i = JSON.parse(n).data, r = 0; r < i.length; r++) {
var s = i[r];
o < s.limitTime && this.enterGameMiss.set(s.id, {
limitTime: s.limitTime,
count: s.count,
nextInterval: s.nextInterval
});
}
}
};
t.isLimitEnterGame = function(e) {
if (0 == t.gameLimit_time) return !1;
var n = new Date().getTime();
if (!this.enterGameMiss.has(e)) {
var o = {
limitTime: 0,
count: 1
};
o.nextInterval = n + 1e3 * t.gameLimit_intervalTime;
this.enterGameMiss.set(e, o);
t.saveLimit();
return !1;
}
var r = this.enterGameMiss.get(e);
if (!(r.count >= t.gameLimit_time)) {
if (n < r.nextInterval) r.count++; else {
r.count = 1;
r.limitTime = 0;
}
r.nextInterval = n + 1e3 * t.gameLimit_intervalTime;
t.saveLimit();
return !1;
}
if (!(r.count > t.gameLimit_time)) {
if (n < r.nextInterval) {
App.senderManager.get(i.default).Send_PlayerLimit(e);
r.count++;
r.limitTime = n + 1e3 * t.gameLimit_nextTime;
t.saveLimit();
return r.limitTime;
}
r.count = 1;
r.limitTime = 0;
r.nextInterval = n + 1e3 * t.gameLimit_intervalTime;
t.saveLimit();
return !1;
}
if (n < r.limitTime) return r.limitTime;
r.count = 1;
r.limitTime = 0;
r.nextInterval = n + 1e3 * t.gameLimit_intervalTime;
t.saveLimit();
};
t.saveLimit = function() {
if (0 != t.gameLimit_time) {
var e = {}, n = [];
t.enterGameMiss.forEach(function(t, e) {
n.push({
id: e,
count: t.count,
limitTime: t.limitTime,
nextInterval: t.nextInterval
});
});
e.data = n;
var o = JSON.stringify(e);
App.storage.setItem(a.ConstString.limitGameData, o);
}
};
t.isC1 = function() {
return "c1" == this.channelName;
};
t.initGames = function(t) {
this.gameListIdData = new Map();
this.gameListNameData = new Map();
for (var e = 0; e < t.length; e++) for (var n = t[e], o = 0; o < n.games.length; o++) {
var i = n.games[o];
this.gameListIdData.has(i.gameId) || this.gameListIdData.set(i.gameId, i);
this.gameListNameData.has(i.gameAlias) || this.gameListNameData.set(i.gameAlias, i);
}
console.error("");
};
t.gameRoomData = function(t) {
var e = null;
this.gameListIdData.has(t) && (e = this.gameListIdData.get(t));
return e;
};
t.gameRoomDataByName = function(t) {
var e = null;
this.gameListNameData.has(t) && (e = this.gameListNameData.get(t));
return e;
};
t.isNeedPayByID = function(e) {
return 1 == t.gameRoomData(e).needPay;
};
t.isNeedPayByName = function(e) {
return 1 == t.gameRoomDataByName(e).needPay;
};
Object.defineProperty(t, "checkMode", {
get: function() {
return this._checkMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "realModel", {
get: function() {
return !this._checkMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "isGameing", {
get: function() {
return this.moduleGame == o.GlobalEnum.HttpUrlType.Game;
},
enumerable: !1,
configurable: !0
});
t.initJackPot = function(t, e) {
if (!this.all_jackpot) {
this.all_jackpot = new Map();
this.all_jackpot_volatility = new Map();
if (t) for (var n = 0; n < t.length; n++) {
for (var o = t[n], i = [], r = 0; r < o.jackpot.length; r++) {
var a = o.jackpot[r], s = a - this.m_DeviationValue;
s < 0 && (s = 7 * a / 10);
var c = (a - s) / this.totalTime * this.interval;
c <= 0 && (c = this.minIntervalLength);
i.push({
jackpot: s,
changeLength: c
});
}
this.all_jackpot.set(o.gameId, i);
}
if (e) for (n = 0; n < e.length; n++) {
o = e[n];
this.all_jackpot_volatility.set(o.gameId, o.jackpot);
}
}
};
t.getJackPots = function(t) {
if (!this.all_jackpot || 0 == this.all_jackpot.size) {
Log.e("jackpot not init");
return [];
}
return this.all_jackpot.has(t) ? this.all_jackpot.get(t) : [];
};
t.getVolatility = function(t) {
if (!this.all_jackpot_volatility) {
Log.e("all_jackpot_volatility not init");
return null;
}
return this.all_jackpot_volatility.has(t) ? this.all_jackpot_volatility.get(t) : null;
};
t.update = function(t) {
this.curInterval += t;
if (this.curInterval >= this.interval) {
this.curInterval = 0;
this.all_jackpot && this.all_jackpot.forEach(function(t) {
for (var e = 0; e < t.length; e++) {
var n = t[e];
n.jackpot += n.changeLength;
}
});
}
};
t.getBankList = function() {
if (!this.bankData) {
this.bankData = new Map();
this.bankData.set("SINDH BANK LIMITED", "043");
this.bankData.set("BANKISLAMI PAKISTAN LIMITED", "021");
this.bankData.set("ALLIED BANK LIMITED", "014");
this.bankData.set("FAYSAL BANK LIMITED", "060");
this.bankData.set("SONERI BANK LIMITED", "085");
this.bankData.set("NIB BANK LIMITED", "059");
this.bankData.set("BANK ALFALAH LIMITED", "053");
this.bankData.set("ASKARI BANK LIMITED", "017");
this.bankData.set("HABIB METROPOLITAN BANK LIMITED", "064");
this.bankData.set("FIRST WOMEN BANK LIMITED", "047");
this.bankData.set("SAMBA BANK LIMITED", "028");
this.bankData.set("DUBAI ISLAMIC BANK PAKISTAN LIMITED", "013");
this.bankData.set("SILKBANK LIMITED", "066");
this.bankData.set("JS BANK LIMITED", "018");
}
return this.bankData;
};
t.getMexicoBankList = function(t) {
if (!this.bankData) {
this.bankData = new Map();
if (t) for (var e = 0, n = Object.keys(t); e < n.length; e++) {
var o = t[n[e]];
this.bankData.set(o.name, o.code);
}
}
return this.bankData;
};
t.getBankCode = function(t) {
return this.getBankList().get(t);
};
t.getMexicoBankCode = function(t) {
return this.getMexicoBankList().get(t);
};
t.getBankNameByCode = function(t) {
var e = this.getBankList(), n = "";
e.forEach(function(e, o) {
e == t && (n = o);
});
return n;
};
t.getWebGameData = function() {
if (!this.gameForData) {
this.gameForData = new Map();
this.gameForData;
}
};
t.openLaBaHideEvent = function() {};
t.isBiggerVip6 = function() {
return !(!r.CmmUtils.stringNotEmpty(t.global_telegram) && !r.CmmUtils.stringNotEmpty(t.global_whatsapp));
};
t.initPayChannel = function(t, e) {
this.rechargeChannel.clear();
this.rechargeChannelArray = [];
for (var n = 0; n < t.length; n++) {
var o = t[n];
this.rechargeChannel.set(o.mid, o);
this.rechargeChannelArray.push(o);
}
var i = App.storage.getItem(a.ConstString.recharge_mid, -1);
if (-1 == i) {
this.defaultRechargeMid = e;
this.saveCurMid();
} else if (this.rechargeChannel.has(i)) if (0 == this.rechargeChannel.get(i).state) {
this.defaultRechargeMid = e;
this.saveCurMid();
} else this.defaultRechargeMid = i; else {
this.defaultRechargeMid = e;
this.saveCurMid();
}
};
t.getCurMidData = function() {
if (this.rechargeChannel.has(this.defaultRechargeMid)) return this.rechargeChannel.get(this.defaultRechargeMid);
};
t.saveCurMid = function() {
App.storage.setItem(a.ConstString.recharge_mid, this.defaultRechargeMid);
};
t.game_uid = "";
t.gameSpinTotalTime = 0;
t.curMoney = 0;
t.token = "";
t.host = "";
t.isLogin = !1;
t.gameService = "http://192.168.31.102:30002";
t.opendShowShare = !0;
t.fristShowShare = !0;
t.fristShowPoster = !0;
t.fristShowOfflineTask = !0;
t._checkMode = !1;
t._isNotCheckButTryGame = !1;
t._useLuckySdk = !1;
t.whatsapp_url_Pre = "https://api.whatsapp.com/send?phone=";
t.telegram_url_Pre = "https://t.me/";
t.share_shareTele = "";
t.whatsapp_TeenpattiPrivate = "https://wa.me/?text=";
t.kycUrl = "";
t.shareLinkUrl = null;
t.iosWebsiteUrl = "";
t.shareAppUrl = null;
t.shareAppReward = null;
t.ntaUrl = "";
t.cusUrl = "";
t.safeboxvip = 0;
t.rankvip = 0;
t.logout = 1;
t.guid = "";
t.curGameId = "";
t.resPath = "";
t.curGameAlias = "";
t.beatHurtTime = 10;
t.VERSION_FILENAME = "versions.json";
t.OTPCountTime = 0;
t.OTPPhone = "";
t.game_model = 0;
t.moduleGame = o.GlobalEnum.HttpUrlType.Hall;
t.stayDay = "";
t.stayLeftTime = 0;
t.downList = new Map();
t.maxDown = 3;
t.wildJoker = 0;
t.money_symbol = "₹";
t.countryCode = 0;
t.gameCode = 0;
t.channelName = "c1";
t.des = "";
t.phone_prefix = "91";
t.enterGameMiss = new Map();
t.gameLimit_time = 0;
t.gameLimit_intervalTime = 5;
t.gameLimit_nextTime = 30;
t.isPlayGameing = !1;
t.isAutoPlayGameing = !1;
t.rechargeChannel = new Map();
t.rechargeChannelArray = [];
t.defaultRechargeMid = 0;
t.isPg = !1;
t.gamePlayerCountsData = new Map();
t.totalTime = 60;
t.curInterval = 0;
t.interval = .02;
t.minIntervalLength = .01;
t.m_DeviationValue = 1200;
t.matchGameFlyBeginNode = null;
t.global_telegram = "";
t.global_whatsapp = "";
return t;
}();
n.GlobalVar = s;
cc._RF.pop();
}, {
"../enum/GlobalEnum": "GlobalEnum",
"../net/CommonSender": "CommonSender",
"../utils/CmmUtils": "CmmUtils",
"./ConstString": "ConstString"
} ],
GrayNodeColor: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c4009EBOtlJ/LaWmS2PCG8Z", "GrayNodeColor");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.normalColor = null;
e.selectedColor = null;
e.isGray = !0;
return e;
}
e.prototype.setGray = function(t) {
this.node.color = t ? this.selectedColor : this.normalColor;
this.isGray = t;
};
e.prototype.updateNScolor = function(t, e) {
t && (this.normalColor = t);
e && (this.selectedColor = e);
this.setGray(this.isGray);
};
r([ c(cc.Color) ], e.prototype, "normalColor", void 0);
r([ c(cc.Color) ], e.prototype, "selectedColor", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
HallHandler: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9ea20awrx9LiIfsU1Z5aSu+", "HallHandler");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../../common/config/CmdConfig"), a = t("../../common/net/CmdDefines"), s = t("../../common/net/GetCmdKey"), c = t("../../framework/core/net/message/JsonMessage"), l = t("../../framework/core/net/service/Handler"), u = t("./LobbyCmd"), p = t("./LobbyService"), d = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(p.LobbyService);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, u.SUB_CMD_LOBBY.SERVER_GAME_LOGIN), this.loginSuccessful, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, a.SUB_CMD_SYS.CMD_SYS_HEART), this.sysHurt, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_UpDate_User), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.CLINET_NOTICE_USER_CHANGE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_SM_ROOM_INFO_RETURN), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_NOTICE_USER_CHANGE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_NOTIFY_REFLUSH_GAMEHOST), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_CONNENCT_SUCC), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_FORCED_OFFLINE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_SEND_CHAT_MSG), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.CLINET_NOTICE_KYC_CHANGE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_SERVER_SYSTEM_MESSAGE), this.commonMessage, c.JsonMessage);
};
e.prototype.loginSuccessful = function() {};
e.prototype.sysHurt = function() {};
e.prototype.commonMessage = function() {};
e.module = "res";
return e;
}(l.Handler);
n.default = d;
cc._RF.pop();
}, {
"../../common/config/CmdConfig": "CmdConfig",
"../../common/net/CmdDefines": "CmdDefines",
"../../common/net/GetCmdKey": "GetCmdKey",
"../../framework/core/net/message/JsonMessage": "JsonMessage",
"../../framework/core/net/service/Handler": "Handler",
"./LobbyCmd": "LobbyCmd",
"./LobbyService": "LobbyService"
} ],
HallSender: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "04b840UXxRKCZJUnrbRq0rq", "HallSender");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HallSender = void 0;
var r = t("../../common/net/HttpSender"), a = t("../../sdk/GameNativeConfig"), s = t("./LobbyCmd"), c = t("./LobbyService"), l = t("./TestJsonMessage"), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(c.LobbyService);
},
enumerable: !1,
configurable: !0
});
e.prototype.login = function() {
var t = new l.TestJsonMessage();
t.subCmd = s.SUB_CMD_LOBBY.SERVER_GAME_LOGIN;
t.data = {
uid: r.default.uid,
skey: r.default.skey,
version: a.default.NEW_Server_Api_Ver
};
this.send(t);
};
e.module = "res";
return e;
}(r.default);
n.HallSender = u;
cc._RF.pop();
}, {
"../../common/net/HttpSender": "HttpSender",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"./LobbyCmd": "LobbyCmd",
"./LobbyService": "LobbyService",
"./TestJsonMessage": "TestJsonMessage"
} ],
HandlerManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eadedokPQ5Hb4BTTntCHdxa", "HandlerManager");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HandlerManager = void 0;
var r = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = null;
return e;
}
e.module = "【Handler管理器】";
return e;
}(t("../../../utils/SingletonT").SingletonT);
n.HandlerManager = r;
cc._RF.pop();
}, {
"../../../utils/SingletonT": "SingletonT"
} ],
Handler: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "19a0fr3e8lEjbNb/wNKtrVQ", "Handler");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Handler = void 0;
var r = t("../../event/EventProcessor"), a = t("../../../defines/Macros"), s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._module = a.Macro.UNKNOWN;
return e;
}
Object.defineProperty(e.prototype, "module", {
get: function() {
return this._module;
},
set: function(t) {
this._module = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onS = function(t, e, n, o) {
void 0 === o && (o = !0);
var i = this.service;
i && i.addListener && i.addListener(t, n, e, o, this);
};
e.prototype.offS = function(t) {
var e = this.service;
e && e.removeListeners && e.removeListeners(this, t);
};
e.prototype.onDestroy = function() {
this.offS();
t.prototype.onDestroy.call(this);
};
e.prototype.debug = function() {
Log.d(this.module);
};
e.prototype.destory = function() {
this.onDestroy();
};
e.prototype.init = function() {
this.onLoad();
};
e.module = a.Macro.UNKNOWN;
return e;
}(r.EventProcessor);
n.Handler = s;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../event/EventProcessor": "EventProcessor"
} ],
HostInfo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "40cf2uJ++pNW4yKdnZgB1wI", "HostInfo");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HostInfo = void 0;
var o = t("../utils/CmmUtils"), i = function() {
function t() {}
t.init = function(t) {
this.URL_Laba_Server = t.laba + "/";
var e = t.laba.split(":");
this.URL_Laba_Server_ws = e[0];
this.URL_Laba_Server_ip = e[1].replace("//", "");
this.URL_Laba_Server_prot = e[2];
this.URL_Activity_Server = t.activity + "/";
this.URL_Hall_Server = t.hall + "/";
this.agentUrl = t.agent + "/";
this.haveAgent = o.CmmUtils.stringNotEmpty(t.agent);
};
t.URL_Login_Server = "";
t.URL_Hall_Server = "";
t.URL_Activity_Server = "";
t.URL_Laba_Server = "";
t.URL_Laba_Server_ip = "";
t.URL_Laba_Server_prot = "";
t.URL_Laba_Server_ws = "";
t.agentUrl = "";
t.haveAgent = !1;
return t;
}();
n.HostInfo = i;
cc._RF.pop();
}, {
"../utils/CmmUtils": "CmmUtils"
} ],
HotUpdate: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ef514GPLTxPO5EXpXxuufDl", "HotUpdate");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(t) {
try {
c(o.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("../../common/component/ZProgressbar"), l = t("../../common/config/Config"), u = t("../../common/config/ConstString"), p = t("../../common/config/GlobalVar"), d = t("../../common/config/HostInfo"), f = t("../../common/config/User"), h = t("../../common/event/CommonEvent"), _ = t("../../common/net/CommonSender"), g = t("../../common/net/HttpSender"), y = t("../../common/utils/CmmUtils"), m = t("../../framework/componects/EventComponent"), E = t("../../framework/core/update/Update"), v = t("../../framework/defines/Enums"), S = t("../../framework/defines/Macros"), b = t("../../sdk/AppInfo"), R = t("../../sdk/GameNativeConfig"), C = cc._decorator, T = C.ccclass, A = C.property, O = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.wRoot1 = null;
e.wRoot2 = null;
e.cRoot1 = null;
e.cRoot2 = null;
e.mainUpdateNode = null;
e.percent = null;
e.precentLabel = null;
e.enterFun = null;
return e;
}
n = e;
e.prototype.addEvents = function() {
this.onD(h.HotEvent.DownMainProgress, this.downMainProgress);
this.onD(h.HotEvent.DownMainComplete, this.downMainComplete);
};
e.prototype.init = function() {
this.mainUpdateNode = cc.find("updateNode", this.node);
this.percent = cc.find("updateNode/precent", this.node).getComponent(c.default);
};
e.prototype.enterGame = function() {
App.OfflineMode || n.sender.Send_Act_15();
this.mainUpdateNode.active = !1;
this.enterFun();
n.autoLogin();
};
e.prototype.checkVersion = function(t) {
var e = this;
n.sender = App.senderManager.get(_.default);
this.enterFun = t;
if (p.GlobalVar.isLogin) {
this.mainUpdateNode.active = !1;
this.enterFun();
this.refreshDataInfo();
} else n.sender.Send_CheckVer(function(t) {
var n = t.data;
if (0 != n.gameStatus) {
e.updateGlobalVar(n);
p.GlobalVar.isLogin = !0;
} else y.CmmUtils.popTipsBack(n.closeMsg, function() {});
});
};
e.prototype.refreshDataInfo = function() {
f.default.self.updatePlayerInfo();
dispatch(h.HttpEvent.BigSaleUpdate);
dispatch(R.default.Event.update_money);
dispatch(h.HttpEvent.UpdateFreeMoney);
};
e.prototype.initConfig = function(t) {
p.GlobalVar.regDelay = t.regDelay;
p.GlobalVar.taskCoin = t.weekReward;
p.GlobalVar.tc_url = t.serviceUrl;
p.GlobalVar.pp_url = t.privacyUrl;
p.GlobalVar.rankvip = t.rankvip;
p.GlobalVar.logout = t.logout;
p.GlobalVar.shareAppUrl = t.app;
p.GlobalVar.shareAppReward = t.appReward;
p.GlobalVar.iosWebsiteUrl = t.website;
p.GlobalVar.shareLinkUrl = t.qrlink;
p.GlobalVar.ntaUrl = t.nta;
p.GlobalVar.cusUrl = t.cusUrl;
p.GlobalVar.shareCoin = t.shareReward;
dispatch(h.HttpEvent.CheckUpdateFinish);
};
e.prototype.updateGlobalVar = function(t) {
p.GlobalVar.downList.clear();
d.HostInfo.init(t.hosts);
this.initConfig(t.config);
App.updateManager.hotUpdateUrl = t.update.updateUrl + u.ConstString.hotPath;
if (t.webUrl) {
var e = t.webUrlTip;
this.showTip_WebUrl(e, t.webUrl);
} else {
App.updateManager.isSkipCheckUpdate = 1 != t.update.updateStatus;
p.GlobalVar.hotUpdateUrl = App.updateManager.hotUpdateUrl;
p.GlobalVar.gameIconPath = t.updateUrl + u.ConstString.gameIconPath;
Log.e("更新热更地址：" + App.updateManager.hotUpdateUrl);
this.checkUpdate();
}
};
e.initHallSocket = function() {};
e.prototype.checkUpdate = function() {
return a(this, void 0, void 0, function() {
var t;
return s(this, function(e) {
switch (e.label) {
case 0:
if (!b.default.isBrowser) return [ 3, 1 ];
this.enterGame();
return [ 3, 4 ];

case 1:
App.uiLoading.show(0);
if (!App.updateManager.isSkipCheckUpdate) return [ 3, 2 ];
App.uiLoading.hide();
this.enterGame();
return [ 3, 4 ];

case 2:
return [ 4, App.updateManager.getRemoteVersions() ];

case 3:
if (e.sent()) if (App.updateManager.getStatus(S.Macro.MAIN_PACK_BUNDLE_NAME) != E.Update.Status.UP_TO_DATE) App.entryManager.onCheckUpdate(); else {
App.uiLoading.hide();
App.entryManager.onCheckUpdate();
this.enterGame();
} else {
App.uiLoading.hide();
t = function() {
cc.game.restart();
};
App.alert.show({
title: l.Config.alertTitlePath.TIPS,
confirmCb: t,
confirmString: "Ok",
text: "down remote version fail",
hideX: !1,
isRepeat: !1
});
}
e.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e.prototype.downMainProgress = function(t) {
App.uiLoading.hide();
this.percent.node.active = !0;
var e = t.info;
Log.e("xxxxxxxxxxxxxxmian" + e.percent);
var n = e.percent || 0;
this.percent.progress(n);
};
e.prototype.downMainComplete = function() {
App.uiLoading.hide();
this.percent.node.active = !0;
Log.e("xxxxxxxxxxxxxxxxx主包更新完成");
cc.game.restart();
};
e.prototype.showTip_WebUrl = function(t, e) {
App.alert.show({
text: t,
confirmString: "OK",
title: l.Config.alertTitlePath.TIPS,
confirmCb: function() {
cc.sys.openURL(e);
}
});
};
e.autoLogin = function() {
var t = this, e = App.storage.getItem(R.default.Key.PhoneId);
e ? this.sender.Send_Login(e, function(e) {
t.LoingCallBack(e.data);
}) : dispatch(h.CommonEvent.Show_Hall);
};
e.prototype.updatePlayerMode = function() {
this.wRoot1 && (this.wRoot1.active = !f.default.self.isMerchantPlayer);
this.wRoot2 && (this.wRoot2.active = f.default.self.isMerchantPlayer);
this.cRoot1 && (this.cRoot1.active = !f.default.self.isMerchantPlayer);
this.cRoot2 && (this.cRoot2.active = f.default.self.isMerchantPlayer);
};
e.LoingCallBack = function(t) {
var e = this;
Log.w(JSON.stringify(t));
0 == t.log ? App.logger.level = v.LogLevel.NONE : App.logger.level = v.LogLevel.ALL;
p.GlobalVar.cusUrl = t.cusUrl;
App.storage.setItem(R.default.Key.PhoneId, t.pwdtoken);
g.default.skey = t.skey;
g.default.uid = t.uid;
App.storage.setItem(u.ConstString.userId, g.default.uid);
this.initIndex = 0;
this.sender.Send_InitHall(function(t) {
p.GlobalVar.initLimitData(t.data);
p.GlobalVar.kycUrl = t.data.kycUrl;
p.GlobalVar.shareLinkUrl = t.data.qrlink;
e.initIndex++;
});
this.sender.Send_Act_15();
this.sender.Send_PlayerInfo(function(t) {
f.default.self.initPlayerInfo(t.data);
f.default.self.updateServerRedPoint();
e.initIndex++;
});
this.sender.Send_PayChannel(function(t) {
p.GlobalVar.initPayChannel(t.data.pays, t.data.mid);
e.initIndex++;
});
this.sender.Send_Act_16(function(t) {
f.default.self.initBindRewardInfo(t.data);
dispatch(h.HttpEvent.CheckUpdateFinish);
e.initIndex++;
});
this.sender.Send_getNotice(function(t) {
Log.e("-Notice----\x3e" + JSON.stringify(t.data));
t.data.list && t.data.list.length > 0 && (p.GlobalVar.noticeData = t.data.list.reverse());
}, 1);
App.OfflineMode || this.sender.Send_VipConfig(function(t) {
f.default.self.initVipConfig(t.data);
e.initIndex++;
});
App.OfflineMode || this.sender.Send_VipConfig(function() {
p.GlobalVar.poster && p.GlobalVar.poster.list && p.GlobalVar.poster.list.length > 0 ? e.initIndex++ : e.sender.Send_ActivityList(function(t) {
p.GlobalVar.poster = t.data.poster;
p.GlobalVar.poster && p.GlobalVar.poster.list && p.GlobalVar.poster.list.reverse();
e.initIndex++;
});
});
f.default.self.checkPlayer();
this.initHallSocket();
};
e.prototype.update = function() {
if (App.OfflineMode) {
if (4 == n.initIndex) {
n.initIndex = 5;
dispatch(h.CommonEvent.Show_Hall);
}
} else if (6 == n.initIndex) {
n.initIndex = 7;
dispatch(h.CommonEvent.Show_Hall);
}
};
var n;
e.sender = null;
e.initIndex = 0;
r([ A(cc.Node) ], e.prototype, "wRoot1", void 0);
r([ A(cc.Node) ], e.prototype, "wRoot2", void 0);
r([ A(cc.Node) ], e.prototype, "cRoot1", void 0);
r([ A(cc.Node) ], e.prototype, "cRoot2", void 0);
return n = r([ T ], e);
}(m.default);
n.default = O;
cc._RF.pop();
}, {
"../../common/component/ZProgressbar": "ZProgressbar",
"../../common/config/Config": "Config",
"../../common/config/ConstString": "ConstString",
"../../common/config/GlobalVar": "GlobalVar",
"../../common/config/HostInfo": "HostInfo",
"../../common/config/User": "User",
"../../common/event/CommonEvent": "CommonEvent",
"../../common/net/CommonSender": "CommonSender",
"../../common/net/HttpSender": "HttpSender",
"../../common/utils/CmmUtils": "CmmUtils",
"../../framework/componects/EventComponent": "EventComponent",
"../../framework/core/update/Update": "Update",
"../../framework/defines/Enums": "Enums",
"../../framework/defines/Macros": "Macros",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig"
} ],
HotVersion: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f43e4B7O/tAIrJtCmQn3l7X", "HotVersion");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.hot_version = "2.9.0";
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
HttpClient: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8f248ibg1tHVrFHV/QUgzEG", "HttpClient");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HttpClient = n.HttpPackage = void 0;
var o = t("../../../../common/config/Config"), i = t("./Http"), r = function() {
function t() {
this.data = null;
this.url = null;
this.timeout = 1e3 * o.Config.HTTP_TIME_OUT;
this.type = i.Http.Type.GET;
this.async = !0;
this.requestHeader = null;
this.isAutoAttachCurrentTime = !1;
this._responseType = "";
}
Object.defineProperty(t.prototype, "responseType", {
get: function() {
"" == this._responseType && (this._responseType = "text");
return this._responseType;
},
set: function(t) {
this._responseType = t;
},
enumerable: !1,
configurable: !0
});
return t;
}(), a = function() {
function t() {
this._data = new r();
this._params = null;
}
Object.defineProperty(t.prototype, "data", {
get: function() {
return this._data;
},
set: function(t) {
this._data = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "params", {
get: function() {
return this._params;
},
set: function(t) {
this._params = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.send = function(t, e) {
App.http.request(this, t, e);
};
t.crossProxy = {};
t.location = {
host: "",
pathname: "",
protocol: ""
};
return t;
}();
n.HttpPackage = a;
var s = function() {
function t() {
this.module = null;
}
t.prototype.crossProxy = function(t) {
if (cc.sys.isBrowser && a.crossProxy) {
for (var e = a.crossProxy, n = a.location, o = Object.keys(e), i = 0; i < o.length; i++) {
var r = o[i], s = e[r];
if (t.indexOf(r) > -1 && s.protocol && s.api) {
n.protocol != s.protocol && (t = t.replace(s.protocol, n.protocol));
return t.replace(r, n.host + "/" + s.api);
}
}
return t;
}
return t;
};
t.prototype.convertParams = function(t, e) {
if (null == e || null == e) return t;
var n = "&";
t.indexOf("?") < 0 && (n = "?");
for (var o = Object.keys(e), i = 0; i < o.length; i++) n += 0 == i ? o[i] + "=" + encodeURIComponent(e[o[i]]) : "&" + o[i] + "=" + encodeURIComponent(e[o[i]]);
return t + n;
};
t.prototype.convertData = function(t) {
return t;
};
t.prototype.request = function(t, e, n) {
var o = t.data.url;
if (o) {
var r = new XMLHttpRequest();
r.onreadystatechange = function() {
if (4 === r.readyState) if (r.status >= 200 && r.status < 300) "arraybuffer" == r.responseType || "blob" == r.responseType ? e && e(r.response) : e && e(r.responseText); else {
var t = "request error status:" + r.status;
Log.e("request error status : " + r.status + " url : " + o + " ");
n && (n({
type: i.Http.ErrorType.RequestError,
reason: t
}), n = null);
}
};
r.responseType = t.data.responseType;
r.timeout = t.data.timeout;
r.ontimeout = function() {
r.abort();
n && n({
type: i.Http.ErrorType.TimeOut,
reason: "request timeout"
});
};
r.onerror = function() {
Log.e("request error : " + o + " ");
n && n({
type: i.Http.ErrorType.RequestError,
reason: "request error"
});
};
o = this.crossProxy(o);
o = this.convertParams(o, t.params);
t.data.isAutoAttachCurrentTime && (o = o.indexOf("?") >= 0 ? o + "&cur_loc_t=" + Date.timeNow() : o + "?cur_loc_t=" + Date.timeNow());
if (t.data.type === i.Http.Type.POST) {
r.open(i.Http.Type.POST, o, t.data.async);
if (t.data.requestHeader) if (t.data.requestHeader instanceof Array) t.data.requestHeader.forEach(function(t) {
r.setRequestHeader(t.name, t.value);
}); else {
var a = t.data.requestHeader;
r.setRequestHeader(a.name, a.value);
} else r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
r.send(this.convertData(t.data.data));
} else {
r.open(i.Http.Type.GET, o, t.data.async);
if (t.data.requestHeader) if (t.data.requestHeader instanceof Array) t.data.requestHeader.forEach(function(t) {
r.setRequestHeader(t.name, t.value);
}); else {
a = t.data.requestHeader;
r.setRequestHeader(a.name, a.value);
}
r.send();
}
} else n && n({
type: i.Http.ErrorType.UrlError,
reason: "reuqest url error"
});
};
t.module = "【Http管理器】";
return t;
}();
n.HttpClient = s;
cc._RF.pop();
}, {
"../../../../common/config/Config": "Config",
"./Http": "Http"
} ],
HttpSender: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2b407Tz2zdGSb5aI1UwBrbX", "HttpSender");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../../aesres/aesres"), a = t("../../framework/core/net/http/Http"), s = t("../../framework/core/net/http/HttpClient"), c = t("../../framework/core/net/service/Sender"), l = t("../../framework/defines/Macros"), u = t("../../sdk/AppInfo"), p = t("../../sdk/SdkManager"), d = t("../config/ConstString"), f = t("../config/GlobalVar"), h = t("../config/HostInfo"), _ = t("../enum/GlobalEnum"), g = t("../utils/CmmUtils"), y = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
e.prototype.addCommonParam = function(t) {
var n = g.CmmUtils.sec;
t.ver = u.default.getVerCode(), t.channel_id = u.default.getChannelId();
t.skey = e.skey;
t.lan = 0;
t.platform = u.default.getPlatform();
"0" != e.uid ? t.uid = e.uid : t.uid = App.storage.getItem(d.ConstString.userId) || "0";
t.check_uid = t.uid;
g.CmmUtils.stringNotEmpty(t.skey) || (t.uid = "0");
t.ts = n;
Log.e("http_new发送参数：" + JSON.stringify(t));
var o = {}, i = JSON.stringify(t);
i = r.default.encrypt(i);
o.data = i;
return o;
};
e.prototype.addCommonGameParam = function(t) {
t.uid = f.GlobalVar.guid;
t.gameId = f.GlobalVar.curGameId;
t.uid && !g.CmmUtils.isNull(t.gameId) && (t.token = "");
Log.e("http_new发送参数：" + JSON.stringify(t));
var e = {}, n = JSON.stringify(t);
n = r.default.encrypt(n);
e.data = n;
return e;
};
e.prototype.SendPostHttp = function(t, e, n, o, i) {
var r = this;
void 0 === n && (n = _.GlobalEnum.HttpUrlType.Hall);
return new Promise(function(c) {
var l = new s.HttpPackage();
switch (n) {
case _.GlobalEnum.HttpUrlType.Login:
l.data.url = h.HostInfo.URL_Login_Server;
o || (o = 100);
break;

case _.GlobalEnum.HttpUrlType.Hall:
l.data.url = h.HostInfo.URL_Hall_Server;
break;

case _.GlobalEnum.HttpUrlType.Game:
l.data.url = f.GlobalVar.game_http_url;
break;

case _.GlobalEnum.HttpUrlType.ShareGift:
l.data.url = h.HostInfo.agentUrl;
break;

case _.GlobalEnum.HttpUrlType.Activity:
l.data.url = h.HostInfo.URL_Activity_Server;
}
l.data.isAutoAttachCurrentTime = !1;
l.data.type = a.Http.Type.POST;
var u = {};
u = g.CmmUtils.copyObjWhenKeyEqual(t, u);
l.params = r.addCommonParam(t);
var p = i;
p || (p = function(t) {
if (n != _.GlobalEnum.HttpUrlType.Game || f.GlobalVar.isGameing) {
switch (t.type) {
case a.Http.ErrorType.TimeOut:
}
c(null);
}
});
Log.e("http_new :" + l.data.url);
l.send(function(t) {
var o = JSON.parse(t);
Log.d("http_new :" + JSON.stringify(o));
if (0 == o.ret) e && e(o); else {
Log.e(l.data.url);
Log.e(n);
}
c(o);
}, p);
});
};
e.prototype.SendGamePostHttp = function(t, e, n, o, i) {
var r = this;
return new Promise(function(c) {
var u = new s.HttpPackage();
u.data.url = f.GlobalVar.gameService;
u.data.isAutoAttachCurrentTime = !1;
u.data.type = a.Http.Type.POST;
u.params = r.addCommonGameParam(t);
n && App.uiLoading.show(n);
var d = o;
d || (d = function(o) {
n && App.uiLoading.hide();
switch (o.type) {
case a.Http.ErrorType.TimeOut:
App.alert.show({
text: o.reason,
confirmString: "Try Again",
tag: "http",
isRepeat: !1,
hideX: i,
confirmCb: function() {
r.SendGamePostHttp(t, e, n, null, i);
},
immediatelyCallback: !0
});
break;

default:
App.alert.show({
text: o.reason,
confirmString: "Try Again",
tag: "http",
isRepeat: !1,
hideX: !0,
confirmCb: function() {
r.SendGamePostHttp(t, e, n, null, i);
},
closeCb: function() {
if (App.SingleGame) p.default.ExitSingleGame(); else if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(l.Macro.BUNDLE_RESOURCES);
p.default.setOrientation_l();
}
},
immediatelyCallback: !0
});
}
c(null);
});
Log.e("http_new :" + u.data.url);
u.send(function(t) {
n && App.uiLoading.hide();
var o = JSON.parse(t);
Log.d("http_new :" + JSON.stringify(o));
if (0 == o.ret) e && e(o); else {
Log.e(u.data.url);
g.CmmUtils.popRet1(o, null);
}
c(o);
}, d);
});
};
e.doGetRequest = function(t, e) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) {
var o = n.responseText;
Log.e("[HTTP] ================ \n >> request >> " + t + "\n << respond << " + o);
try {
e(JSON.parse(o));
} catch (t) {
e({
ret: -3,
desc: "parse error"
});
}
}
};
n.ontimeout = function() {
Log.e("[HTTP] ontimeout ->", t);
e({
ret: -1,
desc: "network timeout"
});
};
n.onerror = function() {
Log.e("[HTTP] onerror ->", t);
e({
ret: -2,
desc: "network failed"
});
};
Log.w("[HTTP] get request ->" + t);
n.open("GET", t);
n.send();
};
e.uid = "0";
e.skey = "";
e.httpSecretKey = "_P9M!E^&tx8K?N1";
return e;
}(c.Sender);
n.default = y;
cc._RF.pop();
}, {
"../../aesres/aesres": "aesres",
"../../framework/core/net/http/Http": "Http",
"../../framework/core/net/http/HttpClient": "HttpClient",
"../../framework/core/net/service/Sender": "Sender",
"../../framework/defines/Macros": "Macros",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/SdkManager": "SdkManager",
"../config/ConstString": "ConstString",
"../config/GlobalVar": "GlobalVar",
"../config/HostInfo": "HostInfo",
"../enum/GlobalEnum": "GlobalEnum",
"../utils/CmmUtils": "CmmUtils"
} ],
Http: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "684c9CBZ2NBQJyjobWDkoFY", "Http");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Http = void 0;
(function(t) {
(function(t) {
t[t.UrlError = 0] = "UrlError";
t[t.TimeOut = 1] = "TimeOut";
t[t.RequestError = 2] = "RequestError";
})(t.ErrorType || (t.ErrorType = {}));
(function(t) {
t.POST = "POST";
t.GET = "GET";
})(t.Type || (t.Type = {}));
})(n.Http || (n.Http = {}));
cc._RF.pop();
}, {} ],
JsonMessage: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "04477YisahPuY0c+R6qXD5e", "JsonMessage");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.JsonMessageHeartbeat = n.JsonMessage = n.serialize = void 0;
var r = t("../../../plugin/ByteArray"), a = t("../Net"), s = t("./Message");
n.serialize = function(t, e, n, o) {
return function(i, r) {
if (void 0 === Reflect.getOwnPropertyDescriptor(i, "__serialize__")) {
var a = {};
if (Reflect.getPrototypeOf(i).__serialize__ && void 0 === Reflect.getOwnPropertyDescriptor(i, "__serialize__")) for (var s = Reflect.getPrototypeOf(i).__serialize__, c = Object.keys(s), l = c.length, u = 0; u < l; u++) a[c[u]] = s[c[u]].slice(0);
Reflect.defineProperty(i, "__serialize__", {
value: a
});
}
if (i.__serialize__[t]) throw "SerializeKey has already been declared:" + t;
i.__serialize__[t] = [ r, e, n, o ];
};
};
var c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.data = null;
e.byteArray = null;
e.buffer = null;
return e;
}
e.prototype.encode = function() {
var t = JSON.stringify(this.data);
this.byteArray = new r.ByteArray();
this.byteArray.writeUTFBytes(t);
this.buffer = this.byteArray.bytes;
return !0;
};
e.prototype.serializeMember = function(t) {
if ("number" == typeof t) return this.serializeNumber(t);
if ("boolean" == typeof t) return this.serializeBool(t);
if ("string" == typeof t) return this.serializeString(t);
if (t instanceof Array) return this.serializeArray(t);
if (t instanceof Map) return this.serializeMap(t);
if (t instanceof e) return t.serialize();
Log.w("Invalid serialize value : " + t);
return null;
};
e.prototype.serializeNumber = function(t) {
null == t && (t = 0);
"string" == typeof t && (t = Number(t));
Number.isNaN(t) && (t = 0);
return t;
};
e.prototype.serializeBool = function(t) {
null == t && (t = !1);
"string" == typeof t && (t = "true" == t);
Number.isNaN(t) && (t = !1);
return t;
};
e.prototype.serializeString = function(t) {
return null == t ? "" : t.toString();
};
e.prototype.serializeArray = function(t) {
var e = this, n = [];
t.forEach(function(t) {
n.push(e.serializeMember(t));
});
return n;
};
e.prototype.serializeMap = function(t) {
var e = [], n = this;
t.forEach(function(t, o) {
var i = {
k: n.serializeMember(o),
v: n.serializeMember(t)
};
if (null === i.k) {
Log.w("Invalid map key!");
i.k = "";
}
if (null === i.v) {
Log.w("Invalid map value");
i.v = "";
}
e.push(i);
});
return e;
};
e.prototype.decode = function(t) {
if (t) {
this.buffer = t;
this.byteArray = new r.ByteArray(t);
var e = this.byteArray.readUTFBytes(this.byteArray.length);
if (e.length > 0) try {
this.data = JSON.parse(e);
} catch (t) {
return !1;
}
return this.deserialize(this.data);
}
return !1;
};
e.prototype.deserialize = function(t) {
var e = Reflect.getPrototypeOf(this).__serialize__;
if (!e) return !0;
for (var n = Object.keys(e), o = n.length, i = 0; i < o; i++) {
var r = n[i], a = e[r], s = a[0], c = a[1], l = a[2], u = a[3];
if (!this.deserializeMember(s, c, l, u, t[r])) {
Log.w("Invalid deserialize member :" + s);
return !1;
}
}
return !0;
};
e.prototype.deserializeMember = function(t, n, o, i, r) {
try {
var a = this[t];
if ("number" == typeof a) this[t] = this.deserializeNumber(t, r); else if ("boolean" == typeof a) this[t] = this.deserializeBool(t, r); else if ("string" == typeof a) this[t] = this.deserializeString(t, r); else if (a instanceof Array) this.deserializeArray(t, o, r); else if (a instanceof Map) this.deserializeMap(t, o, i, r); else if (a instanceof e) a.deserialize(r); else {
if (null !== a) {
Log.w("Invalid deserialize member : " + t + " value:" + a);
return !1;
}
switch (n) {
case Number:
this[t] = this.deserializeNumber(t, r);
break;

case String:
this[t] = this.deserializeString(t, r);
break;

case Array:
this[t] = [];
break;

case Map:
this[t] = new Map();
break;

default:
this[t] = new n();
if (!(this[t] instanceof e)) {
Log.w("Invalid deserialize member :" + t + " value:" + a);
return !1;
}
this[t].deserialize(r);
}
}
return !0;
} catch (e) {
Log.w(e.message);
this[t] = e.data || null;
return !1;
}
};
e.prototype.deserializeNumber = function(t, e) {
if (null == e || NaN === e) throw {
message: "Invalid deserializeNumber member : " + t + " value : " + e,
data: 0
};
return Number(e);
};
e.prototype.deserializeBool = function(t, e) {
if (null == e || NaN === e) throw {
message: "Invalid deserializeNumber member : " + t + " value : " + e,
data: 0
};
return Boolean(e);
};
e.prototype.deserializeString = function(t, e) {
if (null == e) throw {
message: "Invalid deserializeString member : " + t + " value : " + e,
data: ""
};
return e;
};
e.prototype.deserializeArray = function(t, n, o) {
var i = this;
if (!(o instanceof Array)) throw {
message: "Invalid deserializeArray member : " + t + " value : " + o,
data: []
};
this[t] = [];
o.forEach(function(o, r) {
if (n === Number) i[t].push(i.deserializeNumber(t + "[" + r + "]", o)); else if (n === String) i[t].push(i.deserializeString(t + "[" + r + "]", o)); else {
if (n === Array) throw {
message: "Invalid deserializeArray member : " + t + " array value type is Array"
};
if (n instanceof Map) throw {
message: "Invalid deserializeArray member : " + t + " array value type is Map"
};
if (i[t] instanceof e) i[t].deserialize(o); else {
var a = new n();
if (!(a instanceof e)) throw {
message: "Invalid deserializeArray member : " + t + " array value type is " + n
};
a.deserialize(o);
i[t].push(a);
}
}
});
};
e.prototype.deserializeMap = function(t, n, o, i) {
var r = this;
if (!(i instanceof Array)) throw {
message: "Invalid deserializeMap member : " + t + " value : " + i,
data: new Map()
};
this[t].clear();
i.forEach(function(i, a) {
if (null === i || void 0 === i.k || null === i.k || void 0 === i.v || null === i.v) throw {
message: "Invalid deserializeMap member : " + t + " invalid element : " + i
};
var s, c;
if (n === Number) s = r.deserializeNumber(t + "[" + a + "]:key", i.k); else {
if (n !== String) throw {
message: "Invalid deserializeMap member : " + t + " invalid key type : " + n
};
s = r.deserializeString(t + "[" + a + "]:key", i.k);
}
if (o === Number) c = r.deserializeNumber(t + "[" + a + "]:value", i.v); else if (o === String) c = r.deserializeString(t + "[" + a + "]:value", i.v); else {
if (o === Array) throw {
message: "Invalid deserializeMap member : " + t + " invalid value type : Array"
};
if (o instanceof Map) throw {
message: "Invalid deserializeMap member : " + t + " invalid value type : Map"
};
if (!((c = new o()) instanceof e)) throw {
message: "Invalid deserializeMap member : " + t + " invalid value type : " + o
};
c.deserialize(i.v);
}
r[t].set(s, c);
});
};
return e;
}(s.Message);
n.JsonMessage = c;
var l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.type = a.Net.ServiceType.Json;
return e;
}(c);
n.JsonMessageHeartbeat = l;
cc._RF.pop();
}, {
"../../../plugin/ByteArray": "ByteArray",
"../Net": "Net",
"./Message": "Message"
} ],
LineItemSize: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c4533x7Qu9F6JXsWxsJ6I8l", "LineItemSize");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.centerNode = null;
return e;
}
e.prototype.setSize = function(t) {
var e = this.centerNode.getContentSize();
this.centerNode.setContentSize(e.width, t);
};
r([ c(cc.Node) ], e.prototype, "centerNode", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
LineItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1dca08aqw5JmLKCG7sKv/Gh", "LineItem");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaseLineItem "), s = t("./LineItemSize"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.init = function(t) {
this.scale = t.scale;
this.poses = [];
for (var e = 0; e < t.tempPoses.length; e++) this.poses.push(t.tempPoses[e] + e * t.numY);
this.fixedPoses = t.lineMgr.lineFixedPos;
this.head = t.lineMgr.head;
this.center = t.lineMgr.center;
this.end = t.lineMgr.end;
this.instancePrefab();
this.hide();
};
e.prototype.show = function() {
this.node.active = !0;
};
e.prototype.hide = function() {
this.node.active = !1;
};
e.prototype.instancePrefab = function() {
for (var t, e, n = 0, o = [], i = 0; i < this.poses.length; i++) {
var r = this.poses[i], a = this.fixedPoses[r], c = App.utils.localConvertWorldPointAR(a), l = App.utils.worldConvertLocalPointAR(this.node.parent, c), u = null;
if (0 == i) e = u = cc.instantiate(this.head); else if (i == this.poses.length - 1) {
(u = cc.instantiate(this.end)).parent = this.node;
u.position = l;
var p = cc.instantiate(this.center);
n = cc.Vec2.distance(t, c);
n /= this.scale;
p.getComponent(s.default).setSize(n);
p.parent = this.node;
p.position = l;
o.push(p);
} else {
u = cc.instantiate(this.center);
n = cc.Vec2.distance(t, c);
n /= this.scale;
u.getComponent(s.default).setSize(n);
o.push(u);
}
u.parent = this.node;
u.position = l;
t = c;
}
for (i = 0; i < o.length; i++) {
var d = o[i], f = e.position.sub(d.position).normalize(), h = 180 * Math.atan2(f.y, f.x) / Math.PI;
d.angle = h;
e = d;
}
};
return r([ l ], e);
}(a.default));
n.default = u;
cc._RF.pop();
}, {
"./BaseLineItem ": "BaseLineItem ",
"./LineItemSize": "LineItemSize"
} ],
LineMgr: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9ac79VJNwpOi6k1mB4/P3CJ", "LineMgr");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaseLineMgr"), s = t("./LineItem"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lineData = null;
e.head = null;
e.center = null;
e.end = null;
return e;
}
e.prototype.init = function(t, e) {
this.config = t;
var n = cc.find("linePos", this.node);
this.lineFixedPos = n.children;
var o = cc.find("lines", this.node), i = cc.find("lines/line", this.node);
this.lines = [];
i.active = !1;
for (var r = 0; r < t.lineCount; r++) {
var a = cc.instantiate(i);
a.parent = o;
a.position = cc.Vec3.ZERO;
a.zIndex = r;
this.lines.push(a.getComponent(s.default));
}
for (r = 0; r < this.lines.length; r++) this.lines[r].init({
lineMgr: this,
tempPoses: this.lineData.json[r],
numY: this.config.numY,
scale: e
});
};
e.prototype.showRewardLine = function(t) {
this.lines[t].show();
};
e.prototype.showRewardLines = function(t) {
this.lineAnims_None(t);
};
e.prototype.lineAnims_None = function(t) {
for (var e = 0; e < t.length; e++) {
var n = t[e];
this.lines[n].show();
}
};
r([ u(cc.JsonAsset) ], e.prototype, "lineData", void 0);
r([ u(cc.Prefab) ], e.prototype, "head", void 0);
r([ u(cc.Prefab) ], e.prototype, "center", void 0);
r([ u(cc.Prefab) ], e.prototype, "end", void 0);
return r([ l ], e);
}(a.default);
n.default = p;
cc._RF.pop();
}, {
"./BaseLineMgr": "BaseLineMgr",
"./LineItem": "LineItem"
} ],
Loading: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bb305D9F5lGI6TgHkSWfCvt", "Loading");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../config/Config"), i = t("../event/CommonEvent"), r = t("../utils/CmmUtils"), a = t("./ZProgressbar"), s = function() {
function t() {
this.module = null;
this.node = null;
this.precentTxt = null;
this.bar = null;
this.animNode = null;
}
t.prototype.show = function(t, e, n, o) {
var i = this;
this._show(t, e);
this.curTime = r.CmmUtils.msec;
this.widget = this.node.getComponent(cc.Widget);
this.precentTxt = cc.find("precent_html/label", this.node).getComponent(cc.Label);
this.bar = cc.find("precent_html", this.node).getComponent(a.default);
this.animNode = cc.find("precent_html/anim", this.node);
n ? this.animNode.scale = 0 : r.CmmUtils.isNull(o) || (this.animNode.scale = o);
this.tweener && this.tweener.removeSelf();
e > 0 ? this.tweener = cc.tween(this.animNode).to(e, {
scale: t
}, {
onUpdate: function() {
i.bar.progress(i.animNode.scale);
i.precentTxt.string = r.CmmUtils.precentString(i.animNode.scale);
}
}).call(function() {
t >= 1 && i.hide();
}).start() : t >= 1 && this.hide();
return this;
};
t.prototype.progress = function(t) {
if (this.node && this.node.active) {
this.tweener && this.tweener.removeSelf();
if (this.bar) {
this.precentTxt.string = r.CmmUtils.precentString(t);
this.bar.progress(t);
this.animNode.scale = t;
}
}
};
t.prototype.hide = function() {
var t = this, e = 1e3 - (r.CmmUtils.msec - this.curTime);
if (e <= 0) {
if (this.node) {
this.node.active = !1;
dispatch(i.SdkEvent.SdkEvent_hide_loading);
}
} else setTimeout(function() {
if (t.node) {
t.node.active = !1;
dispatch(i.SdkEvent.SdkEvent_hide_loading);
}
}, e);
};
t.prototype._show = function() {
this.node || (this.node = cc.instantiate(App.uiManager.getScenePrefab("Loading")));
this.node.removeFromParent();
App.uiManager.addView(this.node, o.ViewZOrder.Loading);
this.node.position = cc.Vec3.ZERO;
this.node.active = !0;
};
t.module = "【Loading】";
return t;
}();
n.default = s;
cc._RF.pop();
}, {
"../config/Config": "Config",
"../event/CommonEvent": "CommonEvent",
"../utils/CmmUtils": "CmmUtils",
"./ZProgressbar": "ZProgressbar"
} ],
LobbyCmd: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "04e03YdPLBADrD0Q+gFggMH", "LobbyCmd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SUB_CMD_LOBBY = void 0;
n.SUB_CMD_LOBBY = {
SERVER_GAME_LOGIN: 6e3,
Laba_UpDate_User: -1,
Laba_CONNENCT_SUCC: 4001,
SERVER_NOTIFY_TABLE_DISBAND: 6666,
Laba_GM_ROOM_INFO_RETURN: 8812,
Laba_SM_ROOM_INFO_RETURN: 8813,
Laba_OutGame: 4002,
Laba_SERVER_SYSTEM_MESSAGE: 9001,
Laba_Server_BroadCast: 1e4,
SERVER_FORCED_OFFLINE: 9003,
SERVER_TABLE_INFO_CHANGE: 8903,
SERVER_NOTIFY_REFLUSH_GAMEHOST: 9005,
SERVER_NOTIFY_GAME_MODE_INFO: 9006,
SERVER_NOTICE_USER_CHANGE: 8904,
CLINET_NOTICE_USER_CHANGE: 8905,
CLINET_NOTICE_KYC_CHANGE: 9008,
CLIENT_HEART_PING: 8888,
CLINET__SEND_CHAT_MSG: 8906,
SERVER_SEND_CHAT_MSG: 8907
};
cc._RF.pop();
}, {} ],
LobbyService: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7d221xQC8lOQZAIMEJyn82g", "LobbyService");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LobbyService = void 0;
var r = t("../../common/config/Config"), a = t("../../common/event/CommonEvent"), s = t("../../common/net/CommonService"), c = t("./HallSender"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.priority = r.NetPriority.Lobby;
return e;
}
e.prototype.onOpen = function(e) {
t.prototype.onOpen.call(this, e);
App.senderManager.get(c.HallSender).login();
dispatch(a.CommonEvent.LOBBY_SERVICE_CONNECTED, this);
};
e.prototype.onClose = function(e) {
t.prototype.onClose.call(this, e);
dispatch(a.CommonEvent.LOBBY_SERVICE_CLOSE, this);
};
e.module = "hall";
return e;
}(s.CommonService);
n.LobbyService = l;
cc._RF.pop();
}, {
"../../common/config/Config": "Config",
"../../common/event/CommonEvent": "CommonEvent",
"../../common/net/CommonService": "CommonService",
"./HallSender": "HallSender"
} ],
LocalStorage: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0a90d5yS1ZFT7BByVolyMn/", "LocalStorage");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LocalStorage = void 0;
var o = t("../../plugin/BitEncrypt"), i = function() {
function t() {
this.module = null;
this.key = "VuxiAKihQ0VR9WRe";
}
t.prototype.encrypt = function(t) {
return o.BitEncrypt.encode(JSON.stringify(t), this.key);
};
t.prototype.decryption = function(t) {
return o.BitEncrypt.decode(t, this.key);
};
t.prototype.getItem = function(t, e) {
void 0 === e && (e = null);
var n = this.storage.getItem(t);
if (!n) return e;
try {
var o = this.decryption(n), i = JSON.parse(o);
return i.type ? i.value : n;
} catch (t) {
return n;
}
};
t.prototype.setItem = function(t, e) {
var n = typeof e;
if ("number" == n || "string" == n || "boolean" == n || "object" == n) {
var o = {
type: n,
value: e
};
try {
var i = this.encrypt(o);
this.storage.setItem(t, i);
} catch (t) {}
}
};
t.prototype.removeItem = function(t) {
this.storage.removeItem(t);
};
Object.defineProperty(t.prototype, "storage", {
get: function() {
return cc.sys.localStorage;
},
enumerable: !1,
configurable: !0
});
t.module = "【本地仓库】";
return t;
}();
n.LocalStorage = i;
cc._RF.pop();
}, {
"../../plugin/BitEncrypt": "BitEncrypt"
} ],
Logger: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b388dQOpwNPF4PVWAlmnZIy", "Logger");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LoggerImpl = void 0;
var o = t("../../defines/Enums"), i = function() {
function t() {
this.logger = console;
this._level = o.LogLevel.ALL;
this.module = null;
this.isResident = !0;
this.update();
}
Object.defineProperty(t.prototype, "level", {
get: function() {
return this._level;
},
set: function(t) {
this._level = t;
this.update();
},
enumerable: !1,
configurable: !0
});
t.prototype.attach = function(t) {
if (!this.isValid(t)) {
this.level = this.level | t;
this.update();
}
};
t.prototype.detach = function(t) {
if (this.isValid(t)) {
this.level = this.level ^ t;
this.update();
}
};
t.prototype.isValid = function(t) {
return !!(this.level & t);
};
t.prototype.update = function() {
this.isValid(o.LogLevel.DUMP) ? cc.sys.isBrowser ? this.logger.dump = console.debug : this.logger.dump = this.dump.bind(this) : this.logger.dump = function() {};
this.isValid(o.LogLevel.ERROR) ? this.logger.e = console.error : this.logger.e = function() {};
this.isValid(o.LogLevel.DEBUG) ? this.logger.d = console.log : this.logger.d = function() {};
this.isValid(o.LogLevel.WARN) ? this.logger.w = console.warn : this.logger.w = function() {};
};
t.prototype.dump = function() {
if (this.isValid(o.LogLevel.DUMP)) {
var t = arguments[2];
null == t && (t = 5);
Number.isNaN(t) && (t = 10);
t > 10 && (t = 10);
if (t <= 0) {
t = 1;
return;
}
var e = arguments[0];
e.toJSON && "function" == typeof e.toJSON && (e = e.toJSON());
var n = this._dump(e, arguments[1], t, 0);
this.logger.d(n);
}
};
t.prototype.convertName = function(t, e) {
void 0 === e && (e = "=");
return t.length > 0 ? t + " " + e + " " : " ";
};
t.prototype.toBoolean = function(t, e) {
return "" + this.convertName(t) + e + ";";
};
t.prototype.toNumber = function(t, e) {
return "" + this.convertName(t) + e;
};
t.prototype.toStringForDump = function(t, e) {
return this.convertName(t) + '"' + e + '"';
};
t.prototype.toOther = function(t, e) {
return this.convertName(t) + typeof e;
};
t.prototype.toUnknown = function(t) {
return (t.length > 0 ? t + " " : " ") + "is unknown type!";
};
Object.defineProperty(t.prototype, "indentFormat", {
get: function() {
return "    ";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "halfIndentFormat", {
get: function() {
return "   ";
},
enumerable: !1,
configurable: !0
});
t.prototype.toArray = function(t, e, n, o) {
var i, r = "", a = "";
i = e.length;
for (var s = this.convertName(t, ""), c = 0; c < o; ++c) a += " ";
r = s + "[";
for (var l = 0; l < i; ++l) r += "\n" + (0 === a.length ? "" : "" + a) + this.indentFormat + "[" + l + "]:" + this._dump(e[l], "", n, o + 1);
return r + "\n" + (0 === a.length ? "" : "" + a + this.halfIndentFormat) + "]";
};
t.prototype.toObject = function(t, e, n, o) {
var i = "";
if (null === e) return "null";
var r = "";
if (e instanceof Object) {
for (var a = 0; a < o; ++a) r += " ";
i = "{";
for (var s in e) i += "\n" + (0 === r.length ? "" : "" + r) + this.indentFormat + s + ":" + this._dump(e[s], "", n, o + 1);
return i + "\n" + (0 === r.length ? "" : "" + r + this.halfIndentFormat) + "}";
}
return "Unknown Object Type!";
};
t.prototype._dump = function(t, e, n, o) {
void 0 === e && (e = "unkown");
if (o > n) return "...";
e = "undefined" == typeof e ? "" : e;
var i = "";
switch (typeof t) {
case "boolean":
i += this.toBoolean("", t);
break;

case "number":
i += this.toNumber("", t);
break;

case "string":
i += this.toStringForDump("", t);
break;

case "object":
Array.isArray(t) ? i += this.toArray(e, t, n, o) : i += this.toObject(e, t, n, o);
break;

case "function":
case "undefined":
i += this.toOther(e, t);
break;

default:
i += this.toUnknown(e);
}
return i;
};
t.module = "【日志管理器】";
return t;
}();
n.LoggerImpl = i;
cc._RF.pop();
}, {
"../../defines/Enums": "Enums"
} ],
LoginEntry: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a2dbbmTWHZKvZx7pxD3dsGe", "LoginEntry");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./view/LoginView"), s = t("../../scripts/framework/defines/Macros"), c = t("../../scripts/framework/core/entry/Entry"), l = t("../../scripts/framework/defines/Decorators");
(function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isMain = !0;
return e;
}
e.prototype.addNetHandler = function() {};
e.prototype.removeNetHandler = function() {};
e.prototype.loadResources = function(t) {
t();
};
e.prototype.initData = function() {};
e.prototype.onEnter = function(e) {
t.prototype.onEnter.call(this, e);
Log.d("--------------onEnterLogin--------------");
};
e.prototype.onEnterGameView = function(e) {
t.prototype.onEnterGameView.call(this, e);
};
e.prototype.onUnloadBundle = function() {
this.removeNetHandler();
this.unloadResources();
};
e = r([ l.registerEntry("LoginEntry", s.Macro.BUNDLE_RESOURCES, a.default) ], e);
})(c.Entry);
cc._RF.pop();
}, {
"../../scripts/framework/core/entry/Entry": "Entry",
"../../scripts/framework/defines/Decorators": "Decorators",
"../../scripts/framework/defines/Macros": "Macros",
"./view/LoginView": "LoginView"
} ],
LoginViewNodes: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "aebcf/zcGVPg4Oc9CtA6CiW", "LoginViewNodes");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.headIcon = null;
e.register = null;
e.loginInfo = null;
e.player_name = null;
e.vip_value = null;
e.copyBtn = null;
e.stayFill = null;
e.rechargeFill = null;
e.betFill = null;
return e;
}
r([ c(cc.Sprite) ], e.prototype, "headIcon", void 0);
r([ c(cc.Node) ], e.prototype, "register", void 0);
r([ c(cc.Node) ], e.prototype, "loginInfo", void 0);
r([ c(cc.Label) ], e.prototype, "player_name", void 0);
r([ c(cc.Label) ], e.prototype, "vip_value", void 0);
r([ c(cc.Node) ], e.prototype, "copyBtn", void 0);
r([ c(cc.Sprite) ], e.prototype, "stayFill", void 0);
r([ c(cc.Sprite) ], e.prototype, "rechargeFill", void 0);
r([ c(cc.Sprite) ], e.prototype, "betFill", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
LoginView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "70f72G0TFhBn7yKDYJo+teY", "LoginView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/config/ConstString"), s = t("../../common/config/GlobalVar"), c = t("../../common/config/HostInfo"), l = t("../../common/config/User"), u = t("../../common/event/CommonEvent"), p = t("../../common/net/CommonSender"), d = t("../../common/net/HttpSender"), f = t("../../common/utils/UIUtils"), h = t("../../framework/core/ui/GameView"), _ = t("../../framework/defines/Enums"), g = t("../../framework/defines/Macros"), y = t("../../sdk/AppInfo"), m = t("../../sdk/SdkManager"), E = t("../net/LobbyService"), v = t("./HotUpdate"), S = t("./LoginViewNodes"), b = cc._decorator, R = b.ccclass, C = (b.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameRoot = null;
e.root = null;
e.signBtn = null;
e.bounsBtn = null;
e.moreBtn = null;
e.moreMaskBtn = null;
e.logoNode = null;
e.logoBtn = null;
e.ntaBtn = null;
e.activityBtn = null;
e.noticeBtn = null;
e.settingBtn = null;
e.Button_Refer = null;
e.label_ShareTarValue = null;
e.Button_Events = null;
e.Button_Task = null;
e.Btn_Match = null;
e.lock_Match = null;
e.Btn_Bigsale = null;
e.Btn_Bigsale_hd = null;
e.withdrawBtn = null;
e.crashBtn = null;
e.loginBtn = null;
e.copyBtn = null;
e.infoBtn = null;
e.vipBtn = null;
e.moneyLabel = null;
e.refreshBtn = null;
e.coinBtn = null;
e.kefuBtn = null;
e.playerName = null;
e.label_Match_VipTip = null;
e.label_Match_TipContent = null;
e.bonus_label = null;
e.lock_Match_Tip = null;
e.lgvNodes = null;
e.merchantAddCash = null;
e.merchantAddWithdraw = null;
e.merchantLogo = null;
e.hotUpdate = null;
e.isWaitForSecToClick = !1;
return e;
}
e.getPrefabUrl = function() {
return "@/LoginView";
};
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
if (App.SingleGame) s.GlobalVar.gotoWebGame(); else {
cc.find("bg", this.node).active = !0;
dispatch(u.SimpleEvent.Html5_view_loading, !0);
this.SetShowRoot_AfterCheckVerResult();
}
};
e.prototype.SetShowRoot_AfterCheckVerResult = function() {
var t = this, e = "prefabs/view/web/root";
App.OfflineMode && (e = "prefabs/view/web/offlineRoot");
f.default.getPrefab(g.Macro.BUNDLE_RESOURCES, e).then(function(e) {
var n = cc.instantiate(e);
t.node.addChild(n);
t.initNode();
y.default.isBrowser || (t.hotUpdate.mainUpdateNode.active = !0);
t.hotUpdate.checkVersion(t.enterGame.bind(t));
dispatch(u.SimpleEvent.Html5_view_loading, !1);
});
};
e.prototype.initNode = function() {
this.root = cc.find("root", this.node);
this.gameRoot = cc.find("root", this.root);
this.hotUpdate = this.root.getComponent(v.default);
this.hotUpdate.init();
this.addLocalEvents();
};
e.prototype.initOfflineNode = function() {
this.root = cc.find("root", this.node);
this.gameRoot = cc.find("root", this.root);
this.hotUpdate = this.root.getComponent(v.default);
this.hotUpdate.init();
this.ntaBtn = cc.find("root/top_layer/top_html/logo", this.root);
this.logoNode = cc.find("root/top_layer/top_html/logo", this.root);
this.merchantAddCash = cc.find("root/top_layer/top_html/merchantAddCash", this.root);
this.merchantAddWithdraw = cc.find("root/top_layer/top_html/merchantAddWithdraw", this.root);
this.moreBtn = cc.find("root/top_layer/top_html/others/more", this.root);
this.moreMaskBtn = cc.find("root/moreMaskBtn", this.root);
this.noticeBtn = cc.find("moreItem/noticeBtn", this.moreMaskBtn);
this.settingBtn = cc.find("moreItem/settingBtn", this.moreMaskBtn);
this.Button_Refer = cc.find("root/bottom_layer/btns/Button_Refer", this.root);
this.label_ShareTarValue = cc.find("root/bottom_layer/btns/Button_Refer/freecash/Layout/Label2", this.root).getComponent(cc.Label);
this.Button_Task = cc.find("root/bottom_layer/btns/Btn_Task", this.root);
this.withdrawBtn = cc.find("root/bottom_layer/btns/withdrawBtn", this.root);
this.crashBtn = cc.find("root/bottom_layer/btns/crashBtn", this.root);
this.loginBtn = cc.find("root/top_layer/top_html/personInfo/register/loginBtn", this.root);
this.infoBtn = cc.find("root/top_layer/top_html/personInfo/common/infoBtn", this.root);
this.copyBtn = cc.find("root/top_layer/top_html/personInfo/loginInfo/copyBtn", this.root);
this.merchantLogo = cc.find("root/top_layer/top_html/Merchant", this.root);
this.playerName = cc.find("root/top_layer/top_html/personInfo/loginInfo/playerName", this.root).getComponent(cc.Label);
this.moneyLabel = cc.find("root/top_layer/top_html/total_coins/MoneyLabel", this.root).getComponent(cc.Label);
this.refreshBtn = cc.find("root/top_layer/top_html/total_coins/Background/refreshBtn", this.root);
this.coinBtn = cc.find("root/top_layer/top_html/total_coins/icon/coinBtn", this.root);
this.kefuBtn = cc.find("root/kefuBtn", this.root);
this.lgvNodes = this.root.getComponent(S.default);
this.addLocalEvents();
};
e.prototype.addLocalEvents = function() {
var t = this;
this.onN(this.moreBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.moreMaskBtn.active = !0;
});
this.onN(this.moreMaskBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.moreMaskBtn.active = !1;
});
this.onN(this.Button_Refer, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
c.HostInfo.haveAgent || App.tips.show("coming soon!");
});
this.onN(this.Button_Events, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.Button_Task, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.Btn_Match && this.onN(this.Btn_Match, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.showMatch();
});
this.Btn_Bigsale && this.onN(this.Btn_Bigsale, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.withdrawBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.crashBtn, _.NodeEvent.click, function() {
App.globalAudio.playAddCash();
});
this.onN(this.loginBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.signBtn && this.onN(this.signBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.bounsBtn && this.onN(this.bounsBtn, _.NodeEvent.click, function() {});
this.activityBtn && this.onN(this.activityBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.moreMaskBtn.active = !1;
});
this.onN(this.noticeBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.moreMaskBtn.active = !1;
});
this.onN(this.settingBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.moreMaskBtn.active = !1;
});
this.onN(this.infoBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.vipBtn && this.onN(this.vipBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.copyBtn, _.NodeEvent.click, function() {
m.default.setClipboardContent(d.default.uid.toString());
});
this.onN(this.refreshBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
if (l.default.self.isBindPhone) {
t.moneyLabel.string = "update...";
t.scheduleOnce(function() {
l.default.self.updateMoneyInfo();
}, .5);
}
});
this.onN(this.coinBtn, _.NodeEvent.click, function() {
App.globalAudio.playAddCash();
});
this.logoBtn && this.onN(this.logoBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.ntaBtn, _.NodeEvent.click, function() {
y.default.showNtaUrl();
});
this.onN(this.kefuBtn, _.NodeEvent.click, function() {
y.default.showCustomService();
});
};
e.prototype.SetBtnState_TaskAndHotSale = function(t) {
Log.e("isTask = " + t);
this.Btn_Bigsale.active = !t;
this.Button_Task.active = t;
};
e.prototype.onBackGroundUpdate = function() {
l.default.self.isBindPhone && l.default.self.updatePlayerInfo();
};
e.prototype.onPlayMusic = function() {
this.audioHelper.playMusic("all_audio/music_bg", this.bundle, !0);
};
e.prototype.openWebView = function(t, e) {
if (y.default.isAndroid) {
App.globalAudio.stopMusic();
if (y.default.isSupportBackHome()) {
e || m.default.setOrientation_p();
m.default.openWebView(t);
} else m.default.openUrl(t);
} else m.default.openUrl(t);
};
e.prototype.clearLoginToken = function() {
App.serviceManager.get(E.LobbyService, !0).close(!0);
this.moneyLabel.string = l.default.self.moneyString;
this.bonus_label && (this.bonus_label.string = l.default.self.bonusBString);
this.infoBtn && (this.infoBtn.active = !1);
this.vipBtn && (this.vipBtn.active = !1);
this.merchantAddCash && (this.merchantAddCash.active = !1);
this.merchantAddWithdraw && (this.merchantAddWithdraw.active = !1);
this.logoNode && (this.logoNode.active = !0);
this.merchantLogo && (this.merchantLogo.active = !1);
this.lgvNodes.register.active = !0;
this.lgvNodes.loginInfo.active = !1;
App.storage.removeItem(a.ConstString.userId);
d.default.uid = "0";
s.GlobalVar.isLogin = !1;
this.hotUpdate.checkVersion(this.enterGame.bind(this));
};
e.prototype.enterGame = function() {
this.label_ShareTarValue && (this.label_ShareTarValue.string = s.GlobalVar.shareCoin);
this.audioHelper.playMusic("all_audio/music_bg", this.bundle, !0);
if (l.default.self.isBindPhone) {
l.default.self.checkPlayer();
l.default.self.updateServerRedPoint();
l.default.self.updateFreeMoneyInfo();
dispatch(u.CommonEvent.Show_Hall);
}
};
e.prototype.refreshPlayerInfo = function() {
this.merchantLogo && (this.merchantLogo.active = l.default.self.isMerchantPlayer);
this.lgvNodes.register.active = !1;
this.lgvNodes.loginInfo.active = !0;
var t = l.default.self.data;
this.infoBtn.active = !0;
this.lgvNodes.vip_value && (this.vipBtn.active = !0);
this.logoNode && (this.logoNode.active = !l.default.self.isMerchantPlayer);
f.default.loadHead(this.lgvNodes.headIcon, t);
this.lgvNodes.player_name.string = "ID:" + d.default.uid;
this.lgvNodes.vip_value && (this.lgvNodes.vip_value.string = l.default.self.data.viplevel + "");
this.lgvNodes.stayFill && (this.lgvNodes.stayFill.fillRange = 0 == l.default.self.data.stayexp ? 0 : l.default.self.data.stayexp / l.default.self.data.stayexpm);
this.lgvNodes.rechargeFill && (this.lgvNodes.rechargeFill.fillRange = 0 == l.default.self.data.payexp ? 0 : l.default.self.data.payexp / l.default.self.data.payexpm);
this.lgvNodes.betFill && (this.lgvNodes.betFill.fillRange = 0 == l.default.self.data.payexp ? 0 : l.default.self.data.betexp / l.default.self.data.betexpm);
this.moneyLabel.string = l.default.self.moneyString;
this.bonus_label && (this.bonus_label.string = l.default.self.bonusBString);
this.label_Match_VipTip && (this.label_Match_VipTip.string = "VIP" + s.GlobalVar.rankvip);
this.lock_Match && (this.lock_Match.active = 0 == l.default.self.data.rank);
this.playerName && (this.playerName.string = l.default.self.data.name);
this.merchantAddCash && (this.merchantAddCash.active = l.default.self.isMerchantPlayer);
this.merchantAddWithdraw && (this.merchantAddWithdraw.active = l.default.self.isMerchantPlayer);
this.Btn_Bigsale_hd && (l.default.self.data.dayfree ? this.Btn_Bigsale_hd.active = 0 == l.default.self.data.dayfreeTime : this.Btn_Bigsale_hd.active = !1);
this.hotUpdate.updatePlayerMode();
};
e.prototype.showMatch = function() {};
e.prototype.onShowPanel = function() {
if (!(s.GlobalVar.noticeData && s.GlobalVar.noticeData.length > 0)) {
if (App.OfflineMode) {
l.default.self.updateServerRedPoint();
this.autoShowOffLineTask();
} else {
l.default.self.updateServerRedPoint();
var t = App.storage.getItem(a.ConstString.showVipUpdate), e = App.storage.getItem(a.ConstString.showShareAfter);
if (this.autoShowShare(e)) ; else if (this.showActivity()) ; else if (1 == e && s.GlobalVar.fristShowShare) s.GlobalVar.fristShowShare = !1; else if (t) {
var n = JSON.parse(t);
if (n && 10002 == n.activity_id) {
l.default.self.updatePlayerInfo();
return;
}
}
}
f.default.showChecatNode();
}
};
e.prototype.autoShowShare = function(t) {
if (!l.default.self.isBindPhone) return !1;
if (t >= 2 && s.GlobalVar.opendShowShare) {
s.GlobalVar.opendShowShare = !1;
return !0;
}
return !1;
};
e.prototype.autoShowOffLineTask = function() {
if (!l.default.self.isBindPhone) return !1;
if (!l.default.self.isNormalPlayer) return !1;
if (s.GlobalVar.fristShowOfflineTask) {
s.GlobalVar.fristShowOfflineTask = !1;
return !0;
}
};
e.prototype.refreshShareTarValue = function() {
var t = this;
Log.e("refreshShareTarValue");
App.senderManager.get(p.default).Send_ShareGiftPDDInit(function(e) {
Log.e(e);
t.label_ShareTarValue.string = e.data.target;
});
};
e.prototype.showActivity = function() {
if (!l.default.self.isBindPhone) return !1;
if (!s.GlobalVar.fristShowPoster) return !1;
if (s.GlobalVar.poster) {
var t = s.GlobalVar.poster.list;
if (t && t.length > 0) {
t.pop();
return !0;
}
s.GlobalVar.fristShowPoster = !1;
return !1;
}
return !1;
};
return r([ R ], e);
}(h.default));
n.default = C;
cc._RF.pop();
}, {
"../../common/config/ConstString": "ConstString",
"../../common/config/GlobalVar": "GlobalVar",
"../../common/config/HostInfo": "HostInfo",
"../../common/config/User": "User",
"../../common/event/CommonEvent": "CommonEvent",
"../../common/net/CommonSender": "CommonSender",
"../../common/net/HttpSender": "HttpSender",
"../../common/utils/UIUtils": "UIUtils",
"../../framework/core/ui/GameView": "GameView",
"../../framework/defines/Enums": "Enums",
"../../framework/defines/Macros": "Macros",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/SdkManager": "SdkManager",
"../net/LobbyService": "LobbyService",
"./HotUpdate": "HotUpdate",
"./LoginViewNodes": "LoginViewNodes"
} ],
Login: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1bc65AnotxDTr4x34sIE3ah", "Login");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/utils/RandomUtil"), s = t("../../../scripts/framework/componects/EventComponent"), c = t("../../../scripts/framework/core/ui/UIManager"), l = t("../../../scripts/framework/defines/Enums"), u = cc._decorator, p = u.ccclass, d = u.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.play = null;
e.progress = null;
e.bar = null;
return e;
}
e.prototype.addEvents = function() {
var t = this;
this.onN(this.play, l.NodeEvent.click, function() {
t.loading();
});
c.UIManager.newGameTest();
};
e.prototype.loading = function() {
var t = this;
this.play.active = !1;
this.progress.active = !0;
this.bar.fillRange = 0;
cc.tween(this.bar).to(a.RandomUtil.randomFRange(1, 2), {
fillRange: 1
}).call(function() {
t.progress.active = !1;
cc.director.loadScene("slots");
}).start();
};
r([ d(cc.Node) ], e.prototype, "play", void 0);
r([ d(cc.Node) ], e.prototype, "progress", void 0);
r([ d(cc.Sprite) ], e.prototype, "bar", void 0);
return r([ p ], e);
}(s.default);
n.default = f;
cc._RF.pop();
}, {
"../../../scripts/common/utils/RandomUtil": "RandomUtil",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/framework/core/ui/UIManager": "UIManager",
"../../../scripts/framework/defines/Enums": "Enums"
} ],
Macros: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "4031ctCbPFGk4Bhg4c+Z6Ra", "Macros");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Macro = void 0;
var o = t("../plugin/ByteArray");
(function(t) {
t.USING_LITTLE_ENDIAN = o.Endian.BIG_ENDIAN;
t.BUNDLE_RESOURCES = "resources";
t.BUNDLE_REMOTE = "__Remote__Caches__";
t.ENABLE_CHANGE_LANGUAGE = !0;
t.USING_LAN_KEY = "i18n.";
t.ADAPT_SCREEN = "Event_ADAPT_SCREEN";
t.UNKNOWN = "UNKNOWN";
t.ON_CUSTOM_CLOSE = "ON_CUSTOM_CLOSE";
t.MAIN_PACK_BUNDLE_NAME = "main";
t.BUNDLE_Agame = "Agame";
t.BUNDLE_rummy = "rummy";
t.BUNDLE_dragontiger = "dragontiger";
t.BUNDLE_teenpatti = "teenpatti";
t.BUNDLE_teenpatti_Joker = "teenpattiJoker";
t.BUNDLE_teenpatti_AK47 = "teenpattiAK47";
t.BUNDLE_teenpatti_Private = "teenpattiPrivate";
t.BUNDLE_anubis = "anubis";
t.BUNDLE_baccarat3patti = "baccarat3patti";
t.BUNDLE_baccaratab = "baccaratab";
t.BUNDLE_buffalo = "buffalo";
t.BUNDLE_motoracing = "motoracing";
t.BUNDLE_sixdice = "sixdice";
t.BUNDLE_updown7 = "updown7";
t.BUNDLE_StarSlots = "starslots";
t.BUNDLE_TeenPattiSlots = "teenpattislots";
t.BUNDLE_SingleRoulette = "singlelp";
t.BUNDLE_mines = "mines";
t.BUNDLE_Roulette = "rouletteslots";
t.BUNDLE_liondance = "liondance";
t.BUNDLE_carsdrifting = "carsdrifting";
t.BUNDLE_crash = "crash";
t.BUNDLE_minesball = "minesball";
t.BUNDLE_sicbo = "sicbo";
t.BUNDLE_classicfruitslot = "classicfruitslot";
t.BUNDLE_hotchilli = "hotchilli";
t.BUNDLE_LuckyJoker = "luckyjoker";
t.BUNDLE_Halloween = "halloween";
t.BUNDLE_doubledragon = "doubledragon";
t.BUNDLE_ACTIVITY_card = "activitycard";
t.BUNDLE_Loca = "loca";
t.BUNDLE_baccarat = "baccarat";
t.BUNDLE_fortunetiger = "fortunetiger";
t.BUNDLE_invite = "invite";
t.BUNDLE_domino = "domino";
t.BUNDLE_piggybankSlots = "piggybank";
t.BUNDLE_fastfielder = "fastfielder";
t.BUNDLE_Spinstrike = "spinstrike";
t.BUNDLE_SuperWingo = "superwingo";
t.BUNDLE_Lottery7 = "lottery7";
t.BUNDLE_ganeshagold = "ganeshagold";
t.BUNDLE_diwalilights = "diwalilights";
})(n.Macro || (n.Macro = {}));
cc._RF.pop();
}, {
"../plugin/ByteArray": "ByteArray"
} ],
MainController: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3a1b1yNnbZHxYN0g/CgqIEb", "MainController");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./scripts/framework/componects/EventComponent"), s = cc._decorator, c = s.ccclass, l = (s.property, 
s.menu), u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.interval = 0;
e.hideTime = 0;
return e;
}
e.prototype.onLoad = function() {
this.hideEventNode = cc.find("hideEvent", this.node);
t.prototype.onLoad.call(this);
App.onLoad(this.node);
this.onG(cc.game.EVENT_HIDE, this.onEnterBackground);
this.onG(cc.game.EVENT_SHOW, this.onEnterForgeground);
};
e.prototype.update = function() {
App.update(this.node);
};
e.prototype.onDestroy = function() {
App.onDestroy(this.node);
t.prototype.onDestroy.call(this);
};
e.prototype.onEnterBackground = function() {
App.onEnterBackground();
};
e.prototype.onEnterForgeground = function() {
App.onEnterForgeground();
};
return r([ c, l("Quick公共组件/MainController") ], e);
}(a.default);
n.default = u;
cc._RF.pop();
}, {
"./scripts/framework/componects/EventComponent": "EventComponent"
} ],
MainUpdateHandlerImpl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5f62cCswQxE+ouDoVyx8cKC", "MainUpdateHandlerImpl");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MainUpdateHandlerImpl = void 0;
var o = t("../event/CommonEvent"), i = t("../utils/CmmUtils"), r = function() {
function t() {
this.module = null;
this.isResident = !0;
}
t.prototype.onNewVersionFund = function(t) {
t.doUpdate();
};
t.prototype.onUpdateFailed = function() {
var t = i.CmmUtils.string_format_args("downloadFailed:{0}", "main");
App.alert.show({
text: t,
confirmCb: function() {
cc.game.restart();
}
});
};
t.prototype.onPreVersionFailed = function(t) {
this.onUpdateFailed(t);
};
t.prototype.onShowUpdating = function() {};
t.prototype.onNeedUpdateMain = function() {};
t.prototype.onOther = function() {};
t.prototype.onDownloading = function(t, e) {
dispatch(o.HotEvent.DownMainProgress, {
bundle: t.bundle,
info: e
});
};
t.prototype.onAreadyUpToData = function(t) {
App.tips.show("already RemoteVersion" + t.name);
};
t.prototype.onStarCheckUpdate = function() {};
t.prototype.onStartLoadBundle = function() {};
t.prototype.onLoadBundleError = function(t, e) {
App.tips.show("loadFailed:" + t.name);
Log.dump(e, "onLoadBundleError");
cc.game.restart();
};
t.prototype.onLoadBundleComplete = function(t) {
App.entryManager.onLoadBundleComplete(t);
};
t.prototype.onLoadBundle = function() {};
t.prototype.onDownloadComplete = function(t) {
dispatch(o.HotEvent.DownMainComplete, t.bundle);
};
t.prototype.onNeedRestartApp = function(t, e) {
e(!0, !1);
dispatch(o.HotEvent.DownMainComplete, t.bundle);
};
t.module = "【主包热更新】";
return t;
}();
n.MainUpdateHandlerImpl = r;
cc._RF.pop();
}, {
"../event/CommonEvent": "CommonEvent",
"../utils/CmmUtils": "CmmUtils"
} ],
Message: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6b052vqScBHXY8FSCY2FxJ9", "Message");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Message = n.Codec = n.IMessage = void 0;
var r = function() {};
n.IMessage = r;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(r);
n.Codec = a;
var s = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(r);
n.Message = s;
cc._RF.pop();
}, {} ],
Net: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7defc/7Iv1NMaarDPEKXxqf", "Net");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Net = void 0;
(function(t) {
(function(t) {
t[t.Unknown = 0] = "Unknown";
t[t.Json = 1] = "Json";
t[t.Proto = 2] = "Proto";
t[t.BinaryStream = 3] = "BinaryStream";
})(t.ServiceType || (t.ServiceType = {}));
})(n.Net || (n.Net = {}));
cc._RF.pop();
}, {} ],
Process: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "58400Ck+xhNDLE/SZfLVDGQ", "Process");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Process = void 0;
var o = t("../message/DefaultCodec"), i = function() {
function t() {
this.Codec = o.DefaultCodec;
this._listeners = {};
this._masseageQueue = new Array();
this._isDoingMessage = !1;
this.isPause = !1;
this.serviceType = null;
}
t.prototype.pauseMessageQueue = function() {
this.isPause = !0;
};
t.prototype.resumeMessageQueue = function() {
this.isPause = !1;
};
t.prototype.handMessage = function() {
var t, e = this;
if (!this.isPause && !this._isDoingMessage && 0 != this._masseageQueue.length) {
var n = this._masseageQueue.shift();
if (null != n && 0 != n.length) {
this._isDoingMessage = !0;
for (var o = 0, i = 0; i < n.length; i++) {
var r = n[i];
if (r.func instanceof Function) try {
var a = r.func.call(r.target, r.data);
"number" == typeof a && (o = Math.max(o, a));
} catch (t) {
Log.e(t);
}
}
0 == o ? this._isDoingMessage = !1 : null === (t = App.uiManager.mainController) || void 0 === t || t.scheduleOnce(function() {
e._isDoingMessage = !1;
}, o);
}
}
};
t.prototype.onMessage = function(t) {
var e = String(t.cmd);
this._listeners[e] ? this._listeners[e].length <= 0 || this.addMessageQueue(e, t, !0) : Log.w("no find listener data main cmd : " + t.cmd);
};
t.prototype.reset = function() {
this._isDoingMessage = !1;
this._listeners = {};
this._masseageQueue = [];
this.resumeMessageQueue();
};
t.prototype.close = function() {
this._masseageQueue = [];
this._isDoingMessage = !1;
};
t.prototype.addListener = function(t, e, n, o, i) {
var r = t;
if (this._listeners[r]) {
for (var a = !1, s = 0; s < this._listeners[r].length; s++) if (this._listeners[r][s].target === i) {
a = !0;
break;
}
if (a) return;
this._listeners[r].push({
cmd: t,
func: n,
type: e,
isQueue: o,
target: i
});
} else {
this._listeners[r] = [];
this._listeners[r].push({
cmd: t,
func: n,
type: e,
isQueue: o,
target: i
});
}
};
t.prototype.removeListeners = function(t, e) {
if (e) {
var n = this;
Object.keys(this._listeners).forEach(function(o) {
for (var i = n._listeners[o], r = i.length; r--; ) i[r].target == t && i[r].cmd == e && i.splice(r, 1);
0 == i.length && delete n._listeners[o];
});
for (var o = this._masseageQueue.length; o--; ) {
for (var i = (a = this._masseageQueue[o]).length; i--; ) a[i].target == t && a[o].cmd == e && a.splice(i, 1);
0 == a.length && this._masseageQueue.splice(o, 1);
}
} else {
var r = this;
Object.keys(this._listeners).forEach(function(e) {
for (var n = r._listeners[e], o = n.length; o--; ) n[o].target == t && n.splice(o, 1);
0 == n.length && delete r._listeners[e];
});
for (o = this._masseageQueue.length; o--; ) {
var a;
for (i = (a = this._masseageQueue[o]).length; i--; ) a[i].target == t && a.splice(i, 1);
0 == a.length && this._masseageQueue.splice(o, 1);
}
}
};
t.prototype.decode = function() {
return null;
};
t.prototype.addMessageQueue = function(t, e, n) {
if (!(this._listeners[t].length <= 0)) {
for (var o = this._listeners[t], i = [], r = 0; r < o.length; r++) {
var a = e;
if (n) {
(a = this.decode(o[r], e)).mainCmd = e.mainCmd;
a.subCmd = e.subCmd;
}
if (o[r].isQueue) i.push(this.copyListenerData(o[r], a)); else try {
o[r].func && o[r].func.call(o[r].target, a);
} catch (t) {
Log.e(t);
}
}
i.length > 0 && this._masseageQueue.push(i);
}
};
t.prototype.copyListenerData = function(t, e) {
return {
type: t.type,
func: t.func,
isQueue: t.isQueue,
data: e,
target: t.target,
cmd: t.cmd
};
};
return t;
}();
n.Process = i;
cc._RF.pop();
}, {
"../message/DefaultCodec": "DefaultCodec"
} ],
ProtoMessage: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "97022QB+WdBYKJUlkAHn+/q", "ProtoMessage");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ProtoMessageHeartbeat = n.ProtoCodec = n.ProtoMessage = void 0;
var r = t("../Net"), a = t("./Message"), s = function(t) {
i(e, t);
function e(e) {
var n = t.call(this) || this;
n.buffer = null;
n.type = null;
n.data = null;
n.type = e;
return n;
}
e.prototype.encode = function() {
this.buffer = this.type.encode(this.data).finish();
return !!this.buffer;
};
e.prototype.decode = function(t) {
if (t) {
this.buffer = t;
this.data = this.type.decode(this.buffer);
return !0;
}
return !1;
};
return e;
}(a.Message);
n.ProtoMessage = s;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return e;
}(a.Codec);
n.ProtoCodec = c;
var l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.type = r.Net.ServiceType.Proto;
return e;
}(a.Message);
n.ProtoMessageHeartbeat = l;
cc._RF.pop();
}, {
"../Net": "Net",
"./Message": "Message"
} ],
RandomUtil: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6a648Q2y55Ilpl1isDmViBm", "RandomUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.RandomUtil = void 0;
var o = function() {
function t() {}
t.randomString = function(t) {
for (var e = "", n = 0; n < t; n++) e += this._keys[Math.floor((this._keys.length - 1) * Math.random())];
return e;
};
t.randomNumber = function(t) {
return Math.floor(Math.random() * t);
};
t.randomRange = function(e, n) {
var o = t.randomNumber(n - e) + e;
o < e && (o = e);
return o;
};
t.randomFRange = function(t, e) {
var n = Math.random() * (e - t) + t;
n < t && (n = t);
return n;
};
t._keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
return t;
}();
n.RandomUtil = o;
cc._RF.pop();
}, {} ],
ReconnectHandler: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "332fdJoOHVG1YBiCqB4JIAB", "ReconnectHandler");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ReconnectHandler = void 0;
var r = t("../../framework/core/net/service/Handler"), a = t("../../framework/defines/Macros"), s = t("../../sdk/SdkManager"), c = t("../config/Config"), l = function(t) {
i(e, t);
function e(e) {
var n = t.call(this) || this;
n._service = null;
n._enabled = !1;
n._connectCount = 0;
n._maxConnectCount = 3;
n.isConnecting = !1;
n.connectID = 1;
n.connectTimeOutID = 2;
n._service = e;
return n;
}
Object.defineProperty(e.prototype, "module", {
get: function() {
return this.service.module;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "service", {
get: function() {
return this._service;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "data", {
get: function() {
return App.stageData;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "enabled", {
get: function() {
return this._enabled;
},
set: function(t) {
this._enabled = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.reconnect = function() {
if (!this.isInvalid) {
this.service.close();
this.stop();
this.delayConnect();
}
};
e.prototype.stop = function() {
this.stopActions();
this.isConnecting = !1;
this._connectCount = 0;
};
e.prototype.delayConnect = function() {
var t = this;
if (!this.isInvalid) if (this.isConnecting) Log.w(this.service.module + " 正在连接中..."); else {
var e = .3;
if (this._connectCount > 0) {
(e = (this._connectCount + 1) * e) > 3 && (e = 3);
Log.d("" + this.service.module + e + "秒后尝试重连");
}
this.stopAction(this.connectID);
this.delayCall(this.connectID, e, function() {
t.connect();
});
}
};
e.prototype.connect = function() {
var t = this;
if (!this.isInvalid) if (this.data.isLoginStage()) Log.w("重连处于登录界面，停止重连"); else {
this._connectCount++;
if (this._connectCount > this._maxConnectCount) this.showReconnectDialog(); else {
this.service.connect();
this.stopAction(this.connectTimeOutID);
this.delayCall(this.connectTimeOutID, c.Config.RECONNECT_TIME_OUT, function() {
t.connectTimeOut();
});
}
}
};
e.prototype.connectTimeOut = function() {
if (!this.isInvalid) {
this.stopAction(this.connectID);
this.isConnecting = !1;
this.service.close();
this.showReconnectDialog();
}
};
e.prototype.showReconnectDialog = function() {
var t = this;
if (!this.isInvalid) {
Log.d(this.service.module + " 断开");
this.stopAction(this.connectTimeOutID);
"hall" == this.service.module || App.alert.show({
tag: c.Config.RECONNECT_ALERT_TAG,
isRepeat: !1,
text: "Network connection failed, please check the network and try again!",
confirmCb: function() {
t.stop();
App.entryManager.enterBundle(a.Macro.BUNDLE_RESOURCES);
s.default.setOrientation_l();
}
});
}
};
e.prototype.onOpen = function() {
if (!this.isInvalid) {
this._connectCount = 0;
this.isConnecting = !1;
this.stop();
Log.d(this.service.module + "服务器重连成功");
}
};
e.prototype.onClose = function() {
if (!this.isInvalid) {
this.isConnecting = !1;
this.delayConnect();
}
};
e.prototype.onError = function() {
if (!this.isInvalid) {
this.service.close();
this.isConnecting = !1;
this.delayConnect();
}
};
Object.defineProperty(e.prototype, "isInvalid", {
get: function() {
return !(this.service && this.enabled && !this.data.isLoginStage());
},
enumerable: !1,
configurable: !0
});
e.prototype.stopActions = function() {
this.stopAction(this.connectID);
this.stopAction(this.connectTimeOutID);
};
e.prototype.stopAction = function(t) {
cc.Tween.stopAllByTag(t);
};
e.prototype.delayCall = function(t, e, n) {
cc.tween(this).tag(t).delay(e).call(n).start();
};
e.prototype.onDestroy = function() {
this.stopActions();
t.prototype.onDestroy.call(this);
};
return e;
}(r.Handler);
n.ReconnectHandler = l;
cc._RF.pop();
}, {
"../../framework/core/net/service/Handler": "Handler",
"../../framework/defines/Macros": "Macros",
"../../sdk/SdkManager": "SdkManager",
"../config/Config": "Config"
} ],
ResourceLoader: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c2732/K5T1ACJsHnXRUvfbR", "ResourceLoader");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("./Resource"), i = function() {
function t() {
this._resources = new Map();
this._loadedCount = 0;
this._loadedResource = new Map();
this._isLoading = !1;
this._tag = null;
}
Object.defineProperty(t.prototype, "tag", {
get: function() {
return this._tag;
},
set: function(t) {
this._tag = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onLoadComplete", {
get: function() {
return this._onLoadComplete;
},
set: function(t) {
this._onLoadComplete = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onLoadProgress", {
get: function() {
return this._onLoadProgress;
},
set: function(t) {
this._onLoadProgress = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "getLoadResources", {
get: function() {
return this._getLoadResource;
},
set: function(t) {
this._getLoadResource = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.loadResources = function() {
var t = this;
if (this.getLoadResources) {
var e = this.getLoadResources();
if (e) if (e.length <= 0) this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE); else if (this._isLoading) this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.LOADING); else if (this._resources.size > 0 && this.isLoadComplete()) {
this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.SUCCESS);
this.onLoadResourceComplete();
} else {
this._isLoading = !0;
e.forEach(function(e) {
e.url ? t._resources.set(e.url, e) : e.dir ? t._resources.set(e.dir, e) : e.preloadView && t._resources.set(e.preloadView.getPrefabUrl(), e);
});
this._loadedCount = 0;
this._resources.forEach(function(e) {
e.preloadView ? App.uiManager.preload(e.preloadView, e.bundle).then(function(n) {
var i = new o.Resource.CacheData();
i.isLoaded = !0;
i.data = n;
e.preloadView && (i.info.url = e.preloadView.getPrefabUrl());
i.info.bundle = e.bundle;
t._onLoadResourceComplete(i);
}) : e.dir ? App.asset.loadDir(e.bundle, e.dir, e.type, null, t._onLoadResourceComplete.bind(t)) : App.asset.load(e.bundle, e.url, e.type, null, t._onLoadResourceComplete.bind(t));
});
} else this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE);
} else this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE);
};
t.prototype.unLoadResources = function() {
this._unLoadResources();
};
t.prototype._unLoadResources = function() {
var t = this;
if (this._isLoading || this._resources.size <= 0) this._isLoading && Log.d("resources is loading , waiting for unload!!!"); else {
this._resources.size > 0 && this._resources.forEach(function(e) {
if (e.url) {
if (t._loadedResource.has(e.url)) {
(n = t._loadedResource.get(e.url)) && App.asset.releaseAsset(n);
t._loadedResource.delete(e.url);
}
} else if (e.dir && t._loadedResource.has(e.dir)) {
var n;
(n = t._loadedResource.get(e.dir)) && App.asset.releaseAsset(n);
t._loadedResource.delete(e.dir);
}
});
this._isLoading = !1;
this._loadedCount = 0;
this._resources.clear();
}
};
t.prototype._onLoadResourceComplete = function(t) {
this._loadedCount++;
if (this._onLoadProgress) {
this._loadedCount > this._resources.size && (this._loadedCount = this._resources.size);
this._onLoadProgress(this._loadedCount, this._resources.size, t);
}
if (t && (Array.isArray(t.data) || t.data instanceof cc.Asset)) {
var e = new o.Resource.Info();
e.url = t.info.url;
e.type = t.info.type;
e.data = t.data;
e.bundle = t.info.bundle;
App.asset.retainAsset(e);
this._loadedResource.set(e.url, e);
}
this.checkLoadResourceComplete();
};
t.prototype.checkLoadResourceComplete = function() {
if (this.isLoadComplete()) {
this._isLoading = !1;
this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.SUCCESS);
this.onLoadResourceComplete();
}
};
t.prototype.onLoadResourceComplete = function() {};
t.prototype.isLoadComplete = function() {
return this._loadedCount >= this._resources.size;
};
return t;
}();
n.default = i;
cc._RF.pop();
}, {
"./Resource": "Resource"
} ],
Resource: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c41edAZb7FKMK3lJVdZR6iI", "Resource");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Resource = void 0;
(function(t) {
var e, n;
(function(t) {
t[t.LOADING = 0] = "LOADING";
t[t.NO_FOUND_LOAD_RESOURCE = 1] = "NO_FOUND_LOAD_RESOURCE";
t[t.SUCCESS = 2] = "SUCCESS";
})(t.LoaderError || (t.LoaderError = {}));
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.WAITTING_FOR_RELEASE = 1] = "WAITTING_FOR_RELEASE";
})(e = t.CacheStatus || (t.CacheStatus = {}));
(function(t) {
t[t.Local = 0] = "Local";
t[t.Remote = 1] = "Remote";
})(n = t.Type || (t.Type = {}));
var o = function() {
this.url = "";
this.type = null;
this.data = null;
this.retain = !1;
this.bundle = null;
this.resourceType = n.Local;
this.stamp = null;
};
t.Info = o;
var i = function() {
function t() {
this.isLoaded = !1;
this.data = null;
this.info = new o();
this.status = e.NONE;
this.getCb = [];
this.finishCb = [];
}
t.prototype.doGet = function(t) {
for (var e = 0; e < this.getCb.length; e++) this.getCb[e] && this.getCb[e](t);
this.getCb = [];
};
t.prototype.doFinish = function(t) {
for (var e = 0; e < this.finishCb.length; e++) this.finishCb[e] && this.finishCb[e](t);
this.finishCb = [];
};
Object.defineProperty(t.prototype, "isInvalid", {
get: function() {
return this.isLoaded && this.data && !cc.isValid(this.data);
},
enumerable: !1,
configurable: !0
});
return t;
}();
t.CacheData = i;
})(n.Resource || (n.Resource = {}));
cc._RF.pop();
}, {} ],
RollElement: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "886b8ppVGJMGaUU4NnsNa6n", "RollElement");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../scripts/common/enum/GlobalEnum"), s = t("./ElementState/ElementState"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.defautl = a.GlobalEnum.ElementState.Normal;
return e;
}
e.prototype.init = function(t) {
this.rollConfig = t;
this.elementIns = [];
for (var e = this.node.children, n = 0; n < e.length; n++) this.elementIns.push(e[n].getComponent(s.default));
for (n = 0; n < this.elementIns.length; n++) this.elementIns[n].init(t);
};
e.prototype.setDefault = function() {
this.setState(this.defautl);
};
e.prototype.setState = function(t) {
this.curElement ? this.curElement.show(t) : console.error("没有钙元素" + t);
};
e.prototype.setRes = function(t) {
for (var e = 0; e < this.elementIns.length; e++) this.elementIns[e].hide();
this.curElement = this.elementIns[t];
this.rollConfig.turnType ? this.curElement.show(a.GlobalEnum.ElementState.BlurTrun) : this.curElement.show(a.GlobalEnum.ElementState.Turn);
};
r([ u({
type: cc.Enum(a.GlobalEnum.ElementState)
}) ], e.prototype, "defautl", void 0);
return r([ l ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"./ElementState/ElementState": "ElementState"
} ],
SdkCallBack: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "81db5JZuylKSK0fDmJz1vOZ", "SdkCallBack");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../common/config/ConstString"), i = t("../common/config/User"), r = t("../common/event/CommonEvent"), a = t("../common/net/CommonSender"), s = t("./SdkManager"), c = function() {
function t() {}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.SDK_LoginCallback = function(t) {
Log.d("Android To JS --\x3e SDK_LoginCallback:" + t);
try {
var e = JSON.parse(t);
Log.d("googleLoginData.state = " + e.state);
Log.d("googleLoginData.userId = " + e.userId);
Log.d("googleLoginData.token = " + e.token);
if (0 == e.state) Log.d("googleSignIn 登录成功 "); else if (1 == e.state) Log.d("googleSignIn 取消登录 "); else if (2 == e.state) {
Log.d("googleSignIn 登录异常");
return;
}
} catch (t) {}
};
t.prototype.GetGoogleIDOver_Callback = function(t) {
Log.d("Android To JS --\x3e Android Get GoogleID = " + t);
};
t.prototype.SavepicCallBack = function(t) {
Log.d("Android To JS --\x3e Android Save Pic State = " + t);
JSON.parse(t).code ? Log.d("Android To JS --\x3e Android Save Pic State is Success") : Log.d("Android To JS --\x3e Android Save Pic State is False");
};
t.prototype.ChoosePhoto_Callback = function(t) {
Log.d("Android To JS --\x3e Android ChoosePhoto :" + t);
};
t.prototype.SaveInviteCode = function(t) {
Log.d("Android To JS --\x3e Adjust inviteCode :" + t);
};
t.prototype.AgentOpenPaymentCallBack = function(t) {
Log.d("Android To JS --\x3e AgentSDK调过来的充值，商品ID = " + t);
App.senderManager.get(a.default).Send_payMoney(Number.parseInt(t), 0);
};
t.prototype.UnreadMessageForAIHelp = function(t) {
Log.d("Android To JS --\x3e AIHelp Count = " + t);
};
t.prototype.BatteryDataCallback = function(t) {
Log.d("Android To JS --\x3e BatteryData = " + t);
};
t.prototype.InstallReferrerCallBack = function(t) {
Log.d("Android To JS --\x3e InstallReferrerCallBack---------------\x3e" + t);
};
t.prototype.CallUnityupdateApplicationCallBack = function(t) {
Log.d("Android To JS --\x3e updateApplicationResult---------------\x3e" + t);
};
t.prototype.UploadAppsFlyerInstallData = function(t) {
Log.d("Android To JS --\x3e UploadAppsFlyerInstallData---------------\x3e" + t);
};
t.prototype.ReportedActivateDataCallback = function(t) {
Log.d("Android To JS --\x3e 安卓冷启动数据---------------\x3e" + t);
var e = App.storage.getItem(o.ConstString.coolData);
if (e && "" != e) this.coolData = JSON.parse(e); else if (t && "" != t) {
this.coolData = JSON.parse(t);
App.storage.setItem(o.ConstString.coolData, t);
}
App.senderManager.get(a.default).Send_Activate(t);
};
t.prototype.SaveOnLinkInviteCode = function(t) {
App.storage.setItem(o.ConstString.saveOneLinkInviteCode, t);
Log.e("deeplink svae:" + t);
};
t.prototype.CallFBShareBack = function(t) {
Log.e("zzzzzzzzzzzzzzzzzzzzzzzzzz测试:" + t);
};
t.prototype.CallRefreshPlayerInfo = function(t) {
Log.e("zzzzzzzzzzzzzzzzzzzzzzzzzz更新playerinfo" + t);
s.default.setOrientation_l();
dispatch(r.CommonEvent.BackToHall);
i.default.self.updatePlayerInfo(function() {
dispatch(r.CommonEvent.Show_Hall);
});
};
t.prototype.AdmobFinishVideoCallBack = function(t) {
Log.e("----------AdmobFinishVideoCallBack:" + t);
dispatch(r.SdkEvent.SdkEvent_finish_video_back, t);
};
t.prototype.CallAndroidCallBackHome = function(t) {
Log.e("----------AndroidCallBackHome:" + t);
App.globalAudio.playButtonClick();
};
t.prototype.CallAndroidCallPlayAudio = function(t) {
Log.e("----------CallAndroidCallPlayAudio:" + t);
App.globalAudio.playButtonClick();
};
t.prototype.CallCocosAdReward = function() {
dispatch(r.SdkEvent.SdkEvent_finish_video_back);
};
t._instance = null;
return t;
}();
n.default = c;
window.SdkCallBack = c.getInstance();
cc._RF.pop();
}, {
"../common/config/ConstString": "ConstString",
"../common/config/User": "User",
"../common/event/CommonEvent": "CommonEvent",
"../common/net/CommonSender": "CommonSender",
"./SdkManager": "SdkManager"
} ],
SdkManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ec70dPSIyZHi4vccJg01+w7", "SdkManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../common/config/ConstString"), i = t("../common/config/GlobalVar"), r = t("../common/enum/GlobalEnum"), a = t("./AppInfo"), s = t("../common/event/CommonEvent"), c = t("./SdkCallBack"), l = function() {
function e() {}
e.getGameConfig = function() {
var t = null;
if (a.default.isAndroid) {
t = jsb.reflection.callStaticMethod(this.javaName_sdk, "getGameConfig", "()Ljava/lang/String;");
Log.d("========AD获取设备数据:", t);
} else if (a.default.isIOS) {
t = jsb.reflection.callStaticMethod(this.iosName_sdk, "getGameConfig:", "");
Log.d("========IOS获取设备数据:", t);
}
return t || "{}";
};
e.UploadInstallData = function() {
Log.d("Js Call Android Prev: GetAdjust上报");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "ReportedActivateData", "(Ljava/lang/String;)V", a.default.getChannelId().toString());
Log.d("Js Call Android After: GetAdjust上报");
}
};
e.InitGoogleSignInManager = function(t) {
Log.d("Js Call Android Prev: InitGoogleSignIn");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "InitGoogleSDK", "(Ljava/lang/String;)V", t);
Log.d("Js Call Android After: InitGoogleSignIn");
}
};
e.checkVPN = function() {
Log.d("Js Call Android Prev: checkVPN");
var t = "0";
if (a.default.isAndroid) {
t = jsb.reflection.callStaticMethod(this.javaName_sdk, "checkVPN", "()Ljava/lang/String;");
Log.d("Js Call Android After: checkVPN = " + t);
} else if (a.default.isIOS) {
t = jsb.reflection.callStaticMethod(this.iosName_sdk, "checkVPN:", "");
Log.d("Js Call Android After: checkVPN = " + t);
} else cc.sys.isBrowser;
return t;
};
e.getCountry = function() {
Log.d("Js Call Android Prev: getCountry");
var t = App.storage.getItem(o.ConstString.simData);
if (!t || "" == t) if (a.default.isAndroid) {
t = jsb.reflection.callStaticMethod(this.javaName_sdk, "getCountryCode", "()Ljava/lang/String;");
App.storage.setItem(o.ConstString.simData, t);
Log.d("Js Call Android After: getCountry = " + t);
} else a.default.isIOS ? t = i.GlobalVar.countryCode + "" : cc.sys.isBrowser;
return t;
};
e.getDeviceId = function() {
var e = App.storage.getItem(o.ConstString.deviceIdKey), n = this.getGoogleID();
if (n) {
e = n;
Log.d(">>获取设备googleid:", e, "; googleid=", n);
} else {
if (e && e.length) {
Log.d(">>缓存设备id:", e);
return e;
}
var i = new Date().getTime() + "" + Math.random();
e = t("md5")(i);
Log.d(">>随机设备id:", e, "; temp=", i);
}
App.storage.setItem(o.ConstString.deviceIdKey, e);
return e;
};
e.getFirebaseAppInstanceId = function() {
if (this._ios_firebaseid) return this._ios_firebaseid;
Log.d("Js Call Android Prev: getFirebaseAppInstanceId");
var t = "";
if (a.default.isAndroid) {
t = jsb.reflection.callStaticMethod(this.javaName_sdk, "getFireBaseAppInstanceId", "()Ljava/lang/String;");
Log.d("Js Call Android After: getFirebaseAppInstanceId = " + t);
return t;
}
a.default.isIOS;
return t;
};
e.getGoogleID = function() {
Log.d("Js Call Android Prev: getGoogleID");
if (this._ios_idfa) return this._ios_idfa;
var t = null;
if (a.default.isAndroid) {
t = jsb.reflection.callStaticMethod(this.javaName_sdk, "getGoogleId", "()Ljava/lang/String;");
Log.d("Js Call Android After: getGoogleID = " + t);
} else if (a.default.isIOS) {
t = jsb.reflection.callStaticMethod(this.iosName_sdk, "getIDFA:", "");
Log.d("Js Call Android After: getIDFA = " + t);
} else cc.sys.isBrowser;
return t;
};
e.getAdjustAdid = function() {
if (this._ios_adjustid) return this._ios_adjustid;
if (this._adjustAdid) return this._adjustAdid;
if (a.default.isAndroid) {
this._adjustAdid = jsb.reflection.callStaticMethod(this.javaName_sdk, "getAdid", "()Ljava/lang/String;");
Log.d("Js Call Android After: getAdjustAdid = " + this._adjustAdid);
} else if (a.default.isIOS) {
this._adjustAdid = jsb.reflection.callStaticMethod(this.iosName_sdk, "getAdid:", "");
Log.d("Js Call IOS After: getAdjustAdid = " + this._adjustAdid);
}
return this._adjustAdid;
};
e.GetAppsFlyerId = function() {
Log.d("Js Call Android Prev: GetAppsFlyerId");
if (this._afid) return this._afid;
if (a.default.isAndroid) {
this._afid = jsb.reflection.callStaticMethod(this.javaName_sdk, "GetAppsFlyerId", "()Ljava/lang/String;");
Log.d("Js Call Android After: GetAppsFlyerId = " + this._afid);
} else if (a.default.isIOS) {
this._afid = jsb.reflection.callStaticMethod(this.iosName_sdk, "GetAppsFlyerId:", "");
Log.d("Js Call IOS After: GetAppsFlyerId = " + this._afid);
}
return this._afid;
};
e.getIdfa = function() {
if (this._idfa.indexOf("000000")) {
var e = new Date().getTime() + "" + Math.random();
this._idfa = t("md5")(e);
Log.d(">>随机设备id:", this._idfa, "; temp=", e);
}
return this._idfa;
};
e.getPkgId = function() {
Log.d("Js Call Android Prev: getPkgId");
if (a.default.isAndroid) {
var t = jsb.reflection.callStaticMethod(this.javaName_sdk, "PkgID", "()Ljava/lang/String;");
Log.d("Js Call Android After: getPkgId = " + t);
return t;
}
a.default.isIOS;
return "";
};
e.google_Login = function() {
Log.d("Js Call Android Prev: google_Login");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "google_Login", "()V");
Log.d("Js Call Android After: google_Login");
}
};
e.SDK_LoginOut = function() {
Log.d("Js Call Android Prev: GoogleSignOut");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "google_LoginOut", "()V");
Log.d("Js Call Android After: GoogleSignOut");
}
};
e.setClipboardContent = function(t) {
App.globalAudio.playButtonClick();
Log.d("Js Call Android Prev: copy");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "copy", "(Ljava/lang/String;)Z", t);
Log.d("Js Call Android After: copy");
} else {
if (!a.default.isIOS) {
if (!t || "" == t) return App.tips.show("is empty");
if (!document.queryCommandSupported("copy")) {
App.tips.show("not support!");
return;
}
var e = document.createElement("textarea");
e.value = t;
document.body.appendChild(e);
e.select();
e.setSelectionRange(0, t.length);
document.execCommand("copy") || App.tips.show("not support!");
e.remove();
return;
}
jsb.reflection.callStaticMethod(this.iosName_sdk, "copy:", t);
}
};
e.openUrl = function(t) {
a.default.isAndroid && a.default.isSupportOpenAndroidUrl() ? jsb.reflection.callStaticMethod(this.javaName_sdk, "openUrl", "(Ljava/lang/String;)V", t) : cc.sys.openURL(t);
};
e.openWebView = function(t) {
a.default.isAndroid && jsb.reflection.callStaticMethod(this.javaName_sdk, "OpenWebView", "(Ljava/lang/String;)V", t);
};
e.CheckIsSimulator = function() {
Log.d("Js Call Android Prev: CheckIsSimulator");
var t = "0";
if (a.default.isAndroid) {
t = jsb.reflection.callStaticMethod(this.javaName_sdk, "checkSimulator", "()Ljava/lang/String;");
Log.d("Js Call Android 安卓检查是否为模拟器-----\x3e" + t);
}
return t;
};
e.LogPurchaseEvent_Firebase = function(t, e) {
Log.d("Js Call Android Prev: LogPurchaseEvent_Firebase");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "logPurchaseEvent_Firebase", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
Log.d("Js Call Android After: LogPurchaseEvent_Firebase");
}
};
e.updateApplication = function(t) {
Log.d("Js Call Android Prev: updateApplication");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "updateApplication", "(Ljava/lang/String;)V", t);
Log.d("Js Call Android After: updateApplication");
}
};
e.StopShakePhone = function() {
a.default.isAndroid;
};
e.shareFacebook = function(t) {
Log.d("Js Call Android Prev: shareFacebook:" + t);
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "shareFacebook", "(Ljava/lang/String;)V", t);
Log.d("Js Call Android After: shareFacebook");
}
};
e.SetAppsFlyerCustomerID = function(t) {
if (i.GlobalVar.des == r.GlobalEnum.ChannelDes.c4_N) {
Log.d("Js Call Android Prev: SetAppsFlyerCustomerID:" + t);
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "SetAppsFlyerCustomerID", "(Ljava/lang/String;)V", t);
Log.d("Js Call Android After: SetAppsFlyerCustomerID");
}
}
};
e.GetUrlData = function() {
var t;
Log.d("Js Call Android Prev: GetUrlData:" + t);
if (a.default.isAndroid) {
t = jsb.reflection.callStaticMethod(this.javaName_sdk, "GetUrlData", "()Ljava/lang/String;");
Log.d("Js Call Android After: GetUrlData:" + t);
} else if (a.default.isIOS) {
t = jsb.reflection.callStaticMethod(this.iosName_sdk, "GetUrlData:", "");
Log.d("========IOS获取url:", t);
}
return t;
};
e.getHttpId = function() {
if (a.default.isAndroid) {
e.httpId = jsb.reflection.callStaticMethod(this.javaName_sdk, "getHttpId", "()Ljava/lang/String;");
Log.d("Js Call Android After: getHttpId:" + e.httpId);
}
return e.httpId;
};
e.showCSRDialog = function(t) {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "showCSRDialog", "(Ljava/lang/String;)V", t) : a.default.isIOS;
};
e.chooseAudioPath = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "chooseAudioPath", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "chooseAudioPath:", "");
};
e.playLocalAudio = function() {
var t = App.storage.getItem(o.ConstString.localBgmPath, "");
Log.e("播放music" + t);
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "playLocalAudio", "(Ljava/lang/String;)V", t);
Log.d("Js Call Android After: playLocalAudio");
} else a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "playLocalAudio:", t);
};
e.pauseLocalAudio = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "pauseLocalAudio", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "pauseLocalAudio:", "");
};
e.resumeLocalAudio = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "resumeLocalAudio", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "resumeLocalAudio:", "");
};
e.stopLocalAudio = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "stopLocalAudio", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "stopLocalAudio:", "");
};
e.openPhoto = function() {
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "openPhotoAlbum", "()V");
Log.d("Js Call Android After: openPhotoAlbum:");
} else a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "openPhotoAlbum:", "");
};
e.sendThirdMessage = function(t, e) {
if (a.default.isAndroid) {
e = e.replace("+", "");
jsb.reflection.callStaticMethod(this.javaName_sdk, "earnLogin", "(Ljava/lang/String;Ljava/lang/String;)V", t, e);
Log.d("Js Call Android After: earnLogin:");
}
};
e.setOrientation_l = function() {
dispatch(s.CommonEvent.TopBlackNode, !1);
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "setOrientation_l", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "setOrientation_l:", "");
cc.view.setDesignResolutionSize(1600, 750, cc.ResolutionPolicy.SHOW_ALL);
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
this.isP = !1;
dispatch(s.ComponentGameEvent.UpdateScreenSize);
};
e.setOrientation_p = function(t) {
dispatch(s.CommonEvent.TopBlackNode, !0);
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "setOrientation_p", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "setOrientation_p:", "");
e.setAspect(t);
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
this.isP = !0;
dispatch(s.ComponentGameEvent.UpdateScreenSize);
};
e.ExitSingleGame = function() {
window.opener && window.close();
};
e.initAdmob = function() {
Log.e("Js Call Android Prev: initAdmob");
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "initAdmob", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "initAdmob:", "");
};
e.showInterstitial = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "showInterstitial", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "showInterstitial:", "");
};
e.showRewardedAd = function(t) {
this.rewardTag = t || "";
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "showRewardedAd", "()V") : a.default.isIOS ? jsb.reflection.callStaticMethod(this.iosName_sdk, "showRewardedAd:", "") : c.default.getInstance().CallCocosAdReward("");
};
e.isReadyRewardedAd = function() {
return a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "isReadyRewardedAd", "()Z") : !!a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "isReadyRewardedAd:", "()Z");
};
e.getScreenSize = function() {
var t = cc.view.getDesignResolutionSize().width, e = cc.view.getDesignResolutionSize().height;
return cc.size(t, e);
};
e.getSizeRate = function() {
var t = cc.view.getFrameSize().height, e = cc.view.getFrameSize().width, n = (t > e ? t : e) / (t < e ? t : e);
return {
curRate: 1600 / 750 / n,
curAspect: n,
isPad: n < 1334 / 750
};
};
e.setAspect = function() {
var t = e.getSizeRate();
if (a.default.isWindowBrowser) {
cc.view.setDesignResolutionSize(750, 1334, cc.ResolutionPolicy.FIXED_HEIGHT);
e.ResolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
} else {
var n = cc.view.getFrameSize().height, o = cc.view.getFrameSize().width;
if (t.curRate > 1) if (t.isPad) {
cc.view.setDesignResolutionSize(750, 1334, cc.ResolutionPolicy.FIXED_HEIGHT);
e.ResolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
} else {
n > o ? cc.view.setDesignResolutionSize(750, 750 / o * n, cc.ResolutionPolicy.NO_BORDER) : cc.view.setDesignResolutionSize(750, 750 / n * o, cc.ResolutionPolicy.NO_BORDER);
e.ResolutionPolicy = cc.ResolutionPolicy.NO_BORDER;
} else {
var i = 1600 / t.curRate;
cc.view.setDesignResolutionSize(750, i, cc.ResolutionPolicy.FIXED_WIDTH);
e.ResolutionPolicy = cc.ResolutionPolicy.FIXED_WIDTH;
}
}
};
e.getStatusBarHeight = function() {
var t = 0;
if (a.default.isAndroid) {
(t = jsb.reflection.callStaticMethod(this.javaName_sdk, "getStatusBarHeight", "()I")) || (t = 0);
Log.d("Js Call Android After: getStatusBarHeight:" + t);
} else if (a.default.isIOS) {
t = jsb.reflection.callStaticMethod(this.iosName_sdk, "getStatusBarHeight:", "");
Log.d("Js Call IOS After: getStatusBarHeight:" + t);
} else t = 0;
return t / cc.view.getFrameSize().height * cc.view.getDesignResolutionSize().height;
};
e.getHalfBarHeight = function() {
return .5 * e.getStatusBarHeight();
};
e.javaName_sdk = "org/cocos2dx/javascript/SDKManager";
e.iosName_sdk = "SdkManager";
e.httpId = "0";
e.channelID = 3928880;
e.appID = 100;
e.verCode = "5.0.0";
e.ResolutionPolicy = cc.ResolutionPolicy.SHOW_ALL;
e._adjustAdid = "";
e._afid = "";
e._idfa = "";
e.isP = !0;
e.rewardTag = "";
return e;
}();
n.default = l;
cc._RF.pop();
}, {
"../common/config/ConstString": "ConstString",
"../common/config/GlobalVar": "GlobalVar",
"../common/enum/GlobalEnum": "GlobalEnum",
"../common/event/CommonEvent": "CommonEvent",
"./AppInfo": "AppInfo",
"./SdkCallBack": "SdkCallBack",
md5: 17
} ],
SenderManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5593eRtoWxF2IKSjeo3KXj3", "SenderManager");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SenderManager = void 0;
var r = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = null;
return e;
}
e.module = "【Sender管理器】";
return e;
}(t("../../../utils/SingletonT").SingletonT);
n.SenderManager = r;
cc._RF.pop();
}, {
"../../../utils/SingletonT": "SingletonT"
} ],
Sender: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7d4f4M66PdIs4/CMJGvQmLa", "Sender");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Sender = void 0;
var r = t("../../event/EventProcessor"), a = t("../../../defines/Macros"), s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = "";
return e;
}
e.prototype.send = function(t) {
this.service && this.service.send && this.service.send(t);
};
e.prototype.debug = function() {
Log.d(this.module);
};
e.prototype.destory = function() {
this.onDestroy();
};
e.prototype.init = function() {
this.onLoad();
};
e.module = a.Macro.UNKNOWN;
return e;
}(r.EventProcessor);
n.Sender = s;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../event/EventProcessor": "EventProcessor"
} ],
ServerConnector: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "325034GFixIs5aVKWJNRCJu", "ServerConnector");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ServerConnector = void 0;
var o = t("./WebSocketClient"), i = function() {
function t() {
this._wsClient = null;
this._sendHartId = -1;
this._curRecvHartTimeOutCount = 0;
this._enabled = !0;
this._wsClient = new o.default();
this._wsClient.onClose = this.onClose.bind(this);
this._wsClient.onError = this.onError.bind(this);
this._wsClient.onMessage = this.onMessage.bind(this);
this._wsClient.onOpen = this.onOpen.bind(this);
}
t.prototype.getMaxHeartbeatTimeOut = function() {
return 5;
};
t.prototype.getHeartbeatInterval = function() {
return 3e4;
};
t.prototype.isHeartBeat = function() {
return !1;
};
t.prototype.onOpen = function() {
this.recvHeartbeat();
this.stopSendHartSchedule();
this.startSendHartSchedule();
};
t.prototype.onClose = function() {
this.stopSendHartSchedule();
};
t.prototype.onError = function() {
this.stopSendHartSchedule();
};
t.prototype.onMessage = function() {
this.recvHeartbeat();
};
t.prototype.recvHeartbeat = function() {
this._curRecvHartTimeOutCount = 0;
};
Object.defineProperty(t.prototype, "enabled", {
get: function() {
return this._enabled;
},
set: function(t) {
this._enabled = t;
0 == t && this.close();
},
enumerable: !1,
configurable: !0
});
t.prototype.connect_server = function(t, e, n) {
void 0 === e && (e = null);
void 0 === n && (n = "wss");
this.enabled && (e ? "string" == typeof e && e.length > 0 ? this._wsClient && this._wsClient.initWebSocket(t, e, n) : "number" == typeof e && e > 0 ? this._wsClient && this._wsClient.initWebSocket(t, e.toString(), n) : this._wsClient && this._wsClient.initWebSocket(t, null, n) : this._wsClient && this._wsClient.initWebSocket(t, null, n));
};
t.prototype.stopSendHartSchedule = function() {
if (-1 != this._sendHartId) {
clearInterval(this._sendHartId);
this._sendHartId = -1;
}
};
t.prototype.startSendHartSchedule = function() {
var t = this;
this._sendHartId = setInterval(function() {
t._curRecvHartTimeOutCount = t._curRecvHartTimeOutCount + 1;
if (t._curRecvHartTimeOutCount > t.getMaxHeartbeatTimeOut()) {
t.stopSendHartSchedule();
t.onHeartbeatTimeOut();
} else t.sendHeartbeat();
}, t.getHeartbeatInterval());
};
t.prototype.sendBuffer = function(t) {
this._wsClient && this._wsClient.send(t);
};
t.prototype.close = function(t) {
void 0 === t && (t = !1);
this.stopSendHartSchedule();
this._wsClient && this._wsClient.close(t);
};
Object.defineProperty(t.prototype, "isConnected", {
get: function() {
return !!this._wsClient && this._wsClient.isConnected;
},
enumerable: !1,
configurable: !0
});
return t;
}();
n.ServerConnector = i;
cc._RF.pop();
}, {
"./WebSocketClient": "WebSocketClient"
} ],
ServiceManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "195e3JngMBC6KT42cPw9G2N", "ServiceManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ServiceManager = void 0;
var o = t("../../../defines/Macros"), i = function() {
function t() {
this.module = null;
this.services = [];
this.waitReconnect = [];
this.curReconnect = void 0;
}
t.prototype.get = function(t, e) {
void 0 === e && (e = !1);
var n = this.getModule(t);
if (n == o.Macro.UNKNOWN) return null;
var i = this.getService(n);
if (i) return i;
if ("string" != typeof t && e) {
(i = new t()).module = n;
this.services.push(i);
return i;
}
return null;
};
t.prototype.destory = function(t) {
if (t) {
for (var e = this.getModule(t), n = this.services.length; n--; ) if (this.services[n].module == e) {
this.services[n].close();
this.services[n].destory();
this.services.splice(n, 1);
}
} else this.clear();
};
t.prototype.clear = function(t) {
for (var e = this.services.length; e--; ) if (!this.isInExclude(this.services[e], t)) {
this.services[e].close();
this.services[e].destory();
this.services.splice(e, 1);
}
};
t.prototype.isInExclude = function(t, e) {
if (!e) return !1;
for (var n = 0; n < e.length; n++) if (this.getModule(e[n]) == t.module) return !0;
return !1;
};
t.prototype.getModule = function(t) {
o.Macro.UNKNOWN;
return "string" == typeof t ? t : t.module;
};
t.prototype.onDestroy = function() {
this.clear();
};
t.prototype.update = function() {
this.services.forEach(function(t) {
t && t.handMessage();
});
};
t.prototype.close = function() {
this.services.forEach(function(t) {
t && t.close();
});
};
t.prototype.onLoad = function() {};
t.prototype.onError = function(t, e) {
Log.d(e.module + " 网络错误!!!");
!this.isWaiReconnect(e) && e.reconnectHandler && e.reconnectHandler.enabled && this.waitReconnect.push(e);
this.sortWait();
if (this.curReconnect) this.curReconnect == e && e.reconnectHandler && e.reconnectHandler.enabled && e.reconnectHandler.onError(t); else for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.onError(t);
break;
}
this.curReconnect = void 0;
}
};
t.prototype.onClose = function(t, e) {
if (t.type != o.Macro.ON_CUSTOM_CLOSE) {
Log.d(e.module + " 网络关闭!!!");
!this.isWaiReconnect(e) && e.reconnectHandler && e.reconnectHandler.enabled && this.waitReconnect.push(e);
this.sortWait();
if (this.curReconnect) this.curReconnect == e && e.reconnectHandler && e.reconnectHandler.enabled && e.reconnectHandler.onClose(t); else for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.onClose(t);
break;
}
this.curReconnect = void 0;
}
} else Log.d(e.module + " 应用层主动关闭Socket");
};
t.prototype.onOpen = function(t, e) {
for (var n = !1, o = 0; o < this.waitReconnect.length; o++) if (this.waitReconnect[o] == e) {
e.reconnectHandler && e.reconnectHandler.onOpen(t);
n = !0;
this.waitReconnect.splice(o, 1);
break;
}
!n && e && e.reconnectHandler && e.reconnectHandler.enabled && e.reconnectHandler.onOpen(t);
Log.d(e.module + "重连成功...");
this.curReconnect = void 0;
for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.reconnect();
Log.d(this.curReconnect.module + "进入重连...");
break;
}
this.curReconnect = void 0;
}
this.curReconnect || App.uiReconnect.hide();
};
t.prototype.onEnterBackground = function() {
this.services.forEach(function(t) {
t.onEnterBackground();
});
};
t.prototype.onEnterForgeground = function(t) {
this.services.forEach(function(e) {
e.onEnterForgeground(t);
});
};
t.prototype.reconnect = function(t) {
!this.isWaiReconnect(t) && t.reconnectHandler && t.reconnectHandler.enabled && this.waitReconnect.push(t);
this.sortWait();
if (this.curReconnect) {
if (this.waitReconnect.length > 1 && this.waitReconnect[0] != this.curReconnect) {
if (this.curReconnect.reconnectHandler && this.curReconnect.reconnectHandler.enabled && this.curReconnect.reconnectHandler.isConnecting) {
Log.w("优先级低的网络正常连接中 : " + this.curReconnect.module + ",正在连接中，将不会按照优先级进行重连");
return;
}
!this.isWaiReconnect(t) && t.reconnectHandler && t.reconnectHandler.enabled && this.waitReconnect.push();
this.sortWait();
Log.w("当前网络:" + this.curReconnect.module + "不是优先级最高的，将为您重新切换到优先级高的网络进行重连!!!");
this.curReconnect = void 0;
for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
Log.w("已为您切换优先级高的:" + this.curReconnect.module + "进行重连!!!");
this.curReconnect.reconnectHandler.reconnect();
break;
}
this.curReconnect = void 0;
}
}
this.curReconnect == t && t.reconnectHandler && t.reconnectHandler.enabled && t.reconnectHandler.reconnect();
} else for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.reconnect();
break;
}
this.curReconnect = void 0;
}
};
t.prototype.sortWait = function() {
this.waitReconnect.length >= 1 && this.waitReconnect.sort(function(t, e) {
return e.priority - t.priority;
});
};
t.prototype.getService = function(t) {
for (var e = 0; e < this.services.length; e++) if (this.services[e].module == t) return this.services[e];
return null;
};
t.prototype.isWaiReconnect = function(t) {
return -1 != this.waitReconnect.indexOf(t);
};
t.prototype.debug = function() {
Log.d("-----------网络管理器中相关网络信息------------");
this.services.forEach(function(t) {
var e = "Module : " + t.module + " , 进入后台的最大允许时间 : " + t.maxEnterBackgroundTime + " , 优先级 : " + t.priority;
Log.d(e);
e = "重连信息 : ";
t.reconnectHandler ? e = "是否允许重连 : " + t.reconnectHandler.enabled : e += "无重连Handler";
Log.d(e);
e = "状态信息 , 是否允许连接网络 : " + t.enabled + " 是否连接 : " + t.isConnected + " 网络数据类型 : " + t.serviceType;
Log.d(e);
});
};
t.module = "【Service管理器】";
return t;
}();
n.ServiceManager = i;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros"
} ],
Service: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "aac1a0Z061GhoAtBoDHNbI0", "Service");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Service = void 0;
var r = t("../../../defines/Macros"), a = t("../Net"), s = t("../socket/ServerConnector"), c = t("./Process"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = r.Macro.UNKNOWN;
e.reconnectHandler = null;
e._Process = new c.Process();
e._Heartbeat = null;
e.priority = 0;
e.serviceType = a.Net.ServiceType.Unknown;
return e;
}
Object.defineProperty(e.prototype, "Process", {
set: function(t) {
if (null != t) {
this._Process = new t();
this._Process.serviceType = this.serviceType;
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "Codec", {
set: function(t) {
this._Process.Codec = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "heartbeat", {
get: function() {
return this._Heartbeat;
},
set: function(t) {
this._Heartbeat = t;
this.serviceType = t.type;
this._Process.serviceType = t.type;
},
enumerable: !1,
configurable: !0
});
e.prototype.onOpen = function(e) {
t.prototype.onOpen.call(this, e);
App.serviceManager.onOpen(e, this);
};
e.prototype.onClose = function(e) {
t.prototype.onClose.call(this, e);
App.serviceManager.onClose(e, this);
};
e.prototype.onError = function(e) {
t.prototype.onError.call(this, e);
App.serviceManager.onError(e, this);
};
e.prototype.onMessage = function(e) {
this.recvHeartbeat();
var n = new this._Process.Codec();
if (n.unPack(e)) if (this.isHeartBeat(n)) this.onRecvHeartBeat(); else {
t.prototype.onMessage.call(this, e);
this._Process.onMessage(n);
} else Log.e("decode header error");
};
e.prototype.onRecvHeartBeat = function() {};
e.prototype.addListener = function(t, e, n, o, i) {
this._Process.addListener(t, e, n, o, i);
};
e.prototype.removeListeners = function(t, e) {
this._Process.removeListeners(t, e);
};
e.prototype.addMessageQueue = function(t, e, n) {
void 0 === n && (n = !1);
this._Process.addMessageQueue(t, e, n);
};
e.prototype.pauseMessageQueue = function() {
this._Process.isPause = !0;
};
e.prototype.resumeMessageQueue = function() {
this._Process.isPause = !1;
};
e.prototype.handMessage = function() {
this._Process.handMessage();
};
e.prototype.reset = function() {
this._Process.reset();
};
e.prototype.close = function(e) {
void 0 === e && (e = !1);
this._Process.close();
t.prototype.close.call(this, e);
};
e.prototype.send = function(t) {
Log.d(String.format("cmd:{0}  webSend:{1}", t.cmd, JSON.stringify(t.data)));
if (this._Process.Codec) if (t.encode()) {
var e = new this._Process.Codec();
e.pack(t);
this.isHeartBeat(t) || Log.d("send request main cmd : " + t.cmd + " ");
this.sendBuffer(e.buffer);
} else Log.e("encode error"); else Log.e("请求指定数据包头处理类型");
};
e.prototype.destory = function() {
this.reconnectHandler && this.reconnectHandler.onDestroy();
};
e.module = r.Macro.UNKNOWN;
return e;
}(s.ServerConnector);
n.Service = l;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../Net": "Net",
"../socket/ServerConnector": "ServerConnector",
"./Process": "Process"
} ],
SetPanel: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4715CRKXZCuoj6+RORRMjq", "SetPanel");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/framework/componects/EventComponent"), s = t("../../../scripts/framework/defines/Enums"), c = t("../../../scripts/sdk/SdkManager"), l = t("./AudioMgr"), u = cc._decorator, p = u.ccclass, d = u.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.close = null;
e.soundOpne = null;
e.soudnclose = null;
e.exit = null;
e.soundBtn = null;
return e;
}
e.prototype.onEnable = function() {
this.node.scale = 0;
cc.tween(this.node).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
};
e.prototype.addEvents = function() {
var t = this;
this.onN(this.close, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
t.node.active = !1;
c.default.showInterstitial();
});
this.onN(this.exit, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
t.node.active = !1;
cc.director.loadScene("login");
c.default.showInterstitial();
});
this.onN(this.soundBtn, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
var e = App.storage.getItem("soundState", !0);
e = !e;
App.storage.setItem("soundState", e);
t.refreshSoundState();
c.default.showInterstitial();
});
this.refreshSoundState();
};
e.prototype.refreshSoundState = function() {
var t = App.storage.getItem("soundState", !0);
this.soundOpne.active = t;
this.soudnclose.active = !t;
l.default.instance.setSoundState(t);
};
r([ d(cc.Node) ], e.prototype, "close", void 0);
r([ d(cc.Node) ], e.prototype, "soundOpne", void 0);
r([ d(cc.Node) ], e.prototype, "soudnclose", void 0);
r([ d(cc.Node) ], e.prototype, "exit", void 0);
r([ d(cc.Node) ], e.prototype, "soundBtn", void 0);
return r([ p ], e);
}(a.default);
n.default = f;
cc._RF.pop();
}, {
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/framework/defines/Enums": "Enums",
"../../../scripts/sdk/SdkManager": "SdkManager",
"./AudioMgr": "AudioMgr"
} ],
SimpleLineMgr: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "13fc2LEGmxDva4k5aJaQgvo", "SimpleLineMgr");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaseLineItem "), s = t("./BaseLineMgr"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.init = function() {
this.lines = this.node.getComponentsInChildren(a.default);
};
e.prototype.showRewardLine = function(t) {
this.lines[t].show();
};
e.prototype.showRewardLines = function() {};
e.prototype.hide = function() {
for (var t = 0; t < this.lines.length; t++) this.lines[t].hide();
};
e.prototype.lineAnims_None = function() {};
return r([ l ], e);
}(s.default));
n.default = u;
cc._RF.pop();
}, {
"./BaseLineItem ": "BaseLineItem ",
"./BaseLineMgr": "BaseLineMgr"
} ],
SingletonT: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9e9fct02ElIbrDDB2qZrYRN", "SingletonT");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SingletonT = void 0;
var o = t("../defines/Macros"), i = function() {
function t() {
this._datas = new Map();
this.module = null;
}
t.prototype.get = function(t, e) {
void 0 === e && (e = !0);
var n = this.getKey(t);
if (n == o.Macro.UNKNOWN) return null;
if (this._datas.has(n)) return this._datas.get(n);
if ("string" != typeof t && e) {
var i = null;
(i = t.instance ? t.instance : new t()).module = t.module;
Log.d(i.module + "初始化");
i.init && i.init();
this._datas.set(t.module, i);
return i;
}
return null;
};
t.prototype.destory = function(t) {
var e = this;
if (t) {
var n = this.getKey(t);
if (this._datas.has(n)) {
Log.d(n + "销毁");
var o = this._datas.get(n);
o && o.destory && o.destory();
this._datas.delete(n);
return !0;
}
return !1;
}
this._datas.forEach(function(t) {
if (t.isResident) Log.d(t.module + "为常驻单列，不做销毁处理"); else {
Log.d(t.module + "销毁");
t.destory && t.destory();
e._datas.delete(t.module);
}
});
return !0;
};
t.prototype.clear = function(t) {
var e = this;
t ? this._datas.forEach(function(n) {
if (!e.isInExclude(n, t)) {
Log.d(n.module + "清理");
n.clear && n.clear();
}
}) : this._datas.forEach(function(t) {
Log.d(t.module + "清理");
t.clear && t.clear();
});
};
t.prototype.debug = function() {
Log.d("************************** " + this.module + " 开始 **************************");
this._datas.forEach(function(t) {
t.debug ? t.debug() : Log.d(t.module + " : 未实现debug接口");
});
Log.d("************************** " + this.module + " 结束 **************************");
};
t.prototype.isInExclude = function(t, e) {
if (!e) return !1;
for (var n = 0; n < e.length; n++) if (this.getKey(e[n]) == t.module) return !0;
return !1;
};
t.prototype.getKey = function(t) {
o.Macro.UNKNOWN;
return "string" == typeof t ? t : t.module;
};
return t;
}();
n.SingletonT = i;
cc._RF.pop();
}, {
"../defines/Macros": "Macros"
} ],
Singleton: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5904etz/RdHI4wv7lZBfn2B", "Singleton");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Singleton = void 0;
var r = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = "【单列管理器】";
return e;
}
Object.defineProperty(e, "instance", {
get: function() {
return this._instance || (this._instance = new e());
},
enumerable: !1,
configurable: !0
});
e._instance = null;
return e;
}(t("./SingletonT").SingletonT);
n.Singleton = r;
cc._RF.pop();
}, {
"./SingletonT": "SingletonT"
} ],
SlotJudge: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6eb22jbiYNJ4qMIUYt9aJMr", "SlotJudge");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = [ [ 0, 5, 10, 15 ], [ 1, 6, 11, 16 ], [ 2, 7, 12, 17 ], [ 3, 8, 13, 18 ], [ 4, 9, 14, 19 ], [ 0, 6, 12, 18 ], [ 4, 8, 12, 16 ], [ 0, 6, 10, 16 ], [ 4, 8, 10, 18 ], [ 1, 7, 13, 19 ], [ 3, 7, 11, 15 ], [ 0, 5, 12, 19 ], [ 4, 9, 12, 15 ], [ 1, 6, 11, 17 ], [ 3, 8, 13, 17 ], [ 0, 5, 11, 17 ], [ 4, 9, 13, 15 ], [ 2, 6, 12, 18 ], [ 2, 8, 12, 16 ], [ 2, 7, 13, 19 ] ], i = [ .01, .02, .03, .04, .05, .06, .07, .08, .09, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1, 2 ], r = Array.from({
length: 14
}, function(t, e) {
return e + 1;
}), a = function() {
function t() {}
t.getSymbol = function(t, e) {
var n = e % 5;
return t[Math.floor(e / 5)][n];
};
t.checkAwards = function(t, e) {
for (var n = this, a = {
awardline: [],
awardPos: [],
awardType: 0,
score: 0
}, s = new Set(), c = 0; c < o.length; c++) {
for (var l = o[c], u = l.map(function(e) {
return n.getSymbol(t, e);
}), p = u[0], d = 1, f = 1; f < u.length && u[f] === p; f++) d++;
if (d >= 3) {
a.awardline.push([ c ]);
for (var h = 0; h < d; h++) s.add(l[h]);
var _ = 4 === d ? 2 : 1;
a.awardType = Math.max(a.awardType, _);
var g = i[c], y = r[p];
a.score += g * e * y * (2 === _ ? 2 : 1);
}
}
a.awardPos = Array.from(s).sort(function(t, e) {
return t - e;
});
return {
awardResult: a,
value: t
};
};
return t;
}();
n.default = a;
cc._RF.pop();
}, {} ],
SlotsDataUtil: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fbe21A0B65CPaCsn6Ox0i3o", "SlotsDataUtil");
var o = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, a = (i.property, function() {
function t() {}
t.prototype.getWildMultiple = function() {
for (var t = this.initDesk.wildMultiple.split(";"), e = [], n = 0; n < t.length; n++) {
var o = t[n];
e.push(Number.parseInt(o));
}
return e;
};
return o([ r ], t);
}());
n.default = a;
cc._RF.pop();
}, {} ],
SpinePlayState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1d3c07xkA9FYJebfCW8c7Mp", "SpinePlayState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spine = null;
return e;
}
e.prototype.init = function() {
this.spine || (this.spine = this.node.getComponentInChildren(sp.Skeleton));
};
e.prototype.show = function() {
this.init();
this.node.active = !0;
};
e.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ c ], e);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
SpritePlayState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2393cCIwE9Aq5Scs7SotJ0Y", "SpritePlayState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.show = function() {
this.node.active = !0;
};
e.prototype.hide = function() {
this.node.active = !1;
};
return r([ c ], e);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
StageData: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ea9ee6ybWdE2q6pbGPmMeIm", "StageData");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.StageData = void 0;
var r = t("../../framework/core/update/Update"), a = t("../../framework/data/GameData"), s = t("../../framework/defines/Macros"), c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._sceneStack = [];
e._where = s.Macro.UNKNOWN;
e._entrys = new Map();
e._games = [];
return e;
}
Object.defineProperty(e.prototype, "where", {
get: function() {
return this._where;
},
set: function(t) {
Log.d("" + this.module + this._where + " ==> " + t);
var e = this._where;
this._where = t;
e != t && this.push(t);
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
var e = this;
t.prototype.init.call(this);
var n = App.Bundles, o = Object.keys(n);
this._entrys.clear();
o.forEach(function(t) {
var n = new r.Update.Config("bundles." + t + ".name", t);
e._entrys.set(t, n);
t != s.Macro.BUNDLE_RESOURCES && e._games.push({
name: t,
sort: 0,
bundle: t
});
});
};
e.prototype.isLoginStage = function(t) {
return t ? t == s.Macro.BUNDLE_RESOURCES : this.where == s.Macro.BUNDLE_RESOURCES;
};
e.prototype.getEntry = function(t) {
return this._entrys.get(t);
};
Object.defineProperty(e.prototype, "games", {
get: function() {
return this._games;
},
enumerable: !1,
configurable: !0
});
e.prototype.push = function(t) {
for (var e = 0, n = this._sceneStack.length - 1; n >= 0; n--) if (this._sceneStack[n] == t) {
e = this._sceneStack.length - n;
break;
}
for (;e > 0; ) {
this._sceneStack.pop();
e--;
}
this._sceneStack.push(t);
Log.d(this.module + "压入场景 : " + t);
Log.d(this.module + "当前场景堆栈 : " + this._sceneStack.toString());
};
Object.defineProperty(e.prototype, "prevWhere", {
get: function() {
var t = void 0;
this._sceneStack.length >= 2 && (t = this._sceneStack[this._sceneStack.length - 2]);
Log.d(this.module + "获取的上一场景 : " + t);
return t;
},
enumerable: !1,
configurable: !0
});
e.module = "【Stage数据】";
return e;
}(a.GameData);
n.StageData = c;
cc._RF.pop();
}, {
"../../framework/core/update/Update": "Update",
"../../framework/data/GameData": "GameData",
"../../framework/defines/Macros": "Macros"
} ],
StorageUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "cd1b3npZENMZZm4OLfpQidg", "StorageUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.flushall = function() {
cc.sys.localStorage.clear();
};
t.delete = function(t) {
cc.sys.localStorage.removeItem(t);
};
t.string = function(t, e) {
return cc.sys.localStorage.getItem(t) || e;
};
t.number = function(t, e) {
var n = cc.sys.localStorage.getItem(t);
return n ? +n : e;
};
t.data = function(t) {
var e = cc.sys.localStorage.getItem(t);
if (e) try {
return JSON.parse(e);
} catch (e) {
Log.e(e);
this.delete(t);
}
return null;
};
t.save = function(t, e) {
cc.sys.localStorage.setItem(t, "" + e);
};
t.saveJson = function(t, e) {
try {
cc.sys.localStorage.setItem(t, JSON.stringify(e));
} catch (t) {
Log.e(t);
}
};
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
TAtlasPlayState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "503c8zqKqtHDaWpEIYeuO+l", "TAtlasPlayState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/UVAnimation/TAtlasPlay_Init"), s = t("./BaseAnimState"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tAtlasPlay = null;
return e;
}
e.prototype.init = function() {
if (!this.tAtlasPlay) {
this.tAtlasPlay = this.node.getComponent(a.default);
this.tAtlasPlay.customInit();
}
};
e.prototype.show = function(e) {
t.prototype.show.call(this, e);
this.init();
this.node.active = !0;
console.error("播放动画:" + this.tAtlasPlay);
this.tAtlasPlay.playRun();
};
e.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ l ], e);
}(s.default));
n.default = u;
cc._RF.pop();
}, {
"../../../scripts/common/UVAnimation/TAtlasPlay_Init": "TAtlasPlay_Init",
"./BaseAnimState": "BaseAnimState"
} ],
TAtlasPlay_Init: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ed249qDBVZJYorDLF7/G52l", "TAtlasPlay_Init");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../common/utils/RandomUtil"), s = t("./TUVPlay"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteAtlas = null;
e.speed = .2;
e.isDealy = !1;
e.dealyTime = 0;
e.playType = s.PlayType.Loop;
e.beginFrame = 0;
e.endFrame = 0;
e.isAwakeRunShow = !1;
e.beginShowFrame = 0;
e.isStopRunShow = !1;
e.endShowFrame = 0;
e.counts_playerState = s.PlayState.Fixed;
e.playeCount = 0;
e.minPlayeCount = 0;
e.maxPlayeCount = 0;
e.counts_playerState_pingpang = s.PlayState.Fixed;
e.playeCount_pingpang = 0;
e.minPlayeCount_pingpang = 0;
e.maxPlayeCount_pingpang = 0;
e.playPatter = s.PlayPattern.Order;
e.settingFrame = [];
e.isUseOverEvent = !1;
e.overEvent = [];
e.isUseCountOverEvent = !1;
e.countOverEvent = [];
e.nowCount = 0;
e.frame = 0;
e.inc = 1;
e.time = 0;
e.lastTime = 0;
e.isStop = !1;
e.isPlay = !1;
e.pingpangFlage = 0;
return e;
}
e.prototype.customInit = function() {
this.sprite = this.node.getComponent(cc.Sprite);
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
e.prototype.setStop = function(t) {
this.isPlay = !1;
this.setAnimationgUvRect(t);
};
e.prototype.setOrginStop = function() {
this.isPlay = !1;
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
e.prototype.playRun = function() {
if (null != this.sprite) {
this.isPlay = !1;
this.isStop = !1;
this.inc = 1;
this.lastTime = this.time;
this.frame = this.beginFrame;
this.pingpangFlage = 0;
this.playType == s.PlayType.Counts ? this.counts_playerState == s.PlayState.Fixed ? this.nowCount = this.playeCount : this.nowCount = a.RandomUtil.randomRange(this.minPlayeCount, this.maxPlayeCount) : this.playType == s.PlayType.PingpangCounts && (this.counts_playerState_pingpang == s.PlayState.Fixed ? this.nowCount = this.playeCount_pingpang : this.nowCount = a.RandomUtil.randomRange(this.minPlayeCount_pingpang, this.maxPlayeCount_pingpang));
this.isAwakeRunShow && this.setAnimationgUvRect(this.beginShowFrame);
this.isDealy && (this.lastTime = this.time + this.getDealyTime());
this.isPlay = !0;
}
};
e.prototype.update = function(t) {
this.time = this.time + t;
if (this.isPlay) switch (this.playType) {
case s.PlayType.Once:
this.runOnce();
break;

case s.PlayType.Loop:
this.runLoop();
break;

case s.PlayType.Pingpang:
this.runPingpang();
break;

case s.PlayType.Counts:
this.runCounts();
break;

case s.PlayType.PingpangCounts:
this.runPingpangCounts();
}
};
e.prototype.runPingpangCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.allEvent();
} else this.countEvent();
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
} else {
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.frame = this.beginFrame;
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
this.countEvent();
}
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
e.prototype.runPingpang = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.countEvent();
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runLoop = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.countEvent();
this.frame = this.beginFrame;
if (this.isStopRunShow) {
this.setAnimationgUvRect(this.endShowFrame);
return;
}
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runOnce = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
this.countEvent();
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
e.prototype.setAnimationgUvRect = function(t) {
this.playPatter == s.PlayPattern.Order ? this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame((t + 1).toString()) : this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame(this.settingFrame[t].toString());
};
e.prototype.getDealyTime = function() {
return this.dealyTime;
};
e.prototype.allEvent = function() {
if (null != this.overEvent) for (var t = 0; t < this.overEvent.length; t++) {
var e = this.overEvent[t];
e.emit([ e.customEventData ]);
}
};
e.prototype.countEvent = function() {
if (null != this.countOverEvent) for (var t = 0; t < this.countOverEvent.length; t++) {
var e = this.countOverEvent[t];
e.emit([ e.customEventData ]);
}
};
r([ u(cc.SpriteAtlas) ], e.prototype, "spriteAtlas", void 0);
r([ u ], e.prototype, "speed", void 0);
r([ u ], e.prototype, "isDealy", void 0);
r([ u({
visible: function() {
return this.isDealy;
}
}) ], e.prototype, "dealyTime", void 0);
r([ u({
type: cc.Enum(s.PlayType)
}) ], e.prototype, "playType", void 0);
r([ u ], e.prototype, "beginFrame", void 0);
r([ u ], e.prototype, "endFrame", void 0);
r([ u ], e.prototype, "isAwakeRunShow", void 0);
r([ u({
visible: function() {
return this.isAwakeRunShow;
}
}) ], e.prototype, "beginShowFrame", void 0);
r([ u ], e.prototype, "isStopRunShow", void 0);
r([ u({
visible: function() {
return this.isStopRunShow;
}
}) ], e.prototype, "endShowFrame", void 0);
r([ u({
type: cc.Enum(s.PlayState),
visible: function() {
return this.playType == s.PlayType.Counts;
}
}) ], e.prototype, "counts_playerState", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Fixed;
}
}) ], e.prototype, "playeCount", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], e.prototype, "minPlayeCount", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], e.prototype, "maxPlayeCount", void 0);
r([ u({
type: cc.Enum(s.PlayState),
visible: function() {
return this.playType == s.PlayType.PingpangCounts;
}
}) ], e.prototype, "counts_playerState_pingpang", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Fixed;
}
}) ], e.prototype, "playeCount_pingpang", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], e.prototype, "minPlayeCount_pingpang", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], e.prototype, "maxPlayeCount_pingpang", void 0);
r([ u({
type: cc.Enum(s.PlayPattern)
}) ], e.prototype, "playPatter", void 0);
r([ u({
type: cc.Integer,
visible: function() {
return this.playPatter == s.PlayPattern.Setting;
}
}) ], e.prototype, "settingFrame", void 0);
r([ u ], e.prototype, "isUseOverEvent", void 0);
r([ u({
type: cc.Component.EventHandler,
tooltip: "结束回调",
visible: function() {
return this.isUseOverEvent;
}
}) ], e.prototype, "overEvent", void 0);
r([ u ], e.prototype, "isUseCountOverEvent", void 0);
r([ u({
type: cc.Component.EventHandler,
tooltip: "次数播放结束回调",
visible: function() {
return this.isUseCountOverEvent;
}
}) ], e.prototype, "countOverEvent", void 0);
return r([ l ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../common/utils/RandomUtil": "RandomUtil",
"./TUVPlay": "TUVPlay"
} ],
TAtlasPlay: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6741dUCnYdMdp70kMGIzKwW", "TAtlasPlay");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PlayPattern = n.PlayState = n.PlayType = void 0;
var a, s, c, l = t("../../common/utils/RandomUtil"), u = cc._decorator, p = u.ccclass, d = u.property;
(function(t) {
t[t.Once = 0] = "Once";
t[t.Loop = 1] = "Loop";
t[t.Pingpang = 2] = "Pingpang";
t[t.Counts = 3] = "Counts";
t[t.PingpangCounts = 4] = "PingpangCounts";
})(a = n.PlayType || (n.PlayType = {}));
(function(t) {
t[t.Fixed = 0] = "Fixed";
t[t.Random = 1] = "Random";
})(s = n.PlayState || (n.PlayState = {}));
(function(t) {
t[t.Order = 0] = "Order";
t[t.Setting = 1] = "Setting";
})(c = n.PlayPattern || (n.PlayPattern = {}));
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteAtlas = null;
e.speed = .2;
e.isDealy = !1;
e.dealyTime = 0;
e.playType = a.Loop;
e.beginFrame = 0;
e.endFrame = 0;
e.isAwakeRunShow = !1;
e.beginShowFrame = 0;
e.isStopRunShow = !1;
e.endShowFrame = 0;
e.isLoadPlay = !0;
e.counts_playerState = s.Fixed;
e.playeCount = 0;
e.minPlayeCount = 0;
e.maxPlayeCount = 0;
e.counts_playerState_pingpang = s.Fixed;
e.playeCount_pingpang = 0;
e.minPlayeCount_pingpang = 0;
e.maxPlayeCount_pingpang = 0;
e.playPatter = c.Order;
e.settingFrame = [];
e.isUseOverEvent = !1;
e.overEvent = [];
e.isUseCountOverEvent = !1;
e.countOverEvent = [];
e.nowCount = 0;
e.frame = 0;
e.inc = 1;
e.time = 0;
e.lastTime = 0;
e.isStop = !1;
e.isPlay = !1;
e.pingpangFlage = 0;
return e;
}
e.prototype.onLoad = function() {
this.sprite = this.node.getComponent(cc.Sprite);
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
e.prototype.start = function() {
this.isLoadPlay && this.playRun();
};
e.prototype.setStop = function(t) {
this.isPlay = !1;
this.setAnimationgUvRect(t);
};
e.prototype.setOrginStop = function() {
this.isPlay = !1;
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
e.prototype.playRun = function() {
if (null != this.sprite) {
this.isPlay = !1;
this.isStop = !1;
this.inc = 1;
this.lastTime = this.time;
this.frame = this.beginFrame;
this.pingpangFlage = 0;
this.playType == a.Counts ? this.counts_playerState == s.Fixed ? this.nowCount = this.playeCount : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount, this.maxPlayeCount) : this.playType == a.PingpangCounts && (this.counts_playerState_pingpang == s.Fixed ? this.nowCount = this.playeCount_pingpang : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount_pingpang, this.maxPlayeCount_pingpang));
this.isAwakeRunShow && this.setAnimationgUvRect(this.beginShowFrame);
this.isDealy && (this.lastTime = this.time + this.getDealyTime());
this.isPlay = !0;
}
};
e.prototype.update = function(t) {
this.time = this.time + t;
if (this.isPlay) switch (this.playType) {
case a.Once:
this.runOnce();
break;

case a.Loop:
this.runLoop();
break;

case a.Pingpang:
this.runPingpang();
break;

case a.Counts:
this.runCounts();
break;

case a.PingpangCounts:
this.runPingpangCounts();
}
};
e.prototype.runPingpangCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.allEvent();
} else this.countEvent();
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
} else {
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.frame = this.beginFrame;
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
this.countEvent();
}
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
e.prototype.runPingpang = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.countEvent();
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runLoop = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.countEvent();
this.frame = this.beginFrame;
if (this.isStopRunShow) {
this.setAnimationgUvRect(this.endShowFrame);
return;
}
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runOnce = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
this.countEvent();
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
e.prototype.setAnimationgUvRect = function(t) {
this.playPatter == c.Order ? this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame((t + 1).toString()) : this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame(this.settingFrame[t].toString());
};
e.prototype.getDealyTime = function() {
return this.dealyTime;
};
e.prototype.allEvent = function() {
if (null != this.overEvent) for (var t = 0; t < this.overEvent.length; t++) {
var e = this.overEvent[t];
e.emit([ e.customEventData ]);
}
};
e.prototype.countEvent = function() {
if (null != this.countOverEvent) for (var t = 0; t < this.countOverEvent.length; t++) {
var e = this.countOverEvent[t];
e.emit([ e.customEventData ]);
}
};
r([ d(cc.SpriteAtlas) ], e.prototype, "spriteAtlas", void 0);
r([ d ], e.prototype, "speed", void 0);
r([ d ], e.prototype, "isDealy", void 0);
r([ d({
visible: function() {
return this.isDealy;
}
}) ], e.prototype, "dealyTime", void 0);
r([ d({
type: cc.Enum(a)
}) ], e.prototype, "playType", void 0);
r([ d ], e.prototype, "beginFrame", void 0);
r([ d ], e.prototype, "endFrame", void 0);
r([ d ], e.prototype, "isAwakeRunShow", void 0);
r([ d({
visible: function() {
return this.isAwakeRunShow;
}
}) ], e.prototype, "beginShowFrame", void 0);
r([ d ], e.prototype, "isStopRunShow", void 0);
r([ d({
visible: function() {
return this.isStopRunShow;
}
}) ], e.prototype, "endShowFrame", void 0);
r([ d ], e.prototype, "isLoadPlay", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.Counts;
}
}) ], e.prototype, "counts_playerState", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], e.prototype, "playeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "minPlayeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "maxPlayeCount", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.PingpangCounts;
}
}) ], e.prototype, "counts_playerState_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], e.prototype, "playeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "minPlayeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "maxPlayeCount_pingpang", void 0);
r([ d({
type: cc.Enum(c)
}) ], e.prototype, "playPatter", void 0);
r([ d({
type: cc.Integer,
visible: function() {
return this.playPatter == c.Setting;
}
}) ], e.prototype, "settingFrame", void 0);
r([ d ], e.prototype, "isUseOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "结束回调",
visible: function() {
return this.isUseOverEvent;
}
}) ], e.prototype, "overEvent", void 0);
r([ d ], e.prototype, "isUseCountOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "次数播放结束回调",
visible: function() {
return this.isUseCountOverEvent;
}
}) ], e.prototype, "countOverEvent", void 0);
return r([ p ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../common/utils/RandomUtil": "RandomUtil"
} ],
TUVPlayState: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "03364yl5etApo3kFIG+6D7T", "TUVPlayState");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/UVAnimation/TUVPlay"), s = t("./BaseAnimState"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
return e;
}
e.prototype.init = function() {
if (!this.anim) {
this.anim = this.node.getComponentInChildren(a.default);
this.rewardNode = this.anim.node;
}
};
e.prototype.show = function(e) {
var n = this;
t.prototype.show.call(this, e);
this.init();
e.rewardParent && this.scheduleOnce(function() {
var t = App.utils.localConvertWorldPointAR(n.rewardNode), o = App.utils.worldConvertLocalPointAR(e.rewardParent, t);
n.rewardNode.setParent(e.rewardParent);
e.rewardParentOrginScale || 0 == e.rewardParentOrginScale ? n.rewardNode.scale = e.rewardParentOrginScale : n.rewardNode.scale = 1;
n.rewardNode.position = cc.v3(o);
}, .32);
this.anim.playRun();
this.node.active = !0;
};
e.prototype.hide = function() {
this.init();
if (this.rewardNode && this.rewardNode.parent != this.node) {
this.rewardNode.setParent(this.node);
this.rewardNode.scale = 1;
this.rewardNode.position = cc.Vec3.ZERO;
}
this.node.active = !1;
};
return r([ l ], e);
}(s.default));
n.default = u;
cc._RF.pop();
}, {
"../../../scripts/common/UVAnimation/TUVPlay": "TUVPlay",
"./BaseAnimState": "BaseAnimState"
} ],
TUVPlay: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "38eafmyLUVKwp2S4L4jmPJ7", "TUVPlay");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PlayPattern = n.PlayState = n.PlayType = void 0;
var a, s, c, l = t("../../common/utils/RandomUtil"), u = cc._decorator, p = u.ccclass, d = u.property;
(function(t) {
t[t.Once = 0] = "Once";
t[t.Loop = 1] = "Loop";
t[t.Pingpang = 2] = "Pingpang";
t[t.Counts = 3] = "Counts";
t[t.PingpangCounts = 4] = "PingpangCounts";
})(a = n.PlayType || (n.PlayType = {}));
(function(t) {
t[t.Fixed = 0] = "Fixed";
t[t.Random = 1] = "Random";
})(s = n.PlayState || (n.PlayState = {}));
(function(t) {
t[t.Order = 0] = "Order";
t[t.Setting = 1] = "Setting";
})(c = n.PlayPattern || (n.PlayPattern = {}));
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.hor_ver = new cc.Vec2(1, 1);
e.speed = .2;
e.isDealy = !1;
e.dealyTime = 0;
e.playType = a.Loop;
e.beginFrame = 0;
e.endFrame = 0;
e.isAwakeRunShow = !1;
e.beginShowFrame = 0;
e.isStopRunShow = !1;
e.endShowFrame = 0;
e.isLoadPlay = !0;
e.counts_playerState = s.Fixed;
e.playeCount = 0;
e.minPlayeCount = 0;
e.maxPlayeCount = 0;
e.counts_playerState_pingpang = s.Fixed;
e.playeCount_pingpang = 0;
e.minPlayeCount_pingpang = 0;
e.maxPlayeCount_pingpang = 0;
e.playPatter = c.Order;
e.settingFrame = [];
e.isUseOverEvent = !1;
e.overEvent = [];
e.isUseCountOverEvent = !1;
e.countOverEvent = [];
e.nowCount = 0;
e.frame = 0;
e.inc = 1;
e.time = 0;
e.lastTime = 0;
e.isStop = !1;
e.isPlay = !1;
e.hor_ver_unit = new cc.Vec2(0, 0);
e.pingpangFlage = 0;
return e;
}
e.prototype.onLoad = function() {
this.isPlay = !1;
this.maxCount = this.hor_ver.x * this.hor_ver.y;
this.dataArray = new Array(this.maxCount);
this.rc = this.node.getComponent(cc.RenderComponent);
this.sprite = this.node.getComponent(cc.Sprite);
this.hor_ver_unit.x = 1 / this.hor_ver.x;
this.hor_ver_unit.y = 1 / this.hor_ver.y;
for (var t = 0; t < this.hor_ver.y; t++) for (var e = 0; e < this.hor_ver.x; e++) {
var n = t * this.hor_ver.x + e;
this.dataArray[n] = new cc.Vec2(e * this.hor_ver_unit.x, (t + 1) * this.hor_ver_unit.y);
}
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
e.prototype.start = function() {
this.isLoadPlay && this.playRun();
};
e.prototype.setStop = function(t) {
this.isPlay = !1;
this.rc && this.setAnimationgUvRect(t);
};
e.prototype.setOrginStop = function() {
this.isPlay = !1;
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
e.prototype.playRun = function() {
if (null != this.sprite) {
this.isPlay = !1;
this.isStop = !1;
this.inc = 1;
this.lastTime = this.time;
this.frame = this.beginFrame;
this.pingpangFlage = 0;
this.playType == a.Counts ? this.counts_playerState == s.Fixed ? this.nowCount = this.playeCount : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount, this.maxPlayeCount) : this.playType == a.PingpangCounts && (this.counts_playerState_pingpang == s.Fixed ? this.nowCount = this.playeCount_pingpang : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount_pingpang, this.maxPlayeCount_pingpang));
this.isAwakeRunShow && this.setAnimationgUvRect(this.beginShowFrame);
this.isDealy && (this.lastTime = this.time + this.getDealyTime());
this.isPlay = !0;
}
};
e.prototype.update = function(t) {
if (this.isPlay) {
this.time = this.time + t;
switch (this.playType) {
case a.Once:
this.runOnce();
break;

case a.Loop:
this.runLoop();
break;

case a.Pingpang:
this.runPingpang();
break;

case a.Counts:
this.runCounts();
break;

case a.PingpangCounts:
this.runPingpangCounts();
}
}
};
e.prototype.runPingpangCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.allEvent();
} else this.countEvent();
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
} else {
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.frame = this.beginFrame;
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
this.countEvent();
}
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
e.prototype.runPingpang = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.countEvent();
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runLoop = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.countEvent();
this.frame = this.beginFrame;
if (this.isStopRunShow) {
this.setAnimationgUvRect(this.endShowFrame);
return;
}
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
e.prototype.runOnce = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
this.countEvent();
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
e.prototype.setAnimationgUvRect = function(t) {
this.playPatter == c.Order ? this.rc.getMaterial(0).setProperty("uv_offset", this.dataArray[t]) : this.rc.getMaterial(0).setProperty("uv_offset", this.dataArray[this.settingFrame[t]]);
};
e.prototype.getDealyTime = function() {
return this.dealyTime;
};
e.prototype.allEvent = function() {
if (null != this.overEvent) for (var t = 0; t < this.overEvent.length; t++) {
var e = this.overEvent[t];
e.emit([ e.customEventData ]);
}
};
e.prototype.countEvent = function() {
if (null != this.countOverEvent) for (var t = 0; t < this.countOverEvent.length; t++) {
var e = this.countOverEvent[t];
e.emit([ e.customEventData ]);
}
};
r([ d(cc.Vec2) ], e.prototype, "hor_ver", void 0);
r([ d ], e.prototype, "speed", void 0);
r([ d ], e.prototype, "isDealy", void 0);
r([ d({
visible: function() {
return this.isDealy;
}
}) ], e.prototype, "dealyTime", void 0);
r([ d({
type: cc.Enum(a)
}) ], e.prototype, "playType", void 0);
r([ d ], e.prototype, "beginFrame", void 0);
r([ d ], e.prototype, "endFrame", void 0);
r([ d ], e.prototype, "isAwakeRunShow", void 0);
r([ d({
visible: function() {
return this.isAwakeRunShow;
}
}) ], e.prototype, "beginShowFrame", void 0);
r([ d ], e.prototype, "isStopRunShow", void 0);
r([ d({
visible: function() {
return this.isStopRunShow;
}
}) ], e.prototype, "endShowFrame", void 0);
r([ d ], e.prototype, "isLoadPlay", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.Counts;
}
}) ], e.prototype, "counts_playerState", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], e.prototype, "playeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "minPlayeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "maxPlayeCount", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.PingpangCounts;
}
}) ], e.prototype, "counts_playerState_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], e.prototype, "playeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "minPlayeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], e.prototype, "maxPlayeCount_pingpang", void 0);
r([ d({
type: cc.Enum(c)
}) ], e.prototype, "playPatter", void 0);
r([ d({
type: cc.Integer,
visible: function() {
return this.playPatter == c.Setting;
}
}) ], e.prototype, "settingFrame", void 0);
r([ d ], e.prototype, "isUseOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "结束回调",
visible: function() {
return this.isUseOverEvent;
}
}) ], e.prototype, "overEvent", void 0);
r([ d ], e.prototype, "isUseCountOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "次数播放结束回调",
visible: function() {
return this.isUseCountOverEvent;
}
}) ], e.prototype, "countOverEvent", void 0);
return r([ p ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../common/utils/RandomUtil": "RandomUtil"
} ],
TestJsonMessage: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8e510IGgi1Jh6ME4AzoUcyZ", "TestJsonMessage");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TestJsonMessage = void 0;
var r = t("../../common/net/CmdDefines"), a = t("../../framework/core/net/message/JsonMessage"), s = t("./LobbyCmd"), c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mainCmd = r.MainCmd.CMD_LOBBY;
e.subCmd = s.SUB_CMD_LOBBY.SERVER_GAME_LOGIN;
return e;
}
Object.defineProperty(e.prototype, "cmd", {
get: function() {
return String(this.mainCmd) + String(this.subCmd);
},
enumerable: !1,
configurable: !0
});
return e;
}(a.JsonMessage);
n.TestJsonMessage = c;
cc._RF.pop();
}, {
"../../common/net/CmdDefines": "CmdDefines",
"../../framework/core/net/message/JsonMessage": "JsonMessage",
"./LobbyCmd": "LobbyCmd"
} ],
Tips: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "71bdbJWugtIoaZ6duSr5kIe", "Tips");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../config/Config"), a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._content = null;
return e;
}
e.prototype.init = function(t, e) {
this._content = cc.find("content", this.node);
this._content && (this._content.getComponent(cc.Label).string = t);
this.runTimeOut(e);
};
e.prototype.runTimeOut = function(t) {
var e = this;
cc.tween(this._content).delay(t).call(function() {
App.tips.finishShowItem(e.node);
}).start();
};
e.prototype.fadeOut = function() {
var t = this;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.spawn(cc.moveBy(.5, 0, 50).easing(cc.easeExponentialOut()), cc.fadeOut(1)), cc.callFunc(function() {
t.node.removeFromParent();
})));
};
e.prototype.fadeIn = function() {
this.node.stopAllActions();
this.node.opacity = 0;
var t = this.node.position;
this.node.runAction(cc.spawn(cc.fadeIn(.5), cc.moveTo(.5, t.x, t.y + 50).easing(cc.easeExponentialOut())));
};
return e;
}(cc.Component), s = function() {
function t() {
this.module = null;
this.isResident = !0;
this._queue = [];
this.MAX_NUM = 3;
this.FADE_TIME = 2;
this._id = 0;
}
Object.defineProperty(t.prototype, "prefab", {
get: function() {
return App.uiManager.getScenePrefab("Tips");
},
enumerable: !1,
configurable: !0
});
t.prototype._show = function(t) {
var e = cc.instantiate(this.prefab);
if (e) {
var n = e.addComponent(a);
n.init(t, this.FADE_TIME);
n.fadeIn();
e.userData = this._id++;
e.name = "Tips" + e.userData;
App.uiManager.addView(e, r.ViewZOrder.Tips);
for (var o = this._queue.length, i = 0; i < o; i++) {
(s = this._queue[i]).opacity = 255;
s.stopAllActions();
s.runAction(cc.moveTo(.5, 0, 50 + (o - i) * (e.height + 3)).easing(cc.easeExponentialOut()));
}
this._queue.push(e);
if (this._queue.length > this.MAX_NUM) {
var s;
(s = this._queue.shift()).getComponent(a).fadeOut();
}
}
};
t.prototype.show = function(t) {
if (null != t && null != t && "" != t) {
Log.d("Toast.show msg=%s", t);
this._show(t);
}
};
t.prototype.testDelayShow = function(t, e) {
if (null != t && null != t && "" != t) {
Log.d("Toast.show msg=%s", t);
this._show(t);
setTimeout(function() {
e();
}, 2e3);
}
};
t.prototype.finishShowItem = function(t) {
for (var e = 0; e < this._queue.length; e++) if (this._queue[e].userData == t.userData) {
this._queue.splice(e, 1);
t.getComponent(a).fadeOut();
break;
}
};
t.prototype.clear = function() {
for (var t = null; t = this._queue.pop(); ) {
t.stopAllActions();
t.removeFromParent();
}
};
t.module = "【Tips】";
return t;
}();
n.default = s;
cc._RF.pop();
}, {
"../config/Config": "Config"
} ],
UIContainer: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d39cadhCYlFI5biU3GHNSKG", "UIContainer");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isDiverse = !1;
e.prefab = null;
e.prefabs = [];
e.pools = new Map();
e.prefabPool = [];
return e;
}
e.prototype.initPrefabsNode = function(t, e) {
this.node.addChild(t);
t.active = !1;
this.prefabs[e] = t;
};
e.prototype.initPrefabNode = function(t) {
this.node.addChild(t);
t.active = !1;
this.prefab = t;
};
e.prototype.preInstance = function(t) {
if (this.isDiverse) for (var e = 0; e < this.prefabs.length; e++) for (var n = e, o = 0; o < t; o++) {
var i = {}, r = cc.instantiate(this.prefabs[n]);
i.node = r;
i.type = n;
this.pushNodeToPool(i);
}
};
e.prototype.initDatas = function(t, e, n, o, i) {
this.HideFunc = i;
this.Func = n;
this.list = t;
if (this.Nodes) for (var r = 0; r < this.Nodes.length; r++) this.pushNodeToPool(this.Nodes[r]);
this.Nodes = [];
for (var a = 0; a < this.prefabs.length; a++) (s = this.prefabs[a]).active = !1;
for (r = 0; r < t.length; r++) {
var s = this.prefabs[e[r]], c = this.getNodeByPool(e[r], s);
this.node.addChild(c);
c.active = !0;
var l = {};
l.node = c;
l.type = e[r];
this.Nodes.push(l);
}
for (r = 0; r < this.Nodes.length; r++) this.refreshNodes(this.Nodes[r].node, {
data: t[r],
index: r
});
o && o();
};
e.prototype.initData = function(t, e, n, o) {
this.Func = e;
this.list = t;
if (this.Nodes) for (var i = 0; i < this.Nodes.length; i++) if (o) {
this.Nodes[i].active = !1;
this.prefabPool.push(this.Nodes[i]);
} else this.Nodes[i].destroy();
this.Nodes = [];
this.prefab.active = !1;
for (i = 0; i < t.length; i++) {
var r = null;
if (this.prefabPool.length > 0) r = this.prefabPool.pop(); else {
r = cc.instantiate(this.prefab);
this.node.addChild(r);
}
this.Nodes.push(r);
}
for (i = 0; i < this.Nodes.length; i++) this.refreshNodes(this.Nodes[i], {
data: t[i],
index: i
});
n && n();
};
e.prototype.refreshNodes = function(t, e) {
t.active = !0;
this.Func && this.Func(t, e);
};
e.prototype.refreshData = function(t) {
this.list = t;
if (this.isDiverse) for (var e = 0; e < this.Nodes.length; e++) this.refreshNodes(this.Nodes[e].node, {
data: this.list[e],
index: e
}); else for (e = 0; e < this.Nodes.length; e++) this.refreshNodes(this.Nodes[e], {
data: this.list[e],
index: e
});
};
e.prototype.refresh = function() {
if (this.isDiverse) for (var t = 0; t < this.Nodes.length; t++) this.refreshNodes(this.Nodes[t].node, {
data: this.list[t],
index: t
}); else for (t = 0; t < this.Nodes.length; t++) this.refreshNodes(this.Nodes[t], {
data: this.list[t],
index: t
});
};
e.prototype.getNodes = function() {
return this.Nodes;
};
e.prototype.getNodeByPool = function(t, e) {
var n = null;
if (this.pools.has(t)) n = this.pools.get(t); else {
n = new cc.NodePool(t.toString());
this.pools.set(t, n);
}
return n.size() > 0 ? n.get() : cc.instantiate(e);
};
e.prototype.pushNodeToPool = function(t) {
var e = null;
if (this.pools.has(t.type)) e = this.pools.get(t.type); else {
e = new cc.NodePool(t.type.toString());
this.pools.set(t.type, e);
}
t.node.active = !1;
cc.Tween.stopAllByTarget(t.node);
e.put(t.node);
this.HideFunc && this.HideFunc(t.node);
};
r([ c(cc.Boolean) ], e.prototype, "isDiverse", void 0);
r([ c({
type: cc.Node,
visible: function() {
return !this.isDiverse;
}
}) ], e.prototype, "prefab", void 0);
r([ c({
type: cc.Node,
visible: function() {
return this.isDiverse;
}
}) ], e.prototype, "prefabs", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
UILoading: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e9477pH+RpF+LErGtlVrhBu", "UILoading");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../config/Config"), i = function() {
function t() {
this.module = null;
this.isResident = !0;
this.node = null;
this.delay = null;
this.content = null;
this.text = null;
this._uiName = null;
this._timerId = -1;
}
t.prototype.show = function(t, e, n) {
var i = this;
void 0 === n && (n = o.Config.HTTP_TIME_OUT);
this.delaySureTimer = setTimeout(function() {
i.delay = o.Config.LOAD_VIEW_DELAY;
i._show(n, e);
}, t);
};
t.prototype._show = function(t, e) {
this.node || (this.node = cc.instantiate(App.uiManager.getScenePrefab("UILoading")));
this.node.removeFromParent();
App.uiManager.addView(this.node, o.ViewZOrder.UILoading);
this.node.position = cc.Vec3.ZERO;
this.content = cc.find("content", this.node);
cc.Tween.stopAllByTarget(this.content);
this.text = cc.find("text", this.content).getComponent(cc.Label);
this.text.string = "0%";
this.content.opacity = 0;
this.delay > 0 && cc.tween(this.content).delay(this.delay).set({
opacity: 255
}).start();
this.startTimeOutTimer(t, e);
this.node.active = !0;
};
t.prototype.startTimeOutTimer = function(t, e) {
var n = this;
this.stopTimeOutTimer();
t && (this._timerId = setTimeout(function() {
e && e();
n.hide();
}, 1e3 * t));
};
t.prototype.stopTimeOutTimer = function() {
clearTimeout(this._timerId);
clearTimeout(this.delaySureTimer);
this._timerId = -1;
this.delaySureTimer = -1;
};
t.prototype.hide = function() {
this.stopTimeOutTimer();
if (this.node) {
cc.Tween.stopAllByTarget(this.content);
this.node.active = !1;
}
};
t.prototype.updateProgress = function(t) {
if (this.text) {
if (null == t || null == t || Number.isNaN(t)) {
this.hide();
return;
}
t >= 0 && t <= 100 && (this.text.string = t + "%");
}
};
t.module = "【UILoading】";
return t;
}();
n.default = i;
cc._RF.pop();
}, {
"../config/Config": "Config"
} ],
UIManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1160cq52hlJX6pF767NAsGG", "UIManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UIManager = n.ViewDynamicLoadData = void 0;
var o = t("../../../common/config/Config"), i = t("../../../common/event/CommonEvent"), r = t("../../../common/net/CommonSender"), a = t("../../../common/utils/UIUtils"), s = t("../../../sdk/SdkManager"), c = t("../../defines/Enums"), l = t("../../defines/Macros"), u = t("../asset/Resource"), p = "DYNAMIC_LOAD_GARBAGE", d = "DYNAMIC_LOAD_RETAIN_MEMORY", f = function() {
function t(t) {
void 0 === t && (t = null);
this.local = new Map();
this.remote = new Map();
this.name = t;
}
t.prototype.addLocal = function(t, e) {
void 0 === e && (e = null);
if (t && t.url) {
this.name == p && Log.e("找不到资源持有者: " + t.url);
if (!this.local.has(t.url)) {
App.asset.retainAsset(t);
this.local.set(t.url, t);
}
}
};
t.prototype.addRemote = function(t, e) {
void 0 === e && (e = null);
if (t && t.data && !this.remote.has(t.url)) {
this.name == p && Log.e("找不到资源持有者 : " + t.url);
App.cache.remoteCaches.retainAsset(t);
this.remote.set(t.url, t);
}
};
t.prototype.clear = function() {
if (this.name == p) {
(this.local.size > 0 || this.remote.size > 0) && Log.e("当前未能释放资源如下:");
if (this.local && this.local.size > 0) {
Log.e("-----------local-----------");
this.local && this.local.forEach(function(t) {
Log.e(t.url);
});
}
if (this.remote && this.remote.size > 0) {
Log.e("-----------remote-----------");
this.remote && this.remote.forEach(function(t) {
Log.e(t.url);
});
}
} else {
if (this.local) {
this.local.forEach(function(t) {
App.asset.releaseAsset(t);
});
this.local.clear();
}
if (this.remote) {
this.remote.forEach(function(t) {
App.cache.remoteCaches.releaseAsset(t);
});
this.remote.clear();
}
}
};
return t;
}();
n.ViewDynamicLoadData = f;
var h = function() {
function t() {
this.isLoaded = !1;
this.status = c.ViewStatus.WAITTING_NONE;
this.view = null;
this.finishCb = [];
this.getViewCb = [];
this.isPreload = !1;
this.isPrefab = !0;
this.info = null;
this.viewType = null;
this.bundle = null;
this.loadData = new f();
this.node = null;
}
t.prototype.doGet = function(t) {
for (var e = 0; e < this.getViewCb.length; e++) {
var n = this.getViewCb[e];
n && n(t);
}
this.getViewCb = [];
};
t.prototype.doFinish = function(t) {
for (var e = 0; e < this.finishCb.length; e++) {
var n = this.finishCb[e];
n && n(t);
}
this.finishCb = [];
};
t.prototype.doCallback = function(t, e, n) {
this.doFinish(t, e, n);
this.doGet(t, e, n);
};
return t;
}(), _ = function() {
function t() {
this.isResident = !0;
this.module = null;
this._viewDatas = new Map();
this.garbage = new f(p);
this.retainMemory = new f(d);
this._canvas = null;
this._mainController = null;
this._prefabs = null;
}
t.prototype.getViewData = function(t) {
var e = this.getClassName(t);
if (e) return this._viewDatas.has(e) ? this._viewDatas.get(e) : void 0;
};
t.prototype.getViewType = function(t) {
if (!cc.isValid(t)) return null;
var e = t.className;
if (!e) return null;
var n = this._viewDatas.get(e);
return n ? n.viewType : null;
};
t.prototype.getClassName = function(t) {
if (t) return "string" == typeof t ? t : cc.js.getClassName(t);
};
t.prototype.defaultOpenOption = function(t) {
var e = {
bundle: l.Macro.BUNDLE_RESOURCES,
delay: t.delay,
name: t.name,
zIndex: 0,
preload: !1,
type: t.type,
args: t.args,
isRoot: t.isRoot
};
null != t.bundle && (e.bundle = t.bundle);
null != t.zIndex && (e.zIndex = t.zIndex);
null != t.preload && (e.preload = t.preload);
return e;
};
t.prototype.preload = function(t, e) {
return this.open({
type: t,
preload: !0,
bundle: e
});
};
t.prototype.parsePrefabUrl = function(t) {
return "@" == t[0] ? {
isPrefab: !1,
url: t.substr(1)
} : {
isPrefab: !0,
url: t
};
};
t.prototype.open = function(t) {
t.notshowwebloading || dispatch(i.SimpleEvent.Html5_view_loading, !0);
var e = this.defaultOpenOption(t);
return this._open(e);
};
t.prototype._open = function(t) {
var e = this;
return new Promise(function(n) {
if (t.type) {
var o = cc.js.getClassName(t.type);
if (e.getUIRoot(t.zIndex)) {
var r = e.getViewData(t.type);
if (r) {
r.isPreload = t.preload;
if (r.isLoaded) {
r.status = c.ViewStatus.WAITTING_NONE;
if (!t.preload && r.view && cc.isValid(r.node)) {
r.node.zIndex = t.zIndex;
r.node.parent || e.addView(r.node, t.zIndex);
r.view.show(t.args);
}
n(r.view);
return;
}
r.status = c.ViewStatus.WAITTING_NONE;
t.preload || t.isRoot;
r.finishCb.push(n);
} else {
(r = new h()).loadData.name = o;
var a = t.type.getPrefabUrl(), s = e.parsePrefabUrl(a);
r.isPreload = t.preload;
r.isPrefab = s.isPrefab;
r.viewType = t.type;
r.bundle = t.bundle;
e._viewDatas.set(o, r);
if (s.isPrefab) {
var l = null;
if (!t.preload) {
t.isRoot;
var p = 0;
l = function(e, n) {
var o = e / n;
p < o && (p = o);
if (t.isRoot) {
dispatch(i.SimpleEvent.load_native_game_progress, p);
App.loading.progress(p);
}
};
}
e.loadPrefab(t.bundle, a, l).then(function(o) {
r.info = new u.Resource.Info();
r.info.url = a;
r.info.type = cc.Prefab;
r.info.data = o;
r.info.bundle = t.bundle;
App.asset.retainAsset(r.info);
e.createNode(r, n, t);
App.uiLoading.hide();
if (t.isRoot) {
dispatch(i.SimpleEvent.load_native_game_complete);
App.loading.hide();
}
}).catch(function(i) {
r.isLoaded = !0;
Log.e(i);
e.close(t.type);
r.doCallback(null, o, "打开界面异常");
n(null);
var a = "";
t.name && (a = t.name);
App.tips.show("加载界面" + a + "失败，请重试");
App.uiLoading.hide();
});
} else {
r.info = new u.Resource.Info();
r.info.url = s.url;
r.info.type = cc.Prefab;
r.info.data = e.getScenePrefab(s.url);
r.info.bundle = t.bundle;
e.createNode(r, n, t);
}
}
} else n(null);
} else n(null);
});
};
t.prototype._addComponent = function(t, e, n) {
if (t) {
var o = this.getClassName(e.viewType), i = t.getComponent(e.viewType);
if (!i && !(i = t.addComponent(e.viewType))) return null;
i.className = o;
i.bundle = n.bundle;
e.view = i;
i.args = n.args;
e.isPreload || this.addView(t, n.zIndex);
return i;
}
return null;
};
t.prototype.createNode = function(t, e, n) {
t.isLoaded = !0;
var o = this.getClassName(t.viewType);
if (t.status != c.ViewStatus.WAITTING_CLOSE) {
var i = cc.instantiate(t.info.data);
t.node = i;
var r = this._addComponent(i, t, n);
if (r) if (t.status == c.ViewStatus.WATITING_HIDE) {
r.hide();
e(r);
t.doCallback(r, o, "加载完成，但加载过程中被隐藏");
} else {
t.isPreload || r.show(n.args);
e(r);
t.doCallback(r, o, "加载完成，回调之前加载中的界面");
} else e(null);
} else {
e(null);
t.doCallback(null, o, "获取界内已经关闭");
}
};
t.prototype.loadPrefab = function(t, e, n) {
return new Promise(function(o, i) {
App.asset.load(t, e, cc.Prefab, n, function(t) {
t && t.data && t.data instanceof cc.Prefab ? o(t.data) : i("加载prefab : " + e + " 失败");
});
});
};
t.prototype.getUIRoot = function(t) {
if (!this.uiRoot) {
this.uiRoot = new Map();
this.uiRoot.set(o.ViewZOrder.Zero, cc.find("gameRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Horn, cc.find("hornRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.UI, cc.find("uiRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Tips, cc.find("tipsRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Alert, cc.find("alertRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.UP, cc.find("upRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Loading, cc.find("loadingRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.UILoading, cc.find("uiloadingRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.SpGameLoading0, cc.find("spGameLoading0Root", this.canvas));
this.uiRoot.set(o.ViewZOrder.SpGameLoading, cc.find("spGameLoadingRoot", this.canvas));
}
return this.uiRoot.get(t);
};
Object.defineProperty(t.prototype, "mainController", {
get: function() {
if (!this._mainController && !cc.isValid(this._mainController)) return this._mainController;
var t = this.canvas;
if (t) {
this._mainController = t.getComponent("MainController");
return this._mainController;
}
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "prefabs", {
get: function() {
this._prefabs || cc.isValid(this._prefabs) || (this._prefabs = cc.find("prefabs", this.canvas));
return this._prefabs;
},
enumerable: !1,
configurable: !0
});
t.prototype.getScenePrefab = function(t) {
return cc.find(t, this.prefabs);
};
t.prototype.onLoad = function(t) {
this._canvas = t;
};
Object.defineProperty(t.prototype, "canvas", {
get: function() {
return this._canvas;
},
enumerable: !1,
configurable: !0
});
t.prototype.addView = function(t, e) {
this.getUIRoot(e).addChild(t);
};
t.prototype.addLocal = function(t, e) {
if (t) {
var n = this.getViewData(e);
n && n.loadData.addLocal(t, e);
}
};
t.prototype.addRemote = function(t, e) {
if (t) {
var n = this.getViewData(e);
n && n.loadData.addRemote(t, e);
}
};
t.prototype.close = function(t) {
var e = this.getViewData(t);
if (e) {
e.status = c.ViewStatus.WAITTING_CLOSE;
var n = this.getClassName(t);
if (e.view && cc.isValid(e.node)) {
e.node.removeFromParent();
e.node.destroy();
}
e.loadData.clear();
e.isPrefab && App.asset.releaseAsset(e.info);
this._viewDatas.delete(n);
1 == this._viewDatas.size && this._viewDatas.has("LoginView") && dispatch(i.CommonEvent.Show_Hall);
Log.d(this.module + " close view : " + n);
}
};
t.prototype.closeExcept = function(t) {
var e = this;
if (null != t && null != t && 0 != t.length) {
for (var n = new Set(), o = 0; o < t.length; o++) n.add(this.getClassName(t[o]));
this._viewDatas.forEach(function(t, o) {
n.has(o) || e.close(o);
});
} else this._viewDatas.forEach(function(t, n) {
e.close(n);
});
};
t.prototype.closeBundleView = function(t) {
var e = this;
this._viewDatas.forEach(function(n, o) {
n.bundle == t && e.close(o);
});
};
t.prototype.hide = function(t) {
var e = this.getViewData(t);
e && (e.isLoaded ? e.view && cc.isValid(e.view.node) && e.view.hide() : e.status = c.ViewStatus.WATITING_HIDE);
};
t.prototype.getView = function(t) {
var e = this;
return new Promise(function(n) {
if (null != t && null != t) {
var o = e.getViewData(t);
o ? o.isPreload ? n(null) : o.isLoaded ? n(o.view) : o.getViewCb.push(n) : n(null);
} else n(null);
});
};
t.prototype.checkView = function() {};
t.prototype.isShow = function(t) {
var e = this.getViewData(t);
return !!e && !(!e.isLoaded || e.status != c.ViewStatus.WAITTING_NONE || !e.view) && e.view.node.active;
};
t.newGameTest = function() {
App.senderManager.get(r.default).Send_CheckVer(function() {}).then(function(t) {
t && t.data && 0 == t.data.check_mode ? a.default.getScene(l.Macro.BUNDLE_RESOURCES, "Main", function() {
cc.audioEngine.stopMusic();
}) : s.default.initAdmob();
});
};
t.module = "【UI管理器】";
return t;
}();
n.UIManager = _;
cc._RF.pop();
}, {
"../../../common/config/Config": "Config",
"../../../common/event/CommonEvent": "CommonEvent",
"../../../common/net/CommonSender": "CommonSender",
"../../../common/utils/UIUtils": "UIUtils",
"../../../sdk/SdkManager": "SdkManager",
"../../defines/Enums": "Enums",
"../../defines/Macros": "Macros",
"../asset/Resource": "Resource"
} ],
UIReconnect: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a9553MVGq5KVI3EXTyejTH6", "UIReconnect");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UIReconnect = void 0;
var r = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = null;
e.isResident = !0;
return e;
}
e.prototype.startTimeOutTimer = function() {};
e.prototype.stopTimeOutTimer = function() {};
e.prototype.hide = function() {
this.node && (this.node.active = !1);
};
e.module = "【重连提示】";
return e;
}(t("./Loading").default);
n.UIReconnect = r;
cc._RF.pop();
}, {
"./Loading": "Loading"
} ],
UIUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "5bc715g7G9GoIzsL48/qwfu", "UIUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../../framework/defines/Macros"), i = t("../config/ConstString"), r = t("../config/User"), a = t("../event/CommonEvent"), s = t("../net/HttpSender"), c = t("./CmmUtils"), l = function() {
function t() {}
t.loadHead = function(e, n) {
var o = e;
if (null == n) this.loadHead(o, r.default.self.data); else if (n.avatar) if (-1 != n.avatar.search(i.ConstString.http)) App.asset.remote.loadImage(n.avatar, !0).then(function(t) {
t && (o.spriteFrame = t);
}); else {
var a = n.avatar.replace(".png", "");
t.setMainSprite(o, c.CmmUtils.AvatarPath(a));
}
};
t.setMainSprite = function(t, e, n) {
if (e && t) {
var i = t;
return new Promise(function(t, r) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, e, cc.SpriteFrame, null, function(e) {
if (i && e && e.data && e.data instanceof cc.SpriteFrame) {
n && (i.sizeMode = cc.Sprite.SizeMode.TRIMMED);
i.spriteFrame = e.data;
t(e.data);
} else r("加载图片 : 失败");
});
});
}
};
t.setMainSprite_Altas = function(t, e, n, i) {
if (e && t) {
var r = t;
return new Promise(function(t, a) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, e, cc.SpriteAtlas, null, function(e) {
if (r && e && e.data && e.data instanceof cc.SpriteAtlas) {
i && (r.sizeMode = cc.Sprite.SizeMode.TRIMMED);
r.spriteFrame = e.data.getSpriteFrame(n);
t(e.data);
} else a("加载图片 : 失败");
});
});
}
};
t.setMainBackSprite = function(t, e) {
var n = t;
return new Promise(function(i, r) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, e, cc.SpriteFrame, null, function(e) {
n && e && e.data && e.data instanceof cc.SpriteFrame ? i({
src: t,
sprite: e.data
}) : r("加载图片 : 失败");
});
});
};
t.setSprite = function(t, e, n) {
var o = t;
App.SingleGame;
return new Promise(function(t, i) {
App.asset.load(e, n, cc.SpriteFrame, null, function(e) {
if (e && e.data && e.data instanceof cc.SpriteFrame) {
o && (o.spriteFrame = e.data);
t(e.data);
} else i("加载图片 : 失败");
});
});
};
t.setLanSprite = function(t, e, n) {
var o = t;
App.SingleGame;
return new Promise(function(t, i) {
App.asset.load(e, n, cc.SpriteFrame, null, function(e) {
if (e && e.data && e.data instanceof cc.SpriteFrame) {
o && (o.spriteFrame = e.data);
t(e.data);
} else i("加载图片 : 失败");
});
});
};
t.setSpriteAtlas = function(t, e) {
return new Promise(function(n, o) {
App.asset.load(t, e, cc.SpriteAtlas, null, function(t) {
t && t.data && t.data instanceof cc.SpriteAtlas ? n(t.data) : o("加载图片 : 失败");
});
});
};
t.setLabelFont = function(t, e, n) {
var o = t;
return new Promise(function(t, i) {
App.asset.load(e, n, cc.Font, null, function(e) {
if (e && e.data && e.data instanceof cc.Font) {
o && (o.font = e.data);
t(e.data);
} else i("加载图片 : 失败");
});
});
};
t.getMainSprite = function(t) {
return new Promise(function(e, n) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, t, cc.SpriteFrame, null, function(t) {
t && t.data && t.data instanceof cc.SpriteFrame ? e(t.data) : n("加载图片 : 失败");
});
});
};
t.getScene = function(t, e, n) {
return new Promise(function(o, i) {
App.asset.loadScene(t, e, n, function(t, n) {
if (t) i("加载资源prefab 失败:" + e); else {
o(n);
cc.director.runScene(n);
}
});
});
};
t.getPrefab = function(t, e) {
return new Promise(function(n, o) {
App.asset.load(t, e, cc.Prefab, null, function(t) {
t && t.data && t.data instanceof cc.Prefab ? n(t.data) : o("加载资源prefab 失败:" + e);
});
});
};
t.showPrefab = function(t, e, n) {
var o = this;
return new Promise(function(i, r) {
dispatch(a.SimpleEvent.Html5_view_loading, !0);
App.asset.load(t, e, cc.Prefab, null, function(t) {
if (t && t.data && t.data instanceof cc.Prefab) {
var s = cc.instantiate(t.data);
n ? n.addChild(s) : o.getPopRoot().addChild(s);
dispatch(a.SimpleEvent.Html5_view_loading, !1);
i(s);
} else r("加载资源prefab 失败:" + e);
});
});
};
t.getPopRoot = function() {
var t = cc.find("Canvas"), e = cc.find("Canvas/popRoot");
if (null === e) {
e = new cc.Node("popRoot");
t.addChild(e);
var n = e.addComponent(cc.Widget);
n.left = 0;
n.right = 0;
n.top = 0;
n.bottom = 0;
n.isAlignBottom = !0;
n.isAlignLeft = !0;
n.isAlignTop = !0;
n.isAlignRight = !0;
n.updateAlignment();
e.zIndex = 999;
var o = cc.find("Canvas/_PARTICLE_ROOT_");
o && (o.zIndex = 9999);
}
return e;
};
t.showChecatNode = function() {
if (r.default.self.isTestPlayer) {
Log.e("xxxxxxxxxxxxxxxx:测试玩家" + s.default.uid);
t.cheatBtn ? t.cheatBtn.active = !0 : t.showPrefab(o.Macro.BUNDLE_RESOURCES, "prefabs/orgin/cheatBtn", t.getPopRoot()).then(function(e) {
t.cheatBtn = e;
});
} else t.cheatBtn && (t.cheatBtn.active = !1);
};
t.cheatBtn = null;
return t;
}();
n.default = l;
cc._RF.pop();
}, {
"../../framework/defines/Macros": "Macros",
"../config/ConstString": "ConstString",
"../config/User": "User",
"../event/CommonEvent": "CommonEvent",
"../net/HttpSender": "HttpSender",
"./CmmUtils": "CmmUtils"
} ],
UIView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ab94+tF5hMG5+UXd1Yf5M5", "UIView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../componects/EventComponent"), s = t("../../componects/AudioComponent"), c = t("../../defines/Macros"), l = t("../../../common/utils/UIUtils"), u = t("../../../common/event/CommonEvent"), p = cc._decorator, d = p.ccclass, f = (p.property, 
p.menu), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._className = "unknow";
e._bundle = null;
e._enabledKeyUp = !1;
e._enabledKeyDown = !1;
e.audioHelper = null;
e._enterBackgroundTime = 0;
e._enableFrontAndBackgroundSwitch = !1;
return e;
}
e.getPrefabUrl = function() {
Log.e("请求实现public static getPrefabUrl");
return c.Macro.UNKNOWN;
};
e.prototype.cancll = function() {
this.unscheduleAllCallbacks();
};
Object.defineProperty(e.prototype, "args", {
get: function() {
return this._args;
},
set: function(t) {
this._args = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "className", {
get: function() {
return this._className;
},
set: function(t) {
this._className = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bundle", {
get: function() {
return this._bundle;
},
set: function(t) {
this._bundle = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "closeAction", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
e.prototype.close = function() {
var t = this;
this.closeAction ? this.closeAction(function() {
App.uiManager.close(t.className);
}) : App.uiManager.close(this.className);
};
Object.defineProperty(e.prototype, "showAction", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
e.prototype.show = function(t) {
this._args = t;
this.node && (this.node.active = !0);
this.showAction && this.showAction(function() {});
dispatch(u.SimpleEvent.Html5_view_loading, !1);
};
Object.defineProperty(e.prototype, "hideAction", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
e.prototype.hide = function() {
var t = this;
this.hideAction ? this.hideAction(function() {
t.node && t.node.removeFromParent();
}) : this.node && this.node.removeFromParent();
};
Object.defineProperty(e.prototype, "enabledKeyUp", {
get: function() {
return this._enabledKeyUp;
},
set: function(t) {
this._enabledKeyUp = t;
t ? this.onI(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp) : this.offI(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "enabledKeyDown", {
get: function() {
return this._enabledKeyUp;
},
set: function(t) {
this._enabledKeyUp = t;
t ? this.onI(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown) : this.offI(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown);
},
enumerable: !1,
configurable: !0
});
e.prototype.onKeyUp = function(t) {
t.keyCode == cc.macro.KEY.escape ? this.onKeyBackUp(t) : t.stopPropagation();
};
e.prototype.onKeyDown = function(t) {
t.keyCode == cc.macro.KEY.escape ? this.onKeyBackDown(t) : t.stopPropagation();
};
e.prototype.onKeyBackUp = function(t) {
t.stopPropagation();
};
e.prototype.onKeyBackDown = function(t) {
t.stopPropagation();
};
e.prototype.onLoad = function() {
this.audioHelper = this.addComponent(s.default);
this.audioHelper.owner = this;
t.prototype.onLoad.call(this);
};
e.prototype.playEffect = function(t, e) {
void 0 === e && (e = !1);
return App.SingleGame ? this.audioHelper.playEffect(t, c.Macro.BUNDLE_RESOURCES, e) : this.audioHelper.playEffect(t, this.bundle, e);
};
e.prototype.playMusic = function(t) {
App.SingleGame ? this.audioHelper.playMusic(t, c.Macro.BUNDLE_RESOURCES, !0) : this.audioHelper.playMusic(t, this.bundle, !0);
};
e.prototype.setSprite = function(t, e) {
l.default.setSprite(t, this.bundle, e);
};
Object.defineProperty(e.prototype, "enableFrontAndBackgroundSwitch", {
get: function() {
return this._enableFrontAndBackgroundSwitch;
},
set: function(t) {
this._enableFrontAndBackgroundSwitch = t;
if (t) {
this.onG(cc.game.EVENT_SHOW, this._onEnterForgeGround);
this.onG(cc.game.EVENT_HIDE, this._onEnterBackground);
} else {
this.offG(cc.game.EVENT_SHOW, this._onEnterForgeGround);
this.offG(cc.game.EVENT_HIDE, this._onEnterBackground);
}
},
enumerable: !1,
configurable: !0
});
e.prototype._onEnterBackground = function() {
this._enterBackgroundTime = Date.timeNow();
this.onEnterBackground();
};
e.prototype._onEnterForgeGround = function() {
var t = Date.timeNow() - this._enterBackgroundTime;
this.onEnterForgeground(t);
};
e.prototype.onEnterForgeground = function() {};
e.prototype.onEnterBackground = function() {};
return r([ d, f("Quick公共组件/UIView") ], e);
}(a.default);
n.default = h;
cc._RF.pop();
}, {
"../../../common/event/CommonEvent": "CommonEvent",
"../../../common/utils/UIUtils": "UIUtils",
"../../componects/AudioComponent": "AudioComponent",
"../../componects/EventComponent": "EventComponent",
"../../defines/Macros": "Macros"
} ],
URLConfig: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1ff71oRFDJEQL3kNtAra51a", "URLConfig");
var o = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = t("../common/config/ConstString"), r = t("../framework/plugin/BitEncrypt"), a = t("../sdk/AppInfo"), s = t("../sdk/SdkManager"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function() {
function t() {}
e = t;
t.getChannel = function() {
if (!e.urlConfigs) {
e.urlConfigs = new Map();
e.urlConfigs.set(3928880, "c3_N");
e.urlConfigs.set(3928870, "c4_N");
e.urlConfigs.set(3928883, "b3_N");
e.urlConfigData = new Map();
for (var t = r.BitEncrypt.decode(this.urlData), n = JSON.parse(t), o = Object.keys(n), i = 0, c = o; i < c.length; i++) {
var l = c[i];
e.urlConfigData.set(l, n[l]);
e.urlConfigData.set(n[l].id, n[l]);
}
if (App.IsHtmlGame) {
e._maplru_data = new Map();
for (var u = 0, p = o; u < p.length; u++) {
l = p[u];
e._maplru_data.has(n[l].comurl) || e._maplru_data.set(n[l].comurl, n[l]);
}
}
}
if (App.IsHtmlGame) {
if (e.fixedData) return e.fixedData;
if (0 == s.default.channelID) e._maplru_data.forEach(function(t, n) {
if (n == window.location.origin) {
s.default.channelID = t.defaultChannel;
e.fixedData = t;
}
}); else {
var d = e.urlConfigData.get(a.default.getHttpId());
e.fixedData = d;
}
console.error(e.fixedData);
return e.fixedData || {};
}
var f = e.urlConfigData.get("all");
if (f) return f;
var h = a.default.getChannelId();
"string" == typeof h && (h = Number.parseInt(h));
var _ = e.urlConfigs.get(h);
return (d = e.urlConfigData.get(_)) || {};
};
t.getRandomUrl = function() {
if (!this.unUsedUrl) {
this.unUsedUrl = [ "www.google.sdfsafdsa.com" ];
this.unUsedUrl = [ "www.google32e4sadsa.com" ];
}
var t = App.storage.getItem(i.ConstString.testUrlIndex, 0);
t >= this.unUsedUrl.length && (t = 0);
var e = this.unUsedUrl[t];
if (e) {
t++;
App.storage.setItem(i.ConstString.testUrlIndex, t);
}
return e;
};
var e;
t.urlData = "{}";
return e = o([ l ], t);
}());
n.default = u;
cc._RF.pop();
}, {
"../common/config/ConstString": "ConstString",
"../framework/plugin/BitEncrypt": "BitEncrypt",
"../sdk/AppInfo": "AppInfo",
"../sdk/SdkManager": "SdkManager"
} ],
UpdateItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7d953mhTWRDmJAA45uTe+Q+", "UpdateItem");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UpdateItem = void 0;
var o = t("../../defines/Macros"), i = t("./Update"), r = function() {
function t(t) {
this._name = "";
this.bundle = "";
this.handler = null;
this.userData = null;
this.isLoaded = !1;
this._code = i.Update.Code.UNINITED;
this._state = i.Update.State.UNINITED;
this._name = t.name;
this.bundle = t.bundle;
}
Object.defineProperty(t.prototype, "name", {
get: function() {
return this._name;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "assetsManager", {
get: function() {
return App.updateManager.getAssetsManager(this);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "code", {
get: function() {
return this.isBrowser ? i.Update.Code.ALREADY_UP_TO_DATE : this._code;
},
set: function(t) {
this._code = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "state", {
get: function() {
return this.isBrowser ? i.Update.State.UP_TO_DATE : this._state;
},
set: function(t) {
this._state = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "updateName", {
get: function() {
return this.assetsManager.name;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isBrowser", {
get: function() {
return App.updateManager.isBrowser;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isSkipUpdate", {
get: function() {
if (this.isBrowser) return !0;
var t = App.updateManager.getStatus(this.bundle);
return App.updateManager.isSkipCheckUpdate || t == i.Update.Status.UP_TO_DATE;
},
enumerable: !1,
configurable: !0
});
t.prototype.reset = function() {
this.state = i.Update.State.UNINITED;
this.code = i.Update.Code.UNINITED;
Log.d(this.bundle + " AssetsManager 重置");
this.assetsManager.manager.reset();
};
t.prototype.convertBundle = function(t) {
return App.updateManager.convertBundle(t);
};
t.prototype.getProjectString = function() {
return App.updateManager.getProjectString(this.bundle);
};
t.prototype.checkUpdate = function() {
this.handler.onStarCheckUpdate(this);
this.checkBundleUpdate();
};
Object.defineProperty(t.prototype, "isMain", {
get: function() {
return this.assetsManager.name == i.Update.MAIN_PACK;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "remoteMd5", {
get: function() {
return this.assetsManager.manager.getRemoteManifest().getMd5();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "storagePath", {
get: function() {
return App.updateManager.storagePath;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "hotUpdateUrl", {
get: function() {
return App.updateManager.hotUpdateUrl;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isUpdating", {
get: function() {
var t = this, e = function(e) {
if (e == i.Update.State.PREDOWNLOAD_VERSION) {
Log.d(t.bundle + " 准备下载版本文件");
return !0;
}
if (e == i.Update.State.DOWNLOADING_VERSION) {
Log.d(t.bundle + " 下载版本文件中");
return !0;
}
if (e == i.Update.State.PREDOWNLOAD_MANIFEST) {
Log.d(t.bundle + " 准备下载project文件");
return !0;
}
if (e == i.Update.State.DOWNLOADING_MANIFEST) {
Log.d(t.bundle + " 下载project文件中");
return !0;
}
if (e == i.Update.State.VERSION_LOADED) {
Log.d(t.bundle + " 下载版本文件完成，下一步骤会解析版本文件，也算在更新过程中");
return !0;
}
if (e == i.Update.State.MANIFEST_LOADED) {
Log.d(t.bundle + " 下载project文件完成,下载步骤会解析project文件，也算在更新过程中");
return !0;
}
if (e == i.Update.State.UPDATING) {
Log.d(t.bundle + " 正在更新中");
return !0;
}
};
if (e(this.assetsManager.manager.getState())) {
Log.d(this.bundle + " C++层更新中");
return !0;
}
if (e(this.state)) {
Log.d(this.bundle + " TS层更新中");
return !0;
}
return !1;
},
enumerable: !1,
configurable: !0
});
t.prototype.checkBundleUpdate = function() {
if (this.assetsManager.manager.getLocalManifest()) {
Log.d(this.bundle + " 本地文件已经加载完成,直接进入更新流程");
if (this.isUpdating) {
Log.d(this.bundle + " 正在检测更新中...");
this.handler.onShowUpdating(this);
return;
}
}
var t = this.getProjectString();
if (t) {
var e = new jsb.Manifest(t, this.storagePath, this.hotUpdateUrl);
Log.d(this.bundle + " --存在本地版本控制文件checkUpdate--");
this.assetsManager.manager.loadLocalManifest(e, "");
this._checkUpdate();
} else {
var n = {
version: "0",
bundle: this.convertBundle(this.bundle),
md5: o.Macro.UNKNOWN
}, i = JSON.stringify(n);
e = new jsb.Manifest(i, this.storagePath, this.hotUpdateUrl);
Log.d(this.bundle + " 检测更新");
Log.d(this.bundle + " 版本信息 : " + i);
this.assetsManager.manager.loadLocalManifest(e, "");
this._checkUpdate();
}
};
t.prototype._checkUpdate = function() {
Log.d(this.bundle + " 进入检测更新");
this.state = i.Update.State.UPDATING;
this.assetsManager.manager.setEventCallback(this.checkCb.bind(this));
this.assetsManager.manager.checkUpdate();
};
t.prototype.checkCb = function(t) {
var e = t.getEventCode(), n = this.assetsManager.manager.getState();
Log.d(this.bundle + " checkCb event code : " + e + " state : " + n);
switch (e) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
Log.d(this.bundle + " No local manifest file found, hot update skipped.");
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
Log.d(this.bundle + " Fail to download manifest file, hot update skipped.");
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
Log.d(this.bundle + " Already up to date with the latest remote version.");
this.isMain ? App.updateManager.savePreVersions() : this.bundle == o.Macro.BUNDLE_HALL && (e = App.updateManager.checkMainMd5(this, e));
break;

case i.Update.Code.NEW_VERSION_FOUND:
Log.d(this.bundle + " New version found, please try to update.");
this.isMain || (e = App.updateManager.checkAllowUpdate(this, e));
break;

default:
return;
}
this.state = n;
this.code = e;
e == i.Update.Code.NEW_VERSION_FOUND ? this.handler.onNewVersionFund(this) : e == i.Update.Code.ALREADY_UP_TO_DATE ? this.handler.onAreadyUpToData(this) : e == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || e == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || e == i.Update.Code.ERROR_PARSE_MANIFEST ? this.handler.onUpdateFailed(this) : e == i.Update.Code.MAIN_PACK_NEED_UPDATE || e == i.Update.Code.PRE_VERSIONS_NOT_FOUND ? this.handler.onNeedUpdateMain(this) : this.handler.onOther(this);
};
t.prototype.doUpdate = function() {
Log.d(this.bundle + " 即将热更新, updating : " + this.isUpdating);
if (!this.isUpdating) {
Log.d(this.bundle + " 执行更新 ");
this.assetsManager.manager.setEventCallback(this.updateCb.bind(this));
this.assetsManager.manager.update();
}
};
t.prototype.updateCb = function(t) {
var e = this, n = !1, o = !1, r = t.getEventCode(), a = this.assetsManager.manager.getState();
Log.d(this.bundle + " --update cb code : " + r + " state : " + a);
switch (r) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
Log.d(this.bundle + " No local manifest file found, hot update skipped.");
o = !0;
break;

case i.Update.Code.UPDATE_PROGRESSION:
Log.d(this.bundle + " " + t.getDownloadedBytes() + " / " + t.getTotalBytes());
Log.d(this.bundle + " " + t.getDownloadedFiles() + " / " + t.getTotalFiles());
Log.d(this.bundle + " percent : " + t.getPercent());
Log.d(this.bundle + " percent by file : " + t.getPercentByFile());
Log.d(this.bundle + " assetId : " + t.getAssetId());
var s = t.getMessage();
s && Log.d(this.bundle + " Updated file: " + s);
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
Log.d(this.bundle + " Fail to download manifest file, hot update skipped.");
o = !0;
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
Log.d(this.bundle + " Already up to date with the latest remote version");
o = !0;
this.isMain && App.updateManager.savePreVersions();
break;

case i.Update.Code.UPDATE_FINISHED:
Log.d(this.bundle + " Update finished. " + t.getMessage());
n = !0;
this.isMain && App.updateManager.savePreVersions();
break;

case i.Update.Code.UPDATE_FAILED:
Log.d(this.bundle + " Update failed. " + t.getMessage());
break;

case i.Update.Code.ERROR_UPDATING:
Log.d(this.bundle + " Asset update error: " + t.getAssetId() + " , " + t.getMessage());
break;

case i.Update.Code.ERROR_DECOMPRESS:
Log.d(this.bundle + " " + t.getMessage());
}
o && this.assetsManager.manager.setEventCallback(null);
var c = !1;
if (this.isMain) {
if (n) {
this.assetsManager.manager.setEventCallback(null);
t.getDownloadedFiles() > 0 && (c = !0);
}
} else if (n) {
Log.d(this.bundle + " 更新前是否加载过 : " + this.isLoaded);
if (this.isLoaded && t.getDownloadedFiles() > 0) {
Log.d(this.bundle + " 已经加载过，需要重启");
c = !0;
}
}
this.state = a;
this.code = r;
var l = {
downloadedBytes: t.getDownloadedBytes(),
totalBytes: t.getTotalBytes(),
downloadedFiles: t.getDownloadedFiles(),
totalFiles: t.getTotalFiles(),
percent: t.getPercent(),
percentByFile: t.getPercentByFile(),
code: t.getEventCode(),
state: a,
needRestart: c,
bundle: this.bundle,
assetId: t.getAssetId(),
progress: 0
};
if (l.code == i.Update.Code.UPDATE_FINISHED) {
l.progress = 1.1;
this.handler.onDownloading(this, l);
} else if (l.code == i.Update.Code.UPDATE_PROGRESSION) {
l.totalBytes <= 0 ? l.progress = 0 : l.progress = l.percent == Number.NaN ? 0 : l.percent;
this.handler.onDownloading(this, l);
} else if (l.code == i.Update.Code.ALREADY_UP_TO_DATE) {
l.progress = 1;
this.handler.onDownloading(this, l);
} else if (l.code == i.Update.Code.UPDATE_FAILED || l.code == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || l.code == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || l.code == i.Update.Code.ERROR_PARSE_MANIFEST || l.code == i.Update.Code.ERROR_DECOMPRESS) {
l.progress = -1;
Log.e("更新" + this.name + "失败");
this.handler.onUpdateFailed(this);
}
if (n) {
Log.d(this.bundle + " 更新完成,下载资源数 : " + t.getDownloadedFiles());
if (c) {
Log.d(this.bundle + " 更新完成，需要重启游戏");
this.handler.onNeedRestartApp(this, function(t, n) {
jsb.fileUtils.purgeCachedEntries();
var o = .5;
t && (o = 1);
n && setTimeout(function() {
Log.d(e.bundle + " 重启游戏");
cc.game.restart();
}, o);
});
} else {
jsb.fileUtils.purgeCachedEntries();
this.reset();
this.handler.onDownloadComplete(this);
}
}
Log.d(this.bundle + "update cb  failed : " + o + "  , isRestartApp : " + c + " isUpdateFinished : " + n + " , updating : " + this.isUpdating);
};
return t;
}();
n.UpdateItem = r;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros",
"./Update": "Update"
} ],
UpdateLoading: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f6768OM7o5DULODtu+5yGA1", "UpdateLoading");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.module = null;
return e;
}
e.module = "【UpdateLoading】";
return e;
}(t("./Loading").default);
n.default = r;
cc._RF.pop();
}, {
"./Loading": "Loading"
} ],
UpdateManager: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4686A+V9RC9qa8HPdcxcAM", "UpdateManager");
var o = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(t) {
try {
c(o.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UpdateManager = void 0;
var r = t("./Update"), a = t("../../defines/Macros"), s = t("../net/http/HttpClient"), c = t("./UpdateItem"), l = t("../../../common/config/GlobalVar"), u = function() {
function t() {
this.isResident = !0;
this.module = null;
this.items = [];
this.current = null;
this._hotUpdateUrl = "";
this.isSkipCheckUpdate = !1;
this.assetsManagers = {};
this.preVersions = {};
this.remoteVersions = {};
this.defaultVersion = "1.0.0";
this.defaultMD5 = a.Macro.UNKNOWN;
this.mainBundles = [ "src", "jsb-adapter", "assets/resources", "assets/main", "assets/internal", "main.js" ];
this.isAutoVersion = !0;
}
Object.defineProperty(t.prototype, "storagePath", {
get: function() {
return jsb.fileUtils.getWritablePath() + "caches/";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "hotUpdateUrl", {
get: function() {
return this._hotUpdateUrl;
},
set: function(t) {
this._hotUpdateUrl = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isBrowser", {
get: function() {
return cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.isBrowser;
},
enumerable: !1,
configurable: !0
});
t.prototype.getAssetsManager = function(t) {
var e = t.convertBundle(t.bundle);
if (!this.assetsManagers[e]) {
this.assetsManagers[e] = new r.Update.AssetsManager(e, this.storagePath);
this.assetsManagers[e].manager.setPackageUrl(this.hotUpdateUrl);
this.assetsManagers[e].manager.setMainBundles(this.mainBundles);
this.assetsManagers[e].manager.setDownloadAgainZip(.8);
}
return this.assetsManagers[e];
};
t.prototype.dowonLoad = function(t) {
if (t.isSkipUpdate) t.handler.onLoadBundle(t); else {
this.current = this.getItem(t);
if (this.current) if (this.current.isUpdating) {
Log.d(t.bundle + " 正在更新中...");
this.current.handler.onShowUpdating(this.current);
} else {
Log.d(t.bundle + " 不在更新状态，进入更新...");
this._dowonLoad(t);
} else {
Log.d(t.bundle + " 放入下载队列中...");
this.items.push(t);
this._dowonLoad(t);
}
}
};
t.prototype._dowonLoad = function(t) {
return o(this, void 0, void 0, function() {
return i(this, function(e) {
switch (e.label) {
case 0:
this.current = t;
return [ 4, this.loadVersions(this.current) ];

case 1:
if (e.sent()) if (this.getStatus(t.bundle) == r.Update.Status.UP_TO_DATE) {
t.state = r.Update.State.UP_TO_DATE;
if (t.bundle == a.Macro.BUNDLE_HALL && this.isMd5Change(r.Update.MAIN_PACK)) {
Log.d("进入" + t.bundle + " 时，需要更新主包");
t.handler.onNeedUpdateMain(t);
} else {
Log.d(t.bundle + " 已经是最新，直接进入...");
t.handler.onLoadBundle(t);
}
} else {
Log.d(t.bundle + " 进入检测更新...");
t.state = r.Update.State.READY_TO_UPDATE;
t.checkUpdate();
}
return [ 2 ];
}
});
});
};
t.prototype.getItem = function(t) {
if (t instanceof c.UpdateItem) return this._getItem(t.bundle);
var e = this._getItem(t.bundle);
null == e && (e = new c.UpdateItem(t));
return e;
};
t.prototype._getItem = function(t) {
for (var e = 0; e < this.items.length; e++) if (t == this.items[e].bundle) return this.items[e];
return null;
};
t.prototype.checkAllowUpdate = function(t, e) {
var n = t.remoteMd5, o = this.preVersions[t.updateName];
if (null == o || null == o) {
Log.e("预处理版本未存在!!!!");
return r.Update.Code.PRE_VERSIONS_NOT_FOUND;
}
if (o.md5 == n) Log.d(t.bundle + " 将要下载版本 md5 与远程版本 md5 相同，可以下载 version : " + o.version + " md5:" + o.md5); else if (t.bundle == a.Macro.BUNDLE_HALL) {
Log.d(t.bundle + " 更新");
if (this.isMd5Change(r.Update.MAIN_PACK)) {
Log.d("更新" + t.bundle + "时，主包有更新，需要先更新主包");
e = r.Update.Code.MAIN_PACK_NEED_UPDATE;
} else Log.d("更新" + t.bundle + "时，主包无更新，直接更新进入");
} else if (this.isMd5Change(r.Update.MAIN_PACK) || this.isMd5Change(a.Macro.BUNDLE_HALL)) {
Log.d("更新" + t.bundle + "时，主包与大厅有更新，下载 md5 :" + n + " 与预处理md5不一致，需要对主包先进行更新");
e = r.Update.Code.MAIN_PACK_NEED_UPDATE;
} else Log.e("更新" + t.bundle + "时，主包与大厅无更新，可直接下载更新！！");
return e;
};
t.prototype.checkMainMd5 = function(t, e) {
Log.d(t.bundle + " 无更新，检测主包md5是否变化，如果变更，需要提示玩家更新主包");
if (this.isMd5Change(r.Update.MAIN_PACK)) {
Log.d("进入" + t.bundle + "时，主包有更新，需要先更新主包");
e = r.Update.Code.MAIN_PACK_NEED_UPDATE;
}
return e;
};
t.prototype.getStatus = function(t) {
if (this.isBrowser || this.isSkipCheckUpdate) return r.Update.Status.UP_TO_DATE;
t = this.convertBundle(t);
Log.e("xzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
Log.e(t);
var e = this.getVersionInfo(t);
Log.e(JSON.stringify(e));
Log.e(JSON.stringify(this.remoteVersions));
return e ? e.md5 && this.remoteVersions[t] && this.remoteVersions[t].md5 && e.md5 == this.remoteVersions[t].md5 ? r.Update.Status.UP_TO_DATE : r.Update.Status.NEED_UPDATE : r.Update.Status.NEED_DOWNLOAD;
};
Object.defineProperty(t.prototype, "appVersion", {
get: function() {
if (this.isBrowser) return this.defaultVersion;
var t = r.Update.MANIFEST_ROOT + "$apk.json", e = this.getString(t);
if (e) return "v" + JSON.parse(e).version;
Log.e(this.module + "无法读取到" + t);
return this.defaultVersion;
},
enumerable: !1,
configurable: !0
});
t.prototype.getMd5 = function(t) {
if (this.isBrowser) return this.defaultMD5;
t = this.convertBundle(t);
var e = this.getVersionInfo(t);
if (e) return "" + e.md5;
if (this.remoteVersions[t]) {
Log.w(this.module + "本地无版本信息,返回远程版本" + this.remoteVersions[t].md5);
return "" + this.remoteVersions[t].md5;
}
Log.e(this.module + "远程无版本信息，返回默认版本" + this.defaultMD5);
return this.defaultMD5;
};
t.prototype.getVersion = function(t) {
if (this.isBrowser) return this.defaultVersion;
t = this.convertBundle(t);
this.isAutoVersion && (t = a.Macro.MAIN_PACK_BUNDLE_NAME);
var e = this.getVersionInfo(t);
if (e) return "" + e.version;
if (this.remoteVersions[t]) {
Log.w(this.module + "本地无版本信息,返回远程版本" + this.remoteVersions[t].version);
return "" + this.remoteVersions[t].version;
}
Log.e(this.module + "远程无版本信息，返回默认版本" + this.defaultVersion);
return this.defaultVersion;
};
t.prototype.isMd5Change = function(t) {
t = this.convertBundle(t);
return !(!this.preVersions[t] || !this.remoteVersions[t] || this.preVersions[t].md5 == this.remoteVersions[t].md5);
};
t.prototype.getString = function(t) {
var e = "" + this.storagePath + t;
return jsb.fileUtils.isFileExist(e) ? jsb.fileUtils.getStringFromFile(e) : jsb.fileUtils.isFileExist(t) ? jsb.fileUtils.getStringFromFile(t) : void 0;
};
t.prototype.getVersionString = function(t) {
t = this.convertBundle(t);
var e = "" + r.Update.MANIFEST_ROOT + t + "_version.json";
return this.getString(e);
};
t.prototype.getProjectString = function(t) {
t = this.convertBundle(t);
var e = "" + r.Update.MANIFEST_ROOT + t + "_project.json";
return this.getString(e);
};
t.prototype.getVersionInfo = function(t) {
var e = this.getVersionString(t);
if (e) return JSON.parse(e);
};
t.prototype.loadVersions = function(t) {
var e = this;
return new Promise(function(n) {
return o(e, void 0, void 0, function() {
var e, o;
return i(this, function(i) {
switch (i.label) {
case 0:
if (this.isBrowser) {
n(!0);
return [ 2 ];
}
t.state = r.Update.State.PREDOWNLOAD_VERSION;
t.handler.onShowUpdating(t);
Log.d(this.module + " 请求远程版本信息");
return [ 4, this.readRemoteVersions() ];

case 1:
if (e = i.sent()) {
this.remoteVersions = JSON.parse(e);
if ((o = t.convertBundle(t.bundle)) == r.Update.MAIN_PACK && this.getStatus(o) == r.Update.Status.UP_TO_DATE) {
Log.d(this.module + " 主包已经是最新，写入远程的版本信息");
this.savePreVersions();
jsb.fileUtils.purgeCachedEntries();
}
Log.d(this.module + " 加载" + t.bundle + "时，加载远程版本信息成功...");
t.state = r.Update.State.VERSION_LOADED;
n(!0);
} else {
this.remoteVersions = {};
t.state = r.Update.State.FAIL_TO_UPDATE;
t.code = r.Update.Code.PRE_VERSIONS_NOT_FOUND;
t.handler.onPreVersionFailed(t);
Log.e(this.module + " 加载" + t.bundle + "时，加载远程版本信息失败...");
n(!1);
}
return [ 2 ];
}
});
});
});
};
t.prototype.getRemoteVersions = function() {
var t = this;
return new Promise(function(e) {
return o(t, void 0, void 0, function() {
var t;
return i(this, function(n) {
switch (n.label) {
case 0:
if (this.isBrowser) {
e(!0);
return [ 2 ];
}
Log.d(this.module + " 请求远程版本信息");
return [ 4, this.readRemoteVersions() ];

case 1:
if (t = n.sent()) {
this.remoteVersions = JSON.parse(t);
if (this.getStatus(r.Update.MAIN_PACK) == r.Update.Status.UP_TO_DATE) {
Log.d(this.module + " 主包已经是最新，写入远程的版本信息");
this.savePreVersions();
jsb.fileUtils.purgeCachedEntries();
}
Log.d(this.module + "加载远程版本信息成功...");
e(!0);
} else {
this.remoteVersions = {};
Log.e(this.module + " 加载远程版本信息失败...");
e(!1);
}
return [ 2 ];
}
});
});
});
};
t.prototype.convertBundle = function(t) {
return t == a.Macro.BUNDLE_RESOURCES ? r.Update.MAIN_PACK : t;
};
t.prototype.readRemoteVersions = function() {
var t = this;
return new Promise(function(e) {
var n = new s.HttpPackage();
n.data.url = t.hotUpdateUrl + "/" + r.Update.MANIFEST_ROOT + l.GlobalVar.VERSION_FILENAME;
n.data.isAutoAttachCurrentTime = !0;
n.send(function(t) {
e(t);
}, function(t) {
Log.dump(t);
e(null);
});
});
};
t.prototype.savePreVersions = function() {
if (Object.keys(this.remoteVersions).length > 0) {
Log.d(this.module + " 保存远程版本信息如下:");
var t = JSON.stringify(this.remoteVersions);
Log.d(t);
this.preVersions = JSON.parse(t);
} else Log.e(this.module + " 致命更新错误,无法读取到远程版本信息!!!");
};
t.prototype.debug = function() {
Log.d("-----------热火更新管理器中相关信息------------");
Log.dump({
name: "预处理版本信息",
data: this.preVersions
});
Log.dump({
name: "远程版本信息",
data: this.remoteVersions
});
};
t.module = "【更新管理器】";
return t;
}();
n.UpdateManager = u;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../defines/Macros": "Macros",
"../net/http/HttpClient": "HttpClient",
"./Update": "Update",
"./UpdateItem": "UpdateItem"
} ],
Update: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "97b39HmANRGlKWepYtdAr+F", "Update");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Update = void 0;
var o = t("../../defines/Macros");
(function(t) {
t.MAIN_PACK = o.Macro.MAIN_PACK_BUNDLE_NAME;
t.MANIFEST_ROOT = "manifest/";
(function(t) {
t[t.ERROR_NO_LOCAL_MANIFEST = 0] = "ERROR_NO_LOCAL_MANIFEST";
t[t.ERROR_DOWNLOAD_MANIFEST = 1] = "ERROR_DOWNLOAD_MANIFEST";
t[t.ERROR_PARSE_MANIFEST = 2] = "ERROR_PARSE_MANIFEST";
t[t.NEW_VERSION_FOUND = 3] = "NEW_VERSION_FOUND";
t[t.ALREADY_UP_TO_DATE = 4] = "ALREADY_UP_TO_DATE";
t[t.UPDATE_PROGRESSION = 5] = "UPDATE_PROGRESSION";
t[t.ASSET_UPDATED = 6] = "ASSET_UPDATED";
t[t.ERROR_UPDATING = 7] = "ERROR_UPDATING";
t[t.UPDATE_FINISHED = 8] = "UPDATE_FINISHED";
t[t.UPDATE_FAILED = 9] = "UPDATE_FAILED";
t[t.ERROR_DECOMPRESS = 10] = "ERROR_DECOMPRESS";
t[t.MAIN_PACK_NEED_UPDATE = 11] = "MAIN_PACK_NEED_UPDATE";
t[t.PRE_VERSIONS_NOT_FOUND = 12] = "PRE_VERSIONS_NOT_FOUND";
t[t.UNINITED = 13] = "UNINITED";
})(t.Code || (t.Code = {}));
(function(t) {
t[t.UNINITED = 0] = "UNINITED";
t[t.UNCHECKED = 1] = "UNCHECKED";
t[t.PREDOWNLOAD_VERSION = 2] = "PREDOWNLOAD_VERSION";
t[t.DOWNLOADING_VERSION = 3] = "DOWNLOADING_VERSION";
t[t.VERSION_LOADED = 4] = "VERSION_LOADED";
t[t.PREDOWNLOAD_MANIFEST = 5] = "PREDOWNLOAD_MANIFEST";
t[t.DOWNLOADING_MANIFEST = 6] = "DOWNLOADING_MANIFEST";
t[t.MANIFEST_LOADED = 7] = "MANIFEST_LOADED";
t[t.NEED_UPDATE = 8] = "NEED_UPDATE";
t[t.READY_TO_UPDATE = 9] = "READY_TO_UPDATE";
t[t.UPDATING = 10] = "UPDATING";
t[t.UNZIPPING = 11] = "UNZIPPING";
t[t.UP_TO_DATE = 12] = "UP_TO_DATE";
t[t.FAIL_TO_UPDATE = 13] = "FAIL_TO_UPDATE";
})(t.State || (t.State = {}));
(function(t) {
t[t.NEED_DOWNLOAD = 0] = "NEED_DOWNLOAD";
t[t.UP_TO_DATE = 1] = "UP_TO_DATE";
t[t.NEED_UPDATE = 2] = "NEED_UPDATE";
})(t.Status || (t.Status = {}));
var e = function() {
function t(t, e) {
this.bundle = "";
this.name = "";
this.name = t;
this.bundle = e;
}
t.prototype.clone = function() {
return new t(this.name, this.bundle);
};
return t;
}();
t.Config = e;
var n = function() {
function t(t, e) {
this.name = "";
this._manager = null;
this.type = "";
this.storagePath = "";
this.name = t;
this.type = "type." + t;
this.storagePath = e;
this.create();
}
Object.defineProperty(t.prototype, "manager", {
get: function() {
this._manager || this.create();
return this._manager;
},
set: function(t) {
this._manager = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.reset = function() {
this.manager.reset();
};
t.prototype.create = function() {
Log.d("创建 " + this.name + " AssetsManager");
this.manager = new jsb.AssetsManager(this.type, this.storagePath);
};
return t;
}();
t.AssetsManager = n;
})(n.Update || (n.Update = {}));
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
User: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9917cSi18NG16/f1xK6LCTK", "User");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../utils/CmmUtils"), i = t("../../sdk/GameNativeConfig"), r = t("./GlobalVar"), a = t("../../sdk/AppInfo"), s = t("../net/HttpSender"), c = t("./ConstString"), l = t("../event/CommonEvent"), u = t("../net/CommonSender"), p = function() {
function t() {
this.wOpenId = "";
this.roomTable = [];
this.crashModel = 0;
this.ruleFlag = "";
this.hasReqRoom = !1;
this.laba_broadcast_op = 0;
this.laba_broadcast_url = "";
this.isInGameScene = 0;
this.isInGameing = 0;
this.showGuest = 1;
this.min_charge = 0;
this.max_charge = 0;
this.has_charged = 0;
this.withdraw_alert = 0;
this.isAutoGame = !1;
this.register_type = 0;
this.register_vid = 7;
this.isLoginHall = !1;
this.teenPattiType = 0;
this.soreTb = [];
this.thirdToken = "";
this.loginType = 0;
this.curRoomId = 0;
this.curGameType = -1;
this.latitude = "";
this.longitude = "";
this.game_model = 0;
this.update_url = "";
this.facebook_appid = "";
this.kochava_guid = "";
this.kochava_type = 0;
this.appsflyer_guid = "";
this.hasInitAppsflyerSdk = 0;
this.appsflyer_type = 0;
this.pp_url = "";
this.tos_url = "";
this.isNeedLoc = !1;
this.online_users = 0;
this._loginTb = {};
this.redPoints = new Map();
this._mySaveKeys = {};
this.initUserData(a.default.getChannelId());
this.hasReqRoom = !1;
this.isInGameing = 0;
this.isInGameScene = 0;
}
Object.defineProperty(t, "self", {
get: function() {
return this._instance || (this._instance = new this());
},
enumerable: !1,
configurable: !0
});
t.prototype.initUserData = function(t) {
this.urlChannelId = t;
this.showGuest = 1;
this.min_charge = 0;
this.max_charge = 0;
this.has_charged = 0;
this.withdraw_alert = 0;
};
t.prototype.clear = function() {
this.loginType = 0;
this.thirdToken = "";
this._loginTb = {};
App.storage.removeItem(i.default.Key.PhoneId);
dispatch(l.CommonEvent.ClearLoginToken);
};
Object.defineProperty(t.prototype, "isCheckMode", {
get: function() {
return 1 == this.data.check_mode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "data", {
get: function() {
return this._loginTb;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "uid", {
get: function() {
return s.default.uid;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "skey", {
get: function() {
return this.data.skey;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "withdraw", {
get: function() {
return this.data.withdraw;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isPay", {
get: function() {
return this.data && this.data.paytotal > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "avatar", {
get: function() {
return c.ConstString.headPath + this._loginTb.avatar;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isBindPhone", {
get: function() {
return this.data && this.data.tel_no && this.data.tel_no.length > 6;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "tel_no", {
get: function() {
return this.data && this.data.tel_no ? this.data.tel_no : "";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "moneyNumber", {
get: function() {
return this.data.money;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "moneyString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.money);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "chipString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.chips);
},
enumerable: !1,
configurable: !0
});
t.prototype.setVipLevel = function(t) {
this.data.viplevel = t;
dispatch(i.default.Event.VIP_UPDATA, t);
};
t.prototype.setVipExtraPoint = function(t) {
Log.d("ExtraExtra:" + t);
this.data.bet_rate = t;
};
t.prototype.updateReward = function(t, e, n) {
Log.e(t);
1 == t.reward_type && (this.data.gmoney = t.gmoney);
2 == t.reward_type && (this.data.bonus = t.bonus);
if (e) {
var o = 1 == n ? i.default.Event.fly_gold1 : i.default.Event.fly_gold;
2 == t.reward_type ? dispatch(o, t.reward_value + " bonus") : o = i.default.Event.fly_gold2;
}
};
t.prototype.updatePlayerInfo = function(t) {
var e = this;
App.senderManager.get(u.default).Send_PlayerInfo(function(n) {
e.initPlayerInfo(n.data);
t && t();
});
};
t.prototype.updateServerRedPoint = function() {
var t = this;
this.isBindPhone && App.senderManager.get(u.default).Send_RedPoint(function(e) {
Log.e("红------" + JSON.stringify(e));
var n = e.data;
t.redPoints.clear();
for (var o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
var i = n[o];
if ("activity" == o) {
t.redPoints.set(o, !0);
t.initAcitvityRed(i);
} else t.redPoints.set(o, 0 != i);
}
dispatch(l.HttpEvent.UpdateRedPoint);
});
};
t.prototype.initAcitvityRed = function(t) {
for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
var n = t[e];
this.redPoints.set(e, 0 != n);
}
};
t.prototype.getRedPoint = function(t) {
return !!this.redPoints.has(t) && this.redPoints.get(t);
};
t.prototype.updateRedPoint = function(t, e) {
this.redPoints.set(t, e);
};
t.prototype.updateMoneyInfo = function() {
var t = this;
App.senderManager.get(u.default).Send_MoneyInfo(function(e) {
var n = e.data;
t._loginTb.deposit = n.deposit;
t._loginTb.withdraw = n.withdraw;
t._loginTb.bonus = n.bonus;
t._loginTb.money = n.money;
t._loginTb.gmoney = n.gmoney;
t._loginTb.gbonus = n.gbonus;
dispatch(i.default.Event.update_money);
});
};
t.prototype.updateFreeMoneyInfo = function() {
App.senderManager.get(u.default).Send_Act_16(function(e) {
t.self.initBindRewardInfo(e.data);
});
};
t.prototype.checkPlayer = function() {
App.senderManager.get(u.default).Send_CheckPlayer();
};
t.prototype.isFinishIdCardBind = function() {
return 1 == r.GlobalVar.countryCode || 3 == r.GlobalVar.countryCode ? !!(this._loginTb.idcard && o.CmmUtils.stringNotEmpty(this._loginTb.idcard.cert) && o.CmmUtils.stringNotEmpty(this._loginTb.idcard.realName)) : 5 != r.GlobalVar.countryCode;
};
t.prototype.updateIDCardInof = function(t, e) {
if (this._loginTb.idcard) {
this._loginTb.idcard.cert = t;
this._loginTb.idcard.realName = e;
}
};
t.prototype.initPlayerInfo = function(t) {
r.GlobalVar.global_telegram = t.telegram;
r.GlobalVar.global_whatsapp = t.whatsapp;
r.GlobalVar.stayLeftTime = t.stayLeftTime;
r.GlobalVar.stayDay = t.stayDay;
this._loginTb.create_time = t.create_time;
this._loginTb.playerMode = t.playerMode;
this._loginTb.cur_time = t.cur_time;
this._loginTb.name = t.name;
this._loginTb.payexp = t.payexp;
this._loginTb.betexp = t.betexp;
this._loginTb.stayexp = t.stayexp;
this._loginTb.payexpm = t.payexpm;
this._loginTb.betexpm = t.betexpm;
this._loginTb.stayexpm = t.stayexpm;
this._loginTb.viplevel = t.viplevel;
this._loginTb.deposit = t.deposit;
this._loginTb.withdraw = t.withdraw;
this._loginTb.bonus = t.bonus;
this._loginTb.money = t.money;
this._loginTb.gmoney = t.gmoney;
this._loginTb.gbonus = t.gbonus;
this._loginTb.tel_no = t.tel_no;
this._loginTb.avatar = t.avatar;
this._loginTb.avatar_url = t.avatar_url;
this._loginTb.bet_rate = t.bet_rate;
this._loginTb.money_exe = t.money_exe;
this._loginTb.paytotal = t.paytotal;
this._loginTb.chips = t.chips;
this._loginTb.dayfree = t.dayfree;
this._loginTb.dayfreeTime = t.dayFreeTime;
this._loginTb.loginDays = t.loginDays;
this._loginTb.safebox = t.safebox;
this._loginTb.rank = t.rank;
this._loginTb.idcard = t.idcard;
App.storage.setItem(c.ConstString.userName, t.name);
dispatch(i.default.Event.update_money);
dispatch(l.HttpEvent.CheckUpdateFinish);
};
t.prototype.initVipConfig = function(t) {
this._loginTb.vips = t.vips;
};
t.prototype.initFirstChargeInfo = function(t) {
this._loginTb.first_charge = t;
};
t.prototype.initBindRewardInfo = function(t) {
this._loginTb.bindRewardInfo = t;
dispatch(l.HttpEvent.UpdateFreeMoney);
};
t.prototype.Second = function() {
dispatch(l.CommonEvent.Time_Second);
this.countBindLeftTime();
};
Object.defineProperty(t.prototype, "haveWheelNum", {
get: function() {
return !!this._loginTb.wheelInfo && this._loginTb.wheelInfo.recharge_last > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "autoPopBind", {
get: function() {
return !(!this._loginTb.bindRewardInfo || 0 != this._loginTb.bindRewardInfo.recvTimes);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isShowFirstTips", {
get: function() {
return !(!this._loginTb.bindRewardInfo || 0 != this._loginTb.bindRewardInfo.recvTimes);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "showBindRewardBtn", {
get: function() {
return !!(this._loginTb.bindRewardInfo && this._loginTb.bindRewardInfo.recvTimes > 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isBozhu", {
get: function() {
return !!this._loginTb.playerMode && 3 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isTestPlayer", {
get: function() {
return !!this._loginTb.playerMode && 4 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isMerchantPlayer", {
get: function() {
return !!this._loginTb.playerMode && 5 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isNormalPlayer", {
get: function() {
return !!this._loginTb.playerMode && 1 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "getFreeAmount", {
get: function() {
return t.self.data.bindRewardInfo && t.self.data.bindRewardInfo.totalAmount ? t.self.data.bindRewardInfo.totalAmount : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "getBindRewardLeftTime", {
get: function() {
return this._loginTb.bindRewardInfo && this._loginTb.bindRewardInfo.leftTime > 0 ? this._loginTb.bindRewardInfo.leftTime : 0;
},
enumerable: !1,
configurable: !0
});
t.prototype.updateBindRewardLeftTime = function(t) {
if (this._loginTb.bindRewardInfo) {
this._loginTb.bindRewardInfo.leftTime = t.leftTime;
this._loginTb.bindRewardInfo.amount = t.amount;
this._loginTb.bindRewardInfo.totalAmount = t.nextAmount;
this._loginTb.bindRewardInfo.count = t.count;
}
return 0;
};
t.prototype.countBindLeftTime = function() {
if (this._loginTb.bindRewardInfo && this._loginTb.bindRewardInfo.leftTime > 0) {
this._loginTb.bindRewardInfo.leftTime -= 1;
this._loginTb.bindRewardInfo.leftTime < 0 && (this._loginTb.bindRewardInfo.leftTime = 0);
}
r.GlobalVar.OTPCountTime--;
r.GlobalVar.OTPCountTime < 0 && (r.GlobalVar.OTPCountTime = 0);
};
Object.defineProperty(t.prototype, "isFinishAllBigSale", {
get: function() {
return this.data && this.data.first_charge && this.data.first_charge.leftTime && this.data.first_charge.leftTime > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "canSafebox", {
get: function() {
return Math.floor(this.data.gmoney) > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bonusString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.bonus + this.data.gmoney);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bonusBString", {
get: function() {
return o.CmmUtils.NumberToBString(this.data.bonus + this.data.gmoney);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bonusNumber", {
get: function() {
return this.data.bonus + this.data.gmoney;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bonusOnlyNumber", {
get: function() {
return this.data.bonus;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bonusOnlyString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.bonus);
},
enumerable: !1,
configurable: !0
});
t.prototype.checkFastBuy = function() {
return 1 == this.data.first_charge;
};
t.prototype.bindPhone = function(t) {
this.data.tel_no = t;
dispatch(i.default.Event.MobileBlind_State);
};
t.prototype.updateOnlyBouns = function(t) {
null != t && (this.data.bonus = t);
dispatch(i.default.Event.update_money);
};
t.prototype.updateMoney = function(t) {
null != t && (this.data.money = t);
dispatch(i.default.Event.update_money);
};
t.prototype.updateGameMoney = function(t) {
null != t && (this.data.gameMoney = t);
dispatch(i.default.Event.update_money);
};
t.prototype.addMoney = function(t) {
this.data.money += t;
dispatch(i.default.Event.update_money);
};
t.prototype.addOnlyBouns = function(t) {
this.data.bonus += t;
dispatch(i.default.Event.update_money);
};
t.prototype.updateMoneyExe = function(t) {
null != t && (this.data.chips = t);
dispatch(i.default.Event.update_money);
};
t.prototype.updateAvatar = function(t) {
this.data.avatar = t;
dispatch(i.default.Event.update_money);
};
t.prototype.save = function(t, e) {
App.storage.setItem(this.uid + "." + t, e);
};
t.prototype.getLocalValue = function(t, e) {
return App.storage.getItem(this.uid + "." + t, e);
};
t.prototype.checkDay = function(t) {
if (this._mySaveKeys[t]) return !1;
var e = this.getLocalValue(t);
null == e && (e = "0");
return o.CmmUtils.Since(+e) > 864e5;
};
t.prototype.saveNow = function(t) {
if (!this._mySaveKeys[t]) {
this._mySaveKeys[t] = o.CmmUtils.msec;
this.save(t, o.CmmUtils.msec);
}
};
Object.defineProperty(t.prototype, "open_h5share", {
get: function() {
return !!this.data.open_h5share && 1 == this.data.open_h5share;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "open_h5link", {
get: function() {
return this.data.open_h5link;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isLuckySdk", {
get: function() {
return 1 == this.data.use_lucky_sdk;
},
enumerable: !1,
configurable: !0
});
t.prototype.saveAgameMoney = function() {
var e = App.storage.getItem(c.ConstString.agameData), n = JSON.parse(e);
n.money = t.self.data.money;
App.storage.setItem(c.ConstString.agameData, JSON.stringify(n));
};
t._instance = null;
return t;
}();
n.default = p;
cc._RF.pop();
}, {
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"../event/CommonEvent": "CommonEvent",
"../net/CommonSender": "CommonSender",
"../net/HttpSender": "HttpSender",
"../utils/CmmUtils": "CmmUtils",
"./ConstString": "ConstString",
"./GlobalVar": "GlobalVar"
} ],
Utils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "573e1UqFIBJ1bTmddUaWN6N", "Utils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Utils = void 0;
var o = function() {
function t() {
this.module = null;
}
t.prototype.showView = function(t, e) {
if (t) {
cc.Tween.stopAllByTag(999);
cc.tween(t).tag(999).set({
scale: .2
}).to(.2, {
scale: 1.15
}).delay(.05).to(.1, {
scale: 1
}).call(function() {
e && e();
}).start();
}
};
t.prototype.hideView = function(t, e) {
if (t) {
cc.Tween.stopAllByTag(999);
cc.tween(t).tag(999).to(.2, {
scale: 1.15
}).to(.1, {
scale: .3
}).call(function() {
e && e();
}).start();
}
};
t.prototype.isMail = function(t) {
return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(t);
};
t.prototype.isTEL = function(t) {
return /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g.test(t);
};
t.prototype.limitString = function(t, e, n, o) {
void 0 === n && (n = 100);
void 0 === o && (o = "..");
if (t) {
t.string = e;
t.forceDoLayout();
var i = t.node.width;
if (i <= n) return;
var r = (i - n) / (i / e.length);
r = Math.ceil(r);
var a = e.substring(0, e.length - r) + o;
t.string = a;
t.forceDoLayout();
for (;t.node.width > n; ) {
a = a.substring(0, a.length - o.length - 1) + o;
t.string = a;
t.forceDoLayout();
}
t.string = a;
}
};
t.prototype.toThousandths = function(t) {
var e = "";
if (t < 0) {
t *= -1;
e = "-";
}
var n = /(?=(?!\b)(\d{3})+\.?\b)/g;
return e + t.toString().replace(/(^|\s)\d+(?=\.?\d*($|\s))/g, function(t) {
return t.replace(n, ",");
});
};
t.prototype.toFormat = function(t, e) {
void 0 === e && (e = 2);
var n = {
K: 1e3,
M: 1e6,
B: 1e9,
T: 1e12
}, o = [ "K", "M", "B", "T" ], i = "", r = "", a = 0, s = 1;
t < 0 && (s = -1);
if ((t = Math.abs(t)) < 1e3) r = t.toFixed(e); else for (var c = o.length - 1; c >= 0; c--) if ((a = t / n[o[c]]) >= 1) {
r = a.toFixed(e);
i = o[c];
break;
}
return "" + (a = parseFloat(r)) * s + i;
};
t.prototype.toNumber = function(t, e) {
void 0 === e && (e = 2);
var n = t.match(/-?\d+e?[+-]?\d+[KMBT]?|-?\d*\.\d*e?[+-]?\d*[KMBT]?|-?\d+[KMBT]?/);
if (n && n.length > 0) {
for (var o = {
K: 1e3,
M: 1e6,
B: 1e9,
T: 1e12
}, i = "", r = 0; r < n.length; r++) i += n[r];
var a = i.match(/[KMBT]/), s = "";
a && a.length > 0 && (s = a[0]);
var c = i.substring(0, i.length - s.length), l = parseFloat(c), u = o[s];
u && (l *= u);
return parseFloat(l.toFixed(e));
}
Log.e("无法匹配" + t);
return 0;
};
t.prototype.isIDNumber = function(t) {
return !!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/g.test(t);
};
t.prototype.isTencentQQ = function(t) {
return !!/^[1-9][0-9]{4,}$/.test(t);
};
t.module = "【Utils】";
return t;
}();
n.Utils = o;
cc._RF.pop();
}, {} ],
WebSocketClient: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ac51fHyw0NHz4ZiC8L4t9zI", "WebSocketClient");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = t("../../../defines/Macros"), i = function() {
function t() {
this._tag = "[WebSocketClinet]";
this._ip = "";
this._port = null;
this._protocol = "wss";
this._dataArr = [];
this._isWaitingConnect = !1;
this._conTimeOut = 10;
this._sendTimeOut = 10;
this._ws = null;
this._onOpen = null;
this._onClose = null;
this._onMessage = null;
this._onError = null;
this._closeEvent = null;
}
Object.defineProperty(t.prototype, "connectTimeOut", {
get: function() {
return this._conTimeOut;
},
set: function(t) {
this._conTimeOut = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sendTimeOut", {
get: function() {
return this._sendTimeOut;
},
set: function(t) {
this._sendTimeOut = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onOpen", {
get: function() {
return this._onOpen;
},
set: function(t) {
this._onOpen = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onClose", {
get: function() {
return this._onClose;
},
set: function(t) {
this._onClose = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onMessage", {
get: function() {
return this._onMessage;
},
set: function(t) {
this._onMessage = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onError", {
get: function() {
return this._onError;
},
set: function(t) {
this._onError = t;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function(t, e, n) {
this._ip = t;
this._port = e;
this._protocol = n;
this._dataArr = [];
this._conTimeOut = 10;
this._sendTimeOut = 10;
this._closeEvent = null;
};
t.prototype.connectWebSocket = function(t, e, n) {
this.init(t, e, n);
if (this._ip) {
var o = n + "://" + this._ip;
this._port && (o = o + ":" + this._port);
this._ws = new WebSocket(o);
if (this._ws) {
this._ws.binaryType = "arraybuffer";
this._ws.onopen = this.__onConected.bind(this);
this._ws.onmessage = this.__onMessage.bind(this);
this._ws.onclose = this.__onClose.bind(this);
this._ws.onerror = this.__onError.bind(this);
}
}
};
t.prototype.initWebSocket = function(t, e, n) {
if (null == t || null == t || t.length < 0) ; else if (this._ws) if (this._ws.readyState == WebSocket.CONNECTING) {
if (this._ip == t && this._port == e) return;
} else if (this._ws.readyState == WebSocket.OPEN) this._ip == t && this._port; else if (this._ws.readyState == WebSocket.CLOSING) {
this._isWaitingConnect = !0;
this._ip = t;
this._port = e;
} else {
this._ws = null;
this.connectWebSocket(t, e, n);
} else this.connectWebSocket(t, e, n);
};
t.prototype.__onConected = function(t) {
this._ws;
if (this._dataArr.length > 0) {
for (var e = 0; e < this._dataArr.length; e++) this.send(this._dataArr[e]);
this._dataArr = [];
}
this.onOpen && this.onOpen(t);
};
t.prototype.__onMessage = function(t) {
this.onMessage && this.onMessage(t);
};
t.prototype.__onClose = function(t) {
this._ws = null;
if (this._closeEvent) {
t = this._closeEvent;
this._closeEvent = null;
}
if (this._isWaitingConnect) {
this._closeEvent = null;
this.connectWebSocket(this._ip, this._port, this._protocol);
this._isWaitingConnect = !1;
} else this.onClose && this.onClose(t);
};
t.prototype.__onError = function(t) {
this.onError && this.onError(t);
};
Object.defineProperty(t.prototype, "isConnected", {
get: function() {
return !(!this._ws || this._ws.readyState !== WebSocket.OPEN);
},
enumerable: !1,
configurable: !0
});
t.prototype.send = function(t) {
this._ws && t && (this._ws.readyState === WebSocket.OPEN ? this._ws.send(t) : this._ws.readyState == WebSocket.CONNECTING ? this._dataArr.push(t) : (this._ws.readyState, 
WebSocket.CLOSING));
};
t.prototype.close = function(t) {
if (this._ws) {
this._closeEvent = {
type: o.Macro.ON_CUSTOM_CLOSE,
isEnd: t
};
this._ws.close();
}
this._dataArr = [];
};
return t;
}();
n.default = i;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros"
} ],
ZProgressbar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6c323MfDwdGt6FVNsKDE69t", "ZProgressbar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.totalLength = 0;
e.progressMask = null;
e.labelValue = null;
e.tempValue = {
value: 0
};
return e;
}
e.prototype.progress = function(t) {
var e = this;
if (0 == t) {
this.tempValue = {
value: 0
};
this.setView(0);
} else {
this.node.active = !0;
this.tweener = cc.tween(this.tempValue).to(.5, {
value: t
}, {
onUpdate: function() {
e.setView(e.tempValue.value);
}
}).start();
}
};
e.prototype.setView = function(t) {
this.val = t;
var e = this.val / 1, n = this.totalLength * e;
this.progressMask.width = n;
this.labelValue.string = Math.ceil(100 * e) + "%";
};
r([ c ], e.prototype, "totalLength", void 0);
r([ c(cc.Node) ], e.prototype, "progressMask", void 0);
r([ c(cc.Label) ], e.prototype, "labelValue", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
ZRollAction: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d4c54KvmCNENKQscCCULmZ1", "ZRollAction");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/enum/GlobalEnum"), s = t("../../../scripts/common/utils/RandomUtil"), c = t("./ZRollElement"), l = cc._decorator, u = l.ccclass, p = (l.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.endElements = [];
e.result = null;
e.isRolling = !1;
e.speed = 2e3;
e.dtTime = .02;
e.curRollRunType = a.GlobalEnum.RollRunType.Normal;
e.curRollElementsConfig = [];
return e;
}
e.prototype.initData = function(t, e, n, o, i) {
var r = this;
this.accelerateDelayTime = 0;
this.nextRollAction = o;
this.rollIndex = t;
this.rollConfig = e;
this.speed = e.speed;
this.fixedSpeed = e.speed;
this.name = e.name;
this.interval = e.interval || 0;
this.randomMin = e.randomIconRange ? e.randomIconRange.x : 0;
this.randomMax = e.randomIconRange ? e.randomIconRange.y : e.elementCount;
this.view = i;
this.elements = [];
this.lockedEndElements = [];
this.node.destroyAllChildren();
this.maxNumY = e.numY + 2;
this.halfCount = e.numY / 2 - .5;
this.tempHalfCount = this.maxNumY / 2 - .5;
for (var a = 0; a < this.maxNumY; a++) {
var s = cc.instantiate(n);
s.name = "element" + a;
this.node.addChild(s);
s.position = cc.v3(0, (this.tempHalfCount - a) * s.getContentSize().height, 0);
var l = s.getComponent(c.default);
l.resetPostion = s.position;
l.index = a;
l.rollIndex = this.rollIndex;
l.finish = !1;
this.elements.push(l);
a > 0 && a < this.maxNumY - 1 && this.lockedEndElements.push(l);
}
this.elementCount = this.elements.length;
this.elements.forEach(function(t) {
0 == t.index ? t.lastElement = r.elements[r.elementCount - 1] : t.lastElement = r.elements[t.index - 1];
t.index == r.elementCount - 1 ? t.nextElement = r.elements[0] : t.nextElement = r.elements[t.index + 1];
});
this.sizeY = this.elements[0].node.getContentSize().height;
this.minY = this.elements[this.elementCount - 1].node.position.y;
this.maxY = this.elements[0].node.position.y;
this.isRolling = !1;
this.result = new Array();
this.halfUp = (this.halfCount + 1) * this.sizeY;
this.halfDown = -this.halfUp;
for (a = 0; a < this.elements.length; a++) this.elements[a].init(e);
this.randomAllElement();
for (a = 0; a < this.elements.length; a++) this.elements[a].setDefault();
this.isLocked = !1;
};
e.prototype.setLock = function(t) {
if (this.isLocked != t) {
this.isLocked = t;
if (this.isLocked) {
this.endElements = [];
for (var e = this.lockedEndElements.length - 1; e >= 0; e--) this.endElements.push(this.lockedEndElements[e]);
this.resetPosition();
}
}
};
e.prototype.setLockElement = function(t) {
for (var e = 0; e < this.endElements.length; e++) this.endElements[e].setResNorml(t[e]);
};
e.prototype.startRoll = function() {
var t = this;
if (!this.isLocked) {
for (var e = 0; e < this.elements.length; e++) {
var n = this.elements[e];
n.finish = !1;
cc.Tween.stopAllByTarget(n.node);
}
this.endElements = [];
this.speed = this.rollConfig.speed;
this.speed = this.fixedSpeed;
this.accelerateDelayTime = 0;
if (this.view.isCheckCallback_StartRoll && this.rollConfig.rollStartCB) {
this.view.isCheckCallback_StartRoll = !1;
this.rollConfig.rollStartCB(this.name);
}
switch (this.rollConfig.inEase) {
case 1:
this.inBack(function() {
t.isRolling = !0;
t.rollConfig.rollEaseFinishCB && t.rollConfig.rollEaseFinishCB(t.name, t.rollIndex);
});
break;

default:
this.isRolling = !0;
this.rollConfig.rollEaseFinishCB && this.rollConfig.rollEaseFinishCB(this.name, this.rollIndex);
}
}
};
e.prototype.sotpRoll = function(t) {
t && this.inBackTween && this.inBackTween.stop();
this.result = this.view.results[this.rollIndex];
if (this.isLocked) {
this.result.reverse();
for (var e = 0; e < this.endElements.length; e++) (r = this.endElements[e]).setResNorml(this.result[e].index);
this.nextRollAction && this.nextRollAction.sotpRoll(!1);
} else {
this.isRolling = !1;
var n = [];
for (e = 0; e < this.elements.length; e++) {
(r = this.elements[e]).setState(a.GlobalEnum.ElementState.Normal);
r.node.y < this.minY && n.push(r);
}
1 == n.length ? this.resetElement(n[0]) : n.length > 1 && this.overSpeedResetElement(n);
for (e = 0; e < this.elements.length; e++) (r = this.elements[e]).node.y >= this.halfUp && this.endElements.push(r);
this.endElements.sort(function(t, e) {
return t.node.y - e.node.y;
});
var o = this.endElements.length - this.rollConfig.numY;
if (o > 0) for (e = 0; e < o; e++) this.endElements.pop(); else if (o < 0) {
o = -o;
for (e = 0; e < o; e++) if (0 == this.endElements.length) {
this.resetPosition();
this.endElements.push(this.elements[0]);
} else {
var i = this.endElements[this.endElements.length - 1].lastElement;
this.endElements.push(i);
}
}
this.result.reverse();
for (e = 0; e < this.endElements.length; e++) {
var r;
(r = this.endElements[e]).setResNorml(this.result[e].index);
if (0 == e) {
r.targetPos = this.result[e].isEmpty ? cc.v2(0, -this.sizeY / 2 + (1 - this.halfCount) * this.sizeY) : cc.v2(0, -this.sizeY * this.halfCount);
r.finish = !0;
}
}
this.setToFixedPos(t);
}
};
e.prototype.setSpeed = function(t) {
this.speed = t;
};
e.prototype.startAccelerateBack = function() {
this.rollConfig.rollAccelerateStartCB && this.rollConfig.rollAccelerateStartCB(this.rollIndex);
};
e.prototype.setAccelerateSpeed = function(t, e) {
if (this.nextRollAction) {
this.nextRollAction.speed = t;
this.nextRollAction.startAccelerateBack();
this.accelerateDelayTime = e;
}
};
e.prototype.stopAnim = function() {
if (this.elements) for (var t = 0; t < this.elements.length; t++) this.elements[t] && this.elements[t].setState(a.GlobalEnum.ElementState.Normal);
};
e.prototype.setToFixedPos = function(t) {
for (var e = 0; e < this.endElements.length; e++) {
var n = this.endElements[e];
if (n.finish) {
this.moveToTargetPos(n, t);
return;
}
}
};
e.prototype.moveToTargetPos = function(t, e) {
var n = this, o = t.node.y;
cc.Tween.stopAllByTarget(t.node);
var i = "backOut";
this.rollConfig.stopEaseStr && (i = this.rollConfig.stopEaseStr);
cc.tween(t.node).to(.3, {
position: cc.v3(0, t.targetPos.y, 0)
}, {
easing: i,
onUpdate: function() {
var e = o - t.node.y;
o = t.node.y;
n.moveOtherElements(e, t, t.index, !0);
}
}).call(function() {
t.nextElement.node.y = t.node.y - n.sizeY;
n.rollConfig.gameFinishEndCB && n.rollConfig.gameFinishEndCB(n.rollIndex);
}).start();
this.scheduleOnce(function() {
n.rollConfig.rollFinishCB(e, n.rollIndex);
e || n.nextRollAction && (n.accelerateDelayTime > 0 ? n.scheduleOnce(function() {
n.nextRollAction.sotpRoll(!1);
}, n.accelerateDelayTime) : n.nextRollAction.sotpRoll(!1));
}, this.interval);
};
e.prototype.moveOtherElements = function(t, e) {
for (var n = 0; n < this.elements.length; n++) e != (i = this.elements[n]) && (i.node.y = i.node.y - t);
var o = [];
for (n = 0; n < this.elements.length; n++) {
var i;
(i = this.elements[n]).node.y < this.minY && o.push(i);
}
1 == o.length ? this.resetElement(o[0]) : o.length > 1 && this.overSpeedResetElement(o);
};
e.prototype.randomAllElement = function() {
for (var t = 0; t < this.elements.length; t++) {
var e = this.elements[t], n = 0;
if (this.rollConfig.elementRange_Init) {
var o = this.rollConfig.elementRange_Init[this.rollIndex];
n = o[s.RandomUtil.randomRange(0, o.length)] - 1;
} else n = s.RandomUtil.randomRange(this.randomMin, this.randomMax);
e.setRes(n);
}
};
e.prototype.randomAllElementByBetIndex = function() {};
e.prototype.customUpdate = function() {
this.isRolling && this.updateElementPos();
};
e.prototype.updateElementPos = function() {
for (var t = this.dtTime * this.speed, e = 0; e < this.elements.length; e++) (o = this.elements[e]).node.y = o.node.y - t;
var n = [];
for (e = 0; e < this.elements.length; e++) {
var o;
(o = this.elements[e]).node.y < this.minY && n.push(o);
}
1 == n.length ? this.resetElement(n[0]) : n.length > 1 && this.overSpeedResetElement(n);
};
e.prototype.resetElement = function(t) {
t.node.y = this.sizeY + t.nextElement.node.y;
this.resetByElement(t);
};
e.prototype.setCurRollElementConfig = function(t) {
this.curRollElementsConfig = [];
this.curRollRunType = t;
switch (t) {
case a.GlobalEnum.RollRunType.Normal:
if (this.rollConfig.elementRange_Run) {
var e = this.rollConfig.elementRange_Run[this.rollIndex];
if (this.rollConfig.elementRangeRate) for (var n = 0; n < e.length; n++) for (var o = e[n], i = 0; i < this.rollConfig.elementRangeRate[o - 1]; i++) this.curRollElementsConfig.push(o); else this.curRollElementsConfig = e;
}
break;

case a.GlobalEnum.RollRunType.Free:
var r = this.rollConfig.elementRange_Run_Free[this.rollIndex];
if (this.rollConfig.elementRangeRate) for (n = 0; n < r.length; n++) for (o = r[n], 
i = 0; i < this.rollConfig.elementRangeRate[o - 1]; i++) this.curRollElementsConfig.push(o); else this.curRollElementsConfig = r;
break;

case a.GlobalEnum.RollRunType.Respin:
var s = this.rollConfig.elementRange_Run_Respin[this.rollIndex];
if (this.rollConfig.elementRangeRate) for (n = 0; n < s.length; n++) for (o = s[n], 
i = 0; i < this.rollConfig.elementRangeRate[o - 1]; i++) this.curRollElementsConfig.push(o); else this.curRollElementsConfig = s;
}
};
e.prototype.resetByElement = function(t) {
if (this.isRolling) {
var e;
e = this.curRollElementsConfig.length > 0 ? this.curRollElementsConfig[s.RandomUtil.randomRange(0, this.curRollElementsConfig.length)] - 1 : s.RandomUtil.randomRange(this.randomMin, this.randomMax);
t.setRes(e);
}
};
e.prototype.overSpeedResetElement = function(t) {
if (t.length == this.elementCount) {
var e = this.getMinYElement(t);
e.node.y = this.maxY;
this.resetByElement(e);
this.resetMinByElement(e, e.index);
} else {
var n = this.getMaxYElement(this.elements), o = this.getMaxYElement(t);
this.resetMaxByElement(n, o.index);
}
};
e.prototype.resetMinByElement = function(t, e) {
if (t.nextElement.index != e) {
t.nextElement.node.y = t.node.y - this.sizeY;
this.resetByElement(t.nextElement);
this.resetMinByElement(t.nextElement, e);
}
};
e.prototype.resetMaxByElement = function(t, e) {
if (t.lastElement.index != e) {
t.lastElement.node.y = t.node.y + this.sizeY;
this.resetByElement(t.lastElement);
this.resetMaxByElement(t.lastElement, e);
}
};
e.prototype.getMinYElement = function(t) {
for (var e = Number.MAX_SAFE_INTEGER, n = -1, o = 0; o < t.length; o++) if (t[o].node.y < e) {
n = o;
e = t[o].node.y;
}
return t[n];
};
e.prototype.getMaxYElement = function(t) {
for (var e = -Number.MAX_SAFE_INTEGER, n = -1, o = 0; o < t.length; o++) if (t[o].node.y > e) {
n = o;
e = t[o].node.y;
}
return t[n];
};
e.prototype.inBack = function(t) {
var e = this;
this.inBackTween && this.inBackTween.stop();
var n = this.elements[0];
n.targetPos = cc.v2(0, n.node.position.y + 120);
var o = n.node.y;
this.inBackTween = cc.tween(n.node).to(.2, {
position: cc.v3(0, n.targetPos.y, 0)
}, {
easing: "backIn",
onUpdate: function() {
var t = o - n.node.y;
o = n.node.y;
e.moveOtherElements(t, n, n.index, !0);
}
}).call(function() {
t();
}).start();
};
e.prototype.resetPosition = function() {
for (var t = 0; t < this.elements.length; t++) this.elements[t].resetPos();
};
e.prototype.setExtraFunction = function(t) {
for (var e = 0; e < this.elements.length; e++) this.elements[e].setExtraFunction(t);
};
return r([ u ], e);
}(cc.Component));
n.default = p;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../../../scripts/common/utils/RandomUtil": "RandomUtil",
"./ZRollElement": "ZRollElement"
} ],
ZRollControler: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "befa8QtdYtKDp8F1uAoLJTu", "ZRollControler");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/enum/GlobalEnum"), s = t("./ZRollAction"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prefab = null;
e.rollActions = [];
e.isCheckCallback_StartRoll = !0;
return e;
}
e.prototype.onLoad = function() {
this.schedule(this.customUpdate.bind(this), .015, cc.macro.REPEAT_FOREVER);
};
e.prototype.initRollAcionts = function() {
for (var t = this.node.children, e = 0; e < t.length; e++) this.rollActions.push(t[e].getComponent(s.default));
};
e.prototype.initData = function(t) {
this.rollConfig = t;
0 == this.rollActions.length && this.initRollAcionts();
for (var e = 0; e < this.rollActions.length; e++) {
var n = this.rollActions[e + 1];
this.rollActions[e].initData(e, t, this.prefab, n, this);
}
this.setRollRunType(a.GlobalEnum.RollRunType.Normal);
};
e.prototype.setRollRunType = function(t) {
for (var e = 0; e < this.rollActions.length; e++) this.rollActions[e].setCurRollElementConfig(t);
};
e.prototype.getUnlockedCount = function() {
for (var t = 0, e = 0; e < this.rollActions.length; e++) this.rollActions[e].isLocked || t++;
return t;
};
e.prototype.setLocked = function(t) {
this.rollActions[t].setLock(!0);
};
e.prototype.setLockElement = function(t, e) {
this.rollActions[t].stopAnim();
this.rollActions[t].setLockElement(e);
};
e.prototype.setUnLocked = function(t) {
this.rollActions[t].setLock(!1);
};
e.prototype.resetUnLocked = function() {
for (var t = 0; t < this.rollActions.length; t++) this.rollActions[t].setLock(!1);
};
e.prototype.getRollAction = function(t) {
return this.rollActions[t];
};
e.prototype.getRollAction_All = function() {
return this.rollActions;
};
e.prototype.startRoll = function(t) {
var e = this;
void 0 === t && (t = 0);
this.isCheckCallback_StartRoll = !0;
if (t > 0) {
var n = this.rollActions.length - 2, o = 0;
this.rollActions[o].stopAnim();
this.rollActions[o].startRoll();
o++;
n >= 0 && this.schedule(function() {
e.rollActions[o].stopAnim();
e.rollActions[o].startRoll();
o++;
}, t, n);
} else for (var i = 0; i < this.rollActions.length; i++) {
this.rollActions[i].stopAnim();
this.rollActions[i].startRoll();
}
};
e.prototype.resetAllElementState = function() {
for (var t = 0; t < this.rollActions.length; t++) this.rollActions[t].stopAnim();
};
e.prototype.setAllElement = function() {
for (var t = 0; t < this.rollActions.length; t++) this.rollActions[t];
};
e.prototype.setAllElementExtra = function(t) {
for (var e = 0; e < this.rollActions.length; e++) this.rollActions[e].setExtraFunction(t);
};
e.prototype.initResult = function(t) {
this.results = t;
};
e.prototype.quickStopRoll = function() {
for (var t = 0; t < this.rollActions.length; t++) this.rollActions[t].sotpRoll(!0);
};
e.prototype.stopRoll = function() {
this.rollActions[0].sotpRoll(!1);
};
e.prototype.stopUnlockRoll = function() {
for (var t = 0; t < this.rollActions.length; t++) {
var e = this.rollActions[t];
if (!e.isLocked) {
e.sotpRoll(!1);
return;
}
}
};
e.prototype.starAccelerate = function(t, e) {
this.rollActions[t].setAccelerateSpeed(this.rollConfig.accelerate, e);
};
e.prototype.playEndAnim = function(t, e) {
for (var n = [], o = 0; o < this.rollActions.length; o++) for (var i = this.rollActions[o], r = i.endElements.length - 1; r >= 0; r--) {
var a = i.endElements[r];
n.push(a);
}
for (o = 0; o < t.length; o++) n[t[o]].setState(e[o]);
};
e.prototype.getEndNodes = function() {
for (var t = [], e = 0; e < this.rollActions.length; e++) for (var n = this.rollActions[e], o = n.endElements.length - 1; o >= 0; o--) {
var i = n.endElements[o];
t.push(i);
}
return t;
};
e.prototype.getEndNodesByIndex = function(t) {
for (var e = [], n = this.rollActions[t], o = n.endElements.length - 1; o >= 0; o--) {
var i = n.endElements[o];
e.push(i);
}
return e;
};
e.prototype.getElementNodes = function() {
for (var t = [], e = 0; e < this.rollActions.length; e++) for (var n = this.rollActions[e], o = n.elements.length - 1; o >= 0; o--) {
var i = n.elements[o];
t.push(i);
}
return t;
};
e.prototype.getElementNodesByIndex = function(t) {
for (var e = [], n = this.rollActions[t], o = n.elements.length - 1; o >= 0; o--) {
var i = n.elements[o];
e.push(i);
}
return e;
};
e.prototype.getElementNodes_TopToBottom = function() {
for (var t = [], e = 0; e < this.rollActions.length; e++) for (var n = this.getElementNodesByIndex_TopToBottom(e), o = 0; o < n.length; o++) {
var i = n[o];
t.push(i);
}
return t;
};
e.prototype.getElementNodesByIndex_TopToBottom = function(t) {
for (var e = [], n = this.rollActions[t], o = n.elements.length - 1; o >= 0; o--) {
var i = n.elements[o];
e.push(i);
}
for (var r = e.length, a = 1; a < r; a++) {
var s = e[a];
for (o = a - 1; o >= 0 && e[o].node.position.y > s.node.position.y; ) {
e[o + 1] = e[o];
--o;
}
e[o + 1] = s;
}
return e.reverse();
};
e.prototype.customUpdate = function(t) {
for (var e = 0; e < this.rollActions.length; e++) this.rollActions[e].customUpdate(t);
};
r([ u(cc.Prefab) ], e.prototype, "prefab", void 0);
return r([ l ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"./ZRollAction": "ZRollAction"
} ],
ZRollElement: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f949bCiDfBC/KN7H+/yqUqH", "ZRollElement");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/enum/GlobalEnum"), s = t("../ElementState/ElementState"), c = t("../ElementState/ExtraState"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.resetPostion = cc.Vec3.ZERO;
e.defautl = a.GlobalEnum.ElementState.Normal;
return e;
}
e.prototype.init = function(t) {
this.extraState = this.node.getComponentInChildren(c.default);
this.extraState && this.extraState.init(t);
this.rollConfig = t;
this.elementIns = [];
for (var e = this.node.children, n = 0; n < e.length; n++) {
var o = e[n].getComponent(s.default);
o && this.elementIns.push(o);
}
for (n = 0; n < this.elementIns.length; n++) this.elementIns[n].init(t);
};
e.prototype.resetPos = function() {
this.node.position = this.resetPostion;
};
e.prototype.setDefault = function() {
this.setState(this.defautl);
};
e.prototype.setExtraFunction = function(t) {
for (var e = 0; e < this.elementIns.length; e++) this.elementIns[e].setExtraFunction(t);
};
e.prototype.setState = function(t) {
this.curElement ? this.curElement.show(t) : console.error("没有钙元素" + t);
this.extraState && (a.GlobalEnum.ElementState.Reward == t ? this.rollConfig.rewardExtraEffect && this.extraState.show() : this.extraState.hide());
};
e.prototype.setRes = function(t) {
this.elementIndex = t;
this.elementValue = this.elementIndex + 1;
for (var e = 0; e < this.elementIns.length; e++) this.elementIns[e].hide();
this.curElement = this.elementIns[t];
this.rollConfig.turnType ? this.curElement.show(a.GlobalEnum.ElementState.BlurTrun) : this.curElement.show(a.GlobalEnum.ElementState.Turn);
};
e.prototype.setResNorml = function(t) {
this.elementIndex = t;
this.elementValue = this.elementIndex + 1;
for (var e = 0; e < this.elementIns.length; e++) this.elementIns[e].hide();
this.curElement = this.elementIns[t];
this.curElement.show(a.GlobalEnum.ElementState.Normal);
};
e.prototype.getCurElementStateNode = function() {
for (var t = 0; t < this.elementIns.length; t++) if (this.elementIns[t].node.active) return this.elementIns[t];
};
r([ p({
type: cc.Enum(a.GlobalEnum.ElementState)
}) ], e.prototype, "defautl", void 0);
return r([ u ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../ElementState/ElementState": "ElementState",
"../ElementState/ExtraState": "ExtraState"
} ],
ZRollMgr: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "187c1smehRCsqimymocNih6", "ZRollMgr");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/enum/GlobalEnum"), s = t("../../../scripts/framework/componects/EventComponent"), c = t("../Line/BaseLineMgr"), l = t("./ZRollControler"), u = cc._decorator, p = u.ccclass, d = u.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rollControler = null;
e.lineMgr = null;
e.animNode = null;
e.accelerateEffects = [];
return e;
}
e.prototype.initData = function(t) {
this.mainRollConfig = {
speed: 2e3,
accelerate: 3e3,
numY: 3,
lineCount: 5,
easeTime: .3,
elementCount: 11,
rewardParentOrginScale: 1,
name: "roll",
interval: .15,
turnType: 1,
stopTime: 1.55,
inEase: 1,
rollStartCB: this.rollStartCB.bind(this),
rollEaseFinishCB: this.rollEaseFinishCB.bind(this),
rollFinishCB: this.rollFinishCB.bind(this),
rollAccelerateStartCB: this.rollAccelerateStartCB.bind(this)
};
if (t) {
this.mainRollConfig.speed = t.speed;
this.mainRollConfig.accelerate = t.accelerate;
this.mainRollConfig.numY = t.numY;
this.mainRollConfig.easeTime = t.easeTime;
this.mainRollConfig.lineCount = t.lineCount;
this.mainRollConfig.elementCount = t.elementCount;
this.mainRollConfig.name = t.name;
this.mainRollConfig.interval = t.interval;
this.mainRollConfig.turnType = t.turnType;
this.mainRollConfig.stopTime = t.stopTime;
this.mainRollConfig.inEase = t.inEase;
this.mainRollConfig.rewardExtraEffect = t.rewardExtraEffect;
this.mainRollConfig.rewardParent = this.animNode;
this.mainRollConfig.rewardParentOrginScale = t.rewardParentOrginScale;
this.mainRollConfig.betIndex = t.betIndex;
t.numY_EveryReel && (this.mainRollConfig.numY_EveryReel = t.numY_EveryReel);
this.mainRollConfig.fixedParent1 = t.fixedParent1;
this.mainRollConfig.fixedParent2 = t.fixedParent2;
this.mainRollConfig.fixedParent3 = t.fixedParent3;
t.elementRange_Init && (this.mainRollConfig.elementRange_Init = t.elementRange_Init);
t.elementRange_Run && (this.mainRollConfig.elementRange_Run = t.elementRange_Run);
t.elementRange_Run_Free && (this.mainRollConfig.elementRange_Run_Free = t.elementRange_Run_Free);
t.elementRange_Run_Respin && (this.mainRollConfig.elementRange_Run_Respin = t.elementRange_Run_Respin);
t.elementFixed_Run && (this.mainRollConfig.elementFixed_Run = t.elementFixed_Run);
t.rollStartCB && (this.mainRollConfig.rollStartCB = t.rollStartCB);
t.rollEaseFinishCB && (this.mainRollConfig.rollEaseFinishCB = t.rollEaseFinishCB);
t.rollFinishCB && (this.mainRollConfig.rollFinishCB = t.rollFinishCB);
t.rollAccelerateStartCB && (this.mainRollConfig.rollAccelerateStartCB = t.rollAccelerateStartCB);
t.rollStopAudioCB && (this.mainRollConfig.rollStopAudioCB = t.rollStopAudioCB);
t.gameFinishEndCB && (this.mainRollConfig.gameFinishEndCB = t.gameFinishEndCB);
}
this.lineMgr && this.lineMgr.init(this.mainRollConfig, this.node.scale);
this.rollControler.initData(this.mainRollConfig);
};
e.prototype.startRoll = function(t) {
void 0 === t && (t = 0);
this.rollControler.startRoll(0);
};
e.prototype.starDelaytRoll = function(t) {
void 0 === t && (t = 0);
this.rollControler.startRoll(t);
};
e.prototype.initResult = function(t) {
this.results = t.results;
this.awardPos = t.awardPos;
this.awardline = t.awardline;
this.rollControler.initResult(t.results);
};
e.prototype.quickStopRoll = function() {
this.rollControler.quickStopRoll();
};
e.prototype.stopRoll = function() {
this.rollControler.stopRoll();
};
e.prototype.stopUnlockRoll = function() {
this.rollControler.stopUnlockRoll();
};
e.prototype.resetAllElementState = function() {
this.rollControler.resetAllElementState();
};
e.prototype.setAllElement = function(t) {
this.rollControler.setAllElement(t);
};
e.prototype.setAllElementExtra = function(t) {
this.rollControler.setAllElementExtra(t);
};
e.prototype.getUnlockCount = function() {
return this.rollControler.getUnlockedCount();
};
e.prototype.playEndAnim = function() {
this.rollControler.playEndAnim(this.awardPos, this.getStates());
};
e.prototype.setLocked = function(t) {
this.rollControler.setLocked(t);
};
e.prototype.setLockedElement = function(t, e) {
this.rollControler.setLockElement(t, e);
};
e.prototype.setUnLocked = function(t) {
for (var e = 0; e < t.length; e++) {
var n = t[e];
this.rollControler.setUnLocked(n);
}
};
e.prototype.resetUnLocked = function() {
this.rollControler.resetUnLocked();
};
e.prototype.getEndNodes = function() {
return this.rollControler.getEndNodes();
};
e.prototype.getEndNodesByIndex = function(t) {
return this.rollControler.getEndNodesByIndex(t);
};
e.prototype.getIndexEndNodesByValue = function(t, e) {
for (var n = this.rollControler.getEndNodesByIndex(t), o = [], i = 0; i < n.length; i++) {
var r = n[i];
r.elementValue == e && o.push(r);
}
return o;
};
e.prototype.getEndNodesByValue = function(t) {
for (var e = this.rollControler.getEndNodes(), n = [], o = 0; o < e.length; o++) {
var i = e[o];
i.elementValue == t && n.push(i);
}
return n;
};
e.prototype.starAccelerate = function(t, e) {
this.rollControler.starAccelerate(t, e);
};
e.prototype.getRollAction = function(t) {
return this.rollControler.getRollAction(t);
};
e.prototype.showRewardLines = function(t) {
this.lineMgr && this.awardline && this.awardline.length > 0 && this.lineMgr.showRewardLines(this.awardline, t);
};
e.prototype.hideLines = function() {
this.lineMgr && this.lineMgr.hide();
};
e.prototype.rollStartCB = function() {
this.curSpinIndex = -1;
};
e.prototype.rollAccelerateStartCB = function() {};
e.prototype.rollEaseFinishCB = function() {};
e.prototype.rollFinishCB = function(t, e) {
this.curSpinIndex = e;
this.mainRollConfig.numY;
};
e.prototype.awardStep1 = function() {
if (this.awardPos.length > 0) {
this.showRewardLines(a.GlobalEnum.LinesShowType.None);
this.playEndAnim();
}
};
e.prototype.getStates = function() {
for (var t = [], e = this.awardPos, n = 0; n < e.length; n++) t.push(a.GlobalEnum.ElementState.Reward);
return t;
};
r([ d(l.default) ], e.prototype, "rollControler", void 0);
r([ d(c.default) ], e.prototype, "lineMgr", void 0);
r([ d(cc.Node) ], e.prototype, "animNode", void 0);
r([ d(cc.Node) ], e.prototype, "accelerateEffects", void 0);
return r([ p ], e);
}(s.default);
n.default = f;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../Line/BaseLineMgr": "BaseLineMgr",
"./ZRollControler": "ZRollControler"
} ],
aesres: [ function(t, e, n) {
(function(o) {
"use strict";
cc._RF.push(e, "61e3cIPpFRNmJzfd5EGMn6y", "aesres");
var i = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = t("../common/net/HttpSender"), a = cc._decorator, s = a.ccclass, c = (a.property, 
function() {
function t() {}
e = t;
t.encrypt = function(t) {
var e = this.simpleXorEncrypt(t, r.default.httpSecretKey);
return o.from(e).toString("base64");
};
t.dencrypt = function(t) {
var n = window.atob(t);
n = e.simpleXorDecrypt(n, r.default.httpSecretKey);
return t;
};
t.simpleXorEncrypt = function(t, e) {
for (var n = "", o = 0; o < t.length; o++) {
var i = t.charCodeAt(o) ^ e.charCodeAt(o % e.length);
n += String.fromCharCode(i);
}
return n;
};
t.simpleXorDecrypt = function(t, n) {
return e.simpleXorEncrypt(t, n);
};
var e;
return e = i([ s ], t);
}());
n.default = c;
cc._RF.pop();
}).call(this, t("buffer").Buffer);
}, {
"../common/net/HttpSender": "HttpSender",
buffer: 6
} ],
gameLoading: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e680eX49uBFHKe0UMsxywGM", "gameLoading");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.load_item = null;
e.speed = 2;
return e;
}
e.prototype.onEnable = function() {
if (this.load_item) {
var t = cc.repeatForever(cc.rotateBy(this.speed, 360));
this.load_item.node.runAction(t);
}
};
r([ c(cc.Sprite) ], e.prototype, "load_item", void 0);
r([ c(cc.Float) ], e.prototype, "speed", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
gameRoot: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "088a7d9CP1EBovWDAEwAdY6", "gameRoot");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(t) {
try {
c(o.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = t("console"), l = t("../../../scripts/common/enum/GlobalEnum"), u = t("../../../scripts/common/utils/CmmUtils"), p = t("../../../scripts/common/utils/RandomUtil"), d = t("../../../scripts/framework/componects/EventComponent"), f = t("../../core/newRoll/ZRollControler"), h = t("./AudioMgr"), _ = t("./SlotJudge"), g = t("./slotsOperate"), y = t("../../../scripts/framework/defines/Enums"), m = cc._decorator, E = m.ccclass, v = (m.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mainRollConfig = null;
e.operateData = null;
e.operate = null;
e.controler = null;
e.set = null;
e.setPanel = null;
e.curSpinTime = 0;
e.oneClick = !1;
e.isGetReward = !1;
return e;
}
e.prototype.onLoad = function() {
this.initNode();
t.prototype.onLoad.call(this);
this.initEvent();
this.refresh();
};
e.prototype.initNode = function() {
this.controler = cc.find("controler", this.node).getComponent(f.default);
this.operate = cc.find("operate", this.node).getComponent(g.default);
this.set = cc.find("set", this.node);
this.setPanel = cc.find("setPanel", this.node);
};
e.prototype.initEvent = function() {
var t = this;
this.onN(this.set, y.NodeEvent.click, function() {
h.default.instance.playEffect("click");
t.setPanel.active = !0;
});
};
e.prototype.refresh = function() {
this.mainRollConfig = {
speed: 3e3,
accelerate: 3e3,
lineCount: 25,
numY: 5,
easeTime: .3,
elementCount: 11,
name: "roll",
interval: .24,
turnType: 1,
inEase: 0,
stopTime: 1.5,
rewardExtraEffect: 1,
elementRange_Init: [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ] ],
elementRange_Run: [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ] ],
elementRange_Run_Free: [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ] ],
elementRangeRate: [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
rollStartCB: this.rollStartCB.bind(this),
rollFinishCB: this.rollFinishCB.bind(this),
rollAccelerateStartCB: this.rollAccelerateStartCB.bind(this),
gameFinishEndCB: this.gameFinishEndCB.bind(this)
};
this.operateData = {
betValues: [ 1, 5, 10, 50 ],
curBetIndex: 0,
betType: 1,
autoValues: [ 500, 200, 100, 20 ],
spinCallBack: this.spinCallBack.bind(this),
stopCallBack: this.stopCallBack.bind(this)
};
this.controler.initData(this.mainRollConfig);
};
e.prototype.start = function() {
this.operate.init(this.operateData);
this.operate.setBtnState(1);
};
e.prototype.spinCallBack = function() {
if (this.operate.isCanSpin()) {
this.operate.setBtnState(0);
this.controler.startRoll(0);
} else c.error("余额不足，请充值");
};
e.prototype.stopCallBack = function() {
if (this.oneClick) {
this.controler.quickStopRoll();
this.operate.setBtnState(3);
this.oneClick = !1;
}
};
e.prototype.update = function(t) {
if (this.oneClick) {
this.curSpinTime += t;
if (this.curSpinTime > this.mainRollConfig.stopTime && this.isGetReward) {
this.updateAutoStop();
this.oneClick = !1;
return;
}
}
};
e.prototype.updateReward = function() {
for (var t = [], e = 0; e < 4; e++) {
for (var n = [], o = 0; o < 5; o++) {
var i = p.RandomUtil.randomRange(0, 7);
n.push(i);
}
t.push(n);
}
this.serverReslut = _.default.checkAwards(t, this.operate.betValue);
console.error(this.serverReslut);
var r = [];
for (e = 0; e < 4; e++) {
for (n = [], o = 0; o < 5; o++) {
i = this.serverReslut.value[e][o];
n.push({
index: i,
value: i + 1,
isEmpty: !1
});
}
r.push(n);
}
this.controler.results = r;
this.isGetReward = !0;
};
e.prototype.updateAutoStop = function() {
this.operate.setBtnState(3);
this.controler.stopRoll();
};
e.prototype.rollStartCB = function() {
this.oneClick = !0;
this.curSpinTime = 0;
this.isGetReward = !1;
this.updateReward();
this.curSpinIndex = -1;
this.chiliElements = [];
this.operate.setBtnState(2);
this.operate.spinUpadateCoin();
};
e.prototype.rollAccelerateStartCB = function() {};
e.prototype.rollFinishCB = function(t, e) {
this.curSpinIndex = e;
var n = e == this.controler.getUnlockedCount() - 1;
t ? n && h.default.instance.playEffect("stop") : h.default.instance.playEffect("stop");
};
e.prototype.gameFinishEndCB = function(t) {
t == this.controler.getUnlockedCount() - 1 && this.playResultAni();
};
e.prototype.playResultAni = function() {
return a(this, void 0, void 0, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
this.controler.resetAllElementState();
if (!(this.serverReslut.awardResult.awardType > 0)) return [ 3, 3 ];
this.controler.playEndAnim(this.serverReslut.awardResult.awardPos, this.getStates());
return [ 4, u.CmmUtils.awaitTime(300) ];

case 1:
t.sent();
this.operate.showWin(this.serverReslut.awardResult.score);
this.operate.updateCoins(this.serverReslut.awardResult.score);
return [ 4, u.CmmUtils.awaitTime(700) ];

case 2:
t.sent();
this.endfunc();
return [ 3, 4 ];

case 3:
this.operate.showWin(0);
this.endfunc();
return [ 2 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.getStates = function() {
for (var t = [], e = this.serverReslut.awardResult.awardPos, n = 0; n < e.length; n++) t.push(l.GlobalEnum.ElementState.Reward);
return t;
};
e.prototype.endfunc = function() {
this.operate.setBtnState(1);
};
return r([ E ], e);
}(d.default));
n.default = v;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../../../scripts/common/utils/CmmUtils": "CmmUtils",
"../../../scripts/common/utils/RandomUtil": "RandomUtil",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/framework/defines/Enums": "Enums",
"../../core/newRoll/ZRollControler": "ZRollControler",
"./AudioMgr": "AudioMgr",
"./SlotJudge": "SlotJudge",
"./slotsOperate": "slotsOperate",
console: 8
} ],
slotsOperate: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a3ccbpSPFlKr6SC6xdoaE2U", "slotsOperate");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../../scripts/common/event/CommonEvent"), s = t("../../../scripts/common/utils/CmmUtils"), c = t("../../../scripts/framework/componects/EventComponent"), l = t("../../../scripts/framework/defines/Enums"), u = t("../../../scripts/sdk/SdkManager"), p = t("./AudioMgr"), d = cc._decorator, f = d.ccclass, h = d.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spin = null;
e.stop = null;
e.adReward = null;
e.bet = null;
e.betMore = null;
e.betLabel = null;
e.curCoins = null;
e.winLabel = null;
e._data = null;
e.betValue = 1;
e.curCoinsValue = 100;
return e;
}
e.prototype.init = function(t) {
this._data = t;
this.clickBetItem(0);
this.updateCoins();
};
e.prototype.addEvents = function() {
var t = this;
this.onN(this.spin.node, l.NodeEvent.click, function() {
p.default.instance.playEffect("spin");
t._data && t._data.spinCallBack && t._data.spinCallBack();
});
this.onN(this.stop.node, l.NodeEvent.click, function() {
p.default.instance.playEffect("click");
t._data && t._data.stopCallBack && t._data.stopCallBack();
});
this.onN(this.adReward, l.NodeEvent.click, function() {
p.default.instance.playEffect("click");
u.default.showRewardedAd();
});
this.onN(this.bet, l.NodeEvent.click, function() {
p.default.instance.playEffect("click");
t.betMore.active = !0;
});
for (var e = this.betMore.children, n = 0; n < e.length; n++) {
var o = e[n];
this.onN(o, l.NodeEvent.click, this.clickBetItem.bind(this, n));
}
this.onD(a.SdkEvent.SdkEvent_finish_video_back, function() {
Log.d("激励视频播放完成，发放奖励");
t.updateCoins(1e3);
});
};
e.prototype.setBtnState = function(t) {
switch (t) {
case 1:
this.spin.interactable = !0;
this.spin.node.active = !0;
this.stop.node.active = !1;
this.stop.interactable = !1;
break;

case 2:
this.spin.interactable = !1;
this.spin.node.active = !1;
this.stop.interactable = !0;
this.stop.node.active = !0;
break;

case 3:
this.spin.interactable = !1;
this.spin.node.active = !1;
this.stop.interactable = !1;
this.stop.node.active = !0;
break;

default:
this.spin.interactable = !1;
this.stop.interactable = !1;
}
};
e.prototype.clickBetItem = function(t) {
p.default.instance.playEffect("click");
this.betValue = this._data.betValues[t];
this.betLabel.string = this.betValue.toString();
this.betMore.active = !1;
};
e.prototype.showWin = function(t) {
this.winLabel.string = t > 0 ? "WIN " + s.CmmUtils.NumberToHallString(t) : "Good Luck";
};
e.prototype.isCanSpin = function() {
return !(this.curCoinsValue < this.betValue);
};
e.prototype.spinUpadateCoin = function() {
this.curCoinsValue -= this.betValue;
App.storage.setItem("coins", this.curCoinsValue);
this.curCoins.string = s.CmmUtils.NumberToHallString(this.curCoinsValue);
};
e.prototype.updateCoins = function(t) {
if (t) {
this.curCoinsValue += t;
App.storage.setItem("coins", this.curCoinsValue);
}
this.curCoinsValue = App.storage.getItem("coins", 100);
this.curCoins.string = s.CmmUtils.NumberToHallString(this.curCoinsValue);
};
r([ h(cc.Button) ], e.prototype, "spin", void 0);
r([ h(cc.Button) ], e.prototype, "stop", void 0);
r([ h(cc.Node) ], e.prototype, "adReward", void 0);
r([ h(cc.Node) ], e.prototype, "bet", void 0);
r([ h(cc.Node) ], e.prototype, "betMore", void 0);
r([ h(cc.Label) ], e.prototype, "betLabel", void 0);
r([ h(cc.Label) ], e.prototype, "curCoins", void 0);
r([ h(cc.Label) ], e.prototype, "winLabel", void 0);
return r([ f ], e);
}(c.default);
n.default = _;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": "CommonEvent",
"../../../scripts/common/utils/CmmUtils": "CmmUtils",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/framework/defines/Enums": "Enums",
"../../../scripts/sdk/SdkManager": "SdkManager",
"./AudioMgr": "AudioMgr"
} ]
}, {}, [ "Application", "MainController", "SlotsDataUtil", "AnimationPlayState", "BaseAnimState", "DragonPlayState", "SpinePlayState", "SpritePlayState", "TAtlasPlayState", "TUVPlayState", "ElementState", "ExtraState", "BaseLineItem ", "BaseLineMgr", "LineItem", "LineItemSize", "LineMgr", "SimpleLineMgr", "RollElement", "ZRollAction", "ZRollControler", "ZRollElement", "ZRollMgr", "AudioMgr", "Login", "SetPanel", "SlotJudge", "gameRoot", "slotsOperate", "HotVersion", "aesres", "Animation_Nodes", "TAtlasPlay", "TAtlasPlay_Init", "TUVPlay", "Alert", "GlobalAudio", "GrayNodeColor", "Loading", "Tips", "UIContainer", "UILoading", "UIReconnect", "UpdateLoading", "ZProgressbar", "gameLoading", "CmdConfig", "Config", "ConstString", "GlobalVar", "HostInfo", "User", "Bundles", "StageData", "BundleUpdateHandlerImpl", "CmmEntry", "MainUpdateHandlerImpl", "GlobalEnum", "CommonEvent", "CmdDefines", "CommonGameJson", "CommonSender", "CommonService", "GetCmdKey", "HttpSender", "ReconnectHandler", "CmmUtils", "RandomUtil", "StorageUtils", "UIUtils", "URLConfig", "Framework", "AudioComponent", "EventComponent", "GameDesignSizeTopFit", "AssetManager", "BundleManager", "CacheManager", "Resource", "ResourceLoader", "Entry", "EntryDelegate", "EntryManager", "Dispatcher", "EventProcessor", "Logger", "Net", "Http", "HttpClient", "BinaryStreamMessage", "DefaultCodec", "JsonMessage", "Message", "ProtoMessage", "Handler", "HandlerManager", "Process", "Sender", "SenderManager", "Service", "ServiceManager", "ServerConnector", "WebSocketClient", "LocalStorage", "GameView", "UIManager", "UIView", "Update", "UpdateItem", "UpdateManager", "DataCenter", "GameData", "Decorators", "Enums", "Macros", "BitEncrypt", "ByteArray", "CanvasHelper", "Singleton", "SingletonT", "Utils", "LoginEntry", "HallHandler", "HallSender", "LobbyCmd", "LobbyService", "TestJsonMessage", "CommonUIHelper", "HotUpdate", "LoginView", "LoginViewNodes", "AppInfo", "GameNativeConfig", "SdkCallBack", "SdkManager" ]);