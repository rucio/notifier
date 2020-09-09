import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LogoDark from "../../../Layout/LogoDark";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "Inter",
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: 100,
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "Inter",
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
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: 600,
  },
  buttonSecondary: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 5,
  },
}));

function CertDetails(props) {
  const classes = useStyles();

  function submit(e) {
    e.preventDefault();
    props.handleSubmit();
    props.nextStep();
  }

  function back(e) {
    e.preventDefault();
    props.prevStep();
  }

  function validateForm(){
      return props.certlocation.length > 0;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <LogoDark />
        <Typography className={classes.title}>Add a new account</Typography>
        <Typography className={classes.subtitle}>
          Specify your certificate location.
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="certificate"
            label="Certificate Location"
            name="certificate"
            autoFocus
            defaultValue={props.certlocation}
            onChange={(e) => props.setCertlocation(e.target.value)}
          />
        </form>
        <ButtonGroup>
          <Button
            className={classes.submit}
            variant="outlined"
            color="primary"
            onClick={back}
          >
            <Typography className={classes.buttonPrimary}>Prev:</Typography>
            <Typography className={classes.buttonSecondary}>
              Server Details
            </Typography>
          </Button>
          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
            onClick={submit}
            disabled={!validateForm()}
          >
            <Typography className={classes.buttonPrimary}>Submit</Typography>
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default CertDetails;
