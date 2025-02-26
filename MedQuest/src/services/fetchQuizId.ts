export async function fetchQuizId( id:string){
    const response = await fetch(`/api/quizzes/${id}`);
    if( !response.ok){
        throw new Error("Failed to fetch quiz");
    }
    const data = await response.json();
    return data;


}