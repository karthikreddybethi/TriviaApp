import React, { useContext } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { QuizContext } from "../QuizDataSharing/QuizContext";

export default function SelectDifficulty() {
  const { handleData, value, showError } = useContext(QuizContext);

  function handleChange(e) {
    handleData(e);
  }
  return (
    <TextField
      id="select-category-label"
      select
      multiline
      label="Select Difficulty"
      variant="standard"
      onChange={handleChange}
      name="category"
      value={value.category}
      helperText={
        showError.showCategoryError && "Please select the one of the options"
      }
      error={showError.showCategoryError ? true : false}
      defaultValue="None"
    >
      <MenuItem value="easy">Easy</MenuItem>
      <MenuItem value="medium">Medium</MenuItem>
      <MenuItem value="hard">Hard</MenuItem>
    </TextField>
  );
}
