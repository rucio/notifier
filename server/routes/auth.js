/* eslint-disable no-undef */
const express = require("express");
const { getTokenWithUserpass } = require("../APIs/userpass");
const { parseServers } = require("../utils/parseServers");
const router = express.Router();

router.post("/login/userpass", async (req, res) => {
  const servers = req.body.servers;
  const serverURLs = parseServers(servers);
  const accountList = req.body.accountList;
  const currentUser = req.body.currentUser;
  const certlocation = req.body.certlocation;

  if (JSON.stringify(accountList).indexOf(JSON.stringify(currentUser)) === -1) {
    res.sendStatus(401);
    return;
  }

  var attemptCount = 0;

  for (let i = 0; i < serverURLs.length; i++) {
    try {
      await getTokenWithUserpass(
        req,
        res,
        serverURLs[i].url,
        serverURLs[i].name,
        accountList[i],
        currentUser,
        certlocation
      );
    } catch (e) {
      console.log(e);
    }
    attemptCount++;
  }

  if (res.statusCode !== 200 && NOT_AUTH !== 0) {
    console.log("[ERROR] Authentication Failed");
  } else {
    console.log("[INFO] Authenticated at Connected Servers!");
  }

  if (!CREDS_VALID) res.sendStatus(401);
  else if (attemptCount === serverURLs.length && AUTH_COUNT > 0) res.sendStatus(200);
  else res.sendStatus(500);
});

module.exports = router;
