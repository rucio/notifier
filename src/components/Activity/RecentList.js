import React, { useState, useEffect } from "react";
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import MessageItem from "./MessageItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
  },
  demo: {
    backgroundColor: "#fffafa",
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const spanStyle = {
  last: {
    fontFamily: "Cern, sans-serif",
    fontWeight: 500,
    fontSize: 14,
    color: "#000000",
    opacity: 0.6,
  },
  today: {
    fontFamily: "Cern, sans-serif",
    color: "#3e55ab",
    fontWeight: 700,
    fontSize: 24,
  },
};

const listStyles = makeStyles({
  root: {},
});

export default function RecentList(props) {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios('/rucio/recent', );
      setMessages(res.data);
    }
    
    fetchdata()
  }, []);

  const allMessages = messages.map(item => (
    <MessageItem
      key={item.id}
      primary={item.primary}
      secondary={item.secondary}
      read={item.read}
    />
  ));

  const listStyle = listStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <span
            style={spanStyle.today}
          >
            {props.title}
          </span>
          <div className={classes.demo}>
            <List className={listStyle}>{allMessages}</List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
