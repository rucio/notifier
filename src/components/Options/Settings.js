import React from "react";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from "@material-ui/icons/Settings";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
  },
  title:{
    fontFamily: 'Cern',
    color: "#3e55ab",
    fontWeight: 700,
    fontSize: 24,
  },
  box:{
    fontFamily: "Cern, sans-serif",
    backgroundColor: "#fffafa",
    width: 240,
    height: 300
  },
  button:{
    fontFamily: "Cern, sans-serif",
    fontWeight: 500,
    fontSize: 14
  }
}));

function Settings() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  //TODO: To Store the Information from the Form persistently.
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="settings"
        color="inherit"
        onClick={handleClickOpen}
      >
        <SettingsIcon />
      </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography className={classes.title}>Settings</Typography>
          </DialogTitle>
          {/* TODO: Add Settings as we go */}
          <DialogContent className={classes.box}>
            <DialogContentText>All Settings</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary" className={classes.button}>
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}

export default Settings;