import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./photosList.scss";

import Card from "../commons/Card";
import Preloader from "../Preloader";
import Button from "../commons/Button";
import Alert from "../commons/Alert";

import useGlobalStore from "../../hooks/useGlobalStore";
import { photosFetched } from "../../store/photos";
import { formatLinkToRoute, isLastPage } from "../../functions";
import { FETCH_ERROR_PHOTOS } from "../../config/constants";
import routes from "../../config/routes";
import { getPhotos } from "../../services/photoService";

let isFirstLoad = true;
let currentPage = 1;
let scrollPosition = 0;

const PhotosList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState(false);
  const { dispatch, photos } = useGlobalStore();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
    if (isFirstLoad) {
      setIsLoading(true);
      isFirstLoad = false;
      getPhotos()
        .then(({ data }) => {
          dispatch(photosFetched(data));
          setIsLoading(false);
        })
        .catch((error) => {
          setShowAlert(true);
          setIsLoading(false);
        });
    }
  }, [dispatch, location]);

  const loadMoreData = () => {
    scrollPosition = window.pageYOffset;
    if (lastPageReached) return;
    setIsLoadingMore(true);
    getPhotos(currentPage + 1)
      .then(({ headers, data }) => {
        dispatch(photosFetched(data));
        ++currentPage;
        if (isLastPage(headers.link)) setLastPageReached(true);
        setIsLoadingMore(false);
      })
      .catch((error) => {
        setLoadMoreError(true);
        setIsLoadingMore(false);
      });
  };

  if (showAlert) return <Alert text={FETCH_ERROR_PHOTOS} type="error" />;

  return (
    <section className="photos-list">
      {isLoading ? (
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
          {loadMoreError ? (
            <Alert text={FETCH_ERROR_PHOTOS} type="error" className="mb-3" />
          ) : (
            lastPageReached || (
              <Button
                text={isLoadingMore ? "Loading..." : "See more photos"}
                handleClick={loadMoreData}
                className="mb-3"
                disabled={isLoadingMore}
              />
            )
          )}
        </>
      )}
    </section>
  );
};

export default PhotosList;
