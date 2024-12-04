function Options({ opt, answer, index, dispatch, correctOption }) {
  return (
    <button
      className={`btn btn-option ${index === answer ? 'answer' : ''} ${
        answer !== null ? (index === correctOption ? 'correct' : 'wrong') : ''
      }`}
      onClick={() => dispatch({ type: 'ANSWER', payload: index })}
      disabled={answer}
    >
      {opt}
    </button>
  );
}
export default Options;
