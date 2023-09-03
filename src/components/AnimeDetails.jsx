

const AnimeDetails = (props) => {
  const anime = props.anime;
  return (
    <div className="table-fixed">
      <h1 className="mt-1 text-2xl font-medium ">{anime.name}</h1>
      <h2 className="mt-1 flex flex-grow flex-col justify-between space-y-3 font-bold">
        <p className='text-lg text-red-600'> Category: </p> {anime.category}
         <p className='text-lg text-red-600'> Publisher: </p>{anime.publisher}
         <p className='text-lg text-red-600'>About: </p> {anime.text}
         <p className='text-lg text-red-600'>Episodes: </p> {anime.episodecount}
         <p className='text-lg text-red-600'>Available On: </p> {anime.available}
      </h2>
      
    </div>
  );
};

export default AnimeDetails;
