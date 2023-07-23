// import { configureStore, createSlice } from "@reduxjs/toolkit";


// //initial State
// const watchListSlice = createSlice({
//     show: 'show',
//     initialState: [],
//     reducers: {
//         addShow(state, action) {
//             state.push(action.payload)
//         },
//         removeShow(state, action){

//         }
//     }
// })

// const store = configureStore({
//     reducer: { show: watchListSlice.reducer }
// })

// export { store }
// export const { addShow } = watchListSlice.actions;

//initial State
const initialState = {
    watchlist: []
};