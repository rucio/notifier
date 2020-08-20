import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import ProgressBar from "./ProgressBar";
import RuleStatus from "./RuleStatus";
import RuleUpdatedAt from "./RuleUpdatedAt";
import { Collapse, CardActionArea } from "@material-ui/core";
import RuleDetails from "./RuleDetails";

const useStyles = makeStyles({
  root: {
    minWidth: 340,
    width: "100%",
    height: "auto",
    marginBottom: 5,
  },
  pos: {
    fontSize: 10,
    marginTop: 12,
  },
  details: {
    fontFamily: "Inter",
    fontSize: 11,
    color: grey[800],
  },
  id: {
    fontFamily: "Inter",
    fontSize: 11,
    color: grey[800],
  },
  names: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: 16,
  },
  head: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    paddingBottom: 0
  }
});

/**
 * Renders the Rule Card, displaying information about the rule.
 * @visibleName Rule Card
 * @component
 * @property {
 * {status: String,
 * id: String,
 * didName: String,
 * rseName: String,
 * updatedAt: Date,
 * copies: number,
 * rseType: String,
 * rseLocation: String
 * watching: boolean}} props
 */
export default function RuleCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.root}>
      <CardContent className={classes.head}>
          <RuleStatus status={props.status} />
          <Typography className={classes.id} gutterBottom>
            {props.id}
          </Typography>
      </CardContent>
      <CardActionArea onClick={handleExpand}>
        <CardContent>
          <div
            style={{
              display: "flex",
              paddingTop: 5,
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography className={classes.names}>{props.didName}</Typography>
            <Typography className={classes.names}>{props.rseName}</Typography>
          </div>
          <div
            style={{
              paddingBottom: 5,
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <RuleUpdatedAt updatedAt={props.updatedAt} />
            <Typography className={classes.details}>
              {props.copies} copies
            </Typography>
          </div>
          <ProgressBar status={props.status} locks={props.locks} />
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <RuleDetails
            text="Hey You"
            account={props.account}
            server={props.server}
            expiredAt={props.expiredAt}
            stuckAt={props.stuckAt}
            locks={props.locks}
            didType={props.didType}
            createdAt={props.createdAt}
          />
        </Collapse>
      </CardActionArea>
    </Card>
  );
}
