import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VisibilitySharpIcon from '@material-ui/icons/VisibilitySharp';

const useStyles = makeStyles((theme) => ({
  button: {
    fontFamily: "Inter",
    fontSize: 14,
    color: "#000000",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    fontWeight: 500
  },
  icon: {
    opacity: 0.6,
  }
}));

function AddRuleButton(props) {
  const classes = useStyles();

  return (
    <Button className={classes.button} onClick={(e) => props.handleChange(e)}>
      {props.watchrules ? (
        <span style={{ marginTop: 5, marginLeft: 10, color: "#3e55ab"}}>Back to Activity</span>
      ) : (
        <React.Fragment>
          <VisibilitySharpIcon className={classes.icon} fontSize="inherit" />
          <span style={{ marginTop: 5, marginLeft: 10, opacity: 0.6 }}>
            See all rules
          </span>
        </React.Fragment>
      )}
    </Button>
  );
}

export default AddRuleButton;
