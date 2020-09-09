const axios = require("axios");
const https = require("https");
const fs = require("fs");
const packageJSON = require("../../package.json");

/**
 * Returns an object with all the rules of a user from a particular server.
 * @param {String} certlocation Location of User Cert for Authentication at the server.
 * @param {String} hostAddress Server's hostname from where the rules need to be retrieved.
 * @param {String} token Rucio Auth Token.
 */
async function listRules(certlocation, hostAddress, token) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation) });

  return axios
    .get(`https://${hostAddress}/rules/`, {
      httpsAgent,
      headers: {
        "User-Agent": `rucio-notifier/${packageJSON.version}`,
        "X-Rucio-Auth-Token": token,
      },
    })
    .then(console.log(`[INFO] All rules retrieved from ${hostAddress}`));
}

/**
 * Gets the info for a particular rule using the Rule ID.
 * @param {String} certlocation Location of User Cert for Authentication at the server.
 * @param {String} hostAddress Server's hostname from where the rules need to be retrieved.
 * @param {String} token Rucio Auth Token.
 * @param {String} ruleID Rule ID to get the info for the rule.
 */
async function ruleInfo(certlocation, hostAddress, token, ruleID) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation) });

  return axios
    .get(`https://${hostAddress}/rules/${ruleID}`, {
      httpsAgent,
      headers: {
        "User-Agent": `rucio-notifier/${packageJSON.version}`,
        "X-Rucio-Auth-Token": token,
      },
    })
    .then(console.log(`[INFO] Retrieved rule: ${ruleID}`));
}

exports.listRules = listRules;
exports.ruleInfo = ruleInfo;
