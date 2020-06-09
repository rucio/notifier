import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import messages from "./DemoMessages";
import MessageItem from "./MessageItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  demo: {
    backgroundColor: "#fffafa"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  item: {
    width: 334,
    padding: 5,
    marginTop: 10
  }
}));

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  color: "#3e55ab"
};

export default function NotificationList(props) {
  const classes = useStyles();

  const allMessages = messages.map(item => (
    <MessageItem
      key={item.id}
      primary={item.primary}
      secondary={item.secondary}
    />
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <span style={spanStyle}>{props.title}</span>
          <div className={classes.demo}>
            <List dense='false' className={classes.item}>{allMessages}</List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
