import {
  Box,
  makeStyles,
  Grid,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useParams, useRouteMatch, Switch, Route } from "react-router-dom";
import { formTheme } from "../Theme/theme";

//------Components--------
import { QuizContext } from "../QuizDataSharing/QuizContext";
import QuestionInput from "../components/QuestionsInput";
import SelectDifficulty from "../components/SelectDifficulty";
import SelectType from "../components/SelectType";
import QuestionsPage from "./QuestionsPage";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "inline-block",
    width: "100%",
  },
}));

function Art() {
  const classes = useStyles();
  const {
    value,
    validate,
    showError,
    setValue,
    apiData,
    setShowError,
    setApiData,
  } = useContext(QuizContext);
  const { name } = useParams();
  let history = useHistory();

  const { path, url } = useRouteMatch();

  const questions = async (topic) => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${value.questions}&category=${topic}&difficulty=${value.category}&type=${value.type}`
    );
    const data = await response.json();
    return setApiData(data);
  };

  useEffect(() => {
    let topic = name.slice(-2);

    if (
      showError.showEmailError === false &&
      showError.showCategoryError === false &&
      showError.showTypeError === false
    ) {
      questions(topic);
      // dataApi();
      history.push(`${url}/questionsPage`);
      setShowError({});
    } else {
      console.log("no call to api");
    }

    return () => {
      console.log("component unmounted");
    };
  }, [showError]);

  function handleSubmit(e) {
    e.preventDefault();
    validate();
  }

  // console.log(showError);

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Box p="15px" overflow="hidden" mt="100px">
          <ThemeProvider theme={formTheme}>
            <form className={classes.root} action="#" onSubmit={handleSubmit}>
              <Grid container justify="center" alignItems="center">
                <Grid
                  item
                  xs={12}
                  md={4}
                  // lg={3}
                  container
                  direction="column"
                  spacing={6}
                >
                  <Grid item>
                    <QuestionInput />
                  </Grid>

                  <Grid item>
                    <SelectDifficulty />
                  </Grid>

                  <Grid item>
                    <SelectType />
                  </Grid>

                  <Grid item>
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      fullWidth
                      color="primary"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </ThemeProvider>
        </Box>
      </Route>

      <Route path={`${path}/questionsPage`} component={QuestionsPage} />
    </Switch>
  );
}

export default Art;
