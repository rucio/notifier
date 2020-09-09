import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import NoActivity from "./NoActivity";
import { IconButton } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import RuleCard from "./Rules/RuleCard";
import { getRules } from "../Utils/Logic/Rules";
import { getAvailableTokens } from "../Utils/Logic/Tokens";

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
export default function ActivityList() {
  const classes = useStyles();
  const [rules, setRules] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function fetchRules() {
    const tokens = getAvailableTokens();
    var parsedNewRules = [];
    await getRules().then((response) => {
      for (let i = 0; i < tokens.length; i++) {
        const newRules = response.data[tokens[i].servername];
        var parsedRules = newRules.map((element) => {
          return JSON.parse(element);
        });
        parsedNewRules[tokens[i].servername] = parsedRules;
      }
      setRules(parsedNewRules);
      setFetched(true);
    });
  }

  React.useEffect(() => {
    try {
      fetchRules();
      setInterval(() => {
        fetchRules();
      }, 20 * 60 * 1000);
    } catch (e) {
      console.log(e);
    }
  }, []);

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
        <IconButton onClick={fetchRules}>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </div>
      <Grid id="activity-grid" className={classes.root}>
        <List dense={false} className={classes.item}>
          {fetched ? (
            getAvailableTokens().map((token) =>
              rules[token.servername].map((item) =>
                item.state === "REPLICATING" ? (
                  <RuleCard
                    status={item.state}
                    id={item.id}
                    didName={`${item.scope}:${item.name}`}
                    rseName={item.rse_expression}
                    updatedAt={item.updated_at}
                    copies={item.copies}
                    // rseType={"Tape"}
                    // rseLocation={"CH"}
                    key={item.id}
                    watching={true}
                    locks={{
                      ok: item.locks_ok_cnt,
                      rep: item.locks_replicating_cnt,
                      stuck: item.locks_stuck_cnt,
                    }}
                    account={item.account}
                    server={token.servername}
                    expiredAt={item.expires_at}
                    stuckAt={item.stuck_at}
                    didType={item.did_type}
                    createdAt={item.created_at}
                  />
                ) : null
              )
            )
          ) : (
            <NoActivity />
          )}
        </List>
      </Grid>
    </React.Fragment>
  );
}
