/* eslint-disable no-undef */
const axios = require("axios");
const https = require("https");
const fs = require("fs");
const packageJSON = require("../../package.json");

/**
 * Attempts to get the RUCIO_AUTH_TOKEN with USERPASS Auth Strategy
 * @param {Request} req
 * @param {Response} res
 * @param {String} server Server IP to get the token.
 */
async function getTokenWithUserpass(
  req,
  res,
  serverURL,
  serverName,
  account,
  currentUser,
  certlocation
) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation) });
  return axios
    .get(`https://${serverURL}/auth/userpass`, {
      httpsAgent,
      headers: {
        "User-Agent": `rucio-notifier/${packageJSON.version}`,
        "X-Rucio-Account": account.account,
        "X-Rucio-Username": account.username,
        "X-Rucio-Password": account.password,
      },
    })
    .then((response) => {
      var RUCIO_TOKEN = {
        token: response.headers["x-rucio-auth-token"],
        expires: response.headers["x-rucio-auth-token-expires"],
      };
      console.log(`[INFO] Token Received for ${serverName}`);
      res.cookie(`${serverName}`, RUCIO_TOKEN.token, {
        maxAge: 60 * 60 * 1000, // 1 hour
      });
      AUTH_COUNT++;
      if (account.account === currentUser.account) CREDS_VALID = true;
    })
    .catch((error) => {
      console.log(`[DEBUG] ${error}`);
      if (account.account === currentUser.account) CREDS_VALID = false;
      NOT_AUTH++;
    });
}

exports.getTokenWithUserpass = getTokenWithUserpass;
