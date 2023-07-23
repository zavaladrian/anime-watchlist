import { useState } from "react";
import AnimeCard from "../components/AnimeCard";


export default function FilterPage({animesList}) {
  const [ratingFilter, setRatingFilter] = useState("All")

  let filteredAnimes

  if (ratingFilter === "All") {
    filteredAnimes = animesList
  } else {
    filteredAnimes =animesList.filter(anime => anime.rating === ratingFilter)
  }

  return (
    
      <div className= " text-center row-auto inset-0">
        <h2> Filter By Ratings! </h2>
        <button
          type="button"
          className=" justify-center rounded bg-indigo-600  py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-24"
          onClick={() => setRatingFilter("All")}>All</button>
        <button
          type="button"
          className="rounded bg-indigo-600  py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-24"
          onClick={() => setRatingFilter("TV-PG")}>TV-PG
        </button>
        <button
          type="button"
          className="rounded bg-indigo-600  py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-24"
          onClick={() => setRatingFilter("TV-14")}>TV-14</button>
        <button
          type="button"
          className="rounded bg-indigo-600 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-24"
          onClick={() => setRatingFilter("TV-MA")}>TV-MA</button>
       
       
       { filteredAnimes.map( a => <AnimeCard anime={a} />)} 
      
    </div>
  );
}
