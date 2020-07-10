import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
    photo: {},
  },
  reducers: {
    photosFetched: (state, action) => {
      state.photos.push(...action.payload);
    },
    photoFetched: (state, action) => {
      state.photo = action.payload;
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
    (photos) => photos.find((photo) => photo.id === photoId)
  );
