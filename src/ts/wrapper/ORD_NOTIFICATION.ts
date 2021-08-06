import { rejects } from 'assert';
import { RfcParameterValue, RfcObject } from 'node-rfc';
import { resolve } from 'path/posix';
import { PingAPI } from '..';
import { Connection, ICallback, IResult } from '../api/SAPMiddleware';

/**
 * @param P_EQUNR Equipment Number max lenght 18
 * @param P_REASON Reason code/text max lenght 100
 */
export type Import = {
  P_EQUNR: RfcParameterValue;
  P_REASON: RfcParameterValue;
};

/**
 * @param {Import}  params - A .
 */
export const call = (
  con: Connection,
  params: Import,
  success?: ICallback,
  failure?: ICallback
) =>
  new Promise<number>((resolve, reject) => {
    if (!params.P_EQUNR) reject('Equipment number is missing!');
    if (!params.P_REASON) reject('Reason is missing!');

    const RfcName = 'ZWQ_PM_ORD_NOTIFY_BAPI';

    con.Client.call(RfcName, { ...params })
      .then((rfcobj) => {
        let order_number: number;
        if (rfcobj.P_STATUS) {
          order_number = rfcobj.P_STATUS as number;
          if (success !== undefined) success(order_number);
          resolve(order_number);
        } else reject('Equipment Number is correct!');
      })
      .catch((reason) => {
        if (failure !== undefined) failure(reason);
        reject(reason);
      });
  });

//export { NOTIFHEADER }
