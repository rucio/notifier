import { Cookies } from "react-cookie";
import { getAllServersByNames } from "./Servers";
import axios from "axios";
const cookies = new Cookies();

/**
 * Returns an Array Object with all the available tokens
 * {servername: String, token: String}
 */
export function getAvailableTokens() {
  var tokens = [];
  const serverlist = getAllServersByNames();
  for (var i = 0; i < serverlist.length; i++) {
    if (cookies.get(serverlist[i]) !== undefined) {
      var tokenDict = {
        servername: serverlist[i],
        token: cookies.get(serverlist[i]),
      };
      tokens.push(tokenDict);
    }
  }

  return tokens;
}

export function refreshToken(payload) {
  const currentUser = {
    account: payload.account,
    username: payload.username,
    password: payload.password,
  };
  const accountList = JSON.parse(localStorage.getItem("Accounts"));
  const servers = JSON.parse(localStorage.getItem("servers"));

  return axios.post("/login/userpass", {
    currentUser,
    accountList,
    servers,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}

export function printAvailableTokens() {
  const tokens = getAvailableTokens();
  for (var i = 0; i < tokens.length; i++) {
    console.log(tokens[i].token);
  }
}
