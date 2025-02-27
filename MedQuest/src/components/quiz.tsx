//Quiz component
//responsible for loading the requested quiz and displaying the questions


//Problem with question getting is here
import { useState, useEffect } from 'react';
import type { Quiz } from '../pages/api/quizzes/[quizId]'
import useFetchQuizId from '../services/fetchQuizId';



const QuizPage= ({ quizId} : {quizId:string}) => {

  const { quiz, loading, error } = useFetchQuizId(quizId);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if(loading) return <p> Cargando </p>
  if(error) return <p> Error: {error}</p>
  if( !quiz) return <p> Quiz not found</p>
  
    return (
      <div>

        <h1>{quiz.title}</h1>

        <div>
          <h4> {quiz.questions[currentQuestion].question}</h4>
          <ul>
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>

        <div>
        <button
          onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
          disabled={currentQuestion === 0}
        >
          Anterior
        </button>
        <button
          onClick={() =>
            setCurrentQuestion((prev) =>
              Math.min(prev + 1, quiz.questions.length - 1)
            )
          }
          disabled={currentQuestion === quiz.questions.length - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};


export default QuizPage;