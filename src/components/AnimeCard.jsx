import React from "react";
import { Link } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";
import { addWatchlistAnime } from "../watchlist/actions";
import RemoveButton from "./RemoveButton";

function AnimeCard({ anime, watchlist, dispatch, }) {
  const isAddedToWatchlist = watchlist.some((item) => item.id === anime.id);

  const handleAddToWatchlist = () => {
    dispatch(addWatchlistAnime(anime));
  };

  return (
    <div
      className={`m-4 rounded-md p-2 ${
        isAddedToWatchlist ? " bg-red-300 text-black" : "bg-white "
      }`}
    >

    <li className="flex flex-col  rounded-lg shadow ">
        {isAddedToWatchlist 
        ? <img
        src={anime.poster}
        alt={anime.name}
        className="rounded-lg self-center w-96 h-auto"
      /> 
        : (
          <img
            src={anime.poster}
            alt={anime.name}
            className="rounded-lg flex-shrink hover:brightness-125"
          />
        )}
        <div className=" flex flex-1 flex-col p-4 ">
          <AnimeDetails anime={anime} />

          <div className=" text-center space-x-4 space-y-4 ">
            <Link
              to={"/anime/" + anime.id}
              type="button"
              className="bottom-0 left-0 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
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
                className=" bottom-0 right-0 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-grab"
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
