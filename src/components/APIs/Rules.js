import axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
/**
 * List all the rules of the current user.
 * @param {String} serverURL Takes in Server URL.
 * @param {String} serverName Takes in the server name for getting the token.
 */
export function listScopes(serverName, serverURL) {
  const token = {"X-Rucio-Auth-Token": cookies.get(serverName)};

  axios
    .get(`https://${serverURL}/scopes`, token)
    .then((response) => console.log(response.data))
    .catch((error) => {
      console.log(error);
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