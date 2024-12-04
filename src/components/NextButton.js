import { type } from '@testing-library/user-event/dist/type';

export default function NextButton({ answer, dispatch, numQuestions, index }) {
  if (answer === null) return;
  if (numQuestions === index + 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'FINISHED' })}
      >
        Finished: See Score &rarr;
      </button>
    );
  }

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: 'NEXT' })}>
      Next
    </button>
  );
}
