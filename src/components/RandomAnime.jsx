export default function RandomAnime({ animesList }) {
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
      <img src={randomAnime.poster} alt={randomAnime.name} />
      <br />
      <br />
      <p className="text-2xl">{randomAnime.text}</p>

      <button type="button" onClick={() => window.location.reload(true)}>Try Again!</button>
    </div>
  );
}
