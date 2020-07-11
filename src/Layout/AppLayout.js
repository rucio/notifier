import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "../App.css";
import { refreshToken } from "../components/Utils/Logic/Tokens";
import { getCurrentUser } from "../components/Utils/Logic/User";

function AppLayout() {

  React.useEffect(() => {
    try {
      setInterval(() => {
        refreshToken(getCurrentUser());
        console.log("Token Refreshed!")
      }, 58 * 60 * 1000);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
      <div className="container-small">
        <Header />
        <Navbar />
      </div>
  );
}

export default AppLayout;
