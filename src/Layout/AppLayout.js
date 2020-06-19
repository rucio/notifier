import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "../App.css";

function AppLayout() {
  return (
      <div className="container-small">
        <Header />
        <Navbar />
      </div>
  );
}

export default AppLayout;
