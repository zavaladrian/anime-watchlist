// AnimeCard.js
import React from "react";
import { Link } from "react-router-dom";
import { useWatchlist } from "../watchlist/WatchListContext";
import AnimeDetails from "./AnimeDetails";


function RemoveButton({ animeId }) {
  const { removeFromWatchlist } = useWatchlist();

  const handleRemove = () => {
    removeFromWatchlist(animeId);
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

function AnimeCard(props) {
  const anime = props.anime;
  const { addToWatchlist, watchlist } = useWatchlist();
  const isAddedToWatchlist = watchlist.some((item) => item.id === anime.id);

  return (
    <div className={`m-4 rounded-md p-2 ${isAddedToWatchlist ? 'bg-gray-100' : 'bg-white'}`}>
      <li className="flex flex-col divide-y divide-red-200 rounded-lg shadow shadow-orange-500">
        {isAddedToWatchlist ? null : (
          <img
            src={anime.poster}
            alt={anime.name}
            className="rounded-lg flex-shrink"
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
              <RemoveButton animeId={anime.id} />
            )}
            {!isAddedToWatchlist && (
              <Link
                to={"/watchlist/"}
                onClick={() => addToWatchlist(anime)}
                type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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