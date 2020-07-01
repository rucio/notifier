const axios = require("axios");
const https = require("https");
const fs = require("fs");

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

exports.listRules = listRules;
