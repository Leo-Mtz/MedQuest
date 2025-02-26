//dynamic endpoint
//Endpoint generated at runtime, data can change based on request

//quiz interface
//definition of the quiz object and specification of properties and type

import type {APIRoute} from 'astro';
export interface QuizCard {
    id: string;
    title: string;
    description: string
    number_questions: number;
    btnText: string;
    link: string;
    
    
}


const quizzes: QuizCard[] = [
    { id: '1', title: 'Anatomia', description: "Quiz sencillo de anatomia", number_questions: 10, btnText: "Empezar", link: "api/quizzes/1" },
    { id: '2', title: 'Farmacologia', description: "Quiz sencillo de Farmacologia", number_questions: 15 , btnText: "Empezar", link: "api/quizzes/2" },
];

export const GET: APIRoute = () => {


    //new response object that will be returned to the client in a JSON string
    return new Response(JSON.stringify(quizzes), {
        status: 200, //status code for succesful request
        headers: {
            'Content-Type': 'application/json', //indicates the type of data being sent
        },
    });
}
