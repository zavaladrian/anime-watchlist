const ACTIONS = {
    ADD_WATCHLIST_ANIME: 'addWatchlistAnime',
};

const addWatchlistAnime = (anime) => {
    return {
        type: ACTIONS.ADD_WATCHLIST_ANIME,
        payload: { anime }
    };
};

const removeWatchListAnime = (anime) =>{
    return{
        type: ACTIONS.REMOVE_WATCHLIST_ANIME,
        playload: { anime}
    };
}

export { ACTIONS, addWatchlistAnime, removeWatchListAnime };