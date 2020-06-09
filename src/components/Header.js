import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./ruciosq.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#3e55ab",
    minHeight: 0,
    height: 32,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  }
}));

const imgStyle = {
  position: "relative",
  marginTop: 8,
  height: 30,
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
};

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <img src="./ruciosq.png" alt="logo" style={imgStyle} />
          <Typography className={classes.title} noWrap />
          <IconButton aria-label="settings" color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton aria-label="account" edge="end" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
