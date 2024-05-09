const Progress = function ({ qnIndex, numQns, points, maxPoints }) {
  return (
    <header className="progress">
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
