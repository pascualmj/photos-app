import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "photos",
  initialState: {
    list: [],
    details: {},
  },
  reducers: {
    photosFetched: (state, action) => {
      state.list.push(...action.payload);
    },
    photoFetched: (state, action) => {
      state.details = action.payload;
    },
  },
});

// Actions
export const { photosFetched, photoFetched } = slice.actions;

// Reducer
export default slice.reducer;

// Selectors
export const getPhotoById = (photoId) =>
  createSelector(
    (state) => state.entities.photos,
    (photos) => photos.list.find((photo) => photo.id === photoId)
  );
