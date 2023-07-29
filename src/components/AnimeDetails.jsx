const AnimeDetails = (props) => {
  const anime = props.anime;
  return (
    
      <table className="table-auto">
    <thead className="mt-1 text-xl font-medium text-gray-900">
      {anime.name}
    </thead>
    <tbody className="mt-1 flex flex-grow flex-col justify-between">
      <td>{anime.rating}</td>
      <td>{anime.publisher}</td>
      <td>{anime.aboutText}</td>
    
    </tbody>
    
    </table>
  
  );
};

export default AnimeDetails;