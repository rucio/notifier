const axios = require("axios");
const https = require("https");
const fs = require("fs");
const config = require("../../src/components/Options/config.json");

const httpsAgent = new https.Agent({ ca: fs.readFileSync(config[0].cacert) });

getTokenWithUserpass = (req, res, next) => {
    axios
      .get(`https://localhost/auth/userpass`, {
        httpsAgent,
        headers: req.body.payload,
      })
      .then((response) => {
        RUCIO_TOKEN = {
          token: response.headers["x-rucio-auth-token"],
          expires: response.headers["x-rucio-auth-token-expires"],
        };
        console.log("[INFO] Token Received");
        res.sendStatus(200);
        next();
      })
      .catch((error) => {
        console.log(`[DEBUG] ${error}`);
        res.sendStatus(error.toString().split(" ").pop());
        next();
      });
  };

exports.getTokenWithUserpass = getTokenWithUserpass;