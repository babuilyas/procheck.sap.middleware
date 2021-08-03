# procheck.sap.middleware

Procheck SAP Middleware provides wrapper functions to communicate with SAP complex RFCs.

## Installation

Step 1: npm install https://github.com/babuilyas/procheck.sap.middleware.git --save

## Sample Code

```
import * as api from "@babuilyas/procheck.sap.middleware";

let con = new api.Connection({
  ASHOST: "192.168.64.163",
  CLIENT: "001",
  SYSNR: "00",
  R3NAME: "R3P",
  SAPROUTER: "/H/125.209.118.234/H/172.16.0.185",
  USER: "ILYAS",
  PASSWD: "Password3",
});

con.Client.connect()
  .then(() => {
    api.PingAPI.call(
      con,
      {
        SECONDS: 10,
        BUSY_WAITING: "",
        FORW_BUSY_WAITING: "",
        FORW_SECONDS: 1,
        FORW: "",
      },
      (okm) => {
        console.log("callback msg " + okm);
      },
      (err) => {
        console.warn("callback msg " + err);
      }
    )
      .then((msg) => {
        console.log("promise msg " + msg);
      })
      .catch((err) => {
        console.error("promise msg " + err);
      });
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("finally end of code"));

```

## Available API Wrappers

| Wrapper Function | SAP RFC/BAPI | Use Case             |
| ---------------- | ------------ | -------------------- |
| 1. abc           | zabc         | this is used for abc |
| 2. def           | zdef         | this is used for def |
| 3. xyz           | zxyz         | this is used for xyz |
