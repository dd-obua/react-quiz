const Options = function ({ qn }) {
  return (
    <div>
      {qn.options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
