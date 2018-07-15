import React from "react";

const UnorderedList = ({ items = [], itemRenderer }) => <ul>{items.map(itemRenderer)}</ul>;

export default UnorderedList;
