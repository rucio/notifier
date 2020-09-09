import { Cookies } from "react-cookie";
import { getAllServersByNames } from "./Servers";
import { getAvailableTokens } from "./Tokens";
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
  localStorage.setItem("APP_USER", "Rucio User")
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
 * Returns an object with current user's credentials
 */
export function getCurrentUser() {
  return {
    account: localStorage.getItem("CURR_ACCOUNT"),
    username: localStorage.getItem("CURR_USERNAME"),
    password: localStorage.getItem("CURR_PASSWORD"),
  };
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

/**
 * Adds a new account to Accounts in the localstorage.
 *
 * @param {String} account New Rucio Account
 * @param {String} username Rucio Username
 * @param {String} password Rucio Password
 */
export function addNewAccount(account, username, password) {
  const newAccount = {
    account: account,
    username: username,
    password: password,
  };
  try {
    var Accounts = JSON.parse(localStorage.getItem("Accounts"));
    Accounts.push(newAccount);
    localStorage.setItem("Accounts", JSON.stringify(Accounts));
  } catch {
    Accounts = [];
    Accounts.push(newAccount);
    localStorage.setItem("Accounts", JSON.stringify(Accounts));
  }
}

/**
 * Saves the Cert location in the storage as 'usercert'
 * @param {String} certlocation
 */
export function saveCertLocation(certlocation) {
  localStorage.setItem("usercert", certlocation);
}

/**
 * Returns an array of all the Authenticated Users with Available tokens
 */
export function findAuthenticatedAccounts() {
  const servers = JSON.parse(localStorage.getItem("servers"));
  const accounts = JSON.parse(localStorage.getItem("Accounts"));
  const tokens = getAvailableTokens();
  var authenticatedAccounts = [];

  for (var i = 0; i < tokens.length; i++) {
    for (var j = 0; j < servers.length; j++) {
      if (tokens[i].servername === servers[j].name) {
        const account = {
          server: { ...servers[j] },
          account: { ...accounts[j] },
          token: { ...tokens[i] },
        };
        authenticatedAccounts.push(account);
      }
    }
  }
  return authenticatedAccounts;
}
