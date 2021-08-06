import { Promise } from 'node-rfc';
import * as api from '../index';

let cpara: api.ConnectionParameters = {
  // ASHOST: '192.168.64.163',
  // CLIENT: '001',
  // SYSNR: '00',
  // R3NAME: 'R3P',
  // SAPROUTER: '/H/125.209.118.234/H/172.16.0.185',
  // USER: 'ILYAS',
  // PASSWD: 'Password3'
  ASHOST: '10.0.2.14',
  CLIENT: '103',
  SYSNR: '07',
  R3NAME: 'HSD',
  SAPROUTER: '/H/34.233.177.1',
  USER: 'HF_SALES',
  PASSWD: 'Sapinit123'
};

let con = new api.Connection(cpara);

con.Connect();

api.NotificationAPI.call(con, { P_EQUNR: 'BKL5-WRAPMACH2', P_REASON: 'Hello' })
  .then((msg) => {
    console.log(msg);
  })
  .catch((obj) => {
    console.log(obj);
  })
  .finally(() => {
    con.Close(() => {
      console.log('connection closed');
    });
  });

// let c = api.PingAPI.call(
//   con,
//   {
//     SECONDS: 1,
//     BUSY_WAITING: '',
//     FORW_BUSY_WAITING: '',
//     FORW_SECONDS: 1,
//     FORW: ''
//   },
//   (okm) => {
//     console.log('callback msg ' + okm);
//   },
//   (err) => {
//     console.warn('callback msg ' + err);
//   }
// )
//   .then((msg) => {
//     console.log('promise msg ' + msg);
//   })
//   .catch((err) => {
//     console.error('promise msg ' + err);
//   });
