const Progress = function ({ qnIndex, numQns, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQns}
        value={qnIndex + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{qnIndex + 1}</strong> / {numQns}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
};

export default Progress;
