import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { QuizContext } from "../QuizDataSharing/QuizContext";

const useStyles = makeStyles((theme) => {
  return {
    typography: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: theme.typography.fontWeightBold,
    },
    radioGroup: {
      "& span": {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  };
});

export default function QuestionRender({ question, options, qNumber }) {
  const classes = useStyles();
  const { setUserValue } = useContext(QuizContext);

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValue(value);
    setUserValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography className={classes.typography} variant="h6">
          {question}
        </Typography>
      </Box>
      <Box>
        <RadioGroup
          aria-label="gender"
          name={`question${qNumber}`}
          value={value.qName}
          onChange={handleChange}
          style={{ marginTop: "15px" }}
        >
          {options.map((option, index) => {
            return (
              <FormControlLabel
                key={index}
                style={{ marginTop: "10px" }}
                value={option}
                control={<Radio />}
                label={option}
                className={classes.radioGroup}
              />
            );
          })}
        </RadioGroup>
      </Box>
    </Box>
  );
}
