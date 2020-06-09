import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  demo: {
    backgroundColor: "#fffafa",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const spanStyle = {
    fontFamily: "Cern, sans-serif",
    color: "#3e55ab",
    fontWeight: 700,
    fontSize: 24,
};

function Settings() {

  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <span style={spanStyle}> Settings </span>
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;