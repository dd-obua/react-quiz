const StartScreen = function ({ numQns }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQns} questions to test your react master</h3>
      <button>Let's start</button>
    </div>
  );
};

export default StartScreen;