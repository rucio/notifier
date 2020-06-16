import React from 'react'
import "./ruciosq_dark.png";

const imgStyle = {
    position: "relative",
    padding: 5,
    height: 50,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  };
  
function LogoDark() {
    return <img src="./ruciosq_dark.png" alt="logo_dark" style={imgStyle} />;
}

export default LogoDark
