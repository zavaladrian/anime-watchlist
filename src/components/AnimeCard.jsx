function AnimeCard(props) {
  return (
    <div>
      <h4>{props.anime.name}</h4>
      <p>{props.anime.poster} </p>
      <p>{props.anime.category}</p>
      <p>{props.anime.rating}</p>
      <p>{props.anime.publisher} </p>
    </div>
  );
}

export default AnimeCard;
