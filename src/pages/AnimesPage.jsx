import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FadeIn } from '../components/FadeIn';



export default function AnimesPage({ animesList}) {
  let { animeId } = useParams();
  animeId = parseInt(animeId);

  const animes = animesList.find((a) => a.id === animeId);

  if (!animes) {
    return <h2> Anime Not Found</h2>;
  }

  return (
    
    <div className="text-center font-mono">
      <FadeIn>
      <br />
      <h3 className="text-7xl text-black/90 italic font-bold underline decoration-sky-500/50">{animes.name}</h3>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={animes.poster}
          alt={animes.name}
          style={{ maxWidth: "75%", height: "auto" }}
        />
      </div>
      <br />
      <br />
      </FadeIn>
      <FadeIn>
      <p className="py-4 mx-7 text-3xl text-center text-black bg-white bg-opacity-70">{animes.setting}</p>
      <br />
      <br />
      </FadeIn>
      <FadeIn>
      <p className="py-4 mx-7 text-3xl text-center text-black bg-white bg-opacity-70">{animes.plot}</p>
      <br />
      <br />
      </FadeIn>
      <FadeIn>
      <p className="py-4 mx-7 text-3xl text-center text-black bg-white bg-opacity-70">This series has {animes.episodecount}. You can view this anime on {animes.available}.</p>
      <br />
      <br />
      </FadeIn>
      <div className="space-x-9">
        <Link to="/filter">
          <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            <p className="text-center">Go Back to the Suggestion Page!</p>
          </button>
        </Link>
        <Link to="/watchlist">
          <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            <p className="text-center">Go Watchlist</p>
          </button>
        </Link>
        <br />
        <br />
      
      </div>
    </div>
  );
}
