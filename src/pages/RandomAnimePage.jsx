export default function RandomAnimePage({ animesList }) {
  const randomAnime = animesList[Math.floor(Math.random() * animesList.length)];
  return (
    <div className="text-center">
      <br />
      <h1 className="text-3xl">You should watch...</h1>
      <br />
      <h2 className=" text-7xl underline decoration-pink-500 hover:text-white">
        {" "}
        {randomAnime.name}{" "}
      </h2>
      <br />
      <br />
      <div className='flex'>
      <img src={randomAnime.poster} alt={randomAnime.name} className='object-scale-down h-1/2 w-1/2' />
      </div>
      <br />
      <br />
      <p className="text-2xl">{randomAnime.text}</p>
      <button type="button" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded space-y-5' onClick={() => window.location.reload(true)}>Try Again!</button>
    </div>
  );
}