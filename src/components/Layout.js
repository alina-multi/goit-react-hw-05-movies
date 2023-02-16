import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";

const Layout = ()=>{
    return (
        <div>
    <nav>
         <Link to="/">Home</Link>
         <Link to="/movies">Movies</Link>
         <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet /> 
          </Suspense>
    </nav>
        </div>
    
  
    )
}

export default Layout;