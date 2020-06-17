import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LogoDark from "../../Layout/LogoDark";
import axios from "axios";

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

  function validateForm() {
    return account.length > 0 && username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const serverUrl = "http://localhost:3004/rucio";
    const payload = {
      "X-Rucio-Account": account,
      "X-Rucio-Username": username,
      "X-Rucio-Password": password,
    };
    axios
      .post(serverUrl + "/login/userpass", {
        payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setLoggedin(!loggedin);
          console.log("Logged In");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!validateForm()}
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
