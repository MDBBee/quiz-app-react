import { type } from '@testing-library/user-event/dist/type';

export default function NextButton({ answer, dispatch }) {
  if (answer === null) return;

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: 'NEXT' })}>
      Next
    </button>
  );
}
