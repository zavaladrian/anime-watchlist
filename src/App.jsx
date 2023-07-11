import { useState } from "react";
import { TEST_ANIMES } from "./TEST_ANIMES";
import HomePage from "./components/HomePage";
import RandomAnime from "./components/RandomAnime";
import { Link, Route, Routes } from "react-router-dom";


function App() {
  const [animesList, setAnimesLists]= useState( TEST_ANIMES )

  return (
    <div>
      <h1 className=" text-orange-500 text-6xl">Anime List</h1>
      <Link to="/" type="button" className=" rounded bg-blue-300 me-3 px-2">Home</Link>
      <Link to="/random" type="button" className=" rounded bg-blue-300 px-1 ">Random</Link>
        <Routes>
          <Route path="/" element={ <HomePage animesList={animesList} />} />
          <Route path="/random" element={ <RandomAnime animesList={animesList} />}/>
        </Routes>      
    </div>
  );
}

export default App;
