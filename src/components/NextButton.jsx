import { useQuiz } from "../contexts/QuizContext";

const NextButton = function () {
  const { dispatch, answer, qnIndex, numQns } = useQuiz();

  if (answer === null) return null;
  if (qnIndex < numQns - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  else
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};

export default NextButton;
