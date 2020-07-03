import axios from "axios";
import { findAuthenticatedAccounts } from "../../Utils/Logic/User";

export async function getRules() {
  const accounts = findAuthenticatedAccounts();
  const certlocation = localStorage.getItem("usercert");
  try {
    const response = await axios
      .post("/getallrules", {
        accounts,
        certlocation,
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
  }
  catch (err) {
    return console.log(err);
  }
}