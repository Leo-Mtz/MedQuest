//fetches quiz by id and its questions

export async function fetchQuizId( id:string){
   try{
    const response = await fetch(`/api/quizzes/${id}`);
    if( !response.ok){
        throw new Error("Failed to fetch quiz");
    }
    const data = await response.json();
    return data;
    }catch(error){
        console.error("Error: ", error);
        return null
    }


}