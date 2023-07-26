import { configureStore } from "@reduxjs/toolkit";
import { reset } from "./actions";
import { watchListReducer } from "./watchListSlice";


const store = configureStore({
    reducer: {  
        show: watchListReducer,
    }
 })

 export { store, reset } 
