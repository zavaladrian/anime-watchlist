import AddShowForm from "../components/AddShowForm";
import AnimeCard from "../components/AnimeCard";



export default function WatchListPage({ dispatch, watchlistAnimes }) {
  return (
    <div>   
      
      <h2 className='animate-text bg-gradient-to-r from-white via-pink-500 to-white bg-clip-text text-transparent text-6xl text-center py-3'>Your Watchlist</h2>

      <div className=' rounded overflow-hidden shadow-lg text-center'>
        {watchlistAnimes.map((anime) => {
          return (
            <li key={anime.id}>
              <AnimeCard anime={anime} dispatch={dispatch} watchlist={watchlistAnimes} key={anime.id} />
            </li>
          );
        })}
        </div>
        <br />
        <div className='text-center'>
        
        <AddShowForm dispatch={dispatch} />
        </div>
    </div>
  );
}
