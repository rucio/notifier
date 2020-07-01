import React from "react";
import axios from "axios";
import { findAuthenticatedAccounts } from "../../Utils/Logic/User";

export function getRules() {
  const accounts = findAuthenticatedAccounts();
  const certlocation = localStorage.getItem("usercert");
  axios
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

function RuleList() {
  return <div>Rule List Goes Here</div>;
}

export default RuleList;
