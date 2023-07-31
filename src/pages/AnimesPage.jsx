import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function AnimesPage({ animesList }) {
  let { animeId } = useParams();
  animeId = parseInt(animeId);

  const animes = animesList.find((a) => a.id === animeId);

  if (!animes) {
    return <h2> Anime Not Found</h2>;
  }

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
        <Link to="/filter">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            <p className="text-center">Go Back to Filter Page</p>
          </button>
        </Link>
        <Link to="/watchlist">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            <p className="text-center">Go Watchlist</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
