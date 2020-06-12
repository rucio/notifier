import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import demoMessages from "./DemoMessages";
import MessageItem from "./MessageItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  demo: {
    backgroundColor: "#fffafa",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  item: {
    width: 334,
    padding: 5,
    marginTop: 10,
  },
}));

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  color: "#3e55ab",
};

export default function NotificationList(props) {
  const classes = useStyles();
  const [messages, setMessages] = useState(demoMessages);

  function markRead(e, i) {
    const newMessages = [...messages];
    newMessages[i].read = true;
    newMessages.pop();
    setMessages(newMessages);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <span style={spanStyle}>{props.title}</span>
          <div className={classes.demo}>
            <List dense="false" className={classes.item}>
              {messages.map((item, i) => (
                <MessageItem
                  key={item.id}
                  primary={item.primary}
                  secondary={item.secondary}
                  server={item.server}
                  read={item.read}
                  onClick={(e) => markRead(e, i)}
                />
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
