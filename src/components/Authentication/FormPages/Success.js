import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import LogoDark from "../../../Layout/LogoDark";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Cern",
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Cern",
    fontWeight: 100,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "Cern",
    fontWeight: 400,
    fontSize: 12,
    color: "#000000",
    opacity: 0.6,
  },
  form: {
    width: "100%",
    margin: 0,
    backgroundColor: "#fffafa",
    overflowX: "hidden",
    overflow: "auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonPrimary: {
    fontFamily: "Cern",
    fontSize: 14,
    fontWeight: 600,
  },
  buttonSecondary: {
    fontFamily: "Cern",
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 5,
  },
  icon: {
    marginTop: 30,
    padding: 10,
    color: green[400],
    fontSize: 80,
  },
  text: {
    fontFamily: "Cern",
    fontSize: 12,
    fontWeight: 400,
    opacity: 0.8,
    padding: 10,
    marginBottom: 10
  }
}));

function Success(props) {
  const classes = useStyles();
  const account = props.account;
  const serverName = props.serverName;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <LogoDark />
        <Typography className={classes.title}>Welcome to Rucio!</Typography>
        <Typography className={classes.subtitle}>You're all set up!</Typography>
        <CheckCircleOutlineIcon className={classes.icon} />
        <Typography className={classes.text}>
          Successfully added account '{account}' for {serverName}
        </Typography>
        <Button className={classes.submit} color="primary" href="/">
          <Typography className={classes.buttonPrimary}>
            Sign in to Rucio
          </Typography>
        </Button>
      </div>
    </Container>
  );
}

export default Success;
