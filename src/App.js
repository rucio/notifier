import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Login from "./components/Authentication/Login";
import { AuthContext } from "./components/Authentication/AuthContext";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      <Router>
        <div className="container-small">
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/app" component={AppLayout} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
