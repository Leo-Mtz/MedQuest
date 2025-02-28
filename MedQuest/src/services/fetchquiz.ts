//React hoook for fetchin quiz data for the dashboard

import {useState, useEffect} from 'react';
import type {QuizCard} from '../pages/api/quiz';

const usefetchQuiz= () =>{
    //declaration of state variables, creation of constant references to the state
    //setting the state of quizzes to an empty array, setQuizzes is used to update the state
    const [quizzes, setQuizzes] = useState <QuizCard[]>([]);
    //setting the state of loading to true, set is used to update
    const [loading, setLoading] = useState<boolean>(true);
    //setting the state of error to null
    const [error, setError]= useState<string | null>(null);

    //hook runs once after being initially rendered
    useEffect (() => {

        //fetchQuiz function is defined as an async function
        const fetchQuiz= async() => {

            try{

                //fetches data from api endpoint
            const response = await fetch('/api/quiz');
            if(!response.ok){
                throw new Error( "Failed to fetch quizzes");

            }
            
            //Parsing json response
            const data: QuizCard[] = await response.json();

            //updating state with fetched and parsed data
            setQuizzes(data);

            }catch ( err: any){

                //if any error occurs, show an error message
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };

        //call of function
        fetchQuiz();
    },[]);

    //returning object with its respective states
    return {quizzes, loading, error};

};

export default usefetchQuiz;