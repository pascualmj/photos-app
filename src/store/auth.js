import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: JSON.parse(localStorage.getItem("userData"))
      ? true
      : false,
    userData: JSON.parse(localStorage.getItem("userData")) || {},
  },
  reducers: {
    loggedIn: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    loggedOut: (state, action) => {
      state.isAuthenticated = false;
      state.userData = {};
      localStorage.removeItem("userData");
    },
  },
});

// Actions
export const { loggedIn, loggedOut } = slice.actions;

// Reducer
export default slice.reducer;
