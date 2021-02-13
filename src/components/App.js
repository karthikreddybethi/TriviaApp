import React, { useContext, useEffect } from "react";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Box, CssBaseline } from "@material-ui/core";

import Header from "./Header";
import Categories from "./Categories";
import Art from "../pages/SelectOptionsPage";
import ErrorPage from "../pages/ErrorPage";
import Footer from "../components/Footer";
function App() {
  return (
    <Box>
      <CssBaseline />

      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/ErrorPage" component={ErrorPage} />
          <Route path="/:name" component={Art} />
        </Switch>
      </div>
      <Footer />
    </Box>
  );
}

export default App;
