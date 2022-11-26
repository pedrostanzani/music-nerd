import Album from './Album';
import Feedback from './Feedback';

const Alternatives = ({ question, isAnswered, isCorrect, selectedAnswer, handleNext, handleClick }) => {
  if (question.length !== 2) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Album name={question[0].album} artist={question[0].artist} onClick={handleClick} />
      <Album name={question[1].album} artist={question[1].artist} onClick={handleClick} />
      <Feedback 
        question={question}
        isAnswered={isAnswered} 
        isCorrect={isCorrect}
        selectedAnswer={selectedAnswer}
        handleNext={handleNext}
      />
    </>
  )
}

export default Alternatives;