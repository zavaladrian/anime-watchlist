import { Link, NavLink, Route, Routes} from "react-router-dom";
import { TEST_ANIMES } from "../TEST_ANIMES";
import HomePage from "../components/HomePage";
import RandomAnime from "../components/RandomAnime";
import AnimesPage from "../components/AnimesPage";
import { useState } from "react";

function Navbar() {
    const [animesList, setAnimesLists]= useState( TEST_ANIMES )

    return (
      <div>
        <nav className='bg-black py-5 text-center'>
        <Link to="/" type="button" className=" rounded bg-blue-300 me-3 px-2">Home</Link>
        <Link to="/random" type="button" className=" rounded bg-blue-300 px-1 ">What should I watch tonight?</Link>
        </nav>
          <Routes>
            <Route path="/" element={ <HomePage animesList={animesList} />} />
            <Route path="/random" element={ <RandomAnime animesList={animesList} />}/>
            <Route path="/anime/:animeId" element={ <AnimesPage animesList={animesList}/>} />
          </Routes>   
        </div>
    )
}    
export default Navbar;
