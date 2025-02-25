import {useState, useEffect} from 'react';
import type {Quiz} from '../pages/api/quiz';

const usefetchQuiz= () =>{
    //declaration of state variables, creation of constant references to the state
    //setting the state of quizzes to an empty array, setQuizzes is used to update the state
    const [quizzes, setQuizzes] = useState <Quiz[]>([]);
    //setting the state of loading to true, set is used to update
    const [loading, setLoading] = useState<boolean>(true);
    //setting the state of error to null
    const [error, setError]= useState<string | null>(null);

    useEffect (() => {
        const fetchQuiz= async() => {

            try{

            const response = await fetch('/api/quiz');
            if(!response.ok){
                throw new Error( "Failed to fetch quizzes");

            }
            
            const data: Quiz[] = await response.json();
            setQuizzes(data);

            }catch ( err: any){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };

        fetchQuiz();
    },[]);

    return {quizzes, loading, error};

};

export default usefetchQuiz;