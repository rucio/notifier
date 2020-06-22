import React from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  done: {
    color: "#000000",
    opacity: 0.2,
    fontSize: 20,
    padding: 5
  },
  text: {
    fontFamily: "Cern",
    fontSize: 16,
    fontWeight: 600,
    color: "#000000",
    opacity: 0.2,
  },
}));

function ReadAll() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DoneAllIcon className={classes.done} />
      <span className={classes.text}>All Caught Up!</span>
    </div>
  );
}

export default ReadAll;
