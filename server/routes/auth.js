const express = require("express");
const { getTokenWithUserpass } = require("../middleware/userpass");
const { parseServers } = require("../utils/parseServers");
const router = express.Router();

/**
 * Checks if the token is still valid at the current time.
 * @param {{token: String, expires: String}} token RUCIO_AUTH_TOKEN object
 */
function validateToken(token) {
  return Date.now() < Date.parse(token.expires);
}

router.post("/login/userpass", async (req, res) => {
  const servers = req.body.servers;
  const serverURLs = parseServers(servers);
  authCount = 0;
  for (i = 0; i < serverURLs.length; i++) {
    try {
      await getTokenWithUserpass(
        req,
        res,
        serverURLs[i].url,
        serverURLs[i].name
      );
    } catch (e) {
      console.log(e);
    }
    authCount++;
    if (authCount === serverURLs.length) res.sendStatus(200);
  }

  if (res.statusCode != 200) {
    console.log("[ERROR] Authentication Failed");
    RUCIO_TOKEN = { token: "", expires: "" };
  } else {
    console.log(`[INFO] Authenticated at Connected Servers!`);
  }
});

module.exports = router;
