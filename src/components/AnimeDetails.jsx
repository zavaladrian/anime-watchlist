const AnimeDetails = (props) => {
  const anime = props.anime;
  return (
    <div className="table-auto">
      <h2 className="mt-1 text-xl font-medium ">TV-SHOW: {anime.name}</h2>
      <h1 className="mt-1 flex flex-grow flex-col justify-between">
        <p>Rating: {anime.rating}</p>
        <p>Publisher: {anime.publisher}</p>
        <p>About: {anime.aboutText}</p>
      </h1>
    </div>
  );
};

export default AnimeDetails;
