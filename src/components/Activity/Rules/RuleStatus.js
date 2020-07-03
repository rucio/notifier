import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { orange, green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    fontFamily: "Cern",
    fontWeight: 600,
    fontSize: 11,
  },
 status: {
    color: (props) =>
      props.status === "OK"
        ? green[400]
        : props.status === "REPLICATING"
        ? orange[400]
        : red[400],
  },
});

function RuleStatus(props) {
  const classes = useStyles({ status: props.status });

  return (
    <Typography className={`${classes.root} ${classes.status}`} gutterBottom>
      {props.status}
    </Typography>
  );
}

export default RuleStatus;
