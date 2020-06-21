import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LogoDark from "../../Layout/LogoDark";
import axios from "axios";
import LoginButton from "./LoginButton";
import { useAuth } from "./AuthContext";

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
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [loading, setLoading] = useState();
  const { setAuthenticated } = useAuth();

  /**
   * Validates the form responses to prevent empty required fields
   */
  function validateForm() {
    return account.length > 0 && username.length > 0 && password.length > 0;
  }

  /**
   * Attempts to login using Userpass Auth Strategy.
   */
  function loginWithUserpass() {
    const payload = {
      "X-Rucio-Account": account,
      "X-Rucio-Username": username,
      "X-Rucio-Password": password,
    };

    setLoading(true);
    axios
      .post("/login/userpass", {
        payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLoading(loading ? false : null);
        if (response.status === 200) {
          setAuthenticated(true);
          saveUser(account, username, password);
          setLoggedin(true);
          console.log("%c [INFO] Logged In Successfully", "color: green;");
        }
      })
      .catch((error) => {
        setLoading(loading ? false : null);
        const errorcode = Number(error.toString().split(" ").pop());
        if (errorcode === 401)
          console.log("%c [ERROR] Invalid Credentials", "color: red");
        else console.log(error);
      });
  }

  /**
   * Saves the login information of the current user in local storage.
   * The info can be used to retrieve the token again when it expires.
   *
   * @param {String} account
   * @param {String} username
   * @param {String} password
   */
  function saveUser(account, username, password) {
    localStorage.setItem("CURR_ACCOUNT", account);
    localStorage.setItem("CURR_USERNAME", username);
    localStorage.setItem("CURR_PASSWORD", password);
    console.log(localStorage.getItem("CURR_USERNAME"));
  }

  /**
   * Handles the Login event on form submit.
   */
  function handleSubmit(event) {
    if (loading) return;
    event.preventDefault();
    loginWithUserpass();
  }

  if (loggedin){
    return <Redirect to="/app/recent"/>
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
      </div>
    </Container>
  );
}

export default Login;
