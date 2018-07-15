import React from "react";

const UnorderedList = props => <ul>{props.items.map(props.itemRenderer)}</ul>;

export default UnorderedList;
