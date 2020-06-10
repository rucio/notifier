import React from 'react'
import "./ruciosq.png";

const imgStyle = {
    position: "relative",
    marginTop: 8,
    height: 30,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  
function Logo() {
    return <img src="./ruciosq.png" alt="logo" style={imgStyle} />;
}

export default Logo
