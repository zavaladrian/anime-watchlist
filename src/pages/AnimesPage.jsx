import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { addWatchlistAnime } from "../watchlist/actions";

export default function AnimesPage({ animesList, dispatch }) {
  let { animeId } = useParams();
  animeId = parseInt(animeId);

  const animes = animesList.find((a) => a.id === animeId);

  if (!animes) {
    return <h2> Anime Not Found</h2>;
  }

  const handleAddToWatchlist = () => {
    dispatch(addWatchlistAnime({ anime: animes }));
  };

  return (
    <div className="text-center">
      <br />
      <h3 className="text-6xl text-black">{animes.name}</h3>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={animes.poster}
          alt={animes.name}
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>
      <br />
      <br />
      <p className="text-5xl text-black">{animes.aboutText}</p>
      <br />
      <p className="text-3xl text-opacity-80">
        This show has a {animes.rating} rating
      </p>
      <br />
      <div className="space-x-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-grab"
          onClick={handleAddToWatchlist}
          aria-label="Add to Watchlist and go to Watchlist"
        >
          <p className="text-center">Add to Watchlist</p>
        </button>

        <Link to="/watchlist">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            <p className="text-center">Go to Watchlist</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
