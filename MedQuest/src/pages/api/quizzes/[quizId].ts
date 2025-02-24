import type { APIRoute } from 'astro';

// Quiz interface
interface Quiz {
    id: string;
    title: string;
    points: number;
    questions: Question[];
}

// Question interface
interface Question {
    id: string;
    question: string;
    options: string[];
    answer: string;
}

// Sample data for quizzes and questions
const quizzes: Quiz[] = [
    {
        id: '1',
        title: 'Anatomia',
        points: 10,
        questions: [
            { id: '1', question: 'What is the largest bone in the human body?', options: ['Femur', 'Humerus', 'Tibia'], answer: 'Femur' },
            { id: '2', question: 'How many ribs does a human have?', options: ['24', '12', '20'], answer: '24' }
        ]
    },
    {
        id: '2',
        title: 'Biologia',
        points: 15,
        questions: [
            { id: '1', question: 'What does NSAID stand for?', options: ['Non-Steroidal Anti-Inflammatory Drug', 'Neuro-Sensitive Acidic Inhibitor Drug', 'Nervous System Active Immune Drug'], answer: 'Non-Steroidal Anti-Inflammatory Drug' }
        ]
    }
];

export const GET: APIRoute = ({ params }) => {
    const { quizId } = params;
    const quiz = quizzes.find(q => q.id === quizId);

    if (!quiz) {
        return new Response(JSON.stringify({ error: `No quiz found for id: ${quizId}` }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return new Response(JSON.stringify(quiz), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

// Indicate that this route should be server-rendered
export const prerender = false;