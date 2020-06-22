import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import ClearIcon from "@material-ui/icons/Clear";
import Typography from "@material-ui/core/Typography";

const iconStyles = makeStyles(theme => ({
  root: {
    width: 25,
    height: 25,
    opacity: 1
  },
  demo: {
    backgroundColor: "#fffafa"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

const iconStyle = {
  fontSize: "small",
  color: "#636363"
};

const messageStyle = {
  primary: {
    fontFamily: ["Cern", "sans-serif"].join(","),
    color: "000000",
    opacity: 1,
    fontSize: 12,
    fontWeight: 400
  },
  secondary: {
    fontFamily: ["Cern", "sans-serif"].join(","),
    color: "000000",
    opacity: 0.6,
    fontSize: 10,
    fontWeight: 200
  }
};

const itemStyles = makeStyles({
  root: {
    paddingTop: "2px",
    paddingBottom: "2px"
  }
});

const markRead = () => {
  console.log("Read")
}

/**
 * Displays the Message or the Notification using props passed from Parent Component.
 * 
 * @param {*} props 
 */
function MessageItem(props) {
  const icons = iconStyles();
  const items = itemStyles();

  return (
    <ListItem className={items.root}>
      <ListItemAvatar>
        <Avatar className={icons.root}>
          <FolderIcon style={iconStyle} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography style={messageStyle.primary}>{props.primary}</Typography>
        }
        secondary={
          <Typography style={messageStyle.secondary}>
            {props.secondary}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="clear"
          size="small"
          color="secondary"
          onClick={markRead}
        >
          <ClearIcon style={iconStyle} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default MessageItem;
