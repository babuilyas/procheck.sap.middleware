import { Client, RfcConnectionParameters, RfcObject } from 'node-rfc';
import { Interface } from 'readline';

export interface ICallback {
  (arg: any): void;
}

export enum ExitCode {
  success = 0,
  fail = 4,
  uknown = 8
}

export type IResult = { exitcode: ExitCode; result: RfcObject };

export interface ConnectionParameters {
  ASHOST: string;
  CLIENT: string;
  SYSNR: string;
  R3NAME: string;
  SAPROUTER: string;
  USER: string;
  PASSWD: string;
}

export class Connection {
  private _Client: Client;
  constructor(dest: ConnectionParameters) {
    let xRfcPara = { ...dest };

    this._Client = new Client(xRfcPara as RfcConnectionParameters);
  }

  get Client() {
    return this._Client;
  }

  Connect = (): Promise<Client> | void => {
    return this._Client.connect();
  };
  Close = (callback?: Function): Promise<void> | void => {
    return this._Client.close(callback);
  };
}

export { Client };
