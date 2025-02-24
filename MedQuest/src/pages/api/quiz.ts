//dynamic endpoint
//Endpoint generated at runtime, data can change based on request

//quiz interface
//definition of the quiz object and specification of properties and type
interface Quiz {
    id: string;
    title: string;
    numberOfQuestions: number;
}

export async function GET(){

    //array de objetos tipo quiz
    const quiz= [
        {id: '1', title: 'Anatomia', numberOfQuestions: 10},
        {id: '2', title: 'Biologia', numberOfQuestions: 15},
    ];

    //new response object that will be returned to the client in a JSON string
    return new Response(JSON.stringify(quiz), {
        status: 200, //status code for succesful request
        headers: {
            'Content-Type': 'application/json', //indicates the type of data being sent
        },
    });
}