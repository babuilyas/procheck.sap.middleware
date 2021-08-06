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
/**
 * @param {Import}  params - A .
 */
var call = function (con, params, success, failure) {
    return new Promise(function (resolve, reject) {
        // con.Client.open();
        if (!params.P_EQUNR)
            reject('Equipment number is missing!');
        if (!params.P_REASON)
            reject('Reason is missing!');
        var RfcName = 'ZWQ_PM_ORD_NOTIFY_BAPI';
        con.Client.call(RfcName, __assign({}, params))
            .then(function (rfcobj) {
            var order_number;
            if (rfcobj.P_STATUS) {
                order_number = rfcobj.P_STATUS;
                if (success !== undefined)
                    success(order_number);
                resolve(order_number);
            }
            else
                reject('Equipment Number is correct!');
        })
            .catch(function (reason) {
            if (failure !== undefined)
                failure(reason);
            reject(reason);
        });
    });
};
exports.call = call;
//export { NOTIFHEADER }
//# sourceMappingURL=ORD_NOTIFICATION.js.map