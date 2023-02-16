import {Link, Outlet} from 'react-router-dom';
import {useParams, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getMovieById,  } from "components/api";

const MovieDetails = () => {
   const params = useParams();
   const [movie, setMovie] = useState({});
   const location = useLocation();
  
 

useEffect(() => {

    getMovieById(params.movieId)
    .then((movie) => setMovie(movie))
    .catch(err => console.log(err));
  
}, [params.movieId]);


const buttonLocation =(props) => {
  // if (!location){
  //    return;
  // }
  // else 
  console.log(location);
  if (!location || location.state.from !== "/") {
    return  <Link to={location.state.from} >Go Back</Link>;
  }
  return <Link to="/" >Go Back</Link>;
}


  return (
  
    <div>
      {buttonLocation()}
      <h3>{movie.title}</h3>
      <p> User Score: {movie.vote_average}</p>
      <h4>Overview</h4>
      <p> {movie.overview}</p>
      <h4>Genres</h4>
      <ul>
        {movie.genres && movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
     { movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width="300px" />}
<ul>
       <li> <Link to={"cast"}> Cast</Link></li>
       <li><Link to={`reviews`}> Reviews</Link></li> 
        <Outlet />
 </ul>  
    </div>
  );
}

export default MovieDetails;