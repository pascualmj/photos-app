import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./photoDetails.scss";

import Text from "../commons/Text";
import Preloader from "../Preloader";

import useGlobalStore from "../../hooks/useGlobalStore";
import { photoFetched, getPhotoById } from "../../store/photos";
import routes from "../../config/routes";
import { getPhoto } from "../../services/photoService";

const PhotoDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch, photo } = useGlobalStore();
  const { id: photoId } = useParams();
  const photoFromStore = useSelector(getPhotoById(photoId));

  useEffect(() => {
    setIsLoading(true);
    if (photoFromStore) {
      dispatch(photoFetched(photoFromStore));
      setIsLoading(false);
    } else {
      getPhoto(photoId)
        .then(({ data }) => {
          dispatch(photoFetched(data));
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
          setIsLoading(false);
        });
    }
  }, [dispatch, photoId, photoFromStore]);

  return (
    <section className="photo-details">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Link to={routes.ROUTE_HOME}>&larr; Go back</Link>
          <figure>
            <LazyLoad once={true} height={0}>
              <img src={photo.download_url} alt={photo.author}></img>
            </LazyLoad>
          </figure>
          <Text size="small" color="full" weight="bold">
            ID {photo.id}
          </Text>
          <Text size="bigger" color="alternative" weight="bold" uppercase>
            {photo.author}
          </Text>
          <ul>
            <li>
              <Text color="full" weight="bold">
                Width
              </Text>
              <Text color="secondary">{photo.width} pxs</Text>
            </li>
            <li>
              <Text color="full" weight="bold">
                Height
              </Text>
              <Text color="secondary">{photo.height} pxs</Text>
            </li>
            <li>
              <Text color="full" weight="bold">
                URL
              </Text>
              <Text color="secondary">
                <a href={photo.url} rel="noopener noreferrer" target="_blank">
                  {photo.url}
                </a>
              </Text>
            </li>
            <li>
              <Text color="full" weight="bold">
                Download URL
              </Text>
              <Text color="secondary">
                <a
                  href={photo.download_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {photo.download_url}
                </a>
              </Text>
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default PhotoDetails;
