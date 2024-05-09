import Options from "./Options";

const Questions = function ({ qn }) {
  return (
    <div>
      <h4>{qn.question}</h4>
      <Options qn={qn} />
    </div>
  );
};

export default Questions;
