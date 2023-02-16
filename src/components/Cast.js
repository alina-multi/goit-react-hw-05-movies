import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "components/api";

 const Cast = () => {
   const param =  useParams();
   const [cast, setCast] = useState([]);

    useEffect(() => {
        getMovieCast(param.movieId)
        .then((cast) => setCast(cast.cast))
        .catch(err => console.log(err));
}, [param.movieId]);
    

    return (
        <div>
            <h1>Cast</h1>
        {cast.map((actor)=> <li key={actor.id}>{actor.name}</li>)}
        </div>
    )
}

export default Cast;