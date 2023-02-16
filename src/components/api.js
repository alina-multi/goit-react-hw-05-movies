const Api_Key = "eadfe21cce0a3d4cfb171c464214bb27"; // Put your API key here
const URL = `https://api.themoviedb.org/3/`;

export const getMovies = async () => {
    const response = await fetch(`${URL}trending/movie/day?api_key=${Api_Key}`);
    const data = await response.json();
    return data;
}

export const getMovieById = async (id) =>{
    const response = await fetch(`${URL}movie/${id}?api_key=${Api_Key}&language=en-US`);
   const data = await response.json();
return data;
}


export const getMoviebyQuery = async (query) =>{
    const response = await fetch(`${URL}search/movie?api_key=${Api_Key}&language=en-US&query=${query}&page=1&`);
   const data = await response.json();  
return data;
}

export const getMovieCast = async (id) =>{
    const response = await fetch(`${URL}movie/${id}/credits?api_key=${Api_Key}&language=en-US`);
   const data = await response.json();  
return data;
}

export const getMovieReviews = async (id) =>{
    const response = await fetch(`${URL}movie/${id}/reviews?api_key=${Api_Key}&language=en-US`);
   const data = await response.json();  
return data;
}

