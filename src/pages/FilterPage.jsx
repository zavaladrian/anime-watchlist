import { useState } from "react";
import AnimeCard from "../components/AnimeCard";
import { FadeIn } from "../components/FadeIn";

export default function FilterPage({animesList, dispatch, watchlist}) {
  const [toptenFilter, settoptenFilter] = useState("All")
  let filteredAnimes

  if (toptenFilter === "All") {
    filteredAnimes = animesList
  } else {
    filteredAnimes =animesList.filter(anime => anime.topten.includes(toptenFilter))
  }

  return (
    <div className="text-center row-auto inset-0 ">
      <h2 className='text-7xl m-4 font-semibold text-white font-nuito	'> Suggestions!</h2>

      <div className="sm:flex sm:justify-center sm:flex-wrap my-5 flex-auto "> 
        <button
          type="button"
          className="rounded bg-pink-500 py-1 text-l font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-12 sm:px-8"
          onClick={() => settoptenFilter("All")}
        >
          All
        </button>
        <button
          type="button"
          className="rounded bg-pink-500  py-1 text-l font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-8 sm:px-12"
          onClick={() => settoptenFilter("IMBD")}
        >
          IMBD's Top Ten
        </button>
        <button
          type="button"
          className="rounded bg-pink-500  py-1 text-l font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-8 sm:px-12"
          onClick={() => settoptenFilter("CBR")}
        >
          CBR's Top Ten
        </button>
        <button
          type="button"
          className="rounded bg-pink-500  py-1 text-l font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 me-2 px-12 sm:px-8"
          onClick={() => settoptenFilter("AZ")}
        >
          Our Top Ten Suggestions!
        </button>
      </div>
<FadeIn>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
        {filteredAnimes.map((a) => (
          <AnimeCard anime={a} key={a.id} dispatch={dispatch} watchlist={watchlist} />
        ))}
      </div>
      </FadeIn>
    </div>
  );
}