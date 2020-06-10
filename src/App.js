import React, { Component } from "react";
import Header from "./Layout/Header"
import Navbar from "./Layout/Navbar"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-small">
        <Header />
        <Navbar />
      </div>
    );

  }
}

export default App;
