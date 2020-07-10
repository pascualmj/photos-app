import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loggedIn: (state, action) => {
      state.isAuthenticated = true;
    },
    loggedOut: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

// Actions
export const { loggedIn, loggedOut } = slice.actions;

// Reducer
export default slice.reducer;
