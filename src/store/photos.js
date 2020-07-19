import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { getPhotos, getPhoto } from "../services/photoService";
import { isLastPage } from "../functions";

const slice = createSlice({
  name: "photos",
  initialState: {
    list: [],
    details: {},
    loading: false,
    error: false,
    loadingMore: false,
    errorMore: false,
    currentPage: 0,
    lastPageReached: false,
  },
  reducers: {
    photosRequested: (photos, action) => {
      photos.loading = true;
      photos.error = false;
    },
    morePhotosRequested: (photos, action) => {
      photos.loadingMore = true;
      photos.errorMore = false;
    },
    photoRequested: (photos, action) => {
      photos.loading = true;
      photos.error = false;
    },
    photosReceived: (photos, action) => {
      photos.list.push(...action.payload.data);
      photos.currentPage += 1;
      if (isLastPage(action.payload.headers.link))
        photos.lastPageReached = true;
      photos.loading = false;
      photos.loadingMore = false;
    },
    photoReceived: (photos, action) => {
      photos.details = action.payload.data;
      photos.loading = false;
    },
    photosRequestFailed: (photos, action) => {
      photos.loading = false;
      photos.error = true;
    },
    morePhotosRequestFailed: (photos, action) => {
      photos.loadingMore = false;
      photos.errorMore = true;
    },
    photoRequestFailed: (photos, action) => {
      photos.loading = false;
      photos.error = true;
    },
  },
});

// Actions
const {
  photoReceived,
  photoRequestFailed,
  photoRequested,
  photosReceived,
  photosRequestFailed,
  photosRequested,
  morePhotosRequested,
  morePhotosRequestFailed,
} = slice.actions;

// Action Commands
export const fetchPhotos = (page) => (dispatch) => {
  dispatch(
    apiCallBegan({
      service: () => {
        return getPhotos();
      },
      onStart: photosRequested.type,
      onSuccess: photosReceived.type,
      onError: photosRequestFailed.type,
    })
  );
};

export const fetchMorePhotos = (page) => (dispatch, getState) => {
  const { currentPage, lastPageReached } = getState().entities.photos;

  if (lastPageReached) return;

  dispatch(
    apiCallBegan({
      service: () => {
        return getPhotos(currentPage + 1);
      },
      onStart: morePhotosRequested.type,
      onSuccess: photosReceived.type,
      onError: morePhotosRequestFailed.type,
    })
  );
};

export const fetchPhoto = (id) => (dispatch, getState) => {
  console.log(getState);
  const photoFromStore = getState().entities.photos.list.find(
    (photo) => photo.id === id
  );

  if (photoFromStore) {
    dispatch(photoReceived({ data: photoFromStore }));
  } else {
    dispatch(
      apiCallBegan({
        service: () => {
          return getPhoto(id);
        },
        onStart: photoRequested.type,
        onSuccess: photoReceived.type,
        onError: photoRequestFailed.type,
      })
    );
  }
};

// Reducer
export default slice.reducer;
