import { SearchMovies } from 'components/SearchMovies';
import {  useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviebyQuery } from 'components/api';


const Movies = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const filter = searchParams.get("filter");
   

    useEffect(() => {
    if(!filter) {return;};
    getMoviebyQuery(filter).then((data) => {
    setMovies(prevState=> { 
        if(prevState === data.results){
        return ;
    }
    return data.results;})
})

    }, []);

return(
        <SearchMovies movies={movies} setMovies={setMovies}/>
    )
}

export default Movies;
