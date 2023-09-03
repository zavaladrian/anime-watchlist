import { Link } from "react-router-dom";
import { FadeIn } from "../components/FadeIn";

function RandomAnimePage({ animesList }) {
  const randomAnime = animesList[Math.floor(Math.random() * animesList.length)];
  return (
    <div className="text-center">
      <br />
      <h1 className="animate-text bg-gradient-to-r from-white via-pink-300 to-red-900 bg-clip-text text-transparent text-5xl font-black font-mono">You should watch...</h1>
      <br />
      <FadeIn>
      <h2 className=" text-7xl underline decoration-pink-500 hover:text-white font-nuito">
        {" "}
        {randomAnime.name}{" "}
      </h2>
      </FadeIn>
      <br />
      <br />
      <FadeIn>
      <div className="flex justify-center ">
      <img src={randomAnime.poster} alt={randomAnime.name} className='object-scale-down h-1/2 w-1/2 rounded-lg border-solid border-2 border-indigo-600 shadow-lg' />
      </div>
      </FadeIn>
      <br />
      <br />
      <FadeIn>
      <p className="text-3xl bg-white bg-opacity-50 box-content h-50 w-45 p-5 border-4">{randomAnime.text}</p>
      </FadeIn>
      <br />
      <FadeIn>
      <p className="text-2xl bg-white bg-opacity-50 py-3 px-3 mx-10 my-2 border-4"> This series has {randomAnime.episodecount}.</p>
      </FadeIn>
      <br />
      <br />
      <Link to="/random">
      {/* <button type="button" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded space-y-5 hover:animate-spin' onClick={() => window.location.reload(false)}>Try Again!</button> */}
      </Link>
     
    </div>
  );
}

export default RandomAnimePage