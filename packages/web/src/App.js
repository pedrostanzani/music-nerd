import { useState } from 'react'
import './reset.css'
import './style.css'

const questions = [
  [{ name: 'Tranquility Base Hotel & Casino', score: 8.1 }, { name: 'The New Abnormal', score: 5.7 }],
  [{ name: 'My Beautiful Dark Twisted Fantasy', score: 10 }, { name: 'The Life of Pablo', score: 9 }]
]

const getRandomIndex = () => Math.floor(Math.random() * questions.length);

const Option = ({ albumName, className, handleClick }) => {
  return (
    <div className={className} onClick={() => handleClick(albumName)}>
      <span>{albumName}</span>
    </div>
  )
}

const Result = ({ guessState, nextQuestion }) => {
  if (!guessState.isGuessed) {
    return;
  }

  return (
    <div style={{ margin: '1rem' }}>
      <p>
        You selected {guessState.selectedAlbum}. That answer is {guessState.isCorrect ? 'correct' : 'not correct'}.
      </p>
      <button onClick={nextQuestion}>Next question</button>
    </div>
  )

  // <p style={{margin: '1rem'}}>Debug (is guessed): {isGuessed ? 'true' : 'false'}</p>
}

const Options = ({ question, setQuestionIndex }) => {
  const [guessState, setGuessState] = useState({
    isGuessed: false,
    selectedAlbum: '',
    isCorrect: false
  })

  const sortedOptions = question.sort((a, b) => b.score - a.score);
  const correctAnswer = sortedOptions[0].name;

  const handleClick = (album) => {
    if (guessState.isGuessed) {
      return;
    }

    setGuessState({
      isGuessed: true,
      selectedAlbum: album,
      isCorrect: album === correctAnswer
    });
  }

  const handleNextQuestion = () => {
    setQuestionIndex(getRandomIndex());
    setGuessState({
      isGuessed: false,
      selectedAlbum: '',
      isCorrect: false
    });
  }

  return (
    <>
      <div className="alternatives">
        <Option
          albumName={question[0].name}
          className="alternative red"
          handleClick={handleClick}
        />
        <Option
          albumName={question[1].name}
          className="alternative blue"
          handleClick={handleClick}
        />
      </div>
      <Result guessState={guessState} nextQuestion={handleNextQuestion} />
    </>
  )
}

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(getRandomIndex());

  return (
    <div className="App">
      <h1 className='h1' style={{ margin: '1rem' }}>Can you guess Pitchfork's favorite album?</h1>
      <Options question={questions[questionIndex]} setQuestionIndex={setQuestionIndex} />
    </div>
  );
}

export default App;
