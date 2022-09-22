import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    SET_DATA(state, { type, payload }) {
        state.products = payload;
    },
  },
});

export const {SET_DATA} = dataSlice.actions;

export default dataSlice.reducer;
