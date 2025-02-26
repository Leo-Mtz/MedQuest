import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { Quiz } from '../pages/api/quizzes/[quizId]'; // Adjust the path based on your actual file structure

const QuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null); // State to store quiz data
  const [loading, setLoading] = useState<boolean>(true); // Loading state for the fetch request
  const router = useRouter(); // To get the dynamic quizId from the URL
  const { quizId } = router.query; // Access the quizId from the URL

  // Fetch quiz data based on quizId
  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId) return; // If quizId is not available, don't fetch

      try {
        setLoading(true);
        const response = await fetch(`/api/quizzes/${quizId}`);
        const data: Quiz = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]); // Only run this effect when quizId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!quiz) {
    return <div>Quiz not found!</div>;
  }

  return (
    <div>
      <h1>{quiz.title}</h1>

      <div>
        {quiz.questions.map((question) => (
          <div key={question.id}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
