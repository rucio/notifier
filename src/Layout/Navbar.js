import React from "react";
import Activity from "../components/Activity/ActivityLayout";
import Notifications from "../components/Notifications/Notifications";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "lightblue",
    minHeight: 5,
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    height: 16,
    fontWeight: theme.typography.fontWeightBold,
    color: "#ffffff",
    opacity: 0.65,
    marginRight: theme.spacing(4),
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 14,
    "&:hover": {
      color: "lightblue",
      opacity: 0.8,
    },
    "&$selected": {
      color: "#ffffff",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&:focus": {
      color: "#ffffff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(0.5),
    backgroundColor: "#fffafa",
  },
  demo1: {
    backgroundColor: "#3e55ab",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div className={classes.root}>
        <div className={classes.demo1}>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab label="Activity" component={Link} to="/app/activity" />
            <AntTab
              label="Notifications"
              component={Link}
              to="/app/notifications"
            />
          </AntTabs>
        </div>
      </div>
      <Switch>
        <Route path="/app/activity" component={Activity} />
        <Route path="/app/notifications" component={Notifications} />
      </Switch>
    </Router>
  );
}

export default Navbar;
