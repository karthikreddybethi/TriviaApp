import React from "react";
import { buttonTheme } from "../Theme/theme";
import { ThemeProvider, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function GoHomeButton({ btnName }) {
  let history = useHistory();
  function handleButton() {
    history.push("/");
    window.location.reload();
  }
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button variant="contained" color="primary" onClick={handleButton}>
        {btnName}
      </Button>
    </ThemeProvider>
  );
}

export default GoHomeButton;
