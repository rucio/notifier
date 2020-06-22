import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import demoMessages from "./DemoMessages";
import MessageItem from "./MessageItem";
import ReadAll from "./ReadAll";

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
  );
}
