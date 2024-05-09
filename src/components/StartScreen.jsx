const StartScreen = function ({ numQns, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQns} questions to test your react master</h3>
      <button onClick={() => dispatch({ type: "start" })}>Let's start</button>
    </div>
  );
};

export default StartScreen;
