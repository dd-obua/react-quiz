const Questions = function ({ qn }) {
  return (
    <div>
      <h4>{qn.question}</h4>
      <div>
        {qn.options.map((option) => (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
