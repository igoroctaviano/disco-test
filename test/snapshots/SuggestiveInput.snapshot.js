import React from "react";
import SuggestiveInput from "./../../src/components/presentational/core/SuggestiveInput.js";
import renderer from "react-test-renderer";
import { items, itemRenderer } from "./mocks.js";

test("renders correctly", () => {
  const tree = renderer
    .create(<SuggestiveInput items={items} itemRenderer={itemRenderer} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
