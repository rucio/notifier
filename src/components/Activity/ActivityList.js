import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import MessageItem from "./MessageItem";
import demoMessages from "./DemoMessages"

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
}));

const spanStyle = {
    fontFamily: "Cern, sans-serif",
    color: "#3e55ab",
    fontWeight: 700,
    fontSize: 24,
};

/**
 * Renders the Activity List with a list of Messages
 * @param {*} props from Parent Component
 * @property {string} props.title - Set the title for the page.
 */
export default function ActivityList(props) {
  const classes = useStyles();

  const allMessages = demoMessages.map(item => (
    <MessageItem
      key={item.id}
      primary={item.primary}
      secondary={item.secondary}
      read={item.read}
    />
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <span style={spanStyle}> {props.title} </span>
          <div className={classes.demo}>
            <List dense={false}>{allMessages}</List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
