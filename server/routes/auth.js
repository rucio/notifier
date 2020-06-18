const express = require("express");
const router = express.Router();
userpassAuth = require('../middleware/userpass');

/**
 * Checks if the token is still valid at the current time.
 * @param {{token: String, expires: String}} token RUCIO_AUTH_TOKEN object
 */
function validateToken (token) {
  return Date.now() < Date.parse(token.expires);
}

router.post("/login/userpass", userpassAuth.getToken, (req, res) => {
  if (RUCIO_TOKEN.token === "") console.log("[ERROR] Authentication Failed");
  else console.log(`[INFO] Token Expires: ${RUCIO_TOKEN.expires}`);
});

module.exports = router;