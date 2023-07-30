import AddShowForm from "../components/AddShowForm";
import AnimeCard from "../components/AnimeCard";

export default function WatchListPage({ dispatch, watchlistAnimes }) {
  return (
    <div>
      <ul>
        {watchlistAnimes.map((anime) => {
          return (
            <li key={anime.id}>
              <AnimeCard anime={anime} dispatch={dispatch} watchlist={watchlistAnimes}/>
            </li>
          );
        })}
        <AddShowForm dispatch={dispatch} />
      </ul>
    </div>
  );
}
