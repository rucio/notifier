import React from "react";
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  activity: {
    color: "#000000",
    opacity: 0.2,
    fontSize: 20,
    padding: 5
  },
  text: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: 600,
    color: "#000000",
    opacity: 0.2,
  },
}));

function NoActivity() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LocalActivityIcon className={classes.activity} />
      <span className={classes.text}>Everything looks clean</span>
    </div>
  );
}

export default NoActivity;
