import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "../App.css";
import { refreshToken } from "../components/Utils/Logic/Tokens";
import {
  getCurrentUser,
  authTokensPresent,
} from "../components/Utils/Logic/User";
import { useAuth } from "../components/Authentication/AuthContext";

function AppLayout() {
  const { setAuthtoken } = useAuth();

  React.useEffect(() => {
    try {
      setInterval(() => {
        refreshToken(getCurrentUser());
        setAuthtoken(authTokensPresent());
        console.log("Token Refreshed!");
      }, 58 * 60 * 1000);
    } catch (e) {
      console.log(e);
    }
  }, [setAuthtoken]);

  return (
    <div className="container-small">
      <Header />
      <Navbar />
    </div>
  );
}

export default AppLayout;
