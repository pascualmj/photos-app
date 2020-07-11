import axios from "axios";

const photoClient = axios.create({
  baseURL: "https://picsum.photos",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getPhotos = (page = 1) => {
  return photoClient.get(`/v2/list?page=${page}&limit=10`);
};

export const getPhoto = (id) => {
  return photoClient.get(`/id/${id}/info`);
};
