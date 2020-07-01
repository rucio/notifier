import React from "react";
import RuleList from "./RuleList";

const spanStyle = {
  fontFamily: "Cern, sans-serif",
  fontWeight: 700,
  fontSize: 24,
  color: "#3e55ab",
};

function WatchRules() {
  return (
    <React.Fragment>
      <div style={{ padding: 5, width: "100%" }} id="title">
        <span style={spanStyle}>Your Rules</span>
      </div>
      <RuleList/>
    </React.Fragment>
  );
}

export default WatchRules;
