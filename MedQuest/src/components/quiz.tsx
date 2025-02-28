import { useState } from 'react';
import type { Quiz } from '../pages/api/quizzes/[quizId]';
import useFetchQuizId from '../services/fetchQuizId';
import '../styles/quiz.css'

//const is used to declare a variable in order to prevent reassignments
const QuizPage = ({ quizId }: { quizId: string }) => {
  console.log("QuizPage rendering with quizId:", quizId);
  const { quiz, loading, error } = useFetchQuizId(quizId);
  const [currentQuestion, setCurrentQuestion] = useState(0);

    // Track selected answers for each question
    const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: string}>({});
    // Track whether the answer has been submitted
    const [submittedAnswers, setSubmittedAnswers] = useState<{[key: string]: boolean}>({});
    // Track the score
  

    if (loading) {
      console.log("QuizPage: showing loading state");
      return <div>Loading...</div>;
    }

    if (error) {
      console.log("QuizPage: showing error state", error);
      return <div>Error: {error}</div>;
    }

    if (!quiz) {
      console.log("QuizPage: quiz not found");
      return <div>Quiz not found</div>;
    }


    // Handle selecting an answer for a question
    const question= quiz.questions[currentQuestion];
    const isAnswered= submittedAnswers[question.id] == true;
    const selectedAnswer= selectedAnswers[question.id] || '';

    const handleSelectAnswer= (option: string) =>{
      if ( isAnswered) return; 
      setSelectedAnswers({
        ...selectedAnswers,
        [question.id]: option
      });
    };

      const handleSubmitAnswer= () => {
        if (!selectedAnswer || isAnswered) return;
        const isCorrect = selectedAnswer === question.answer;
     
        setSubmittedAnswers({
          ...submittedAnswers,
          [question.id]: true
        });
      };

        const handleNextQuestion = () => {
          if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
          }
        };
      
    

  return (
    <div className="quizContainer">
      <header className="quiz-header">
        <h1>{quiz.title}</h1>
      </header>
      <div className= "quiz-progress">
        Question {currentQuestion +1} of {quiz.questions.length}
        </div>
      <div className="question-container">
        <h4>{quiz.questions[currentQuestion].question}</h4>
        <ul className="options-list">
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <li 
            key={index} 
            className={`option-item 
              ${selectedAnswer === option ? 'selected' : ''} 
              ${isAnswered && option === question.answer ? 'correct' : ''}
              ${isAnswered && selectedAnswer === option && option !== question.answer ? 'incorrect' : ''}
            `}
            onClick={() => handleSelectAnswer(option)}
          >
            {option}
          </li>
          ))}
        </ul>

        {!isAnswered && selectedAnswer && (
          <button 
            className="submit-button"
            onClick={handleSubmitAnswer}
          >
            Verificar
          </button>
        )}

        {isAnswered && (
          <div className="feedback-container">
            {selectedAnswer === question.answer ? (
              <p className="correct-feedback">¡Correcto!</p>
            ) : (
              <p className="incorrect-feedback">
                Incorrect. The correct answer is: {question.answer}
              </p>
            )}
          </div>
        )}
      </div>
      
      <div className="button-container">
        <button
          className="nav-button"
          onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
          disabled={currentQuestion === 0}
        >
          Anterior
        </button>
        <button
          className="nav-button"
          onClick={() => setCurrentQuestion((prev) => Math.min(prev + 1, quiz.questions.length - 1))}
          disabled={currentQuestion === quiz.questions.length - 1}
        >
          Siguiente
        </button>

        <button
          className= "end-button"
          onClick={() => {
            window.location.href= './quizDashboard';
          }}
          >
          Terminar
          </button>

      </div>
    </div>
  );
};

export default QuizPage;