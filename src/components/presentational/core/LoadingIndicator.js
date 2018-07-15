import React from "react";
import loadingIcon from "../../../assets/img/loader.gif";

const LoadingIndicator = () => (
  <div className="loading-indicator">
    <img src={loadingIcon} alt="Loading Indicator" />
  </div>
);

export default LoadingIndicator;
