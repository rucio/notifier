import React from "react";
import { makeStyles } from "@material-ui/core";
import UserAccounts from "./UserAccounts";
import Certificate from "./UserCertLocation";
import Servers from "./UserServers";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    width: 260,
    fontFamily: "Cern",
    fontSize: 20,
    fontWeight: 500,
    color: "#000000",
    opacity: 0.8,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Cern",
    opacity: 0.6,
    paddingTop: 5,
  },
  icon: {
    fontSize: 14,
  },
});

function MyAccountContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        style={{
          color: grey[600],
          fontSize: 12,
          fontFamily: "Cern",
          fontWeight: 500,
          paddingBottom: 10,
        }}
      >
        User
      </div>
      
        <div className={classes.title}>{localStorage.getItem("APP_USER")}</div>
    
      <UserAccounts />
      <Servers />
      <Certificate />
    </div>
  );
}

export default MyAccountContent;
