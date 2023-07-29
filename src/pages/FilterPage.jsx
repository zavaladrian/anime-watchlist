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
    <div className="text-center row-auto inset-0">
      <h2 className='text-4xl m-4 font-semibold animate-pulse text-red-300 font-nuito	'>Filter By TV Ratings!</h2>

      <div className="flex justify-center flex-wrap"> 
        <button
          type="button"
          className="rounded bg-red-950 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-8 sm:px-12"
          onClick={() => setRatingFilter("All")}
        >
          All
        </button>
        <button
          type="button"
          className="rounded bg-red-950 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-8 sm:px-12"
          onClick={() => setRatingFilter("TV-PG")}
        >
          TV-PG
        </button>
        <button
          type="button"
          className="rounded bg-red-950 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-8 sm:px-12"
          onClick={() => setRatingFilter("TV-14")}
        >
          TV-14
        </button>
        <button
          type="button"
          className="rounded bg-red-950 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-8 sm:px-12"
          onClick={() => setRatingFilter("TV-MA")}
        >
          TV-MA
        </button>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        {filteredAnimes.map((a) => (
          <AnimeCard anime={a} key={a.id} />
        ))}
      </div>
    </div>
  );
}