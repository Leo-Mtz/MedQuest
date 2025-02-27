import { useState, useEffect } from 'react';
import type { Quiz } from '../pages/api/quizzes/[quizId]';

const useFetchQuizId = (quizId: string) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuiz = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/quizzes/${quizId}`);
        if (!response.ok) {
          throw new Error(`Error fetching quiz with id: ${quizId}`);
        }
        const data: Quiz = await response.json();
        setQuiz(data);
      } catch (err: any) {
        setError(err.message || 'Error fetching quiz');
      } finally {
        setLoading(false);
      }
    };

    if (quizId) {
      loadQuiz();
    }
  }, [quizId]);

  return { quiz, loading, error };
};

export default useFetchQuizId;