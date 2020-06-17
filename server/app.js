const express = require("express");
const axios = require("axios");
const https = require("https");
const fs = require("fs");
var cors = require("cors");
var router = express.Router();
const config = require("../src/components/Options/config.json");

const port = 3004;
const app = express();

app.use(cors({ origin: "http://localhost:3003" }));
app.use(express.json());

router.get("/", (req, res) => {
  res.json({ message: `Rucio Notifier Running on ${port}` });
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const httpsAgent = new https.Agent({ ca: fs.readFileSync(config[0].cacert) });

var RUCIO_TOKEN = null;

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

router.post("/login/userpass", getTokenWithUserpass, (req, res) => {
  if (RUCIO_TOKEN === null) console.log("[ERROR] Authentication Failed");
  else console.log(`[INFO] Token Expires: ${RUCIO_TOKEN.expires}`);
});

app.use("/rucio", router);

app.listen(port, () =>
  console.log(`Rucio Notifier listening at http://localhost:${port}`)
);
