import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./photoDetails.scss";

import Text from "../commons/Text";
import Preloader from "../Preloader";
import Alert from "../commons/Alert";

import useGlobalStore from "../../hooks/useGlobalStore";
import { fetchPhoto } from "../../store/photos";
import routes from "../../config/routes";
import { FETCH_ERROR_PHOTOS } from "../../config/constants";

const PhotoDetails = () => {
  const { dispatch, photo, loading, error } = useGlobalStore();
  const { id: photoId } = useParams();

  useEffect(() => {
    dispatch(fetchPhoto(photoId));
  }, [dispatch, photoId]);

  if (error) return <Alert text={FETCH_ERROR_PHOTOS} type="error" />;

  return (
    <section className="photo-details">
      {loading ? (
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
