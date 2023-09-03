const ACTIONS = {
    ADD_WATCHLIST_ANIME: 'addWatchlistAnime',
    REMOVE_WATCHLIST_ANIME: "REMOVE_WATCHLIST_ANIME",
};

const addWatchlistAnime = (anime) => {
    return {
        type: ACTIONS.ADD_WATCHLIST_ANIME,
        payload: { anime },
        id: anime,
    };
};

const removeWatchListAnime = (animeId) =>{
    return{
        type: ACTIONS.REMOVE_WATCHLIST_ANIME,
        id: animeId,
    };
}

export { ACTIONS, addWatchlistAnime, removeWatchListAnime };