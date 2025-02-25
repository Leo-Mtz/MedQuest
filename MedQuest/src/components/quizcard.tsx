import  React from 'react';
import "../styles/quizcard.css";


//interface for quiz card
interface QuizCardProp {
    title: string;
    description: string;
    preguntas: number;
    btnText: string;
    link: string;
}

//creation of quizcard component
 const QuizCard=({
    title,
    description,
    preguntas,
    btnText,
    link,

}: QuizCardProp ) => {
    return (
        <div className="card-container">
    
        {title && <h2 className="card-title">{title}</h2>}
        {description && <p className="card-description">{description}</p>}
        {preguntas && <p className="card-preguntas">{preguntas} preguntas</p>}
        <a href={link} className="card-btn">{btnText}</a>
        </div>
    )

}

export default QuizCard;