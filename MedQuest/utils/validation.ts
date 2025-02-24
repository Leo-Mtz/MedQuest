/**
 * Valida que un ID sea una cadena no vacía.
 * @param id - El ID a validar.
 * @returns Verdadero si el ID es válido, falso en caso contrario.
 */
export const isValidId = (id: string): boolean => {
    return typeof id === 'string' && id.trim().length > 0;
};

/**
 * Valida que una pregunta tenga el formato correcto.
 * @param question - La pregunta a validar.
 * @returns Verdadero si la pregunta es válida, falso en caso contrario.
 */
export const isValidQuestion = (question: any): boolean => {
    if (typeof question !== 'object' || question === null) return false;
    const { id, question: text, options, answer } = question;
    return (
        isValidId(id) &&
        typeof text === 'string' &&
        Array.isArray(options) &&
        options.every(option => typeof option === 'string') &&
        typeof answer === 'string'
    );
};

/**
 * Valida que un quiz tenga el formato correcto.
 * @param quiz - El quiz a validar.
 * @returns Verdadero si el quiz es válido, falso en caso contrario.
 */
export const isValidQuiz = (quiz: any): boolean => {
    if (typeof quiz !== 'object' || quiz === null) return false;
    const { id, title, points, questions } = quiz;
    return (
        isValidId(id) &&
        typeof title === 'string' &&
        typeof points === 'number' &&
        Array.isArray(questions) &&
        questions.every(isValidQuestion)
    );
};