const NextButton = function ({ dispatch, answer }) {
  if (answer === null) return null;
  return <button className="btn btn-ui">Next</button>;
};

export default NextButton;
