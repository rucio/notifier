import React from "react";
import { makeStyles } from "@material-ui/core";
import { grey, green, red } from "@material-ui/core/colors";
import { serverStatus } from "../Utils/Logic/Servers";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 20,
    width: "100%"
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter",
    color: grey[600],
    fontWeight: 500,
    paddingBottom: 15
  },
  serverList: {
    width: 300,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  serverName: {
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: 500,
    color: grey[900],
  },
  statusC: {
    fontSize: 11,
    color: green[800],
    fontWeight: 500,
  },
  statusD: {
    fontSize: 11,
    color: red[800],
    fontWeight: 500,
  },
});

function Servers() {
  const classes = useStyles();
  
  let key = 0;

  
  return (
    <div className={classes.root}>
      <div className={classes.title}>Servers</div>
      <div>
        {serverStatus().map((item) => {
          ++key;
          return (
            <div key={key} className={classes.serverList}>
              <div className={classes.serverName}>{item.server}</div>
              {item.status === "Connected" ? <div className={classes.statusC}>{item.status}</div> : <div className={classes.statusD}>{item.status}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Servers;
