const express = require("express");
const router = express.Router();
authType = require('../middleware/userpass');

validateToken = (token) => Date.now() < Date.parse(token.expires);

router.post("/login/userpass", authType.getTokenWithUserpass, (req, res) => {
  if (RUCIO_TOKEN.token === "") console.log("[ERROR] Authentication Failed");
  else console.log(`[INFO] Token Expires: ${RUCIO_TOKEN.expires}`);
});

module.exports = router;
