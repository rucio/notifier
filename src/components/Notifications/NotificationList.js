import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import MessageItem from "./MessageItem";
import ReadAll from "./ReadAll";
import IconButton from "@material-ui/core/IconButton";
import ClearAll from "@material-ui/icons/ClearAll";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: 0,
    backgroundColor: "#fffafa",
    overflowX: "hidden",
    overflow: "auto",
  },
  item: {
    width: 334,
    padding: 5,
  },
}));

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  padding: 5,
  color: "#3e55ab",
};

export default function NotificationList(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state);

  function clearAllNotifications() {
    dispatch({
      type: "DELETE_ALL",
    });
  }

  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        id="title"
      >
        <span style={spanStyle}>All Notifications</span>
        <IconButton onClick={clearAllNotifications}>
          <ClearAll fontSize="small" />
        </IconButton>
      </div>
      <Grid id="notification-grid" className={classes.root}>
        <List dense={false} className={classes.item}>
          {notifications.length !== 0 ? (
            notifications.map((item, i) => (
              <MessageItem
                key={i}
                primary={item.primary}
                secondary={item.secondary}
                server={item.server}
                type={item.type}
                status={item.status}
                read={item.read}
                onClick={() => dispatch({ type: "DELETE", index: i })}
              />
            ))
          ) : (
            <ReadAll />
          )}
        </List>
      </Grid>
    </React.Fragment>
  );
}
