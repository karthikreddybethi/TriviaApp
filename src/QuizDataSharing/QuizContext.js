import React, { createContext, useState, useEffect } from "react";

export const QuizContext = createContext();

export const QuizProvider = (props) => {
  const [value, setValue] = useState({ questions: "", category: "", type: "" });
  const [showError, setShowError] = useState({});
  const [apiData, setApiData] = useState();
  const [questionsPage, setQuestionsPage] = useState(false);
  const [userValue, setUserValue] = useState({});
  const [userAnswer, setUserAnswer] = useState([]);
  const [userChoice, setUserChoice] = React.useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [formattedQuestion, setFormattedQuestion] = useState(
    localStorage.getItem("formattedQuestions")
      ? JSON.parse(localStorage.getItem("formattedQuestions"))
      : []
  );

  let userChosenAnswers = [];
  let evaluatedAnswer = [];
  function handleSubmitQuestions() {
    for (const property in userValue) {
      userChosenAnswers.push(userValue[property]);
    }

    evaluateAnswers();
  }

  function evaluateAnswers() {
    correctAnswers.forEach((answer) => {
      userChosenAnswers.forEach((userAnswer) => {
        if (userAnswer === answer) {
          evaluatedAnswer.push(userAnswer);
        }
      });
    });
  }

  function handleData(e) {
    e.preventDefault();
    const { name, value } = e.target;

    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function validate() {
    const { questions, category, type } = value;

    if (questions < 1 || questions > 40) {
      setShowError((prev) => {
        return { ...prev, showEmailError: true };
      });
    } else {
      setShowError((prev) => {
        return { ...prev, showEmailError: false };
      });
    }

    if (category === "") {
      setShowError((prev) => {
        return { ...prev, showCategoryError: true };
      });
    } else {
      setShowError((prev) => {
        return { ...prev, showCategoryError: false };
      });
    }

    if (type === "") {
      setShowError((prev) => {
        return { ...prev, showTypeError: true };
      });
    } else {
      setShowError((prev) => {
        return { ...prev, showTypeError: false };
      });
    }
  }

  return (
    <QuizContext.Provider
      value={{
        handleData: handleData,
        value: value,
        setValue: setValue,
        validate: validate,
        showError: showError,
        setShowError: setShowError,
        setApiData: setApiData,
        questionsPage: questionsPage,
        setQuestionsPage: setQuestionsPage,
        apiData: apiData,
        userAnswer: userAnswer,
        setUserAnswer: setUserAnswer,
        userChoice: userChoice,
        setUserChoice: setUserChoice,
        userValue: userValue,
        setUserValue: setUserValue,
        correctAnswers: correctAnswers,
        setCorrectAnswers: setCorrectAnswers,
        handleSubmitQuestions: handleSubmitQuestions,
        userChosenAnswers: userChosenAnswers,
        evaluatedAnswer: evaluatedAnswer,
        userChosenAnswers: userChosenAnswers,
        formattedQuestion: formattedQuestion,
        setFormattedQuestion: setFormattedQuestion,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};
