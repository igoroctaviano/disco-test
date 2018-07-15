import React from "react";
import PropTypes from 'prop-types';

const UnorderedList = ({ items = [], itemRenderer }) => <ul>{items.map(itemRenderer)}</ul>;

UnorderedList.propTypes = {
  items: PropTypes.array,
  itemRenderer: PropTypes.func
};

export default UnorderedList;
