import Options from "./Options";

const Questions = function ({ qn, dispatch, answer }) {
  return (
    <div>
      <h4>{qn.question}</h4>
      <Options qn={qn} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Questions;
