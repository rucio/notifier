import React, { Component } from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
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
