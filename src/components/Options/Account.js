import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Divider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Cern",
    fontSize: 14,
    fontWeight: 400,
  },
});

const rucioUser = "Vivek"

function Account() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
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
        <MuiThemeProvider theme={theme}>
          <MenuItem
            onClick={handleClose}
            style={{ color: "#3e55ab", fontWeight: 600 }}
          >
            {rucioUser}
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </MuiThemeProvider>
      </Menu>
    </div>
  );
}

export default Account;
