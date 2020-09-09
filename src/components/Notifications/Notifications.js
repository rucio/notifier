import React from "react";
import Box from "@material-ui/core/Box";
import NotificationList from "./NotificationList";

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
      <NotificationList />
    </Box>
  );
}

export default Notifications;
