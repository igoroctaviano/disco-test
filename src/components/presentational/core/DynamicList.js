import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button.js";
import { withLoadingIndicator } from "../../../utils/utilities.js";

const DynamicList = ({
  onLoad,
  buttonText,
  isLoading,
  isButtonActive,
  items = [],
  itemRenderer
}) => {
  const LoadingButton = withLoadingIndicator(Button);
  return items.length > 0 ? (
    <div className="dynamic-list">
      <ul>{items.map(itemRenderer)}</ul>
      {isButtonActive ? (
        <LoadingButton
          onClick={onLoad}
          text={buttonText}
          isLoading={isLoading}
        />
      ) : null}
    </div>
  ) : null;
};

DynamicList.propTypes = {
  onLoad: PropTypes.func,
  buttonText: PropTypes.string,
  isLoading: PropTypes.bool,
  isButtonActive: PropTypes.bool,
  items: PropTypes.array,
  itemRenderer: PropTypes.func
};

export default DynamicList;
