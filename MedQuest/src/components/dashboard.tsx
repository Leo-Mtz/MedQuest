//Dashboard component
/* Component serves as the main quiz selection screen, displaying all available quizzes
as clickable cards. It handles loading states, error handling, and rendering the quiz list.
*/

import QuizCard from '../components/quizcard';
import React from 'react';
import useFetchQuiz from "../services/fetchquiz"

/*Steps
1. Fetching quiz data using the useFetchQuiz hook
2.Displaying loading state while fetching data
3.Displaying error state if an error occurs
4. Mapping over the quizzes array and rendering a QuizCard component for each quiz
*/
const Dashboard = () => {


    //use custom hook to fetch quizzes
    const {quizzes, loading, error} = useFetchQuiz();

    if(loading)
    {
        return <div>Loading...</div>;
    }

    if(error)
    {
        return <div>Error: {error}</div>;
    }

    //when data is succesfully loaded, render the UI showing the dashboards and quizcards
    return (

    <div>
        <h1 className= "title"> Quizzes de MedQuest </h1>
    
    {/*Mapping and rendering of quiz card components with their information */}
    <div className= "dashboard-container">
    {quizzes.map((quiz:{id:string, title:string, description:string, number_questions:number, btnText:string, link:string}) =>(
    <QuizCard
        key= {quiz.id}
        id= {quiz.id}
        title= {quiz.title}
        description= {quiz.description}
        number_questions= {quiz.number_questions}
        btnText={quiz.btnText}
        link= {quiz.link}
        />
    ))}


        </div>
    </div>
    ); //end of return
}; //end of dashboard

export default Dashboard;
