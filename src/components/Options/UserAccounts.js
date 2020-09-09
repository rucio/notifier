import React from "react";
import { makeStyles, IconButton, Tooltip } from "@material-ui/core";
import { grey, green, red } from "@material-ui/core/colors";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 20,
  },
  head: {
    width: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "Inter",
    color: grey[600],
    fontWeight: 500,
  },
  icon: {
    fontSize: 16,
    color: "#3e55ab",
  },
  accountItems: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountName: {
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: 500,
    color: grey[900],
  },
  accountStatus: {
    fontSize: 11,
    color: green[800],
    marginRight: 50,
    fontWeight: 500,
  },
  deleteIcon: {
    fontSize: 16,
    color: red[600],
  },
});

function UserAccounts() {
  const classes = useStyles();
  const accounts = JSON.parse(localStorage.getItem("Accounts"));
  const servers = JSON.parse(localStorage.getItem("servers"));
  let key = 0;

  function removeAccount(accountIndex){
    const newAccounts = [...accounts];
    const newServers = [...servers];
    newAccounts.splice(accountIndex, 1);
    newServers.splice(accountIndex, 1);
    localStorage.setItem("servers", JSON.stringify(newServers));
    localStorage.setItem("Accounts", JSON.stringify(newAccounts));
  }

  return (
    <div className={classes.root}>
      <div id="header" className={classes.head}>
        <div className={classes.title}>Accounts</div>
        <Tooltip title="Add new Account">
          <IconButton className={classes.iconButton} href="#adduser">
            <AddCircleIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
      {accounts.map((item, i) => {
        ++key;
        return (
          <div key={key} className={classes.accountItems}>
            <div className={classes.accountName}>{item.account}</div>
            <Tooltip title="Delete Account">
              <IconButton onClick={(e) => removeAccount(i)} className={classes.iconButton}>
                <DeleteForeverIcon className={classes.deleteIcon} />
              </IconButton>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
}

export default UserAccounts;
