import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import ClearIcon from "@material-ui/icons/Clear";
import Typography from "@material-ui/core/Typography";
import { grey, green, red } from "@material-ui/core/colors";

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
  avatarIcon: {
    message: {
      fontSize: "medium",
      color: "#3e55ab",
    },
    success: {
      fontSize: "medium",
      color: green[600],
    },
    failed: {
      fontSize: "medium",
      color: red[600],
    },
  },
  clearIcon: {
    fontSize: "small",
    color: grey[600],
  },
};

const messageStyle = {
  primary: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    color: "000000",
    opacity: 1,
    fontSize: 14,
    fontWeight: 400,
  },
  secondary: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    color: "000000",
    opacity: 0.6,
    fontSize: 12,
    fontWeight: 200,
  },
};

/**
 * Renders Notification layout using props passed from Parent Component.
 * 
 * @param {*} props 
 */
function MessageItem(props) {
  const icons = iconStyles();

  const messageIcon = (type, status) => {
    if (type === "message")
      return <NotificationsIcon style={iconStyle.avatarIcon.message} />;
    else if (type === "alert" && status === "success")
      return <CheckCircleIcon style={iconStyle.avatarIcon.success} />;
    else if (status === "failed")
      return <ErrorIcon style={iconStyle.avatarIcon.failed} />;
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar className={icons.root}>
          {messageIcon(props.type, props.status)}
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
          onClick={props.onClick}
        >
          <ClearIcon style={iconStyle.clearIcon} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default MessageItem;
