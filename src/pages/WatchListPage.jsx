import AddShowForm from "../components/AddShowForm";
import AnimeDetails from "../components/AnimeDetails";

export default function WatchListPage ({ dispatch, watchlistAnimes }) {
    return (
        <>
            <AddShowForm dispatch={dispatch} />
            {watchlistAnimes.map(watchlistAnime => {
                return (
                    <div key={watchlistAnime.name}>
                        <AnimeDetails anime={watchlistAnime} key={watchlistAnime.name} />
                    </div>
                );
            })}
        </>
    );
};