import { Link } from "react-router-dom";


function AnimeCard(props) {

  return (
    <div className=" m-24 rounded-md py-2 my-5">
      <li className="flex flex-col divide-y divide-red-200 rounded-lg bg-white shadow shadow-orange-500">
        <img
          src={props.anime.poster}
          alt={props.anime.name}
          className="rounded-lg flex-shrink"
        />
        <div className="flex flex-1 flex-col p-8">
          <h4 className="mt-1 text-xl font-medium text-gray-900">
            {props.anime.name}
          </h4>

          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dd>{props.anime.category}</dd>
            <dd>{props.anime.rating}</dd>
            <dd>{props.anime.publisher}</dd>
          </dl>
          <Link
            to={"/anime/" + props.anime.id}
            type="button"
            className="rounded-full bg-blue-300 hover:bg-blue-700 shadow-lg shadow-blue-500/50 justify-between"
            aria-label={`More details about ${props.anime.name}`}
            role="button"
          >
            <p className="text-center">Details</p>
          </Link>
          <Link
            to={"/watchlist/" }
            type="button"
            className="rounded-full bg-blue-300 hover:bg-blue-700 shadow-lg shadow-blue-500/50 justify-between me-6 px-2"
            aria-label={`Your Watchlist`}
            role="button" 
          >
            <p className="text-center">Add</p>
          </Link>

        </div>
      </li>
    </div>
  );
}
export default AnimeCard;
