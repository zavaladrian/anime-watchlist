import AddShowForm from "../components/AddShowForm";
import AnimeDetails from "../components/AnimeDetails";
import { useWatchlist } from "../watchlist/WatchListContext";
import AnimeCard from "../components/AnimeCard";

export default function WatchListPage ({ dispatch, watchlistAnimes }) {
    const { watchlist } = useWatchlist();
    return (
        <div>
             <ul>
        {watchlist.map((anime) => (
          <li key={anime.id}>
            <AnimeCard anime={anime} />
          </li>
        ))}
      </ul>
            <AddShowForm dispatch={dispatch} />
            {watchlistAnimes.map(watchlistAnime => {
                return (
                    <div key={watchlistAnime.name}>
                        <AnimeDetails anime={watchlistAnime} key={watchlistAnime.name} />
                    </div>
                    
                );
            })}
        </div>
    );
};