//React hook for fetching the questions, title and options of a specific quiz based on its Id
//also handles loading and error states
import { useState, useEffect } from 'react';
import type { Quiz } from '../pages/api/quizzes/[quizId]';


//quiz id is the unique identifier we are using to fetch the quiz
const useFetchQuizId = (quizId: string) => {
  // Log when the hook is called
  console.log("useFetchQuizId called with:", quizId);
  
  //state for stroing the fetched quiz data, null at the beginning since nothing has been fetched
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  //state for storing the loading state of the fetch
  const [loading, setLoading] = useState<boolean>(true);
  //state for storing the error state of the fetch
  const [error, setError] = useState<string | null>(null);

  //useEffect hook runs when component is mounted and when the quizId changes, making it dynamic
  useEffect(() => {
    console.log("useEffect running for quizId:", quizId);
    

    //async means that the function contains that need to wait for something else to be completed
    //async function for fetchingQuiz
    const fetchQuiz = async () => {
      try {

        //Debugging
        console.log("Starting fetch for quizId:", quizId);

        //constructing the url for the API endpoint
        const url = `/api/quizzes/${quizId}`;
        console.log("Fetching from URL:", url);
        //fetching the data from the endpoint
        const response = await fetch(url);
        console.log("Response received:", response.status);
        
        //checking if the response was successful
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        //parsing JSON data from the response
        const data = await response.json();
        console.log("Data received:", data);

        //updating the state with the fetched data
        setQuiz(data);
      } catch (err) {
        //if an error occurs, show an error message
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : String(err));
      } finally {

        //setting the loading state
        console.log("Setting loading to false");
        setLoading(false);
      }
    };
    
    fetchQuiz(); //  call the function when the effect runs
  }, [quizId]); //re-run the effect in case the quizId changes
  

  //return all the states
  return { quiz, loading, error };
};

export default useFetchQuizId;