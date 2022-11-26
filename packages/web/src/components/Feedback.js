const Feedback = ({ question, isAnswered, isCorrect, selectedAnswer, handleNext }) => {
  if (!isAnswered) {
    return;
  }

  return (
    <div>
      <p>You selected {selectedAnswer}. That answer { isCorrect ? 'is correct' : 'is not correct' }.</p>

      <ul>
        <li>{question[0].album} has a score of {question[0].score}</li>
        <li>{question[1].album} has a score of {question[1].score}</li>
      </ul>


      <button onClick={handleNext}>Next question</button>
    </div>
  )
}

export default Feedback;