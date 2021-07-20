import { rejects } from 'assert';
import { resolve } from 'path/posix';
import { PingAPI } from '..';
import { Connection, ICallback, IResult } from '../api/SAPMiddleware';

export type Import = {
  SECONDS: number;
  BUSY_WAITING: string;
  FORW: string;
  FORW_SECONDS: number;
  FORW_BUSY_WAITING: string;
};

export const NotifCreate = (
  con: Connection,
  params: any,
  success?: ICallback,
  failure?: ICallback
) =>
  new Promise<boolean>((resolve, reject) => {
    con.Client.open();

    const RfcName = 'BAPI_ALM_NOTIF_CREATE';

    var results = con.Client.call(RfcName, { ...params })
      .then((rfcobj) => {
        if (success !== undefined) success(true);
        resolve(true);
      })
      .catch((reason) => {
        if (failure !== undefined) failure(reason);
        reject(reason);
      });
  });

//export { NOTIFHEADER }