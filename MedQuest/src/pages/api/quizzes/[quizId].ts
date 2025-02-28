//API que devuelve un quiz específico según el id proporcionado en la URL.

import type { APIRoute } from 'astro';


// Quiz interface
export interface Quiz{
    id: string;
    title: string;
    questions: Question[];

}



// Question interface
export interface Question {
    id: string;
    question: string;
    options: string[];
    answer: string;
}

// Sample data for quizzes and questions
export const quizzes: Quiz[] = [
    {
        id: '1',
        title: 'Anatomia',
        questions: [
        
            { id: '1', question: '¿Cuál es el hueso más grande en el cuerpo humano?', options: ['Fémur', 'Húmero', 'Tibia'], answer: 'Fémur' },
            { id: '2', question: '¿Cuántas costillas tiene un ser humano?', options: ['24', '12', '20'], answer: '24' },
            { id: '3', question: 'Verdadero o Falso: El cuerpo humano tiene 206 huesos.', options: ['Verdadero', 'Falso'], answer: 'Verdadero' },
            { id: '4', question: '¿Cuál es la función principal de los glóbulos rojos?', options: ['Transportar oxígeno', 'Combatir infecciones', 'Digestion de alimentos'], answer: 'Transportar oxígeno' },
            { id: '5', question: 'Verdadero o Falso: El esqueleto humano tiene más de 300 huesos al nacer.', options: ['Verdadero', 'Falso'], answer: 'Verdadero' },
            { id: '6', question: '¿Qué parte del cerebro controla la memoria?', options: ['Cerebelo', 'Lóbulo frontal', 'Hipocampo'], answer: 'Hipocampo' },
            { id: '7', question: 'Verdadero o Falso: El corazón bombea alrededor de 70 mililitros de sangre por latido.', options: ['Verdadero', 'Falso'], answer: 'Verdadero' },
            { id: '8', question: '¿Qué órgano es responsable de producir insulina?', options: ['Páncreas', 'Hígado', 'Riñones'], answer: 'Páncreas' },
            { id: '9', question: '¿Cuál es el órgano más grande del cuerpo humano?', options: ['Piel', 'Hígado', 'Corazón'], answer: 'Piel' },
            { id: '10', question: 'Verdadero o Falso: Los humanos tienen cinco sentidos.', options: ['Verdadero', 'Falso'], answer: 'Verdadero' },

        ]
    },
    {
        "id": "2",
        "title": "Biología",
        "questions": [
            { "id": "1", "question": "¿Qué significa AINE?", "options": ["Antiinflamatorio No Esteroideo", "Inhibidor Ácido Neuro-Sensible", "Medicamento Activo en el Sistema Nervioso"], "answer": "Antiinflamatorio No Esteroideo" },
            { "id": "2", "question": "¿Qué orgánulo es conocido como la central energética de la célula?", "options": ["Mitocondria", "Núcleo", "Ribosoma"], "answer": "Mitocondria" },
            { "id": "3", "question": "¿Cómo se llama el proceso mediante el cual las plantas convierten la luz solar en energía?", "options": ["Fotosíntesis", "Respiración", "Fermentación"], "answer": "Fotosíntesis" },
            { "id": "4", "question": "¿Qué tipo de célula sanguínea es responsable de combatir infecciones?", "options": ["Glóbulos blancos", "Glóbulos rojos", "Plaquetas"], "answer": "Glóbulos blancos" },
            { "id": "5", "question": "¿Cuál es la función principal del ADN?", "options": ["Almacenar información genética", "Transportar oxígeno", "Descomponer los alimentos"], "answer": "Almacenar información genética" },
            { "id": "6", "question": "¿Qué gas absorben las plantas de la atmósfera?", "options": ["Dióxido de carbono", "Oxígeno", "Nitrógeno"], "answer": "Dióxido de carbono" },
            { "id": "7", "question": "¿Cuál es el órgano más grande del cuerpo humano?", "options": ["Piel", "Hígado", "Cerebro"], "answer": "Piel" },
            { "id": "8", "question": "¿A qué reino pertenecen las bacterias?", "options": ["Monera", "Fungi", "Protista"], "answer": "Monera" },
            { "id": "9", "question": "¿Cuál es la función principal del intestino grueso?", "options": ["Absorción de agua", "Digestión de proteínas", "Producción de bilis"], "answer": "Absorción de agua" },
            { "id": "10", "question": "¿Qué biomolécula es responsable principalmente de acelerar las reacciones químicas en el cuerpo?", "options": ["Proteínas (enzimas)", "Carbohidratos", "Lípidos"], "answer": "Proteínas (enzimas)" }
        ]
    }
    
    
        
];

// This is the route for getting a specific quiz
// We use the :quizId parameter to identify the quiz
export const GET: APIRoute = ({ params }) => {
    const { quizId } = params; // destructuring the params object to get the quizId
    console.log("API requested for quizId:", quizId);  // temporary log

    // Find the quiz in the quizzes array that matches the quizId
    const quiz = quizzes.find(q => q.id === quizId);

    // If we don't find a quiz with the given id
    if (!quiz) {
        return new Response(
            JSON.stringify({ error: `No quiz found for id: ${quizId}` }),
            {
                status: 404, 
                headers: {
                    'Content-Type': 'application/json', 
                },
            }
        );
    }

    // If we do find a quiz
    return new Response(
        JSON.stringify(quiz), 
        {
            status: 200, 
            headers: {
                'Content-Type': 'application/json', 
            },
    });
};

// Indicate that this route should be server-rendered
export const prerender = false;
