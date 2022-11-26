import { useEffect, useState } from 'react'

import Alternatives from './components/Alternatives';

import getReviews from './services/reviews';

import './reset.css';
import './style.css';


const App = () => {
  const [question, setQuestion] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const getNewQuestion = () => {
    getReviews().then((data) => { setQuestion(data); })
  }

  const handleNext = () => {
    setSelectedAnswer('');
    setIsAnswered(false);
    setQuestion([]);
    getNewQuestion();
  }

  const handleClick = (albumName) => {
    if (isAnswered) {
      return;
    }
    
    setIsAnswered(true);
    setSelectedAnswer(albumName);

    // Which answer is correct?
    const maxScore = Math.max(...question.map(q => q.score));
    const correctAnswer = question.find(q => q.score === maxScore);
    setIsCorrect(correctAnswer.album === albumName);
  }

  useEffect(() => {
    getNewQuestion()
  }, [])

  return (
    <div className='container'>
      <div className='app-heading'>
        <h1>Can you guess Pitchfork's favorite album? 🤘</h1>
      </div>
      <Alternatives
        // State variables
        question={question}
        isAnswered={isAnswered}
        isCorrect={isCorrect}
        selectedAnswer={selectedAnswer}

        // Event handlers
        handleNext={handleNext}
        handleClick={handleClick}
        />
    </div>
  )
}

export default App;