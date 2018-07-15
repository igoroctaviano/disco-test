import React from "react";
import { LoadingIndicator } from "../components/presentational/index.js";

export const withLoadingIndicator = Component => ({ isLoading, ...props }) =>
  isLoading ? <LoadingIndicator /> : <Component {...props} />;