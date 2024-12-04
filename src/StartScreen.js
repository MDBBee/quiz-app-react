export default function StartScreen({ totalQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{totalQuestions} questions to test your React mastery</h3>
      <button>Let's Start</button>
    </div>
  );
}
