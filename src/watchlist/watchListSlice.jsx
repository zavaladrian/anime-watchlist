import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./actions";

const initialState = {
  showsArray: [],
};

const watchListSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    addShow(state, action) {
      console.log("addShow action.payload:", action.payload);
      console.log("addShow state.showsArray:", state.showsArray);
      const newShow = {
        id: state.showsArray.length + 1,
        ...action.payload,
      };
      state.commentsArray.push(newShow);
    },
    removeShow(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addShow, removeShow } = watchListSlice.actions;

export const watchListReducer = watchListSlice.reducer;
