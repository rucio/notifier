import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";

const iconStyles = makeStyles((theme) => ({
  root: {
    width: 30,
    height: 30,
    opacity: 1,
    backgroundColor: grey[100],
  },
  demo: {
    backgroundColor: "#fffafa",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const iconStyle = {
  fontSize: "medium",
  color: "#3e55ab",
};

const messageStyle = {
  primary: {
    fontFamily: ["Cern", "sans-serif"].join(","),
    color: "000000",
    opacity: 1,
    fontSize: 14,
    fontWeight: 400,
  },
  secondary: {
    fontFamily: ["Cern", "sans-serif"].join(","),
    color: "000000",
    opacity: 0.6,
    fontSize: 12,
    fontWeight: 200,
  },
};

/**
 * Displays the Message or the Notification using props passed from Parent Component.
 *
 * @param {*} props
 */
function MessageItem(props) {
  const icons = iconStyles();

  //TODO: Convert Activity into Card Type
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={icons.root}>
          <InfoIcon style={iconStyle} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography style={messageStyle.primary}>{props.primary}</Typography>
        }
        secondary={
          <Typography style={messageStyle.secondary}>
            {props.secondary + " • " + props.server}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="clear"
          size="small"
          color="secondary"
          onClick={props.expandActivity}
        >
          <ExpandMoreIcon style={iconStyle} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default MessageItem;
