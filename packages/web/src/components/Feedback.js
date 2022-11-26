import './Feedback.css';

const Feedback = ({ question, isAnswered, isCorrect, selectedAnswer, handleNext }) => {
  if (!isAnswered) {
    return;
  }

  const correctness = isCorrect ? 'correct' : 'incorrect';
  const heading = isCorrect ? "That's correct!" : "Nice try!";

  return (
    <div className='feedback'>
      <p className={`feedback-heading ${correctness}`}>{heading}</p>
      <p className='feedback-descritpion'>
        Pitchfork gave <span className={`highlight ${correctness}`}>{question[0].album}</span> a rating of <span className={`highlight ${correctness}`}>{question[0].score}</span>, 
        and gave       <span className={`highlight ${correctness}`}>{question[1].album}</span> a rating of <span className={`highlight ${correctness}`}>{question[1].score}</span>.
      </p>
      <button className={`next-question bg-${isCorrect ? "correct" : "incorrect"}`} onClick={handleNext}>Next question</button>
    </div>
  )
}

export default Feedback;