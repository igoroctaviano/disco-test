import React from "react";
import DynamicList from "./../../src/components/presentational/core/DynamicList.js";
import renderer from "react-test-renderer";
import { items, itemRenderer } from "./mocks.js";

test("renders correctly", () => {
  const tree = renderer
    .create(<DynamicList items={items} itemRenderer={itemRenderer} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
