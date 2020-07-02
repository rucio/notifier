import axios from "axios";
import { findAuthenticatedAccounts } from "../../Utils/Logic/User";

export function getRules() {
  const accounts = findAuthenticatedAccounts();
  const certlocation = localStorage.getItem("usercert");
  return axios
    .post("/getallrules", {
      accounts,
      certlocation,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));
}