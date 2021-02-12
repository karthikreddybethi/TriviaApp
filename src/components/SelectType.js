import React, { useContext } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { QuizContext } from "../QuizDataSharing/QuizContext";

export default function SelectType() {
  const { handleData, value, showError } = useContext(QuizContext);

  function handleChange(e) {
    handleData(e);
  }
  return (
    <TextField
      id="select-type-label"
      select
      multiline
      label="Type of Questions"
      variant="standard"
      onChange={handleChange}
      value={value.type}
      name="type"
      helperText={
        showError.showTypeError && "Please select the one of the options"
      }
      error={showError.showTypeError ? true : false}
    >
      <MenuItem value="multiple">Multiple Choice</MenuItem>
      <MenuItem value="boolean">True/False</MenuItem>
    </TextField>
  );
}
