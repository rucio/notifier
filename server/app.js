const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth.js");
const ping = require("./routes/ping");
const rules = require("./routes/rules");
const port = 3004;
const app = express();

RUCIO_TOKEN = { token: "", expires: "" };
AUTH_COUNT = 0;
NOT_AUTH = 0;
CREDS_VALID = false;

app.use(cors({ origin: "http://localhost:3003" }));
app.use(express.json());
app.use(ping);
app.use(auth);
app.use(rules);

app.listen(port, () =>
  console.log(`[INFO] Rucio Notifier listening at http://localhost:${port}`)
);
