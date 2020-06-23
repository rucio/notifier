const axios = require("axios");
const https = require("https");
const fs = require("fs");
const config = require("../../src/config/config.json");

const httpsAgent = new https.Agent({ ca: fs.readFileSync(config[0].cacert) });
/**
 * Attempts to get the RUCIO_AUTH_TOKEN with USERPASS Auth Strategy
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function getTokenWithUserpass(req, res, next) {
  const serverURL = config[0].servers[0].authURL;
  axios
    .get(`https://${serverURL}/auth/userpass`, {
      httpsAgent,
      headers: req.body.payload,
    })
    .then((response) => {
      RUCIO_TOKEN = {
        token: response.headers["x-rucio-auth-token"],
        expires: response.headers["x-rucio-auth-token-expires"],
      };
      console.log("[INFO] Token Received");
      res.cookie('RUCIO_TOKEN', RUCIO_TOKEN.token, {
        maxAge: 60 * 60 * 1000, // 1 hour
        //httpOnly: true,
      })
      res.send(RUCIO_TOKEN).status(200);
      next();
    })
    .catch((error) => {
      console.log(`[DEBUG] ${error}`);
      res.sendStatus(Number(error.toString().split(" ").pop()));
      next();
    });
}

exports.getToken = getTokenWithUserpass;