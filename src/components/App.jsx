import {Routes, Route} from 'react-router-dom';
import { lazy } from "react";
import Layout from './Layout';

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Reviews = lazy(() => import("./Reviews"));


export const App = () => {
  return (
    <div>  
     <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies/>}>  
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails/>} >
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
        </Route>
     </Routes>
    </div>
  );
};
