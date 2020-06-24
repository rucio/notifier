import { Cookies } from "react-cookie";
import { getAllServersByNames } from "./Servers";
const cookies = new Cookies();

/**
 * Saves the login information of the current user in local storage.
 * The info can be used to retrieve the token again when it expires.
 *
 * @param {String} account
 * @param {String} username
 * @param {String} password
 */
export function saveUser(account, username, password) {
  localStorage.setItem("CURR_ACCOUNT", account);
  localStorage.setItem("CURR_USERNAME", username);
  localStorage.setItem("CURR_PASSWORD", password);
}

/**
 * Removes the user details from local storage.
 */
export function purgeUser() {
  localStorage.removeItem("CURR_ACCOUNT");
  localStorage.removeItem("CURR_USERNAME");
  localStorage.removeItem("CURR_PASSWORD");
}

/**
 * Returns true if valid AuthTokens are present in Cookies corresponding to connected servers.
 */
export function authTokensPresent() {
  var authTokens = [];
  const servers = getAllServersByNames();
  if (servers.length === 0) return false;

  for (var i = 0; i < servers.length; i++) {
    var tokenValue = cookies.get(servers[i]);
    if (tokenValue !== undefined) authTokens.push(tokenValue);
  }

  return authTokens.length > 0;
}

/**
 * Purges all user tokens from the memory.
 */
export function purgeAllTokens() {
  const tokenKeys = getAllServersByNames();
  for (var i = 0; i < tokenKeys.length; i++) {
    cookies.remove(tokenKeys[i], { path: "/" });
  }
}
