import './Feedback.css';

const FeedbackDescription = ({ question }) => {
  const albumA = { name: question[0].album, score: question[0].score }
  const albumB = { name: question[1].album, score: question[1].score }

  return (
    <p className='feedback-descritpion'>
      Pitchfork gave <span className='highlight'>{albumA.name}</span> a rating of <span className='highlight'>{albumA.score}</span>, and gave <span className='highlight'>{albumB.name}</span> a rating of <span className='highlight'>{albumB.score}</span>.
    </p>
  )
}

const IncorrectFeedback = ({ question }) => {
  return (
    <div>
      <p className='feedback-heading incorrect'>Nice try...</p>
      <FeedbackDescription question={question} />
    </div>
  )
}

const CorrectFeedback = ({ question }) => {
  return (
    <div>
      <p className='feedback-heading correct'>That's correct!</p>
      <FeedbackDescription question={question} />
    </div>
  )
}

const Feedback = ({ question, isAnswered, isCorrect, selectedAnswer, handleNext }) => {
  if (!isAnswered) {
    return;
  }

  return (
    <div className='feedback'>
      {isCorrect ? <CorrectFeedback question={question} /> : <IncorrectFeedback question={question} />}
      <button className={`next-question ${isCorrect ? "correct" : "incorrect"}`} onClick={handleNext}>Next question</button>
    </div>
  )
}

export default Feedback;