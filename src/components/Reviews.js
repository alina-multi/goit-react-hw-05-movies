import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "components/api";

 const Reviews = () => {
    const param =  useParams();
    const [reviews, setReviews] = useState([]);
   

    useEffect(() => {
        getMovieReviews(param.movieId)
        .then((reviews) => setReviews(reviews.results))
        .catch(err => console.log(err))}
        , [param.movieId]);
    

    return (
        <div>
            {reviews.length > 0 ? reviews.map((review)=> <li key={review.id}>{review.author}: {review.content}</li>) : <p>We don't have any reviews for this movie</p>}
            
        </div>
    )
}

export default Reviews;