import { ACTIONS } from "./actions";

const reducer = (watchlistAnimes, action) => {
    switch (action.type) {
        case ACTIONS.ADD_WATCHLIST_ANIME: {
            const anime = action.payload.anime;
            return [...watchlistAnimes, anime];
        }
      }
      throw Error('Unknown action: ' + action.type);
};

export default reducer;