import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./photosList.scss";

import Card from "../commons/Card";
import Preloader from "../Preloader";

import useGlobalStore from "../../hooks/useGlobalStore";
import { photosFetched } from "../../store/photos";
import { formatLinkToRoute } from "../../functions";
import routes from "../../config/routes";
import { getPhotos } from "../../services/photoService";

let isFirstLoad = true;

const PhotosList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch, photos } = useGlobalStore();

  useEffect(() => {
    if (isFirstLoad) {
      setIsLoading(true);
      isFirstLoad = false;
      getPhotos()
        .then(({ data }) => {
          dispatch(photosFetched(data));
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
          setIsLoading(false);
        });
    }
  }, [dispatch]);

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
        </>
      )}
    </section>
  );
};

export default PhotosList;
