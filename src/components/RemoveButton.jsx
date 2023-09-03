import { removeWatchListAnime } from "../watchlist/actions";

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

export default RemoveButton