import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QN = 30;

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  qnIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QN,
      };

    case "newAnswer":
      const question = state.questions.at(state.qnIndex);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, qnIndex: state.qnIndex + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining <= 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action unknown");
  }
};

const QuizProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    qnIndex,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state;

  const numQns = questions.length;
  const maxPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(function () {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        qnIndex,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQns,
        maxPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = function () {
  const context = useContext(QuizContext);
  if (context === undefined) return "Error";
  return context;
};

export { QuizProvider, useQuiz };
