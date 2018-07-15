import React from "react";
import UnorderedList from "./../../src/components/presentational/core/UnorderedList.js";
import renderer from "react-test-renderer";
import { items, itemRenderer } from "./mocks.js";

test("renders correctly", () => {
  const tree = renderer
    .create(<UnorderedList items={items} itemRenderer={itemRenderer} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
