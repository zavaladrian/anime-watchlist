// AnimeCard.js
import React from "react";
import { Link } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";
import { removeWatchListAnime, addWatchlistAnime} from "../watchlist/actions"



function RemoveButton({ anime, dispatch }) {
  const handleRemove = () => {
    dispatch(removeWatchListAnime(anime.id));
  };


  return (
    <button
      onClick={handleRemove}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      aria-label="Remove from Watchlist"
    >
      <p className="text-center">Remove</p>
    </button>
  );
}

function AnimeCard({ anime, watchlist, dispatch }) {
  const isAddedToWatchlist = watchlist.some((item) => item.id === anime.id);

  const handleAddToWatchlist = () => {
    dispatch(addWatchlistAnime(anime));
  }; 

  return (
     <div
      className={`m-4 rounded-md p-2 ${
        isAddedToWatchlist ? "bg-gray-100" : "bg-white"
      }`}
    >
      <li className="flex flex-col divide-y divide-red-200 rounded-lg shadow ">
        {isAddedToWatchlist ? null : (
          <img
            src={anime.poster}
            alt={anime.name}
            className="rounded-lg flex-shrink hover:sepia"
          />
        )}
        <div className="flex flex-1 flex-col p-4">
          <AnimeDetails anime={anime} />
          <div className="justify-between text-center space-x-4 space-y-4 ">
            <Link
              to={"/anime/" + anime.id}
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              aria-label={`More details about ${anime.name}`}
              role="button"
            >
              <p className="text-center">Details</p>
            </Link>


            {isAddedToWatchlist && (
            <RemoveButton anime={anime} dispatch={dispatch} />
          )}


            {!isAddedToWatchlist && (
              <Link
              onClick={handleAddToWatchlist}
              type="button"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-grab"
              aria-label={`Your Watchlist`}
              role="button"
            >
                <p className="text-center">Add</p>
              </Link>
            )}
          </div>
        </div>
      </li>
    </div>
  );
}

export default AnimeCard;
