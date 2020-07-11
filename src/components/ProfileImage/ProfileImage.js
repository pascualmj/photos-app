import React from "react";
import PropTypes from "prop-types";
import "./profileImage.scss";

const ProfileImage = ({ imgUrl, alt, className = "" }) => {
  return (
    <figure className="profile-image">
      <img src={imgUrl} alt={alt} />
    </figure>
  );
};

ProfileImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProfileImage;
