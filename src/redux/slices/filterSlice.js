import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  choosen: "all",
  range: 1000,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    SET_ACTIVE_CATEGORY(state, { type, payload }) {
      state.choosen = payload;
    },
    SET_RANGE(state, { type, payload }) {
      state.range = payload
    },
  },
});

export const { SET_ACTIVE_CATEGORY , SET_RANGE } = filterSlice.actions;

export default filterSlice.reducer;
