import React from "react";
import PropTypes from 'prop-types';
import UnorderedList from "./UnorderedList.js";

const SuggestiveInput = ({ onChange, items, itemRenderer, value }) => {
  return (
    <div className="suggestive-input">
      <div className="wrap">
        <span className="icon" />
        <input autoFocus onChange={onChange} value={value} />
      </div>
      {items.length > 0 ? (
        <UnorderedList items={items} itemRenderer={itemRenderer} />
      ) : null}
    </div>
  );
};

SuggestiveInput.propTypes = {
  onChange: PropTypes.func,
  items: PropTypes.array,
  itemRenderer: PropTypes.func,
  value: PropTypes.string
};

export default SuggestiveInput;
