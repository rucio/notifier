import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import ActivityList from "./ActivityList";
import AddRuleButton from "./Rules/AddRuleButton"
import WatchRules from "./Rules/WatchRules";
import { getRules } from "./Rules/RuleList";

function Activity() {
  const [watchrules, setWatchRules] = useState(false);

  function handleChange(e) {
    const ruleState = watchrules;
    getRules();
    setWatchRules(!ruleState);
  }

  React.useEffect(() => {
    console.log(watchrules);
  }, [watchrules]);

  return (
    <div style={{ width: "100%" }}>
      <Box
        id="Activity"
        display="flex"
        flexDirection="column"
        alignContent="flex-start"
        paddingTop={0}
        m={1}
        bgcolor="#fffafa"
        css={{ maxWidth: 360, height: 375 }}
      >
        {watchrules ? <WatchRules/> : <ActivityList />}
        <AddRuleButton handleChange={handleChange} watchrules={watchrules}/>
      </Box>
    </div>
  );
}

export default Activity;
