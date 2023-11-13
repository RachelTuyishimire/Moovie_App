export const searchMovies = async(query : string) =>{
    try{
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;
      console.log(apiKey);
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=275df3a012fb3f40f9b17e61610c614a&query=${query}`)
      if(!response.ok){
        throw new Error('Network response was not ok') ;
      }
      return response.json();
  
  
    } catch(error){
      console.error("Error searching movies :" , error);
      throw error;
    }
  
  };