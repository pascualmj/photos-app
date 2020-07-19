import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./photosList.scss";

import Card from "../commons/Card";
import Preloader from "../Preloader";
import Button from "../commons/Button";
import Alert from "../commons/Alert";

import useGlobalStore from "../../hooks/useGlobalStore";
import { fetchPhotos, fetchMorePhotos } from "../../store/photos";
import { formatLinkToRoute } from "../../functions";
import { FETCH_ERROR_PHOTOS } from "../../config/constants";
import routes from "../../config/routes";

let isFirstLoad = true;
let scrollPosition = 0;

const PhotosList = () => {
  const {
    dispatch,
    photos,
    photosLoading,
    photosError,
    photosLoadingMore,
    photosErrorMore,
    photosLastPageReached,
  } = useGlobalStore();

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
    if (isFirstLoad) {
      isFirstLoad = false;
      dispatch(fetchPhotos());
    }
  }, [dispatch]);

  const loadMoreData = () => {
    scrollPosition = window.pageYOffset;
    dispatch(fetchMorePhotos());
  };

  if (photosError) return <Alert text={FETCH_ERROR_PHOTOS} type="error" />;

  return (
    <section className="photos-list">
      {photosLoading ? (
        <Preloader />
      ) : (
        <>
          <ul>
            {photos.map((photo) => (
              <li className="mb-3" key={photo.id}>
                <Link
                  to={formatLinkToRoute(routes.ROUTE_PHOTOS_DETAILS, {
                    id: photo.id,
                  })}
                >
                  <Card imgUrl={photo.download_url} text={photo.author} />
                </Link>
              </li>
            ))}
          </ul>
          {photosErrorMore ? (
            <Alert text={FETCH_ERROR_PHOTOS} type="error" className="mb-3" />
          ) : (
            photosLastPageReached || (
              <Button
                text={photosLoadingMore ? "Loading..." : "See more photos"}
                handleClick={loadMoreData}
                className="mb-3"
                disabled={photosLoadingMore}
              />
            )
          )}
        </>
      )}
    </section>
  );
};

export default PhotosList;
