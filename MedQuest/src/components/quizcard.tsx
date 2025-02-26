import  React from 'react';
import "../styles/quizcard.css";
import type { QuizCard as QuizCardTemplate } from '../pages/api/quiz';




//creation of quizcard component
 const QuizCard=({
    
    title,
    description,
    number_questions,
    btnText,
    link,

}: QuizCardTemplate ) => {
    return (
        <div className="card-container">
    
        {title && <h2 className="card-title">{title}</h2>}
        {description && <p className="card-description">{description}</p>}
        {number_questions && <p className="card-preguntas">Preguntas: {number_questions} </p>}
        <a href={link} className="card-btn">{btnText}</a>
        </div>
    )

}

export default QuizCard;