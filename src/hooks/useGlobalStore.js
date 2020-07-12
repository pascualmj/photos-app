import { useDispatch, useSelector } from "react-redux";

const useGlobalStore = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.userData);
  const photos = useSelector((state) => state.entities.photos.list);
  const photo = useSelector((state) => state.entities.photos.details);

  return {
    dispatch,
    isAuthenticated,
    userData,
    photos,
    photo,
  };
};

export default useGlobalStore;
