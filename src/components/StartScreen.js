import { type } from '@testing-library/user-event/dist/type';

export default function StartScreen({ totalQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{totalQuestions} questions to test your React mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: 'START' })}>
        Let's Start
      </button>
    </div>
  );
}
