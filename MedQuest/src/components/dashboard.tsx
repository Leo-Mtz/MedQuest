import QuizCard from './quizcard';
import React from 'react';
import useFetchQuiz from "../services/fetchquiz"

const Dashboard = () => {


    const {quizzes, loading, error} = useFetchQuiz();

    if(loading)
    {
        return <div>Loading...</div>;
    }

    if(error)
    {
        return <div>Error: {error}</div>;
    }
    return (

    <div>
        <h1 className= "title"> Quizzes de MedQuest </h1>
    
    <div className= "dashboard-container">
    {quizzes.map((quiz:{id:string, title:string, description:string, number_questions:number}) =>(
    <QuizCard
        key= {quiz.id}
        title= {quiz.title}
        description= {quiz.description}
        preguntas= {quiz.number_questions}
        btnText="Empezar"
        link= {`/quiz/${quiz.id}`}
        />
    ))}


        </div>
    </div>
    ); //end of return
}; //end of dashboard

export default Dashboard;
