import { useState, useEffect } from 'react';
import type { Quiz } from '../pages/api/quizzes/[quizId]'; // Adjust the path based on your actual file structure
import type {Question} from '../pages/api/quizzes/[quizId]'; // Adjust the path based on your actual file structure}
import { fetchQuizId } from '../services/fetchQuizId';

const QuizPage= ({ quizId} : {quizId:string}) => {
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error,setError] = useState <string | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    useEffect(()=> {
      const loadQuiz= async() => {
        setLoading(true);
        const data = await fetchQuizId(quizId);

        if(data){
          setQuiz(data);
        }else{
          setError("No se puede cargar el quiz");
          }
          setLoading(false);
      };

      loadQuiz();
      
    
    },[quizId]);

    if(loading)return <p> Cargando </p>
    if(error) return <p> Error: {error}</p>
    if( !quiz) return <p> Quiz not found</p>
  
    return (
      <div>
        <h1>{quiz.title}</h1>

        <div>
          <h4> {quiz.questions[currentQuestion].question}</h4>
          <ul>
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>

        <div>
        <button
          onClick={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
          disabled={currentQuestion === 0}
        >
          Anterior
        </button>
        <button
          onClick={() =>
            setCurrentQuestion((prev) =>
              Math.min(prev + 1, quiz.questions.length - 1)
            )
          }
          disabled={currentQuestion === quiz.questions.length - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};


export default QuizPage;