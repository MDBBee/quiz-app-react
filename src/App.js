import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import StartScreen from './StartScreen';
import Questions from './Questions';
import Error from './Error';

// loading, error, ready, active, finished
const initialState = {
  questions: [],
  status: 'loading',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, questions: action.payload, status: 'ready' };

    default:
      throw new Error('Unkown action!!');
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state.questions.length;
  useEffect(() => {
    fetch('http://localhost:7000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'LOAD_DATA', payload: data }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {state.status === 'loading' && <Loader />}
        {state.status === 'error' && <Error />}
        {state.status === 'ready' && (
          <StartScreen totalQuestions={numQuestions} />
        )}
        {state.status === 'active' && <Questions />}
      </Main>
    </div>
  );
}

export default App;
