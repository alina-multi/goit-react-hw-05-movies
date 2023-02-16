import { Link, Outlet } from "react-router-dom";
import {useState, useEffect} from "react";
import { getMovies } from "components/api";


const Home = () => { 
  const [trendingMovies, setTrendingMovies] = useState([]);

useEffect(() => {
  console.log("useEffect");
getMovies()
.then((moviesArray) => setTrendingMovies(moviesArray.results))
.catch(err => console.log(err));
}, []);


return (
 <div>
<h3>Trending Movies</h3>
<ul>
 { trendingMovies.map((movie) => (<li key={movie.id} ><Link to={`/movies/${movie.id}`} state={{ from: "/" }}>{movie.title}</Link></li>))}
 <Outlet/>
</ul>
        </div>
    )
};

export default Home;