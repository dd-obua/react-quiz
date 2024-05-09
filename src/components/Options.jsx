const Options = function ({ qn, dispatch, answer }) {
  return (
    <div>
      {qn.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer && "answer"} ${
            answer === qn.correctOption ? "correct" : "wrong"
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
