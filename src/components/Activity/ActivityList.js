import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import demoRules from "./DemoRules";
import NoActivity from "./NoActivity";
import { IconButton } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import RuleCard from "./Rules/RuleCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: 0,
    backgroundColor: "#fffafa",
    overflowX: "hidden",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
  },
  item: {
    width: 334,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  padding: 5,
  color: "#3e55ab",
};

/**
 * Renders the Activity List with a list of Messages
 * @param {*} props from Parent Component
 * @property {string} props.title - Set the title for the page.
 */
export default function ActivityList(props) {
  const classes = useStyles();
  const [activity] = useState(demoRules);

  function expandActivity(i) {
    console.log(`Activity No ${i} Clicked`);
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
        <span style={spanStyle}>Recent Activity</span>
        <IconButton>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </div>
      <Grid id="activity-grid" className={classes.root}>
        <List dense={false} className={classes.item}>
          {activity.length !== 0 ? (
            activity.map((item, i) => (
              <RuleCard
                status={"REPLICATING"}
                id={item.id}
                didName={`${item.scope}:${item.name}`}
                rseName={item.rse_expression}
                updatedAt={"3h ago"}
                copies={item.copies}
                rseType={"Tape"}
                rseLocation={"CH"}
                key={item.id}
                watching={true}
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
