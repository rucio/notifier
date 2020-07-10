import { Cookies } from "react-cookie";

/**
 * Adds a server to the the localstorage.
 * 
 * @param {String} name hostname for the server
 * @param {String} hostURL URL as string for the server.
 * @param {String} authURL Authentication URL/Endpoint for the server.
 */
export function addServer(name, hostURL, authURL) {
  const newServer = { name: name, hostURL: hostURL, authURL: authURL };
  try{
    var servers = JSON.parse(localStorage.getItem("servers"));
    servers.push(newServer);
    localStorage.setItem("servers", JSON.stringify(servers));
  } catch {
    servers = []
    servers.push(newServer);
    localStorage.setItem("servers", JSON.stringify(servers));
  }
}

/**
 * Returns an array of all the server-names for the servers present.
 * This is useful since the tokens are stored in cookies with the server's hostname as the key.
 */
export function getAllServersByNames() {
  var serverNames = [];
  const servers = JSON.parse(localStorage.getItem("servers"));
  try {
    for (var i = 0; i < servers.length; i++) {
      serverNames.push(servers[i].name);
    }
  } catch {
    return [];
  }

  return serverNames;
}

export function serverStatus() {
  const cookies = new Cookies();
  let status = [];
  const servernames = getAllServersByNames();

  //UPDATE LOGIC! THIS DOESN'T WORK
  for (let i = 0; i < servernames.length; i++){
    if (cookies.get(servernames[i]) !== undefined)
      status.push({server: servernames[i], status: "Connected"})
    else {
      status.push({server: servernames[i], status: "Disconnected"})
    }
  }
  
  return status;
}