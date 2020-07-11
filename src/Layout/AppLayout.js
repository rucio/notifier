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
import { createStore } from "redux";
import { Provider } from "react-redux";
import notificationReducer from "../components/Notifications/Reducers/NotificationReducer";

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

  const store = createStore(notificationReducer);

  return (
    <Provider store={store}>
      <div className="container-small">
        <Header />
        <Navbar />
      </div>
    </Provider>
  );
}

export default AppLayout;
