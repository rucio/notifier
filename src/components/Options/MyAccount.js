import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  makeStyles,
  Button,
  DialogActions,
} from "@material-ui/core";
import MyAccountContent from "./MyAccountContent";

const useStyles = makeStyles((theme) => ({
  header:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon:{
    fontSize: 16
  },
  title: {
    fontFamily: "Inter",
    color: "#3e55ab",
    fontWeight: 700,
    fontSize: 24,
  },
  box: {
    fontFamily: "Cern, sans-serif",
    backgroundColor: "#fffafa",
    width: 312,
    height: 300,
    padding: "16px 24px",
  },
  button: {
    fontFamily: "Cern, sans-serif",
    fontWeight: 500,
    fontSize: 14,
  },
}));

function MyAccount(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
        onClose={props.close}
        fullScreen={true}
      >
        <DialogTitle className={classes.header} disableTypography={true}>
          <div className={classes.title}>Account</div>
        </DialogTitle>
        <DialogContent className={classes.box}>
          <MyAccountContent />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyAccount;
