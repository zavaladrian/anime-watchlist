import { Link, NavLink, Route, Routes} from "react-router-dom";
import { TEST_ANIMES } from "../Lists/TEST_ANIMES";
import  FilterPage from "../pages/FilterPage";
import RandomAnime from "../components/RandomAnime";
import AnimesPage from "../pages/AnimesPage";
import WatchListPage from "../pages/WatchListPage";
import HomePage from "../pages/HomePage";
import { useState } from "react";

function Navbar() {
    const [animesList, setAnimesLists]= useState( TEST_ANIMES )

    return (
      <div className=' bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 '>
        <nav className='bg-black py-5 text-center'>
        <Link to="/" type="button" className=" rounded bg-blue-300 me-6 px-2">Home</Link>
        <Link to="/filter" type="button" className=" rounded bg-blue-300 me-6 px-2">Top Ten Lists!</Link>
        <Link to="/watchlist" type="button" className=" rounded bg-blue-300 me-6 px-2">Watch List</Link>
        <Link to="/random" type="button" className=" rounded bg-blue-300 px-1 ">What should I watch tonight?</Link>
        </nav>
          <Routes>
          <Route path="/" element={ <HomePage animesList={animesList} />} />
            <Route path="/filter" element={ <FilterPage animesList={animesList} />} />
            <Route path="/random" element={ <RandomAnime animesList={animesList} />}/>
            <Route path="/anime/:animeId" element={ <AnimesPage animesList={animesList}/>} />
            <Route path="/watchlist" element={ <WatchListPage animesList={animesList} />}/>
          </Routes>   
        </div>
    )
}    
export default Navbar;
