"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api = __importStar(require("../index"));
var cpara = {
    ASHOST: '192.168.64.163',
    CLIENT: '001',
    SYSNR: '00',
    R3NAME: 'R3P',
    SAPROUTER: '/H/125.209.118.234/H/172.16.0.185',
    USER: 'ILYAS',
    PASSWD: 'Password3'
};
var con = new api.Connection(cpara);
con.Client.connect();
var c = api.PingAPI.call(con, {
    SECONDS: 1,
    BUSY_WAITING: '',
    FORW_BUSY_WAITING: '',
    FORW_SECONDS: 1,
    FORW: ''
}, function (okm) {
    console.log('callback msg ' + okm);
}, function (err) {
    console.warn('callback msg ' + err);
})
    .then(function (msg) {
    console.log('promise msg ' + msg);
})
    .catch(function (err) {
    console.error('promise msg ' + err);
});
