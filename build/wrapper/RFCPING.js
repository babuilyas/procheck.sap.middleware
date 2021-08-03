"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.call = void 0;
var RfcName = 'RFC_PING_AND_WAIT';
var call = function (con, params, success, failure) {
    return new Promise(function (resolve, reject) {
        con.Client.open();
        var results = con.Client.call(RfcName, __assign({}, params))
            .then(function (rfcobj) {
            if (success !== undefined)
                success(true);
            resolve(true);
        })
            .catch(function (reason) {
            if (failure !== undefined)
                failure(reason);
            reject(reason);
        });
    });
};
exports.call = call;
