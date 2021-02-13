import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { QuizContext } from "../QuizDataSharing/QuizContext";

export default function QuestionsInput() {
  const { handleData, value, showError } = useContext(QuizContext);

  function handleChange(e) {
    handleData(e);
  }
  return (
    <TextField
      id="select-question-label"
      multiline
      fullWidth
      error={showError.showEmailError ? true : false}
      label="Number of Questions"
      variant="standard"
      type="number"
      helperText={
        showError.showEmailError &&
        "Minimum 1 and Maximum 40 questions are allowed"
      }
      onChange={handleChange}
      name="questions"
      value={value.questions}
    />
  );
}
