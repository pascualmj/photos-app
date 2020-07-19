import { useDispatch, useSelector } from "react-redux";

const useGlobalStore = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.userData);
  const photos = useSelector((state) => state.entities.photos.list);
  const photo = useSelector((state) => state.entities.photos.details);
  const photosLoading = useSelector((state) => state.entities.photos.loading);
  const photosError = useSelector((state) => state.entities.photos.error);
  const photosLoadingMore = useSelector(
    (state) => state.entities.photos.loadingMore
  );
  const photosErrorMore = useSelector(
    (state) => state.entities.photos.errorMore
  );
  const photosLastPageReached = useSelector(
    (state) => state.entities.photos.lastPageReached
  );

  return {
    dispatch,
    isAuthenticated,
    userData,
    photos,
    photo,
    photosLoading,
    photosError,
    photosLoadingMore,
    photosErrorMore,
    photosLastPageReached,
  };
};

export default useGlobalStore;
