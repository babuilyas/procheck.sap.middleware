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
exports.Client = exports.Connection = exports.ExitCode = void 0;
var node_rfc_1 = require("node-rfc");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return node_rfc_1.Client; } });
var ExitCode;
(function (ExitCode) {
    ExitCode[ExitCode["success"] = 0] = "success";
    ExitCode[ExitCode["fail"] = 4] = "fail";
    ExitCode[ExitCode["uknown"] = 8] = "uknown";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
var Connection = /** @class */ (function () {
    function Connection(dest) {
        var _this = this;
        this.Connect = function () {
            return _this._Client.connect();
        };
        this.Close = function (callback) {
            return _this._Client.close(callback);
        };
        var xRfcPara = __assign({}, dest);
        this._Client = new node_rfc_1.Client(xRfcPara);
    }
    Object.defineProperty(Connection.prototype, "Client", {
        get: function () {
            return this._Client;
        },
        enumerable: false,
        configurable: true
    });
    return Connection;
}());
exports.Connection = Connection;
//# sourceMappingURL=SAPMiddleware.js.map