import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

const Questions = function () {
  const { qn, dispatch, answer } = useQuiz();

  return (
    <div>
      <h4>{qn.question}</h4>
      <Options qn={qn} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Questions;
