import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: "Cern",
    fontSize: 14,
    color: "#000000",
    opacity: 0.8,
  },
}));

function Preferences() {
    const classes = useStyles();

    return (
      <div>
        <Typography className={classes.text}>User Preferences</Typography>
      </div>
    );
}

export default Preferences