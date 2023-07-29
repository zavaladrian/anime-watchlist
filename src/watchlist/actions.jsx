const ACTIONS = {
    ADD_WATCHLIST_ANIME: 'addWatchlistAnime',
};

const addWatchlistAnime = (anime) => {
    return {
        type: ACTIONS.ADD_WATCHLIST_ANIME,
        payload: { anime }
    };
};

export { ACTIONS, addWatchlistAnime };