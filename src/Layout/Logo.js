import React from 'react'
import logoImage from "./ruciosq.png";

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
    return <img src={logoImage} alt="logo" style={imgStyle} />;
}

export default Logo
