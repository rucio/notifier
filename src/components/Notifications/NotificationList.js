import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import demoMessages from "./DemoMessages";
import MessageItem from "./MessageItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    //TODO: Fix scrolling
    overflow: "hidden"
  },
  demo: {
    backgroundColor: "#fffafa",
  },
  item: {
    width: 334,
    padding: 5,
    marginTop: 10,
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
    <div id="notifications" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <div className={classes.demo}>
            <List dense={false} className={classes.item}>
              {messages.map((item, i) => (
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
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
