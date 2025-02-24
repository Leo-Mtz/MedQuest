//dynamic endpoint
//Endpoint generated at runtime, data can change based on request

//quiz interface
//definition of the quiz object and specification of properties and type

import type {APIRoute} from 'astro';
interface Quiz {
    id: string;
    title: string;
    points: number;
}


const quizzes: Quiz[] = [
    { id: '1', title: 'Anatomia', points: 10 },
    { id: '2', title: 'Biologia', points: 15 },
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
