import React from "react";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "Cern",
    color: grey[600],
    fontWeight: 500,
    paddingBottom: 15
  },
  subtitle:{
    fontFamily: "Cern",
    fontSize: 13,
    color: grey[800],
    paddingBottom: 15
  }
});

function Certificate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Certificate Location</div>
      <div className={classes.subtitle}>{localStorage.getItem("usercert")}</div>
    </div>
  );
}

export default Certificate;
