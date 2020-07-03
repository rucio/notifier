import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import RuleCard from "../Rules/RuleCard";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import { getRules } from "../../Utils/Logic/Rules";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getAvailableTokens } from "../../Utils/Logic/Tokens";
import { ListSubheader } from "@material-ui/core";

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
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  subheader: {
    fontFamily: "Cern",
    fontWeight: 500,
    color: "#3e55ab",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
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
 * Renders the list of all the rules from all the connected servers
 */
export default function AllRules() {
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
      console.log(parsedNewRules)
      setRules(parsedNewRules);
      setFetched(true);
    });
  }

  React.useEffect(() => {
    fetchRules();
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
        <span style={spanStyle}>All Rules</span>
        <IconButton>
          <RefreshIcon fontSize="small" />
        </IconButton>
      </div>
      <Grid id="activity-grid" className={classes.root}>
        {fetched ? (
          <List dense={false} className={classes.list} subheader={<li />}>
            {getAvailableTokens().map((token) => (
              <li key={token.token} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader
                    className={classes.subheader}
                  >{`Server: ${token.servername}`}</ListSubheader>
                  {rules[token.servername].map((item) => (
                    <RuleCard
                      status={item.state}
                      id={item.id}
                      didName={`${item.scope}:${item.name}`}
                      rseName={item.rse_expression}
                      updatedAt={item.updated_at}
                      copies={item.copies}
                      rseType={"Tape"}
                      rseLocation={"CH"}
                      key={item.id}
                      locks={{
                        ok: item.locks_ok_cnt,
                        rep: item.locks_replicating_cnt,
                        stuck: item.locks_stuck_cnt,
                      }}
                      watching={false}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </List>
        ) : (
          <CircularProgress color="primary" />
        )}
      </Grid>
    </React.Fragment>
  );
}
