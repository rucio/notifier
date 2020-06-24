const axios = require("axios");
const https = require("https");
const fs = require("fs");
const config = require("../../src/config/config.json");

const httpsAgent = new https.Agent({ ca: fs.readFileSync(config[0].cacert) });
/**
 * Attempts to get the RUCIO_AUTH_TOKEN with USERPASS Auth Strategy
 * @param {Request} req
 * @param {Response} res
 * @param {String} server Server IP to get the token.
 */
async function getTokenWithUserpass(req, res, serverURL, serverName) {
  return axios
    .get(`https://${serverURL}/auth/userpass`, {
      httpsAgent,
      headers: req.body.payload,
    })
    .then((response) => {
      RUCIO_TOKEN = {
        token: response.headers["x-rucio-auth-token"],
        expires: response.headers["x-rucio-auth-token-expires"],
      };
      console.log(`[INFO] Token Received for ${serverName}`);
      res.cookie(`${serverName}`, RUCIO_TOKEN.token, {
        maxAge: 60 * 60 * 1000, // 1 hour
        //httpOnly: true,
      })
    })
    .catch((error) => {
      console.log(`[DEBUG] ${error}`);
      res.sendStatus(Number(error.toString().split(" ").pop()));
    });
}

exports.getTokenWithUserpass = getTokenWithUserpass;