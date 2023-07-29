import { Link } from "react-router-dom";
import AnimeDetails from "./AnimeDetails";

function AnimeCard(props) {
  const anime = props.anime;

  return (
    <div className=" m-24 rounded-md py-2 my-5">
      <li className="flex flex-col divide-y divide-red-200 rounded-lg bg-white shadow shadow-orange-500">
        <img
          src={anime.poster}
          alt={anime.name}
          className="rounded-lg flex-shrink"
        />
        <div className="flex flex-1 flex-col p-8">
          <AnimeDetails anime={anime} />
          <div className='justify-between text-center space-x-4 space-y-4 '>
          <Link
            to={"/anime/" + anime.id}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            aria-label={`More details about ${anime.name}`}
            role="button"
          >
            <p className="text-center">Details</p>
          </Link>
          <Link
            to={"/watchlist/"}
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            aria-label={`Your Watchlist`}
            role="button"
          >
            <p className="text-center">Add</p>
          </Link>
          </div>
        </div>
      </li>
    </div>
  );
}
export default AnimeCard;