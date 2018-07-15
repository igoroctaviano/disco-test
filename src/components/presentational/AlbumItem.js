import React from "react";
import PropTypes from 'prop-types';

const AlbumDetails = ({ title, year, thumb, onClick, album }) => (
    <li
    className="album-item"
    onClick={() => onClick(album)}
  >
    <div className="wrap">
      <img src={thumb} alt="Album Image" />
      <h3>{title}</h3>
    </div>
    <p>{year}</p>
  </li>
);

AlbumDetails.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  album: PropTypes.object
};

export default AlbumDetails;
