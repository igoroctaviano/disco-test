import React from "react";

const ArtistItem = ({ title, onClick, artist }) => (
  <li onClick={() => onClick(artist)}>
    {title}
  </li>
);

export default ArtistItem;
