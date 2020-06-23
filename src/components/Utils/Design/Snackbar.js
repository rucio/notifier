import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} action={null} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

/**
 * React Component to Display Alert Messages depending on severity.
 * 
 * @param {*} props From Parent Component 
 * @property {boolean} open To handle open and close of Snackbar
 * @property {String} severity can be selected from {"success", "error", "info", "warning"}
 * @property {String} message Message to be displayed
 */
export default function AlertSnackbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open);

  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
