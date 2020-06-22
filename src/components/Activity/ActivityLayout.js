import React from "react";
import Box from "@material-ui/core/Box";
import ActivityList from "./ActivityList";
import { makeStyles } from "@material-ui/core";

const boxStyle = makeStyles({
  root:{
    paddingTop: 0
  }
})

function Activity() {
  const boxContainer = boxStyle();

  return (
    <div style={{ width: "100%" }}>
      <Box
      className = {boxContainer.root}
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
        <ActivityList title="Recent Activity" />
      </Box>
    </div>
  );
}

export default Activity;
