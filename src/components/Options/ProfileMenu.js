import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Divider, makeStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import { purgeUser, purgeAllTokens } from "../Utils/Logic/User";
import MyAccount from "./MyAccount";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: "Cern",
    fontSize: 14,
    fontWeight: 400,
  },
}));

/**
 * Displays the profile options for the logged in user
 */
function ProfileMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setAuthtoken } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function openDialog(){
    setOpen(true);
    setAnchorEl(null);
  }

  function closeDialog(){
    setOpen(false)
  }

  function handleLogout() {
    console.log("Attempting Logout...");
    purgeUser();
    purgeAllTokens();
    setAuthtoken(false);
    localStorage.setItem('notifications', JSON.stringify([]))
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <IconButton
        aria-label="fade-menu"
        aria-haspopup="true"
        edge="end"
        color="inherit"
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.typography}>
          <ListItem style={{ fontSize: 16, color: "#3e55ab", fontWeight: 600 }}>
            {localStorage.getItem("APP_USER")}
          </ListItem>
          <MenuItem
            onMouseEnter={(e) => (e.target.style.color = "#3e55ab")}
            onMouseLeave={(e) => (e.target.style.color = "#000000")}
            onClick={openDialog}
          >
            My account
            <MyAccount open={open} close={closeDialog}/>
          </MenuItem>
          <Divider />
          <MenuItem
            onMouseEnter={(e) => (e.target.style.color = "#3e55ab")}
            onMouseLeave={(e) => (e.target.style.color = "#000000")}
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
}

export default ProfileMenu;
