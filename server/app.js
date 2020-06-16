const express = require("express");
const axios = require("axios");
const https = require("https");
const fs = require("fs");
var cors = require("cors");
var router = express.Router();
const config = require("../src/components/Options/config.json");
const { resourcesPath } = require("process");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const port = 3004;
const app = express();
app.use(cors({ origin: "http://localhost:3003" }));
app.use(express.json());

router.get("/", (req, res) => {
  res.json({ message: `Rucio Notifier Running on ${port}` });
});

const httpsAgent = new https.Agent({ ca: fs.readFileSync(config[0].cacert) });
router.post("/login/userpass", (req, res) => {
  axios
    .get(`https://localhost/auth/userpass`, {
      httpsAgent,
      headers: req.body.payload,
    })
    .then((response) => {
      res.json({
        token: response.headers["x-rucio-auth-token"],
        expires: response.headers["x-rucio-auth-token-expires"],
      });
      res.sendStatus(200);
      console.log("[INFO] Success");
    })
    .catch((error) => {
      console.log("[WARNING]  Some error occured.");
      res.send(req.body.payload);
    });
});

app.use("/rucio", router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
