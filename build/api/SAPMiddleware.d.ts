import { Client, RfcObject } from 'node-rfc';
export interface ICallback {
    (arg: any): void;
}
export declare enum ExitCode {
    success = 0,
    fail = 4,
    uknown = 8
}
export declare type IResult = {
    exitcode: ExitCode;
    result: RfcObject;
};
export interface ConnectionParameters {
    ASHOST: string;
    CLIENT: string;
    SYSNR: string;
    R3NAME: string;
    SAPROUTER: string;
    USER: string;
    PASSWD: string;
}
export declare class Connection {
    private _Client;
    constructor(dest: ConnectionParameters);
    get Client(): Client;
    Connect: () => Promise<Client> | void;
    Close: (callback?: Function | undefined) => Promise<void> | void;
}
export { Client };
