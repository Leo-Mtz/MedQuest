import QuizCard from './quizcard';

const Dashboard = () => {
    return (

    <div>
        <h1 className= "title"> Quizzes de MedQuest </h1>
    
    <div className= "dashboard-container">
       
    <QuizCard
    imgSrc="https://www.medquest.com/images/quiz-card-img.png" 
    imgAlt="Quiz"
    title= "Quiz de Anatomia"
    description= "Este es un quiz sencillo de anatomia"
    btnText="Empezar"
    link= "/"

        />

    <QuizCard
    imgSrc="https://www.medquest.com/images/quiz-card-img.png" 
    imgAlt="Quiz"
    title= "Quiz de Farmacologia"
    description= "Este es un quiz sencillo de farmacobiologia"
    btnText="Empezar"
    link= "/"

          />
        </div>
    </div>
    );
};

export default Dashboard;
