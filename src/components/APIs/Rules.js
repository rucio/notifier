import axios from "axios";
import config from "../../config/config.json";
import { Cookies } from "react-cookie";

/**
 * List all the rules of the current user.
 * @param {String} server Takes in Server URL or parses it from config.json file at src/config.
 */
export function listRules(server) {
  const token = Cookies.get("RUCIO_TOKEN");
  const serverURL = server || config[0].servers[0].hostURL;

  axios
    .get(`https://${serverURL}/rule`, token)
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
export function getRuleInfo(server, ruleID) {
  const serverURL = server || config[0].servers.hostURL;
  axios
    .get(`https://${serverURL}/rule/${ruleID}`, token)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}