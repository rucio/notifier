import React from 'react'
import { makeStyles } from '@material-ui/core'
import packageJson from '../../../package.json';

const useStyles = makeStyles((theme) => ({
  root:{
    width: "100%",
    fontFamily: "Cern",
    fontSize: 12,
    color: "#000000",
    opacity: 0.6,
    textAlign: "center"
  },
}));

function Preferences() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        Rucio Notifier version: {packageJson.version}
      </div>
    );
}

export default Preferences