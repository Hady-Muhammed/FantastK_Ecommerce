import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER(state, { type, payload }) {
        state.isLoggedIn = true;
        state.email = payload.email
        state.userName = payload.userName
        state.userId = payload.userId
    },
    REMOVE_ACTIVE_USER(state,{type , payload}) {
      state.isLoggedIn = false;
      state.email = '';
      state.userName = '';
      state.userId = '';
    }
  },
});

export const {SET_ACTIVE_USER , REMOVE_ACTIVE_USER} = authSlice.actions;

export default authSlice.reducer;
