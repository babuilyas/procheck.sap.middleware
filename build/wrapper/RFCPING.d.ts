import { Connection, ICallback } from '../api/SAPMiddleware';
export declare type Import = {
    SECONDS: number;
    BUSY_WAITING: string;
    FORW: string;
    FORW_SECONDS: number;
    FORW_BUSY_WAITING: string;
};
export declare const call: (con: Connection, params: Import, success?: ICallback | undefined, failure?: ICallback | undefined) => Promise<boolean>;
