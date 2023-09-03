import AddShowForm from "../components/AddShowForm";
import AnimeCard from "../components/AnimeCard";

export default function WatchListPage({ dispatch, watchlistAnimes }) {
  return (
    <div >
      <div className='text-center'>
      <h2 className='animate-text bg-gradient-to-r from-white via-pink-500 to-white bg-clip-text text-transparent text-6xl text-center'>Your Watchlist</h2>
      <ul>
        {watchlistAnimes.map((anime) => {
          return (
            <li key={anime.id}>
              <AnimeCard anime={anime} dispatch={dispatch} watchlist={watchlistAnimes} key={anime.id} />
            </li>
          );
        })}
        </ul>
        </div>
        <AddShowForm dispatch={dispatch} />
    
    </div>
  );
}
