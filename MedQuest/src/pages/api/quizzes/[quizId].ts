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
            id: '2',
            title: 'Biologia',
            questions: [
                { id: '1', question: 'What does NSAID stand for?', options: ['Non-Steroidal Anti-Inflammatory Drug', 'Neuro-Sensitive Acidic Inhibitor Drug', 'Nervous System Active Immune Drug'], answer: 'Non-Steroidal Anti-Inflammatory Drug' },
                { id: '2', question: 'Which organelle is known as the powerhouse of the cell?', options: ['Mitochondria', 'Nucleus', 'Ribosome'], answer: 'Mitochondria' },
                { id: '3', question: 'What is the process by which plants convert sunlight into energy?', options: ['Photosynthesis', 'Respiration', 'Fermentation'], answer: 'Photosynthesis' },
                { id: '4', question: 'Which type of blood cell is responsible for fighting infections?', options: ['White blood cells', 'Red blood cells', 'Platelets'], answer: 'White blood cells' },
                { id: '5', question: 'What is the main function of DNA?', options: ['Store genetic information', 'Transport oxygen', 'Break down food'], answer: 'Store genetic information' },
                { id: '6', question: 'Which gas do plants absorb from the atmosphere?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen'], answer: 'Carbon dioxide' },
                { id: '7', question: 'What is the largest organ in the human body?', options: ['Skin', 'Liver', 'Brain'], answer: 'Skin' },
                { id: '8', question: 'Which kingdom do bacteria belong to?', options: ['Monera', 'Fungi', 'Protista'], answer: 'Monera' },
                { id: '9', question: 'What is the main function of the large intestine?', options: ['Water absorption', 'Digestion of proteins', 'Production of bile'], answer: 'Water absorption' },
                { id: '10', question: 'Which biomolecule is primarily responsible for speeding up chemical reactions in the body?', options: ['Proteins (enzymes)', 'Carbohydrates', 'Lipids'], answer: 'Proteins (enzymes)' }
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
