import React from "react";
import Box from "@material-ui/core/Box";
import NotificationList from "./NotificationList";

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  color: "#3e55ab",
};

function Notifications() {
  return (
    <Box
      id="Notifications"
      display="flex"
      flexDirection="column"
      alignContent="flex-start"
      paddingTop={0}
      m={1}
      bgcolor="#fffafa"
      css={{ maxWidth: 360, height: 375 }}
    >
      <div style={{ padding: 5, width: "100%" }} id="title">
        <span style={spanStyle}>All Notifications</span>
      </div>
      <NotificationList />
    </Box>
  );
}

export default Notifications;
