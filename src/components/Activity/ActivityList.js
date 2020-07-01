import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import MessageItem from "./MessageItem";
import demoActivity from "./DemoActivity";
import NoActivity from "./NoActivity";

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
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  color: "#3e55ab",
};

/**
 * Renders the Activity List with a list of Messages
 * @param {*} props from Parent Component
 * @property {string} props.title - Set the title for the page.
 */
export default function ActivityList(props) {
  const classes = useStyles();
  const [activity] = useState(demoActivity);

  function expandActivity(i) {
    console.log(`Activity No ${i} Clicked`);
  }

  return (
    <React.Fragment>
      <div style={{ padding: 5, width: "100%" }} id="title">
        <span style={spanStyle}>Recent Activity</span>
      </div>
      <Grid id="activity-grid" className={classes.root}>
        <List dense={false} className={classes.item}>
          {activity.length !== 0 ? (
            activity.map((item, i) => (
              <MessageItem
                key={item.id}
                primary={item.primary}
                secondary={item.secondary}
                server={item.server}
                read={item.read}
                onClick={(e) => expandActivity(i)}
              />
            ))
          ) : (
            <NoActivity />
          )}
        </List>
      </Grid>
    </React.Fragment>
  );
}
