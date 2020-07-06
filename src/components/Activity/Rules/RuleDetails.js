import React from "react";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    height: "auto",
    padding: 5,
    fontFamily: "Cern",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5,
    fontSize: 12,
    color: grey[800],
    fontWeight: 500,
  },
  root2: {
    height: "auto",
    padding: 5,
    fontFamily: "Cern",
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
    fontSize: 12,
    color: grey[800],
    fontWeight: 500,
    marginLeft: 12,
  },
  left: {
    marginLeft: 12,
  },
  right: {
    marginRight: 12,
  },
});

function RuleDetails(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.left}>
          <div style={{ paddingBottom: 8 }}>DID Type: {props.didType}</div>
          <div style={{ paddingBottom: 5 }}>
            ok/rep/stuck : {props.locks.ok} / {props.locks.rep} /{" "}
            {props.locks.stuck}
          </div>
        </div>
        <div className={classes.right}>
          <div style={{ paddingBottom: 8 }}>Account: {props.account}</div>
          <div style={{ paddingBottom: 5 }}>Server: {props.server}</div>
        </div>
      </div>
      <div className={classes.root2}>
        <div style={{ paddingBottom: 5 }}>Created At: {props.createdAt}</div>
        <div style={{ paddingBottom: 5 }}>Expires At: {props.expiresAt}</div>
        <div style={{ paddingBottom: 5 }}>Stuck At: {props.stuckAt}</div>
      </div>
    </React.Fragment>
  );
}

export default RuleDetails;
