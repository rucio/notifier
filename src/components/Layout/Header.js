import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Settings from "../Options/Settings"
import Account from "../Options/Account"
import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "#3e55ab",
    minHeight: 0,
    height: 32,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <Typography className={classes.title} noWrap />
          <Settings />
          <Account />
        </Toolbar>
      </AppBar>
    </div>
  );
}
