import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Divider, makeStyles } from "@material-ui/core";
import user from "./user.json";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: "Cern",
    fontSize: 14,
    fontWeight: 400,
  },
}))

const rucioUser = user[0].displayName;
/**
 * Displays the profile options for the logged in user
 */
function Profile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    console.log("Attempting Logout...");
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
          <ListItem style={{ color: "#3e55ab", fontWeight: 600 }}>
            {rucioUser}
          </ListItem>
          <MenuItem
            onMouseEnter={(e) => (e.target.style.color = "#3e55ab")}
            onMouseLeave={(e) => (e.target.style.color = "#000000")}
            onClick={handleClose}
          >
            My account
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

export default Profile;
