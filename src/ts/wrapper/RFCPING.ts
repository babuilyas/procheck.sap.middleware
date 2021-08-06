import { rejects } from 'assert';
import { resolve } from 'path/posix';
import { Connection, ICallback, IResult } from '../api/SAPMiddleware';

const RfcName = 'RFC_PING_AND_WAIT';

export type Import = {
  SECONDS: number;
  BUSY_WAITING: string;
  FORW: string;
  FORW_SECONDS: number;
  FORW_BUSY_WAITING: string;
};

export const call = (
  con: Connection,
  params: Import,
  success?: ICallback,
  failure?: ICallback
) =>
  new Promise<boolean>((resolve, reject) => {
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
