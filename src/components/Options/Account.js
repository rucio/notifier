import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Account() {
  return (
    <div>
      <IconButton aria-label="account" edge="end" color="inherit">
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
}

export default Account
