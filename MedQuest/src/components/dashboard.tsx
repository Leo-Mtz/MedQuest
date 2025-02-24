import QuizCard from './quizcard';

const Dashboard = () => {
    return (

    <div className= "dashboard-container">
        <h1> Quizzes </h1>
    <QuizCard
    imgSrc="https://www.medquest.com/images/quiz-card-img.png" 
    imgAlt="Quiz"
    title= "Quiz de Anatomia"
    description= "Este es un quiz sencillo de anatomia"
    btnText="Empezar"
    link= "/"

        />
    </div>
    );
};

export default Dashboard;
