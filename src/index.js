import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.js";

import { QuizProvider } from "./QuizDataSharing/QuizContext";
ReactDOM.render(
  <QuizProvider>
    <App />
  </QuizProvider>,
  document.getElementById("root")
);
