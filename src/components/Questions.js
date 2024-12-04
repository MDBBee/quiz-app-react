import Options from './Options';

function Questions({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((opt, index) => (
          <Options
            opt={opt}
            answer={answer}
            correctOption={question.correctOption}
            index={index}
            dispatch={dispatch}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
export default Questions;
