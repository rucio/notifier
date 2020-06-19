import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Recent from "../components/Activity/Recent";
import Notifications from "../components/Notifications/Notifications";
import "../App.css";

function AppLayout() {
  return (
    <Router>
      <div className="container-small">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/app/recent" component={Recent} />
          <Route path="/app/notifications" component={Notifications} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppLayout;
