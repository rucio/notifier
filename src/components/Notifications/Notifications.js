import React from "react";
import Box from "@material-ui/core/Box";
import NotificationList from "./NotificationList"

function Notifications() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        alignContent="flex-start"
        paddingTop={1}
        m={1}
        bgcolor="#fffafa"
        color="#212121"
        css={{ maxWidth: 360, height: 200 }}
      >
        <NotificationList title="All Notifications"/>
      </Box>
    </div>
  );
}

export default Notifications;
