import React, { useContext, useEffect } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import Header from "./Header";
import Categories from "./Categories";
import Art from "../pages/SelectOptionsPage";
import { QuizContext } from "../QuizDataSharing/QuizContext";
import ErrorPage from "../pages/ErrorPage";
function App() {
  return (
    <Router>
      <CssBaseline />

      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/ErrorPage" component={ErrorPage} />
          <Route path="/:name" component={Art} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
