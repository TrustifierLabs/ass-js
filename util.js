"use strict";
function noop() { }
exports.noop = noop;
function extend(obj1, obj2) {
    var objs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        objs[_i - 2] = arguments[_i];
    }
    if (typeof obj2 === 'object')
        for (var i in obj2)
            obj1[i] = obj2[i];
    if (objs.length)
        return extend.apply(null, [obj1].concat(objs));
    else
        return obj1;
}
exports.extend = extend;
var UInt64 = (function () {
    function UInt64() {
    }
    UInt64.hi = function (a, lo) {
        if (lo === void 0) { lo = UInt64.lo(a); }
        var hi = a - lo;
        hi /= 4294967296;
        return hi;
    };
    UInt64.lo = function (a) {
        var lo = a | 0;
        if (lo < 0)
            lo += 4294967296;
        return lo;
    };
    UInt64.joinToNumber = function (hi, lo) {
        if (lo < 0)
            lo += 4294967296;
        return hi * 4294967296 + lo;
    };
    UInt64.toNumber = function (num64) {
        var lo = num64[0], hi = num64[1];
        if (lo < 0)
            lo += 4294967296;
        return hi * 4294967296 + lo;
    };
    UInt64.toNumber64 = function (num) {
        var lo = num | 0;
        if (lo < 0)
            lo += 4294967296;
        var hi = num - lo;
        hi /= 4294967296;
        return [lo, hi];
    };
    return UInt64;
}());
exports.UInt64 = UInt64;
