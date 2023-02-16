import { getMoviebyQuery } from 'components/api';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useSearchParams, useLocation } from "react-router-dom";


export const SearchMovies = ({movies, setMovies}) => {
    const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);

   
    const onSearch = (e) => {
     e.preventDefault();

    const querySearch = query.trim();
    if(querySearch === "") {console.log("Введите название фильма"); return}
    getMoviebyQuery(querySearch).then((data) => {
    setMovies(data.results);
    setSearchParams({filter: querySearch})

    });
}
      return(
        <div>
            <form onSubmit={onSearch}>
            <input type="text" placeholder="Search Movies" name="movie" value={query} onChange={(e)=>setQuery(e.target.value)}/>
            <button type="submit">Search</button>
            </form>  
            {movies.length>0 && <ul> {movies.map((movie)=><li key={movie.id}> <Link to={`/movies/${movie.id}`}  state={{ from: location }}> {movie.title}</Link></li> )}</ul>}         
             </div>

             
        
    )
}