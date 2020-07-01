const axios = require("axios");
const https = require("https");
const fs = require("fs");
const { response } = require("express");

/**
 * Returns an object with all the rules of a user from a particular server.
 * @param {String} certlocation Location of User Cert for Authentication at the server.
 * @param {String} hostAddress Server's hostname from where the rules need to be retrieved.
 * @param {String} token Rucio Auth Token.
 */
async function listRules(certlocation, hostAddress, token) {
  const httpsAgent = new https.Agent({ ca: fs.readFileSync(certlocation) });

  return axios.get(`https://${hostAddress}/rules/`, {
    httpsAgent,
    headers: { "X-Rucio-Auth-Token": token },
  });
}

/**
 * Gets the information about a particular rule from the Server using Rule ID.
 *
 * @param {String} server Takes in server URL or URL specified in config.json
 * @param {String} ruleID Rule ID to get the info for the particular rule.
 */
// export function getRuleInfo(server, ruleID) {
//   const serverURL = server || config[0].servers.hostURL;
//   axios
//     .get(`https://${serverURL}/rule/${ruleID}`, token)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// }

exports.listRules = listRules;
