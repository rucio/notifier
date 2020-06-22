import React from 'react'
import darkLogoImage from "./ruciosq_dark.png";

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
    return <img src={darkLogoImage} alt="logo_dark" style={imgStyle} />;
}

export default LogoDark
