import { RfcParameterValue } from 'node-rfc';
import { Connection, ICallback } from '../api/SAPMiddleware';
/**
 * @param P_EQUNR Equipment Number max lenght 18
 * @param P_REASON Reason code/text max lenght 100
 */
export declare type Import = {
    P_EQUNR: RfcParameterValue;
    P_REASON: RfcParameterValue;
};
/**
 * @param {Import}  params - A .
 */
export declare const call: (con: Connection, params: Import, success?: ICallback | undefined, failure?: ICallback | undefined) => Promise<number>;
