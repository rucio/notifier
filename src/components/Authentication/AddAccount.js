import React, { useState } from "react";
import UserDetails from "./FormPages/UserDetails";
import ServerDetails from "./FormPages/ServerDetails";
import CertDetails from "./FormPages/CertDetails";
import Success from "./FormPages/Success";
import { addServer } from "../Utils/Logic/Servers";
import { addNewAccount, saveCertLocation } from "../Utils/Logic/User";

function AddAccount() {
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [serverName, setServerName] = useState("");
  const [hostIP, setHostIP] = useState("");
  const [authIP, setAuthIP] = useState("");
  const [certlocation, setCertlocation] = useState("");

  function nextStep() {
    const newStep = step;
    setStep(newStep + 1);
  }

  function prevStep() {
    const newStep = step;
    setStep(newStep - 1);
  }

  function handleSubmit() {
    addNewAccount(account, username, password);
    addServer(serverName, hostIP, authIP);
    saveCertLocation(certlocation);
  }

  switch (step) {
    case 1:
      return <UserDetails nextStep={nextStep} account={account} setAccount={setAccount} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />;
    case 2:
      return <ServerDetails prevStep={prevStep} nextStep={nextStep} serverName={serverName} setServerName={setServerName} hostIP={hostIP} setHostIP={setHostIP} authIP={authIP} setAuthIP={setAuthIP}/>;
    case 3:
      return <CertDetails prevStep={prevStep} nextStep={nextStep} handleSubmit={handleSubmit} certlocation={certlocation} setCertlocation={setCertlocation}/>;
    case 4:
      return <Success account={account} serverName={serverName}/>;
    default:
      return <div>404 Not Found</div>
  }
}

export default AddAccount;
