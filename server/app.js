/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth.js");
//const ping = require("./routes/ping");
const rules = require("./routes/rules");
const port = 3004;
const app = express();
const path = require("path");

AUTH_COUNT = 0;
NOT_AUTH = 0;
CREDS_VALID = false;

app.use(cors({ origin: "http://localhost:3003" }));
app.use(express.json());
//app.use(ping);
app.use(auth);
app.use(rules);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () =>
  console.log(`[INFO] Rucio Notifier listening at http://localhost:${port}`)
);
