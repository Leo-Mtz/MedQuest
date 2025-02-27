import { useState } from 'react';
import type { Quiz } from '../pages/api/quizzes/[quizId]';
import useFetchQuizId from '../services/fetchQuizId';

const QuizPage = ({ quizId }: { quizId: string }) => {
  console.log("QuizPage rendering with quizId:", quizId);
  const { quiz, loading, error } = useFetchQuizId(quizId);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

  console.log("QuizPage: rendering quiz content");
  return (
    <div>
      <h1>{quiz.title}</h1>
      
      {/* Temporary display of the complete quiz object for validation */}
      <pre>{JSON.stringify(quiz, null, 2)}</pre>
      
      <div>
        <h4>{quiz.questions[currentQuestion].question}</h4>
        <ul>
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <button
          onClick={() =>
            setCurrentQuestion(prev => Math.max(prev - 1, 0))
          }
          disabled={currentQuestion === 0}
        >
          Anterior
        </button>
        <button
          onClick={() =>
            setCurrentQuestion(prev =>
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