import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import TimeDiff from "js-time-diff"; //es6

const useStyles = makeStyles({
  root: {
    fontFamily: "Cern",
    fontSize: 11,
    color: grey[800],
  },
});

function RuleUpdatedAt(props) {
  const classes = useStyles();
  let diff = TimeDiff(props.updatedAt);

  return (
    <div>
      <Typography className={classes.root}>
        Updated: {diff.toString()}
      </Typography>
    </div>
  );
}

export default RuleUpdatedAt;
