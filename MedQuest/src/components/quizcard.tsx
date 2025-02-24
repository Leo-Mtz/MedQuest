import  React from 'react';
import "../styles/quizcard.css";
import { title } from 'process';



interface QuizCard {
    title: string;
    description: string;
    btnText: string;
    link: string;
    imgSrc?: string;
    imgAlt?: string;
}

//creation of quizcard component
 const QuizCard=({
    title,
    description,
    btnText,
    link,
    imgSrc,
    imgAlt = "Quiz",

}: QuizCard ) => {
    return (
        <div className="card-container">
    
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="card-img" />}
        {title && <h2 className="card-title">{title}</h2>}
        {description && <p className="card-description">{description}</p>}
        <a href={link} className="card-btn">{btnText}</a>
        </div>
    )

}

export default QuizCard;