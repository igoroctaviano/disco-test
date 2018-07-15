import React from "react";
import PropTypes from 'prop-types';

const AlbumDetails = ({ artist, title, year, thumb }) => (
  <div className="album-modal">
    <img src={thumb} alt="Album Image" />
    <div className="content">
      <div className="header">
        <p>{artist.toUpperCase()}</p>
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
      <p>Description.</p>
    </div>
  </div>
);

AlbumDetails.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  thumb: PropTypes.string
};

export default AlbumDetails;
