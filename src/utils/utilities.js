import React from "react";

/* Components */
import LoadingIndicator from "../components/presentational/LoadingIndicator.js";

export const withLoadingIndicator = Component => ({ isLoading, ...props }) =>
  isLoading ? <LoadingIndicator /> : <Component {...props} />;