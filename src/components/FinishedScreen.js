export default function FinishedScreen({ maxPoints, points }) {
  const percentScore = (points / maxPoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPoints} (
      {Math.ceil(percentScore)}%)
    </p>
  );
}
