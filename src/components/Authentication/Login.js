import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LogoDark from "../../Layout/LogoDark";
import axios from "axios";
import LoginButton from "./LoginButton";
import { useAuth } from "./AuthContext";
import { saveUser, authTokensPresent } from "../Utils/Logic/User";
import AlertSnackbar from "../Utils/Design/Snackbar";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Cern",
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    fontFamily: "Cern",
    fontWeight: 100,
    fontSize: 24,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    fontFamily: "Cern",
    fontSize: 14,
    margin: theme.spacing(2, 0, 1),
  },
  buttonPrimary: {
    fontFamily: "Cern",
    fontSize: 12,
    fontWeight: 600,
  },
  text: {
    fontFamily: "Cern",
    fontWeight: 400,
    fontSize: 12,
    opacity: 0.6
  },
}));

function Login() {
  const classes = useStyles();
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [loading, setLoading] = useState();
  const [status, setStatus] = useState(0);
  const { setAuthtoken } = useAuth();

  /**
   * Validates the form responses to prevent empty required fields
   */
  function validateForm() {
    return account.length > 0 && username.length > 0 && password.length > 0;
  }

  /**
   * Updates the status to display the alert accordingly.
   *
   * @param {number} value Status Code to set as status for the request.
   */
  function updateStatus(value) {
    setStatus(null);
    const newStatus = value;
    setStatus(newStatus);
  }

  /**
   * Attempts to login using Userpass Auth Strategy.
   */
  function loginWithUserpass() {
    localStorage.setItem("AUTH_STRATEGY", "USERPASS");
    const currentUser = {
      account: account,
      username: username,
      password: password,
    };

    const accountList = JSON.parse(localStorage.getItem('Accounts'));
    const servers = JSON.parse(localStorage.getItem('servers'));

    setLoading(true);
    axios
      .post("/login/userpass", {
        currentUser,
        accountList,
        servers,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setLoading(loading ? false : null);
        if (response.status === 200) {
          const auth = authTokensPresent();
          setAuthtoken(auth);
          saveUser(account, username, password);
          updateStatus(200);
          setTimeout(() => setLoggedin(true), 2000);
        }
      })
      .catch((error) => {
        setLoading(loading ? false : null);
        const errorcode = Number(error.toString().split(" ").pop());
        if (errorcode === 401) {
          updateStatus(401);
        } else if (errorcode === 500) {
          updateStatus(500);
        } else console.log(error);
      });
  }

  /**
   * Handles the Login event on form submit.
   */
  function handleSubmit(event) {
    if (loading) return;
    event.preventDefault();
    loginWithUserpass();
  }

  if (loggedin) {
    return <Redirect to="/app/activity" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <LogoDark />
        <Typography className={classes.title}>Sign in to Rucio</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="account"
            label="Account"
            name="account"
            autoComplete="account"
            autoFocus
            onChange={(e) => setAccount(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="username"
            id="username"
            autoComplete="current-username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!validateForm()}
            className={classes.submit}
            onClick={handleSubmit}
            loading={loading}
          >
            Sign in
          </LoginButton>
        </form>
        <Typography className={classes.text}>New to Rucio Notifier?</Typography>
        <Button className={classes.buttonPrimary} color="primary" href="/adduser">
          Add your rucio account
        </Button>
        {status === 200 ? (
          <AlertSnackbar
            open={true}
            severity="success"
            message="Signed in to Rucio"
          />
        ) : null}
        {status === 401 ? (
          <AlertSnackbar
            open={true}
            severity="error"
            message="Invalid Credentials"
          />
        ) : null}
        {status === 500 ? (
          <AlertSnackbar
            open={true}
            severity="error"
            message="Connection Error"
          />
        ) : null}
      </div>
    </Container>
  );
}

export default Login;
