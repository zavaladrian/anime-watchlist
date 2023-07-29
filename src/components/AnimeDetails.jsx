const AnimeDetails = (props) => {
    const anime = props.anime;
    return (
      <>
      <h4 className="mt-1 text-xl font-medium text-gray-900">
        {anime.name}
      </h4>
  
      <dl className="mt-1 flex flex-grow flex-col justify-between">
        {/* <dd>{anime.category}</dd> */}
        <dd>{anime.rating}</dd>
        <dd>{anime.publisher}</dd>
      </dl>
    </>
    );
  };
  
  export default AnimeDetails;