import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../QuizDataSharing/QuizContext";
import goodJob from "../images/good-job.gif";
import greatJob from "../images/great-job.gif";
import boost from "../images/boosti.gif";
import Complements from "../components/Complements";

import GoHomeButton from "../components/GoHomeButton";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      lineHeight: "20px",
    },
    typography: {
      fontSize: "clamp(1.5rem,6vw,2rem)",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: theme.typography.fontWeightMedium,
    },
  };
});

function ScoresBoardPage() {
  let classes = useStyles();
  const { evaluatedAnswer, userChosenAnswers, formattedQuestion } = useContext(
    QuizContext
  );
  const [greetings, setGreetings] = useState(false);
  const [avgPerformance, setAvgPerformance] = useState(false);
  const [poorPerformance, setPoorPerformance] = useState(false);

  useEffect(() => {
    let numberOfQuestions = Math.ceil(formattedQuestion.length / 2);
    let numberOfCorrectAnswers = evaluatedAnswer.length;
    if (formattedQuestion.length === evaluatedAnswer.length) {
      setGreetings(true);
      setAvgPerformance(false);
    } else if (numberOfCorrectAnswers >= numberOfQuestions) {
      setAvgPerformance(true);
    } else {
      setPoorPerformance(true);
    }
  }, []);

  return (
    <Box>
      <Grid container justify="center">
        <Grid
          className={classes.root}
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ height: "90vh" }}
          spacing={1}
        >
          {greetings && (
            <Grid item>
              <Complements complement="Great Job" image={greatJob} />
            </Grid>
          )}
          {avgPerformance && (
            <Grid item>
              <Complements complement="Good Job" image={goodJob} />
            </Grid>
          )}
          {poorPerformance && (
            <Grid item>
              <Complements
                complement="You Need to Boost Your Skills"
                image={boost}
              />
            </Grid>
          )}
          <Grid item>
            <Typography variant="h4">Scores</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.typography}>
              Questions attempted: {formattedQuestion.length}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" className={classes.typography}>
              Correct answers: {evaluatedAnswer.length}
            </Typography>
          </Grid>
          <Grid item>
            <Box mt="20px">
              <GoHomeButton btnName="Go Home" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ScoresBoardPage;
