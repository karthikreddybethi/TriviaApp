import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { QuizProvider } from "./QuizDataSharing/QuizContext";
import { HashRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <QuizProvider>
      <App />
    </QuizProvider>
  </Router>,
  document.getElementById("root")
);
