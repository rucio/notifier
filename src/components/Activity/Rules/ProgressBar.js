import React from "react";
import { makeStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  progress: {
    marginTop: 10,
  },
});

function ProgressBar(props) {
  const classes = useStyles();
  let progress = null;
  if (props.locks) {
    progress =
      props.locks.ok / (props.locks.ok + props.locks.rep + props.locks.stuck) * 100;
  } else {
    progress = 0;
  }

  return (
    <div>
      {props.status === "REPLICATING" ? (
        progress > 0 ? (
          <LinearProgress
            variant="determinate"
            value={progress}
            className={classes.progress}
          />
        ) : (
          <LinearProgress className={classes.progress} />
        )
      ) : null}
    </div>
  );
}

export default ProgressBar;
