import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import demoMessages from "./DemoMessages";
import MessageItem from "./MessageItem";
import ReadAll from "./ReadAll";
import IconButton from "@material-ui/core/IconButton"
import ClearAll from "@material-ui/icons/ClearAll"

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
  const [messages, setMessages] = useState(demoMessages);

  function markRead(i) {
    const newMessages = [...messages];
    newMessages[i].read = true;
    newMessages.splice(i, 1);
    setMessages(newMessages);
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
        <IconButton><ClearAll fontSize="small" /></IconButton>
      </div>
      <Grid id="notification-grid" className={classes.root}>
        <List dense={false} className={classes.item}>
          {messages.length !== 0 ? (
            messages.map((item, i) => (
              <MessageItem
                key={item.id}
                primary={item.primary}
                secondary={item.secondary}
                server={item.server}
                type={item.type}
                status={item.status}
                read={item.read}
                onClick={(e) => markRead(i)}
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
