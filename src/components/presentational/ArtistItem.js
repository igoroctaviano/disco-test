import React from "react";
import PropTypes from 'prop-types';

const ArtistItem = ({ title, onClick, artist }) => (
  <li onClick={() => onClick(artist)}>
    {title}
  </li>
);

ArtistItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  artist: PropTypes.object
};

export default ArtistItem;
