import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './Main';
import Loader from './components/Loader';
import StartScreen from './components/StartScreen';
import Questions from './components/Questions';
import Error from './components/Error';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishedScreen from './components/FinishedScreen';

// loading, error, ready, active, finished
const initialState = {
  questions: [],
  status: 'loading',
  index: 14,
  newAnswer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'START':
      return { ...state, status: 'active' };

    case 'ANSWER':
      const question = state.questions.at(state.index);
      const points = question.points;
      return {
        ...state,
        newAnswer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + points
            : state.points,
      };
    case 'NEXT':
      return { ...state, index: state.index + 1, newAnswer: null };

    case 'FINISHED':
      return { ...state, status: 'finished' };

    default:
      throw new Error('Unkown action!!');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state.questions.length;
  const totalPoints = state.questions.reduce((prev, curr) => {
    return Number(curr.points) + prev;
  }, 0);

  useEffect(() => {
    fetch('http://localhost:7000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'LOAD_DATA', payload: data }));
  }, []);

  console.log(state.answer);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === 'loading' && <Loader />}
        {state.status === 'error' && <Error />}
        {state.status === 'ready' && (
          <StartScreen totalQuestions={numQuestions} dispatch={dispatch} />
        )}
        {state.status === 'active' && (
          <>
            <Progress
              index={state.index}
              numQuestions={numQuestions}
              totalPoints={totalPoints}
              points={state.points}
              answer={state.newAnswer}
            />
            <Questions
              question={state.questions[state.index]}
              dispatch={dispatch}
              answer={state.newAnswer}
            />
            <NextButton
              dispatch={dispatch}
              answer={state.newAnswer}
              numQuestions={numQuestions}
              index={state.index}
            />
          </>
        )}
        {state.status === 'finished' && (
          <FinishedScreen maxPoints={totalPoints} points={state.points} />
        )}
      </Main>
    </div>
  );
}

export default App;
