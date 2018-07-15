import React from "react";
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

export default SuggestiveInput;
