import React from "react";

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

export default AlbumDetails;
