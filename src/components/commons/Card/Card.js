import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import "./card.scss";

import Text from "../Text";

const Card = React.memo(({ imgUrl, text }) => {
  return (
    <article className="card">
      <figure className="card-image">
        <LazyLoad once={true} height={0} debounce={500}>
          <img src={imgUrl} alt={text} />
        </LazyLoad>
      </figure>
      <div className="card-text">
        <Text size="small">{text}</Text>
      </div>
    </article>
  );
});

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
