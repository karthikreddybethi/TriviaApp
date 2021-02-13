import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  ThemeProvider,
} from "@material-ui/core";
import {
  useParams,
  useRouteMatch,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { buttonTheme } from "../Theme/theme";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { QuizContext } from "../QuizDataSharing/QuizContext";
import QuestionRender from "../components/QuestionRender";
import ScoresBoardPage from "./ScoresBoardPage";
import ErrorPage from "./ErrorPage";
import Loading from "../components/Loading";

export default function QuestionPage() {
  const {
    apiData,
    setCorrectAnswers,
    handleSubmitQuestions,
    formattedQuestion,
    setFormattedQuestion,
  } = useContext(QuizContext);

  const { path, url } = useRouteMatch();
  let history = useHistory();

  const [count, setCount] = useState(0);
  const [submitQuestions, setSubmitQuestions] = useState(false);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let newlyFormattedData = [];
    if (apiData === undefined) {
      setLoading(true);
    } else {
      setLoading(false);
      const { results } = apiData;
      if (results.length === 0) {
        history.push("/ErrorPage");
      } else {
        setShowErrorPage(false);
        results.forEach((item, index) => {
          let options = [...item.incorrect_answers, item.correct_answer];

          setCorrectAnswers((prev) => {
            return [...prev, item.correct_answer];
          });

          for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [
              options[j].replace(/&[#A-Za-z0-9]+;/gi, ""),
              options[i].replace(/&[#A-Za-z0-9]+;/gi, ""),
            ];
          }

          newlyFormattedData = [
            ...newlyFormattedData,
            {
              question: item.question.replace(/&[#A-Za-z0-9]+;/gi, ""),
              options: options,
              questionNumber: index,
            },
          ];
        });
        localStorage.setItem(
          "formattedQuestions",
          JSON.stringify(newlyFormattedData)
        );
        const newData = localStorage.getItem("formattedQuestions");

        setFormattedQuestion(JSON.parse(newData));
      }
    }

    return () => {
      setCorrectAnswers([]);
    };
  }, [apiData]);

  useEffect(() => {
    if (formattedQuestion.length > 0) {
      setLoading(false);
    }
  });

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path={path}>
            <Box
              height="90vh"
              width="95%"
              mx="auto"
              position="relative"
              display="flex"
              justifyContent="center"
            >
              <Grid
                container
                alignItems="center"
                wrap="nowrap"
                style={{
                  margin: "auto",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                {formattedQuestion.map((question, index) => {
                  return (
                    <Grid item key={index}>
                      <Box
                        width="95vw"
                        mx="auto"
                        style={{
                          transform: `translatex(${count * -100}%)`,
                        }}
                      >
                        <QuestionRender
                          question={question.question}
                          options={question.options}
                          qNumber={question.questionNumber}
                        />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
              <Box position="absolute" bottom="50px" width="100%">
                <Grid container alignItems="center" justify="space-around">
                  <Grid item>
                    <IconButton
                      aria-label="privious"
                      onClick={() => {
                        if (count > 0) {
                          setCount(count - 1);
                          setSubmitQuestions(false);
                        }
                      }}
                    >
                      <KeyboardArrowLeft />
                    </IconButton>
                  </Grid>
                  {submitQuestions && (
                    <Grid item>
                      <ThemeProvider theme={buttonTheme}>
                        <Button
                          onClick={() => {
                            localStorage.clear();
                            handleSubmitQuestions();
                            history.push(`${url}/ScoresBoardPage`);
                          }}
                          variant="contained"
                          color="primary"
                        >
                          Submit Questions
                        </Button>
                      </ThemeProvider>
                    </Grid>
                  )}

                  <Grid item>
                    <IconButton
                      aria-label="next"
                      onClick={() => {
                        if (count < formattedQuestion.length - 1) {
                          if (count === formattedQuestion.length - 2) {
                            setSubmitQuestions(true);
                          }
                          setCount(count + 1);
                        } else {
                          // setSubmitQuestions(true);
                        }
                      }}
                    >
                      <KeyboardArrowRight />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Route>
          <Route path={`${path}/ScoresBoardPage`} component={ScoresBoardPage} />
        </Switch>
      )}
    </Box>
  );
}
