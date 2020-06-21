import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Login from "./components/Authentication/Login";
import { AuthContext } from "./components/Authentication/AuthContext";
import { Cookies } from "react-cookie";
import "./App.css";

function App() {
  const cookies = new Cookies();
  const existingToken = cookies.get("RUCIO_TOKEN");
  const [authtoken, setAuthtoken] = useState(existingToken);

  return (
    <AuthContext.Provider value={{ authtoken, setAuthtoken }}>
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
