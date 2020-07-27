import React from "react";
import logoImage from "./ruciosq.png";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "relative",
    marginTop: 8,
    height: 30,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    filter: `drop-shadow(0 0 0.75rem grey)`
  },
});

function Logo() {
  const classes = useStyles();
  return <img src={logoImage} alt="logo" className={classes.root} />;
}

export default Logo;
