import { serverStatus } from "../../Utils/Logic/Servers";

export function dispatchServerStatus(dispatch) {
  serverStatus().map((item, i) =>
    item.status === "Connected"
      ? dispatch({
          type: "ADD",
          id: i,
          primary: `Connected to ${item.server}!`,
          secondary: "You can monitor rules from this server",
          server: item.server,
          nType: "alert",
          status: "success",
          read: false,
        })
      : dispatch({
          type: "ADD",
          id: i,
          primary: `Could not connect with ${item.server}`,
          secondary: "Try checking your credentials or re-add the account",
          server: item.server,
          nType: "alert",
          status: "failed",
          read: false,
        })
  );
}
