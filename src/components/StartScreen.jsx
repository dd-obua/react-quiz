import { useQuiz } from "../contexts/QuizContext";

const StartScreen = function () {
  const { numQns, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQns} questions to test your react master</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
