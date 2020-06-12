import React from "react";
import Box from "@material-ui/core/Box";
import NotificationList from "./NotificationList"

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  color: "#3e55ab",
};

function Notifications() { 
  return (
    <div id="main" style={{ width: "100%"}}>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        alignContent="flex-start"
        paddingTop={0}
        m={1}
        bgcolor="#fffafa"
        color="#212121"
        css={{ maxWidth: 360, height: "100%" }}
      >
        <div id="title">
          <span style={spanStyle}>All Notifications</span>
        </div>
        <NotificationList />
      </Box>
    </div>
  );
}

export default Notifications;
