import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { orange, grey } from "@material-ui/core/colors";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    minWidth: 340,
    width: "100%",
    height: "auto",
    marginBottom: 5
  },
  title: {
    fontFamily: "Cern",
    fontWeight: 600,
    fontSize: 11,
    color: orange[400],
  },
  pos: {
    fontSize: 10,
    marginTop: 12,
  },
  details: {
    fontFamily: "Cern",
    fontSize: 11,
    color: grey[800],
  },
  progress: {
    marginTop: 10,
  },
  id: {
    fontFamily: "Cern",
    fontSize: 11,
    color: grey[800],
  },
  names: {
    fontFamily: "Cern",
    fontWeight: 500,
    fontSize: 16
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
 * rseLocation: String}} props
 */
export default function RuleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.status}
          </Typography>
          <Typography className={classes.id} gutterBottom>
            {props.id}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: 5,
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography className={classes.names}>
            {props.didName}
          </Typography>
          <Typography className={classes.names}>
            {props.rseName}
          </Typography>
        </div>
        <div
          style={{
            paddingBottom: 5,
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography className={classes.details}>
            Updated: {props.updatedAt}
          </Typography>
          <Typography className={classes.details}>
            {props.copies} copies to {props.rseType} in {props.rseLocation}
          </Typography>
        </div>
        <LinearProgress className={classes.progress} />
      </CardContent>
      {!props.watching ?
      <CardActions>
        <Button size="small" color="primary">
          Watch
        </Button>
        <Button size="small">More Details</Button>
      </CardActions>: null}
    </Card>
  );
}
