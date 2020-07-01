import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: "Cern",
    fontSize: 14,
    color: "#000000",
    opacity: 0.6,
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
}));

function AddRuleButton(props) {
  const classes = useStyles();

  return (
    <Button className={classes.button} onClick={(e) => props.handleChange(e)}>
      {props.watchrules ? (
        <span style={{ marginTop: 5, marginLeft: 10 }}>Save Changes</span>
      ) : (
        <React.Fragment>
          <AddIcon fontSize="inherit" />
          <span style={{ marginTop: 5, marginLeft: 10 }}>
            Add Rules to watch
          </span>
        </React.Fragment>
      )}
    </Button>
  );
}

export default AddRuleButton;
