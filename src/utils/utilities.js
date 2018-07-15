import React from "react";
import { LoadingIndicator } from "../components/presentational/index.js";

export const withLoadingIndicator = Component => ({ isLoading, ...props }) =>
  isLoading ? <LoadingIndicator /> : <Component {...props} />;

export const debounce = (fn, time) => {
  let timeout;
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export const throttle = (fn, time) => {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < time) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
};