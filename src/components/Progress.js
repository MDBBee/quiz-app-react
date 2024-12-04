export default function Progress({
  index,
  numQuestions,
  points,
  answer,
  totalPoints,
}) {
  console.log(answer);

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}
