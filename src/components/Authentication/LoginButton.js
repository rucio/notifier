import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  marginLeft: 15,
  color: "#fffafa"
};

function LoginButton(props) {
  const { children, loading, ...rest } = props;
  return (
    <Button {...rest}>
      {children}
      {loading && (
        <CircularProgress style={styles} size={15} />
      )}
    </Button>
  );
}

export default LoginButton;
