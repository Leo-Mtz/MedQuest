// filepath: /c:/Users/DELL/OneDrive/MedQuest/MedQuest/src/services/fetchQuizId.ts
import { useState, useEffect } from 'react';
import type { Quiz } from '../pages/api/quizzes/[quizId]';

const useFetchQuizId = (quizId: string) => {
  // Log when the hook is called
  console.log("useFetchQuizId called with:", quizId);
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("useEffect running for quizId:", quizId);
    
    const fetchQuiz = async () => {
      try {
        console.log("Starting fetch for quizId:", quizId);
        const url = `/api/quizzes/${quizId}`;
        console.log("Fetching from URL:", url);
        
        const response = await fetch(url);
        console.log("Response received:", response.status);
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Data received:", data);
        setQuiz(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        console.log("Setting loading to false");
        setLoading(false);
      }
    };
    
    fetchQuiz(); // Actually call the function!
  }, [quizId]);
  
  return { quiz, loading, error };
};

export default useFetchQuizId;