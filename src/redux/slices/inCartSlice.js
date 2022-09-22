import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const inCartSlice = createSlice({
  name: "inCart",
  initialState,
  reducers: {
    SET_IN_CART(state, { type, payload }) {
      state.cart.push(payload);
    },
    DELETE_FROM_CART(state, { type, payload }) {
      const index = state.cart.indexOf(payload);
      state.cart.splice(index, 1);
    },
  },
});

export const { SET_IN_CART, DELETE_FROM_CART } = inCartSlice.actions;

export default inCartSlice.reducer;
