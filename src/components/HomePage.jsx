import { useState } from "react";
import AnimeCard from "./AnimeCard";

export default function HomePage({ animesList}) {
  const [ratingFilter, setRatingFilter] = useState("All")

  let filteredAnimes

  if (ratingFilter === "All") {
    filteredAnimes = animesList
  } else {
    filteredAnimes =animesList.filter(anime => anime.rating === ratingFilter)
  }

  return (
    <div>
      <div>
        <button
          type="button"
          className="rounded bg-indigo-600 px-2 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2"
          onClick={() => setRatingFilter("All")}>All</button>
        <button
          type="button"
          className="rounded bg-indigo-600 px-2 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2"
          onClick={() => setRatingFilter("TV-PG")}>TV-PG
        </button>
        <button
          type="button"
          className="rounded bg-indigo-600 px-2 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2"
          onClick={() => setRatingFilter("TV-14")}>TV-14</button>
        <button
          type="button"
          className="rounded bg-indigo-600 px-2 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2"
          onClick={() => setRatingFilter("TV-MA")}>TV-MA</button>
       </div>
       { filteredAnimes.map( a => <AnimeCard anime={a} />)} 
    </div>
  );
}
